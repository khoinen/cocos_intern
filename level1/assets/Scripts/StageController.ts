import EffectManager from "./EffectManager";
import ClipController from "./ClipController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class StageController extends cc.Component {

    @property({type: cc.Node})
    target: cc.Node[]= [];

    @property(cc.SpriteFrame)
    iconOption: cc.SpriteFrame[] = [];

    @property(cc.Node)
    optionContainer: cc.Node = null;

    @property({type: cc.Node})
    stageStart: cc.Node = null;

    @property(cc.Node)
    topContainer: cc.Node = null;

    private _ = null;
    private isClick = false;

    onLoad(): void {
        this._ = this;
        this.optionContainer.scale = 0;
    }

    onEnable(): void {
        var option = this.optionContainer.getComponent("OptionController");
        option.setImageOption(this.iconOption);
        for (var i = 0; i < option.node.children.length; ++i)
        {
            option.setOption(i, this.node, "StageController", "runClip");
            this.isClick = true;
        }
        this.setTopContainer();
    }

    runStage(): void {
        var clipController = this.stageStart.getComponent("ClipController");
        clipController.startClip(clipController);
    }

    showOptionContainer(): void {
        EffectManager.effectScaleOption(this.optionContainer, 0.5);
    }

    runClip(event): void {
        if (!this.isClick)
        {
            cc.error("Khong duoc click option lien tuc");
            return;
        }
        this.isClick = false;
        let _node = event.target;
        _node.getChildByName("selected").active = true;
        switch(_node.name)
        {
            case "option1":
                var clipController = this.target[0].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
            case "option2":
                var clipController = this.target[1].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
            case "option3":
                var clipController = this.target[2].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
        }
    }

    setTopContainer(): void {
        var index = parseInt(this.node.name.split("Stage")[1]) - 1;;
        for (let i = 0; i < this.topContainer.children.length; ++i)
        {
            let children = this.topContainer.children[i].getChildByName((index - 1).toString());
            if (children)
            {
                children.getChildByName("TrueAnswer").active = true;
            }
        }
    }
    onResult(type): void {
        cc.Tween.stopAll();
    }
}
