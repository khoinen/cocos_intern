"use strict";
cc._RF.push(module, '0fbf2HST0tF/o8oPnW3t+5Y', 'FishSwim');
// Scripts/Other/FishSwim.ts

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
var FISHS_SPEED = [250, 500, 200, 300, 200, 150]; // speed, distant per sec
var FISHS_DELAY = [3, 6, 2, 2, 4, 1];
var FishSwim = /** @class */ (function (_super) {
    __extends(FishSwim, _super);
    function FishSwim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fishs = [];
        _this._durations = [];
        _this._fishsConfig = [];
        return _this;
    }
    FishSwim.prototype.onLoad = function () {
        var _this = this;
        this._fishsConfig = [];
        var width = this.node.width;
        var haftWidth = width / 2;
        FISHS_SPEED.forEach(function (sp) {
            _this._durations.push(parseInt(width / sp + ''));
        });
        this.fishs.forEach(function (f, i) {
            var haftNodeWidth = f.width / 2;
            var posX = f.position.x;
            _this._fishsConfig.push({
                node: f,
                duration: Math.abs(posX * 2) / FISHS_SPEED[i],
                startX: posX,
                endX: -posX,
                delay: FISHS_DELAY[i],
                y: f.y,
                scaleX: f.scaleX,
            });
        });
        cc.Tween.stopAllByTag(-100);
    };
    FishSwim.prototype.onEnable = function () {
        this._fishsConfig.forEach(function (config, i) {
            config.node.position.x = config.startX;
            config.node.scaleX = config.scaleX;
            tween(config.node)
                .tag(-100)
                .delay(config.delay / 2)
                .repeatForever(tween()
                .to(config.duration, { position: cc.v3(config.endX, config.y) })
                .delay(config.delay)
                .call(function () {
                config.node.scaleX = -config.scaleX;
            })
                .to(config.duration, { position: cc.v3(config.startX, config.y) })
                .delay(config.delay)
                .call(function () {
                config.node.scaleX = config.scaleX;
            }))
                .start();
        });
    };
    FishSwim.prototype.onDisable = function () {
        cc.Tween.stopAllByTag(-100);
    };
    __decorate([
        property([cc.Node])
    ], FishSwim.prototype, "fishs", void 0);
    FishSwim = __decorate([
        ccclass
    ], FishSwim);
    return FishSwim;
}(cc.Component));
exports.default = FishSwim;

cc._RF.pop();