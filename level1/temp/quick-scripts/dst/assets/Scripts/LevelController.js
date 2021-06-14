
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LevelController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6197e/VHQpPtbSIrhBevAtS', 'LevelController');
// Scripts/LevelController.ts

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
var LevelController = /** @class */ (function (_super) {
    __extends(LevelController, _super);
    function LevelController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = [];
        _this.stageBegin = null;
        _this.numberStage = 0;
        _this.topContainer = null;
        _this.itemStage = null;
        return _this;
    }
    LevelController.prototype.onLoad = function () {
        this.initTopContainer();
    };
    LevelController.prototype.onEnable = function () {
        this.stageBegin.getComponent("StageController").runStage();
    };
    LevelController.prototype.initTopContainer = function () {
        for (var i = 0; i < this.numberStage; ++i) {
            var s = cc.instantiate(this.itemStage);
            s.name = (i + 1).toString();
            this.topContainer.addChild(s);
        }
        this.topContainer.getChildByName("Next").zIndex = cc.macro.MAX_ZINDEX;
    };
    __decorate([
        property({ type: cc.Component.EventHandler })
    ], LevelController.prototype, "stage", void 0);
    __decorate([
        property(cc.Node)
    ], LevelController.prototype, "stageBegin", void 0);
    __decorate([
        property
    ], LevelController.prototype, "numberStage", void 0);
    __decorate([
        property(cc.Node)
    ], LevelController.prototype, "topContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelController.prototype, "itemStage", void 0);
    LevelController = __decorate([
        ccclass
    ], LevelController);
    return LevelController;
}(cc.Component));
exports.default = LevelController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xldmVsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWlDQztRQTlCRyxXQUFLLEdBQWdDLEVBQUUsQ0FBQztRQUd4QyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUdoQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQWtCaEMsQ0FBQztJQWhCRyxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEI7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFDekM7WUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzFFLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsQ0FBQztrREFDSjtJQUd4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBRzNCO1FBREMsUUFBUTt3REFDTztJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFmWCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBaUNuQztJQUFELHNCQUFDO0NBakNELEFBaUNDLENBakM0QyxFQUFFLENBQUMsU0FBUyxHQWlDeEQ7a0JBakNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcn0pXG4gICAgc3RhZ2U6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3RhZ2VCZWdpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBudW1iZXJTdGFnZSA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b3BDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtU3RhZ2U6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdFRvcENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFnZUJlZ2luLmdldENvbXBvbmVudChcIlN0YWdlQ29udHJvbGxlclwiKS5ydW5TdGFnZSgpO1xuICAgIH1cblxuICAgIGluaXRUb3BDb250YWluZXIoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJTdGFnZTsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVN0YWdlKTtcbiAgICAgICAgICAgIHMubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMudG9wQ29udGFpbmVyLmFkZENoaWxkKHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9wQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwiTmV4dFwiKS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgIH1cbn1cbiJdfQ==