// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Car extends cc.Component {

    @property(cc.Node)
    topPoint: cc.Node = null;
    @property(cc.Node)
    bottomPoint: cc.Node = null;
    @property(cc.Node)
    leftPoint: cc.Node = null;
    @property(cc.Node)
    rightPoint: cc.Node = null;

    @property(cc.Float)
    movementSpeed: number = 50;

    @property(cc.Boolean) lefting: boolean = false;
    @property(cc.Boolean) righting: boolean = false;
    @property(cc.Boolean) upping: boolean = false;
    @property(cc.Boolean) downing: boolean = false;

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    }
    // LIFE-CYCLE CALLBACKS:

    start () {

    }

     update (dt) {
         if(this.lefting == true && this.righting == false){
            console.log("LEFTING");
            this.node.x -= this.movementSpeed * dt;
         }
         
         if(this.lefting == false && this.righting == true){
            console.log("RIGHTING");
            this.node.x += this.movementSpeed * dt;
         }

         if(this.upping == true && this.downing == false){
            console.log("UPPING");
            this.node.y += this.movementSpeed * dt;
         }

         if(this.downing == true && this.upping == false){
            console.log("DOWNING");
            this.node.y -= this.movementSpeed * dt;
         }

        this.checkPosition();
     }

        

    onKeyPressed(event){
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.lefting = true;
                //console.log("LEFT: " + this.lefting);
                // this.node.setPosition(this.node.position.x - this.movementSpeed, this.node.position.y);
                // if(this.node.position.x < this.leftPoint.position.x){
                //     this.node.setPosition(this.leftPoint.position.x, this.node.position.y);
                // }
                break;

            case cc.macro.KEY.d:
                this.righting = true;
                //console.log("RIGHT: " + this.righting);
                // this.node.setPosition(this.node.position.x + this.movementSpeed, this.node.position.y);
                // if(this.node.position.x > this.rightPoint.position.x){
                //     this.node.setPosition(this.rightPoint.position.x, this.node.position.y);
                // }
                break;

            case cc.macro.KEY.w:
                this.upping = true;
                //console.log("UP " + this.upping);
                // this.node.setPosition(this.node.position.x, this.node.position.y + this.movementSpeed);
                // if(this.node.position.y > this.topPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.topPoint.position.y);
                // }
                break;

            case cc.macro.KEY.s:
                this.downing = true;
                //console.log("DOWN " + this.downing);
                // this.node.setPosition(this.node.position.x, this.node.position.y - this.movementSpeed);
                // if(this.node.position.y < this.bottomPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.bottomPoint.position.y);
                // }
                break;

        }
    }

    onKeyReleased(event){
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.lefting = false;
                //console.log("NOT LEFT");
                // this.node.setPosition(this.node.position.x - this.movementSpeed, this.node.position.y);
                // if(this.node.position.x < this.leftPoint.position.x){
                //     this.node.setPosition(this.leftPoint.position.x, this.node.position.y);
                // }
                break;

            case cc.macro.KEY.d:
                this.righting = false;
                //console.log("NOT RIGHT");
                // this.node.setPosition(this.node.position.x + this.movementSpeed, this.node.position.y);
                // if(this.node.position.x > this.rightPoint.position.x){
                //     this.node.setPosition(this.rightPoint.position.x, this.node.position.y);
                // }
                break;

            case cc.macro.KEY.w:
                this.upping = false;
                //console.log("NOT UP");
                // this.node.setPosition(this.node.position.x, this.node.position.y + this.movementSpeed);
                // if(this.node.position.y > this.topPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.topPoint.position.y);
                // }
                break;

            case cc.macro.KEY.s:
                this.downing = false;
                //console.log("NOT DOWN");
                // this.node.setPosition(this.node.position.x, this.node.position.y - this.movementSpeed);
                // if(this.node.position.y < this.bottomPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.bottomPoint.position.y);
                // }
                break;

        }
    }

    checkPosition() {
        if(this.node.position.x < this.leftPoint.position.x){
            this.node.setPosition(this.leftPoint.position.x, this.node.position.y);
        }
    
        if(this.node.position.x > this.rightPoint.position.x){
            this.node.setPosition(this.rightPoint.position.x, this.node.position.y);
        }
    
        if(this.node.position.y > this.topPoint.position.y){
            this.node.setPosition(this.node.position.x, this.topPoint.position.y);
        }
        
        if(this.node.position.y < this.bottomPoint.position.y){
            this.node.setPosition(this.node.position.x, this.bottomPoint.position.y);
        }
    }
}
