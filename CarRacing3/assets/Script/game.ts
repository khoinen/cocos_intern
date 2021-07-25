// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property (cc.Prefab)
    roadPrefab: cc.Prefab = null;

    @property (cc.Node)
    backgroundController: cc.Node = null ;

    @property (cc.Node)
    carsController: cc.Node = null ;

    @property (cc.Node)
    player: cc.Node = null ;

    @property (cc.Node)
    optionController: cc.Node = null ;

    @property (cc.Node)
    alert: cc.Node = null ;

    @property (cc.Node)
    instruction: cc.Node = null ;

    @property (cc.Node)
    menu: cc.Node = null ;

    @property (cc.Node)
    blackEffect: cc.Node = null ;

    isStarted: boolean;
    atCrossRoad: boolean;
    game = null;

    // LIFE-CYCLE CALLBACKS:

    onKeyDown(event) {
        if (event.keyCode === cc.macro.KEY.f){
            if(!this.isStarted){
                this.backgroundController.getComponent("backgroundController").loop.stop();
                this.backgroundController.getComponent("backgroundController").moveToCrossroad.call(()=>{
                    this.carsController.children.forEach(element => {
                        element.stopAllActions();
                    })
                    this.atCrossRoad = true;
                    this.optionController.active = true;

                    this.player.removeFromParent();
                    this.backgroundController.children[0].getChildByName("tmp_node").addChild(this.player);
                    this.player.setPosition(160,-500);
                })
                .start();
                this.carsController.getComponent("carsController").goLeft.start();
                this.carsController.getComponent("carsController").goRight.start();
                
                this.node.removeChild(this.instruction);
                this.node.removeChild(this.menu);
                this.isStarted = true;
            }
        } 
        
        else if (event.keyCode === cc.macro.KEY.space) {
            this.instruction.setPosition(0, 500);
            if (this.instruction.active){
                this.hideInstructions();
            } else {
                this.showInstructions();
            }
        }

        else if (event.keyCode === cc.macro.KEY.a) {
            this.player.getComponent("playerController").changePosLeft.start();
        }

        else if (event.keyCode === cc.macro.KEY.d) {
            this.player.getComponent("playerController").changePosRight.start();
        }
    }

    showInstructions() {
        this.instruction.active = true;
        this.instruction.opacity = 0;
        this.instruction.scale = 0.2;
        this.menu.active = false;
        cc.tween(this.instruction)
        .to(0.25, {scale: 1, opacity: 255}, {easing: 'quartInOut'})
        .start();
    }

    hideInstructions() {
        cc.tween(this.instruction)
        .to(0.25, {scale: 0.2, opacity: 0}, {easing: 'quartInOut'})
        .call(() => {this.instruction.active = false;})
        .start();

        this.menu.active = true;
    }

    spawnUsingPrefabs (prefab, parent, posX, posY) {
        let newNode = cc.instantiate(prefab);
        parent.addChild(newNode);
        newNode.activate = true;
        newNode.setPosition(posX, posY);
        return newNode;
    }

    spawnRoads() {
        let top = null;
        for (let i = -3; i < 6; i++) {
            top = this.spawnUsingPrefabs(this.roadPrefab, this.backgroundController, 0, i * this.roadPrefab.data.height);
        }
        this.backgroundController.children[0].y = top.position.y + (this.roadPrefab.data.height + this.backgroundController.children[0].height) / 2;
    }

    moveOtherCars(){
        this.carsController.getComponent("carsController").goLeft.start();
        this.carsController.getComponent("carsController").goRight.start();
        this.atCrossRoad = false;
    }

    controlHandler(event){
        switch ( event.keyCode){

            case cc.macro.KEY.w:
                this.player.getComponent("playerController").goStraight
                .call(() => this.onHit(false))
                .start();
                this.moveOtherCars();
                break;

            case cc.macro.KEY.q:
                this.player.getComponent("playerController").turnLeft
                .call(() => this.onHit(false))
                .start();
                
                this.moveOtherCars();
                break;
                
            case cc.macro.KEY.e:
                this.player.getComponent("playerController").turnRight
                .call(() => this.onHit(false))
                .start();
                this.moveOtherCars();
                break;
            
            case cc.macro.KEY.a:
                
                break;
            
            case cc.macro.KEY.d:
                
                break;
                
            default:
                break;
        }

    };

    onHit (isHit) {
        if(isHit) {
            this.player.stopAllActions();
            this.carsController.children.forEach( element => {
                element.stopAllActions();
            })

            this.alert.setPosition(0, 0)
            this.alert.active = true;

            this.scheduleOnce(() => {
                cc.tween(this.blackEffect)
                    .to(0.75, {opacity: 255})
                    .call (() => {cc.director.loadScene("game")})
                    .start();
            })
        } else {
            this.scheduleOnce(() => {
                cc.tween(this.blackEffect)
                    .to(0.75, {opacity: 255})
                    .call (() => {cc.director.loadScene("game")})
                    .start();
            })
        }
    }

    onLoad () {
        this.player.getComponent("playerController").game = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.alert.active = false;
        this.player.y -= 75;
    }

    start () {
        this.spawnRoads();
        this.backgroundController.getComponent("backgroundController").loop.start();
        this.optionController.active = false;
        this.instruction.active = false;
        this.blackEffect.setContentSize(5000, 5000);
        cc.tween(this.blackEffect)
            .to(0.75, {opacity: 0})
            .start();
    }

    update (dt) {
        if (this.atCrossRoad){
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.controlHandler, this);
        } else { 
            this.optionController.active = false;
        }
    }

    onDestroy () {
        
    }
}
