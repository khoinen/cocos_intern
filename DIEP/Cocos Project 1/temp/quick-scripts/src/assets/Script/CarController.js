"use strict";
cc._RF.push(module, '19bb63jlAtBELS7s9uLVtvD', 'CarController');
// Script/CarController.ts

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
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topPoint = null;
        _this.bottomPoint = null;
        _this.leftPoint = null;
        _this.rightPoint = null;
        _this.movementSpeed = 50;
        _this.lefting = false;
        _this.righting = false;
        _this.upping = false;
        _this.downing = false;
        return _this;
    }
    Car.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    };
    Car.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    };
    // LIFE-CYCLE CALLBACKS:
    Car.prototype.start = function () {
    };
    Car.prototype.update = function (dt) {
        if (this.lefting == true && this.righting == false) {
            console.log("LEFTING");
            this.node.x -= this.movementSpeed * dt;
        }
        if (this.lefting == false && this.righting == true) {
            console.log("RIGHTING");
            this.node.x += this.movementSpeed * dt;
        }
        if (this.upping == true && this.downing == false) {
            console.log("UPPING");
            this.node.y += this.movementSpeed * dt;
        }
        if (this.downing == true && this.upping == false) {
            console.log("DOWNING");
            this.node.y -= this.movementSpeed * dt;
        }
        this.checkPosition();
    };
    Car.prototype.onKeyPressed = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.lefting = true;
                //console.log("LEFT: " + this.lefting);
                // this.node.setPosition(this.node.position.x - this.movementSpeed, this.node.position.y);
                // if(this.node.position.x < this.leftPoint.position.x){
                //     this.node.setPosition(this.leftPoint.position.x, this.node.position.y);
                // }
                break;
            case cc.macro.KEY.d:
                this.righting = true;
                //console.log("RIGHT: " + this.righting);
                // this.node.setPosition(this.node.position.x + this.movementSpeed, this.node.position.y);
                // if(this.node.position.x > this.rightPoint.position.x){
                //     this.node.setPosition(this.rightPoint.position.x, this.node.position.y);
                // }
                break;
            case cc.macro.KEY.w:
                this.upping = true;
                //console.log("UP " + this.upping);
                // this.node.setPosition(this.node.position.x, this.node.position.y + this.movementSpeed);
                // if(this.node.position.y > this.topPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.topPoint.position.y);
                // }
                break;
            case cc.macro.KEY.s:
                this.downing = true;
                //console.log("DOWN " + this.downing);
                // this.node.setPosition(this.node.position.x, this.node.position.y - this.movementSpeed);
                // if(this.node.position.y < this.bottomPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.bottomPoint.position.y);
                // }
                break;
        }
    };
    Car.prototype.onKeyReleased = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.lefting = false;
                //console.log("NOT LEFT");
                // this.node.setPosition(this.node.position.x - this.movementSpeed, this.node.position.y);
                // if(this.node.position.x < this.leftPoint.position.x){
                //     this.node.setPosition(this.leftPoint.position.x, this.node.position.y);
                // }
                break;
            case cc.macro.KEY.d:
                this.righting = false;
                //console.log("NOT RIGHT");
                // this.node.setPosition(this.node.position.x + this.movementSpeed, this.node.position.y);
                // if(this.node.position.x > this.rightPoint.position.x){
                //     this.node.setPosition(this.rightPoint.position.x, this.node.position.y);
                // }
                break;
            case cc.macro.KEY.w:
                this.upping = false;
                //console.log("NOT UP");
                // this.node.setPosition(this.node.position.x, this.node.position.y + this.movementSpeed);
                // if(this.node.position.y > this.topPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.topPoint.position.y);
                // }
                break;
            case cc.macro.KEY.s:
                this.downing = false;
                //console.log("NOT DOWN");
                // this.node.setPosition(this.node.position.x, this.node.position.y - this.movementSpeed);
                // if(this.node.position.y < this.bottomPoint.position.y){
                //     this.node.setPosition(this.node.position.x, this.bottomPoint.position.y);
                // }
                break;
        }
    };
    Car.prototype.checkPosition = function () {
        if (this.node.position.x < this.leftPoint.position.x) {
            this.node.setPosition(this.leftPoint.position.x, this.node.position.y);
        }
        if (this.node.position.x > this.rightPoint.position.x) {
            this.node.setPosition(this.rightPoint.position.x, this.node.position.y);
        }
        if (this.node.position.y > this.topPoint.position.y) {
            this.node.setPosition(this.node.position.x, this.topPoint.position.y);
        }
        if (this.node.position.y < this.bottomPoint.position.y) {
            this.node.setPosition(this.node.position.x, this.bottomPoint.position.y);
        }
    };
    __decorate([
        property(cc.Node)
    ], Car.prototype, "topPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Car.prototype, "bottomPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Car.prototype, "leftPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Car.prototype, "rightPoint", void 0);
    __decorate([
        property(cc.Float)
    ], Car.prototype, "movementSpeed", void 0);
    __decorate([
        property(cc.Boolean)
    ], Car.prototype, "lefting", void 0);
    __decorate([
        property(cc.Boolean)
    ], Car.prototype, "righting", void 0);
    __decorate([
        property(cc.Boolean)
    ], Car.prototype, "upping", void 0);
    __decorate([
        property(cc.Boolean)
    ], Car.prototype, "downing", void 0);
    Car = __decorate([
        ccclass
    ], Car);
    return Car;
}(cc.Component));
exports.default = Car;

cc._RF.pop();