const {ccclass, property} = cc._decorator;

@ccclass
export default class EffectManager extends cc.Component {

    //Chuyển cảnh khác
    public static sendRequestNextScene(node: cc.Node): void {
        node.dispatchEvent(new cc.Event.EventCustom("request_next_scene", true));
    }

    //Reset lại từ đầu level
    public static sendRequestReset(node: cc.Node) : void {
        node.dispatchEvent(new cc.Event.EventCustom("back_to_stage_begin", true));
    }

    //Chơi lại từ stage 1
    public static sendRequestPlayStageBegin(node: cc.Node) : void {
        node.dispatchEvent(new cc.Event.EventCustom("back_to_stage_begin", true));
    }

    //Qua màn
    public static sendRequestResult(node: cc.Node) : void {
        node.dispatchEvent(new cc.Event.EventCustom("next_level", true));
    }

    //Chuyển stage khác
    public static sendRequestNextStage(node: cc.Node) : void {
        node.dispatchEvent(new cc.Event.EventCustom("next_stage", true));
    }

    //Hiển thị đếm ngược
    public static sendRequestContinue(node: cc.Node): void {
        node.dispatchEvent(new cc.Event.EventCustom("show_continue", true));
    }
}
