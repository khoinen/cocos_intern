import ComingSoon from "../Scripts/ComingSoon";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ComingSoon2 extends ComingSoon {

    onLoad(): void {
        this.node.opacity = 0;
        this.node.scale = 0.7;
    }

    onEnable(): void {
        cc.tween(this.node).parallel(
            cc.tween().to(0.2, {opacity: 255}),
            cc.tween().to(0.2, {scale: 1}, {easing: "quartOut"})
        )
        .call(() => {
            this.node.on("touchend", this.onClose, this);
        })
        .start();
    }

    onClose(): void {
        cc.tween(this.node).parallel(
                cc.tween().to(0.2, {opacity: 0}),
                cc.tween().to(0.2, {scale: 0.7}, {easing: "quartOut"})
            )
            .call(() => {
                this.node.active = false;
            })
            .start();
    }
}
