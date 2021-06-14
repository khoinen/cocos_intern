

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelController extends cc.Component {

    @property({type: cc.Component.EventHandler})
    stage: cc.Component.EventHandler[] = [];

    @property(cc.Node)
    stageBegin: cc.Node = null;

    @property
    numberStage = 0;

    @property(cc.Node)
    topContainer: cc.Node = null;

    @property(cc.Prefab)
    itemStage: cc.Prefab = null;

    onLoad(): void {
        this.initTopContainer();
    }
    onEnable(): void {
        this.stageBegin.getComponent("StageController").runStage();
    }

    initTopContainer(): void {
        for (let i = 0; i < this.numberStage; ++i)
        {
            let s = cc.instantiate(this.itemStage);
            s.name = (i + 1).toString();
            this.topContainer.addChild(s);
        }
        this.topContainer.getChildByName("Next").zIndex = cc.macro.MAX_ZINDEX;
    }
}
