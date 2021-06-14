"use strict";
cc._RF.push(module, '01bf0WmjNtFoaDXKbrhV1vh', 'GameManager');
// Scripts/GameManager.ts

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
exports.SOUND = void 0;
var Data_1 = require("./Data");
var EffectManager_1 = require("./EffectManager");
var FBInstantManager_1 = require("./FBInstantManager");
var BundleManager_1 = require("./BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var TOTAL_LEVEL = 19;
var VERSION = '1.3.0';
var SOUND;
(function (SOUND) {
    SOUND[SOUND["BG"] = 0] = "BG";
    SOUND[SOUND["CLICK"] = 1] = "CLICK";
    SOUND[SOUND["FAIL_STAGE"] = 2] = "FAIL_STAGE";
    SOUND[SOUND["SUCCESS_STAGE"] = 3] = "SUCCESS_STAGE";
    SOUND[SOUND["SUCCESS_LEVEL"] = 4] = "SUCCESS_LEVEL";
})(SOUND = exports.SOUND || (exports.SOUND = {}));
//Bật tắt Introduce
var SHOW_INTRO = true;
var lazyGetDataAsync = [];
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levels = [];
        _this.shadow = null;
        _this.sounds = [];
        _this.success = null;
        _this.fail = null;
        _this.ui = null;
        _this.shadowUI = null;
        _this.gameContainer = null;
        _this.optionContainer = null;
        _this.introducePrefab = null;
        _this.home = null;
        _this.listLevelPrefab = null;
        _this.level = null;
        _this.mainCamera = null;
        _this.setting = null;
        _this.noInternet = null;
        _this.introduce = null;
        _this.loading = null;
        _this.btnSetting = null;
        _this.guide = null;
        _this.comingSoon2 = null;
        _this._home = null;
        _this._introduce = null;
        _this._listLevel = null;
        _this._loading = null;
        _this._ui = null;
        _this._countDown = null;
        _this._levelCurrent = {
            script: null,
            level: 0
        };
        _this._levelArray = [];
        _this._currentScene = null;
        _this._beginScene = null;
        _this._data = null;
        _this._txtMoney = null;
        _this.currentAudioBG = null;
        _this._clickX4 = true;
        _this._selectedLevel = 0;
        _this._failLevelLoad = null;
        _this._bundleInstance = null;
        _this._temp = 0;
        _this.firstPlay = true;
        return _this;
    }
    GameManager_1 = GameManager;
    //GameManager để quản lý việc tạo và chuyển các level
    GameManager.prototype.onLoad = function () {
        var _this = this;
        this._bundleInstance = BundleManager_1.default.getInstance();
        console.log('APP VERSION: ', VERSION);
        this.ui.active = true;
        this._ui = this.ui.getComponent("UIController");
        this.shadowUI.opacity = 0;
        this.showHome();
        this.showShop(false);
        this._txtMoney = this._ui.moneyTop.getChildByName("txt_money").getComponent(cc.Label);
        this._countDown = this._ui.countDown.getComponent("CountDown5s");
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            _this._data = data;
            if (_this._data.unlockedLevel > 0) {
                _this.firstPlay = false;
            }
            _this._txtMoney.string = _this._data.money;
            _this._temp = _this._data.unlockedLevel;
            if (_this._data.unlockedLevel < TOTAL_LEVEL) {
                var path = "Level" + (_this._data.unlockedLevel + 1);
                _this._bundleInstance.getPrefabByName(path);
            }
            lazyGetDataAsync.forEach(function (lazyFunc) {
                lazyFunc(_this._data);
            });
        });
    };
    GameManager.prototype.onEnable = function () {
        var _this = this;
        this._home = this.home.getComponent("HomeController");
        if (this._home)
            this._home.updateCalendar();
        this._introduce = cc.find("Canvas/Introduce");
        this.optionContainer.zIndex = cc.macro.MAX_ZINDEX - 100;
        this.home.zIndex = cc.macro.MAX_ZINDEX - 99;
        this.getDataAsync(function (data) {
            _this._levelCurrent.level = data.unlockedLevel;
            _this._selectedLevel = data.unlockedLevel;
            if ((_this._data.unlockedLevel == 0) && _this.firstPlay) {
                _this._ui.showGuide(true);
                _this.firstPlay = false;
            }
        });
    };
    GameManager.prototype.start = function () {
        this.playAudioBG();
        this._loading = cc.instantiate(this.loading);
        this.showLoading(false);
        this._loading.zIndex = cc.macro.MAX_ZINDEX;
        cc.find("Canvas").addChild(this._loading);
    };
    GameManager.prototype.getDataAsync = function (cb) {
        if (this._data)
            return cb(this._data);
        lazyGetDataAsync.push(cb);
    };
    GameManager.prototype.playAudioBG = function () {
        this.playSound(SOUND.BG, true);
    };
    GameManager.prototype.stopAudioBG = function () {
        cc.audioEngine.stopMusic();
    };
    GameManager.prototype.showHome = function () {
        if (this.home) {
            this.home.active = true;
        }
    };
    GameManager.prototype.showLoading = function (show) {
        this._loading.active = show;
    };
    GameManager.prototype.showIntroduce = function () {
        if (this._introduce) {
            this.showLoading(false);
            this._introduce.active = true;
            this._introduce.zIndex = cc.macro.MAX_ZINDEX;
            this._ui.showUIIntroduce(false);
        }
    };
    GameManager.prototype.showListLevel = function () {
        this.playSound(SOUND.CLICK, false);
        if (this._listLevel) {
            this._listLevel.active = true;
        }
        else {
            this._listLevel = cc.instantiate(this.listLevelPrefab);
            this._listLevel.zIndex = cc.macro.MAX_ZINDEX - 1;
            cc.find("Canvas").addChild(this._listLevel);
        }
        this._ui.showGuide(false);
    };
    GameManager.prototype.nextIntroduce = function () {
        this.home.active = false;
        this._ui.showUIIntroduce(false);
        //Từ level 2 trở đi khi bấm vào game sẽ không xuất hiện phần Lupin bị bắt nữa
        // 0 là index tương đương level 1
        if (this._temp != 0)
            this._selectedLevel = this._temp;
        if (this._selectedLevel % 10 != 0) {
            this.startGame();
            return;
        }
        if (!SHOW_INTRO) {
            this.startGame();
            return;
        }
        if (this._introduce) {
            this._introduce.getComponent("Introduce").setIntro(this._selectedLevel);
            this._ui.showUIEndGame(false);
            this.showIntroduce();
        }
    };
    GameManager.prototype.onReplay = function () {
        this.playSound(SOUND.CLICK, false);
        this._currentScene.active = false;
        this._beginScene.active = true;
    };
    GameManager.prototype.onHome = function () {
        this.playSound(SOUND.CLICK, false);
        cc.Tween.stopAll();
        this.mainCamera.active = true;
        this.home.active = true;
        this.gameContainer.children.forEach(function (children) {
            children.active = false;
        });
        this._ui.showUIEndGame(false);
        this._ui.showUIIntroduce(true);
        this._ui.showUIContinue(false);
    };
    GameManager.prototype.onNextLevel = function () {
        var _this = this;
        this.playSound(SOUND.CLICK, false);
        if (this._levelCurrent.level >= TOTAL_LEVEL) {
            this.btnSetting.active = false;
            this._ui.showUIEndGame(false);
            this._ui.showComingSoon();
            return;
        }
        this.showLoading(true);
        this._temp = this._levelCurrent.level;
        var name = "Level" + (this._temp + 1);
        if (this._temp % 10 == 0) {
            this.nextIntroduce();
            return;
        }
        this._bundleInstance.getPrefabByName(name, function (err, prefab) {
            _this.showLoading(false);
            if (prefab) {
                _this._currentScene.active = false;
                if (_this._currentScene.parent != _this.gameContainer) {
                    _this._currentScene.parent.active = false;
                }
                _this.gameContainer.addChild(cc.instantiate(prefab));
                _this._ui.showUIEndGame(false);
                var current = _this._temp + 1;
                var next = _this._temp + 2;
                cc.error("Current " + current);
                cc.error("Next " + next);
                _this.setLevel(current, next);
                GameManager_1.logNextLevel(current);
                return;
            }
            console.error(err);
        });
    };
    GameManager.logEvent = function (eventName) {
    };
    GameManager.logFailed = function (level, stage, option) {
    };
    GameManager.logPassed = function (level, stage, option) {
    };
    GameManager.logLevel = function (level) {
    };
    GameManager.logNextLevel = function (level) {
    };
    GameManager.prototype.initGame = function (level) {
        var _this = this;
        GameManager_1.logLevel(level);
        for (var i = 0; i < this.gameContainer.children.length; ++i) {
            var node = this.gameContainer.children[i];
            if (node.name == ("Level" + (level + 1))) {
                node.active = true;
                if (node.children[0].name.includes("Level")) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var children = _a[_i];
                        children.active = false;
                    }
                    node.children[0].active = true;
                }
                return;
            }
        }
        this.showLoading(true);
        var name = "Level" + (level + 1);
        this._bundleInstance.getPrefabByName(name, function (err, prefab) {
            _this.showLoading(false);
            if (prefab) {
                var node = cc.instantiate(prefab);
                _this.gameContainer.addChild(node);
                return;
            }
            console.log('get level err', err);
            _this.onHome();
            if (!window.navigator.online) {
                _this._ui.showAlert('NO INTERNET CONNECTION');
                return;
            }
            _this._ui.showComingSoon();
            return;
        });
    };
    // addLevel(level: number, cb): void {
    //     this.showLoading(true);
    //     this._bundleInstance.loadPrefabByName("Level" + (level + 1) + "/" + "Level" + (level + 1), prefab => {
    //         this.showLoading(false);
    //         cb(prefab);
    //     })
    // }
    GameManager.prototype.startGame = function () {
        this.playSound(SOUND.CLICK, false);
        this.initGame(this._selectedLevel);
        // this.initGame(14);
    };
    GameManager.prototype.selectLevel = function (level) {
        if (this._data.unlockedLevel == TOTAL_LEVEL && level == TOTAL_LEVEL) {
            this.showComingSoon2();
            this.playSound(SOUND.CLICK, false);
            return;
        }
        this._selectedLevel = level;
        this.gameContainer.children.forEach(function (level) {
            level.active = false;
        });
        if (level % 10 == 0) {
            this._temp = this._selectedLevel;
            this.nextIntroduce();
            return;
        }
        this.initGame(level);
        this._ui.showUIIntroduce(false);
        this.home.active = false;
    };
    GameManager.prototype.setLevel = function (start, current) {
        var startLevel = this.level.getChildByName("Start").getChildByName("txtLevel");
        startLevel.getComponent(cc.Label).string = start.toString();
        var currentLevel = this.level.getChildByName("Current").getChildByName("txtLevel");
        currentLevel.getComponent(cc.Label).string = current.toString();
    };
    GameManager.prototype.playSound = function (id, loop) {
        var _this = this;
        Data_1.default.getData(Data_1.default.LOCAL_KEY, function (err, data) {
            var _data = data;
            if (_data.isSound && id != 0) {
                cc.audioEngine.play(_this.sounds[id], loop, 1);
            }
            if (_data.isMusic && id == 0) {
                cc.audioEngine.playMusic(_this.sounds[id], loop);
            }
        });
    };
    GameManager.prototype.playStageBegin = function () {
    };
    GameManager.prototype.addMoney = function (money, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        var direction = money < 0 ? -1 : 1;
        if (money == 0) {
            return;
        }
        else {
            Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
                _this._data = data;
                _this._data.money += money;
                Data_1.default.saveData(_this._data, Data_1.default.FACEBOOK_KEY, cb);
                tween(_this._txtMoney.node).repeat(money * direction / 3, tween().call(function () {
                    _this._txtMoney.string = parseInt(_this._txtMoney.string) + 3 * direction;
                })
                    .delay(0.03))
                    .call(function () {
                    _this._txtMoney.string = _this._data.money;
                })
                    .start();
            });
        }
    };
    GameManager.prototype.payMoney = function () {
        var _this = this;
        this.playSound(SOUND.CLICK, false);
        this.addMoney(-200, function (err) {
            _this.onPlayAgain();
        });
    };
    GameManager.prototype.playClickAudio = function () {
        this.playSound(SOUND.CLICK, false);
    };
    //Sau khi xem xong video sẽ được x4 tiền (50 ban đầu + thêm 150)
    GameManager.prototype.showVideoX4 = function (event) {
        if (!this._clickX4)
            return;
        this._clickX4 = false;
        this.playSound(SOUND.CLICK, false);
        GameManager_1.logEvent("x4RewardedVideo");
        this.addMoney(150);
        this._ui.setMoney(150);
        EffectManager_1.default.effectHideButton(event.target, 0.7);
    };
    //Sau khi xem quảng cáo sẽ cho chơi lại stage vừa fail
    GameManager.prototype.showVideo = function (event) {
        this.playSound(SOUND.CLICK, false);
        this._countDown.stopCountDown();
        GameManager_1.logEvent("RevivedRewaredVideo");
        this.onPlayAgain();
    };
    GameManager.prototype.onPlayAgain = function () {
        this._ui.showUIEndGame(false);
        this._ui.showUIContinue(false);
        this._countDown.stopCountDown();
        this._levelCurrent.script.initStage();
    };
    GameManager.prototype.onTapToStart = function () {
        var _this = this;
        this.playSound(SOUND.CLICK, false);
        this._ui.showGuide(false);
        if (this._data.unlockedLevel == TOTAL_LEVEL) {
            this.showListLevel();
            return;
        }
        if (this._failLevelLoad) {
            return;
        }
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            _this._temp = data.unlockedLevel;
            _this.nextIntroduce();
        });
    };
    GameManager.prototype.onClickSetting = function () {
        this.playSound(SOUND.CLICK, false);
        var setting = cc.find("Canvas/Setting");
        if (setting) {
            setting.active = true;
        }
        else {
            setting = cc.instantiate(this.setting);
            cc.find("Canvas").addChild(setting);
        }
        this._ui.showGuide(false);
    };
    GameManager.prototype.showShop = function (show) {
        return;
    };
    GameManager.prototype.onClickReload = function (e) {
    };
    GameManager.prototype.onShare = function (e) {
        FBInstantManager_1.default.getInstance().shareGame();
    };
    GameManager.prototype.onInvite = function (e) {
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            FBInstantManager_1.default.getInstance().invitePlay({
                level: data.unlockedLevel || 1,
                playerId: '',
            });
        });
    };
    GameManager.prototype.showGuide = function (bool) {
        if (this._data.unlockedLevel != 0) {
            return;
        }
        if (this.firstPlay) {
            if (bool) {
                var guide = cc.find("Canvas/Guide");
                if (guide) {
                    guide.active = true;
                }
                else {
                    guide = cc.instantiate(this.guide);
                    guide.zIndex = cc.macro.MAX_ZINDEX;
                    cc.find("Canvas").addChild(guide);
                }
            }
            else {
                var guide = cc.find("Canvas/Guide");
                if (guide) {
                    guide.active = false;
                    this.firstPlay = false;
                }
            }
        }
    };
    GameManager.prototype.showComingSoon2 = function () {
        var cs2 = cc.find("Canvas/ComingSoon2");
        if (cs2) {
            cs2.active = true;
        }
        else {
            cs2 = cc.instantiate(this.comingSoon2);
            cs2.zIndex = cc.macro.MAX_ZINDEX;
            cc.find("Canvas").addChild(cs2);
        }
    };
    var GameManager_1;
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "levels", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "shadow", void 0);
    __decorate([
        property([cc.AudioClip])
    ], GameManager.prototype, "sounds", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "success", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "fail", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "shadowUI", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "gameContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "optionContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "introducePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "home", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "listLevelPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "setting", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "noInternet", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "introduce", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "loading", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "btnSetting", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "guide", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "comingSoon2", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();