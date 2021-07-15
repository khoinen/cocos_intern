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
    
    isChoosen: boolean;

    onKeyDown(event) {
        switch ( event.keyCode ) {
            case cc.macro.KEY.f:
                if ( !this.game.isStarted){
                    this.schedule(() => {
                        this.game.isStarted = true;
                    });
                }
                break;
            // tween
            
            case cc.macro.KEY.a:
                cc.tween(this.node)
                .by(this.actionDuration, {x: -235, angle: 30}, {easing: 'sineIn'})
                .by(this.actionDuration/2, {angle: -30})
                .start();
                
                console.log("pressed a");
                break;
            case cc.macro.KEY.d:
                cc.tween(this.node)
                .by(this.actionDuration, {x: 235, angle: -30}, {easing: 'sineIn'})
                .by(this.actionDuration/2, {angle:30})
                .start();
                
                console.log("pressed d");
                break;
        }

        if (this.game.optionController.active == true) {
            switch (event.keyCode) {
                case cc.macro.KEY.q:
                    this.isChoosen = true;
                    cc.tween(this.node)
                    .by(this.actionDuration * 5, {y: 500}, {easing: 'sineOut'}).start()
                    .by(this.actionDuration * 2, {angle: 90}).start()
                    .by(this.actionDuration * 10, {x: -2000}).start();
                    break;
                case cc.macro.KEY.w:
                    this.isChoosen = true;
                    cc.tween(this.node).by(this.actionDuration * 10, {y: 2000}, {easing: 'sineOut'}).start();    
                    break;
                case cc.macro.KEY.e:
                    this.isChoosen = true;
                    cc.tween(this.node)
                    .by(this.actionDuration * 3, {y: 250}, {easing: 'sineOut'}).start()
                    .by(this.actionDuration * 2, {angle: -90}).start()
                    .by(this.actionDuration * 10, {x: 2000}).start();
                    break;
            }
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.isChoosen = false;
    }

    start () {

    }

    update (dt) {}

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
}
