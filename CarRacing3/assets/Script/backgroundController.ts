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
    cars: cc.Node = null;

    @property
    cycleDuration: number = 0;

    loop: cc.Tween<cc.Node> = null;
    moveToCrossroad: cc.Tween<cc.Node> = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let roadLoop = cc.tween()
                        .to(this.cycleDuration, {y: -1585})
                        .call(() => {
                            while (this.node.y < 0){
                                this.node.y += 1000;
                            } 
                            if (this.node.y > 0){
                                this.node.y = 0;
                            }
                        })

        this.loop = cc.tween(this.node).repeatForever(roadLoop);

        this.moveToCrossroad = cc.tween(this.node).to(5 * this.cycleDuration, {y:-6000}, {easing: 'sineOut'});
    }

    start() {

    }

    // update (dt) {}
}
