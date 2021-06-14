"use strict";
cc._RF.push(module, 'd019bXxFwlPZZ7uJAYL0AVJ', 'Introduce');
// Introduce/Introduce.ts

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
var EffectManager_1 = require("../Scripts/EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var storyText = [["STICKMAN", "INVOLVED", "IN", "A", "BANK", "ROBBERY", "HE", "WAS", "ARRESTED", "IN", "A", "SECRET", "PRISON", "IN", "AMERICA"],
    ["AFTER", "ESCAPING", "FROM", "THE", "PRISON,", "THE", "STICKMAN", "LIVED", "A", "LIFE", "OF", "LUXURY.", "\nBUT", "THERE", "WAS", "AN", "ENEMY", "WHO", "WAS", "LIVING", "IN", "A", "PRISON", "UNDER", "THE", "SEA.", "\nPUNISHING", "HIM", "WAS", "THE", "NEXT", "OBJECTIVE."],
    ["AFTER", "ESCAPING", "TO", "THE", "ISLAND,", "THE", "STICKMAN", "STOLE", "A", "JEWEL", "FROM", "AN", "ABORIGINAL", "TRIBE.", "HE", "WAS", "ONCE", "AGAIN", "ARRESTED"]];
var tween = cc.tween;
var introIndex = 0;
var Introduce = /** @class */ (function (_super) {
    __extends(Introduce, _super);
    function Introduce() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prisonScene = [];
        _this.next = null;
        _this.story = null;
        _this.storyLabel = null;
        _this.left = [];
        _this.right = [];
        _this.countWord = 0;
        return _this;
    }
    // private introIndex = 0;
    Introduce.prototype.onLoad = function () {
        this.resetIntroduce();
    };
    Introduce.prototype.onEnable = function () {
        this.runAnimation();
    };
    Introduce.prototype.onDisable = function () {
        this.resetIntroduce();
    };
    Introduce.prototype.resetIntroduce = function () {
        this.prisonScene[0].node.position = cc.v3(-450, 1200);
        this.prisonScene[1].node.position = cc.v3(1200, 133);
        this.next.opacity = 0;
        this.next.scale = 0;
        this.story.opacity = 0;
        this.storyLabel.string = "";
    };
    Introduce.prototype.runAnimation = function () {
        var _this = this;
        tween(this.node).call(function () {
            tween(_this.prisonScene[0].node).to(0.3, { position: cc.v3(0, 385) }).start();
        })
            .delay(0.3)
            .call(function () {
            tween(_this.prisonScene[1].node).to(0.3, { position: cc.v3(0, 220) }).start();
        })
            .delay(0.5)
            .call(function () {
            _this.story.active = true;
            _this.story.scale = 0;
            _this.story.opacity = 0;
            tween(_this.story)
                .to(0.3, { scaleX: 1.2, scaleY: 1.5, opacity: 255 }, { easing: "quadIn" })
                .call(function () {
                _this.schedule(function () {
                    switch (introIndex) {
                        case 0:
                            _this.storyLabel.fontSize = 30;
                            _this.storyLabel.lineHeight = 30;
                            break;
                        case 1:
                            _this.storyLabel.fontSize = 22;
                            _this.storyLabel.lineHeight = 22;
                            break;
                        case 2:
                            _this.storyLabel.fontSize = 28;
                            _this.storyLabel.lineHeight = 28;
                            break;
                    }
                    if (_this.countWord < storyText[introIndex].length) {
                        _this.storyLabel.string += storyText[introIndex][_this.countWord] + " ";
                    }
                    else {
                        cc.log("story", "end");
                        EffectManager_1.default.showButton(_this.next, 0.3);
                    }
                    _this.countWord++;
                }, 0.1, storyText[introIndex].length);
            })
                .start();
        })
            .start();
        // tween(this.prisonScene[0]).to(0.3, {position: cc.v3(0, 385)}).start();
        // tween(this.prisonScene[1]).delay(0.8).to(0.3, {position: cc.v3(0, 133)}).start();
    };
    Introduce.prototype.startGame = function () {
        this.node.active = false;
        cc.find("Canvas/GameManager").getComponent("GameManager").startGame();
    };
    Introduce.prototype.setIntro = function (level) {
        var length = this.left.length;
        introIndex = Math.floor(level / 10);
        this.countWord = 0;
        for (var i = 0; i < length; ++i) {
            if (introIndex == i) {
                this.prisonScene[0].spriteFrame = this.left[i];
                this.prisonScene[1].spriteFrame = this.right[i];
                return;
            }
        }
    };
    __decorate([
        property([cc.Sprite])
    ], Introduce.prototype, "prisonScene", void 0);
    __decorate([
        property(cc.Node)
    ], Introduce.prototype, "next", void 0);
    __decorate([
        property(cc.Node)
    ], Introduce.prototype, "story", void 0);
    __decorate([
        property(cc.Label)
    ], Introduce.prototype, "storyLabel", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Introduce.prototype, "left", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Introduce.prototype, "right", void 0);
    Introduce = __decorate([
        ccclass
    ], Introduce);
    return Introduce;
}(cc.Component));
exports.default = Introduce;

cc._RF.pop();