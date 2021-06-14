
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ListLevel/NewClickItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '829a9uw8npBu6RdJBGkk5Vr', 'NewClickItem');
// Scripts/ListLevel/NewClickItem.ts

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
exports.STATUS = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STATUS;
(function (STATUS) {
    STATUS[STATUS["UNLOCK"] = 0] = "UNLOCK";
    STATUS[STATUS["LOCK"] = 1] = "LOCK";
    STATUS[STATUS["CURRENT"] = 2] = "CURRENT";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var NewClickItem = /** @class */ (function (_super) {
    __extends(NewClickItem, _super);
    function NewClickItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tick = null;
        _this.frame = null;
        _this.bigNumber = null;
        _this.smallNumber = null;
        _this.image = [];
        _this.isClick = false;
        _this._status = STATUS.LOCK;
        _this._count = 0;
        return _this;
    }
    NewClickItem.prototype.onLoad = function () {
        this._view = this.node.parent.parent.parent;
    };
    NewClickItem.prototype.onClick = function (event) {
        if (this.isClick) {
            var _event = new cc.Event.EventCustom("click_item", true);
            var level = this.node.parent.children.indexOf(this.node);
            var content = this.node.parent.parent;
            var pageNumber = content.children.indexOf(this.node.parent);
            _event.level = 10 * pageNumber + level;
            this.node.dispatchEvent(_event);
        }
    };
    NewClickItem.prototype.setLevel = function (level) {
        this.frame.node.getChildByName("smallNumber").getComponent(cc.Label).string = level;
        this.frame.node.getChildByName("bigNumber").getComponent(cc.Label).string = level;
    };
    NewClickItem.prototype.setStatus = function (status) {
        this._status = status;
        switch (status) {
            case STATUS.UNLOCK:
                this.frame.spriteFrame = this.image[0];
                this.smallNumber.active = true;
                this.bigNumber.active = false;
                this.smallNumber.color = new cc.Color(255, 255, 255, 255);
                this.smallNumber.getComponent(cc.LabelOutline).color = new cc.Color(40, 40, 40, 102);
                break;
            case STATUS.CURRENT:
                this.frame.spriteFrame = this.image[1];
                this.smallNumber.active = false;
                this.bigNumber.active = true;
                this.bigNumber.color = new cc.Color(255, 255, 255, 255);
                this.bigNumber.getComponent(cc.LabelOutline).color = new cc.Color(83, 44, 0, 102);
                break;
            case STATUS.LOCK:
                this.frame.spriteFrame = this.image[2];
                this.smallNumber.active = false;
                this.bigNumber.active = true;
                this.bigNumber.color = new cc.Color(141, 141, 141, 255);
                this.bigNumber.getComponent(cc.LabelOutline).color = new cc.Color(40, 40, 40, 102);
                break;
        }
    };
    NewClickItem.prototype.localConvertWorldPointAR = function (node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    };
    NewClickItem.prototype.worldConvertLocalPointAR = function (node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    };
    NewClickItem.prototype.convetOtherNodeSpaceAR = function (node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        var worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
    };
    NewClickItem.prototype.update = function (dt) {
        var pos = this.convetOtherNodeSpaceAR(this.node, this._view);
        if (this.node.name == "item1") {
            (pos.x < -500 || pos.x > 500) ? this.node.opacity = 0 : this.node.opacity = 255;
        }
        else {
            (pos.x < -750 || pos.x > 750) ? this.node.opacity = 0 : this.node.opacity = 255;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClickItem.prototype, "tick", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClickItem.prototype, "frame", void 0);
    __decorate([
        property(cc.Node)
    ], NewClickItem.prototype, "bigNumber", void 0);
    __decorate([
        property(cc.Node)
    ], NewClickItem.prototype, "smallNumber", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClickItem.prototype, "image", void 0);
    NewClickItem = __decorate([
        ccclass
    ], NewClickItem);
    return NewClickItem;
}(cc.Component));
exports.default = NewClickItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xpc3RMZXZlbC9OZXdDbGlja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJQUNkLHVDQUFNLENBQUE7SUFDTixtQ0FBSSxDQUFBO0lBQ0oseUNBQU8sQ0FBQTtBQUNYLENBQUMsRUFKVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFJakI7QUFHRDtJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXNHQztRQW5HRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixXQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUU3QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBRVIsYUFBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUFpRnZCLENBQUM7SUFoRkcsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLEtBQTJCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDaEI7WUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFD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QUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ25GO2FBQ0k7WUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDbkY7SUFDTCxDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7K0NBQ0U7SUFmWixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0doQztJQUFELG1CQUFDO0NBdEdELEFBc0dDLENBdEd5QyxFQUFFLENBQUMsU0FBUyxHQXNHckQ7a0JBdEdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIFNUQVRVUyB7XG4gICAgVU5MT0NLLFxuICAgIExPQ0ssXG4gICAgQ1VSUkVOVFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xpY2tJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmcmFtZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpZ051bWJlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21hbGxOdW1iZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaW1hZ2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIGlzQ2xpY2sgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3N0YXR1cyA9IFNUQVRVUy5MT0NLO1xuICAgIHByaXZhdGUgX3ZpZXc7XG4gICAgcHJpdmF0ZSBfY291bnQgPSAwO1xuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlldyA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgX2V2ZW50ID0gbmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwiY2xpY2tfaXRlbVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBsZXZlbCA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIGxldCBwYWdlTnVtYmVyID0gY29udGVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMubm9kZS5wYXJlbnQpO1xuICAgICAgICAgICAgX2V2ZW50LmxldmVsID0gMTAgKiBwYWdlTnVtYmVyICsgbGV2ZWw7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChfZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TGV2ZWwobGV2ZWw6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyYW1lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzbWFsbE51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGxldmVsO1xuICAgICAgICB0aGlzLmZyYW1lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiaWdOdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsZXZlbDtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoc3RhdHVzOiBTVEFUVVMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cylcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBTVEFUVVMuVU5MT0NLOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUuc3ByaXRlRnJhbWUgPSB0aGlzLmltYWdlWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hbGxOdW1iZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ051bWJlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNtYWxsTnVtYmVyLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbWFsbE51bWJlci5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IG5ldyBjYy5Db2xvcig0MCwgNDAsIDQwLCAxMDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFUVVMuQ1VSUkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lLnNwcml0ZUZyYW1lID0gdGhpcy5pbWFnZVsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNtYWxsTnVtYmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYmlnTnVtYmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWdOdW1iZXIuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ051bWJlci5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IG5ldyBjYy5Db2xvcig4MywgNDQsIDAsIDEwMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVRVUy5MT0NLOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUuc3ByaXRlRnJhbWUgPSB0aGlzLmltYWdlWzJdO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hbGxOdW1iZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWdOdW1iZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ051bWJlci5jb2xvciA9IG5ldyBjYy5Db2xvcigxNDEsIDE0MSwgMTQxLCAyNTUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmlnTnVtYmVyLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDQwLCA0MCwgNDAsIDEwMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbENvbnZlcnRXb3JsZFBvaW50QVIobm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB3b3JsZENvbnZlcnRMb2NhbFBvaW50QVIobm9kZSwgd29ybGRQb2ludCkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29udmV0T3RoZXJOb2RlU3BhY2VBUihub2RlLCB0YXJnZXROb2RlKSB7XG4gICAgICAgIGlmICghbm9kZSB8fCAhdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSB0aGlzLmxvY2FsQ29udmVydFdvcmxkUG9pbnRBUihub2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRDb252ZXJ0TG9jYWxQb2ludEFSKHRhcmdldE5vZGUsIHdvcmxkUG9pbnQpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZHQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuY29udmV0T3RoZXJOb2RlU3BhY2VBUih0aGlzLm5vZGUsIHRoaXMuX3ZpZXcpO1xuICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJpdGVtMVwiKSB7XG4gICAgICAgICAgICAocG9zLnggPCAtNTAwIHx8IHBvcy54ID4gNTAwKSA/IHRoaXMubm9kZS5vcGFjaXR5ID0gMCA6IHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKHBvcy54IDwgLTc1MCB8fCBwb3MueCA+IDc1MCkgPyB0aGlzLm5vZGUub3BhY2l0eSA9IDAgOiB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==