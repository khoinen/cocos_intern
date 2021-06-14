
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Levels/Level19/Script/Level19_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9MZXZlbHMvTGV2ZWwxOS9TY3JpcHQvTGV2ZWwxOV8yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCLElBQUssS0FXSjtBQVhELFdBQUssS0FBSztJQUNOLG1DQUFLLENBQUE7SUFDTCxxQ0FBTSxDQUFBO0lBQ04sbUNBQUssQ0FBQTtJQUNMLG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0lBQ0wsMkNBQVMsQ0FBQTtJQUNULDJDQUFTLENBQUE7SUFDVCxxQ0FBTSxDQUFBO0lBQ04scUNBQU0sQ0FBQTtJQUNOLG1DQUFLLENBQUE7QUFDVCxDQUFDLEVBWEksS0FBSyxLQUFMLEtBQUssUUFXVDtBQUdEO0lBQXVDLDZCQUFTO0lBQWhEOztJQXdIQSxDQUFDO0lBbkhHLDZCQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFD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Qzt5QkFDcEIsSUFBSSxDQUFDO3dCQUNGLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDO3lCQUNELEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDO1lBQ0YsZ0NBQWdDO2FBQy9CLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUF2SGdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3SDdCO0lBQUQsZ0JBQUM7Q0F4SEQsQUF3SEMsQ0F4SHNDLG1CQUFTLEdBd0gvQztrQkF4SG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi8uLi8uLi9TY3JpcHRzL0xldmVsQmFzZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IHR3ZWVuID0gY2MudHdlZW47XG5cbmVudW0gU09VTkQge1xuICAgIERJWlpZLFxuICAgIFNXT09TSCxcbiAgICBXQVRFUixcbiAgICBCT0FUMSxcbiAgICBCT0FUMixcbiAgICBFWFBMT1NJT04sXG4gICAgS05JRkVfSElULFxuICAgIFNDUkVBTSxcbiAgICBTUVVJUlQsXG4gICAgVEhST1dcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMTlfMiBleHRlbmRzIExldmVsQmFzZSB7XG5cbiAgICBwcml2YXRlIF9wb2xpY2U7XG4gICAgcHJpdmF0ZSBfbGlnaHQ7XG5cbiAgICBpbml0U3RhZ2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRTdGFnZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xuICAgIH1cblxuICAgIHNldFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9saWNlID0gdGhpcy5vdGhlclNwaW5lWzBdO1xuICAgICAgICB0aGlzLl9saWdodCA9IHRoaXMub3RoZXJTcHJpdGVbMF07XG4gICAgICAgIHRoaXMuX2xpZ2h0Lm5vZGUucG9zaXRpb24gPSBjYy52MygtNTEwLCAtMTMwKTtcbiAgICAgICAgdGhpcy5fbGlnaHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sdXBpbi5jbGVhclRyYWNrKDEpO1xuICAgICAgICB0aGlzLnNldEx1cGluKGNjLnYyKC0xMDAwLCAtNDcwKSwgXCJsZXZlbF8xOV8yL21jX2lkbGVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9wb2xpY2UsIGNjLnYyKC0xMDAwLCAtNjc1KSwgXCJwb2xpY2UvbGV2ZWxfMTlfMi9pZGxlX2Nhbm9cIiwgbnVsbCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CT0FUMSwgZmFsc2UsIDEpO1xuICAgICAgICB0d2Vlbih0aGlzLmx1cGluLm5vZGUpLmRlbGF5KDEpLnRvKDAuOCwge3Bvc2l0aW9uOiBjYy52MygxNjAsIC0xNjUpfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CT0FUMiwgZmFsc2UsIDApO1xuICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX3BvbGljZS5ub2RlKS50bygwLjYsIHtwb3NpdGlvbjogY2MudjMoLTMyMCwgLTM5MCl9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Db250YWluZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMSgpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoMjYwLCAtMzY1KX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi50aW1lU2NhbGUgPSAxLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xOV8yL21jX2ZsYXNobGlnaHRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcih0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSBcImxldmVsXzE5XzIvbWNfZmxhc2hsaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saWdodC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbm9GYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHJ1bk9wdGlvbjIoKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkudG8oMC44LCB7cG9zaXRpb246IGNjLnYzKDQ2MCwgLTM0NSl9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX3BvbGljZS5ub2RlKS50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoLTQwMCwgLTMyMCl9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMS41O1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMi9tY19jYV9raWVtXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5USFJPVywgZmFsc2UsIDAuOCk7XG4gICAgICAgICAgICAgICAgdHdlZW4odGhpcy5fcG9saWNlLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDEsIFwiZW1vdGlvbi9oYXBweV8yXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9saWNlLnRpbWVTY2FsZSA9IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELktOSUZFX0hJVCwgZmFsc2UsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuV0FURVIsIGZhbHNlLCAwLjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9saWNlLnNldEFuaW1hdGlvbigwLCBcInBvbGljZS9sZXZlbF8xOV8yL29wdGlvbjJfY2FraWVtXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BvbGljZS5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJwb2xpY2UvbGV2ZWxfMTlfMi9vcHRpb24yX2Nha2llbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25QYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMygpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS50bygwLjgsIHtwb3NpdGlvbjogY2MudjMoMjYwLCAtMzY1KX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuU1FVSVJULCBmYWxzZSwgMS4yKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5TUVVJUlQsIGZhbHNlLCAxLjQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELlNRVUlSVCwgZmFsc2UsIDEuNik7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuU1FVSVJULCBmYWxzZSwgMS44KTtcbiAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCBcImxldmVsXzE5XzIvbWNfY29uX211Y1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMi9tY19jb25fbXVjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fub0ZhaWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgY2Fub0ZhaWwoKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMuX3BvbGljZS5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5TQ1JFQU0sIGZhbHNlLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CT0FUMiwgZmFsc2UsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BvbGljZS5zZXRBbmltYXRpb24oMCwgXCJwb2xpY2UvbGV2ZWxfMTlfMi9vcHRpb24xX2RlbnBpblwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9saWNlLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJwb2xpY2UvbGV2ZWxfMTlfMi9vcHRpb24xX2RlbnBpblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb2xpY2Uuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpZ2h0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5FWFBMT1NJT04sIGZhbHNlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwiZngvZXhwbG9zaXZlMlwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb2xpY2Uuc2V0QW5pbWF0aW9uKDAsIFwicG9saWNlL2xldmVsXzE5XzIvY2Fub19kYW1fbmhhdVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIC50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoKX0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=