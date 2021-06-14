"use strict";
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