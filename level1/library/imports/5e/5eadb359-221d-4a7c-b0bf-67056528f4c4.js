"use strict";
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