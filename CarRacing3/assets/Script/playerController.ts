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
    actionDuration: number = 0;
    
    game = null;

    turnLeft: cc.Tween<cc.Node> = null;
    turnRight: cc.Tween<cc.Node> = null;
    goStraight: cc.Tween<cc.Node> = null;

    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.turnLeft = cc.tween(this.node)
                        .by(4 * this.actionDuration, {y: 700}, {easing: 'sineOut'})
                        .by(this.actionDuration, {angle: 90})
                        .by(8 * this.actionDuration, {x: -2000}, {easing: 'sineOut'});

        this.goStraight = cc.tween(this.node).by(10 * this.actionDuration, { y: 3000}, {easing: 'sineOut'});

        this.turnRight = cc.tween(this.node)
                        .by(4 * this.actionDuration, {y: 400}, {easing: 'sineOut'})
                        .by(this.actionDuration, {angle: -90})
                        .by(8 * this.actionDuration, {x: 2000}, {easing: 'sineOut'});

    }

    start () {

    }

    update (dt) {}


}
