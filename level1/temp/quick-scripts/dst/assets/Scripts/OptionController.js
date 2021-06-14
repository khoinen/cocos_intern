
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OptionController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL09wdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFxQ0M7UUFsQ0csWUFBTSxHQUFjLEVBQUUsQ0FBQzs7SUFrQzNCLENBQUM7SUFoQ0csb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsb0NBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxNQUFlLEVBQUUsU0FBaUIsRUFBRSxPQUFlO1FBQ3hFLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNuQyxZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLEdBQXFCO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUNuQztZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRTtJQUNMLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSztJQUhOLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBcUNwQztJQUFELHVCQUFDO0NBckNELEFBcUNDLENBckM2QyxFQUFFLENBQUMsU0FBUyxHQXFDekQ7a0JBckNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3B0aW9uOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldE9wdGlvbigpO1xuICAgIH1cblxuICAgIHJlc2V0T3B0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwieFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaW5kZXggbMOgIHRo4bupIHThu7EgY+G7p2Egb3B0aW9uIFswLTJdXG4gICAgLy8gdGFyZ2V0IGzDoCBub2RlIGNo4bupYSBzY3JpcHRcbiAgICAvLyBjb21wb25lbnQgbMOgIHNjcmlwdFxuICAgIC8vaGFuZGxlciBsw6AgZnVuY3Rpb24gY+G6p24gdGjhu7FjIHRoaVxuICAgIHNldE9wdGlvbihpbmRleDogbnVtYmVyLCB0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGNsaWNrSGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNsaWNrSGFuZGxlci50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGNsaWNrSGFuZGxlci5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIGNsaWNrSGFuZGxlci5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5vcHRpb25baW5kZXhdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMub3B0aW9uW2luZGV4XS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuXG4gICAgc2V0SW1hZ2VPcHRpb24oaW1nOiBbY2MuU3ByaXRlRnJhbWVdKTogdm9pZCB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1nLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGltZ1tpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==