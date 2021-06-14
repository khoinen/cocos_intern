"use strict";
cc._RF.push(module, '8b31aD44/JG9Z0G6p57oiui', 'StageController');
// Scripts/StageController.ts

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
var EffectManager_1 = require("./EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageController = /** @class */ (function (_super) {
    __extends(StageController, _super);
    function StageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = [];
        _this.iconOption = [];
        _this.optionContainer = null;
        _this.stageStart = null;
        _this.topContainer = null;
        _this._ = null;
        _this.isClick = false;
        return _this;
    }
    StageController.prototype.onLoad = function () {
        this._ = this;
        this.optionContainer.scale = 0;
    };
    StageController.prototype.onEnable = function () {
        var option = this.optionContainer.getComponent("OptionController");
        option.setImageOption(this.iconOption);
        for (var i = 0; i < option.node.children.length; ++i) {
            option.setOption(i, this.node, "StageController", "runClip");
            this.isClick = true;
        }
        this.setTopContainer();
    };
    StageController.prototype.runStage = function () {
        var clipController = this.stageStart.getComponent("ClipController");
        clipController.startClip(clipController);
    };
    StageController.prototype.showOptionContainer = function () {
        EffectManager_1.default.effectScaleOption(this.optionContainer, 0.5);
    };
    StageController.prototype.runClip = function (event) {
        if (!this.isClick) {
            cc.error("Khong duoc click option lien tuc");
            return;
        }
        this.isClick = false;
        var _node = event.target;
        _node.getChildByName("selected").active = true;
        switch (_node.name) {
            case "option1":
                var clipController = this.target[0].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
            case "option2":
                var clipController = this.target[1].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
            case "option3":
                var clipController = this.target[2].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
        }
    };
    StageController.prototype.setTopContainer = function () {
        var index = parseInt(this.node.name.split("Stage")[1]) - 1;
        ;
        for (var i = 0; i < this.topContainer.children.length; ++i) {
            var children = this.topContainer.children[i].getChildByName((index - 1).toString());
            if (children) {
                children.getChildByName("TrueAnswer").active = true;
            }
        }
    };
    StageController.prototype.onResult = function (type) {
        cc.Tween.stopAll();
    };
    __decorate([
        property({ type: cc.Node })
    ], StageController.prototype, "target", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageController.prototype, "iconOption", void 0);
    __decorate([
        property(cc.Node)
    ], StageController.prototype, "optionContainer", void 0);
    __decorate([
        property({ type: cc.Node })
    ], StageController.prototype, "stageStart", void 0);
    __decorate([
        property(cc.Node)
    ], StageController.prototype, "topContainer", void 0);
    StageController = __decorate([
        ccclass
    ], StageController);
    return StageController;
}(cc.Component));
exports.default = StageController;

cc._RF.pop();