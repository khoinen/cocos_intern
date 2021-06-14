"use strict";
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