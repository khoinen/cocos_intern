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
    backgroundController: cc.Node = null ;

    @property (cc.Node)
    player: cc.Node = null ;

    @property (cc.Node)
    optionController: cc.Node = null ;

    @property (cc.Prefab)
    optionPrefab: cc.Prefab = null ;

    isStarted: boolean;

    // LIFE-CYCLE CALLBACKS:

    spawnUsingPrefabs (prefab, parent, posX, posY) {
        let newNode = cc.instantiate(prefab);
        parent.addChild(newNode);
        newNode.activate = true;
        newNode.setPosition(posX, posY);
        return newNode;
    }

    onLoad () {
        this.isStarted = false;
        this.backgroundController.getComponent("backgroundController").game = this;
        this.player.getComponent("playerController").game = this;
        let viewOptions = this.spawnUsingPrefabs(this.optionPrefab, this.optionController, 0, 0);

    }
    start () {
        
    }

    update (dt) {
        if(this.backgroundController.getComponent("backgroundController").endAtCrossRoad 
        && !this.player.getComponent("playerController").isChoosen) {
            this.optionController.active = true;
        } else {
            this.optionController.active = false;
        }
    }
}
