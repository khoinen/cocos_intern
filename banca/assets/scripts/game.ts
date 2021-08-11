// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    bullet1: cc.Prefab = null;

    @property(cc.Prefab)
    bullet2: cc.Prefab = null;

    @property(cc.Prefab)
    bullet3: cc.Prefab = null;

    @property(cc.Prefab)
    bullet4: cc.Prefab = null;

    @property(cc.Prefab)
    bullet5: cc.Prefab = null;

    @property(cc.Prefab)
    bullet6: cc.Prefab = null;

    @property(cc.Prefab)
    bullet7: cc.Prefab = null;

    @property(cc.Node)
    cannon: cc.Node = null;

    @property(cc.Prefab)
    fish1: cc.Prefab = null;

    @property(cc.Prefab)
    fish2: cc.Prefab = null;

    @property(cc.Prefab)
    fish3: cc.Prefab = null;

    @property(cc.Prefab)
    fish4: cc.Prefab = null;

    @property(cc.Prefab)
    fish5: cc.Prefab = null;

    @property(cc.Prefab)
    fish6: cc.Prefab = null;

    @property(cc.Prefab)
    fish7: cc.Prefab = null;

    @property(cc.Prefab)
    shark1: cc.Prefab = null;

    @property(cc.Prefab)
    shark2: cc.Prefab = null;

    @property(cc.Label)
    scores: cc.Label = null;

    @property
    bulletSpeed: number = 0;

    game = null;

    // LIFE-CYCLE CALLBACKS:

    spawnBullets() {
        let curPower = this.cannon.getComponent("cannonController").cannonPower - 1;
        let bullets = null;
        switch (curPower) {
            case 0:
                bullets = cc.instantiate(this.bullet1);
                break;
            case 1:
                bullets = cc.instantiate(this.bullet2);
                break;
            case 2:
                bullets = cc.instantiate(this.bullet3);;
                break;
            case 3:
                bullets = cc.instantiate(this.bullet4);
                break;
            case 4:
                bullets = cc.instantiate(this.bullet5);
                break;
            case 5:
                bullets = cc.instantiate(this.bullet6);;
                break;
            case 6:
                bullets = cc.instantiate(this.bullet7);
                break;
        }
        bullets.angle = this.cannon.angle;
        this.node.getChildByName("bulletNode").addChild(bullets);
        cc.tween(bullets).to(500 / this.bulletSpeed / Math.abs(Math.sin(Math.PI/2 - (bullets.angle * Math.PI / 180))), {x: -(2000 / Math.tan(Math.PI/2 - (bullets.angle * Math.PI / 180))), y: 2000})
                            .call(() => {bullets.destroy()})
                            .start();
        
        let anim = this.node.getChildByName("cannon").children[curPower].getComponent(cc.Animation);
        anim.play();

        this.updateRemainingBullets();
    }

    spawnFish() {
        let fishType = Math.trunc( Math.random() * 8.5 );
        let radians = null;
        let fishes = null;
        switch (fishType) {
            case 0: 
                fishes = cc.instantiate(this.fish1);
                break;
            case 1: 
                fishes = cc.instantiate(this.fish2);
                break;
            case 2: 
                fishes = cc.instantiate(this.fish3);
                break;
            case 3:
                fishes = cc.instantiate(this.fish4);
                break;
            case 4: 
                fishes = cc.instantiate(this.fish5);
                break;
            case 5:
                fishes = cc.instantiate(this.fish6);
                break;
            case 6: 
                fishes = cc.instantiate(this.fish7);
                break;
            case 7: 
                fishes = cc.instantiate(this.shark1);
                break;
            case 8: 
                fishes = cc.instantiate(this.shark2);
                break;
        }
        //TODO: spawn random type of fish with random moveset

        //random spawn from left or right position

        let leftPoint = cc.v2(this.node.getChildByName("leftPoint").position.x, this.node.getChildByName("leftPoint").position.y + (Math.random() * 700) - 400 );
        let rightPoint = cc.v2(this.node.getChildByName("rightPoint").position.x, this.node.getChildByName("rightPoint").position.y + (Math.random() * 700) - 400 );

        let flag = Math.random() * 2;
        console.log(flag);
        if (flag > 1) {
            //from left to right
            this.node.addChild(fishes);
            fishes.setPosition(leftPoint.x, leftPoint.y);
            radians = Math.atan2(rightPoint.y - leftPoint.y, rightPoint.x - leftPoint.x);
            fishes.angle = (radians * 180 / Math.PI);
            cc.tween(fishes).to(25, {position: rightPoint}, {easing: 'sineOut' }).call(() => fishes.destroy()).start();
        } else if (flag < 1) {
            //from right to left
            this.node.addChild(fishes);
            fishes.setPosition(rightPoint.x, rightPoint.y);
            radians = Math.atan2(leftPoint.y - rightPoint.y, leftPoint.x - rightPoint.x);
            fishes.angle = (radians * 180 / Math.PI);
            cc.tween(fishes).to(25, {position: leftPoint}, {easing: 'sineOut' }).call(() => fishes.destroy()).start();
        }
    }

    updateRemainingBullets() {
        let bulletNumbers = this.node.getChildByName("bulletNumbers");
        let bulletType = this.cannon.getComponent("cannonController").cannonPower;
        let bullet = parseInt(bulletNumbers.children[bulletType - 1].children[0].getComponent(cc.Label).string);
        bullet -= 1;
        if (bullet < 0) {
            bullet = 5;
            this.updateCoins();
        }
        bulletNumbers.children[bulletType - 1].children[0].getComponent(cc.Label).string = bullet.toString();
    }

    updateCoins() {
        let temp = parseInt(this.scores.string.replace(/ /g, ""));
        temp -= this.cannon.getComponent("cannonController").cannonPower * 15;
        let scoreMinus = this.node.getChildByName("scoreMinus");
        scoreMinus.getComponent(cc.Label).string = "-" + (this.cannon.getComponent("cannonController").cannonPower * 15).toString();
        scoreMinus.active = true;
        cc.tween(scoreMinus).by(0.3, {y:30}).call(() => {scoreMinus.active = false}).start();
        scoreMinus.setPosition(-350,-260);
        let score = "";
        for (let i = 0; i < 6; i++){
            score = (temp % 10).toString() + score;
            temp = Math.trunc(temp/10);
        }
        this.scores.string = score[0] + "  " + score[1] + "  " + score[2] + "  " + score[3] + "  " + score[4] + "  " + score[5];
    }

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        this.node.on('touchstart', this.spawnBullets, this);
        this.schedule(() => this.spawnFish(), 1, cc.macro.REPEAT_FOREVER, 2);
    }

    start () {

    }

    // update (dt) {}

    onDestroy () {
        this.node.off('touchstart', this.spawnBullets,this);
    }
}
