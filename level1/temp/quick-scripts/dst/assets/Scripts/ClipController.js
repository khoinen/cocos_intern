
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClipController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29db6CM5eJA4LKE7xSCD9h9', 'ClipController');
// Scripts/ClipController.ts

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
exports.TYPE = void 0;
var StageController_1 = require("./StageController");
var EffectManager_1 = require("./EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TYPE;
(function (TYPE) {
    TYPE[TYPE["NONE"] = 0] = "NONE";
    TYPE[TYPE["INTRODUCE"] = 1] = "INTRODUCE";
    TYPE[TYPE["SUCCESS"] = 2] = "SUCCESS";
    TYPE[TYPE["FAIL"] = 3] = "FAIL";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var ClipController = /** @class */ (function (_super) {
    __extends(ClipController, _super);
    function ClipController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.type = TYPE.NONE;
        _this_1.nextStage = null;
        _this_1.fade = false;
        _this_1.actionStart = [];
        _this_1._ = null;
        return _this_1;
    }
    ClipController.prototype.onLoad = function () {
        this._ = this;
    };
    ClipController.prototype.onEnable = function () {
        // this.node.on("finish_stage", this.)
        this.node.on("complete_introduce", this.onCompleteIntroduce, this);
    };
    ClipController.prototype.onDisable = function () {
        this.node.on("complete_introduce", this.onCompleteIntroduce, this);
    };
    ClipController.prototype.onCompleteIntroduce = function (event) {
        event.stopPropagation();
        var optionContainer = cc.find("Canvas/OptionContainer");
        EffectManager_1.default.effectScaleOption(optionContainer, 0.7);
    };
    ClipController.prototype.startClip = function (_this) {
        var component = "";
        var handler = "";
        for (var _i = 0, _a = _this.actionStart; _i < _a.length; _i++) {
            var element = _a[_i];
            component = element._componentName;
            handler = element.handler;
            var func = element.target.getComponent(component)[handler];
            func(element.target.getComponent(component));
        }
    };
    ClipController.prototype.onFinishClip = function (_this) {
        console.log("%c" + _this.type, "color: violet");
        switch (_this.type) {
            case TYPE.INTRODUCE:
                var clip = _this.node.parent;
                var stageController = clip.getComponent("StageController");
                EffectManager_1.default.effectScaleOption(stageController.optionContainer, 0.5);
                break;
            default:
                var stage = _this.node.parent.getComponent("StageController");
                stage.onResult(_this.type);
                break;
        }
    };
    __decorate([
        property({ type: cc.Enum(TYPE) })
    ], ClipController.prototype, "type", void 0);
    __decorate([
        property({ type: StageController_1.default })
    ], ClipController.prototype, "nextStage", void 0);
    __decorate([
        property
    ], ClipController.prototype, "fade", void 0);
    __decorate([
        property({ type: cc.Component.EventHandler })
    ], ClipController.prototype, "actionStart", void 0);
    ClipController = __decorate([
        ccclass
    ], ClipController);
    return ClipController;
}(cc.Component));
exports.default = ClipController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsaXBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQVksSUFLWDtBQUxELFdBQVksSUFBSTtJQUNaLCtCQUFJLENBQUE7SUFDSix5Q0FBUyxDQUFBO0lBQ1QscUNBQU8sQ0FBQTtJQUNQLCtCQUFJLENBQUE7QUFDUixDQUFDLEVBTFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBS2Y7QUFHRDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHVFQTZEQztRQTFERyxZQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUd2QixpQkFBUyxHQUFvQixJQUFJLENBQUM7UUFHbEMsWUFBSSxHQUFHLEtBQUssQ0FBQztRQUdiLG1CQUFXLEdBQWdDLEVBQUUsQ0FBQztRQUV0QyxTQUFDLEdBQUcsSUFBSSxDQUFDOztJQStDckIsQ0FBQztJQTlDRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsS0FBMkI7UUFDM0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RCx1QkFBYSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQW9CLFVBQWlCLEVBQWpCLEtBQUEsS0FBSyxDQUFDLFdBQVcsRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFDckM7WUFESyxJQUFJLE9BQU8sU0FBQTtZQUVaLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQ25DLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzFCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNoRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQ2xCO1lBQ0ksS0FBSyxJQUFJLENBQUMsU0FBUztnQkFDZixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMzRCx1QkFBYSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU07WUFDVjtnQkFDSSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLE1BQU07U0FDYjtJQUNMLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO2dEQUNUO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLHlCQUFlLEVBQUMsQ0FBQztxREFDQTtJQUdsQztRQURDLFFBQVE7Z0RBQ0k7SUFHYjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQyxDQUFDO3VEQUNFO0lBWjdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E2RGxDO0lBQUQscUJBQUM7Q0E3REQsQUE2REMsQ0E3RDJDLEVBQUUsQ0FBQyxTQUFTLEdBNkR2RDtrQkE3RG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhZ2VDb250cm9sbGVyIGZyb20gXCIuL1N0YWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4vRWZmZWN0TWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gVFlQRSB7XG4gICAgTk9ORSxcbiAgICBJTlRST0RVQ0UsXG4gICAgU1VDQ0VTUyxcbiAgICBGQUlMXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGlwQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkVudW0oVFlQRSl9KVxuICAgIHR5cGU6IFRZUEUgPSBUWVBFLk5PTkU7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFN0YWdlQ29udHJvbGxlcn0pXG4gICAgbmV4dFN0YWdlOiBTdGFnZUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZmFkZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyfSlcbiAgICBhY3Rpb25TdGFydDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG5cbiAgICBwcml2YXRlIF8gPSBudWxsO1xuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fID0gdGhpcztcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiZmluaXNoX3N0YWdlXCIsIHRoaXMuKVxuICAgICAgICB0aGlzLm5vZGUub24oXCJjb21wbGV0ZV9pbnRyb2R1Y2VcIiwgdGhpcy5vbkNvbXBsZXRlSW50cm9kdWNlLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJjb21wbGV0ZV9pbnRyb2R1Y2VcIiwgdGhpcy5vbkNvbXBsZXRlSW50cm9kdWNlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlSW50cm9kdWNlKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdmFyIG9wdGlvbkNvbnRhaW5lciA9IGNjLmZpbmQoXCJDYW52YXMvT3B0aW9uQ29udGFpbmVyXCIpO1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKG9wdGlvbkNvbnRhaW5lciwgMC43KTtcbiAgICB9XG5cbiAgICBzdGFydENsaXAoX3RoaXMpOiB2b2lkIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IFwiXCI7XG4gICAgICAgIHZhciBoYW5kbGVyID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiBfdGhpcy5hY3Rpb25TdGFydClcbiAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gZWxlbWVudC5fY29tcG9uZW50TmFtZTtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBlbGVtZW50LmhhbmRsZXI7XG4gICAgICAgICAgICB2YXIgZnVuYyA9IGVsZW1lbnQudGFyZ2V0LmdldENvbXBvbmVudChjb21wb25lbnQpW2hhbmRsZXJdO1xuICAgICAgICAgICAgZnVuYyhlbGVtZW50LnRhcmdldC5nZXRDb21wb25lbnQoY29tcG9uZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbmlzaENsaXAoX3RoaXMpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgX3RoaXMudHlwZSwgXCJjb2xvcjogdmlvbGV0XCIpO1xuICAgICAgICBzd2l0Y2ggKF90aGlzLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgVFlQRS5JTlRST0RVQ0U6XG4gICAgICAgICAgICAgICAgdmFyIGNsaXAgPSBfdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB2YXIgc3RhZ2VDb250cm9sbGVyID0gY2xpcC5nZXRDb21wb25lbnQoXCJTdGFnZUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RTY2FsZU9wdGlvbihzdGFnZUNvbnRyb2xsZXIub3B0aW9uQ29udGFpbmVyLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsZXQgc3RhZ2UgPSBfdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJTdGFnZUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgc3RhZ2Uub25SZXN1bHQoX3RoaXMudHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9ICBcbn1cbiJdfQ==