"use strict";
cc._RF.push(module, '46b66MHnGhB3bLzrfdPWACZ', 'Level19_3');
// Levels/Level19/Script/Level19_3.ts

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
    SOUND[SOUND["BREAK"] = 3] = "BREAK";
    SOUND[SOUND["GUN"] = 4] = "GUN";
    SOUND[SOUND["KISS"] = 5] = "KISS";
    SOUND[SOUND["SAX"] = 6] = "SAX";
    SOUND[SOUND["SPARK"] = 7] = "SPARK";
    SOUND[SOUND["BOAT1"] = 8] = "BOAT1";
})(SOUND || (SOUND = {}));
var Level19_3 = /** @class */ (function (_super) {
    __extends(Level19_3, _super);
    function Level19_3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level19_3.prototype.initStage = function () {
        _super.prototype.initStage.call(this);
        this.setStatus();
        this.setAction();
    };
    Level19_3.prototype.setStatus = function () {
        this._oldMan = this.otherSpine[0];
        this._oldWoman = this.otherSpine[1];
        this._cano = this.otherSpine[2];
        this._fishtank = this.otherSpine[3];
        this._fishtank.node.active = false;
        this._fishtank.node.position = cc.v3(128, -33);
        this.setLupin(cc.v2(-1000, -600), "level_19_2/mc_idle", null);
        this._oldWoman.node.active = false;
        this._oldWoman.node.position = cc.v3(213, -496);
        this._oldMan.node.active = false;
        this._oldMan.node.angle = 0;
        this.setOtherSpine(this._oldMan, cc.v2(197, -596), "police/level_12/old_man_run", null);
        this._cano.node.active = false;
        this.lupin.setMix("emotion/idle", "general/stand_thinking", 0.3);
        this._oldMan.setMix("police/level_12/old_man_run", "old_man/level_19_3/oldman_idle", 0.3);
        this._oldMan.setMix("old_man/level_19_3/oldman_shake_head", "old_man/level_19_3/old_man_aim_idle", 0.3);
    };
    Level19_3.prototype.setAction = function () {
        var _this = this;
        this.playSound(SOUND.BOAT1, false, 0);
        tween(this.lupin.node).to(2.5, { position: cc.v3(30, -622) })
            .call(function () {
            _this._cano.node.active = true;
            _this._oldMan.node.active = true;
            _this.lupin.setAnimation(0, "emotion/idle", true);
            _this._oldMan.setAnimation(0, "police/level_12/old_man_run", true);
            _this._oldMan.node.scaleX = -0.7;
            tween(_this._oldMan.node).to(2, { position: cc.v3(415, -410) })
                .call(function () {
                _this._oldMan.node.scaleX = 0.7;
                _this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_idle", true);
                _this.lupin.setAnimation(0, "general/stand_thinking", true);
                _this.lupin.setAnimation(1, "emotion/thinking", true);
            })
                .delay(2)
                .call(function () {
                _this.showOptionContainer(true);
            })
                .start();
        }).start();
    };
    Level19_3.prototype.runOption1 = function () {
        var _this = this;
        this.lupin.setMix("level_19_3/mc_swimwear", "level_1/die", 0.3);
        this.playSound(SOUND.SWOOSH, false, 1);
        this.lupin.setAnimation(0, "level_19_3/mc_swimwear", false);
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_3/mc_swimwear") {
                _this.lupin.setCompleteListener(null);
                _this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_shake_head", false);
                _this._oldMan.setCompleteListener(function (track) {
                    if (track.animation.name == "old_man/level_19_3/oldman_shake_head") {
                        _this._oldMan.setCompleteListener(null);
                        _this._oldMan.timeScale = 1.5;
                        _this.playSound(SOUND.GUN, false, 1.1);
                        _this._oldMan.setAnimation(0, "old_man/level_19_3/old_man_aim_idle", false);
                        _this._oldMan.addAnimation(0, "old_man/level_19_3/old_man_shoot", false);
                        tween(_this.lupin.node).delay(1.1)
                            .call(function () {
                            _this._oldMan.setCompleteListener(null);
                            _this.lupin.clearTrack(1);
                            _this.playSound(SOUND.DIZZY, false, 0.1);
                            _this.lupin.setAnimation(0, "level_1/die", false);
                            _this.lupin.node.position = cc.v3(-150, -520);
                            tween(_this.node).delay(2)
                                .call(function () {
                                _this.showContinue();
                            })
                                .start();
                        })
                            .start();
                    }
                });
            }
        });
    };
    Level19_3.prototype.runOption2 = function () {
        var _this = this;
        this.lupin.setMix("level_19_3/mc_fishtank", "level_19_3/mc_fishtank_fall", 0.3);
        this.lupin.setAnimation(1, "level_19_3/mc_fishtank", false);
        tween(this.lupin.node).delay(2)
            .call(function () {
            _this.lupin.setAnimation(0, "general/walk", true);
        })
            .to(1, { position: cc.v3(170, -570) })
            .call(function () {
            _this.lupin.setAnimation(0, "emotion/idle", false);
            _this.playSound(SOUND.BREAK, false, 0.1);
            _this.lupin.setAnimation(1, "level_19_3/mc_fishtank_fall", false);
            _this._fishtank.node.active = true;
            _this._fishtank.setAnimation(0, "level_19/fishtank_fall", false);
            _this.lupin.setCompleteListener(function (track) {
                if (track.animation.name == "level_19_3/mc_fishtank_fall") {
                    _this.lupin.setCompleteListener(null);
                    _this._oldMan.timeScale = 1.5;
                    _this.playSound(SOUND.GUN, false, 1.1);
                    _this._oldMan.setAnimation(0, "old_man/level_19_3/old_man_aim_idle", false);
                    _this._oldMan.addAnimation(0, "old_man/level_19_3/old_man_shoot", false);
                    tween(_this.lupin.node).delay(1.1)
                        .call(function () {
                        _this._oldMan.setCompleteListener(null);
                        _this.lupin.clearTrack(1);
                        _this.playSound(SOUND.DIZZY, false, 0.1);
                        _this.lupin.setAnimation(0, "level_1/die", false);
                        _this._fishtank.node.x = 550;
                        _this.lupin.node.position = cc.v3(-150, -520);
                        tween(_this.node).delay(2)
                            .call(function () {
                            _this.showContinue();
                        })
                            .start();
                    })
                        .start();
                }
            });
        })
            .start();
    };
    Level19_3.prototype.runOption3 = function () {
        var _this = this;
        this.lupin.setMix("level_19_3/mc_introduce", "general/stand_nervous", 0.3);
        this.lupin.clearTrack(1);
        this.playSound(SOUND.SPARK, false, 0.1);
        this.lupin.setAnimation(0, "level_19_3/mc_introduce", false);
        tween(this.node).delay(0.3)
            .call(function () {
            var count = 0;
            _this.playSound(SOUND.KISS, false, 0.3);
            _this.playSound(SOUND.KISS, false, 1.3);
            _this._oldWoman.node.active = true;
            _this._oldWoman.node.scaleX = -0.7;
            _this._oldWoman.setAnimation(0, "old_man/level_19_3/bigwife_idle", true);
            _this._oldWoman.setCompleteListener(function (track) {
                if (track.animation.name == "old_man/level_19_3/bigwife_idle") {
                    ++count;
                    if (count == 2) {
                        _this._oldWoman.setCompleteListener(null);
                        _this._oldWoman.setAnimation(0, "old_man/level_19_3/bigwife_carry_oldman", true);
                        tween(_this._oldWoman.node).to(2, { position: cc.v3(400, -420) })
                            .call(function () {
                            tween(_this._oldMan.node).parallel(tween().to(0.2, { position: cc.v3(305, -350) }), tween().to(0.2, { angle: -60 }))
                                .call(function () {
                                _this.playSound(SOUND.SAX, false, 0);
                            })
                                .to(1, { position: cc.v3(370, -320) })
                                .start();
                        })
                            .to(1, { position: cc.v3(465, -385) })
                            .delay(0.5)
                            .call(function () {
                            _this.showSuccess(_this.selected);
                        })
                            .start();
                    }
                    else if (count == 1) {
                        _this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_love", true);
                    }
                }
            });
        })
            .start();
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_3/mc_introduce") {
                _this.lupin.setCompleteListener(null);
                _this.lupin.setAnimation(0, "general/stand_nervous", true);
                _this.lupin.setAnimation(1, "emotion/happy_2", true);
            }
        });
    };
    Level19_3 = __decorate([
        ccclass
    ], Level19_3);
    return Level19_3;
}(LevelBase_1.default));
exports.default = Level19_3;

cc._RF.pop();