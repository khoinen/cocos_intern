const {ccclass, property} = cc._decorator;

var tween = cc.tween;

export enum TYPE {
    NONE,
    ACTIVE,
    ANIMATION,
    MIX,
    MOVE_TO,
    MOVE_BY,
    OPACITY,
    ROTATION,
    SCALE,
    STOP_ACTION,
    ZOOM_CAMERA
}

export enum LISTENER {
    NONE,
    START,
    END,
    COMPLETE
}

export enum EASING {
    NONE,
    QuadIn,
    QuadOut,
    QuadInOut,
    CubicIn,
    CubicOut,
    CubicInOut,
    QuartIn,
    QuartOut,
    QuartInOut,
    QuintIn,
    QuintOut,
    QuintInOut,
    SineIn,
    SineOut,
    SineInOut,
    ExpoIn,
    ExpoOut,
    ExpoInOut,
    CircIn,
    CircOut,
    CircInOut,
    ElasticIn,
    ElasticOut,
    ElasticInOut,
    BackIn,
    BackOut,
    BackInOut,
    BounceIn,
    BounceOut,
    BounceInOut,
    Smooth,
    Fade
};


@ccclass
export default class ActionController extends cc.Component {

    @property({type: cc.Enum(TYPE)})
    type: TYPE = TYPE.NONE;

    @property({visible() {return this.type != TYPE.ACTIVE && this.type != TYPE.ANIMATION && this.type != TYPE.MIX}})
    repeatForever = false;

    @property({type: cc.Enum(LISTENER), visible() {return this.type == TYPE.ANIMATION}})
    private _listener: LISTENER = LISTENER.NONE;

    @property({visible() {return !this.repeatForever && this.type != TYPE.ACTIVE && this.type != TYPE.ANIMATION && this.type != TYPE.MIX}})
    private _repeatTimes = 1;
    
    @property({type: sp.Skeleton, visible() {return this.type == TYPE.ANIMATION || this.type == TYPE.MIX}})
    private _skeleton: sp.Skeleton = null;

    @property({visible() {return this.type == TYPE.ANIMATION}})
    private _track = 0;

    @property({visible() {return this.type == TYPE.ANIMATION}})
    private _animationName = "";

    @property({visible() {return this.type == TYPE.MIX}})
    private _animation1 = "";
    
    @property({visible() {return this.type == TYPE.MIX}})
    private _animation2 = "";

    @property({visible() {return this.type == TYPE.ANIMATION}})
    private _timeMix = 0;

    @property({visible() {return this.type == TYPE.ANIMATION}})
    private _loop = false;

    @property({visible() {return this.type == TYPE.ANIMATION}})
    private _timeScale = 0;

    @property({visible() {return !this.repeatForever && this.type != TYPE.ACTIVE && this.type != TYPE.MIX}})
    set repeatTimes(value)
    {
        if (value >= 0)
            this._repeatTimes = value;
    }

    @property({visible() {return this.type != TYPE.MIX}})
    timeDelay = 0;

    @property({visible() {return this.type != TYPE.STOP_ACTION && this.type != TYPE.ANIMATION && this.type != TYPE.MIX}})
    duration = 0;

    @property({visible() {return this.type == TYPE.ACTIVE}})
    private _isActive = false;

    @property({visible() {return this.type == TYPE.MOVE_BY || this.type == TYPE.MOVE_TO}})
    private _position = new cc.Vec2();

    @property({type: cc.Enum(EASING), visible() {return this.type != TYPE.ACTIVE && this.type != TYPE.STOP_ACTION && this.type != TYPE.ANIMATION && this.type != TYPE.MIX;}})
    private _easing: EASING = EASING.NONE;

    @property({visible() {return this.type == TYPE.OPACITY || this.type == TYPE.ROTATION || this.type == TYPE.SCALE;}})
    private _value = 0;

    @property({visible() {return this.type == TYPE.STOP_ACTION;}})
    private _stopAllAction = false;
    
    @property({type: cc.Node})
    target: cc.Node[] = [];

    @property({type: [cc.Component.EventHandler]})
    callback: cc.Component.EventHandler[] = [];

