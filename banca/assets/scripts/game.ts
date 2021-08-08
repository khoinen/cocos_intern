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

        this.updateCoinsWhenShoot();
    }

    spawnFish() {
        let fish_1 = cc.instantiate(this.fish1);
        this.node.addChild(fish_1);
        fish_1.setPosition(0,0);
        fish_1.angle = -30;
    }

    updateCoinsWhenShoot() {
        let temp = parseInt(this.scores.string.replace(/ /g, ""));
        temp -= this.cannon.getComponent("cannonController").cannonPower;
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
        this.spawnFish()
    }

    start () {

    }

    // update (dt) {}

    onDestroy () {
        this.node.off('touchstart', this.spawnBullets,this);
    }
}
