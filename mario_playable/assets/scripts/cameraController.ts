// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property(cc.Node)
    buttonGroupNode: cc.Node = null;

    @property (cc.Node)
    layer2: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    update (dt) {
        let targetPos = this.playerNode.getPosition();
        let currentPos = this.node.getPosition();
        currentPos.lerp(targetPos, 0.1, currentPos);
        currentPos.y = cc.misc.clampf(targetPos.y, 0, 1);
        currentPos.x = cc.misc.clampf(targetPos.x, 0, 5500);
        this.node.setPosition(currentPos);
        this.buttonGroupNode.setPosition(currentPos);
        this.layer2.setPosition(currentPos.x, 480);
    }
}
