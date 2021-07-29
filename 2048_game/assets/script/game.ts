// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

enum DIR { UP, DOWN, LEFT, RIGHT }

let Colors = new Map();
Colors.set("2", new cc.Color(238, 228, 218));
Colors.set("4", new cc.Color(237, 224, 200));
Colors.set("8", new cc.Color(242, 177, 121));
Colors.set("16", new cc.Color(245, 149, 99));
Colors.set("32", new cc.Color(246, 124, 95));
Colors.set("64", new cc.Color(246, 94, 59));
Colors.set("128", new cc.Color(237, 207, 114));
Colors.set("256", new cc.Color(237, 204, 97));
Colors.set("512", new cc.Color(237, 200, 80));
Colors.set("1024", new cc.Color(237, 197, 63));
Colors.set("2048", new cc.Color(237, 194, 46));
Colors.set("other", new cc.Color(0, 0, 0));

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    touchArea: cc.Node = null;

    @property(cc.Node)
    scoreUI: cc.Node = null;

    @property(cc.Node)
    layer: cc.Node = null;

    @property(cc.Node)
    gameover: cc.Node = null;

    @property(cc.Node)
    win: cc.Node = null;

    @property(cc.Node)
    gamebox: cc.Node = null;

    @property(cc.Prefab)
    tile: cc.Prefab = null;

    @property
    size: number = 0;

    @property
    actionDuration: number = 0;

    @property
    swipeMinLength: number = 20;

    topLeft: cc.Node = null;
    bottomRight: cc.Node = null;
    tiles: cc.Node = null;
    blocks: cc.Node = null;

    originPosition: any[] = [];

    previous: number[][] = [];
    data: number[][] = [];
    appearances: number[][] = [];
    from_to: number[][] = [];

    score: number = 0;

    direction: DIR = null;

    touchStartPos: any = null;

    spawnUsingPrefabs(prefab, parent, posX, posY) {
        let newNode: cc.Node = cc.instantiate(prefab);
        parent.addChild(newNode);
        newNode.active = true;
        newNode.setPosition(posX, posY);

        return newNode;
    }

    equals(a, b) {
        if (a === b) return true;
        if (a instanceof Date && b instanceof Date)
            return a.getTime() === b.getTime();
        if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
            return a === b;
        if (a.prototype !== b.prototype) return false;
        let keys = Object.keys(a);
        if (keys.length !== Object.keys(b).length) return false;
        return keys.every(k => this.equals(a[k], b[k]));
    }

    createBoard() {
        let space = (this.bottomRight.x - this.topLeft.x) / (this.size - 1);
        for (let row = 0; row < this.size; row++) {
            this.data[row] = [];
            this.appearances[row] = [];
            for (let col = 0; col < this.size; col++) {
                // Init data
                this.data[row][col] = 0;
                this.appearances[row][col] = 0;
                // Making tile
                let posX = this.topLeft.x + col * space;
                let posY = this.topLeft.y - row * space;
                this.originPosition.push({
                    x: posX,
                    y: posY
                });
                let tile = this.spawnUsingPrefabs(this.tile, this.tiles, posX, posY);
                tile.scale = 0.11;
                tile.opacity = 25;
                tile.color = new cc.Color(0, 0, 0, 255);
                // Making block for playing
                let block = this.spawnUsingPrefabs(this.tile, this.blocks, posX, posY);
                block.active = false;
            }
        }
    }

    createData() {
        let options = [];

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.data[i][j] === 0) {
                    options.push({
                        x: i,
                        y: j
                    });
                }
            }
        }

        if (options.length > 0) {
            let spot = options[Math.floor(Math.random() * options.length)];
            this.data[spot.x][spot.y] = Math.random() > 0.1 ? 2 : 4;
            this.appearances[spot.x][spot.y] = 1;
        }
    }

    flip(grid) {
        for (let i = 0; i < this.size; i++) {
            grid[i].reverse();
        }

        return grid;
    }

    rotate(grid, direction) {
        let temp = new Array(this.size).fill(0).map(() => new Array(this.size).fill(0));
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (direction === 1) {
                    temp[i][j] = grid[j][this.size - 1 - i];
                } else if (direction === -1) {
                    temp[j][this.size - 1 - i] = grid[i][j];
                }
            }
        }

        return temp;
    }

    processData() {
        this.previous = JSON.parse(JSON.stringify(this.data));

        let flipped = false, rotated = false, direction = 0;
        switch (this.direction) {
            case DIR.UP:
                direction = 1;
                this.data = this.rotate(this.data, direction);
                rotated = true;
                break;
            case DIR.DOWN:
                direction = -1;
                this.data = this.rotate(this.data, direction);
                rotated = true;
                break;
            case DIR.LEFT:
                break;
            case DIR.RIGHT:
                this.data = this.flip(this.data);
                flipped = true;
                break;
            default:
                return;
        }

        this.from_to = new Array(this.size).fill(-1).map(() => new Array(this.size).fill(-1));
        let result = new Array(this.size).fill(0).map(() => new Array(this.size).fill(0));
        for (let i = 0; i < this.size; i++) {
            let previousVal = 0, pos = 0;
            for (let j = 0; j < this.size; j++) {
                if (this.data[i][j] !== 0) {
                    if (this.data[i][j] === previousVal) {
                        result[i][pos - 1] += this.data[i][j];
                        this.score += result[i][pos - 1];
                        this.from_to[i][j] = pos - 1;
                        previousVal = 0;
                    } else {
                        result[i][pos] = this.data[i][j];
                        this.from_to[i][j] = pos;
                        previousVal = this.data[i][j];
                        pos++;
                    }
                }
            }
        }
        this.data = result;

        if (flipped) {
            this.data = this.flip(this.data);
            this.from_to = this.flip(this.from_to);
        }
        if (rotated) {
            this.data = this.rotate(this.data, direction * -1);
            this.from_to = this.rotate(this.from_to, direction * -1);
        }
    }

    updateBlocks() {
        // Animate
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.direction === DIR.LEFT || this.direction === DIR.UP) {
                    let index = this.size - j - 1;
                    if (this.direction === DIR.LEFT) {
                        if (this.from_to[i][index] !== -1) {
                            this.slideBlocks(i * this.size + index, i * this.size + this.from_to[i][index]);
                        }
                    } else {
                        if (this.from_to[index][i] !== -1) {
                            this.slideBlocks(index * this.size + i, this.from_to[index][i] * this.size + i);
                        }
                    }
                } else if (this.direction === DIR.RIGHT || this.direction === DIR.DOWN) {
                    let index = j;
                    if (this.direction === DIR.RIGHT) {
                        if (this.from_to[i][index] !== -1) {
                            this.slideBlocks(i * this.size + index, i * this.size + this.size - 1 - this.from_to[i][index]);
                        }
                    } else {
                        if (this.from_to[index][i] !== -1) {
                            this.slideBlocks(index * this.size + i, (this.size - 1 - this.from_to[index][i]) * this.size + i);
                        }
                    }
                }
            }
        }

        this.scheduleOnce(() => {
            for (let i = 0; i < this.blocks.childrenCount; i++) {
                let row = Math.trunc(i / this.size), col = i % this.size;
                let block = this.blocks.children[i];
                block.x = this.originPosition[i].x;
                block.y = this.originPosition[i].y;
                if (this.data[row][col] === 0) {
                    block.active = false;
                } else {
                    block.active = true;
                    block.children[0].color = new cc.Color(0, 0, 0, 255);
                    block.children[0].getComponent(cc.Label).string = this.data[row][col].toString();
                    block.color = Colors.get(block.children[0].getComponent(cc.Label).string);
                }
                if (this.appearances[row][col] === 1) {
                    cc.tween(block)
                        .to(0.2, { scale: 0.12 })
                        .to(0.2, { scale: 0.11 })
                        .start();
                    this.appearances[row][col] = 0;
                }
            }
        }, this.actionDuration);
        this.scoreUI.getChildByName("Score").getComponent(cc.Label).string = "SCORE: " + this.score.toString();
        this.saveHighscore();
        this.setHighscore();
    }

    slideBlocks(start, end) {
        cc.tween(this.blocks.children[start]).to(this.actionDuration, { position: this.blocks.children[end].position }).start();
    }

    isGameOver() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.data[i][j] === 0) {
                    return false;
                }
                if (i !== this.size - 1 && this.data[i][j] === this.data[i + 1][j]) {
                    return false;
                }
                if (j !== this.size - 1 && this.data[i][j] === this.data[i][j + 1]) {
                    return false;
                }
            }
        }
        return true;
    }

    isWin() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.data[i][j] === 2048) {
                    return true;
                }
            }
        }
        return false;
    }

    gameEnd(state) {
        if (!state) {
            this.gamebox.stopAllActions();
            this.layer.active = true;
            this.gameover.active = true;
            this.gameover.setPosition(0, 0);
        } else {
            this.gamebox.stopAllActions();
            this.layer.active = true;
            this.win.active = true;
            this.win.setPosition(0, 0);
            this.saveHighscore();
        }
    }

    saveHighscore() {
        let newRecord = {
            score: this.score,
        };
        let oldRecord = JSON.parse(cc.sys.localStorage.getItem("record"));
        if (oldRecord !== null && oldRecord !== undefined) {
            if(newRecord.score  > oldRecord.score) {
                cc.sys.localStorage.setItem("record", JSON.stringify(newRecord));
            }
        } else {
            cc.sys.localStorage.setItem("record", JSON.stringify(newRecord));
        }
    }

    setHighscore() {
        let record = JSON.parse(cc.sys.localStorage.getItem("record"));
        if (record !== null && record !== undefined) {
            this.scoreUI.getChildByName("Highscore").getComponent(cc.Label).string = "HI-SCORE: " + record.score;
        }
    }

    touchStart(event: cc.Event.EventTouch) {
        this.touchStartPos = event.getLocation();
    }

    touchEnd(event: cc.Event.EventTouch) {
        if (!this.touchStartPos) {
            return;
        }

        const start = this.touchStartPos;
        const end = event.getLocation();
        this.touchStartPos = null;
        event.stopPropagation();

        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const length = Math.sqrt((dx * dx) + (dy * dy));
        const verticalSwipe = Math.abs(dy) > Math.abs(dx);

        if (length < this.swipeMinLength) {
            return;
        }

        if (this.direction === null) {
            if (verticalSwipe && dy > 0) {
                console.log("Up");
                this.direction = DIR.UP;
            } else if (verticalSwipe) {
                console.log("Down")
                this.direction = DIR.DOWN;
            } else if (!verticalSwipe && dx > 0) {
                console.log("Right");
                this.direction = DIR.RIGHT;
            } else if (!verticalSwipe) {
                console.log("Left");
                this.direction = DIR.LEFT;
            }
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.topLeft = this.gamebox.children[0];
        this.bottomRight = this.gamebox.children[1];
        this.tiles = this.gamebox.children[2];
        this.blocks = this.gamebox.children[3];

        this.layer.active = false;
        this.gameover.active = false;
        this.win.active = false;
        this.createBoard();

        this.touchArea.setContentSize(3000, 2000);
        this.layer.setContentSize(5000, 5000);

        this.touchArea.on("touchstart", (event) => this.touchStart(event), this);
        this.touchArea.on("touchend", (event) => this.touchEnd(event), this);
        this.touchArea.on("touchcancel", (event) => this.touchEnd(event), this);
    }

    start() {
        this.createData();
        this.createData();
        this.updateBlocks();
        this.setHighscore();;
    }

    update(dt) {
        if (this.direction !== null) {
            this.processData();
            if (!this.equals(this.previous, this.data)) {
                this.createData();
                this.updateBlocks();
            }
            this.direction = null;
            if (this.isGameOver()) {
                this.gameEnd(false);
            } else if (this.isWin()) {
                this.gameEnd(true);
            }

        }
    }

    onDestroy() {
        this.gamebox.off("touchstart", (event) => this.touchStart(event), this);
        this.gamebox.off("touchend", (event) => this.touchEnd(event), this);
        this.touchArea.off("touchcancel", (event) => this.touchEnd(event), this);
    }
}
