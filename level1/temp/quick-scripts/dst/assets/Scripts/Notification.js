
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Notification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL05vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXFCQztRQWxCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFZdEIsQ0FBQztJQVZHLCtCQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUMvQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDdEYsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUNUO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNJO0lBR3ZCO1FBREMsUUFBUSxFQUFFO2tEQUNVO0lBR3JCO1FBREMsUUFBUSxFQUFFOytDQUNPO0lBVEQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFCaEM7SUFBRCxtQkFBQztDQXJCRCxBQXFCQyxDQXJCeUMsRUFBRSxDQUFDLFNBQVMsR0FxQnJEO2tCQXJCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIGR1cmF0aW9uOiBOdW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KClcbiAgICBkZWxheTogTnVtYmVyID0gMDtcblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhYmVsLm5vZGUucG9zaXRpb24gPSBjYy52Myg1NTAsIDApO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxhYmVsLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5kZWxheShOdW1iZXIodGhpcy5kZWxheSkpLmJ5KE51bWJlcih0aGlzLmR1cmF0aW9uKSwge3Bvc2l0aW9uOiBjYy52MygtMjE3MCwgMCl9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUucG9zaXRpb24gPSBjYy52Myg1NTAsIDApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19