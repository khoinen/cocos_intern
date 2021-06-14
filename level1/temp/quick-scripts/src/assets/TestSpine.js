"use strict";
cc._RF.push(module, '022c5B9hZ9B277tox481Xtb', 'TestSpine');
// TestSpine.ts

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
var isTrue = true;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lupin = null;
        return _this;
    }
    NewClass.prototype.onEnable = function () {
        this.runAnimation();
    };
    NewClass.prototype.runAnimation = function () {
        // this.lupin.setMix("general/hide1", "general/stand_nervous", 0.5);
        // this.lupin.setMix("general/stand_nervous", "level_5/remote_control", 0.5);
        var _this = this;
        // this.lupin.setAnimation(0, "general/hide", true);
        this.lupin.setAnimation(0, "general/hide1", true);
        cc.tween(this.node).delay(3)
            .call(function () {
            _this.lupin.setAnimation(0, "emotion/sinister", true);
            _this.lupin.setCompleteListener(function (trackEntry) {
                if (trackEntry.animation.name == "emotion/sinister" && isTrue) {
                    _this.lupin.setAnimation(1, "level_5/throw_bida", false);
                }
            });
            // this.lupin.setAnimation(1, "general/stand_nervous", false);
            // this.lupin.clearTrack(1);
            // this.lupin.setAnimation(1, "level_5/remote_control", false);
            // this.setLupin(cc.v2(-80, -460), "emotion/sinister", "general/walk");
        })
            .start();
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "lupin", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();