"use strict";
cc._RF.push(module, '03e08dAn0BI86bPNn7Ydl0c', 'Level19_2');
// Levels/Level19/Script/Level19_2.ts

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
    SOUND[SOUND["BOAT1"] = 3] = "BOAT1";
    SOUND[SOUND["BOAT2"] = 4] = "BOAT2";
    SOUND[SOUND["EXPLOSION"] = 5] = "EXPLOSION";
    SOUND[SOUND["KNIFE_HIT"] = 6] = "KNIFE_HIT";
    SOUND[SOUND["SCREAM"] = 7] = "SCREAM";
    SOUND[SOUND["SQUIRT"] = 8] = "SQUIRT";
    SOUND[SOUND["THROW"] = 9] = "THROW";
})(SOUND || (SOUND = {}));
var Level19_2 = /** @class */ (function (_super) {
    __extends(Level19_2, _super);
    function Level19_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level19_2.prototype.initStage = function () {
        _super.prototype.initStage.call(this);
        this.setStatus();
        this.setAction();
    };
    Level19_2.prototype.setStatus = function () {
        this._police = this.otherSpine[0];
        this._light = this.otherSprite[0];
        this._light.node.position = cc.v3(-510, -130);
        this._light.node.active = false;
        this.lupin.clearTrack(1);
        this.setLupin(cc.v2(-1000, -470), "level_19_2/mc_idle", null);
        this.setOtherSpine(this._police, cc.v2(-1000, -675), "police/level_19_2/idle_cano", null);
    };
    Level19_2.prototype.setAction = function () {
        var _this = this;
        this.playSound(SOUND.BOAT1, false, 1);
        tween(this.lupin.node).delay(1).to(0.8, { position: cc.v3(160, -165) })
            .call(function () {
            _this.playSound(SOUND.BOAT2, false, 0);
            tween(_this._police.node).to(0.6, { position: cc.v3(-320, -390) })
                .call(function () {
                _this.showOptionContainer(true);
            }).start();
        })
            .start();
    };
    Level19_2.prototype.runOption1 = function () {
        var _this = this;
        tween(this.lupin.node).to(0.5, { position: cc.v3(260, -365) })
            .call(function () {
            _this.lupin.timeScale = 1.5;
            _this.lupin.setAnimation(0, "level_19_2/mc_flashlight", false);
            _this.lupin.setCompleteListener(function (track) {
                if (track.animation.name == "level_19_2/mc_flashlight") {
                    _this.lupin.setCompleteListener(null);
                    _this._light.node.active = true;
                    _this.canoFail();
                }
            });
        })
            .start();
    };
    Level19_2.prototype.runOption2 = function () {
        var _this = this;
        tween(this.lupin.node).to(0.8, { position: cc.v3(460, -345) })
            .call(function () {
            tween(_this._police.node).to(0.5, { position: cc.v3(-400, -320) }).start();
            _this.lupin.timeScale = 1.5;
            _this.lupin.setAnimation(0, "level_19_2/mc_ca_kiem", false);
            _this.playSound(SOUND.THROW, false, 0.8);
            tween(_this._police.node).delay(1)
                .call(function () {
                _this.lupin.setAnimation(1, "emotion/happy_2", true);
                _this._police.timeScale = 1.5;
                _this.playSound(SOUND.KNIFE_HIT, false, 0);
                _this.playSound(SOUND.WATER, false, 0.7);
                _this._police.setAnimation(0, "police/level_19_2/option2_cakiem", false);
                _this._police.setCompleteListener(function (track) {
                    if (track.animation.name == "police/level_19_2/option2_cakiem") {
                        tween(_this.node).delay(0.5)
                            .call(function () {
                            _this.onPass();
                        })
                            .start();
                    }
                });
            })
                .start();
        })
            .start();
    };
    Level19_2.prototype.runOption3 = function () {
        var _this = this;
        tween(this.lupin.node).to(0.8, { position: cc.v3(260, -365) })
            .call(function () {
            _this.playSound(SOUND.SQUIRT, false, 1.2);
            _this.playSound(SOUND.SQUIRT, false, 1.4);
            _this.playSound(SOUND.SQUIRT, false, 1.6);
            _this.playSound(SOUND.SQUIRT, false, 1.8);
            _this.lupin.setAnimation(0, "level_19_2/mc_con_muc", false);
            _this.lupin.setCompleteListener(function (track) {
                if (track.animation.name == "level_19_2/mc_con_muc") {
                    _this.lupin.setCompleteListener(null);
                    _this.canoFail();
                }
            });
        })
            .start();
    };
    Level19_2.prototype.canoFail = function () {
        var _this = this;
        tween(this._police.node).call(function () {
            _this.playSound(SOUND.SCREAM, false, 0);
            _this.playSound(SOUND.BOAT2, false, 0);
            _this._police.setAnimation(0, "police/level_19_2/option1_denpin", false);
            _this._police.setCompleteListener(function (track) {
                if (track.animation.name == "police/level_19_2/option1_denpin") {
                    _this._police.setCompleteListener(null);
                    _this._light.node.active = false;
                    _this.playSound(SOUND.EXPLOSION, false, 0);
                    _this.lupin.setAnimation(0, "fx/explosive2", false);
                    _this._police.setAnimation(0, "police/level_19_2/cano_dam_nhau", false);
                    tween(_this.node).delay(1)
                        .call(function () {
                        _this.showContinue();
                    })
                        .start();
                }
            });
        })
            // .to(0.5, {position: cc.v3()})
            .start();
    };
    Level19_2 = __decorate([
        ccclass
    ], Level19_2);
    return Level19_2;
}(LevelBase_1.default));
exports.default = Level19_2;

cc._RF.pop();