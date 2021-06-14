import StageController from "./StageController";
import EffectManager from "./EffectManager";

const {ccclass, property} = cc._decorator;

export enum TYPE {
    NONE,
    INTRODUCE,
    SUCCESS,
    FAIL
}

@ccclass
export default class ClipController extends cc.Component {

    @property({type: cc.Enum(TYPE)})
    type: TYPE = TYPE.NONE;

    @property({type: StageController})
    nextStage: StageController = null;

    @property
    fade = false;

    @property({type: cc.Component.EventHandler})
    actionStart: cc.Component.EventHandler[] = [];

    private _ = null;
    onLoad(): void {
        this._ = this;
    }

    onEnable(): void {
        // this.node.on("finish_stage", this.)
        this.node.on("complete_introduce", this.onCompleteIntroduce, this);
    }
    
    onDisable(): void {
        this.node.on("complete_introduce", this.onCompleteIntroduce, this);
    }

    onCompleteIntroduce(event: cc.Event.EventCustom): void {
        event.stopPropagation();
        var optionContainer = cc.find("Canvas/OptionContainer");
        EffectManager.effectScaleOption(optionContainer, 0.7);
    }

    startClip(_this): void {
        var component = "";
        var handler = "";
        for (var element of _this.actionStart)
        {
            component = element._componentName;
            handler = element.handler;
            var func = element.target.getComponent(component)[handler];
            func(element.target.getComponent(component));
        }
    }

    onFinishClip(_this): void {
        console.log("%c" + _this.type, "color: violet");
        switch (_this.type)
        {
            case TYPE.INTRODUCE:
                var clip = _this.node.parent;
                var stageController = clip.getComponent("StageController");
                EffectManager.effectScaleOption(stageController.optionContainer, 0.5);
                break;
            default:
                let stage = _this.node.parent.getComponent("StageController");
                stage.onResult(_this.type);
                break;
        }
    }  
}
