"use strict";
cc._RF.push(module, '2cb26ahkbZPCrGfz6CL5SeY', 'Loading');
// Scripts/Loading/Loading.ts

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
        _this.dot = [];
        return _this;
    }
    NewClass.prototype.onEnable = function () {
        for (var _i = 0, _a = this.dot; _i < _a.length; _i++) {
            var dot = _a[_i];
            dot.y = 0;
        }
        this.action();
    };
    NewClass.prototype.onDisable = function () {
        for (var _i = 0, _a = this.dot; _i < _a.length; _i++) {
            var dot = _a[_i];
            cc.Tween.stopAllByTarget(dot);
        }
    };
    NewClass.prototype.action = function () {
        cc.tween(this.dot[0]).repeatForever(cc.tween().by(0.2, { position: cc.v3(0, 30) }, { easing: "cubicIn" })
            .by(0.2, { position: cc.v3(0, -30) }, { easing: "cubicOut" })
            .delay(0.5)).start();
        cc.tween(this.dot[1]).delay(0.15).repeatForever(cc.tween().by(0.2, { position: cc.v3(0, 30) }, { easing: "cubicIn" })
            .by(0.2, { position: cc.v3(0, -30) }, { easing: "cubicOut" })
            .delay(0.5)).start();
        cc.tween(this.dot[2]).delay(0.3).repeatForever(cc.tween().by(0.2, { position: cc.v3(0, 30) }, { easing: "cubicIn" })
            .by(0.2, { position: cc.v3(0, -30) }, { easing: "cubicOut" })
            .delay(0.5)).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dot", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();