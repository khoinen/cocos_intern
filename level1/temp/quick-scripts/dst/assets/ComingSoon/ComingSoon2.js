
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ComingSoon/ComingSoon2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21pbmdTb29uL0NvbWluZ1Nvb24yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUV6QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBVTtJQUFuRDs7SUE0QkEsQ0FBQztJQTFCRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUN4QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUNsQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUN2RDthQUNBLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFBQSxpQkFTQztRQVJHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FDcEIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFDaEMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FDekQ7YUFDQSxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTNCZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRCL0I7SUFBRCxrQkFBQztDQTVCRCxBQTRCQyxDQTVCd0Msb0JBQVUsR0E0QmxEO2tCQTVCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21pbmdTb29uIGZyb20gXCIuLi9TY3JpcHRzL0NvbWluZ1Nvb25cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21pbmdTb29uMiBleHRlbmRzIENvbWluZ1Nvb24ge1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuNztcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5wYXJhbGxlbChcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yLCB7b3BhY2l0eTogMjU1fSksXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMiwge3NjYWxlOiAxfSwge2Vhc2luZzogXCJxdWFydE91dFwifSlcbiAgICAgICAgKVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oXCJ0b3VjaGVuZFwiLCB0aGlzLm9uQ2xvc2UsIHRoaXMpO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnBhcmFsbGVsKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yLCB7b3BhY2l0eTogMH0pLFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yLCB7c2NhbGU6IDAuN30sIHtlYXNpbmc6IFwicXVhcnRPdXRcIn0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==