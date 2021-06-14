"use strict";
cc._RF.push(module, '7be24qOSP5BCqev62sqCXxY', 'CountDown5s');
// Scripts/CountDown5s.ts

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
var EventManager_1 = require("./EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TIME = 5;
var CountDown5s = /** @class */ (function (_super) {
    __extends(CountDown5s, _super);
    function CountDown5s() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countDown = null;
        return _this;
    }
    CountDown5s.prototype.onEnable = function () {
        this.runCountDown(TIME);
    };
    CountDown5s.prototype.onDisable = function () {
        this.stopCountDown();
    };
    CountDown5s.prototype.runCountDown = function (second) {
        var start = Date.now();
        var end = start + second * 1000;
        var temp = second;
        this.countDown = function () {
            var milisecond = Date.now() - start;
            var percent = 1 - (1 / ((second * 1000) / (milisecond)));
            this.node.getComponent(cc.Sprite).fillRange = percent;
            this.node.getChildByName("Second").getComponent(cc.Label).string = Math.floor(6 - milisecond / 1000);
            if (percent < -0.009) {
                this.node.getComponent(cc.Sprite).fillRange = 0;
                var gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
                var currentScene = gameManager._currentScene;
                gameManager._ui.showUIContinue(false);
                if (currentScene) {
                    EventManager_1.default.sendRequestPlayStageBegin(currentScene);
                }
                this.unschedule(this.countDown);
            }
        };
        this.schedule(this.countDown, 0.01);
    };
    CountDown5s.prototype.stopCountDown = function () {
        this.unschedule(this.countDown);
        console.log("%cStop CountDown", "color:orange");
    };
    CountDown5s = __decorate([
        ccclass
    ], CountDown5s);
    return CountDown5s;
}(cc.Component));
exports.default = CountDown5s;

cc._RF.pop();