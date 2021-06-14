import EffectManager from "./EffectManager";
import Data from "./Data";
import BundleManager from "./BundleManager";


const {ccclass, property} = cc._decorator;

const tween = cc.tween;

let onAds = true;

@ccclass
export default class UIController extends cc.Component {

    @property(cc.Node)
    home: cc.Node = null;

    @property(cc.Node)
    background: cc.Node = null;

    @property(cc.Node)
    moneyContainer: cc.Node = null;

    @property(cc.Node)
    moneyTop: cc.Node = null;

    @property(cc.Node)
    levels: cc.Node = null;

    @property(cc.Node)
    bed: cc.Node = null;

    @property(cc.Node)
    ads: cc.Node = null;

    @property(cc.Node)
    replay: cc.Node = null;

    @property(cc.Node)
    next: cc.Node = null;

    @property(cc.Node)
    tapToStart: cc.Node = null;

    @property(cc.Node)
    setting: cc.Node = null;

    @property(cc.Node)
    successful: cc.Node = null;

    @property(cc.Prefab)
    money: cc.Prefab = null;

    @property(cc.Node)
    second: cc.Node = null;

    @property(cc.Node)
    countDown: cc.Node = null;

    @property(cc.Node)
    continue: cc.Node = null;

    @property(cc.Node)
    money2: cc.Node = null;

    @property(cc.Node)
    ads2: cc.Node = null;

    @property(cc.Node)
    point: cc.Node = null;
    
    @property(cc.Prefab)
    comingSoon: cc.Prefab = null;

    @property(cc.Prefab)
    alert: cc.Prefab = null;

    @property(cc.Node)
    invite: cc.Node = null;

    @property(cc.Prefab)
    partical: cc.Prefab = null;

    @property(cc.Node)
    background2: cc.Node = null;

    private uiEndGame = [];
    private uiIntroduce = [];
    private uiContinue = [];
    private uiControlling = [];
    private _watchAds = [];
    private _gameManager = null;
    private _bundleInstance;
    onLoad (): void {
        this.background.zIndex = cc.macro.MIN_ZINDEX;
        this.uiEndGame = [this.home, this.ads, this.replay, this.next, this.successful, this.moneyContainer, this.moneyTop, this.invite];
        this.uiIntroduce = [this.levels, this.bed, this.tapToStart, this.setting, this.moneyTop];
        this.uiContinue = [this.continue, this.countDown, this.second, this.money2, this.ads2, this.home];
        this.uiControlling = [this.levels, this.bed, this.tapToStart, this.setting];
        this._watchAds = [this.ads, this.ads2];
        this.node.zIndex = cc.macro.MAX_ZINDEX - 2;
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        this._bundleInstance = BundleManager.getInstance();
    }

    onEnable (): void {
        this.showHome();
    }

    start(): void {
        this.background.active = false;
        this.tapToStart.zIndex = cc.macro.MAX_ZINDEX - 1;
    }

    showHome(): void {
        this.showUIEndGame(false);
        this.showUIIntroduce(true);
        this.showUIContinue(false);
        this.showButtonAdsContinue(false);
        this.showButtonAdsEndGame(false);
        this.tapToStart.position = cc.v3(0, 213);
        EffectManager.effectScaleStart(this.tapToStart);
    }
    //Hiển thị các hiệu ứng scale, tiền bay khi người chơi chọn đúng đáp án
    showUIEndGame(isShow: boolean): void {
        this.background.active = isShow;
        if (isShow)
        {
            this._gameManager._clickX4 = true;
            this.moneyContainer.getChildByName("txt_money").getComponent(cc.Label).string = "50";
            tween(this.node).call(function () {
                this.setting.active = false;
                this.moneyTop.scale = 0;
                this.moneyTop.opacity = 0;
                EffectManager.showButton(this.moneyTop, 0.2);
                EffectManager.showButton(this.ads, 0.2);
                this.effectMoneyFly();
                this.showButtonAdsEndGame(onAds);
                let p = cc.instantiate(this.partical);
                this.node.addChild(p);
                p.position = cc.v3(0, 230);
                p.zIndex = cc.macro.MIN_ZINDEX + 1;
            }.bind(this))
            .delay(1.25)
            .call(() => {
                this.moneyContainer.scale = 0;
                this.moneyContainer.opacity = 0;
                EffectManager.showButton(this.moneyContainer, 0.7);
            })
            .delay(1)
            .call(() => {
                var money = this._gameManager._levelCurrent.script._money;
                this._gameManager.addMoney(money);
            })
            .delay(1.5)
            .call(() => {
                EffectManager.effectScaleOption(this.home, 0.7);
            })
            .delay(0.3)
            .call(() => {
                EffectManager.effectScaleOption(this.invite, 0.7);
            })
            .delay(0.5)
            .call(() => {
                EffectManager.effectScaleOption(this.next, 0.7);
            })
            .delay(0.3)
            .call(() => {
                EffectManager.effectScaleOption(this.replay, 0.7);
                let p = this.node.getChildByName("Partical");
                if (p) {
                    p.destroy();
                }
            })
            .start();
        }
        else
        {
            this.uiEndGame.forEach(element => {
                element.active = isShow;
            });
            this.node.children.forEach(children => {
                if (children.name == "Money")
                {
                    children.destroy();
                }
            });
        }
    }

