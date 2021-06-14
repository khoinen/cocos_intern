
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ActionController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5eadbNZIh1KfLC/ZwVlKPTE', 'ActionController');
// Scripts/ActionController.ts

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
exports.EASING = exports.LISTENER = exports.TYPE = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var TYPE;
(function (TYPE) {
    TYPE[TYPE["NONE"] = 0] = "NONE";
    TYPE[TYPE["ACTIVE"] = 1] = "ACTIVE";
    TYPE[TYPE["ANIMATION"] = 2] = "ANIMATION";
    TYPE[TYPE["MIX"] = 3] = "MIX";
    TYPE[TYPE["MOVE_TO"] = 4] = "MOVE_TO";
    TYPE[TYPE["MOVE_BY"] = 5] = "MOVE_BY";
    TYPE[TYPE["OPACITY"] = 6] = "OPACITY";
    TYPE[TYPE["ROTATION"] = 7] = "ROTATION";
    TYPE[TYPE["SCALE"] = 8] = "SCALE";
    TYPE[TYPE["STOP_ACTION"] = 9] = "STOP_ACTION";
    TYPE[TYPE["ZOOM_CAMERA"] = 10] = "ZOOM_CAMERA";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var LISTENER;
(function (LISTENER) {
    LISTENER[LISTENER["NONE"] = 0] = "NONE";
    LISTENER[LISTENER["START"] = 1] = "START";
    LISTENER[LISTENER["END"] = 2] = "END";
    LISTENER[LISTENER["COMPLETE"] = 3] = "COMPLETE";
})(LISTENER = exports.LISTENER || (exports.LISTENER = {}));
var EASING;
(function (EASING) {
    EASING[EASING["NONE"] = 0] = "NONE";
    EASING[EASING["QuadIn"] = 1] = "QuadIn";
    EASING[EASING["QuadOut"] = 2] = "QuadOut";
    EASING[EASING["QuadInOut"] = 3] = "QuadInOut";
    EASING[EASING["CubicIn"] = 4] = "CubicIn";
    EASING[EASING["CubicOut"] = 5] = "CubicOut";
    EASING[EASING["CubicInOut"] = 6] = "CubicInOut";
    EASING[EASING["QuartIn"] = 7] = "QuartIn";
    EASING[EASING["QuartOut"] = 8] = "QuartOut";
    EASING[EASING["QuartInOut"] = 9] = "QuartInOut";
    EASING[EASING["QuintIn"] = 10] = "QuintIn";
    EASING[EASING["QuintOut"] = 11] = "QuintOut";
    EASING[EASING["QuintInOut"] = 12] = "QuintInOut";
    EASING[EASING["SineIn"] = 13] = "SineIn";
    EASING[EASING["SineOut"] = 14] = "SineOut";
    EASING[EASING["SineInOut"] = 15] = "SineInOut";
    EASING[EASING["ExpoIn"] = 16] = "ExpoIn";
    EASING[EASING["ExpoOut"] = 17] = "ExpoOut";
    EASING[EASING["ExpoInOut"] = 18] = "ExpoInOut";
    EASING[EASING["CircIn"] = 19] = "CircIn";
    EASING[EASING["CircOut"] = 20] = "CircOut";
    EASING[EASING["CircInOut"] = 21] = "CircInOut";
    EASING[EASING["ElasticIn"] = 22] = "ElasticIn";
    EASING[EASING["ElasticOut"] = 23] = "ElasticOut";
    EASING[EASING["ElasticInOut"] = 24] = "ElasticInOut";
    EASING[EASING["BackIn"] = 25] = "BackIn";
    EASING[EASING["BackOut"] = 26] = "BackOut";
    EASING[EASING["BackInOut"] = 27] = "BackInOut";
    EASING[EASING["BounceIn"] = 28] = "BounceIn";
    EASING[EASING["BounceOut"] = 29] = "BounceOut";
    EASING[EASING["BounceInOut"] = 30] = "BounceInOut";
    EASING[EASING["Smooth"] = 31] = "Smooth";
    EASING[EASING["Fade"] = 32] = "Fade";
})(EASING = exports.EASING || (exports.EASING = {}));
;
var ActionController = /** @class */ (function (_super) {
    __extends(ActionController, _super);
    function ActionController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.type = TYPE.NONE;
        _this_1.repeatForever = false;
        _this_1._listener = LISTENER.NONE;
        _this_1._repeatTimes = 1;
        _this_1._skeleton = null;
        _this_1._track = 0;
        _this_1._animationName = "";
        _this_1._animation1 = "";
        _this_1._animation2 = "";
        _this_1._timeMix = 0;
        _this_1._loop = false;
        _this_1._timeScale = 0;
        _this_1.timeDelay = 0;
        _this_1.duration = 0;
        _this_1._isActive = false;
        _this_1._position = new cc.Vec2();
        _this_1._easing = EASING.NONE;
        _this_1._value = 0;
        _this_1._stopAllAction = false;
        _this_1.target = [];
        _this_1.callback = [];
        return _this_1;
    }
    Object.defineProperty(ActionController.prototype, "repeatTimes", {
        set: function (value) {
            if (value >= 0)
                this._repeatTimes = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionController.prototype.runAction = function (_this) {
        var isTrue = true;
        var easingName = _this.getEasing(_this._easing);
        switch (_this.type) {
            case TYPE.ACTIVE:
                _this.target.forEach(function (element) {
                    element.active = _this._isActive;
                });
                _this.runCallback(_this);
                break;
            case TYPE.ANIMATION:
                cc.Tween.stopAllByTarget(_this._skeleton);
                if (!_this._skeleton)
                    break;
                if (_this._timeMix > 0) {
                    _this._skeleton.setMix(_this._skeleton.animation, _this._animationName, _this._timeMix);
                }
                _this._skeleton.timeScale = _this._timeScale;
                tween(_this._skeleton.node).delay(_this.timeDelay).call(function () {
                    _this._skeleton.setAnimation(_this._track, _this._animationName, _this._loop);
                }).start();
                _this.onListener(_this, isTrue, _this._listener);
                break;
            case TYPE.MIX:
                _this._skeleton.setMix(_this._animation1, _this._animation2, _this.timeMix);
                _this.runCallback(_this);
                break;
            case TYPE.MOVE_BY:
                for (var _i = 0, _a = _this.target; _i < _a.length; _i++) {
                    var t = _a[_i];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).by(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).by(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.MOVE_TO:
                for (var _b = 0, _c = _this.target; _b < _c.length; _b++) {
                    var t = _c[_b];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.OPACITY:
                for (var _d = 0, _e = _this.target; _d < _e.length; _d++) {
                    var t = _e[_d];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { opacity: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { opacity: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.ROTATION:
                for (var _f = 0, _g = _this.target; _f < _g.length; _f++) {
                    var t = _g[_f];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { rotation: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { rotation: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.SCALE:
                for (var _h = 0, _j = _this.target; _h < _j.length; _h++) {
                    var t = _j[_h];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { scale: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { scale: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.STOP_ACTION:
                if (_this._stopAllAction) {
                    _this.target.forEach(function (element) {
                        element.getComponent(sp.Skeleton).timeScale = 0;
                    });
                    cc.Tween.stopAll();
                }
                else {
                    _this.callback.forEach(function (element) {
                        cc.Tween.stopAllByTarget(element.target);
                    });
                }
                break;
            case TYPE.ZOOM_CAMERA:
                _this.callback.forEach(function (element) {
                    element.target.getComponent(cc.Camera).zoomRatio = _this._value;
                });
                break;
            case TYPE.NONE:
                _this.runCallback(_this);
                break;
        }
    };
    ActionController.prototype.onListener = function (_this, isTrue, type) {
        switch (type) {
            case LISTENER.START:
                if (_this._skeleton) {
                    _this._skeleton.setStartListener(function (trackEntry) {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName) {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
            case LISTENER.END:
                if (_this._skeleton) {
                    _this._skeleton.setEndListener(function (trackEntry) {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName) {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
            case LISTENER.COMPLETE:
                if (_this._skeleton) {
                    _this._skeleton.setCompleteListener(function (trackEntry) {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName) {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
        }
    };
    ActionController.prototype.runCallback = function (_this) {
        var component = "";
        var handler = "";
        for (var _i = 0, _a = _this.callback; _i < _a.length; _i++) {
            var item = _a[_i];
            if (_this.callback.length > 0) {
                component = item._componentName;
                handler = item.handler;
                var func = item.target.getComponent(component)[handler];
                func(item.target.getComponent(component));
            }
        }
    };
    ActionController.prototype.getEasing = function (easing) {
        if (easing == EASING.NONE) {
            return null;
        }
        switch (easing) {
            case EASING.QuadIn:
                return "quadIn";
            case EASING.QuadOut:
                return "quadOut";
            case EASING.QuadInOut:
                return "quadInOut";
            case EASING.CubicIn:
                return "cubicIn";
            case EASING.CubicOut:
                return "cubicOut";
            case EASING.CubicInOut:
                return "cubicInOut";
            case EASING.QuartIn:
                return "quartIn";
            case EASING.QuartOut:
                return "quartOut";
            case EASING.QuartInOut:
                return "quartInOut";
            case EASING.QuintIn:
                return "quintIn";
            case EASING.QuintOut:
                return "quintOut";
            case EASING.QuintInOut:
                return "quintInOut";
            case EASING.SineIn:
                return "sineIn";
            case EASING.SineOut:
                return "sineOut";
            case EASING.SineInOut:
                return "sineInOut";
            case EASING.ExpoIn:
                return "expoIn";
            case EASING.ExpoOut:
                return "expoOut";
            case EASING.ExpoInOut:
                return "expoInOut";
            case EASING.CircIn:
                return "circIn";
            case EASING.CircOut:
                return "circOut";
            case EASING.CircInOut:
                return "circInOut";
            case EASING.ElasticIn:
                return "elasticIn";
            case EASING.ElasticOut:
                return "elasticOut";
            case EASING.ElasticInOut:
                return "elasticInOut";
            case EASING.BackIn:
                return "backIn";
            case EASING.BackOut:
                return "backOut";
            case EASING.BackInOut:
                return "backInOut";
            case EASING.BounceIn:
                return "bounceIn";
            case EASING.BounceOut:
                return "bounceOut";
            case EASING.BounceInOut:
                return "bounceInOut";
            case EASING.Smooth:
                return "smooth";
            case EASING.Fade:
                return "fade";
        }
    };
    ActionController.prototype.onCompleteIntroduce = function () {
        this.node.dispatchEvent(new cc.Event.EventCustom("complete_introduce", true));
    };
    __decorate([
        property({ type: cc.Enum(TYPE) })
    ], ActionController.prototype, "type", void 0);
    __decorate([
        property({ visible: function () { return this.type != TYPE.ACTIVE && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "repeatForever", void 0);
    __decorate([
        property({ type: cc.Enum(LISTENER), visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_listener", void 0);
    __decorate([
        property({ visible: function () { return !this.repeatForever && this.type != TYPE.ACTIVE && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "_repeatTimes", void 0);
    __decorate([
        property({ type: sp.Skeleton, visible: function () { return this.type == TYPE.ANIMATION || this.type == TYPE.MIX; } })
    ], ActionController.prototype, "_skeleton", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_track", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_animationName", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.MIX; } })
    ], ActionController.prototype, "_animation1", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.MIX; } })
    ], ActionController.prototype, "_animation2", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_timeMix", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_loop", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_timeScale", void 0);
    __decorate([
        property({ visible: function () { return !this.repeatForever && this.type != TYPE.ACTIVE && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "repeatTimes", null);
    __decorate([
        property({ visible: function () { return this.type != TYPE.MIX; } })
    ], ActionController.prototype, "timeDelay", void 0);
    __decorate([
        property({ visible: function () { return this.type != TYPE.STOP_ACTION && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "duration", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ACTIVE; } })
    ], ActionController.prototype, "_isActive", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.MOVE_BY || this.type == TYPE.MOVE_TO; } })
    ], ActionController.prototype, "_position", void 0);
    __decorate([
        property({ type: cc.Enum(EASING), visible: function () { return this.type != TYPE.ACTIVE && this.type != TYPE.STOP_ACTION && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "_easing", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.OPACITY || this.type == TYPE.ROTATION || this.type == TYPE.SCALE; } })
    ], ActionController.prototype, "_value", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.STOP_ACTION; } })
    ], ActionController.prototype, "_stopAllAction", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ActionController.prototype, "target", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ActionController.prototype, "callback", void 0);
    ActionController = __decorate([
        ccclass
    ], ActionController);
    return ActionController;
}(cc.Component));
exports.default = ActionController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FjdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFckIsSUFBWSxJQVlYO0FBWkQsV0FBWSxJQUFJO0lBQ1osK0JBQUksQ0FBQTtJQUNKLG1DQUFNLENBQUE7SUFDTix5Q0FBUyxDQUFBO0lBQ1QsNkJBQUcsQ0FBQTtJQUNILHFDQUFPLENBQUE7SUFDUCxxQ0FBTyxDQUFBO0lBQ1AscUNBQU8sQ0FBQTtJQUNQLHVDQUFRLENBQUE7SUFDUixpQ0FBSyxDQUFBO0lBQ0wsNkNBQVcsQ0FBQTtJQUNYLDhDQUFXLENBQUE7QUFDZixDQUFDLEVBWlcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBWWY7QUFFRCxJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDaEIsdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCxxQ0FBRyxDQUFBO0lBQ0gsK0NBQVEsQ0FBQTtBQUNaLENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtBQUVELElBQVksTUFrQ1g7QUFsQ0QsV0FBWSxNQUFNO0lBQ2QsbUNBQUksQ0FBQTtJQUNKLHVDQUFNLENBQUE7SUFDTix5Q0FBTyxDQUFBO0lBQ1AsNkNBQVMsQ0FBQTtJQUNULHlDQUFPLENBQUE7SUFDUCwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLHlDQUFPLENBQUE7SUFDUCwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLDBDQUFPLENBQUE7SUFDUCw0Q0FBUSxDQUFBO0lBQ1IsZ0RBQVUsQ0FBQTtJQUNWLHdDQUFNLENBQUE7SUFDTiwwQ0FBTyxDQUFBO0lB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QUFRLENBQUMsRUFBQyxPQUFPLGdCQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQyxFQUFDLENBQUM7NERBQy9CO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztvREFDSDtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQztzREFDSDtJQXRFMUIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E0WXBDO0lBQUQsdUJBQUM7Q0E1WUQsQUE0WUMsQ0E1WTZDLEVBQUUsQ0FBQyxTQUFTLEdBNFl6RDtrQkE1WW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG52YXIgdHdlZW4gPSBjYy50d2VlbjtcblxuZXhwb3J0IGVudW0gVFlQRSB7XG4gICAgTk9ORSxcbiAgICBBQ1RJVkUsXG4gICAgQU5JTUFUSU9OLFxuICAgIE1JWCxcbiAgICBNT1ZFX1RPLFxuICAgIE1PVkVfQlksXG4gICAgT1BBQ0lUWSxcbiAgICBST1RBVElPTixcbiAgICBTQ0FMRSxcbiAgICBTVE9QX0FDVElPTixcbiAgICBaT09NX0NBTUVSQVxufVxuXG5leHBvcnQgZW51bSBMSVNURU5FUiB7XG4gICAgTk9ORSxcbiAgICBTVEFSVCxcbiAgICBFTkQsXG4gICAgQ09NUExFVEVcbn1cblxuZXhwb3J0IGVudW0gRUFTSU5HIHtcbiAgICBOT05FLFxuICAgIFF1YWRJbixcbiAgICBRdWFkT3V0LFxuICAgIFF1YWRJbk91dCxcbiAgICBDdWJpY0luLFxuICAgIEN1YmljT3V0LFxuICAgIEN1YmljSW5PdXQsXG4gICAgUXVhcnRJbixcbiAgICBRdWFydE91dCxcbiAgICBRdWFydEluT3V0LFxuICAgIFF1aW50SW4sXG4gICAgUXVpbnRPdXQsXG4gICAgUXVpbnRJbk91dCxcbiAgICBTaW5lSW4sXG4gICAgU2luZU91dCxcbiAgICBTaW5lSW5PdXQsXG4gICAgRXhwb0luLFxuICAgIEV4cG9PdXQsXG4gICAgRXhwb0luT3V0LFxuICAgIENpcmNJbixcbiAgICBDaXJjT3V0LFxuICAgIENpcmNJbk91dCxcbiAgICBFbGFzdGljSW4sXG4gICAgRWxhc3RpY091dCxcbiAgICBFbGFzdGljSW5PdXQsXG4gICAgQmFja0luLFxuICAgIEJhY2tPdXQsXG4gICAgQmFja0luT3V0LFxuICAgIEJvdW5jZUluLFxuICAgIEJvdW5jZU91dCxcbiAgICBCb3VuY2VJbk91dCxcbiAgICBTbW9vdGgsXG4gICAgRmFkZVxufTtcblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkVudW0oVFlQRSl9KVxuICAgIHR5cGU6IFRZUEUgPSBUWVBFLk5PTkU7XG5cbiAgICBAcHJvcGVydHkoe3Zpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSAhPSBUWVBFLkFDVElWRSAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BTklNQVRJT04gJiYgdGhpcy50eXBlICE9IFRZUEUuTUlYfX0pXG4gICAgcmVwZWF0Rm9yZXZlciA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKExJU1RFTkVSKSwgdmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfbGlzdGVuZXI6IExJU1RFTkVSID0gTElTVEVORVIuTk9ORTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gIXRoaXMucmVwZWF0Rm9yZXZlciAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BQ1RJVkUgJiYgdGhpcy50eXBlICE9IFRZUEUuQU5JTUFUSU9OICYmIHRoaXMudHlwZSAhPSBUWVBFLk1JWH19KVxuICAgIHByaXZhdGUgX3JlcGVhdFRpbWVzID0gMTtcbiAgICBcbiAgICBAcHJvcGVydHkoe3R5cGU6IHNwLlNrZWxldG9uLCB2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5BTklNQVRJT04gfHwgdGhpcy50eXBlID09IFRZUEUuTUlYfX0pXG4gICAgcHJpdmF0ZSBfc2tlbGV0b246IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfdHJhY2sgPSAwO1xuXG4gICAgQHByb3BlcnR5KHt2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5BTklNQVRJT059fSlcbiAgICBwcml2YXRlIF9hbmltYXRpb25OYW1lID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuTUlYfX0pXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uMSA9IFwiXCI7XG4gICAgXG4gICAgQHByb3BlcnR5KHt2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5NSVh9fSlcbiAgICBwcml2YXRlIF9hbmltYXRpb24yID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfdGltZU1peCA9IDA7XG5cbiAgICBAcHJvcGVydHkoe3Zpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSA9PSBUWVBFLkFOSU1BVElPTn19KVxuICAgIHByaXZhdGUgX2xvb3AgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfdGltZVNjYWxlID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gIXRoaXMucmVwZWF0Rm9yZXZlciAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BQ1RJVkUgJiYgdGhpcy50eXBlICE9IFRZUEUuTUlYfX0pXG4gICAgc2V0IHJlcGVhdFRpbWVzKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbHVlID49IDApXG4gICAgICAgICAgICB0aGlzLl9yZXBlYXRUaW1lcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlICE9IFRZUEUuTUlYfX0pXG4gICAgdGltZURlbGF5ID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlICE9IFRZUEUuU1RPUF9BQ1RJT04gJiYgdGhpcy50eXBlICE9IFRZUEUuQU5JTUFUSU9OICYmIHRoaXMudHlwZSAhPSBUWVBFLk1JWH19KVxuICAgIGR1cmF0aW9uID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQUNUSVZFfX0pXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuTU9WRV9CWSB8fCB0aGlzLnR5cGUgPT0gVFlQRS5NT1ZFX1RPfX0pXG4gICAgcHJpdmF0ZSBfcG9zaXRpb24gPSBuZXcgY2MuVmVjMigpO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKEVBU0lORyksIHZpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSAhPSBUWVBFLkFDVElWRSAmJiB0aGlzLnR5cGUgIT0gVFlQRS5TVE9QX0FDVElPTiAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BTklNQVRJT04gJiYgdGhpcy50eXBlICE9IFRZUEUuTUlYO319KVxuICAgIHByaXZhdGUgX2Vhc2luZzogRUFTSU5HID0gRUFTSU5HLk5PTkU7XG5cbiAgICBAcHJvcGVydHkoe3Zpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSA9PSBUWVBFLk9QQUNJVFkgfHwgdGhpcy50eXBlID09IFRZUEUuUk9UQVRJT04gfHwgdGhpcy50eXBlID09IFRZUEUuU0NBTEU7fX0pXG4gICAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuXG4gICAgQHByb3BlcnR5KHt2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5TVE9QX0FDVElPTjt9fSlcbiAgICBwcml2YXRlIF9zdG9wQWxsQWN0aW9uID0gZmFsc2U7XG4gICAgXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcbiAgICB0YXJnZXQ6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl19KVxuICAgIGNhbGxiYWNrOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcblxuICAgIHJ1bkFjdGlvbihfdGhpcyk6IHZvaWQge1xuICAgICAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVhc2luZ05hbWUgPSBfdGhpcy5nZXRFYXNpbmcoX3RoaXMuX2Vhc2luZyk7XG4gICAgICAgIHN3aXRjaChfdGhpcy50eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFRZUEUuQUNUSVZFOlxuICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IF90aGlzLl9pc0FjdGl2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRZUEUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChfdGhpcy5fc2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX3NrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fdGltZU1peCA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc2tlbGV0b24uc2V0TWl4KF90aGlzLl9za2VsZXRvbi5hbmltYXRpb24sIF90aGlzLl9hbmltYXRpb25OYW1lLCBfdGhpcy5fdGltZU1peCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuX3NrZWxldG9uLnRpbWVTY2FsZSA9IF90aGlzLl90aW1lU2NhbGU7XG4gICAgICAgICAgICAgICAgdHdlZW4oX3RoaXMuX3NrZWxldG9uLm5vZGUpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oX3RoaXMuX3RyYWNrLCBfdGhpcy5fYW5pbWF0aW9uTmFtZSwgX3RoaXMuX2xvb3ApO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX3RoaXMub25MaXN0ZW5lcihfdGhpcywgaXNUcnVlLCBfdGhpcy5fbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLk1JWDpcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2tlbGV0b24uc2V0TWl4KF90aGlzLl9hbmltYXRpb24xLCBfdGhpcy5fYW5pbWF0aW9uMiwgX3RoaXMudGltZU1peCk7XG4gICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLk1PVkVfQlk6XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBvZiBfdGhpcy50YXJnZXQpXG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZXBlYXRGb3JldmVyKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0KS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkuZGVsYXkoX3RoaXMudGltZURlbGF5KS5ieShfdGhpcy5kdXJhdGlvbiwge3Bvc2l0aW9uOiBjYy52MyhfdGhpcy5fcG9zaXRpb24pfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0KF90aGlzLl9yZXBlYXRUaW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLmJ5KF90aGlzLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKF90aGlzLl9wb3NpdGlvbil9LCB7ZWFzaW5nOiBlYXNpbmdOYW1lfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLk1PVkVfVE86XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBvZiBfdGhpcy50YXJnZXQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVwZWF0Rm9yZXZlcilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtwb3NpdGlvbjogY2MudjMoX3RoaXMuX3Bvc2l0aW9uKX0sIHtlYXNpbmc6IGVhc2luZ05hbWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdChfdGhpcy5fcmVwZWF0VGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKF90aGlzLl9wb3NpdGlvbil9LCB7ZWFzaW5nOiBlYXNpbmdOYW1lfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRS5PUEFDSVRZOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgb2YgX3RoaXMudGFyZ2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlcGVhdEZvcmV2ZXIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7b3BhY2l0eTogX3RoaXMuX3ZhbHVlfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0KF90aGlzLl9yZXBlYXRUaW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtvcGFjaXR5OiBfdGhpcy5fdmFsdWV9LCB7ZWFzaW5nOiBlYXNpbmdOYW1lfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRZUEUuUk9UQVRJT046XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBvZiBfdGhpcy50YXJnZXQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVwZWF0Rm9yZXZlcilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtyb3RhdGlvbjogX3RoaXMuX3ZhbHVlfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0KF90aGlzLl9yZXBlYXRUaW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtyb3RhdGlvbjogX3RoaXMuX3ZhbHVlfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLlNDQUxFOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgb2YgX3RoaXMudGFyZ2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlcGVhdEZvcmV2ZXIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7c2NhbGU6IF90aGlzLl92YWx1ZX0sIHtlYXNpbmc6IGVhc2luZ05hbWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdChfdGhpcy5fcmVwZWF0VGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7c2NhbGU6IF90aGlzLl92YWx1ZX0sIHtlYXNpbmc6IGVhc2luZ05hbWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRS5TVE9QX0FDVElPTjpcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX3N0b3BBbGxBY3Rpb24pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxsYmFjay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGVsZW1lbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLlpPT01fQ0FNRVJBOlxuICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5DYW1lcmEpLnpvb21SYXRpbyA9IF90aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRS5OT05FOlxuICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTGlzdGVuZXIoX3RoaXMsIGlzVHJ1ZSwgdHlwZSk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgTElTVEVORVIuU1RBUlQ6XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9za2VsZXRvbilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9za2VsZXRvbi5zZXRTdGFydExpc3RlbmVyKHRyYWNrRW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSwgXCJjb2xvcjpncmVlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUsIFwiY29sb3I6Ymx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1RydWUgJiYgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PSBfdGhpcy5fYW5pbWF0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTElTVEVORVIuRU5EOlxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fc2tlbGV0b24pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc2tlbGV0b24uc2V0RW5kTGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lLCBcImNvbG9yOmdyZWVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSwgXCJjb2xvcjpibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVHJ1ZSAmJiB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09IF90aGlzLl9hbmltYXRpb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMSVNURU5FUi5DT01QTEVURTpcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX3NrZWxldG9uKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3NrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lLCBcImNvbG9yOmdyZWVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSwgXCJjb2xvcjpibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVHJ1ZSAmJiB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09IF90aGlzLl9hbmltYXRpb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcnVuQ2FsbGJhY2soX3RoaXMpOiB2b2lkIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IFwiXCI7XG4gICAgICAgIHZhciBoYW5kbGVyID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBfdGhpcy5jYWxsYmFjaylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNhbGxiYWNrLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gaXRlbS5fY29tcG9uZW50TmFtZTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gaXRlbS5oYW5kbGVyO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jID0gaXRlbS50YXJnZXQuZ2V0Q29tcG9uZW50KGNvbXBvbmVudClbaGFuZGxlcl07XG4gICAgICAgICAgICAgICAgZnVuYyhpdGVtLnRhcmdldC5nZXRDb21wb25lbnQoY29tcG9uZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFYXNpbmcoZWFzaW5nOiBFQVNJTkcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZWFzaW5nID09IEVBU0lORy5OT05FKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGVhc2luZylcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVhZEluOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInF1YWRJblwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVhZE91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWFkT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5RdWFkSW5PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhZEluT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5DdWJpY0luOlxuICAgICAgICAgICAgICAgIHJldHVybiBcImN1YmljSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkN1YmljT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImN1YmljT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5DdWJpY0luT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImN1YmljSW5PdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLlF1YXJ0SW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhcnRJblwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVhcnRPdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhcnRPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLlF1YXJ0SW5PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhcnRJbk91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVpbnRJbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWludEluXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5RdWludE91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWludE91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVpbnRJbk91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWludEluT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5TaW5lSW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic2luZUluXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5TaW5lT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcInNpbmVPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLlNpbmVJbk91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzaW5lSW5PdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkV4cG9JbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBvSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkV4cG9PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwb091dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuRXhwb0luT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImV4cG9Jbk91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQ2lyY0luOlxuICAgICAgICAgICAgICAgIHJldHVybiBcImNpcmNJblwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQ2lyY091dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjaXJjT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5DaXJjSW5PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2lyY0luT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5FbGFzdGljSW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZWxhc3RpY0luXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5FbGFzdGljT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImVsYXN0aWNPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkVsYXN0aWNJbk91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJlbGFzdGljSW5PdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJhY2tJbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJiYWNrSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJhY2tPdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYmFja091dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQmFja0luT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImJhY2tJbk91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQm91bmNlSW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYm91bmNlSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJvdW5jZU91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJib3VuY2VPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJvdW5jZUluT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImJvdW5jZUluT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5TbW9vdGg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic21vb3RoXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5GYWRlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcImZhZGVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGVJbnRyb2R1Y2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImNvbXBsZXRlX2ludHJvZHVjZVwiLCB0cnVlKSk7XG4gICAgfVxufVxuIl19