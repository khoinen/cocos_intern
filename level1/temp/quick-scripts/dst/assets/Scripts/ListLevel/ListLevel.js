
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ListLevel/ListLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xpc3RMZXZlbC9MaXN0TGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQTJCO0FBQzNCLGtEQUFzQztBQUN0QywrQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMseUJBQXlCO0FBQ3pCLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixrQ0FBa0M7QUFDbEMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBRXRCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFdkIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztBQUdmO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBME1DO1FBdk1HLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQW1CLElBQUksQ0FBQTtRQUczQixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBcUIsRUFBRSxDQUFDOztJQXlLaEMsQ0FBQztJQXJLRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pFLEdBQUcsR0FB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Q0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwrQkFBVyxHQUFYO0lBRUEsQ0FBQztJQXRNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0NBQ087SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNLO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0U7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0c7SUFqQ1gsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBNN0I7SUFBRCxnQkFBQztDQTFNRCxBQTBNQyxDQTFNc0MsRUFBRSxDQUFDLFNBQVMsR0EwTWxEO2tCQTFNb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhIGZyb20gXCIuLi9EYXRhXCI7XG5pbXBvcnQgRWZmZWN0IGZyb20gXCIuLi9FZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQge1NUQVRVU30gZnJvbSBcIi4vTmV3Q2xpY2tJdGVtXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBU4buVbmcgc+G7kSBsZXZlbCBj4bunYSBnYW1lXG5jb25zdCBUT1RBTF9MRVZFTCA9IDMwO1xuLy8gU+G7kSBsZXZlbCBoaeG7g24gdGjhu4sgdHJvbmcgMSB0cmFuZ1xuY29uc3QgTEVWRUxfUEFHRSA9IDEwO1xuXG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuO1xuXG52YXIgX2dhbWVNYW5hZ2VyID0gbnVsbDtcbnZhciBfdWkgPSBudWxsO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdExldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlBhZ2VWaWV3KVxuICAgIHBhZ2VWaWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBhZ2U6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHVubG9jazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxvY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBjdXJyZW50OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGFkb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc21hbGxJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBiaWdJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGljb246IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2Nsb3NlO1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRJdGVtKCk7XG4gICAgICAgIF9nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIF91aSA9IGNjLmZpbmQoXCJDYW52YXMvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlDb250cm9sbGVyXCIpO1xuICAgICAgICB0aGlzLnNoYWRvdy5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuc2NhbGUgPSAwLjc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIF9nYW1lTWFuYWdlci5fc2VsZWN0ZWRMZXZlbCA9IGRhdGEudW5sb2NrZWRMZXZlbDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2xpY2tfaXRlbVwiLCB0aGlzLm9uQ2xpY2tJdGVtLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lZmZlY3RPcGVuKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgICAgIHZhciBwYWdlVmlldyA9IHRoaXMuY29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwiTGlzdFwiKS5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpO1xuICAgICAgICBpZiAoX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKF9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LmxldmVsICsgMSkgLyAxMCk7XG4gICAgICAgICAgICBwYWdlVmlldy5zZXRDdXJyZW50UGFnZUluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhZ2VWaWV3LnNldEN1cnJlbnRQYWdlSW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJjbGlja19pdGVtXCIsIHRoaXMub25DbGlja0l0ZW0sIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fY2xvc2UpO1xuICAgIH1cblxuICAgIGluaXRJdGVtKCk6IHZvaWQge1xuICAgICAgICBsZXQgcGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBpdGVtO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRPVEFMX0xFVkVMOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoaSArIDEpICUgMTAgPT0gMClcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdJdGVtKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbWFsbEl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvbltpXTtcbiAgICAgICAgICAgIGxldCBzY3JpcHQgPSBpdGVtLmdldENvbXBvbmVudChcIk5ld0NsaWNrSXRlbVwiKTtcbiAgICAgICAgICAgIHNjcmlwdC50aWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2NyaXB0LnNldExldmVsKGkgKyAxKTtcbiAgICAgICAgICAgIHNjcmlwdC5zZXRTdGF0dXMoU1RBVFVTLkxPQ0spO1xuICAgICAgICAgICAgcGFnZS5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSBMRVZFTF9QQUdFICYmIFRPVEFMX0xFVkVMID49IExFVkVMX1BBR0UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKHBhZ2UpO1xuICAgICAgICAgICAgICAgIHBhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhZ2UpO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBUT1RBTF9MRVZFTCAtIDEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChwYWdlKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVubG9ja2VkTGV2ZWwgPSBkYXRhLnVubG9ja2VkTGV2ZWwgKyAxO1xuICAgICAgICAgICAgbGV0IHBhZ2UgPSBNYXRoLmZsb29yKHVubG9ja2VkTGV2ZWwgLyAxMCk7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgaWYgKHBhZ2UgPT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5sb2NrZWRMZXZlbDsgKytpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBpdGVtLmdldENvbXBvbmVudChcIk5ld0NsaWNrSXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LmlzQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB1bmxvY2tlZExldmVsIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldFN0YXR1cyhTVEFUVVMuQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGljay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRTdGF0dXMoU1RBVFVTLlVOTE9DSyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGljay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bVBhZ2UgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBudW1JdGVtID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAobnVtSXRlbSA8IHVubG9ja2VkTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbnVtUGFnZV0uY2hpbGRyZW5bbnVtSXRlbV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBpdGVtLmdldENvbXBvbmVudChcIk5ld0NsaWNrSXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LmlzQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFnZSAqIDEwICsgbnVtSXRlbSA9PSB1bmxvY2tlZExldmVsIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0LnNjYWxlRm9yZXZlcihpdGVtLCAwLjk1LCAxLjA1LCAwLjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldFN0YXR1cyhTVEFUVVMuQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGljay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtSXRlbSAhPSB1bmxvY2tlZExldmVsIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldFN0YXR1cyhTVEFUVVMuVU5MT0NLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC50aWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKytudW1JdGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtSXRlbSA9PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1QYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtSXRlbSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgZWZmZWN0T3BlbigpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5zaGFkb3cpLnRvKDAuMiwge29wYWNpdHk6IDIwMH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuY29udGFpbmVyKS5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge29wYWNpdHk6IDI1NX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8oMC4yLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIGVmZmVjdENsb3NlKGNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjIsIHtvcGFjaXR5OiAwfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGhpcy5jb250YWluZXIpLnBhcmFsbGVsKFxuICAgICAgICAgICAgdHdlZW4oKS50bygwLjIsIHtvcGFjaXR5OiAwfSksXG4gICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge3NjYWxlOiAwLjd9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICApXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgICBsZXQgX2dhbWVNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgX2dhbWVNYW5hZ2VyLnBsYXlDbGlja0F1ZGlvKClcbiAgICAgICAgdGhpcy5lZmZlY3RDbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9jbG9zZSwgMC4zKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSXRlbShldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgdmFyIGxldmVsID0gZXZlbnQubGV2ZWw7XG4gICAgICAgIF9nYW1lTWFuYWdlci5zZWxlY3RMZXZlbChsZXZlbCk7XG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIHByZXZpb3VzUGFnZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5wYWdlVmlldy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XG4gICAgICAgIGlmIChpbmRleCAtIDEgPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNldEN1cnJlbnRQYWdlSW5kZXgoaW5kZXggLSAxKTtcbiAgICB9XG4gICAgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucGFnZVZpZXcuZ2V0Q3VycmVudFBhZ2VJbmRleCgpO1xuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNldEN1cnJlbnRQYWdlSW5kZXgoaW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBpbml0SXRlbU5ldygpOiB2b2lkIHtcblxuICAgIH1cbn1cbiJdfQ==