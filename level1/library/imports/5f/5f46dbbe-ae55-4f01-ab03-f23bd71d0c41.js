"use strict";
cc._RF.push(module, '5f46du+rlVPAasD8jvXHQxB', 'Setting');
// Scripts/Setting.ts

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
var Data_1 = require("./Data");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var Setting = /** @class */ (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound = null;
        _this.music = null;
        _this.shadow = null;
        _this.container = null;
        _this._data = null;
        _this._gameManager = null;
        return _this;
    }
    Setting.prototype.onLoad = function () {
        this.shadow.opacity = 0;
        this.container.scale = 0.7;
        this.container.opacity = 0;
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    };
    Setting.prototype.onEnable = function () {
        var _this = this;
        this.node.on("touchend", this.onClose, this);
        this.effectOpen();
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        Data_1.default.getData(Data_1.default.LOCAL_KEY, function (err, data) {
            _this._data = data;
            _this.music.isChecked = _this._data.isMusic;
            _this.sound.isChecked = _this._data.isSound;
        });
    };
    Setting.prototype.onDisable = function () {
        this.node.off("touchend", this.onClose, this);
    };
    Setting.prototype.effectOpen = function () {
        var _this = this;
        tween(this.shadow).to(0.2, { opacity: 200 })
            .call(function () {
            tween(_this.container).parallel(tween().to(0.2, { opacity: 255 }), tween().to(0.2, { scale: 1 }, { easing: "quartOut" }))
                .start();
        })
            .start();
    };
    Setting.prototype.effectClose = function (callback) {
        tween(this.shadow).to(0.2, { opacity: 0 }).start();
        tween(this.container).parallel(tween().to(0.2, { opacity: 0 }), tween().to(0.2, { scale: 0.7 }, { easing: "quartOut" }))
            .call(callback)
            .start();
    };
    Setting.prototype.onClose = function () {
        var _this = this;
        this.effectClose(function () {
            _this.node.active = false;
        });
    };
    Setting.prototype.onChangeToggle = function (event) {
        switch (event.target.parent.name) {
            case "ToggleSound":
                this._data.isSound = event.isChecked;
                Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
                break;
            case "ToggleMusic":
                this._data.isMusic = event.isChecked;
                Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
                if (event.isChecked) {
                    this.playMusic();
                }
                else {
                    this.stopMusic();
                }
                break;
        }
    };
    Setting.prototype.onRestoreSetting = function () {
        this._data.isSound = true;
        this._data.isMusic = true;
        this.sound.isChecked = this._data.isSound;
        this.music.isChecked = this._data.isMusic;
        Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
    };
    Setting.prototype.stopMusic = function () {
        this._gameManager.stopAudioBG();
    };
    Setting.prototype.playMusic = function () {
        this._gameManager.playAudioBG();
    };
    __decorate([
        property(cc.Toggle)
    ], Setting.prototype, "sound", void 0);
    __decorate([
        property(cc.Toggle)
    ], Setting.prototype, "music", void 0);
    __decorate([
        property(cc.Node)
    ], Setting.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], Setting.prototype, "container", void 0);
    Setting = __decorate([
        ccclass
    ], Setting);
    return Setting;
}(cc.Component));
exports.default = Setting;

cc._RF.pop();