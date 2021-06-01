
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BackgroundController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrZ3JvdW5kQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTBDQztRQXZDQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGlCQUFXLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBDLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBNEI1QixDQUFDO0lBMUJDLDJCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3RELENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztTQUNuRjtRQUVELElBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRztZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLE1BQU07U0FDWDtJQUNILENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDaUI7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDSztJQWRQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EwQzlCO0lBQUQsaUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBMENuRDtrQkExQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBib3R0b21Qb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvcFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICBzY3JvbGxTcGVlZDogbnVtYmVyID0gTnVtYmVyKFwiMC4zXCIpO1xyXG4gIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gIGlzUnVubmluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIG9uTG9hZCAoKSB7XHJcbiAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlQcmVzc2VkLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0ICgpIHtcclxuICAgICAgdGhpcy5iYWNrZ3JvdW5kLnBvc2l0aW9uID0gdGhpcy50b3BQb2ludC5wb3NpdGlvbjtcclxuICB9XHJcbiAgICBcclxuICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgIGlmKHRoaXMuaXNSdW5uaW5nKXtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc2V0UG9zaXRpb24oIDAuMCwgdGhpcy5iYWNrZ3JvdW5kLnBvc2l0aW9uLnkgLSB0aGlzLnNjcm9sbFNwZWVkICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggdGhpcy5iYWNrZ3JvdW5kLnBvc2l0aW9uLnkgPD0gdGhpcy5ib3R0b21Qb2ludC5wb3NpdGlvbi55ICkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zZXRQb3NpdGlvbiggMC4wLCB0aGlzLnRvcFBvaW50LnBvc2l0aW9uLnkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleVByZXNzZWQoZXZlbnQpe1xyXG4gICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICB0aGlzLmlzUnVubmluZyA9ICF0aGlzLmlzUnVubmluZztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=