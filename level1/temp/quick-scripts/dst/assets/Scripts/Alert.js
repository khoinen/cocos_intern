
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUE7QUFHdEI7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFxQkM7UUFsQkcsVUFBSSxHQUFZLElBQUksQ0FBQzs7SUFrQnpCLENBQUM7SUFoQkcsd0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDWCxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUM7YUFDckQsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDNUIsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQ3RCLENBQUM7SUFqQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDRztJQUhKLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FxQnpCO0lBQUQsWUFBQztDQXJCRCxBQXFCQyxDQXJCa0MsRUFBRSxDQUFDLFNBQVMsR0FxQjlDO2tCQXJCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0d2Vlbih0aGlzLnRleHQpXHJcbiAgICAgICAgICAgIC50byguNSwge3NjYWxlOiAxLCBvcGFjaXR5OiAyNTV9LCB7ZWFzaW5nOiBcImN1YmljSW5cIn0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dCh0eHQpIHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMudGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gdHh0XHJcbiAgICB9XHJcbn1cclxuIl19