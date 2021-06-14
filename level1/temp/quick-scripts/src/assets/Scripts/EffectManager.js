"use strict";
cc._RF.push(module, '651ccMOV4lP5YZQYpu0DX8S', 'EffectManager');
// Scripts/EffectManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var EffectManager = /** @class */ (function (_super) {
    __extends(EffectManager, _super);
    function EffectManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Làm scene tối dần, khi tối hoàn toàn sẽ gọi callback để chuyển cảnh
    EffectManager.hideScene = function (callback, node) {
        if (callback === void 0) { callback = null; }
        if (node === void 0) { node = null; }
        var shadow = cc.find("Canvas/Shadow");
        if (shadow) {
            if (callback) {
                tween(shadow).to(0.4, { opacity: 255 }).call(function () {
                    callback(node);
                }.bind(this)).start();
            }
        }
    };
    //Làm scene sáng dần
    EffectManager.showScene = function (callback) {
        if (callback === void 0) { callback = null; }
        var shadow = cc.find("Canvas/Shadow");
        if (shadow) {
            tween(shadow).to(0.4, { opacity: 0 }).start();
        }
    };
    EffectManager.effectFail = function () {
        var shadow = cc.find("Canvas/Shadow");
        var fail = cc.find("Canvas/Fail");
        if (shadow && fail) {
            tween(shadow).to(0.2, { opacity: 150, }, { easing: "cubicOut" }).start();
            tween(fail).to(0.2, { scale: 1, opacity: 255 }, { easing: "cubicOut" }).start();
        }
    };
    EffectManager.effectSuccess = function () {
        var shadow = cc.find("Canvas/Shadow");
        var success = cc.find("Canvas/Success");
        if (shadow && success) {
            tween(shadow).to(0.2, { opacity: 150, }, { easing: "cubicOut" }).start();
            tween(success).to(0.2, { scale: 0.7, opacity: 255 }, { easing: "cubicOut" }).start();
        }
    };
    //Hiệu ứng scale to ra
    EffectManager.effectScaleOption = function (node, timeScale) {
        node.active = true;
        node.scale = 0;
        tween(node).to(timeScale, { scale: 1, opacity: 255 }, { easing: "backOut" }).start();
    };
    EffectManager.effectHideButton = function (node, timeScale) {
        tween(node).to(timeScale, { scale: 0, opacity: 0 }, { easing: "backOut" }).start();
    };
    //Hiển thị/Ẩn các option
    EffectManager.showUI = function (isShow) {
        cc.find("Canvas/Level").active = isShow;
        cc.find("Canvas/OptionContainer").active = isShow;
    };
    //Hiệu ứng nhấy nháy
    EffectManager.flicker = function (node, times) {
        tween(node).repeat(times, tween().to(0.05, { opacity: 0 }).delay(0.1).to(0.05, { opacity: 255 })).start();
    };
    //Hiển thị tick xanh ở Option người chơi chọn
    EffectManager.showTick = function (option, node) {
        if (node === void 0) { node = null; }
        if (node)
            node.getChildByName("TrueAnswer").active = true;
        else
            cc.find("Canvas/Level/Line/TrueAnswer").active = true;
        var optionContainer = cc.find("Canvas/OptionContainer").getChildByName("option" + (option + 1));
        switch (option) {
            case 0:
                optionContainer.getChildByName("tick").active = true;
                break;
            case 1:
                optionContainer.getChildByName("tick").active = true;
                break;
            case 2:
                optionContainer.getChildByName("tick").active = true;
            default:
                break;
        }
    };
    //Hiển thị X ở Option người chơi chọn
    EffectManager.showX = function (option, node) {
        if (node === void 0) { node = null; }
        if (node)
            node.getChildByName("FalseAnswer").active = true;
        else
            cc.find("Canvas/Level/Line/FalseAnswer").active = true;
        var optionContainer = cc.find("Canvas/OptionContainer").getChildByName("option" + (option + 1));
        switch (option) {
            case 0:
                optionContainer.getChildByName("x").active = true;
                break;
            case 1:
                optionContainer.getChildByName("x").active = true;
                break;
            case 2:
                optionContainer.getChildByName("x").active = true;
            default:
                break;
        }
    };
    //Hiệu ứng tiền bay
    EffectManager.effectFlyMoney = function (child, parent) {
        var tempNode = [];
        for (var i = 0; i < 11; ++i) {
            var node = cc.instantiate(child);
            tempNode.push(node);
            parent.addChild(node);
        }
        var ui = cc.find("Canvas/UI");
        var _ui = ui.getComponent("UIController");
        var point = ui.convertToNodeSpaceAR(_ui.point.convertToWorldSpaceAR(ui));
        tween(tempNode[0]).to(1, { position: cc.v3(-110, 50) }, { easing: "quintOut" }).delay(0).bezierTo(0.5, cc.v2(-110, 50), cc.v2(-120, 350), cc.v2(point)).delay(0.2).call(function () {
            tempNode[0].active = false;
            tempNode[0].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[1]).to(1, { position: cc.v3(-52, 143) }, { easing: "quintOut" }).delay(0.05).bezierTo(0.5, cc.v2(-52, 143), cc.v2(-65, 310), cc.v2(point)).delay(0.2).call(function () {
            tempNode[1].active = false;
            tempNode[1].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[2]).to(1, { position: cc.v3(-240, 114) }, { easing: "quintOut" }).delay(0.05).bezierTo(0.5, cc.v2(-240, 114), cc.v2(-310, 300), cc.v2(point)).delay(0.2).call(function () {
            tempNode[2].active = false;
            tempNode[2].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[3]).to(1, { position: cc.v3(100, 200) }, { easing: "quintOut" }).delay(0.01).bezierTo(0.5, cc.v2(100, 200), cc.v2(305, 210), cc.v2(point)).delay(0.2).call(function () {
            tempNode[3].active = false;
            tempNode[3].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[4]).to(1, { position: cc.v3(165, 202) }, { easing: "quintOut" }).delay(0.1).bezierTo(0.5, cc.v2(165, 202), cc.v2(360, 310), cc.v2(point)).delay(0.2).call(function () {
            tempNode[4].active = false;
            tempNode[4].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[5]).to(1, { position: cc.v3(102, 280) }, { easing: "quintOut" }).delay(0.1).bezierTo(0.5, cc.v2(102, 280), cc.v2(111, 400), cc.v2(point)).delay(0.2).call(function () {
            tempNode[5].active = false;
            tempNode[5].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[6]).to(1, { position: cc.v3(208, 105) }, { easing: "quintOut" }).delay(0.15).bezierTo(0.5, cc.v2(208, 105), cc.v2(360, 142), cc.v2(point)).delay(0.2).call(function () {
            tempNode[6].active = false;
            tempNode[6].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[7]).to(1, { position: cc.v3(-193, -169) }, { easing: "quintOut" }).delay(0.15).bezierTo(0.5, cc.v2(-193, -169), cc.v2(-322, 40), cc.v2(point)).delay(0.2).call(function () {
            tempNode[7].active = false;
            tempNode[7].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[8]).to(1, { position: cc.v3(-100, -215) }, { easing: "quintOut" }).delay(0.2).bezierTo(0.5, cc.v2(-100, -215), cc.v2(127, -280), cc.v2(point)).delay(0.2).call(function () {
            tempNode[8].active = false;
            tempNode[8].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[9]).to(1, { position: cc.v3(71, -121) }, { easing: "quintOut" }).delay(0.2).bezierTo(0.5, cc.v2(71, -121), cc.v2(330, -88), cc.v2(point)).delay(0.2).call(function () {
            tempNode[9].active = false;
            tempNode[9].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[10]).to(1, { position: cc.v3(35, -2) }, { easing: "quintOut" }).delay(0.025).bezierTo(0.5, cc.v2(35, -2), cc.v2(0, 0), cc.v2(point)).delay(0.2).call(function () {
            tempNode[10].active = false;
            tempNode[10].position = cc.v3(0, 0);
        }).start();
    };
    //Button dần hiện ra
    EffectManager.showButton = function (node, timeScale) {
        node.active = true;
        node.scale = 0;
        node.opacity = 0;
        tween(node).to(timeScale, { scale: 1, opacity: 255 }, { easing: "quadIn" }).start();
    };
    //Hiệu ứng nút to nhỏ liên tục
    EffectManager.scaleForever = function (node, min, max, timeScale) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        if (timeScale === void 0) { timeScale = null; }
        if (!(min && max && timeScale)) {
            cc.Tween.stopAllByTarget(node);
            return;
        }
        node.active = true;
        node.scale = 1;
        node.opacity = 0;
        tween(node).to(timeScale, { scale: max, opacity: 255 })
            .repeatForever(tween().to(timeScale, { scale: min }).to(timeScale, { scale: max })).start();
    };
    //Hiệu ứng nút Tap To Start đầu game
    EffectManager.effectScaleStart = function (node) {
        node.active = true;
        tween(node).to(0.25, { scale: 0.95 }, { easing: "backOut" })
            .repeatForever(tween().to(0.8, { scale: 0.95 }, { easing: "backOut" })
            .delay(0.4)
            .to(0.8, { scale: 1.05 }, { easing: "backOut" })
            .delay(0.4))
            .start();
    };
    EffectManager.effectScaleButton = function (node, x, y, duration) {
        node.active = true;
        node.opacity = 255;
        tween(node).parallel(tween().to(duration, { scaleX: x + 0.1 }, { easing: "cubicOut" }).to(0.3, { scaleX: x }), tween().to(duration, { scaleY: y + 0.1 }, { easing: "cubicOut" }).to(0.3, { scaleY: y })).start();
    };
    EffectManager = __decorate([
        ccclass
    ], EffectManager);
    return EffectManager;
}(cc.Component));
exports.default = EffectManager;

cc._RF.pop();