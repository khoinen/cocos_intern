
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bc46rpWClIqJJbH+W8pEmC', 'EventManager');
// Scripts/EventManager.ts

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
var EffectManager = /** @class */ (function (_super) {
    __extends(EffectManager, _super);
    function EffectManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Chuyển cảnh khác
    EffectManager.sendRequestNextScene = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("request_next_scene", true));
    };
    //Reset lại từ đầu level
    EffectManager.sendRequestReset = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("back_to_stage_begin", true));
    };
    //Chơi lại từ stage 1
    EffectManager.sendRequestPlayStageBegin = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("back_to_stage_begin", true));
    };
    //Qua màn
    EffectManager.sendRequestResult = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("next_level", true));
    };
    //Chuyển stage khác
    EffectManager.sendRequestNextStage = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("next_stage", true));
    };
    //Hiển thị đếm ngược
    EffectManager.sendRequestContinue = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("show_continue", true));
    };
    EffectManager = __decorate([
        ccclass
    ], EffectManager);
    return EffectManager;
}(cc.Component));
exports.default = EffectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0V2ZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUErQkEsQ0FBQztJQTdCRyxrQkFBa0I7SUFDSixrQ0FBb0IsR0FBbEMsVUFBbUMsSUFBYTtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsd0JBQXdCO0lBQ1YsOEJBQWdCLEdBQTlCLFVBQStCLElBQWE7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHFCQUFxQjtJQUNQLHVDQUF5QixHQUF2QyxVQUF3QyxJQUFhO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxTQUFTO0lBQ0ssK0JBQWlCLEdBQS9CLFVBQWdDLElBQWE7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxtQkFBbUI7SUFDTCxrQ0FBb0IsR0FBbEMsVUFBbUMsSUFBYTtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELG9CQUFvQjtJQUNOLGlDQUFtQixHQUFqQyxVQUFrQyxJQUFhO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBOUJnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBK0JqQztJQUFELG9CQUFDO0NBL0JELEFBK0JDLENBL0IwQyxFQUFFLENBQUMsU0FBUyxHQStCdEQ7a0JBL0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vQ2h1eeG7g24gY+G6o25oIGtow6FjXG4gICAgcHVibGljIHN0YXRpYyBzZW5kUmVxdWVzdE5leHRTY2VuZShub2RlOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oXCJyZXF1ZXN0X25leHRfc2NlbmVcIiwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vUmVzZXQgbOG6oWkgdOG7qyDEkeG6p3UgbGV2ZWxcbiAgICBwdWJsaWMgc3RhdGljIHNlbmRSZXF1ZXN0UmVzZXQobm9kZTogY2MuTm9kZSkgOiB2b2lkIHtcbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImJhY2tfdG9fc3RhZ2VfYmVnaW5cIiwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vQ2jGoWkgbOG6oWkgdOG7qyBzdGFnZSAxXG4gICAgcHVibGljIHN0YXRpYyBzZW5kUmVxdWVzdFBsYXlTdGFnZUJlZ2luKG5vZGU6IGNjLk5vZGUpIDogdm9pZCB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oXCJiYWNrX3RvX3N0YWdlX2JlZ2luXCIsIHRydWUpKTtcbiAgICB9XG5cbiAgICAvL1F1YSBtw6BuXG4gICAgcHVibGljIHN0YXRpYyBzZW5kUmVxdWVzdFJlc3VsdChub2RlOiBjYy5Ob2RlKSA6IHZvaWQge1xuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwibmV4dF9sZXZlbFwiLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgLy9DaHV54buDbiBzdGFnZSBraMOhY1xuICAgIHB1YmxpYyBzdGF0aWMgc2VuZFJlcXVlc3ROZXh0U3RhZ2Uobm9kZTogY2MuTm9kZSkgOiB2b2lkIHtcbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcIm5leHRfc3RhZ2VcIiwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vSGnhu4NuIHRo4buLIMSR4bq/bSBuZ8aw4bujY1xuICAgIHB1YmxpYyBzdGF0aWMgc2VuZFJlcXVlc3RDb250aW51ZShub2RlOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oXCJzaG93X2NvbnRpbnVlXCIsIHRydWUpKTtcbiAgICB9XG59XG4iXX0=