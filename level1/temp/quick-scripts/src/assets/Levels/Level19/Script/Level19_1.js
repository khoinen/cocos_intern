"use strict";
cc._RF.push(module, '77664Pcd1JBGpey+qpnQu7v', 'Level19_1');
// Levels/Level19/Script/Level19_1.ts

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
var LevelBase_1 = require("../../../Scripts/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var SOUND;
(function (SOUND) {
    SOUND[SOUND["DIZZY"] = 0] = "DIZZY";
    SOUND[SOUND["SWOOSH"] = 1] = "SWOOSH";
    SOUND[SOUND["WATER"] = 2] = "WATER";
    SOUND[SOUND["BITE"] = 3] = "BITE";
    SOUND[SOUND["FREEZE"] = 4] = "FREEZE";
    SOUND[SOUND["LIKE"] = 5] = "LIKE";
    SOUND[SOUND["PEEK"] = 6] = "PEEK";
})(SOUND || (SOUND = {}));
var Level19_1 = /** @class */ (function (_super) {
    __extends(Level19_1, _super);
    function Level19_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level19_1.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this._gameManager._levelCurrent.level = this.levelCurrent;
        this._gameManager._beginScene = this.node;
    };
    Level19_1.prototype.initStage = function () {
        _super.prototype.initStage.call(this);
        this.setStatus();
        this.setAction();
    };
    Level19_1.prototype.setStatus = function () {
        this._oldMan = this.otherSpine[0];
        this._cano = this.otherSpine[1];
        this._shark = this.otherSpine[2];
        this._oldMan.node.scaleX = -0.8;
        this._oldMan.node.scaleY = 0.8;
        this._cano.node.scale = 1;
        this.setOtherSpine(this._shark, cc.v2(-800, -1030), "shark_move", null);
        this.setOtherSpine(this._oldMan, cc.v2(-400, -665), "old_man/level_19_1/old_man_idle", null);
        this.setOtherSpine(this._cano, cc.v2(-213, -765), "level_19/cano_idle", null);
        this.lupin.clearTrack(1);
        this.setLupin(cc.v2(750, -1900), "level_19_1/mc_swim_idle", null);
    };
    Level19_1.prototype.setAction = function () {
        var _this = this;
        tween(this.lupin.node).to(3, { position: cc.v3(375, -1130) }, { easing: "cubicInOut" })
            .delay(1)
            .call(function () {
            _this.showOptionContainer(true);
        })
            .start();
    };
    Level19_1.prototype.runOption1 = function () {
        var _this = this;
        this.lupin.setMix("level_19_1/mc_swim_idle", "level_19_1/mc_lifting_fish", 0.3);
        this._oldMan.setMix("old_man/level_19_1/old_man_idle", "old_man/level_19_1/old_man_happy", 0.3);
        this._oldMan.setMix("old_man/level_19_1/old_man_happy", "old_man/level_19_1/old_man_welcome", 0.3);
        this.lupin.setAnimation(0, "level_19_1/mc_lifting_fish", false);
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_1/mc_lifting_fish") {
                _this.lupin.setCompleteListener(null);
                _this.playSound(SOUND.LIKE, false, 0.3);
                _this._oldMan.setAnimation(0, "old_man/level_19_1/old_man_happy", true);
                _this._oldMan.addAnimation(0, "old_man/level_19_1/old_man_welcome", true);
                _this._oldMan.setCompleteListener(function (track) {
                    if (track.animation.name == "old_man/level_19_1/old_man_welcome") {
                        _this._oldMan.setCompleteListener(null);
                        _this.lupin.setAnimation(1, "emotion/happy_2", true);
                        tween(_this.lupin.node).delay(1)
                            .call(function () {
                            _this.onPass();
                        })
                            .start();
                    }
                });
            }
        });
    };
    Level19_1.prototype.runOption2 = function () {
        var _this = this;
        this.lupin.setAnimation(0, "level_19_1/mc_jumping_boat", false);
        this.playSound(SOUND.SWOOSH, false, 0);
        tween(this.lupin.node).parallel(tween().to(0.5, { scaleX: -0.8 }), tween().to(0.5, { scaleY: 0.8 }), tween().bezierTo(0.5, cc.v2(this.lupin.node.x, this.lupin.node.y), cc.v2(-100, -450), cc.v2(-200, -685))
            .call(function () {
            _this._oldMan.node.scaleX = -0.8;
            _this._oldMan.setAnimation(0, "police/level_12/old_man_attack", false);
            _this.playSound(SOUND.FREEZE, false, 0.6);
            tween(_this.lupin.node).delay(0.6)
                .call(function () {
                _this.lupin.node.scaleX = -0.8;
                _this.lupin.setAnimation(0, "level_19_1/mc_get_hit", false);
                _this.playSound(SOUND.WATER, false, 0.7);
                _this.lupin.setCompleteListener(function (track) {
                    if (track.animation.name == "level_19_1/mc_get_hit") {
                        _this.lupin.setCompleteListener(null);
                        tween(_this.lupin.node).by(2, { position: cc.v3(0, -500) }, { easing: "cubicOut" })
                            .call(function () {
                            _this.showFail(_this.selected);
                        }).start();
                    }
                });
            })
                .start();
        }))
            .start();
    };
    Level19_1.prototype.runOption3 = function () {
        var _this = this;
        this.lupin.setMix("level_19_1/mc_swim_idle", "level_19_1/mc_swim_gun", 0.3);
        this.lupin.setAnimation(0, "level_19_1/mc_swim_gun", false);
        this.lupin.setAnimation(1, "emotion/sinister", true);
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_1/mc_swim_gun") {
                _this.lupin.setCompleteListener(null);
                _this.playSound(SOUND.PEEK, false, 0);
                _this._oldMan.setAnimation(0, "old_man/level_19_1/old_man_scare", false);
                tween(_this._shark.node).delay(1).to(1, { position: cc.v3(200, -1030) })
                    .call(function () {
                    _this._shark.timeScale = 1.5;
                    _this.playSound(SOUND.BITE, false, 0.1);
                    _this._shark.setAnimation(0, "shark_attack", false);
                    _this._shark.setCompleteListener(function (track) {
                        if (track.animation.name == "shark_attack") {
                            _this._shark.setCompleteListener(null);
                            // tween(this._shark.node).by(0.2, {position: cc.v3(200, -500)}).start();
                        }
                    });
                })
                    .delay(0.2)
                    .call(function () {
                    tween(_this.lupin.node).to(0.2, { position: cc.v3(765, -1560) })
                        .call(function () {
                        _this.showFail(_this.selected);
                    })
                        .start();
                })
                    .start();
            }
        });
    };
    Level19_1 = __decorate([
        ccclass
    ], Level19_1);
    return Level19_1;
}(LevelBase_1.default));
exports.default = Level19_1;

cc._RF.pop();