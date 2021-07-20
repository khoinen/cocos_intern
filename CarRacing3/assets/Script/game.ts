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
                })
                .start();
                this.carsController.getComponent("carsController").goLeft.start();
                this.carsController.getComponent("carsController").goRight.start();
                
                this.isStarted = true;
            }
        }
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
                this.player.getComponent("playerController").changePosLeft.start();
                break;
            
            case cc.macro.KEY.d:
                this.player.getComponent("playerController").changePosRight.start();
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
            this.alert.active = true;
        }
    }

    onLoad () {
        this.player.getComponent("playerController").game = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.alert.active = false;
    }

    start () {
        this.spawnRoads();
        this.backgroundController.getComponent("backgroundController").loop.start();
        this.optionController.active = false;
    }

    update (dt) {
        if (this.atCrossRoad){
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.controlHandler, this);
        } else { 
            this.optionController.active = false;
        }
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
}
