
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Guide/Guide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83398XgwSJOD6j4WX9n26Ap', 'Guide');
// Guide/Guide.ts

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
        _this.hand = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.hand.active = false;
        this._shadow = cc.find("Canvas/Shadow");
        this._setting = cc.find("Canvas/BtnSetting");
    };
    NewClass.prototype.onEnable = function () {
        this.action();
        this._setting.getChildByName("Block").active = true;
        this._setting.color = new cc.Color(150, 150, 150, 255);
    };
    NewClass.prototype.onDisable = function () {
        this._shadow.opacity = 0;
        this._setting.getChildByName("Block").active = false;
        this._setting.color = new cc.Color(255, 255, 255, 255);
    };
    NewClass.prototype.action = function () {
        var _this = this;
        this.hand.active = true;
        cc.tween(this._shadow).to(0.2, { opacity: 150 })
            .call(function () {
            cc.tween(_this.hand).repeatForever(cc.tween().call(function () {
                _this.hand.position = cc.v3(-310, -960);
                _this.hand.opacity = 0;
            })
                .parallel(cc.tween().to(0.5, { opacity: 255 }), cc.tween().to(0.5, { position: cc.v3(-310, -800) }).call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            }))
                .delay(0.7)
                .to(0.5, { position: cc.v3(0, -800) })
                .call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            })
                .delay(0.7)
                .to(0.5, { position: cc.v3(310, -800) })
                .call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            })
                .delay(0.7)
                .parallel(cc.tween().by(0.5, { position: cc.v3(200, 0) }), cc.tween().to(0.5, { opacity: 0 })))
                .start();
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUM3QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUNuQyxDQUNKO2lCQUNBLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBRWpCLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUhKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2RDVCO0lBQUQsZUFBQztDQTdERCxBQTZEQyxDQTdEcUMsRUFBRSxDQUFDLFNBQVMsR0E2RGpEO2tCQTdEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9zaGFkb3c7XG4gICAgcHJpdmF0ZSBfc2V0dGluZztcblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zaGFkb3cgPSBjYy5maW5kKFwiQ2FudmFzL1NoYWRvd1wiKTtcbiAgICAgICAgdGhpcy5fc2V0dGluZyA9IGNjLmZpbmQoXCJDYW52YXMvQnRuU2V0dGluZ1wiKTtcbiAgICB9XG4gICAgXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX3NldHRpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJCbG9ja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zZXR0aW5nLmNvbG9yID0gbmV3IGNjLkNvbG9yKDE1MCwgMTUwLCAxNTAsIDI1NSk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaGFkb3cub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuX3NldHRpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJCbG9ja1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2V0dGluZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgIH1cbiAgICBhY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLl9zaGFkb3cpLnRvKDAuMiwge29wYWNpdHk6IDE1MH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5wb3NpdGlvbiA9IGNjLnYzKC0zMTAsIC05NjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjUsIHtvcGFjaXR5OiAyNTV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNSwge3Bvc2l0aW9uOiBjYy52MygtMzEwLCAtODAwKX0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhhbmQpLnRvKDAuMiwge3NjYWxlOiAwLjk1fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KS50bygwLjIsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7cG9zaXRpb246IGNjLnYzKDAsIC04MDApfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhhbmQpLnRvKDAuMiwge3NjYWxlOiAwLjk1fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KS50bygwLjIsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoMzEwLCAtODAwKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kKS50bygwLjIsIHtzY2FsZTogMC45NX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSkudG8oMC4yLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjUsIHtwb3NpdGlvbjogY2MudjMoMjAwLCAwKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC41LCB7b3BhY2l0eTogMH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICB9XG59XG4iXX0=