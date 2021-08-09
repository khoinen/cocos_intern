// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    hp: number = 0;

    @property
    coinGained: number = 0;

    @property(cc.Prefab)
    web1 : cc.Prefab = null;

    @property(cc.Prefab)
    web2 : cc.Prefab = null;

    @property(cc.Prefab)
    web3 : cc.Prefab = null;
    
    @property(cc.Prefab)
    web4 : cc.Prefab = null;

    @property(cc.Prefab)
    web5 : cc.Prefab = null;

    @property(cc.Prefab)
    web6 : cc.Prefab = null;

    @property(cc.Prefab)
    web7 : cc.Prefab = null;

    isCaptured: boolean = false;

    minusHP: number = 0;


    game = null;
    // LIFE-CYCLE CALLBACKS:

    fishSwim() {
        this.node.getChildByName("scoreEffect").active = false;
        let anim = this.node.getComponent(cc.Animation);
        let animState = anim.play();
        animState.wrapMode = cc.WrapMode.Loop;
    }

    hpCalc(minus) {
        this.hp = this.hp - minus;
        console.log(this.hp);
        if (this.hp <= 0) {
            this.isCaptured = true;
        }
        if (this.isCaptured){
            let anim = this.node.getComponent(cc.Animation);
            anim.stop();
            setTimeout(() => {
                this.node.pauseAllActions();
                this.node.getChildByName("scoreEffect").active = true;
                this.node.getChildByName("scoreEffect").angle = -this.node.angle;
                this.node.getChildByName("scoreEffect").getComponent(cc.Label).string = "x" + this.coinGained.toString();
                cc.tween(this.node.getChildByName("scoreEffect")).to(0.5, {x: 0, y:40}).call(() => this.node.destroy()).start();
            }, 400);
            this.updateCoins();
        }
    }

    updateCoins() {
        let str = this.node.parent.getChildByName("score").getComponent(cc.Label).string;
        let gains = parseInt(str.replace(/ /g, ""));
        gains = gains + this.coinGained;
        console.log(gains);
        let display = "";
        let temp = gains;
        for (let i = 0; i < 6; i++){
            display = (temp % 10).toString() + display;
            temp = Math.trunc(temp/10);
        }
        this.node.parent.getChildByName("score").getComponent(cc.Label).string = display[0] + "  " +display[1] + "  " +display[2] + "  " +display[3] + "  " +display[4] + "  " +display[5];
    }

    
    spawnWeb(prefab, x, y) {
        // let power = this.cannon.getComponent("cannonController").cannonPower;
        // console.log(power);
        let webs = null;
        webs = cc.instantiate(prefab);
        this.node.parent.addChild(webs);
        webs.setPosition(x, y);
        webs.scale = 0.3;

        cc.tween(webs).to(0.3, {scale:1}).call(() => webs.destroy()).start();
    }

    onCollisionEnter(other,self) {
        console.log("onCollisionEnter");
        if (other.tag == 0){
            let intersection = new cc.Rect();
            self.world.aabb.intersection(intersection, other.world.aabb);
            other.node.destroy();
            switch (other.node.name) {
                case "bullet1" :
                    this.spawnWeb(this.web1, (intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y);
                    this.minusHP = 1;
                    break;
                case "bullet2" :
                    this.spawnWeb(this.web2, (intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y);
                    this.minusHP = 2;
                    break;
                case "bullet3" :
                    this.spawnWeb(this.web3, (intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y);
                    this.minusHP = 3;
                    break;
                case "bullet4" :
                    this.spawnWeb(this.web4, (intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y);
                    this.minusHP = 4;
                    break;
                case "bullet5" :
                    this.spawnWeb(this.web5, (intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y);
                    this.minusHP = 5;
                    break;
                case "bullet6" :
                    this.spawnWeb(this.web6, (intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y);
                    this.minusHP = 6;
                    break;
                case "bullet7" :
                    this.spawnWeb(this.web7, (intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y);
                    this.minusHP = 7;
                    break;
                default: 
                    break;
            } 
            // this.spawnWeb((intersection.x + intersection.width / 2 - this.node.parent.x), (intersection.y + intersection.height / 2)- this.node.parent.y)
        } else if (other.tag == 1) {
            console.log(self.name);
            this.scheduleOnce(() => this.hpCalc(this.minusHP));
        }
    }

    onLoad () {
        this.fishSwim();
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
    }

    start () {

    }

    // update (dt) {}
}

