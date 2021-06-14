"use strict";
cc._RF.push(module, '13ff8fyyBBLrq0/rwHWYaVT', 'UIController');
// Scripts/UIController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EffectManager_1 = require("./EffectManager");
var Data_1 = require("./Data");
var BundleManager_1 = require("./BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var onAds = true;
var UIController = /** @class */ (function (_super) {
    __extends(UIController, _super);
    function UIController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.home = null;
        _this.background = null;
        _this.moneyContainer = null;
        _this.moneyTop = null;
        _this.levels = null;
        _this.bed = null;
        _this.ads = null;
        _this.replay = null;
        _this.next = null;
        _this.tapToStart = null;
        _this.setting = null;
        _this.successful = null;
        _this.money = null;
        _this.second = null;
        _this.countDown = null;
        _this.continue = null;
        _this.money2 = null;
        _this.ads2 = null;
        _this.point = null;
        _this.comingSoon = null;
        _this.alert = null;
        _this.invite = null;
        _this.partical = null;
        _this.background2 = null;
        _this.uiEndGame = [];
        _this.uiIntroduce = [];
        _this.uiContinue = [];
        _this.uiControlling = [];
        _this._watchAds = [];
        _this._gameManager = null;
        return _this;
    }
    UIController.prototype.onLoad = function () {
        this.background.zIndex = cc.macro.MIN_ZINDEX;
        this.uiEndGame = [this.home, this.ads, this.replay, this.next, this.successful, this.moneyContainer, this.moneyTop, this.invite];
        this.uiIntroduce = [this.levels, this.bed, this.tapToStart, this.setting, this.moneyTop];
        this.uiContinue = [this.continue, this.countDown, this.second, this.money2, this.ads2, this.home];
        this.uiControlling = [this.levels, this.bed, this.tapToStart, this.setting];
        this._watchAds = [this.ads, this.ads2];
        this.node.zIndex = cc.macro.MAX_ZINDEX - 2;
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        this._bundleInstance = BundleManager_1.default.getInstance();
    };
    UIController.prototype.onEnable = function () {
        this.showHome();
    };
    UIController.prototype.start = function () {
        this.background.active = false;
        this.tapToStart.zIndex = cc.macro.MAX_ZINDEX - 1;
    };
    UIController.prototype.showHome = function () {
        this.showUIEndGame(false);
        this.showUIIntroduce(true);
        this.showUIContinue(false);
        this.showButtonAdsContinue(false);
        this.showButtonAdsEndGame(false);
        this.tapToStart.position = cc.v3(0, 213);
        EffectManager_1.default.effectScaleStart(this.tapToStart);
    };
    //Hiển thị các hiệu ứng scale, tiền bay khi người chơi chọn đúng đáp án
    UIController.prototype.showUIEndGame = function (isShow) {
        var _this = this;
        this.background.active = isShow;
        if (isShow) {
            this._gameManager._clickX4 = true;
            this.moneyContainer.getChildByName("txt_money").getComponent(cc.Label).string = "50";
            tween(this.node).call(function () {
                this.setting.active = false;
                this.moneyTop.scale = 0;
                this.moneyTop.opacity = 0;
                EffectManager_1.default.showButton(this.moneyTop, 0.2);
                EffectManager_1.default.showButton(this.ads, 0.2);
                this.effectMoneyFly();
                this.showButtonAdsEndGame(onAds);
                var p = cc.instantiate(this.partical);
                this.node.addChild(p);
                p.position = cc.v3(0, 230);
                p.zIndex = cc.macro.MIN_ZINDEX + 1;
            }.bind(this))
                .delay(1.25)
                .call(function () {
                _this.moneyContainer.scale = 0;
                _this.moneyContainer.opacity = 0;
                EffectManager_1.default.showButton(_this.moneyContainer, 0.7);
            })
                .delay(1)
                .call(function () {
                var money = _this._gameManager._levelCurrent.script._money;
                _this._gameManager.addMoney(money);
            })
                .delay(1.5)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.home, 0.7);
            })
                .delay(0.3)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.invite, 0.7);
            })
                .delay(0.5)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.next, 0.7);
            })
                .delay(0.3)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.replay, 0.7);
                var p = _this.node.getChildByName("Partical");
                if (p) {
                    p.destroy();
                }
            })
                .start();
        }
        else {
            this.uiEndGame.forEach(function (element) {
                element.active = isShow;
            });
            this.node.children.forEach(function (children) {
                if (children.name == "Money") {
                    children.destroy();
                }
            });
        }
    };
    UIController.prototype.effectMoneyFly = function () {
        EffectManager_1.default.effectFlyMoney(this.money, this.node);
    };
    //Hiển thị giới thiệu lý do Lupin vào tù
    UIController.prototype.showUIIntroduce = function (isShow) {
        var _this = this;
        this.background.active = false;
        this.home.active = false;
        this.tapToStart.position = cc.v3(0, 213);
        EffectManager_1.default.effectScaleStart(this.tapToStart);
        if (isShow) {
            this.uiIntroduce.forEach(function (element) {
                element.opacity = 0;
            });
            tween(this.node).call(function () {
                EffectManager_1.default.effectScaleOption(_this.setting, 0.3);
            })
                .delay(0.4)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.moneyTop, 0.3);
            })
                .delay(0.4)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.levels, 0.3);
            })
                .delay(0.4)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.tapToStart, 0.3);
            })
                .start();
        }
        else {
            this.uiIntroduce.forEach(function (element) {
                element.active = isShow;
            });
        }
    };
    UIController.prototype.showUIContinue = function (isShow) {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var _data = data;
            if (_data.money < 200) {
                _this.uiContinue[3].getChildByName("txt_money").color = cc.color(255, 100, 100);
                _this.uiContinue[3].getChildByName("txt_money").getComponent(cc.LabelOutline).color = cc.color(255, 0, 0);
            }
            else {
                _this.uiContinue[3].getChildByName("txt_money").color = cc.color(255, 255, 255);
                _this.uiContinue[3].getChildByName("txt_money").getComponent(cc.LabelOutline).color = cc.color(77, 77, 77);
            }
        });
        this.background.active = isShow;
        for (var _i = 0, _a = this.uiContinue; _i < _a.length; _i++) {
            var node = _a[_i];
            node.active = isShow;
        }
        if (isShow) {
            this.showButtonAdsContinue(onAds);
        }
    };
    UIController.prototype.showComingSoon = function () {
        var comingSoon = this.node.getChildByName("ComingSoon");
        if (comingSoon) {
            comingSoon.active = true;
        }
        else {
            comingSoon = cc.instantiate(this.comingSoon);
            this.node.addChild(comingSoon);
        }
        this.effectMoneyFly();
    };
    UIController.prototype.showUIControlling = function (isShow) {
        if (isShow) {
            this.showUIIntroduce(true);
        }
        else {
            this.uiControlling.forEach(function (node) {
                node.active = false;
            });
        }
    };
    UIController.prototype.showButtonAdsContinue = function (isShow) {
        this.ads2.active = isShow;
    };
    UIController.prototype.showButtonAdsEndGame = function (isShow) {
        this.ads.active = isShow;
    };
    UIController.prototype.showAlert = function (txt, time) {
        if (txt === void 0) { txt = ''; }
        if (time === void 0) { time = 0; }
        var alert = this.node.getChildByName("Alert");
        if (alert) {
            alert.active = true;
        }
        else {
            alert = cc.instantiate(this.alert);
            this.node.addChild(alert);
        }
        if (txt) {
            var alertController = alert.getComponent('Alert');
            alertController.setText(txt);
        }
        time && this.scheduleOnce(function () { return alert.active = false; }, time);
    };
    UIController.prototype.setMoney = function (money) {
        var _money = this.moneyContainer.getChildByName("txt_money");
        var str = _money.getComponent(cc.Label).string;
        str = (Number(str) + money).toString();
        _money.getComponent(cc.Label).string = str;
    };
    UIController.prototype.showGuide = function (bool) {
        var _this = this;
        var hand = this.node.getChildByName("hand");
        if (bool) {
            tween(this.node).delay(1)
                .call(function () {
                _this.background2.active = true;
                _this.background2.zIndex = cc.macro.MAX_ZINDEX - 100;
                _this.background2.opacity = 150;
                hand.zIndex = cc.macro.MAX_ZINDEX;
                tween(hand).delay(1).repeatForever(tween(hand).call(function () {
                    hand.position = cc.v3(_this.tapToStart.x - 50, _this.tapToStart.y - 500);
                    hand.opacity = 0;
                    hand.active = true;
                })
                    .parallel(tween(hand).to(0.7, { opacity: 255 }), tween(hand).to(0.7, { position: cc.v3(_this.tapToStart.x - 50, _this.tapToStart.y - 300) }).call(function () {
                    cc.tween(hand).to(0.5, { scale: 0.9 }, { easing: "cubicIn" }).to(0.5, { scale: 1 }, { easing: "cubicOut" }).start();
                }))
                    .delay(1))
                    .start();
            }).start();
        }
        else {
            cc.Tween.stopAllByTarget(hand);
            hand.active = false;
            tween(this.background2).to(0.3, { opacity: 0 })
                .call(function () {
                _this.background2.active = false;
            })
                .start();
        }
    };
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "home", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "moneyContainer", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "moneyTop", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "levels", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "bed", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "ads", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "replay", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "next", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "tapToStart", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "setting", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "successful", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "money", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "second", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "countDown", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "continue", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "money2", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "ads2", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "point", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "comingSoon", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "alert", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "invite", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "partical", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "background2", void 0);
    UIController = __decorate([
        ccclass
    ], UIController);
    return UIController;
}(cc.Component));
exports.default = UIController;

cc._RF.pop();