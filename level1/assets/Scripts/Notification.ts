
const {ccclass, property} = cc._decorator;

@ccclass
export default class Notification extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property()
    duration: Number = 0;

    @property()
    delay: Number = 0;

    onEnable(): void {
        this.label.node.position = cc.v3(550, 0);
        cc.tween(this.label.node).repeatForever(
                cc.tween().delay(Number(this.delay)).by(Number(this.duration), {position: cc.v3(-2170, 0)})
                    .call(() => {
                        this.label.node.position = cc.v3(550, 0);
                    })
            )
            .start();
    }
}
