
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OptimizePageView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1781R//gFAbLVSqbJk3RZg', 'OptimizePageView');
// Scripts/OptimizePageView.ts

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
        _this.view = null;
        _this.content = null;
        return _this;
    }
    NewClass.prototype.update = function (dt) {
        var viewRect = cc.rect(0, -this.view.height / 2, this.view.width, this.view.height);
        var page = this.content.children;
        for (var i = 0; i < page.length; ++i) {
            var item = page[i].children;
            for (var j = 0; j < item.length; ++j) {
                if (viewRect.intersects(item[j].getBoundingBox()))
                    item[j].opacity = 255;
                else
                    item[j].opacity = 0;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "view", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "content", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL09wdGltaXplUGFnZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3QkM7UUFyQkcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixhQUFPLEdBQVksSUFBSSxDQUFDOztJQWtCNUIsQ0FBQztJQWhCRyx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQ3BDO1lBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFDcEM7Z0JBQ0ksSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7O29CQUV0QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQXBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFOUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0I1QjtJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0JqRDtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHZpZXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgdXBkYXRlKGR0KTogdm9pZCB7XG4gICAgICAgIGxldCB2aWV3UmVjdCA9IGNjLnJlY3QoMCwgLXRoaXMudmlldy5oZWlnaHQgLyAyLCB0aGlzLnZpZXcud2lkdGgsIHRoaXMudmlldy5oZWlnaHQpO1xuXG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5jb250ZW50LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UubGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gcGFnZVtpXS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbS5sZW5ndGg7ICsrailcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodmlld1JlY3QuaW50ZXJzZWN0cyhpdGVtW2pdLmdldEJvdW5kaW5nQm94KCkpKVxuICAgICAgICAgICAgICAgICAgICBpdGVtW2pdLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBpdGVtW2pdLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19