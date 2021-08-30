
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    @property (cc.AudioClip)
    enemyKill: cc.AudioClip = null;

    onLoad () {
        this.node.getComponent(cc.Animation).play("enemy_idle").wrapMode = cc.WrapMode.Loop;
        cc.tween(this.node).repeatForever( 
            cc.tween()
            .by(4, {x:400})
            .delay(1)
            .call(() => this.node.scaleX = -1.5)
            .by(5, {x: -400})
            .delay(1)
            .call(() => this.node.scaleX = 1.5)
        )
        .start();
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }

    onBeginContact (contact, selfCollider, otherCollider) {
        if (otherCollider.tag == 1) { 
            this.node.getComponent(cc.Animation).play("enemy_die");
            cc.audioEngine.playEffect(this.enemyKill, false);
            this.scheduleOnce(() => this.node.destroy(), 0.1);
        }
    }

    start () {

    }

    // update (dt) {}
}
