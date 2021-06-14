
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Other/FishSwim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL090aGVyL0Zpc2hTd2ltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUE7QUFFdEIsSUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUUseUJBQXlCO0FBQzdFLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUd0QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdFQztRQTdERyxXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQTBEdEIsQ0FBQztJQXZERyx5QkFBTSxHQUFOO1FBQUEsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQzdCLElBQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUE7UUFFM0IsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7WUFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEIsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7WUFDakMsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDekIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLElBQUksRUFBRSxDQUFDO2dCQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsQ0FBQyxJQUFJO2dCQUNYLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBR0QsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQTtZQUVsQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7aUJBQ1QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QixhQUFhLENBQ1YsS0FBSyxFQUFFO2lCQUNGLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztpQkFDN0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ25CLElBQUksQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDdkMsQ0FBQyxDQUFDO2lCQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztpQkFDL0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ25CLElBQUksQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO1lBQ3RDLENBQUMsQ0FBQyxDQUNUO2lCQUNBLEtBQUssRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUE1REQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7MkNBQ0U7SUFITCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0U1QjtJQUFELGVBQUM7Q0FoRUQsQUFnRUMsQ0FoRXFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0VqRDtrQkFoRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHR3ZWVuID0gY2MudHdlZW5cclxuXHJcbmNvbnN0IEZJU0hTX1NQRUVEID0gWzI1MCwgNTAwLCAyMDAsIDMwMCwgMjAwLCAxNTBdICAvLyBzcGVlZCwgZGlzdGFudCBwZXIgc2VjXHJcbmNvbnN0IEZJU0hTX0RFTEFZID0gWzMsIDYsIDIsIDIsIDQsIDFdXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoU3dpbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGZpc2hzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBfZHVyYXRpb25zID0gW107XHJcbiAgICBfZmlzaHNDb25maWcgPSBbXTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2Zpc2hzQ29uZmlnID0gW11cclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMubm9kZS53aWR0aFxyXG4gICAgICAgIGNvbnN0IGhhZnRXaWR0aCA9IHdpZHRoIC8gMlxyXG5cclxuICAgICAgICBGSVNIU19TUEVFRC5mb3JFYWNoKChzcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbnMucHVzaChwYXJzZUludCh3aWR0aCAvIHNwICsgJycpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZmlzaHMuZm9yRWFjaCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYWZ0Tm9kZVdpZHRoID0gZi53aWR0aCAvIDJcclxuICAgICAgICAgICAgY29uc3QgcG9zWCA9IGYucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLl9maXNoc0NvbmZpZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IGYsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5hYnMocG9zWCAqIDIpIC8gRklTSFNfU1BFRURbaV0sXHJcbiAgICAgICAgICAgICAgICBzdGFydFg6IHBvc1gsXHJcbiAgICAgICAgICAgICAgICBlbmRYOiAtcG9zWCxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBGSVNIU19ERUxBWVtpXSxcclxuICAgICAgICAgICAgICAgIHk6IGYueSxcclxuICAgICAgICAgICAgICAgIHNjYWxlWDogZi5zY2FsZVgsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFnKC0xMDApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuX2Zpc2hzQ29uZmlnLmZvckVhY2goKGNvbmZpZywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25maWcubm9kZS5wb3NpdGlvbi54ID0gY29uZmlnLnN0YXJ0WFxyXG4gICAgICAgICAgICBjb25maWcubm9kZS5zY2FsZVggPSBjb25maWcuc2NhbGVYXHJcblxyXG4gICAgICAgICAgICB0d2Vlbihjb25maWcubm9kZSlcclxuICAgICAgICAgICAgICAgIC50YWcoLTEwMClcclxuICAgICAgICAgICAgICAgIC5kZWxheShjb25maWcuZGVsYXkgLyAyKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oY29uZmlnLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKGNvbmZpZy5lbmRYLCBjb25maWcueSl9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoY29uZmlnLmRlbGF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcubm9kZS5zY2FsZVggPSAtY29uZmlnLnNjYWxlWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oY29uZmlnLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKGNvbmZpZy5zdGFydFgsIGNvbmZpZy55KX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShjb25maWcuZGVsYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5ub2RlLnNjYWxlWCA9IGNvbmZpZy5zY2FsZVhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFnKC0xMDApXHJcbiAgICB9XHJcbn1cclxuIl19