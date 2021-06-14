
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StageController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N0YWdlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFHdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFxRkM7UUFsRkcsWUFBTSxHQUFhLEVBQUUsQ0FBQztRQUd0QixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFHbEMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsT0FBQyxHQUFHLElBQUksQ0FBQztRQUNULGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBbUU1QixDQUFDO0lBakVHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFDcEQ7WUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NB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Qzt1REFDQztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO0lBZlosZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXFGbkM7SUFBRCxzQkFBQztDQXJGRCxBQXFGQyxDQXJGNEMsRUFBRSxDQUFDLFNBQVMsR0FxRnhEO2tCQXJGb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuL0VmZmVjdE1hbmFnZXJcIjtcbmltcG9ydCBDbGlwQ29udHJvbGxlciBmcm9tIFwiLi9DbGlwQ29udHJvbGxlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGV9KVxuICAgIHRhcmdldDogY2MuTm9kZVtdPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBpY29uT3B0aW9uOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvcHRpb25Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcbiAgICBzdGFnZVN0YXJ0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRvcENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF8gPSBudWxsO1xuICAgIHByaXZhdGUgaXNDbGljayA9IGZhbHNlO1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl8gPSB0aGlzO1xuICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zY2FsZSA9IDA7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbkNvbnRhaW5lci5nZXRDb21wb25lbnQoXCJPcHRpb25Db250cm9sbGVyXCIpO1xuICAgICAgICBvcHRpb24uc2V0SW1hZ2VPcHRpb24odGhpcy5pY29uT3B0aW9uKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb24ubm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uLnNldE9wdGlvbihpLCB0aGlzLm5vZGUsIFwiU3RhZ2VDb250cm9sbGVyXCIsIFwicnVuQ2xpcFwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRUb3BDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBydW5TdGFnZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIGNsaXBDb250cm9sbGVyID0gdGhpcy5zdGFnZVN0YXJ0LmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICBjbGlwQ29udHJvbGxlci5zdGFydENsaXAoY2xpcENvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIHNob3dPcHRpb25Db250YWluZXIoKTogdm9pZCB7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVPcHRpb24odGhpcy5vcHRpb25Db250YWluZXIsIDAuNSk7XG4gICAgfVxuXG4gICAgcnVuQ2xpcChldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNDbGljaylcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJLaG9uZyBkdW9jIGNsaWNrIG9wdGlvbiBsaWVuIHR1Y1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9ub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBfbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHN3aXRjaChfbm9kZS5uYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uMVwiOlxuICAgICAgICAgICAgICAgIHZhciBjbGlwQ29udHJvbGxlciA9IHRoaXMudGFyZ2V0WzBdLmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgIGNsaXBDb250cm9sbGVyLnN0YXJ0Q2xpcChjbGlwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uMlwiOlxuICAgICAgICAgICAgICAgIHZhciBjbGlwQ29udHJvbGxlciA9IHRoaXMudGFyZ2V0WzFdLmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgIGNsaXBDb250cm9sbGVyLnN0YXJ0Q2xpcChjbGlwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uM1wiOlxuICAgICAgICAgICAgICAgIHZhciBjbGlwQ29udHJvbGxlciA9IHRoaXMudGFyZ2V0WzJdLmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgIGNsaXBDb250cm9sbGVyLnN0YXJ0Q2xpcChjbGlwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUb3BDb250YWluZXIoKTogdm9pZCB7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRoaXMubm9kZS5uYW1lLnNwbGl0KFwiU3RhZ2VcIilbMV0pIC0gMTs7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3BDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMudG9wQ29udGFpbmVyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKChpbmRleCAtIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmdldENoaWxkQnlOYW1lKFwiVHJ1ZUFuc3dlclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uUmVzdWx0KHR5cGUpOiB2b2lkIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbCgpO1xuICAgIH1cbn1cbiJdfQ==