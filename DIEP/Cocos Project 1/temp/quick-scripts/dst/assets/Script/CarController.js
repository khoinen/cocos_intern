
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CarController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBK0pDO1FBNUpHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUVMLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBOEluRCxDQUFDO0lBNUlHLG9CQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsdUJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMs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QVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUEyQjtJQUMxQjtRQUFyQixRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt1Q0FBeUI7SUFDeEI7UUFBckIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0NBQTBCO0lBakI5QixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBK0p2QjtJQUFELFVBQUM7Q0EvSkQsQUErSkMsQ0EvSmdDLEVBQUUsQ0FBQyxTQUFTLEdBK0o1QztrQkEvSm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b3BQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvdHRvbVBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGVmdFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmlnaHRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbW92ZW1lbnRTcGVlZDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pIGxlZnRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKSByaWdodGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pIHVwcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pIGRvd25pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleVByZXNzZWQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlSZWxlYXNlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5UHJlc3NlZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlSZWxlYXNlZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgIGlmKHRoaXMubGVmdGluZyA9PSB0cnVlICYmIHRoaXMucmlnaHRpbmcgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxFRlRJTkdcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMubW92ZW1lbnRTcGVlZCAqIGR0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBpZih0aGlzLmxlZnRpbmcgPT0gZmFsc2UgJiYgdGhpcy5yaWdodGluZyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSSUdIVElOR1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5tb3ZlbWVudFNwZWVkICogZHQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmKHRoaXMudXBwaW5nID09IHRydWUgJiYgdGhpcy5kb3duaW5nID09IGZhbHNlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUFBJTkdcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMubW92ZW1lbnRTcGVlZCAqIGR0O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZih0aGlzLmRvd25pbmcgPT0gdHJ1ZSAmJiB0aGlzLnVwcGluZyA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRE9XTklOR1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5tb3ZlbWVudFNwZWVkICogZHQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja1Bvc2l0aW9uKCk7XHJcbiAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICBvbktleVByZXNzZWQoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxFRlQ6IFwiICsgdGhpcy5sZWZ0aW5nKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMubW92ZW1lbnRTcGVlZCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYodGhpcy5ub2RlLnBvc2l0aW9uLnggPCB0aGlzLmxlZnRQb2ludC5wb3NpdGlvbi54KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5sZWZ0UG9pbnQucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUklHSFQ6IFwiICsgdGhpcy5yaWdodGluZyk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKyB0aGlzLm1vdmVtZW50U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMubm9kZS5wb3NpdGlvbi54ID4gdGhpcy5yaWdodFBvaW50LnBvc2l0aW9uLngpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnJpZ2h0UG9pbnQucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlVQIFwiICsgdGhpcy51cHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMubW92ZW1lbnRTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZih0aGlzLm5vZGUucG9zaXRpb24ueSA+IHRoaXMudG9wUG9pbnQucG9zaXRpb24ueSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLnRvcFBvaW50LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJET1dOIFwiICsgdGhpcy5kb3duaW5nKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgLSB0aGlzLm1vdmVtZW50U3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYodGhpcy5ub2RlLnBvc2l0aW9uLnkgPCB0aGlzLmJvdHRvbVBvaW50LnBvc2l0aW9uLnkpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ib3R0b21Qb2ludC5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlSZWxlYXNlZChldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5PVCBMRUZUXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gdGhpcy5tb3ZlbWVudFNwZWVkLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZih0aGlzLm5vZGUucG9zaXRpb24ueCA8IHRoaXMubGVmdFBvaW50LnBvc2l0aW9uLngpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLmxlZnRQb2ludC5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTk9UIFJJR0hUXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgdGhpcy5tb3ZlbWVudFNwZWVkLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZih0aGlzLm5vZGUucG9zaXRpb24ueCA+IHRoaXMucmlnaHRQb2ludC5wb3NpdGlvbi54KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5yaWdodFBvaW50LnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTk9UIFVQXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMubW92ZW1lbnRTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZih0aGlzLm5vZGUucG9zaXRpb24ueSA+IHRoaXMudG9wUG9pbnQucG9zaXRpb24ueSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLnRvcFBvaW50LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTk9UIERPV05cIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55IC0gdGhpcy5tb3ZlbWVudFNwZWVkKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMubm9kZS5wb3NpdGlvbi55IDwgdGhpcy5ib3R0b21Qb2ludC5wb3NpdGlvbi55KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMuYm90dG9tUG9pbnQucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUG9zaXRpb24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnBvc2l0aW9uLnggPCB0aGlzLmxlZnRQb2ludC5wb3NpdGlvbi54KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubGVmdFBvaW50LnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZih0aGlzLm5vZGUucG9zaXRpb24ueCA+IHRoaXMucmlnaHRQb2ludC5wb3NpdGlvbi54KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMucmlnaHRQb2ludC5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnBvc2l0aW9uLnkgPiB0aGlzLnRvcFBvaW50LnBvc2l0aW9uLnkpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMudG9wUG9pbnQucG9zaXRpb24ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMubm9kZS5wb3NpdGlvbi55IDwgdGhpcy5ib3R0b21Qb2ludC5wb3NpdGlvbi55KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLmJvdHRvbVBvaW50LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=