
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class playerController extends cc.Component {

    @property
    actionDuration: number = 0;

    @property (cc.Node)
    hitEffect: cc.Node = null;
    
    game = null;

    turnLeft: cc.Tween<cc.Node> = null;
    turnRight: cc.Tween<cc.Node> = null;
    goStraight: cc.Tween<cc.Node> = null;
    changePosLeft: cc.Tween<cc.Node> = null;
    changePosRight: cc.Tween<cc.Node> = null;
    
    // LIFE-CYCLE CALLBACKS:

    onCollisionEnter (other, self) {
        console.log(self.name);
        console.log(other.name);

        let intersection = new cc.Rect();
        self.world.aabb.intersection(intersection, other.world.aabb);

        this.hitEffect.setPosition((intersection.x + intersection.width / 2) - this.game.node.x,
                                    (intersection.y + intersection.height / 2) - this.game.node.y);
        this.hitEffect.active = true;
        this.game.onHit(true);
    }

    onLoad () {
        cc.director.getCollisionManager().enabled = true;

        this.turnLeft = cc.tween(this.node)
                        .by(2 * this.actionDuration, {y: 200}, {easing: 'sineIn'})
                        .by(this.actionDuration , {x: -100, y: 250, angle: 40})
                        .by(this.actionDuration , {x: -100, y: 250, angle: 40})
                        .by(this.actionDuration / 5, {x: -50 , angle: 10})
                        .by(8 * this.actionDuration , {x: -2000}, {easing: 'sineOut'});

        this.goStraight = cc.tween(this.node).by(5 * this.actionDuration, { y: 3000}, {easing: 'sineIn'});

        this.turnRight = cc.tween(this.node)
                        .by(this.actionDuration , {y: 150}, {easing: 'sineIn'})
                        .by(this.actionDuration / 2 , {x: 50, y: 125, angle: -35})
                        .by(this.actionDuration /2 , {x: 50, y: 125, angle: -35})
                        .by(this.actionDuration / 5, {x: 50 , angle: -20})
                        .by(8 * this.actionDuration, {x: 2000}, {easing: 'sineOut'});

        this.changePosLeft = cc.tween(this.node)
                            .by(this.actionDuration, {x: -250, angle: 30}, {easing: 'sineIn'})
                            .by(this.actionDuration, {angle: -30});

        this.changePosRight = cc.tween(this.node)
                              .by(this.actionDuration, {x:250, angle: -30} , {easing: 'sineIn'})
                              .by(this.actionDuration, {angle: 30});

        
    }

    start () {

    }

    update (dt) {}


}
