"use strict";
cc._RF.push(module, '044d3DDMC9Kf5Tpw9Zpr6YN', 'Alert');
// Scripts/Alert.ts

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
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        return _this;
    }
    Alert.prototype.onEnable = function () {
        this.text.scale = 0;
        this.text.opacity = 0;
        tween(this.text)
            .to(.5, { scale: 1, opacity: 255 }, { easing: "cubicIn" })
            .start();
    };
    Alert.prototype.onClose = function () {
        this.node.active = false;
    };
    Alert.prototype.setText = function (txt) {
        var label = this.text.getComponent(cc.Label);
        label.string = txt;
    };
    __decorate([
        property(cc.Node)
    ], Alert.prototype, "text", void 0);
    Alert = __decorate([
        ccclass
    ], Alert);
    return Alert;
}(cc.Component));
exports.default = Alert;

cc._RF.pop();