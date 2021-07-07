// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PLayer extends cc.Component {

    @property
    jumpHeight: number = 0;

    @property
    jumpDuration: number = 0;

    @property
    maxMoveSpeed: number = 0;

    @property
    accelerate: number = 0;

    @property (cc.AudioClip)
    jumpAudio: cc.AudioClip = null;
    
    accelLeft: boolean;
    accelRight: boolean;
    xSpeed: number;

    runJumpAction () {
        let jumpUp = cc.tween().by(this.jumpDuration, {y: this.jumpHeight}, {easing: 'sineOut'});
        let jumpDown = cc.tween().by(this.jumpDuration, {y: -this.jumpHeight}, {easing: 'sineIn'});
        let tween = cc.tween().sequence(jumpUp, jumpDown).call(this.onJumpSound, this);
        return cc.tween().repeatForever(tween);
    }

    onJumpSound(){
        cc.audioEngine.playEffect(this.jumpAudio, false);
    }

    onKeyDown( event: { keyCode: any; } ) {
        switch ( event.keyCode ) {
            case cc.macro.KEY.a:
                this.accelLeft = true;
                console.log("Key a pressed");
                break;
            case cc.macro.KEY.d:
                this.accelRight = true;
                console.log("Key d pressed");
                break;
        }
    }

    onKeyUp( event  ) {
        switch ( event.keyCode ) {
            case cc.macro.KEY.a:
                this.accelLeft = false;
                console.log("Key a unpressed");
                break;
            case cc.macro.KEY.d:
                this.accelRight = false;
                console.log("Key d unpressed");
                break;
        }
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();

        this.accelLeft = false;
        this.accelRight = false;

        this.xSpeed = 0;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    update (dt: number) {
        if (this.accelLeft) {
            this.xSpeed -= this.accelerate * dt;
        }
        else if (this.accelRight){
            this.xSpeed += this.accelerate * dt;
        }

        if(Math.abs(this.xSpeed) > this.maxMoveSpeed){
            this.xSpeed = this.maxMoveSpeed * Math.sign(this.xSpeed);
        }

        this.node.x += this.xSpeed * dt;
   }
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp,this);
    }
}