    effectMoneyFly(): void {
        EffectManager.effectFlyMoney(this.money, this.node);
    }
    
    //Hiển thị giới thiệu lý do Lupin vào tù
    showUIIntroduce(isShow: boolean): void {
        this.background.active = false;
        this.home.active = false;
        this.tapToStart.position = cc.v3(0, 213);
        EffectManager.effectScaleStart(this.tapToStart);
        if (isShow)
        {
            this.uiIntroduce.forEach(element => {
                element.opacity = 0;
            });
            tween(this.node).call(() => {
                EffectManager.effectScaleOption(this.setting, 0.3);
            })
            .delay(0.4)
            .call(() => {
                EffectManager.effectScaleOption(this.moneyTop, 0.3);
            })
            .delay(0.4)
            .call(() => {
                EffectManager.effectScaleOption(this.levels, 0.3);
            })
            .delay(0.4)
            .call(() => {
                EffectManager.effectScaleOption(this.tapToStart, 0.3);
            })
            .start();
        }
        else
        {
            this.uiIntroduce.forEach(element => {
                element.active = isShow;
            });
        }
    }

    showUIContinue(isShow): void {
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            let _data = data
            if (_data.money < 200 )
            {
                this.uiContinue[3].getChildByName("txt_money").color = cc.color(255, 100, 100);
                this.uiContinue[3].getChildByName("txt_money").getComponent(cc.LabelOutline).color = cc.color(255, 0, 0);
            }
            else
            {
                this.uiContinue[3].getChildByName("txt_money").color = cc.color(255, 255, 255);
                this.uiContinue[3].getChildByName("txt_money").getComponent(cc.LabelOutline).color = cc.color(77, 77, 77);
            }
        });
        
        this.background.active = isShow;
        for (let node of this.uiContinue)
        {
            node.active = isShow;
        }
        if (isShow) {
            this.showButtonAdsContinue(onAds);
        }
    }

    showComingSoon(): void {
        let comingSoon = this.node.getChildByName("ComingSoon");
        if (comingSoon)
        {
            comingSoon.active = true;
        }
        else
        {
            comingSoon = cc.instantiate(this.comingSoon);
            this.node.addChild(comingSoon);
        }
        this.effectMoneyFly();
    }

    showUIControlling(isShow): void {
        if (isShow) {
            this.showUIIntroduce(true)
        } else {
            this.uiControlling.forEach((node) => {
                node.active = false
            })
        }
    }

    showButtonAdsContinue(isShow: boolean): void {
        this.ads2.active = isShow;
    }
    
    showButtonAdsEndGame(isShow: boolean): void {
        this.ads.active = isShow;
    }

    showAlert(txt='', time=0): void {
        let alert = this.node.getChildByName("Alert");
        if (alert)
        {
            alert.active = true;
        }
        else
        {
            alert = cc.instantiate(this.alert);
            this.node.addChild(alert);
        }

        if (txt) {
            const alertController = alert.getComponent('Alert')
            alertController.setText(txt)
        }

        time && this.scheduleOnce(() => alert.active = false, time)
    }

    setMoney(money: number): void {
        let _money = this.moneyContainer.getChildByName("txt_money");
        let str = _money.getComponent(cc.Label).string;
        str = (Number(str) + money).toString();
        _money.getComponent(cc.Label).string = str;
    }

    showGuide(bool: boolean): void {
        let hand = this.node.getChildByName("hand");
        if (bool) {
            tween(this.node).delay(1)
                .call(() => {
                    this.background2.active = true;
                    this.background2.zIndex = cc.macro.MAX_ZINDEX - 100;
                    this.background2.opacity = 150;
                    hand.zIndex = cc.macro.MAX_ZINDEX;
                    tween(hand).delay(1).repeatForever(
                        tween(hand).call(() => {
                                hand.position = cc.v3(this.tapToStart.x - 50, this.tapToStart.y - 500)
                                hand.opacity = 0;
                                hand.active = true;
                            })
                            .parallel(
                                tween(hand).to(0.7, {opacity: 255}),
                                tween(hand).to(0.7, {position: cc.v3(this.tapToStart.x - 50, this.tapToStart.y - 300)}).call(() => {
                                    cc.tween(hand).to(0.5, {scale: 0.9}, {easing: "cubicIn"}).to(0.5, {scale: 1}, {easing: "cubicOut"}).start();
                                })
                            )
                            .delay(1)
                        )
                        .start();
                }).start();
        }
        else {
            cc.Tween.stopAllByTarget(hand);
            hand.active = false;
            tween(this.background2).to(0.3, {opacity: 0})
                .call(() => {
                    this.background2.active  = false;
                })
                .start();
        }
    }
}
