"use strict";
cc._RF.push(module, '53946CuBB5P87+zTy0UYp+D', 'ComingSoon2');
// ComingSoon/ComingSoon2.ts

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
var ComingSoon_1 = require("../Scripts/ComingSoon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ComingSoon2 = /** @class */ (function (_super) {
    __extends(ComingSoon2, _super);
    function ComingSoon2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComingSoon2.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.node.scale = 0.7;
    };
    ComingSoon2.prototype.onEnable = function () {
        var _this = this;
        cc.tween(this.node).parallel(cc.tween().to(0.2, { opacity: 255 }), cc.tween().to(0.2, { scale: 1 }, { easing: "quartOut" }))
            .call(function () {
            _this.node.on("touchend", _this.onClose, _this);
        })
            .start();
    };
    ComingSoon2.prototype.onClose = function () {
        var _this = this;
        cc.tween(this.node).parallel(cc.tween().to(0.2, { opacity: 0 }), cc.tween().to(0.2, { scale: 0.7 }, { easing: "quartOut" }))
            .call(function () {
            _this.node.active = false;
        })
            .start();
    };
    ComingSoon2 = __decorate([
        ccclass
    ], ComingSoon2);
    return ComingSoon2;
}(ComingSoon_1.default));
exports.default = ComingSoon2;

cc._RF.pop();