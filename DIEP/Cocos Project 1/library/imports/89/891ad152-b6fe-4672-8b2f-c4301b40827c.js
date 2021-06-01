"use strict";
cc._RF.push(module, '891adFStv5GcosvxDAbQIJ8', 'BackgroundController');
// Script/BackgroundController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bottomPoint = null;
        _this.topPoint = null;
        _this.background = null;
        _this.scrollSpeed = Number("0.3");
        _this.isRunning = true;
        return _this;
    }
    Background.prototype.onLoad = function () {
        this.isRunning = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
    };
    Background.prototype.start = function () {
        this.background.position = this.topPoint.position;
    };
    Background.prototype.update = function (dt) {
        if (this.isRunning) {
            this.background.setPosition(0.0, this.background.position.y - this.scrollSpeed);
        }
        if (this.background.position.y <= this.bottomPoint.position.y) {
            this.background.setPosition(0.0, this.topPoint.position.y);
        }
    };
    Background.prototype.onKeyPressed = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.isRunning = !this.isRunning;
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], Background.prototype, "bottomPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Background.prototype, "topPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Background.prototype, "background", void 0);
    __decorate([
        property(cc.Float)
    ], Background.prototype, "scrollSpeed", void 0);
    __decorate([
        property(cc.Boolean)
    ], Background.prototype, "isRunning", void 0);
    Background = __decorate([
        ccclass
    ], Background);
    return Background;
}(cc.Component));
exports.default = Background;

cc._RF.pop();