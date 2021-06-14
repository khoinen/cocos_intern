const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    isClick = false;
    onClick(event: cc.Event.EventCustom): void {
        if (this.isClick)
        {
            let _event = new cc.Event.EventCustom("click_item", true);
            let strLabel = this.node.getChildByName("txt_number").getComponent(cc.Label).string;
            _event.level = Number(strLabel) - 1;
            this.node.dispatchEvent(_event);
        }
    }
}
