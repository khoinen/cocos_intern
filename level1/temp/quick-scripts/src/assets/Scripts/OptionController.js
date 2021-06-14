"use strict";
cc._RF.push(module, '71cf6u8DwJMgKVm2Oh5+mKG', 'OptionController');
// Scripts/OptionController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OptionController = /** @class */ (function (_super) {
    __extends(OptionController, _super);
    function OptionController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.option = [];
        return _this;
    }
    OptionController.prototype.onDisable = function () {
        this.resetOption();
    };
    OptionController.prototype.resetOption = function () {
        this.option.forEach(function (item) {
            item.getChildByName("selected").active = false;
            item.getChildByName("tick").active = false;
            item.getChildByName("x").active = false;
        });
    };
    // index là thứ tự của option [0-2]
    // target là node chứa script
    // component là script
    //handler là function cần thực thi
    OptionController.prototype.setOption = function (index, target, component, handler) {
        var clickHandler = new cc.Component.EventHandler();
        clickHandler.target = target;
        clickHandler.component = component;
        clickHandler.handler = handler;
        this.option[index].getComponent(cc.Button).clickEvents = [];
        this.option[index].getComponent(cc.Button).clickEvents.push(clickHandler);
    };
    OptionController.prototype.setImageOption = function (img) {
        for (var i = 0; i < img.length; ++i) {
            this.node.children[i].getChildByName("icon")
                .getComponent(cc.Sprite).spriteFrame = img[i];
        }
    };
    __decorate([
        property(cc.Node)
    ], OptionController.prototype, "option", void 0);
    OptionController = __decorate([
        ccclass
    ], OptionController);
    return OptionController;
}(cc.Component));
exports.default = OptionController;

cc._RF.pop();