"use strict";
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