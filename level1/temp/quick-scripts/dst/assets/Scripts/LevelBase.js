
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LevelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5aee2Hmyp1LC4bNZhdX+QQs', 'LevelBase');
// Scripts/LevelBase.ts

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
exports.TOTAL_LEVEL = void 0;
var EffectManager_1 = require("./EffectManager");
var EventManager_1 = require("./EventManager");
var GameManager_1 = require("./GameManager");
var GameManager_2 = require("./GameManager");
var Data_1 = require("./Data");
var BundleManager_1 = require("./BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var optionContainer = null;
var optionController = null;
var ui = null;
var tween = cc.tween;
exports.TOTAL_LEVEL = 19;
var LevelBase = /** @class */ (function (_super) {
    __extends(LevelBase, _super);
    function LevelBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Set level hiện tại cho màn chơi [0, 1,...,Max_level - 1]
        _this.levelCurrent = 0;
        //Số stage trong 1 level
        //Dùng để hiển thị số gạch ngang xuất hiện giữa 2 nhãn level [0, 1, 2,....]
        _this.numberStage = 0;
        //Dùng để hiển thị màu xanh các stage đã qua
        _this.stageCurrent = 0;
        //Node này sẽ được active = true khi 
        _this.sceneBegin = null;
        _this.sceneOption0 = [];
        _this.sceneOption1 = [];
        _this.sceneOption2 = [];
        _this.background = null;
        _this.money = null;
        _this.line = null;
        _this.lupin = null;
        _this.otherSpine = [];
        _this.otherSprite = [];
        _this.iconOption = [];
        _this.next = null;
        _this.fishSwim = null;
        _this.sounds = [];
        _this.selected = 0;
        _this.currentId = 0;
        //clickOption de ngan goi ham nhieu lan khi nguoi choi click lien tuc
        _this.clickOption = true;
        _this.optionScene = [[], [], []];
        _this.arrScene = [];
        _this._gameManager = null;
        _this.fail = null;
        _this.success = null;
        _this.shadow = null;
        _this.currentLine = null;
        _this.isTrue = true;
        _this._money = 50;
        _this._fishSwim = null;
        _this._line = new cc.NodePool();
        _this.camera2d = [];
        return _this;
    }
    ;
    LevelBase.prototype.onLoad = function () {
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        optionContainer = this._gameManager.optionContainer;
        optionController = optionContainer.getComponent("OptionController");
        this.fail = this._gameManager.fail;
        this.success = this._gameManager.success;
        this.shadow = this._gameManager.shadow;
        ui = this._gameManager._ui;
        for (var _i = 0, _a = this.camera2d; _i < _a.length; _i++) {
            var camera = _a[_i];
            camera.active = false;
        }
        if (this.fishSwim && !this._fishSwim) {
            this._fishSwim = cc.instantiate(this.fishSwim);
            this._fishSwim.active = false;
            this.node.addChild(this._fishSwim);
        }
    };
    LevelBase.prototype.onEnable = function () {
        console.log(("%c" + this.node.name), "color:blue");
        this.initOption();
        this._gameManager._levelCurrent.script = this;
        cc.log(this._gameManager._levelCurrent);
        this.node.getChildByName("Background").zIndex = cc.macro.MIN_ZINDEX;
        this.initArrayScene();
        //Khi scene ket thuc animation thi se ban dispatch
        this.addEventCustom();
        this.clickOption = true;
        this.lupin.setSkin('Lupin');
        this.initStage();
        this.showOptionContainer(false);
        this._fishSwim && (this._fishSwim.active = true);
    };
    LevelBase.prototype.onDisable = function () {
        this.showOptionContainer(false);
        this.removeEventCustom();
        this.resetUIResult();
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.name.includes("Option")) {
                node.active = false;
            }
        }
        this._fishSwim && (this._fishSwim.active = false);
        this._gameManager._home.updateCalendar();
    };
    LevelBase.prototype.start = function () {
        if (this.levelCurrent + 1 < exports.TOTAL_LEVEL) {
            var next = Number(this._gameManager._levelCurrent.level + 2);
            var path = "Level" + next;
            BundleManager_1.default.getInstance().getPrefabByName(path, null);
        }
    };
    LevelBase.prototype.addEventCustom = function () {
        this.node.on("request_next_scene", this.nextScene, this);
        this.node.on("show_continue", this.onContinue, this);
        this.node.on("next_stage", this.nextStage, this);
        this.node.on("back_to_stage_begin", this.playStageBegin, this);
        this.node.on("next_level", this.endGame, this);
    };
    LevelBase.prototype.removeEventCustom = function () {
        this.node.off("request_next_scene", this.nextScene, this);
        this.node.off("show_continue", this.onContinue, this);
        this.node.off("back_to_stage_begin", this.playStageBegin, this);
        this.node.off("next_stage", this.nextStage, this);
        this.node.off("next_level", this.endGame, this);
    };
    LevelBase.prototype.checkNextSceneExits = function (index, option) {
        switch (option) {
            case 0:
                return this.node.getChildByName("Option1_" + (index + 1));
            case 1:
                return this.node.getChildByName("Option2_" + (index + 1));
            case 2:
                return this.node.getChildByName("Option3_" + (index + 1));
            default:
                cc.error("Khong co scene");
                break;
        }
    };
    LevelBase.prototype.getInstantiate = function (index, option) {
        switch (option) {
            case 0:
                return this.optionScene[0][index];
            case 1:
                return this.optionScene[1][index];
            case 2:
                return this.optionScene[2][index];
            default:
                cc.error("Khong co prefab");
                return null;
        }
    };
    LevelBase.prototype.selectedButton = function (node) {
        node.getChildByName("selected").active = true;
    };
    LevelBase.prototype.resetUIResult = function () {
        this.shadow.opacity = 0;
        this.fail.opacity = 0;
        this.fail.scale = 10;
        this.success.opacity = 0;
        this.success.scale = 10;
    };
    LevelBase.prototype.endGame = function (event) {
        var _this = this;
        if (this._gameManager._levelCurrent.level < exports.TOTAL_LEVEL)
            ++this._gameManager._levelCurrent.level;
        //Mở khóa level sau
        if (this._gameManager._levelCurrent.level > this._gameManager._data.unlockedLevel) {
            this._gameManager._data.unlockedLevel = this._gameManager._levelCurrent.level;
            Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
                data.unlockedLevel = _this._gameManager._levelCurrent.level;
                Data_1.default.saveData(data, Data_1.default.FACEBOOK_KEY);
            });
        }
        this.resetUIResult();
        this.showEndGame(event);
    };
    LevelBase.prototype.nextScene = function (event) {
        var _this = this;
        this._gameManager._currentScene.active = false;
        var newScene = this.checkNextSceneExits(this.currentId, this.selected);
        if (newScene) {
            newScene.active = true;
            this._gameManager._currentScene = newScene;
            ++this.currentId;
            return;
        }
        newScene = this.getInstantiate(this.currentId, this.selected);
        if (newScene) {
            newScene.zIndex = -1;
            this._gameManager._currentScene = newScene;
            this.arrScene.push(newScene);
            this.scheduleOnce(function () {
                _this.node.addChild(newScene);
            }, 0.2);
        }
        ++this.currentId;
    };
    LevelBase.prototype.nextStage = function (sceneName) {
        if (this.next) {
            for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
                var children = _a[_i];
                children.active = false;
            }
            var scene = this.node.parent.getChildByName(this.next.name);
            if (scene) {
                scene.active = true;
            }
            else {
                scene = cc.instantiate(this.next);
                this.node.parent.addChild(scene);
            }
        }
    };
    LevelBase.prototype.initStage = function () {
        cc.audioEngine.stopAllEffects();
        this._gameManager.btnSetting.active = true;
        this.currentId = 0;
        this.clickOption = true;
        this.camera2d[0].position = cc.v3(0, 0);
        this.camera2d[0].getComponent(cc.Camera).zoomRatio = 1;
        this.background.zIndex = cc.macro.MIN_ZINDEX;
        this._gameManager.mainCamera.active = false;
        for (var _i = 0, _a = this.camera2d; _i < _a.length; _i++) {
            var camera = _a[_i];
            camera.active = true;
        }
        this.lupin.timeScale = 1;
        for (var _b = 0, _c = this.otherSpine; _b < _c.length; _b++) {
            var spine = _c[_b];
            spine.timeScale = 1;
        }
        this.background.position = cc.v3(0, 0);
        this._gameManager.optionContainer.getComponent("OptionController").resetOption();
        this._gameManager._currentScene = this.sceneBegin;
        optionController.setImageOption(this.iconOption);
        ui.showUIEndGame(false);
        this.resetUIResult();
        EffectManager_1.default.showUI(true);
        this.removeLineStage();
        this.createLineStage(this.numberStage);
        this.resultLineStage();
        //Vì index bắt đầu từ 0 nên phải +1, +2 để ra level hiển thị
        this.setLevel(this.levelCurrent + 1, this.levelCurrent + 2);
        if ((this.levelCurrent + 1) % 5 == 0 && (this.levelCurrent) > 5) {
            this._gameManager.btnSetting.x = -515;
            this._gameManager.level.x = 50;
        }
        else {
            this._gameManager.btnSetting.x = -500;
            this._gameManager.level.x = 0;
        }
        this.showOptionContainer(false);
    };
    LevelBase.prototype.hideAllScene = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var children = _a[_i];
            if (children.name != "Background")
                children.active = false;
        }
    };
    LevelBase.prototype.showEndGame = function (event) {
        ui.showUIIntroduce(false);
        ui.showUIEndGame(true);
    };
    LevelBase.prototype.selectOption = function (event) {
        this._gameManager.playSound(GameManager_2.SOUND.CLICK, false);
        this._gameManager.showGuide(false);
        if (!this.clickOption) {
            cc.error("Khong duoc click lien tuc hoac chon dap an khac!!!");
            return;
        }
        this.clickOption = false;
        switch (event.target.name) {
            case "option1":
                this.selected = 0;
                optionContainer.getChildByName("option1").getChildByName("selected").active = true;
                this.runOption1();
                break;
            case "option2":
                this.selected = 1;
                optionContainer.getChildByName("option2").getChildByName("selected").active = true;
                this.runOption2();
                break;
            case "option3":
                this.selected = 2;
                optionContainer.getChildByName("option3").getChildByName("selected").active = true;
                this.runOption3();
                break;
            default:
                cc.error("Khong co case phu hop!");
                break;
        }
        this.selectedButton(event.target);
    };
    LevelBase.prototype.runOption1 = function () {
    };
    LevelBase.prototype.runOption2 = function () {
    };
    LevelBase.prototype.runOption3 = function () {
    };
    LevelBase.prototype.setLupin = function (position, emotion, action) {
        if (emotion) {
            this.lupin.setAnimation(0, emotion, true);
        }
        if (action) {
            this.lupin.setAnimation(1, action, true);
        }
        this.lupin.node.position = cc.v3(position);
    };
    LevelBase.prototype.setOtherSpine = function (other, position, emotion, action) {
        if (emotion) {
            other.setAnimation(0, emotion, true);
        }
        if (action) {
            other.setAnimation(1, action, true);
        }
        if (position) {
            other.node.position = cc.v3(position);
        }
    };
    LevelBase.prototype.setOtherSprite = function (other, position) {
        other.node.position = cc.v3(position);
    };
    //Khởi tạo các prefab -> node rồi push vào mảng để sử dụng
    LevelBase.prototype.initArrayScene = function () {
        var sceneOptions = [this.sceneOption0, this.sceneOption1, this.sceneOption2];
        for (var j = 0; j < 3; j++) {
            var tempArr = [];
            if (this.optionScene[j].length == 0) {
                for (var i = 0; i < sceneOptions[j].length; ++i) {
                    tempArr.push(cc.instantiate(sceneOptions[j][i]));
                }
                this.optionScene[j] = tempArr;
            }
        }
    };
    //Khởi tạo event cho các nút
    LevelBase.prototype.initOption = function () {
        for (var i = 0; i < 3; ++i) {
            optionController.setOption(i, this.node, this.node.name, "selectOption");
        }
    };
    LevelBase.prototype.showOptionContainer = function (isShow) {
        if (isShow) {
            EffectManager_1.default.effectScaleOption(optionContainer, 0.7);
        }
        optionContainer.active = isShow;
    };
    LevelBase.prototype.showFail = function (option) {
        var _this = this;
        GameManager_1.default.logFailed(this.levelCurrent, this.stageCurrent, option);
        // GameManager.logEvent(`Failed L${this.levelCurrent + 1} S${this.stageCurrent + 1}-${option + 1}`)
        cc.audioEngine.stopAllEffects();
        tween(this.node).call(function () {
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
            EffectManager_1.default.showX(option, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.FAIL_STAGE, false);
            }, 0.15);
            _this._gameManager.btnSetting.active = false;
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
            EffectManager_1.default.effectFail();
            EffectManager_1.default.showUI(false);
        })
            .delay(2)
            .call(function () {
            EffectManager_1.default.hideScene(EventManager_1.default.sendRequestReset, _this.node);
        }).start();
    };
    LevelBase.prototype.showSuccess = function (option) {
        var _this = this;
        GameManager_1.default.logPassed(this.levelCurrent, this.stageCurrent, option);
        // GameManager.logEvent(`Passed L${this.levelCurrent + 1}`)
        cc.audioEngine.stopAllEffects();
        tween(this.node).call(function () {
            EffectManager_1.default.showTick(option, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.SUCCESS_LEVEL, false);
            }, 0.2);
            _this._gameManager.btnSetting.active = false;
            EffectManager_1.default.effectSuccess();
            EffectManager_1.default.showUI(false);
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestResult(_this.node);
        })
            .start();
    };
    LevelBase.prototype.setCamera = function (camera, positon, zoomRatio) {
        camera.active = true;
        camera.position = cc.v3(positon);
        camera.getComponent(cc.Camera).zoomRatio = zoomRatio;
    };
    LevelBase.prototype.stopAction = function () {
        for (var _i = 0, _a = this.otherSpine; _i < _a.length; _i++) {
            var spine = _a[_i];
            spine.timeScale = 0;
        }
    };
    LevelBase.prototype.setTimeScaleAllSpine = function (timeScale) {
        for (var _i = 0, _a = this.otherSpine; _i < _a.length; _i++) {
            var spine = _a[_i];
            spine.timeScale = timeScale;
        }
        this.lupin.timeScale = timeScale;
    };
    LevelBase.prototype.onContinue = function (event) {
        this._gameManager.mainCamera.active = true;
        this.resetUIResult();
        this._gameManager._ui.showUIContinue(true);
    };
    LevelBase.prototype.playStageBegin = function () {
        if (this.node.parent.name != "GameContainer") {
            for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
                var children = _a[_i];
                children.active = false;
            }
        }
        var beginScene = this.getBeginSceen();
        if (beginScene) {
            beginScene.active = true;
            if (this.node.parent.name == "GameContainer") {
                this.initStage();
            }
            else {
                this.background.active = true;
            }
        }
    };
    LevelBase.prototype.setBeginSceen = function (node) {
        this._gameManager._beginScene = node;
    };
    LevelBase.prototype.getBeginSceen = function () {
        return this._gameManager._beginScene;
    };
    LevelBase.prototype.setLevel = function (current, next) {
        this._gameManager.setLevel(current, next);
    };
    LevelBase.prototype.createLineStage = function (numberStage) {
        var level = cc.find("Canvas/Level");
        level.getChildByName("Start").zIndex = cc.macro.MIN_ZINDEX;
        level.getChildByName("Current").zIndex = cc.macro.MAX_ZINDEX;
        for (var i = 0; i < numberStage; ++i) {
            var line = void 0;
            if (this._line.size() > 0) {
                line = this._line.get();
            }
            else {
                line = cc.instantiate(this.line);
            }
            line.zIndex = 0 + i;
            cc.find("Canvas/Level").addChild(line);
        }
    };
    LevelBase.prototype.removeLineStage = function () {
        var line = cc.find("Canvas/Level").children;
        for (var i = 0; i < line.length; ++i) {
            var children = line[i];
            if (children.name != "Start" && children.name != "Current") {
                for (var _i = 0, _a = children.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.active = false;
                }
                this._line.put(children);
                --i;
            }
        }
        // for (let i = 0; i < line.length; ++i)
        // {
        //     if (line[i].name != "Start" && line[i].name != "Current")
        //     {
        //         cc.find("Canvas/Level").removeChild(line[i], true);
        //     }
        // }
    };
    LevelBase.prototype.resultLineStage = function () {
        var level = cc.find("Canvas/Level");
        var count = 0;
        // Lặp từ 1 đến length - 2 vì node đầu là Start và node cuối là Current
        for (var i = 1; i < level.children.length - 1; ++i) {
            if (level.children[i].name == "Line" && count < this.stageCurrent) {
                ++count;
                level.children[i].getChildByName("TrueAnswer").active = true;
            }
        }
    };
    //Lấy line để hiển thị true/false của option
    // +2 vì 1 node là Start + 
    LevelBase.prototype.getLineCurrent = function () {
        var level = cc.find("Canvas/Level");
        return level.children[this.stageCurrent + 1];
    };
    LevelBase.prototype.nextLevel = function () {
        var _this = this;
        tween(this.node).call(function () {
            EffectManager_1.default.showTick(_this.selected, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
            EffectManager_1.default.effectSuccess();
            EffectManager_1.default.showUI(false);
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestResult(_this.node);
        })
            .start();
    };
    LevelBase.prototype.showContinue = function () {
        var _this = this;
        GameManager_1.default.logFailed(this.levelCurrent, this.stageCurrent, this.selected);
        // GameManager.logEvent(`Failed L${this.levelCurrent + 1} S${this.stageCurrent + 1}-${this.selected + 1}`)
        cc.audioEngine.stopAllEffects();
        this.lupin.timeScale = 0;
        this.otherSpine.forEach(function (spine) {
            spine.timeScale = 0;
        });
        tween(this.node).call(function () {
            EffectManager_1.default.showX(_this.selected, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.FAIL_STAGE, false);
            }, 0.15);
            EffectManager_1.default.effectFail();
            EffectManager_1.default.showUI(false);
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestContinue(_this.node);
        }).start();
    };
    LevelBase.prototype.onPass = function () {
        var _this = this;
        GameManager_1.default.logPassed(this.levelCurrent, this.stageCurrent, this.selected);
        // GameManager.logEvent(`Passed L${this.levelCurrent + 1}_S${this.stageCurrent + 1}`)
        cc.audioEngine.stopAllEffects();
        tween(this.node).call(function () {
            EffectManager_1.default.showTick(_this.selected, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this._gameManager.btnSetting.active = false;
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.SUCCESS_STAGE, false);
            }, 0.2);
            EffectManager_1.default.effectSuccess();
            EffectManager_1.default.showUI(false);
            _this.lupin.timeScale = 0;
            _this.otherSpine.forEach(function (spine) {
                spine.timeScale = 0;
            });
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestNextStage(_this.node);
        })
            .start();
    };
    LevelBase.prototype.showComingSoon = function () {
        this.resetUIResult();
        this._gameManager.playSound(GameManager_2.SOUND.SUCCESS_LEVEL, false);
        EffectManager_1.default.showTick(this.selected, this.getLineCurrent());
        ++this._gameManager._levelCurrent.level;
        if (this._gameManager._levelCurrent.level > this._gameManager._data.unlockedLevel) {
            this._gameManager._data.unlockedLevel = this._gameManager._levelCurrent.level;
            Data_1.default.saveData(this._gameManager._data, Data_1.default.FACEBOOK_KEY);
            Data_1.default.saveData(this._gameManager._data, Data_1.default.LOCAL_KEY);
        }
        this._gameManager.btnSetting.active = false;
        this._gameManager._ui.showComingSoon();
    };
    LevelBase.prototype.playSound = function (soundId, loop, delay) {
        var _this = this;
        Data_1.default.getData(Data_1.default.LOCAL_KEY, function (err, data) {
            if (data.isSound) {
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.sounds[soundId], loop);
                }, delay);
            }
        });
    };
    __decorate([
        property
    ], LevelBase.prototype, "levelCurrent", void 0);
    __decorate([
        property
    ], LevelBase.prototype, "numberStage", void 0);
    __decorate([
        property
    ], LevelBase.prototype, "stageCurrent", void 0);
    __decorate([
        property(cc.Node)
    ], LevelBase.prototype, "sceneBegin", void 0);
    __decorate([
        property([cc.Prefab])
    ], LevelBase.prototype, "sceneOption0", void 0);
    __decorate([
        property([cc.Prefab])
    ], LevelBase.prototype, "sceneOption1", void 0);
    __decorate([
        property([cc.Prefab])
    ], LevelBase.prototype, "sceneOption2", void 0);
    __decorate([
        property(cc.Node)
    ], LevelBase.prototype, "background", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "money", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "line", void 0);
    __decorate([
        property(sp.Skeleton)
    ], LevelBase.prototype, "lupin", void 0);
    __decorate([
        property([sp.Skeleton])
    ], LevelBase.prototype, "otherSpine", void 0);
    __decorate([
        property([cc.Sprite])
    ], LevelBase.prototype, "otherSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], LevelBase.prototype, "iconOption", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "next", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "fishSwim", void 0);
    __decorate([
        property([cc.AudioClip])
    ], LevelBase.prototype, "sounds", void 0);
    __decorate([
        property(cc.Node)
    ], LevelBase.prototype, "camera2d", void 0);
    LevelBase = __decorate([
        ccclass
    ], LevelBase);
    return LevelBase;
}(cc.Component));
exports.default = LevelBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xldmVsQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsNkNBQW9DO0FBQ3BDLCtCQUEwQjtBQUMxQixpREFBNEM7QUFHdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNkLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFVixRQUFBLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFHOUI7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFzc0JDO1FBcHNCRywwREFBMEQ7UUFFMUQsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFFakIsd0JBQXdCO1FBQ3hCLDJFQUEyRTtRQUUzRSxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVoQiw0Q0FBNEM7UUFFNUMsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFFakIscUNBQXFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGtCQUFZLEdBQWdCLEVBQUUsQ0FBQztRQUcvQixrQkFBWSxHQUFnQixFQUFFLENBQUM7UUFHL0Isa0JBQVksR0FBZ0IsRUFBRSxDQUFDO1FBR3RDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFrQixFQUFFLENBQUM7UUFHL0IsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQXFC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RUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO21EQUNnQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzttREFDZ0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7bURBQ2dCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NENBQ0k7SUFHMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aURBQ087SUFHL0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7a0RBQ1E7SUFHOUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aURBQ087SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzZDQUNHO0lBMkI1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBbkZSLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0Fzc0I3QjtJQUFELGdCQUFDO0NBdHNCRCxBQXNzQkMsQ0F0c0JzQyxFQUFFLENBQUMsU0FBUyxHQXNzQmxEO2tCQXRzQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWZmZWN0TWFuYWdlciBmcm9tIFwiLi9FZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL0V2ZW50TWFuYWdlclwiO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG5pbXBvcnQge1NPVU5EfSBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4vQnVuZGxlTWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG52YXIgb3B0aW9uQ29udGFpbmVyID0gbnVsbDtcbnZhciBvcHRpb25Db250cm9sbGVyID0gbnVsbDtcbnZhciB1aSA9IG51bGw7XG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuO1xuXG5leHBvcnQgY29uc3QgVE9UQUxfTEVWRUwgPSAxOTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvL1NldCBsZXZlbCBoaeG7h24gdOG6oWkgY2hvIG3DoG4gY2jGoWkgWzAsIDEsLi4uLE1heF9sZXZlbCAtIDFdXG4gICAgQHByb3BlcnR5XG4gICAgbGV2ZWxDdXJyZW50ID0gMDtcblxuICAgIC8vU+G7kSBzdGFnZSB0cm9uZyAxIGxldmVsXG4gICAgLy9Ew7luZyDEkeG7gyBoaeG7g24gdGjhu4sgc+G7kSBn4bqhY2ggbmdhbmcgeHXhuqV0IGhp4buHbiBnaeG7r2EgMiBuaMOjbiBsZXZlbCBbMCwgMSwgMiwuLi4uXVxuICAgIEBwcm9wZXJ0eVxuICAgIG51bWJlclN0YWdlID0gMDtcblxuICAgIC8vRMO5bmcgxJHhu4MgaGnhu4NuIHRo4buLIG3DoHUgeGFuaCBjw6FjIHN0YWdlIMSRw6MgcXVhXG4gICAgQHByb3BlcnR5XG4gICAgc3RhZ2VDdXJyZW50ID0gMDtcblxuICAgIC8vTm9kZSBuw6B5IHPhur0gxJHGsOG7o2MgYWN0aXZlID0gdHJ1ZSBraGkgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHNjZW5lQmVnaW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxuICAgIHB1YmxpYyBzY2VuZU9wdGlvbjA6IGNjLlByZWZhYltdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gICAgcHVibGljIHNjZW5lT3B0aW9uMTogY2MuUHJlZmFiW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcbiAgICBwdWJsaWMgc2NlbmVPcHRpb24yOiBjYy5QcmVmYWJbXSA9IFtdOztcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBtb25leTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGluZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBsdXBpbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXG4gICAgb3RoZXJTcGluZTogc3AuU2tlbGV0b25bXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxuICAgIG90aGVyU3ByaXRlOiBjYy5TcHJpdGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvbk9wdGlvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBuZXh0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBmaXNoU3dpbTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBzb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgc2VsZWN0ZWQ6IG51bWJlciA9IDA7XG5cbiAgICBwcm90ZWN0ZWQgY3VycmVudElkIDogbnVtYmVyID0gMDtcbiAgICBcbiAgICAvL2NsaWNrT3B0aW9uIGRlIG5nYW4gZ29pIGhhbSBuaGlldSBsYW4ga2hpIG5ndW9pIGNob2kgY2xpY2sgbGllbiB0dWNcbiAgICBwcm90ZWN0ZWQgY2xpY2tPcHRpb24gOiBCb29sZWFuID0gdHJ1ZTtcblxuICAgIHByb3RlY3RlZCBvcHRpb25TY2VuZTogY2MuTm9kZVtdW10gPSBbW10sIFtdLCBbXV07XG5cbiAgICBwcm90ZWN0ZWQgYXJyU2NlbmU6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIF9nYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGZhaWwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdWNjZXNzID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc2hhZG93ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgY3VycmVudExpbmUgPSBudWxsO1xuICAgIHByb3RlY3RlZCBpc1RydWUgPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIF9tb25leSA9IDUwO1xuXG4gICAgcHJvdGVjdGVkIF9maXNoU3dpbSA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgX2xpbmUgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYW1lcmEyZDogY2MuTm9kZVtdID0gW107XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgb3B0aW9uQ29udGFpbmVyID0gdGhpcy5fZ2FtZU1hbmFnZXIub3B0aW9uQ29udGFpbmVyO1xuICAgICAgICBvcHRpb25Db250cm9sbGVyID0gb3B0aW9uQ29udGFpbmVyLmdldENvbXBvbmVudChcIk9wdGlvbkNvbnRyb2xsZXJcIik7XG4gICAgICAgIHRoaXMuZmFpbCA9IHRoaXMuX2dhbWVNYW5hZ2VyLmZhaWw7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuX2dhbWVNYW5hZ2VyLnN1Y2Nlc3M7XG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5fZ2FtZU1hbmFnZXIuc2hhZG93O1xuICAgICAgICB1aSA9IHRoaXMuX2dhbWVNYW5hZ2VyLl91aTtcbiAgICAgICAgZm9yIChsZXQgY2FtZXJhIG9mIHRoaXMuY2FtZXJhMmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbWVyYS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpc2hTd2ltICYmICF0aGlzLl9maXNoU3dpbSkge1xuICAgICAgICAgICAgdGhpcy5fZmlzaFN3aW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZpc2hTd2ltKVxuICAgICAgICAgICAgdGhpcy5fZmlzaFN3aW0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLl9maXNoU3dpbSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygoXCIlY1wiICsgdGhpcy5ub2RlLm5hbWUpLCBcImNvbG9yOmJsdWVcIik7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbigpO1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LnNjcmlwdCA9IHRoaXM7XG4gICAgICAgIGNjLmxvZyh0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50KTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS56SW5kZXggPSBjYy5tYWNyby5NSU5fWklOREVYO1xuICAgICAgICB0aGlzLmluaXRBcnJheVNjZW5lKCk7XG4gICAgICAgIC8vS2hpIHNjZW5lIGtldCB0aHVjIGFuaW1hdGlvbiB0aGkgc2UgYmFuIGRpc3BhdGNoXG4gICAgICAgIHRoaXMuYWRkRXZlbnRDdXN0b20oKTtcbiAgICAgICAgdGhpcy5jbGlja09wdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0U2tpbignTHVwaW4nKVxuICAgICAgICB0aGlzLmluaXRTdGFnZSgpO1xuICAgICAgICB0aGlzLnNob3dPcHRpb25Db250YWluZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2Zpc2hTd2ltICYmICh0aGlzLl9maXNoU3dpbS5hY3RpdmUgPSB0cnVlKVxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93T3B0aW9uQ29udGFpbmVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudEN1c3RvbSgpO1xuICAgICAgICB0aGlzLnJlc2V0VUlSZXN1bHQoKTtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUuaW5jbHVkZXMoXCJPcHRpb25cIikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Zpc2hTd2ltICYmICh0aGlzLl9maXNoU3dpbS5hY3RpdmUgPSBmYWxzZSlcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2hvbWUudXBkYXRlQ2FsZW5kYXIoKTtcbiAgICB9ICAgIFxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsQ3VycmVudCArIDEgPCBUT1RBTF9MRVZFTCkge1xuICAgICAgICAgICAgbGV0IG5leHQgPSBOdW1iZXIodGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbCArIDIpO1xuICAgICAgICAgICAgbGV0IHBhdGggPSBcIkxldmVsXCIgKyBuZXh0O1xuICAgICAgICAgICAgQnVuZGxlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFByZWZhYkJ5TmFtZShwYXRoLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50Q3VzdG9tKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJyZXF1ZXN0X25leHRfc2NlbmVcIiwgdGhpcy5uZXh0U2NlbmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG93X2NvbnRpbnVlXCIsIHRoaXMub25Db250aW51ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihcIm5leHRfc3RhZ2VcIiwgdGhpcy5uZXh0U3RhZ2UsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJiYWNrX3RvX3N0YWdlX2JlZ2luXCIsIHRoaXMucGxheVN0YWdlQmVnaW4sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJuZXh0X2xldmVsXCIsIHRoaXMuZW5kR2FtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRDdXN0b20oKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJyZXF1ZXN0X25leHRfc2NlbmVcIiwgdGhpcy5uZXh0U2NlbmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFwic2hvd19jb250aW51ZVwiLCB0aGlzLm9uQ29udGludWUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFwiYmFja190b19zdGFnZV9iZWdpblwiLCB0aGlzLnBsYXlTdGFnZUJlZ2luLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcIm5leHRfc3RhZ2VcIiwgdGhpcy5uZXh0U3RhZ2UsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFwibmV4dF9sZXZlbFwiLCB0aGlzLmVuZEdhbWUsIHRoaXMpO1xuICAgIH1cblxuICAgIGNoZWNrTmV4dFNjZW5lRXhpdHMoaW5kZXg6IG51bWJlciwgb3B0aW9uOiBudW1iZXIpOiBjYy5Ob2RlIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uMV9cIiArIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uMl9cIiArIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uM19cIiArIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJLaG9uZyBjbyBzY2VuZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEluc3RhbnRpYXRlKGluZGV4OiBudW1iZXIsIG9wdGlvbjogbnVtYmVyKTogY2MuTm9kZSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uU2NlbmVbMF1baW5kZXhdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvblNjZW5lWzFdW2luZGV4XTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25TY2VuZVsyXVtpbmRleF07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiS2hvbmcgY28gcHJlZmFiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRCdXR0b24obm9kZSkgOiB2b2lkIHtcbiAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXRVSVJlc3VsdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaGFkb3cub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuZmFpbC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5mYWlsLnNjYWxlID0gMTA7XG4gICAgICAgIHRoaXMuc3VjY2Vzcy5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5zdWNjZXNzLnNjYWxlID0gMTA7XG4gICAgfVxuXG4gICAgZW5kR2FtZShldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPCBUT1RBTF9MRVZFTClcbiAgICAgICAgICAgICsrdGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgLy9N4bufIGtow7NhIGxldmVsIHNhdVxuICAgICAgICBpZiAoIHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPiB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsID0gdGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEudW5sb2NrZWRMZXZlbCA9IHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWxcbiAgICAgICAgICAgICAgICBEYXRhLnNhdmVEYXRhKGRhdGEsIERhdGEuRkFDRUJPT0tfS0VZKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0VUlSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5zaG93RW5kR2FtZShldmVudCk7XG4gICAgfVxuXG4gICAgbmV4dFNjZW5lKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fY3VycmVudFNjZW5lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdmFyIG5ld1NjZW5lID0gdGhpcy5jaGVja05leHRTY2VuZUV4aXRzKHRoaXMuY3VycmVudElkLCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgaWYgKG5ld1NjZW5lKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdTY2VuZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2N1cnJlbnRTY2VuZSA9IG5ld1NjZW5lO1xuICAgICAgICAgICAgKyt0aGlzLmN1cnJlbnRJZDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1NjZW5lID0gdGhpcy5nZXRJbnN0YW50aWF0ZSh0aGlzLmN1cnJlbnRJZCwgdGhpcy5zZWxlY3RlZCk7XG5cbiAgICAgICAgaWYgKG5ld1NjZW5lKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdTY2VuZS56SW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl9jdXJyZW50U2NlbmUgPSBuZXdTY2VuZTtcbiAgICAgICAgICAgIHRoaXMuYXJyU2NlbmUucHVzaChuZXdTY2VuZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1NjZW5lKTtcbiAgICAgICAgICAgIH0sIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICArK3RoaXMuY3VycmVudElkO1xuICAgIH1cblxuICAgIG5leHRTdGFnZShzY2VuZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uZXh0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZHJlbiBvZiB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNjZW5lID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZSh0aGlzLm5leHQubmFtZSk7XG4gICAgICAgICAgICBpZiAoc2NlbmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NlbmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2VuZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubmV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzY2VuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRTdGFnZSgpOiB2b2lkIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IDA7XG4gICAgICAgIHRoaXMuY2xpY2tPcHRpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbWVyYTJkWzBdLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhMmRbMF0uZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuem9vbVJhdGlvID0gMTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnpJbmRleCA9IGNjLm1hY3JvLk1JTl9aSU5ERVg7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLm1haW5DYW1lcmEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGNhbWVyYSBvZiB0aGlzLmNhbWVyYTJkKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYW1lcmEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmx1cGluLnRpbWVTY2FsZSA9IDE7XG4gICAgICAgIGZvciAodmFyIHNwaW5lIG9mIHRoaXMub3RoZXJTcGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tncm91bmQucG9zaXRpb24gPSBjYy52MygwLCAwKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIub3B0aW9uQ29udGFpbmVyLmdldENvbXBvbmVudChcIk9wdGlvbkNvbnRyb2xsZXJcIikucmVzZXRPcHRpb24oKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2N1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVCZWdpbjtcbiAgICAgICAgb3B0aW9uQ29udHJvbGxlci5zZXRJbWFnZU9wdGlvbih0aGlzLmljb25PcHRpb24pO1xuICAgICAgICB1aS5zaG93VUlFbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZXNldFVJUmVzdWx0KCk7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1VJKHRydWUpO1xuICAgICAgICB0aGlzLnJlbW92ZUxpbmVTdGFnZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpbmVTdGFnZSh0aGlzLm51bWJlclN0YWdlKTtcbiAgICAgICAgdGhpcy5yZXN1bHRMaW5lU3RhZ2UoKTtcbiAgICAgICAgLy9Ww6wgaW5kZXggYuG6r3QgxJHhuqd1IHThu6sgMCBuw6puIHBo4bqjaSArMSwgKzIgxJHhu4MgcmEgbGV2ZWwgaGnhu4NuIHRo4buLXG4gICAgICAgIHRoaXMuc2V0TGV2ZWwodGhpcy5sZXZlbEN1cnJlbnQgKyAxLCB0aGlzLmxldmVsQ3VycmVudCArIDIpO1xuICAgICAgICBpZiAoKHRoaXMubGV2ZWxDdXJyZW50ICsgMSkgJSA1ID09IDAgJiYgKHRoaXMubGV2ZWxDdXJyZW50KSA+IDUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLmJ0blNldHRpbmcueCA9IC01MTU7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5sZXZlbC54ID0gNTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5idG5TZXR0aW5nLnggPSAtNTAwO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIubGV2ZWwueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93T3B0aW9uQ29udGFpbmVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICBoaWRlQWxsU2NlbmUoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkcmVuIG9mIHRoaXMubm9kZS5jaGlsZHJlbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLm5hbWUgIT0gXCJCYWNrZ3JvdW5kXCIpXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93RW5kR2FtZShldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgdWkuc2hvd1VJSW50cm9kdWNlKGZhbHNlKTtcbiAgICAgICAgdWkuc2hvd1VJRW5kR2FtZSh0cnVlKTtcbiAgICB9XG5cbiAgICBzZWxlY3RPcHRpb24oZXZlbnQ6IGNjLkV2ZW50KSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuc2hvd0d1aWRlKGZhbHNlKTtcbiAgICAgICAgaWYgKCF0aGlzLmNsaWNrT3B0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIktob25nIGR1b2MgY2xpY2sgbGllbiB0dWMgaG9hYyBjaG9uIGRhcCBhbiBraGFjISEhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xpY2tPcHRpb24gPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIm9wdGlvbjFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gMDtcbiAgICAgICAgICAgICAgICBvcHRpb25Db250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb24xXCIpLmdldENoaWxkQnlOYW1lKFwic2VsZWN0ZWRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bk9wdGlvbjEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvcHRpb24yXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgICAgICAgICAgICAgb3B0aW9uQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwib3B0aW9uMlwiKS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5PcHRpb24yKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uM1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAyO1xuICAgICAgICAgICAgICAgIG9wdGlvbkNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbjNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RlZFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucnVuT3B0aW9uMygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIktob25nIGNvIGNhc2UgcGh1IGhvcCFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEJ1dHRvbihldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIHJ1bk9wdGlvbjEoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMigpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBydW5PcHRpb24zKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHNldEx1cGluKHBvc2l0aW9uOiBjYy5WZWMyLCBlbW90aW9uOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChlbW90aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCBlbW90aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigxLCBhY3Rpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBzZXRPdGhlclNwaW5lKG90aGVyOiBzcC5Ta2VsZXRvbiwgcG9zaXRpb246IGNjLlZlYzIsIGVtb3Rpb246IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVtb3Rpb24pIHtcbiAgICAgICAgICAgIG90aGVyLnNldEFuaW1hdGlvbigwLCBlbW90aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBvdGhlci5zZXRBbmltYXRpb24oMSwgYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIG90aGVyLm5vZGUucG9zaXRpb24gPSBjYy52Myhwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPdGhlclNwcml0ZShvdGhlcjogY2MuU3ByaXRlLCBwb3NpdGlvbjogY2MuVmVjMik6IHZvaWQge1xuICAgICAgICBvdGhlci5ub2RlLnBvc2l0aW9uID0gY2MudjMocG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vS2jhu59pIHThuqFvIGPDoWMgcHJlZmFiIC0+IG5vZGUgcuG7k2kgcHVzaCB2w6BvIG3huqNuZyDEkeG7gyBz4butIGThu6VuZ1xuICAgIGluaXRBcnJheVNjZW5lKCk6IHZvaWQge1xuICAgICAgICB2YXIgc2NlbmVPcHRpb25zID0gW3RoaXMuc2NlbmVPcHRpb24wLCB0aGlzLnNjZW5lT3B0aW9uMSwgdGhpcy5zY2VuZU9wdGlvbjJdXG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAzOyBqKysgKXtcbiAgICAgICAgICAgIHZhciB0ZW1wQXJyID0gW107XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25TY2VuZVtqXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NlbmVPcHRpb25zW2pdLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKGNjLmluc3RhbnRpYXRlKHNjZW5lT3B0aW9uc1tqXVtpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNjZW5lW2pdID0gdGVtcEFycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vS2jhu59pIHThuqFvIGV2ZW50IGNobyBjw6FjIG7DunRcbiAgICBpbml0T3B0aW9uKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uQ29udHJvbGxlci5zZXRPcHRpb24oaSwgdGhpcy5ub2RlLCB0aGlzLm5vZGUubmFtZSwgXCJzZWxlY3RPcHRpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93T3B0aW9uQ29udGFpbmVyKGlzU2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNTaG93KVxuICAgICAgICB7XG4gICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKG9wdGlvbkNvbnRhaW5lciwgMC43KVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbkNvbnRhaW5lci5hY3RpdmUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgc2hvd0ZhaWwob3B0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgR2FtZU1hbmFnZXIubG9nRmFpbGVkKHRoaXMubGV2ZWxDdXJyZW50LCB0aGlzLnN0YWdlQ3VycmVudCwgb3B0aW9uKVxuICAgICAgICAvLyBHYW1lTWFuYWdlci5sb2dFdmVudChgRmFpbGVkIEwke3RoaXMubGV2ZWxDdXJyZW50ICsgMX0gUyR7dGhpcy5zdGFnZUN1cnJlbnQgKyAxfS0ke29wdGlvbiArIDF9YClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKVxuICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzcGluZSBvZiB0aGlzLm90aGVyU3BpbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGluZS50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dYKG9wdGlvbiwgdGhpcy5nZXRMaW5lQ3VycmVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlTb3VuZChTT1VORC5GQUlMX1NUQUdFLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnRpbWVTY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BpbmUgb2YgdGhpcy5vdGhlclNwaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RGYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VUkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuaGlkZVNjZW5lKEV2ZW50TWFuYWdlci5zZW5kUmVxdWVzdFJlc2V0LCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93U3VjY2VzcyhvcHRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBHYW1lTWFuYWdlci5sb2dQYXNzZWQodGhpcy5sZXZlbEN1cnJlbnQsIHRoaXMuc3RhZ2VDdXJyZW50LCBvcHRpb24pXG4gICAgICAgIC8vIEdhbWVNYW5hZ2VyLmxvZ0V2ZW50KGBQYXNzZWQgTCR7dGhpcy5sZXZlbEN1cnJlbnQgKyAxfWApXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKClcbiAgICAgICAgdHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1RpY2sob3B0aW9uLCB0aGlzLmdldExpbmVDdXJyZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlTb3VuZChTT1VORC5TVUNDRVNTX0xFVkVMLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VUkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BpbmUgb2YgdGhpcy5vdGhlclNwaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lLnRpbWVTY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgyKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuc2VuZFJlcXVlc3RSZXN1bHQodGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2V0Q2FtZXJhKGNhbWVyYTogY2MuTm9kZSwgcG9zaXRvbjogY2MuVmVjMiwgem9vbVJhdGlvOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY2FtZXJhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNjLnYzKHBvc2l0b24pO1xuICAgICAgICBjYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuem9vbVJhdGlvID0gem9vbVJhdGlvO1xuICAgIH1cblxuICAgIHN0b3BBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHNwaW5lIG9mIHRoaXMub3RoZXJTcGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbWVTY2FsZUFsbFNwaW5lKHRpbWVTY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHNwaW5lIG9mIHRoaXMub3RoZXJTcGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gdGltZVNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gdGltZVNjYWxlO1xuICAgIH1cblxuICAgIG9uQ29udGludWUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLm1haW5DYW1lcmEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXNldFVJUmVzdWx0KCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl91aS5zaG93VUlDb250aW51ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBwbGF5U3RhZ2VCZWdpbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQubmFtZSAhPSBcIkdhbWVDb250YWluZXJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRyZW4gb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYmVnaW5TY2VuZSA9IHRoaXMuZ2V0QmVnaW5TY2VlbigpO1xuICAgICAgICBpZiAoYmVnaW5TY2VuZSkge1xuICAgICAgICAgICAgYmVnaW5TY2VuZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQubmFtZSA9PSBcIkdhbWVDb250YWluZXJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QmVnaW5TY2Vlbihub2RlOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl9iZWdpblNjZW5lID0gbm9kZTtcbiAgICB9XG5cbiAgICBnZXRCZWdpblNjZWVuKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU1hbmFnZXIuX2JlZ2luU2NlbmU7XG4gICAgfVxuXG4gICAgc2V0TGV2ZWwoY3VycmVudDogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuc2V0TGV2ZWwoY3VycmVudCwgbmV4dCk7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUxpbmVTdGFnZShudW1iZXJTdGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBsZXZlbCA9IGNjLmZpbmQoXCJDYW52YXMvTGV2ZWxcIik7XG4gICAgICAgIGxldmVsLmdldENoaWxkQnlOYW1lKFwiU3RhcnRcIikuekluZGV4ID0gY2MubWFjcm8uTUlOX1pJTkRFWDtcbiAgICAgICAgbGV2ZWwuZ2V0Q2hpbGRCeU5hbWUoXCJDdXJyZW50XCIpLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyU3RhZ2U7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGxpbmU7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGluZS5zaXplKCkgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpbmUgPSB0aGlzLl9saW5lLmdldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZS56SW5kZXggPSAwICsgaTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTGV2ZWxcIikuYWRkQ2hpbGQobGluZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMaW5lU3RhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxldCBsaW5lID0gY2MuZmluZChcIkNhbnZhcy9MZXZlbFwiKS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBsaW5lW2ldO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLm5hbWUgIT0gXCJTdGFydFwiICYmIGNoaWxkcmVuLm5hbWUgIT0gXCJDdXJyZW50XCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbGluZS5wdXQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyArK2kpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGlmIChsaW5lW2ldLm5hbWUgIT0gXCJTdGFydFwiICYmIGxpbmVbaV0ubmFtZSAhPSBcIkN1cnJlbnRcIilcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0xldmVsXCIpLnJlbW92ZUNoaWxkKGxpbmVbaV0sIHRydWUpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmVzdWx0TGluZVN0YWdlKCk6IHZvaWQge1xuICAgICAgICBsZXQgbGV2ZWwgPSBjYy5maW5kKFwiQ2FudmFzL0xldmVsXCIpO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAvLyBM4bq3cCB04burIDEgxJHhur9uIGxlbmd0aCAtIDIgdsOsIG5vZGUgxJHhuqd1IGzDoCBTdGFydCB2w6Agbm9kZSBjdeG7kWkgbMOgIEN1cnJlbnRcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZXZlbC5jaGlsZHJlbi5sZW5ndGggLSAxOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChsZXZlbC5jaGlsZHJlbltpXS5uYW1lID09IFwiTGluZVwiICYmIGNvdW50IDwgdGhpcy5zdGFnZUN1cnJlbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgICAgICBsZXZlbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIlRydWVBbnN3ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vTOG6pXkgbGluZSDEkeG7gyBoaeG7g24gdGjhu4sgdHJ1ZS9mYWxzZSBj4bunYSBvcHRpb25cbiAgICAvLyArMiB2w6wgMSBub2RlIGzDoCBTdGFydCArIFxuICAgIGdldExpbmVDdXJyZW50KCk6IGNjLk5vZGUge1xuICAgICAgICBsZXQgbGV2ZWwgPSBjYy5maW5kKFwiQ2FudmFzL0xldmVsXCIpO1xuICAgICAgICByZXR1cm4gbGV2ZWwuY2hpbGRyZW5bdGhpcy5zdGFnZUN1cnJlbnQgKyAxXTtcbiAgICB9XG5cbiAgICBuZXh0TGV2ZWwoKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VGljayh0aGlzLnNlbGVjdGVkLCB0aGlzLmdldExpbmVDdXJyZW50KCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzcGluZSBvZiB0aGlzLm90aGVyU3BpbmUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcGluZS50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dVSShmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLnNlbmRSZXF1ZXN0UmVzdWx0KHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRpbnVlKCk6IHZvaWQge1xuICAgICAgICBHYW1lTWFuYWdlci5sb2dGYWlsZWQodGhpcy5sZXZlbEN1cnJlbnQsIHRoaXMuc3RhZ2VDdXJyZW50LCB0aGlzLnNlbGVjdGVkKVxuICAgICAgICAvLyBHYW1lTWFuYWdlci5sb2dFdmVudChgRmFpbGVkIEwke3RoaXMubGV2ZWxDdXJyZW50ICsgMX0gUyR7dGhpcy5zdGFnZUN1cnJlbnQgKyAxfS0ke3RoaXMuc2VsZWN0ZWQgKyAxfWApXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5vdGhlclNwaW5lLmZvckVhY2goc3BpbmUgPT4ge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMDtcbiAgICAgICAgfSlcbiAgICAgICAgdHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1godGhpcy5zZWxlY3RlZCwgdGhpcy5nZXRMaW5lQ3VycmVudCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDEpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5wbGF5U291bmQoU09VTkQuRkFJTF9TVEFHRSwgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMC4xNSk7XG4gICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdEZhaWwoKTtcbiAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1VJKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZW5kUmVxdWVzdENvbnRpbnVlKHRoaXMubm9kZSk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25QYXNzKCk6IHZvaWQge1xuICAgICAgICBHYW1lTWFuYWdlci5sb2dQYXNzZWQodGhpcy5sZXZlbEN1cnJlbnQsIHRoaXMuc3RhZ2VDdXJyZW50LCB0aGlzLnNlbGVjdGVkKVxuICAgICAgICAvLyBHYW1lTWFuYWdlci5sb2dFdmVudChgUGFzc2VkIEwke3RoaXMubGV2ZWxDdXJyZW50ICsgMX1fUyR7dGhpcy5zdGFnZUN1cnJlbnQgKyAxfWApXG5cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKVxuICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VGljayh0aGlzLnNlbGVjdGVkLCB0aGlzLmdldExpbmVDdXJyZW50KCkpO1xuICAgICAgICB9KVxuICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5wbGF5U291bmQoU09VTkQuU1VDQ0VTU19TVEFHRSwgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U3VjY2VzcygpO1xuICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VUkoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5sdXBpbi50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5vdGhlclNwaW5lLmZvckVhY2goc3BpbmUgPT4ge1xuICAgICAgICAgICAgICAgIHNwaW5lLnRpbWVTY2FsZSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZW5kUmVxdWVzdE5leHRTdGFnZSh0aGlzLm5vZGUpO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93Q29taW5nU29vbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldFVJUmVzdWx0KCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlTb3VuZChTT1VORC5TVUNDRVNTX0xFVkVMLCBmYWxzZSk7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1RpY2sodGhpcy5zZWxlY3RlZCwgdGhpcy5nZXRMaW5lQ3VycmVudCgpKTtcbiAgICAgICAgKyt0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LmxldmVsO1xuICAgICAgICBpZiAoIHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPiB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsID0gdGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgICAgIERhdGEuc2F2ZURhdGEodGhpcy5fZ2FtZU1hbmFnZXIuX2RhdGEsIERhdGEuRkFDRUJPT0tfS0VZKTtcbiAgICAgICAgICAgIERhdGEuc2F2ZURhdGEodGhpcy5fZ2FtZU1hbmFnZXIuX2RhdGEsIERhdGEuTE9DQUxfS0VZKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5idG5TZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fdWkuc2hvd0NvbWluZ1Nvb24oKTtcbiAgICB9XG5cbiAgICBwbGF5U291bmQoc291bmRJZDogbnVtYmVyLCBsb29wOiBib29sZWFuLCBkZWxheTogbnVtYmVyKSB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkxPQ0FMX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNTb3VuZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc291bmRzW3NvdW5kSWRdLCBsb29wKVxuICAgICAgICAgICAgICAgIH0sZGVsYXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgIH1cblxufVxuIl19