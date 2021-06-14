
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/HomeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1401dGXgNZBWa6wc2UrdD/k', 'HomeController');
// Scripts/HomeController.ts

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
var Data_1 = require("./Data");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lupin = null;
        _this.ui = null;
        _this.wall = null;
        _this.floor = null;
        _this.bed = null;
        _this.tv = null;
        _this.window = null;
        _this.pricture = null;
        _this.toilet = null;
        _this.dayCount = null;
        _this.notification = null;
        _this._decorations = [];
        return _this;
    }
    HomeController.prototype.onLoad = function () {
        this._decorations = [this.wall, this.floor, this.bed, this.tv, this.window, this.pricture, this.toilet];
        this.setCurrentDeco();
        this.setLupinLoop();
    };
    HomeController.prototype.onEnable = function () {
        this.notification.active = true;
        this.lupin.setSkin('Lupin');
    };
    HomeController.prototype.onDisable = function () {
        this.notification.active = false;
    };
    HomeController.prototype.moveVertical = function (distance, duration, cb) {
        if (cb === void 0) { cb = function () { }; }
        cc.tween(this.node)
            .by(duration, { position: cc.v3(0, -distance) })
            .call(cb)
            .start();
    };
    HomeController.prototype.setDecoration = function (decoIndex, sFrame) {
        var deco = this._decorations[decoIndex];
        if (deco) {
            deco.node.opacity = 180;
            deco.spriteFrame = sFrame;
            tween(deco.node)
                .delay(.5)
                .to(.3, { opacity: 255 })
                .start();
        }
    };
    HomeController.prototype.setCurrentDeco = function () {
        var _this = this;
        var gameData = Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var gameData = data;
            var currentDeco = gameData.currentDeco || {};
            Object.keys(currentDeco).forEach(function (cate) {
                var decoData = currentDeco[cate];
                cc.resources.load("Shop/" + decoData.type + "/" + cate + "_" + decoData.type, cc.SpriteFrame, function (err, sFrame) {
                    if (err) {
                        sFrame = null;
                    }
                    _this.setDecoration(decoData.cateIndex, sFrame);
                });
            });
        });
    };
    HomeController.prototype.setLupinLoop = function () {
        var _this = this;
        var count = 0;
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name === 'home/bed') {
                count++;
                if (count >= 4) {
                    count = 0;
                    _this.setLupinToilet();
                }
            }
            if (track.animation.name === 'emotion/sinister') {
                count++;
                if (count >= 7) {
                    count = 0;
                    _this.setLupinBed();
                }
            }
        });
        this.setLupinStand();
    };
    HomeController.prototype.setLupinOpacity = function () {
        this.lupin.node.opacity = 180;
        tween(this.lupin.node)
            .to(.5, { opacity: 255 })
            .start();
    };
    HomeController.prototype.setLupinBed = function () {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var gameData = data;
            var currentDeco = gameData.currentDeco;
            if (!currentDeco || !currentDeco.Giuong || !currentDeco.Giuong.type) {
                return _this.setLupinToilet();
            }
            _this.lupin.timeScale = 1;
            _this.lupin.setAnimation(0, 'emotion/idle', false);
            _this.lupin.setAnimation(1, 'home/bed', true);
            _this.lupin.clearTrack(0);
            _this.lupin.node.position = cc.v3(264, -378);
            _this.setLupinOpacity();
        });
    };
    HomeController.prototype.setLupinStand = function () {
        this.lupin.setAnimation(1, 'general/stand_thinking', false);
        this.lupin.setAnimation(0, 'emotion/sinister', true);
        this.lupin.node.position = cc.v3(19, -515);
        this.setLupinOpacity();
    };
    HomeController.prototype.setLupinToilet = function () {
        var _this = this;
        this.lupin.setAnimation(1, 'home/seat_toilet', false);
        this.lupin.setAnimation(0, 'emotion/idle', false);
        this.lupin.node.position = cc.v3(-110, -305);
        this.lupin.node.opacity = 180;
        tween(this.lupin.node)
            .to(.5, { opacity: 255 })
            .repeat(2, tween()
            .call(function () {
            _this.lupin.setAnimation(1, 'home/seat_toilet', true);
            _this.lupin.setAnimation(0, 'emotion/idle', true);
        })
            .delay(5)
            .call(function () {
            _this.lupin.clearTrack(0);
            _this.lupin.setAnimation(1, 'home/seat_toilet2', false);
        })
            .delay(3))
            .call(function () {
            _this.setLupinStand();
        })
            .start();
    };
    HomeController.prototype.updateCalendar = function () {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var day = 10 - (data.unlockedLevel % 10);
            _this.dayCount.string = day.toString();
        });
    };
    __decorate([
        property(sp.Skeleton)
    ], HomeController.prototype, "lupin", void 0);
    __decorate([
        property(cc.Node)
    ], HomeController.prototype, "ui", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "wall", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "floor", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "bed", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "tv", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "window", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "pricture", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "toilet", void 0);
    __decorate([
        property(cc.Label)
    ], HomeController.prototype, "dayCount", void 0);
    __decorate([
        property(cc.Node)
    ], HomeController.prototype, "notification", void 0);
    HomeController = __decorate([
        ccclass
    ], HomeController);
    return HomeController;
}(cc.Component));
exports.default = HomeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0hvbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBa01DO1FBL0xHLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBR3pCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFHdEIsUUFBRSxHQUFjLElBQUksQ0FBQztRQUdyQixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQStKOUIsQ0FBQztJQTdKRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN2RyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFD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QUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0M7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBakNaLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrTWxDO0lBQUQscUJBQUM7Q0FsTUQsQUFrTUMsQ0FsTTJDLEVBQUUsQ0FBQyxTQUFTLEdBa012RDtrQkFsTW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IHR3ZWVuID0gY2MudHdlZW47XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGx1cGluOiBzcC5Ta2VsZXRvbiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgd2FsbDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgZmxvb3I6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJlZDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgdHY6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHdpbmRvdzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpY3R1cmU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHRvaWxldDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBkYXlDb3VudDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm90aWZpY2F0aW9uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2RlY29yYXRpb25zID0gW107XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX2RlY29yYXRpb25zID0gW3RoaXMud2FsbCwgdGhpcy5mbG9vciwgdGhpcy5iZWQsIHRoaXMudHYsIHRoaXMud2luZG93LCB0aGlzLnByaWN0dXJlLCB0aGlzLnRvaWxldF1cbiAgICAgICAgdGhpcy5zZXRDdXJyZW50RGVjbygpXG4gICAgICAgIHRoaXMuc2V0THVwaW5Mb29wKClcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRTa2luKCdMdXBpbicpXG4gICAgfVxuICAgIFxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIG1vdmVWZXJ0aWNhbChkaXN0YW5jZSwgZHVyYXRpb24sIGNiID0gKCkgPT4ge30pIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmJ5KGR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKDAsIC1kaXN0YW5jZSl9KVxuICAgICAgICAgICAgLmNhbGwoY2IpXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuICAgIHNldERlY29yYXRpb24oZGVjb0luZGV4LCBzRnJhbWUpIHtcbiAgICAgICAgY29uc3QgZGVjbyA9IHRoaXMuX2RlY29yYXRpb25zW2RlY29JbmRleF1cblxuICAgICAgICBpZiAoZGVjbykge1xuICAgICAgICAgICAgZGVjby5ub2RlLm9wYWNpdHkgPSAxODBcbiAgICAgICAgICAgIGRlY28uc3ByaXRlRnJhbWUgPSBzRnJhbWVcblxuICAgICAgICAgICAgdHdlZW4oZGVjby5ub2RlKVxuICAgICAgICAgICAgICAgIC5kZWxheSguNSlcbiAgICAgICAgICAgICAgICAudG8oLjMsIHtvcGFjaXR5OiAyNTV9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldEN1cnJlbnREZWNvKCkge1xuICAgICAgICBjb25zdCBnYW1lRGF0YSA9IERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZURhdGEgPSBkYXRhXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGVjbyA9IGdhbWVEYXRhLmN1cnJlbnREZWNvIHx8IHt9XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnREZWNvKS5mb3JFYWNoKChjYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb0RhdGEgPSBjdXJyZW50RGVjb1tjYXRlXVxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFxuICAgICAgICAgICAgICAgICAgICBgU2hvcC8ke2RlY29EYXRhLnR5cGV9LyR7Y2F0ZX1fJHtkZWNvRGF0YS50eXBlfWAsXG4gICAgICAgICAgICAgICAgICAgIGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgICAgICAgICAoZXJyLCBzRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzRnJhbWUgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGVjb3JhdGlvbihkZWNvRGF0YS5jYXRlSW5kZXgsIHNGcmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldEx1cGluTG9vcCgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuXG4gICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2spID0+IHtcblxuICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09PSAnaG9tZS9iZWQnKSB7XG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEx1cGluVG9pbGV0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PT0gJ2Vtb3Rpb24vc2luaXN0ZXInKSB7XG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEx1cGluQmVkKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRMdXBpblN0YW5kKClcbiAgICB9XG5cbiAgICBzZXRMdXBpbk9wYWNpdHkoKSB7XG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5vcGFjaXR5ID0gMTgwXG5cbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKVxuICAgICAgICAgICAgLnRvKC41LCB7b3BhY2l0eTogMjU1fSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgc2V0THVwaW5CZWQoKSB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZURhdGEgPSBkYXRhXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGVjbyA9IGdhbWVEYXRhLmN1cnJlbnREZWNvXG5cbiAgICAgICAgICAgIGlmICghY3VycmVudERlY28gfHwgIWN1cnJlbnREZWNvLkdpdW9uZyB8fCAhY3VycmVudERlY28uR2l1b25nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRMdXBpblRvaWxldCgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMVxuICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgJ2Vtb3Rpb24vaWRsZScsIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgJ2hvbWUvYmVkJywgdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMubHVwaW4uY2xlYXJUcmFjaygwKVxuICAgICAgICAgICAgdGhpcy5sdXBpbi5ub2RlLnBvc2l0aW9uID0gY2MudjMoMjY0LCAtMzc4KVxuXG4gICAgICAgICAgICB0aGlzLnNldEx1cGluT3BhY2l0eSgpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldEx1cGluU3RhbmQoKSB7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDEsICdnZW5lcmFsL3N0YW5kX3RoaW5raW5nJywgZmFsc2UpXG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsICdlbW90aW9uL3NpbmlzdGVyJywgdHJ1ZSlcbiAgICAgICAgdGhpcy5sdXBpbi5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTksIC01MTUpXG5cbiAgICAgICAgdGhpcy5zZXRMdXBpbk9wYWNpdHkoKVxuICAgIH1cblxuICAgIHNldEx1cGluVG9pbGV0KCkge1xuICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigxLCAnaG9tZS9zZWF0X3RvaWxldCcsIGZhbHNlKVxuICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCAnZW1vdGlvbi9pZGxlJywgZmFsc2UpXG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0xMTAsIC0zMDUpXG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5vcGFjaXR5ID0gMTgwXG5cbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKVxuICAgICAgICAgICAgLnRvKC41LCB7b3BhY2l0eTogMjU1fSlcbiAgICAgICAgICAgIC5yZXBlYXQoXG4gICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICB0d2VlbigpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDEsICdob21lL3NlYXRfdG9pbGV0JywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsICdlbW90aW9uL2lkbGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoNSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5jbGVhclRyYWNrKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigxLCAnaG9tZS9zZWF0X3RvaWxldDInLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMdXBpblN0YW5kKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuICAgIHVwZGF0ZUNhbGVuZGFyKCk6IHZvaWQge1xuICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXkgPSAxMCAtIChkYXRhLnVubG9ja2VkTGV2ZWwgJSAxMCk7XG4gICAgICAgICAgICB0aGlzLmRheUNvdW50LnN0cmluZyA9IGRheS50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxufVxuIl19