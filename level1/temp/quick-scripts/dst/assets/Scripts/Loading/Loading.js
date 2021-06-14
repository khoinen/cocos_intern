
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Loading/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xvYWRpbmcvTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNDQztRQW5DRyxTQUFHLEdBQWMsRUFBRSxDQUFDOztJQW1DeEIsQ0FBQztJQWpDRywyQkFBUSxHQUFSO1FBQ0ksS0FBZ0IsVUFBUSxFQUFSLEtBQUEsSUFBSSxDQUFDLEdBQUcsRUFBUixjQUFRLEVBQVIsSUFBUSxFQUN4QjtZQURLLElBQUksR0FBRyxTQUFBO1lBRVIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLEtBQWdCLFVBQVEsRUFBUixLQUFBLElBQUksQ0FBQyxHQUFHLEVBQVIsY0FBUSxFQUFSLElBQVEsRUFDeEI7WUFESyxJQUFJLEdBQUcsU0FBQTtZQUVSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQzNCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUM7YUFDNUQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUM7YUFDeEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNsQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FDdkMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQzthQUM1RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQzthQUN4RCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUN0QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDO2FBQzVELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDO2FBQ3hELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFISCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0M1QjtJQUFELGVBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBc0NqRDtrQkF0Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvdDogY2MuTm9kZVtdID0gW107XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgZG90IG9mIHRoaXMuZG90KVxuICAgICAgICB7XG4gICAgICAgICAgICBkb3QueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb24oKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGRvdCBvZiB0aGlzLmRvdClcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGRvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG90WzBdKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4yLCB7cG9zaXRpb246IGNjLnYzKDAsIDMwKX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSlcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMiwge3Bvc2l0aW9uOiBjYy52MygwLCAtMzApfSwge2Vhc2luZzogXCJjdWJpY091dFwifSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgICAgICkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb3RbMV0pLmRlbGF5KDAuMTUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjIsIHtwb3NpdGlvbjogY2MudjMoMCwgMzApfSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KVxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4yLCB7cG9zaXRpb246IGNjLnYzKDAsIC0zMCl9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC41KVxuICAgICAgICAgICAgKS5zdGFydCgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmRvdFsyXSkuZGVsYXkoMC4zKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4yLCB7cG9zaXRpb246IGNjLnYzKDAsIDMwKX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSlcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMiwge3Bvc2l0aW9uOiBjYy52MygwLCAtMzApfSwge2Vhc2luZzogXCJjdWJpY091dFwifSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgICAgICkuc3RhcnQoKTtcbiAgICB9XG5cbn1cbiJdfQ==