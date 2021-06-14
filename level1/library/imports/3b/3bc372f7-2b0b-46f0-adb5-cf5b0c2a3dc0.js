"use strict";
cc._RF.push(module, '3bc37L3KwtG8K21z1sMKj3A', 'Notification');
// Scripts/Notification.ts

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
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.duration = 0;
        _this.delay = 0;
        return _this;
    }
    Notification.prototype.onEnable = function () {
        var _this = this;
        this.label.node.position = cc.v3(550, 0);
        cc.tween(this.label.node).repeatForever(cc.tween().delay(Number(this.delay)).by(Number(this.duration), { position: cc.v3(-2170, 0) })
            .call(function () {
            _this.label.node.position = cc.v3(550, 0);
        }))
            .start();
    };
    __decorate([
        property(cc.Label)
    ], Notification.prototype, "label", void 0);
    __decorate([
        property()
    ], Notification.prototype, "duration", void 0);
    __decorate([
        property()
    ], Notification.prototype, "delay", void 0);
    Notification = __decorate([
        ccclass
    ], Notification);
    return Notification;
}(cc.Component));
exports.default = Notification;

cc._RF.pop();