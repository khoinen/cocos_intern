
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ListLevel/ClickItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '999c8OWQ45LuamLep+cbF8/', 'ClickItem');
// Scripts/ListLevel/ClickItem.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isClick = false;
        return _this;
    }
    NewClass.prototype.onClick = function (event) {
        if (this.isClick) {
            var _event = new cc.Event.EventCustom("click_item", true);
            var strLabel = this.node.getChildByName("txt_number").getComponent(cc.Label).string;
            _event.level = Number(strLabel) - 1;
            this.node.dispatchEvent(_event);
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xpc3RMZXZlbC9DbGlja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFZQztRQVZHLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBVXBCLENBQUM7SUFURywwQkFBTyxHQUFQLFVBQVEsS0FBMkI7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUNoQjtZQUNJLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3BGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFYZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVk1QjtJQUFELGVBQUM7Q0FaRCxBQVlDLENBWnFDLEVBQUUsQ0FBQyxTQUFTLEdBWWpEO2tCQVpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBpc0NsaWNrID0gZmFsc2U7XG4gICAgb25DbGljayhldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGljaylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IF9ldmVudCA9IG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImNsaWNrX2l0ZW1cIiwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc3RyTGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfbnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICAgICAgX2V2ZW50LmxldmVsID0gTnVtYmVyKHN0ckxhYmVsKSAtIDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChfZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19