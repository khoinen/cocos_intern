
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UIController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsK0JBQTBCO0FBQzFCLGlEQUE0QztBQUd0QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUdqQjtJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWtWQztRQS9VRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBWSxJ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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuL0VmZmVjdE1hbmFnZXJcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL0RhdGFcIjtcbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuL0J1bmRsZU1hbmFnZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcblxubGV0IG9uQWRzID0gdHJ1ZTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob21lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbW9uZXlDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbW9uZXlUb3A6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGV2ZWxzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJlZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhZHM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVwbGF5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5leHQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFwVG9TdGFydDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXR0aW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHN1Y2Nlc3NmdWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBtb25leTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNlY29uZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb3VudERvd246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGludWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbW9uZXkyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFkczI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY29taW5nU29vbjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYWxlcnQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbnZpdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwYXJ0aWNhbDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgdWlFbmRHYW1lID0gW107XG4gICAgcHJpdmF0ZSB1aUludHJvZHVjZSA9IFtdO1xuICAgIHByaXZhdGUgdWlDb250aW51ZSA9IFtdO1xuICAgIHByaXZhdGUgdWlDb250cm9sbGluZyA9IFtdO1xuICAgIHByaXZhdGUgX3dhdGNoQWRzID0gW107XG4gICAgcHJpdmF0ZSBfZ2FtZU1hbmFnZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2J1bmRsZUluc3RhbmNlO1xuICAgIG9uTG9hZCAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC56SW5kZXggPSBjYy5tYWNyby5NSU5fWklOREVYO1xuICAgICAgICB0aGlzLnVpRW5kR2FtZSA9IFt0aGlzLmhvbWUsIHRoaXMuYWRzLCB0aGlzLnJlcGxheSwgdGhpcy5uZXh0LCB0aGlzLnN1Y2Nlc3NmdWwsIHRoaXMubW9uZXlDb250YWluZXIsIHRoaXMubW9uZXlUb3AsIHRoaXMuaW52aXRlXTtcbiAgICAgICAgdGhpcy51aUludHJvZHVjZSA9IFt0aGlzLmxldmVscywgdGhpcy5iZWQsIHRoaXMudGFwVG9TdGFydCwgdGhpcy5zZXR0aW5nLCB0aGlzLm1vbmV5VG9wXTtcbiAgICAgICAgdGhpcy51aUNvbnRpbnVlID0gW3RoaXMuY29udGludWUsIHRoaXMuY291bnREb3duLCB0aGlzLnNlY29uZCwgdGhpcy5tb25leTIsIHRoaXMuYWRzMiwgdGhpcy5ob21lXTtcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsaW5nID0gW3RoaXMubGV2ZWxzLCB0aGlzLmJlZCwgdGhpcy50YXBUb1N0YXJ0LCB0aGlzLnNldHRpbmddO1xuICAgICAgICB0aGlzLl93YXRjaEFkcyA9IFt0aGlzLmFkcywgdGhpcy5hZHMyXTtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAyO1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlID0gQnVuZGxlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlICgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93SG9tZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFwVG9TdGFydC56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYIC0gMTtcbiAgICB9XG5cbiAgICBzaG93SG9tZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93VUlFbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zaG93VUlJbnRyb2R1Y2UodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2hvd1VJQ29udGludWUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNob3dCdXR0b25BZHNDb250aW51ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbkFkc0VuZEdhbWUoZmFsc2UpO1xuICAgICAgICB0aGlzLnRhcFRvU3RhcnQucG9zaXRpb24gPSBjYy52MygwLCAyMTMpO1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlU3RhcnQodGhpcy50YXBUb1N0YXJ0KTtcbiAgICB9XG4gICAgLy9IaeG7g24gdGjhu4sgY8OhYyBoaeG7h3Ug4bupbmcgc2NhbGUsIHRp4buBbiBiYXkga2hpIG5nxrDhu51pIGNoxqFpIGNo4buNbiDEkcO6bmcgxJHDoXAgw6FuXG4gICAgc2hvd1VJRW5kR2FtZShpc1Nob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgaWYgKGlzU2hvdylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2NsaWNrWDQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb25leUNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiNTBcIjtcbiAgICAgICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlUb3Auc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlUb3Aub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93QnV0dG9uKHRoaXMubW9uZXlUb3AsIDAuMik7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93QnV0dG9uKHRoaXMuYWRzLCAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0TW9uZXlGbHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCdXR0b25BZHNFbmRHYW1lKG9uQWRzKTtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFydGljYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICBwLnBvc2l0aW9uID0gY2MudjMoMCwgMjMwKTtcbiAgICAgICAgICAgICAgICBwLnpJbmRleCA9IGNjLm1hY3JvLk1JTl9aSU5ERVggKyAxO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmRlbGF5KDEuMjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUNvbnRhaW5lci5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUNvbnRhaW5lci5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dCdXR0b24odGhpcy5tb25leUNvbnRhaW5lciwgMC43KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbW9uZXkgPSB0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LnNjcmlwdC5fbW9uZXk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYWRkTW9uZXkobW9uZXkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgxLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RTY2FsZU9wdGlvbih0aGlzLmhvbWUsIDAuNyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMuaW52aXRlLCAwLjcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RTY2FsZU9wdGlvbih0aGlzLm5leHQsIDAuNyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMucmVwbGF5LCAwLjcpO1xuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGFydGljYWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51aUVuZEdhbWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5uYW1lID09IFwiTW9uZXlcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVmZmVjdE1vbmV5Rmx5KCk6IHZvaWQge1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdEZseU1vbmV5KHRoaXMubW9uZXksIHRoaXMubm9kZSk7XG4gICAgfVxuICAgIFxuICAgIC8vSGnhu4NuIHRo4buLIGdp4bubaSB0aGnhu4d1IGzDvSBkbyBMdXBpbiB2w6BvIHTDuVxuICAgIHNob3dVSUludHJvZHVjZShpc1Nob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFwVG9TdGFydC5wb3NpdGlvbiA9IGNjLnYzKDAsIDIxMyk7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVTdGFydCh0aGlzLnRhcFRvU3RhcnQpO1xuICAgICAgICBpZiAoaXNTaG93KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVpSW50cm9kdWNlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMuc2V0dGluZywgMC4zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMC40KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVPcHRpb24odGhpcy5tb25leVRvcCwgMC4zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMC40KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVPcHRpb24odGhpcy5sZXZlbHMsIDAuMyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuNClcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMudGFwVG9TdGFydCwgMC4zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudWlJbnRyb2R1Y2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1VJQ29udGludWUoaXNTaG93KTogdm9pZCB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IF9kYXRhID0gZGF0YVxuICAgICAgICAgICAgaWYgKF9kYXRhLm1vbmV5IDwgMjAwIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udGludWVbM10uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfbW9uZXlcIikuY29sb3IgPSBjYy5jb2xvcigyNTUsIDEwMCwgMTAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udGludWVbM10uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfbW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb250aW51ZVszXS5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb250aW51ZVszXS5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IGNjLmNvbG9yKDc3LCA3NywgNzcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5hY3RpdmUgPSBpc1Nob3c7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy51aUNvbnRpbnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dCdXR0b25BZHNDb250aW51ZShvbkFkcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29taW5nU29vbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbWluZ1Nvb24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb21pbmdTb29uXCIpO1xuICAgICAgICBpZiAoY29taW5nU29vbilcbiAgICAgICAge1xuICAgICAgICAgICAgY29taW5nU29vbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29taW5nU29vbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29taW5nU29vbik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY29taW5nU29vbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZmZlY3RNb25leUZseSgpO1xuICAgIH1cblxuICAgIHNob3dVSUNvbnRyb2xsaW5nKGlzU2hvdyk6IHZvaWQge1xuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dVSUludHJvZHVjZSh0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsaW5nLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0J1dHRvbkFkc0NvbnRpbnVlKGlzU2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFkczIuYWN0aXZlID0gaXNTaG93O1xuICAgIH1cbiAgICBcbiAgICBzaG93QnV0dG9uQWRzRW5kR2FtZShpc1Nob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZHMuYWN0aXZlID0gaXNTaG93O1xuICAgIH1cblxuICAgIHNob3dBbGVydCh0eHQ9JycsIHRpbWU9MCk6IHZvaWQge1xuICAgICAgICBsZXQgYWxlcnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJBbGVydFwiKTtcbiAgICAgICAgaWYgKGFsZXJ0KVxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFsZXJ0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChhbGVydCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHh0KSB7XG4gICAgICAgICAgICBjb25zdCBhbGVydENvbnRyb2xsZXIgPSBhbGVydC5nZXRDb21wb25lbnQoJ0FsZXJ0JylcbiAgICAgICAgICAgIGFsZXJ0Q29udHJvbGxlci5zZXRUZXh0KHR4dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgJiYgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gYWxlcnQuYWN0aXZlID0gZmFsc2UsIHRpbWUpXG4gICAgfVxuXG4gICAgc2V0TW9uZXkobW9uZXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgX21vbmV5ID0gdGhpcy5tb25leUNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKTtcbiAgICAgICAgbGV0IHN0ciA9IF9tb25leS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcbiAgICAgICAgc3RyID0gKE51bWJlcihzdHIpICsgbW9uZXkpLnRvU3RyaW5nKCk7XG4gICAgICAgIF9tb25leS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0cjtcbiAgICB9XG5cbiAgICBzaG93R3VpZGUoYm9vbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XG4gICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZDIuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWCAtIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kMi5vcGFjaXR5ID0gMTUwO1xuICAgICAgICAgICAgICAgICAgICBoYW5kLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKGhhbmQpLmRlbGF5KDEpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0d2VlbihoYW5kKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZC5wb3NpdGlvbiA9IGNjLnYzKHRoaXMudGFwVG9TdGFydC54IC0gNTAsIHRoaXMudGFwVG9TdGFydC55IC0gNTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKGhhbmQpLnRvKDAuNywge29wYWNpdHk6IDI1NX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbihoYW5kKS50bygwLjcsIHtwb3NpdGlvbjogY2MudjModGhpcy50YXBUb1N0YXJ0LnggLSA1MCwgdGhpcy50YXBUb1N0YXJ0LnkgLSAzMDApfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihoYW5kKS50bygwLjUsIHtzY2FsZTogMC45fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KS50bygwLjUsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChoYW5kKTtcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLmJhY2tncm91bmQyKS50bygwLjMsIHtvcGFjaXR5OiAwfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZDIuYWN0aXZlICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=