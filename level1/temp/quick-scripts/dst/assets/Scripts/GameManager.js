
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFDMUIsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUV2QixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFFdkIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBRXZCLElBQVksS0FNWDtBQU5ELFdBQVksS0FBSztJQUNiLDZCQUFFLENBQUE7SUFDRixtQ0FBSyxDQUFBO0lBQ0wsNkNBQVUsQ0FBQTtJQUNWLG1EQUFhLENBQUE7SUFDYixtREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFOVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFNaEI7QUFFRCxtQkFBbUI7QUFDbkIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBRXRCLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBSTVCO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ2lCQztRQTdoQkcsWUFBTSxHQUFnQixFQUFFLENBQUM7UUFHekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLFVBQUksR0FBWSxJQUFJLENB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LFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNVO0lBL0RiLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnaUIvQjtJQUFELGtCQUFDO0NBaGlCRCxBQWdpQkMsQ0FoaUJ3QyxFQUFFLENBQUMsU0FBUyxHQWdpQnBEO2tCQWhpQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tIFwiLi9EYXRhXCI7XG5pbXBvcnQgRWZmZWN0TWFuYWdlciBmcm9tIFwiLi9FZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQgRkJJbnN0YW50TWFuYWdlciBmcm9tIFwiLi9GQkluc3RhbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi9CdW5kbGVNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcblxuY29uc3QgVE9UQUxfTEVWRUwgPSAxOTtcblxuY29uc3QgVkVSU0lPTiA9ICcxLjMuMCdcblxuZXhwb3J0IGVudW0gU09VTkQge1xuICAgIEJHLFxuICAgIENMSUNLLFxuICAgIEZBSUxfU1RBR0UsXG4gICAgU1VDQ0VTU19TVEFHRSxcbiAgICBTVUNDRVNTX0xFVkVMLFxufVxuXG4vL0Lhuq10IHThuq90IEludHJvZHVjZVxubGV0IFNIT1dfSU5UUk8gPSB0cnVlO1xuXG5jb25zdCBsYXp5R2V0RGF0YUFzeW5jID0gW107XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGV2ZWxzOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2hhZG93OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBzb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdWNjZXNzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZhaWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2hhZG93VUk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvcHRpb25Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpbnRyb2R1Y2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob21lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGlzdExldmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGV2ZWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFpbkNhbWVyYTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNldHRpbmc6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub0ludGVybmV0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGludHJvZHVjZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbG9hZGluZzogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blNldHRpbmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBndWlkZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY29taW5nU29vbjI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBfaG9tZSA9IG51bGw7XG4gICAgX2ludHJvZHVjZTogY2MuTm9kZSA9IG51bGw7XG4gICAgX2xpc3RMZXZlbDogY2MuTm9kZSA9bnVsbDtcbiAgICBfbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBfdWkgPSBudWxsO1xuICAgIF9jb3VudERvd24gPSBudWxsO1xuICAgIF9sZXZlbEN1cnJlbnQgPSB7XG4gICAgICAgIHNjcmlwdDogbnVsbCxcbiAgICAgICAgbGV2ZWw6IDBcbiAgICB9O1xuXG4gICAgX2xldmVsQXJyYXkgPSBbXTtcbiAgICBfY3VycmVudFNjZW5lID0gbnVsbDtcbiAgICBfYmVnaW5TY2VuZSA9IG51bGw7XG4gICAgX2RhdGEgPSBudWxsO1xuICAgIF90eHRNb25leSA9IG51bGw7XG4gICAgY3VycmVudEF1ZGlvQkcgPSBudWxsO1xuICAgIF9jbGlja1g0ID0gdHJ1ZTtcbiAgICBfc2VsZWN0ZWRMZXZlbCA9IDA7XG4gICAgX2ZhaWxMZXZlbExvYWQgPSBudWxsO1xuICAgIF9idW5kbGVJbnN0YW5jZSA9IG51bGw7XG4gICAgX3RlbXA6IG51bWJlciA9IDA7XG4gICAgZmlyc3RQbGF5ID0gdHJ1ZTtcblxuICAgIC8vR2FtZU1hbmFnZXIgxJHhu4MgcXXhuqNuIGzDvSB2aeG7h2MgdOG6oW8gdsOgIGNodXnhu4NuIGPDoWMgbGV2ZWxcbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlID0gQnVuZGxlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnQVBQIFZFUlNJT046ICcsIFZFUlNJT04pXG4gICAgICAgIHRoaXMudWkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdWkgPSB0aGlzLnVpLmdldENvbXBvbmVudChcIlVJQ29udHJvbGxlclwiKTtcbiAgICAgICAgdGhpcy5zaGFkb3dVSS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5zaG93SG9tZSgpO1xuICAgICAgICB0aGlzLnNob3dTaG9wKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fdHh0TW9uZXkgPSB0aGlzLl91aS5tb25leVRvcC5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLl9jb3VudERvd24gPSB0aGlzLl91aS5jb3VudERvd24uZ2V0Q29tcG9uZW50KFwiQ291bnREb3duNXNcIik7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YS51bmxvY2tlZExldmVsID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90eHRNb25leS5zdHJpbmcgPSB0aGlzLl9kYXRhLm1vbmV5O1xuICAgICAgICAgICAgdGhpcy5fdGVtcCA9IHRoaXMuX2RhdGEudW5sb2NrZWRMZXZlbDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhLnVubG9ja2VkTGV2ZWwgPCBUT1RBTF9MRVZFTCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gXCJMZXZlbFwiICsgKHRoaXMuX2RhdGEudW5sb2NrZWRMZXZlbCArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlLmdldFByZWZhYkJ5TmFtZShwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGF6eUdldERhdGFBc3luYy5mb3JFYWNoKChsYXp5RnVuYykgPT4ge1xuICAgICAgICAgICAgICAgIGxhenlGdW5jKHRoaXMuX2RhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ob21lID0gdGhpcy5ob21lLmdldENvbXBvbmVudChcIkhvbWVDb250cm9sbGVyXCIpO1xuICAgICAgICBpZiAodGhpcy5faG9tZSlcbiAgICAgICAgICAgIHRoaXMuX2hvbWUudXBkYXRlQ2FsZW5kYXIoKTtcbiAgICAgICAgdGhpcy5faW50cm9kdWNlID0gY2MuZmluZChcIkNhbnZhcy9JbnRyb2R1Y2VcIik7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAxMDA7XG4gICAgICAgIHRoaXMuaG9tZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYIC0gOTk7XG4gICAgICAgIHRoaXMuZ2V0RGF0YUFzeW5jKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sZXZlbEN1cnJlbnQubGV2ZWwgPSBkYXRhLnVubG9ja2VkTGV2ZWw7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZExldmVsID0gZGF0YS51bmxvY2tlZExldmVsO1xuICAgICAgICAgICAgaWYgKCh0aGlzLl9kYXRhLnVubG9ja2VkTGV2ZWwgPT0gMCkgJiYgdGhpcy5maXJzdFBsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91aS5zaG93R3VpZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheUF1ZGlvQkcoKTtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubG9hZGluZyk7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIHRoaXMuX2xvYWRpbmcuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZCh0aGlzLl9sb2FkaW5nKTtcbiAgICB9XG5cbiAgICBnZXREYXRhQXN5bmMoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RhdGEpIHJldHVybiBjYih0aGlzLl9kYXRhKVxuICAgICAgICBsYXp5R2V0RGF0YUFzeW5jLnB1c2goY2IpXG4gICAgfVxuXG4gICAgcGxheUF1ZGlvQkcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkJHLCB0cnVlKTtcbiAgICB9XG4gICAgXG4gICAgc3RvcEF1ZGlvQkcoKTogdm9pZCB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgIH1cblxuICAgIHNob3dIb21lKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ob21lKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMb2FkaW5nKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZy5hY3RpdmUgPSBzaG93O1xuICAgIH1cblxuICAgIHNob3dJbnRyb2R1Y2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRyb2R1Y2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5faW50cm9kdWNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9pbnRyb2R1Y2UuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dVSUludHJvZHVjZShmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMaXN0TGV2ZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLl9saXN0TGV2ZWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RMZXZlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbGlzdExldmVsID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0TGV2ZWxQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5fbGlzdExldmVsLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAxO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZCh0aGlzLl9saXN0TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VpLnNob3dHdWlkZShmYWxzZSk7XG4gICAgfVxuXG4gICAgbmV4dEludHJvZHVjZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob21lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlJbnRyb2R1Y2UoZmFsc2UpO1xuICAgICAgICAvL1Thu6sgbGV2ZWwgMiB0cuG7nyDEkWkga2hpIGLhuqVtIHbDoG8gZ2FtZSBz4bq9IGtow7RuZyB4deG6pXQgaGnhu4duIHBo4bqnbiBMdXBpbiBi4buLIGLhuq90IG7hu69hXG4gICAgICAgIC8vIDAgbMOgIGluZGV4IHTGsMahbmcgxJHGsMahbmcgbGV2ZWwgMVxuICAgICAgICBpZiAodGhpcy5fdGVtcCAhPSAwKVxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRMZXZlbCA9IHRoaXMuX3RlbXA7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZExldmVsICUgMTAgIT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVNIT1dfSU5UUk8pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2ludHJvZHVjZSkge1xuICAgICAgICAgICAgdGhpcy5faW50cm9kdWNlLmdldENvbXBvbmVudChcIkludHJvZHVjZVwiKS5zZXRJbnRybyh0aGlzLl9zZWxlY3RlZExldmVsKTtcbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dVSUVuZEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zaG93SW50cm9kdWNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iZWdpblNjZW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Ib21lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4gPT4ge1xuICAgICAgICAgICAgY2hpbGRyZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlFbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fdWkuc2hvd1VJSW50cm9kdWNlKHRydWUpO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlDb250aW51ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgb25OZXh0TGV2ZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xldmVsQ3VycmVudC5sZXZlbCA+PSBUT1RBTF9MRVZFTCkge1xuICAgICAgICAgICAgdGhpcy5idG5TZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fdWkuc2hvd1VJRW5kR2FtZShmYWxzZSlcbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dDb21pbmdTb29uKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fdGVtcCA9IHRoaXMuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgbGV0IG5hbWUgPSBcIkxldmVsXCIgKyAodGhpcy5fdGVtcCArIDEpO1xuICAgICAgICBpZiAodGhpcy5fdGVtcCAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubmV4dEludHJvZHVjZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlLmdldFByZWZhYkJ5TmFtZShuYW1lLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHByZWZhYikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFNjZW5lLnBhcmVudCAhPSB0aGlzLmdhbWVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHByZWZhYikpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VpLnNob3dVSUVuZEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5fdGVtcCArIDE7XG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLl90ZW1wICsgMjtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkN1cnJlbnQgXCIgKyBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIk5leHQgXCIgKyBuZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExldmVsKGN1cnJlbnQsIG5leHQpO1xuICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmxvZ05leHRMZXZlbChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgfVxuICAgIHN0YXRpYyBsb2dGYWlsZWQobGV2ZWw6IG51bWJlciwgc3RhZ2U6IG51bWJlciwgb3B0aW9uOiBudW1iZXIpIHtcbiAgICB9XG4gICAgc3RhdGljIGxvZ1Bhc3NlZChsZXZlbDogbnVtYmVyLCBzdGFnZTogbnVtYmVyLCBvcHRpb246IG51bWJlcikge1xuICAgIH1cbiAgICBzdGF0aWMgbG9nTGV2ZWwobGV2ZWw6IG51bWJlcikge1xuXG4gICAgfVxuICAgIHN0YXRpYyBsb2dOZXh0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgIH1cblxuICAgIGluaXRHYW1lKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgR2FtZU1hbmFnZXIubG9nTGV2ZWwobGV2ZWwpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2FtZUNvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT0gKFwiTGV2ZWxcIiArIChsZXZlbCArIDEpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMF0ubmFtZS5pbmNsdWRlcyhcIkxldmVsXCIpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRyZW4gb2Ygbm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgbGV0IG5hbWUgPSBcIkxldmVsXCIgKyAobGV2ZWwgKyAxKTtcbiAgICAgICAgdGhpcy5fYnVuZGxlSW5zdGFuY2UuZ2V0UHJlZmFiQnlOYW1lKG5hbWUsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGxldmVsIGVycicsIGVycilcblxuICAgICAgICAgICAgdGhpcy5vbkhvbWUoKVxuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3Iub25saW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdWkuc2hvd0FsZXJ0KCdOTyBJTlRFUk5FVCBDT05ORUNUSU9OJylcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dDb21pbmdTb29uKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFkZExldmVsKGxldmVsOiBudW1iZXIsIGNiKTogdm9pZCB7XG4gICAgLy8gICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgLy8gICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlLmxvYWRQcmVmYWJCeU5hbWUoXCJMZXZlbFwiICsgKGxldmVsICsgMSkgKyBcIi9cIiArIFwiTGV2ZWxcIiArIChsZXZlbCArIDEpLCBwcmVmYWIgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgLy8gICAgICAgICBjYihwcmVmYWIpO1xuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICBzdGFydEdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5pbml0R2FtZSh0aGlzLl9zZWxlY3RlZExldmVsKTtcbiAgICAgICAgLy8gdGhpcy5pbml0R2FtZSgxNCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS51bmxvY2tlZExldmVsID09IFRPVEFMX0xFVkVMICYmIGxldmVsID09IFRPVEFMX0xFVkVMKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb21pbmdTb29uMigpO1xuICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3RlZExldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGxldmVsID0+IHtcbiAgICAgICAgICAgIGxldmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICBpZiAobGV2ZWwgJSAxMCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl90ZW1wID0gdGhpcy5fc2VsZWN0ZWRMZXZlbDtcbiAgICAgICAgICAgIHRoaXMubmV4dEludHJvZHVjZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdEdhbWUobGV2ZWwpO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlJbnRyb2R1Y2UoZmFsc2UpO1xuICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHNldExldmVsKHN0YXJ0OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgc3RhcnRMZXZlbCA9IHRoaXMubGV2ZWwuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFydFwiKS5nZXRDaGlsZEJ5TmFtZShcInR4dExldmVsXCIpO1xuICAgICAgICBzdGFydExldmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnQudG9TdHJpbmcoKTtcblxuICAgICAgICB2YXIgY3VycmVudExldmVsID0gdGhpcy5sZXZlbC5nZXRDaGlsZEJ5TmFtZShcIkN1cnJlbnRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRMZXZlbFwiKTtcbiAgICAgICAgY3VycmVudExldmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY3VycmVudC50b1N0cmluZygpO1xuICAgIH1cbiAgICBcbiAgICBwbGF5U291bmQoaWQ6IG51bWJlciwgbG9vcDogYm9vbGVhbik6dm9pZCB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkxPQ0FMX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IF9kYXRhID0gZGF0YVxuICAgICAgICAgICAgaWYgKF9kYXRhLmlzU291bmQgJiYgaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZHNbaWRdLGxvb3AsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX2RhdGEuaXNNdXNpYyAmJiBpZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRzW2lkXSxsb29wKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGxheVN0YWdlQmVnaW4oKTogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFkZE1vbmV5KG1vbmV5OiBudW1iZXIsIGNiOiBGdW5jdGlvbiA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gbW9uZXkgPCAwID8gLTEgOiAxXG5cbiAgICAgICAgaWYgKG1vbmV5ID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEubW9uZXkgKz0gbW9uZXk7XG4gICAgICAgICAgICAgICAgRGF0YS5zYXZlRGF0YSh0aGlzLl9kYXRhLCBEYXRhLkZBQ0VCT09LX0tFWSwgY2IpO1xuXG4gICAgICAgICAgICAgICAgdHdlZW4odGhpcy5fdHh0TW9uZXkubm9kZSkucmVwZWF0KG1vbmV5ICogZGlyZWN0aW9uIC8gMyxcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3R4dE1vbmV5LnN0cmluZyA9IHBhcnNlSW50KHRoaXMuX3R4dE1vbmV5LnN0cmluZykgKyAzICogZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4wMylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90eHRNb25leS5zdHJpbmcgPSB0aGlzLl9kYXRhLm1vbmV5O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF5TW9uZXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkTW9uZXkoLTIwMCwgKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblBsYXlBZ2FpbigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBsYXlDbGlja0F1ZGlvKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICAvL1NhdSBraGkgeGVtIHhvbmcgdmlkZW8gc+G6vSDEkcaw4bujYyB4NCB0aeG7gW4gKDUwIGJhbiDEkeG6p3UgKyB0aMOqbSAxNTApXG4gICAgc2hvd1ZpZGVvWDQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fY2xpY2tYNClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fY2xpY2tYNCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuXG4gICAgICAgIEdhbWVNYW5hZ2VyLmxvZ0V2ZW50KFwieDRSZXdhcmRlZFZpZGVvXCIpXG5cbiAgICAgICAgdGhpcy5hZGRNb25leSgxNTApO1xuICAgICAgICB0aGlzLl91aS5zZXRNb25leSgxNTApO1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdEhpZGVCdXR0b24oZXZlbnQudGFyZ2V0LCAwLjcpO1xuICAgIH1cbiAgICAvL1NhdSBraGkgeGVtIHF14bqjbmcgY8OhbyBz4bq9IGNobyBjaMahaSBs4bqhaSBzdGFnZSB24burYSBmYWlsXG4gICAgc2hvd1ZpZGVvKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuICAgICAgICB0aGlzLl9jb3VudERvd24uc3RvcENvdW50RG93bigpO1xuICAgICAgICBcbiAgICAgICAgR2FtZU1hbmFnZXIubG9nRXZlbnQoXCJSZXZpdmVkUmV3YXJlZFZpZGVvXCIpXG4gICAgICAgIHRoaXMub25QbGF5QWdhaW4oKTtcbiAgICB9XG5cbiAgICBvblBsYXlBZ2FpbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdWkuc2hvd1VJRW5kR2FtZShmYWxzZSk7XG4gICAgICAgIHRoaXMuX3VpLnNob3dVSUNvbnRpbnVlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fY291bnREb3duLnN0b3BDb3VudERvd24oKTtcbiAgICAgICAgdGhpcy5fbGV2ZWxDdXJyZW50LnNjcmlwdC5pbml0U3RhZ2UoKTtcbiAgICB9XG5cbiAgICBvblRhcFRvU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3VpLnNob3dHdWlkZShmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLl9kYXRhLnVubG9ja2VkTGV2ZWwgPT0gVE9UQUxfTEVWRUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpc3RMZXZlbCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9mYWlsTGV2ZWxMb2FkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RlbXAgPSBkYXRhLnVubG9ja2VkTGV2ZWxcbiAgICAgICAgICAgIHRoaXMubmV4dEludHJvZHVjZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrU2V0dGluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgbGV0IHNldHRpbmcgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIik7XG4gICAgICAgIGlmIChzZXR0aW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXR0aW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXR0aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZXR0aW5nKTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoc2V0dGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdWkuc2hvd0d1aWRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBzaG93U2hvcChzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG9uQ2xpY2tSZWxvYWQoZSkge1xuICAgIH1cblxuICAgIG9uU2hhcmUoZSkge1xuICAgICAgICBGQkluc3RhbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hhcmVHYW1lKClcbiAgICB9XG5cbiAgICBvbkludml0ZShlKSB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgRkJJbnN0YW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmludml0ZVBsYXkoe1xuICAgICAgICAgICAgICAgIGxldmVsOiBkYXRhLnVubG9ja2VkTGV2ZWwgfHwgMSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJJZDogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93R3VpZGUoYm9vbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS51bmxvY2tlZExldmVsICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RQbGF5KSB7XG4gICAgICAgICAgICBpZiAoYm9vbCkge1xuICAgICAgICAgICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoXCJDYW52YXMvR3VpZGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGd1aWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBndWlkZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3VpZGUpO1xuICAgICAgICAgICAgICAgICAgICBndWlkZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKGd1aWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKFwiQ2FudmFzL0d1aWRlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChndWlkZSkge1xuICAgICAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29taW5nU29vbjIoKTogdm9pZCB7XG4gICAgICAgIGxldCBjczIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbWluZ1Nvb24yXCIpO1xuICAgICAgICBpZiAoY3MyKSB7XG4gICAgICAgICAgICBjczIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNzMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29taW5nU29vbjIpO1xuICAgICAgICAgICAgY3MyLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKGNzMik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=