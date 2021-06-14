"use strict";
cc._RF.push(module, 'ecffeOqxSREMo+xDLR9m1qE', 'ListLevel');
// Scripts/ListLevel/ListLevel.ts

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
var Data_1 = require("../Data");
var EffectManager_1 = require("../EffectManager");
var NewClickItem_1 = require("./NewClickItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// Tổng số level của game
var TOTAL_LEVEL = 30;
// Số level hiển thị trong 1 trang
var LEVEL_PAGE = 10;
var tween = cc.tween;
var _gameManager = null;
var _ui = null;
var ListLevel = /** @class */ (function (_super) {
    __extends(ListLevel, _super);
    function ListLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.pageView = null;
        _this.page = null;
        _this.unlock = null;
        _this.lock = null;
        _this.current = null;
        _this.shadow = null;
        _this.container = null;
        _this.smallItem = null;
        _this.bigItem = null;
        _this.icon = [];
        return _this;
    }
    ListLevel.prototype.onLoad = function () {
        this.initItem();
        _gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        _ui = cc.find("Canvas/UI").getComponent("UIController");
        this.shadow.opacity = 0;
        // this.container.scale = 0.7;
        this.container.opacity = 0;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            _gameManager._selectedLevel = data.unlockedLevel;
        });
    };
    ListLevel.prototype.onEnable = function () {
        this.node.on("click_item", this.onClickItem, this);
        this.effectOpen();
        this.setStatus();
        var pageView = this.container.getChildByName("List").getComponent(cc.PageView);
        if (_gameManager._levelCurrent) {
            var index = Math.floor((_gameManager._levelCurrent.level + 1) / 10);
            pageView.setCurrentPageIndex(index);
        }
        else {
            pageView.setCurrentPageIndex(0);
        }
    };
    ListLevel.prototype.onDisable = function () {
        this.node.off("click_item", this.onClickItem, this);
        this.unschedule(this._close);
    };
    ListLevel.prototype.initItem = function () {
        var page = cc.instantiate(this.page);
        var count = 0;
        var item;
        for (var i = 0; i < TOTAL_LEVEL; ++i) {
            if ((i + 1) % 10 == 0)
                item = cc.instantiate(this.bigItem);
            else
                item = cc.instantiate(this.smallItem);
            item.children[0].getComponent(cc.Sprite).spriteFrame = this.icon[i];
            var script = item.getComponent("NewClickItem");
            script.tick.active = false;
            script.setLevel(i + 1);
            script.setStatus(NewClickItem_1.STATUS.LOCK);
            page.addChild(item);
            ++count;
            if (count == LEVEL_PAGE && TOTAL_LEVEL >= LEVEL_PAGE) {
                this.content.addChild(page);
                page = cc.instantiate(this.page);
                count = 0;
                if (i == TOTAL_LEVEL - 1) {
                    return;
                }
            }
        }
        this.content.addChild(page);
    };
    ListLevel.prototype.setStatus = function () {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var unlockedLevel = data.unlockedLevel + 1;
            var page = Math.floor(unlockedLevel / 10);
            var count = 0;
            if (page == 0) {
                for (var i = 0; i < unlockedLevel; ++i) {
                    var item = _this.content.children[0].children[i];
                    var script = item.getComponent("NewClickItem");
                    script.isClick = true;
                    if (i == unlockedLevel - 1) {
                        script.setStatus(NewClickItem_1.STATUS.CURRENT);
                        script.tick.active = false;
                    }
                    else {
                        script.setStatus(NewClickItem_1.STATUS.UNLOCK);
                        script.tick.active = true;
                    }
                }
            }
            else {
                var numPage = 0;
                var numItem = 0;
                while (numItem < unlockedLevel) {
                    var item = _this.content.children[numPage].children[numItem];
                    var script = item.getComponent("NewClickItem");
                    script.isClick = true;
                    if (numPage * 10 + numItem == unlockedLevel - 1) {
                        EffectManager_1.default.scaleForever(item, 0.95, 1.05, 0.7);
                        script.setStatus(NewClickItem_1.STATUS.CURRENT);
                        script.tick.active = false;
                        return;
                    }
                    if (numItem != unlockedLevel - 1) {
                        script.setStatus(NewClickItem_1.STATUS.UNLOCK);
                        script.tick.active = true;
                    }
                    ++numItem;
                    if (numItem == 10) {
                        ++numPage;
                        numItem = 0;
                    }
                }
            }
        });
    };
    ListLevel.prototype.effectOpen = function () {
        var _this = this;
        tween(this.shadow).to(0.2, { opacity: 200 })
            .call(function () {
            tween(_this.container).parallel(tween().to(0.2, { opacity: 255 }), tween().to(0.2, { scale: 1 }, { easing: "quartOut" }))
                .start();
        })
            .start();
    };
    ListLevel.prototype.effectClose = function (callback) {
        tween(this.shadow).to(0.2, { opacity: 0 }).start();
        tween(this.container).parallel(tween().to(0.2, { opacity: 0 }), tween().to(0.2, { scale: 0.7 }, { easing: "quartOut" }))
            .call(callback)
            .start();
    };
    ListLevel.prototype.onClose = function () {
        var _this = this;
        var _gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        _gameManager.playClickAudio();
        this.effectClose(function () {
            _this.node.active = false;
        });
        this._close = function () {
            this.node.active = false;
        };
        this.scheduleOnce(this._close, 0.3);
    };
    ListLevel.prototype.onClickItem = function (event) {
        var level = event.level;
        _gameManager.selectLevel(level);
        this.onClose();
    };
    ListLevel.prototype.previousPage = function () {
        var index = this.pageView.getCurrentPageIndex();
        if (index - 1 < 0)
            return;
        this.pageView.setCurrentPageIndex(index - 1);
    };
    ListLevel.prototype.nextPage = function () {
        var index = this.pageView.getCurrentPageIndex();
        this.pageView.setCurrentPageIndex(index + 1);
    };
    ListLevel.prototype.initItemNew = function () {
    };
    __decorate([
        property(cc.Node)
    ], ListLevel.prototype, "content", void 0);
    __decorate([
        property(cc.PageView)
    ], ListLevel.prototype, "pageView", void 0);
    __decorate([
        property(cc.Prefab)
    ], ListLevel.prototype, "page", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "unlock", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "lock", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "current", void 0);
    __decorate([
        property(cc.Node)
    ], ListLevel.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], ListLevel.prototype, "container", void 0);
    __decorate([
        property(cc.Prefab)
    ], ListLevel.prototype, "smallItem", void 0);
    __decorate([
        property(cc.Prefab)
    ], ListLevel.prototype, "bigItem", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "icon", void 0);
    ListLevel = __decorate([
        ccclass
    ], ListLevel);
    return ListLevel;
}(cc.Component));
exports.default = ListLevel;

cc._RF.pop();