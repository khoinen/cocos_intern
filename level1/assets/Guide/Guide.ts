const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    hand: cc.Node = null;

    private _shadow;
    private _setting;

    onLoad(): void {
        this.hand.active = false;
        this._shadow = cc.find("Canvas/Shadow");
        this._setting = cc.find("Canvas/BtnSetting");
    }
    
    onEnable(): void {
        this.action();
        this._setting.getChildByName("Block").active = true;
        this._setting.color = new cc.Color(150, 150, 150, 255);
    }

    onDisable(): void {
        this._shadow.opacity = 0;
        this._setting.getChildByName("Block").active = false;
        this._setting.color = new cc.Color(255, 255, 255, 255);
    }
    action(): void {
        this.hand.active = true;
        cc.tween(this._shadow).to(0.2, {opacity: 150})
            .call(() => {
                cc.tween(this.hand).repeatForever(
                    cc.tween().call(() => {
                            this.hand.position = cc.v3(-310, -960);
                            this.hand.opacity = 0;
                        })
                        .parallel(
                            cc.tween().to(0.5, {opacity: 255}),
                            cc.tween().to(0.5, {position: cc.v3(-310, -800)}).call(() => {
                                cc.tween(this.hand).to(0.2, {scale: 0.95}, {easing: "cubicIn"}).to(0.2, {scale: 1}, {easing: "cubicOut"}).start();
                            })
                        )
                        .delay(0.7)
                        .to(0.5, {position: cc.v3(0, -800)})
                        .call(() => {
                            cc.tween(this.hand).to(0.2, {scale: 0.95}, {easing: "cubicIn"}).to(0.2, {scale: 1}, {easing: "cubicOut"}).start();
                        })
                        .delay(0.7)
                        .to(0.5, {position: cc.v3(310, -800)})
                        .call(() => {
                            cc.tween(this.hand).to(0.2, {scale: 0.95}, {easing: "cubicIn"}).to(0.2, {scale: 1}, {easing: "cubicOut"}).start();
                        })
                        .delay(0.7)
                        .parallel(
                            cc.tween().by(0.5, {position: cc.v3(200, 0)}),
                            cc.tween().to(0.5, {opacity: 0})
                        )
                    )
                    .start();
            })
            .start();

    }
}