    runAction(_this): void {
        let isTrue = true;
        var easingName = _this.getEasing(_this._easing);
        switch(_this.type)
        {
            case TYPE.ACTIVE:
                _this.target.forEach(element => {
                    element.active = _this._isActive;
                });
                _this.runCallback(_this);
                break;
            case TYPE.ANIMATION:
                cc.Tween.stopAllByTarget(_this._skeleton);
                if (!_this._skeleton)
                    break;

                if (_this._timeMix > 0)
                {
                    _this._skeleton.setMix(_this._skeleton.animation, _this._animationName, _this._timeMix);
                }

                _this._skeleton.timeScale = _this._timeScale;
                tween(_this._skeleton.node).delay(_this.timeDelay).call(() => {
                    _this._skeleton.setAnimation(_this._track, _this._animationName, _this._loop);
                }).start();
                
                _this.onListener(_this, isTrue, _this._listener);
                break;
            case TYPE.MIX:
                _this._skeleton.setMix(_this._animation1, _this._animation2, _this.timeMix);
                _this.runCallback(_this);
                break;
            case TYPE.MOVE_BY:
                for (var t of _this.target)
                {

                    if (_this.repeatForever)
                    {
                        tween(t).repeatForever(
                            tween().delay(_this.timeDelay).by(_this.duration, {position: cc.v3(_this._position)}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                    else
                    {
                        tween(t).repeat(_this._repeatTimes,
                                tween().delay(_this.timeDelay).by(_this.duration, {position: cc.v3(_this._position)}, {easing: easingName})
                                    )
                                    .call(() => {
                                        _this.runCallback(_this);
                                    })
                            .start();
                    }
                }
                break;
            case TYPE.MOVE_TO:
                for (var t of _this.target)
                {
                    if (_this.repeatForever)
                    {
                        tween(t).repeatForever(
                            tween().delay(_this.timeDelay).to(_this.duration, {position: cc.v3(_this._position)}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                    else
                    {
                        tween(t).repeat(_this._repeatTimes,
                            tween().delay(_this.timeDelay).to(_this.duration, {position: cc.v3(_this._position)}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start()
                    }
                }
                break;
            case TYPE.OPACITY:
                for (var t of _this.target)
                {
                    if (_this.repeatForever)
                    {
                        tween(t).repeatForever(
                            tween().delay(_this.timeDelay).to(_this.duration, {opacity: _this._value}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                    else
                    {
                        tween(t).repeat(_this._repeatTimes,
                            tween().delay(_this.timeDelay).to(_this.duration, {opacity: _this._value}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                }
                break;
            case TYPE.ROTATION:
                for (var t of _this.target)
                {
                    if (_this.repeatForever)
                    {
                        tween(t).repeatForever(
                            tween().delay(_this.timeDelay).to(_this.duration, {rotation: _this._value}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                    else
                    {
                        tween(t).repeat(_this._repeatTimes,
                            tween().delay(_this.timeDelay).to(_this.duration, {rotation: _this._value}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                }
                break;
            case TYPE.SCALE:
                for (var t of _this.target)
                {
                    if (_this.repeatForever)
                    {
                        tween(t).repeatForever(
                            tween().delay(_this.timeDelay).to(_this.duration, {scale: _this._value}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                    else
                    {
                        tween(t).repeat(_this._repeatTimes,
                            tween().delay(_this.timeDelay).to(_this.duration, {scale: _this._value}, {easing: easingName})
                        )
                        .call(() => {
                            _this.runCallback(_this);
                        })
                        .start();
                    }
                }
                break;
            case TYPE.STOP_ACTION:
                if (_this._stopAllAction)
                {
                    _this.target.forEach(element => {
                        element.getComponent(sp.Skeleton).timeScale = 0;
                    });
                    cc.Tween.stopAll();
                }
                else
                {
                    _this.callback.forEach(element => {
                        cc.Tween.stopAllByTarget(element.target);
                    });
                }
                break;
            case TYPE.ZOOM_CAMERA:
                _this.callback.forEach(element => {
                    element.target.getComponent(cc.Camera).zoomRatio = _this._value;
                });
                break;
            case TYPE.NONE:
                _this.runCallback(_this);
                break;
        }
    }

    onListener(_this, isTrue, type): void {
        switch (type)
        {
            case LISTENER.START:
                if (_this._skeleton)
                {
                    _this._skeleton.setStartListener(trackEntry => {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName)
                        {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
            case LISTENER.END:
                if (_this._skeleton)
                {
                    _this._skeleton.setEndListener(trackEntry => {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName)
                        {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
            case LISTENER.COMPLETE:
                if (_this._skeleton)
                {
                    _this._skeleton.setCompleteListener(trackEntry => {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName)
                        {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
        }
    }

    runCallback(_this): void {
        var component = "";
        var handler = "";
        for (var item of _this.callback)
        {
            if (_this.callback.length > 0)
            {
                component = item._componentName;
                handler = item.handler;
                var func = item.target.getComponent(component)[handler];
                func(item.target.getComponent(component));
            }
        }
    }

    getEasing(easing: EASING): string {
        if (easing == EASING.NONE)
        {
            return null;
        }
        switch (easing)
        {
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
    }

    onCompleteIntroduce(): void {
        this.node.dispatchEvent(new cc.Event.EventCustom("complete_introduce", true));
    }
}
