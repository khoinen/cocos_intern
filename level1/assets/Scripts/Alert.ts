const {ccclass, property} = cc._decorator;
const tween = cc.tween

@ccclass
export default class Alert extends cc.Component {

    @property(cc.Node)
    text: cc.Node = null;

    onEnable() {
        this.text.scale = 0;
        this.text.opacity = 0;
        tween(this.text)
            .to(.5, {scale: 1, opacity: 255}, {easing: "cubicIn"})
            .start();
    }

    onClose() {
        this.node.active = false
    }

    setText(txt) {
        const label = this.text.getComponent(cc.Label)
        label.string = txt
    }
}
