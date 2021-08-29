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
    layer: cc.Node = null;

    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.Node)
    redirect: cc.Node = null;

    @property(cc.Node)
    buttonGroup: cc.Node = null;

    @property(cc.Node)
    leftButton: cc.Node = null;

    @property(cc.Node)
    rightButton: cc.Node = null;

    @property(cc.Node)
    jumpButton: cc.Node = null;

    isGameover:boolean = false;
    rigidBody: cc.RigidBody;
    direction: number;
    velocity: number;
    walkForce: number;
    onGround: boolean;
    jumpForce: number;
    btnIsPressed: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.leftButton.on("touchstart", this.onLeftButtonClick, this);
        this.leftButton.on("touchend", this.noLR, this);
        this.rightButton.on("touchstart", this.onRightButtonClick, this);
        this.rightButton.on("touchend", this.noLR, this);
        this.jumpButton.on("touchstart", this.onJumpButtonClick, this);
        cc.director.getCollisionManager().enabled = true;

        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.redirect.scale = 0.2
        this.direction = 0;
        this.velocity = 400;
        this.walkForce = 20000;
        this.jumpForce = 900000;
        this.onGround = false;
    }

    continue() { 
        cc.director.loadScene("game");
    }
    
    onKeyDown (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.direction = -1;
                this.playerWalk();
                break;
            case cc.macro.KEY.d:
                this.direction = 1;
                this.playerWalk();
                break;
            case cc.macro.KEY.w:
                // console.log(this.onGround);
                if(this.onGround){
                    this.rigidBody.applyForceToCenter( cc.v2(0,this.jumpForce) , true );
                    this.playerJump();
                    this.onGround = false;
                }
            break;
        }
    }

    onLeftButtonClick() {
        this.direction = -1;
        this.playerWalk();
    }

    onRightButtonClick() {
        this.direction = 1;
        this.playerWalk();
    }
    
    onJumpButtonClick() {
        if(this.onGround){
            this.rigidBody.applyForceToCenter( cc.v2(0,this.jumpForce) , true );
            this.playerJump();
            this.onGround = false;
        }
    }

    onKeyUp (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.d:
                this.noLR();
                break;
        }
    }

    noLR() {
        this.direction = 0;
        if (this.onGround) this.playerIdle();
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        // console.log("contact");
        if (selfCollider.tag === 1) {
            this.onGround = true;
            this.scheduleOnce(this.playerIdle, 0);
        }
    }

    onCollisionEnter(other,self) {
        if (other.tag === 1) {
            this.gameOver(false);
        }
        else if (other.tag === 2) {
            this.gameOver(true);
        }
    }

    playerWalk() {
        if (this.onGround){
            this.node.getComponent(cc.Animation).play("player_walk");
        }
        
        this.node.scaleX = this.direction;
    }

    playerJump() {
        this.node.getComponent(cc.Animation).play("player_jump");
    }

    playerIdle() {
        this.node.getComponent(cc.Animation).play("player_idle");
    }

    gameOver(type) {
        this.isGameover = true;
        this.node.removeComponent(cc.RigidBody);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.leftButton.off("touchstart", this.onLeftButtonClick, this);
        this.rightButton.off("touchstart", this.onRightButtonClick, this);
        this.jumpButton.off("touchstart", this.onJumpButtonClick, this);

        if (type) {
            this.node.getComponent(cc.Animation).play("player_jump");
        }
        else this.node.getComponent(cc.Animation).play("player_die");
        this.buttonGroup.active = false;
        this.scheduleOnce(() => {
            this.layer.setPosition(this.camera.position);
            this.layer.scale = 100;
            cc.tween(this.layer).to(0.5, {opacity: 120}).start();
            this.redirect.setPosition(this.camera.position);
            cc.tween(this.redirect).to(0.3, {scale:1}).start();
        }, 0.1)
        
    }

    start () {

    }

    update (dt) {
        if( ( this.direction > 0 && this.rigidBody.linearVelocity.x < this.velocity) || (this.direction < 0 && this.rigidBody.linearVelocity.x > -this.velocity) ){
            this.rigidBody.applyForceToCenter( cc.v2(this.direction*this.walkForce,0) , true );
        } 
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}
