
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Levels/Level19/Script/Level19_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9MZXZlbHMvTGV2ZWwxOS9TY3JpcHQvTGV2ZWwxOV8xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCLElBQUssS0FRSjtBQVJELFdBQUssS0FBSztJQUNOLG1DQUFLLENBQUE7SUFDTCxxQ0FBTSxDQUFBO0lBQ04sbUNBQUssQ0FBQTtJQUNMLGlDQUFJLENBQUE7SUFDSixxQ0FBTSxDQUFBO0lBQ04saUNBQUksQ0FBQTtJQUNKLGlDQUFJLENBQUE7QUFDUixDQUFDLEVBUkksS0FBSyxLQUFMLEtBQUssUUFRVDtBQUdEO0lBQXVDLDZCQUFTO0lBQWhEOztJQXNJQSxDQUFDO0lBaElHLDRCQUFRLEdBQVI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksaUJBQU0sU0FBUyxXQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFB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LEVBQUUsQ0FBQzthQUNoQjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXJJZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXNJN0I7SUFBRCxnQkFBQztDQXRJRCxBQXNJQyxDQXRJc0MsbUJBQVMsR0FzSS9DO2tCQXRJb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4uLy4uLy4uL1NjcmlwdHMvTGV2ZWxCYXNlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcblxuZW51bSBTT1VORCB7XG4gICAgRElaWlksXG4gICAgU1dPT1NILFxuICAgIFdBVEVSLFxuICAgIEJJVEUsXG4gICAgRlJFRVpFLFxuICAgIExJS0UsXG4gICAgUEVFS1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxOV8xIGV4dGVuZHMgTGV2ZWxCYXNlIHtcblxuICAgIHByaXZhdGUgX2Nhbm87XG4gICAgcHJpdmF0ZSBfb2xkTWFuO1xuICAgIHByaXZhdGUgX3NoYXJrO1xuXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPSB0aGlzLmxldmVsQ3VycmVudDtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2JlZ2luU2NlbmUgPSB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgaW5pdFN0YWdlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5pbml0U3RhZ2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29sZE1hbiA9IHRoaXMub3RoZXJTcGluZVswXTtcbiAgICAgICAgdGhpcy5fY2FubyA9IHRoaXMub3RoZXJTcGluZVsxXTtcbiAgICAgICAgdGhpcy5fc2hhcmsgPSB0aGlzLm90aGVyU3BpbmVbMl07XG5cbiAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuc2NhbGVYID0gLTAuODtcbiAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuc2NhbGVZID0gMC44O1xuICAgICAgICB0aGlzLl9jYW5vLm5vZGUuc2NhbGUgPSAxO1xuXG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9zaGFyaywgY2MudjIoLTgwMCwgLTEwMzApLCBcInNoYXJrX21vdmVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9vbGRNYW4sIGNjLnYyKC00MDAsIC02NjUpLCBcIm9sZF9tYW4vbGV2ZWxfMTlfMS9vbGRfbWFuX2lkbGVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9jYW5vLCBjYy52MigtMjEzLCAtNzY1KSwgXCJsZXZlbF8xOS9jYW5vX2lkbGVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMubHVwaW4uY2xlYXJUcmFjaygxKTtcbiAgICAgICAgdGhpcy5zZXRMdXBpbihjYy52Mig3NTAsIC0xOTAwKSwgXCJsZXZlbF8xOV8xL21jX3N3aW1faWRsZVwiLCBudWxsKTtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkudG8oMywge3Bvc2l0aW9uOiBjYy52MygzNzUsIC0xMTMwKX0sIHtlYXNpbmc6IFwiY3ViaWNJbk91dFwifSlcbiAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvbkNvbnRhaW5lcih0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBydW5PcHRpb24xKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmx1cGluLnNldE1peChcImxldmVsXzE5XzEvbWNfc3dpbV9pZGxlXCIsIFwibGV2ZWxfMTlfMS9tY19saWZ0aW5nX2Zpc2hcIiwgMC4zKTtcbiAgICAgICAgdGhpcy5fb2xkTWFuLnNldE1peChcIm9sZF9tYW4vbGV2ZWxfMTlfMS9vbGRfbWFuX2lkbGVcIiwgXCJvbGRfbWFuL2xldmVsXzE5XzEvb2xkX21hbl9oYXBweVwiLCAwLjMpO1xuICAgICAgICB0aGlzLl9vbGRNYW4uc2V0TWl4KFwib2xkX21hbi9sZXZlbF8xOV8xL29sZF9tYW5faGFwcHlcIiwgXCJvbGRfbWFuL2xldmVsXzE5XzEvb2xkX21hbl93ZWxjb21lXCIsIDAuMyk7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMS9tY19saWZ0aW5nX2Zpc2hcIiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMS9tY19saWZ0aW5nX2Zpc2hcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5MSUtFLCBmYWxzZSwgMC4zKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8xL29sZF9tYW5faGFwcHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLmFkZEFuaW1hdGlvbigwLCBcIm9sZF9tYW4vbGV2ZWxfMTlfMS9vbGRfbWFuX3dlbGNvbWVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJvbGRfbWFuL2xldmVsXzE5XzEvb2xkX21hbl93ZWxjb21lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJlbW90aW9uL2hhcHB5XzJcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLmx1cGluLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGFzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJ1bk9wdGlvbjIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMS9tY19qdW1waW5nX2JvYXRcIiwgZmFsc2UpO1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5TV09PU0gsIGZhbHNlLCAwKTtcbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS5wYXJhbGxlbChcbiAgICAgICAgICAgIHR3ZWVuKCkudG8oMC41LCB7c2NhbGVYOiAtMC44fSksXG4gICAgICAgICAgICB0d2VlbigpLnRvKDAuNSwge3NjYWxlWTogMC44fSksXG4gICAgICAgICAgICB0d2VlbigpLmJlemllclRvKDAuNSwgY2MudjIodGhpcy5sdXBpbi5ub2RlLngsIHRoaXMubHVwaW4ubm9kZS55KSwgY2MudjIoLTEwMCwgLTQ1MCksIGNjLnYyKC0yMDAsIC02ODUpKVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuc2NhbGVYID0gLTAuODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLnNldEFuaW1hdGlvbigwLCBcInBvbGljZS9sZXZlbF8xMi9vbGRfbWFuX2F0dGFja1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkZSRUVaRSwgZmFsc2UsIDAuNik7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkuZGVsYXkoMC42KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4ubm9kZS5zY2FsZVggPSAtMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMS9tY19nZXRfaGl0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5XQVRFUiwgZmFsc2UsIDAuNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMS9tY19nZXRfaGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkuYnkoMiwge3Bvc2l0aW9uOiBjYy52MygwLCAtNTAwKX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dGYWlsKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRNaXgoXCJsZXZlbF8xOV8xL21jX3N3aW1faWRsZVwiLCBcImxldmVsXzE5XzEvbWNfc3dpbV9ndW5cIiwgMC4zKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xOV8xL21jX3N3aW1fZ3VuXCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJlbW90aW9uL3NpbmlzdGVyXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMS9tY19zd2ltX2d1blwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELlBFRUssIGZhbHNlLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8xL29sZF9tYW5fc2NhcmVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX3NoYXJrLm5vZGUpLmRlbGF5KDEpLnRvKDEsIHtwb3NpdGlvbjogY2MudjMoMjAwLCAtMTAzMCl9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyay50aW1lU2NhbGUgPSAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CSVRFLCBmYWxzZSwgMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NoYXJrLnNldEFuaW1hdGlvbigwLCBcInNoYXJrX2F0dGFja1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyay5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJzaGFya19hdHRhY2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyay5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0d2Vlbih0aGlzLl9zaGFyay5ub2RlKS5ieSgwLjIsIHtwb3NpdGlvbjogY2MudjMoMjAwLCAtNTAwKX0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMilcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS50bygwLjIsIHtwb3NpdGlvbjogY2MudjMoNzY1LCAtMTU2MCl9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmFpbCh0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=