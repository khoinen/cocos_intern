// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    coinCollect: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let anim = this.node.getComponent(cc.Animation).play();
        anim.wrapMode = cc.WrapMode.Loop;
        cc.director.getCollisionManager().enabled = true;
    }

    onCollisionEnter (other, self) {
        console.log("onCollisionEnter");
        if (other.node.name == "player") {
            self.node.destroy();
            cc.audioEngine.playEffect(this.coinCollect, false);
        }
    }

    start () {

    }

    // update (dt) {}
}
