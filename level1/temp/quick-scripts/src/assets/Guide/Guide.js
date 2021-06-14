"use strict";
cc._RF.push(module, '83398XgwSJOD6j4WX9n26Ap', 'Guide');
// Guide/Guide.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.hand.active = false;
        this._shadow = cc.find("Canvas/Shadow");
        this._setting = cc.find("Canvas/BtnSetting");
    };
    NewClass.prototype.onEnable = function () {
        this.action();
        this._setting.getChildByName("Block").active = true;
        this._setting.color = new cc.Color(150, 150, 150, 255);
    };
    NewClass.prototype.onDisable = function () {
        this._shadow.opacity = 0;
        this._setting.getChildByName("Block").active = false;
        this._setting.color = new cc.Color(255, 255, 255, 255);
    };
    NewClass.prototype.action = function () {
        var _this = this;
        this.hand.active = true;
        cc.tween(this._shadow).to(0.2, { opacity: 150 })
            .call(function () {
            cc.tween(_this.hand).repeatForever(cc.tween().call(function () {
                _this.hand.position = cc.v3(-310, -960);
                _this.hand.opacity = 0;
            })
                .parallel(cc.tween().to(0.5, { opacity: 255 }), cc.tween().to(0.5, { position: cc.v3(-310, -800) }).call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            }))
                .delay(0.7)
                .to(0.5, { position: cc.v3(0, -800) })
                .call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            })
                .delay(0.7)
                .to(0.5, { position: cc.v3(310, -800) })
                .call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            })
                .delay(0.7)
                .parallel(cc.tween().by(0.5, { position: cc.v3(200, 0) }), cc.tween().to(0.5, { opacity: 0 })))
                .start();
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();