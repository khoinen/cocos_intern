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
    goLeftCar: cc.Node = null;

    @property (cc.Node)
    goRightCar: cc.Node = null;

    @property
    actionDuration: number = 0;

    goLeft: cc.Tween<cc.Node> = null;
    goRight: cc.Tween<cc.Node> = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.goLeft = cc.tween(this.goLeftCar).to(this.actionDuration, {x: -3000});
        this.goRight = cc.tween(this.goRightCar).to(this.actionDuration, {x: 3000});
    }

    start () {
        
    }

    // update (dt) {}
}
