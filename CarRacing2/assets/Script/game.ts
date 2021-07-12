// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property (cc.Node)
    backgroundController: cc.Node = null ;

    @property (cc.Node)
    player: cc.Node = null ;

    isStarted: boolean
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.isStarted = false;
        this.backgroundController.getComponent("backgroundController").game = this;
        this.player.getComponent("playerController").game = this;
    }
    start () {
        
    }

    update (dt) {

    }
}
