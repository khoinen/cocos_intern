"use strict";
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