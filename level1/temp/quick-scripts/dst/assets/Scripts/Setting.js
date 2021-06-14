
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f46du+rlVPAasD8jvXHQxB', 'Setting');
// Scripts/Setting.ts

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
var Data_1 = require("./Data");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var Setting = /** @class */ (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound = null;
        _this.music = null;
        _this.shadow = null;
        _this.container = null;
        _this._data = null;
        _this._gameManager = null;
        return _this;
    }
    Setting.prototype.onLoad = function () {
        this.shadow.opacity = 0;
        this.container.scale = 0.7;
        this.container.opacity = 0;
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    };
    Setting.prototype.onEnable = function () {
        var _this = this;
        this.node.on("touchend", this.onClose, this);
        this.effectOpen();
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        Data_1.default.getData(Data_1.default.LOCAL_KEY, function (err, data) {
            _this._data = data;
            _this.music.isChecked = _this._data.isMusic;
            _this.sound.isChecked = _this._data.isSound;
        });
    };
    Setting.prototype.onDisable = function () {
        this.node.off("touchend", this.onClose, this);
    };
    Setting.prototype.effectOpen = function () {
        var _this = this;
        tween(this.shadow).to(0.2, { opacity: 200 })
            .call(function () {
            tween(_this.container).parallel(tween().to(0.2, { opacity: 255 }), tween().to(0.2, { scale: 1 }, { easing: "quartOut" }))
                .start();
        })
            .start();
    };
    Setting.prototype.effectClose = function (callback) {
        tween(this.shadow).to(0.2, { opacity: 0 }).start();
        tween(this.container).parallel(tween().to(0.2, { opacity: 0 }), tween().to(0.2, { scale: 0.7 }, { easing: "quartOut" }))
            .call(callback)
            .start();
    };
    Setting.prototype.onClose = function () {
        var _this = this;
        this.effectClose(function () {
            _this.node.active = false;
        });
    };
    Setting.prototype.onChangeToggle = function (event) {
        switch (event.target.parent.name) {
            case "ToggleSound":
                this._data.isSound = event.isChecked;
                Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
                break;
            case "ToggleMusic":
                this._data.isMusic = event.isChecked;
                Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
                if (event.isChecked) {
                    this.playMusic();
                }
                else {
                    this.stopMusic();
                }
                break;
        }
    };
    Setting.prototype.onRestoreSetting = function () {
        this._data.isSound = true;
        this._data.isMusic = true;
        this.sound.isChecked = this._data.isSound;
        this.music.isChecked = this._data.isMusic;
        Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
    };
    Setting.prototype.stopMusic = function () {
        this._gameManager.stopAudioBG();
    };
    Setting.prototype.playMusic = function () {
        this._gameManager.playAudioBG();
    };
    __decorate([
        property(cc.Toggle)
    ], Setting.prototype, "sound", void 0);
    __decorate([
        property(cc.Toggle)
    ], Setting.prototype, "music", void 0);
    __decorate([
        property(cc.Node)
    ], Setting.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], Setting.prototype, "container", void 0);
    Setting = __decorate([
        ccclass
    ], Setting);
    return Setting;
}(cc.Component));
exports.default = Setting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQTBCO0FBR3BCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFdkI7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF3R0M7UUF0R0csV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUVsQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2Isa0JBQVksR0FBRyxJQUFJLENBQUM7O0lBMEZoQyxDQUFDO0lBeEZHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMEJBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU5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QUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwQjtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMxQyxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQXJHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBWFQsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXdHM0I7SUFBRCxjQUFDO0NBeEdELEFBd0dDLENBeEdvQyxFQUFFLENBQUMsU0FBUyxHQXdHaEQ7a0JBeEdvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4vRWZmZWN0TWFuYWdlclwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHNvdW5kOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICBtdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNoYWRvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ2FtZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNoYWRvdy5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2NhbGUgPSAwLjc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hlbmRcIiwgdGhpcy5vbkNsb3NlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lZmZlY3RPcGVuKCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgXG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkxPQ0FMX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGFcbiAgICAgICAgICAgIHRoaXMubXVzaWMuaXNDaGVja2VkID0gdGhpcy5fZGF0YS5pc011c2ljO1xuICAgICAgICAgICAgdGhpcy5zb3VuZC5pc0NoZWNrZWQgPSB0aGlzLl9kYXRhLmlzU291bmQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcInRvdWNoZW5kXCIsIHRoaXMub25DbG9zZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgZWZmZWN0T3BlbigpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5zaGFkb3cpLnRvKDAuMiwge29wYWNpdHk6IDIwMH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuY29udGFpbmVyKS5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge29wYWNpdHk6IDI1NX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8oMC4yLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIGVmZmVjdENsb3NlKGNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjIsIHtvcGFjaXR5OiAwfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGhpcy5jb250YWluZXIpLnBhcmFsbGVsKFxuICAgICAgICAgICAgdHdlZW4oKS50bygwLjIsIHtvcGFjaXR5OiAwfSksXG4gICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge3NjYWxlOiAwLjd9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICApXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVmZmVjdENsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VUb2dnbGUoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQucGFyZW50Lm5hbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJUb2dnbGVTb3VuZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEuaXNTb3VuZCA9IGV2ZW50LmlzQ2hlY2tlZDtcbiAgICAgICAgICAgICAgICBEYXRhLnNhdmVEYXRhKHRoaXMuX2RhdGEsIERhdGEuTE9DQUxfS0VZKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUb2dnbGVNdXNpY1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEuaXNNdXNpYyA9IGV2ZW50LmlzQ2hlY2tlZDtcbiAgICAgICAgICAgICAgICBEYXRhLnNhdmVEYXRhKHRoaXMuX2RhdGEsIERhdGEuTE9DQUxfS0VZKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNDaGVja2VkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wTXVzaWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc3RvcmVTZXR0aW5nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhLmlzU291bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kYXRhLmlzTXVzaWMgPSB0cnVlO1xuICAgICAgICB0aGlzLnNvdW5kLmlzQ2hlY2tlZCA9IHRoaXMuX2RhdGEuaXNTb3VuZDtcbiAgICAgICAgdGhpcy5tdXNpYy5pc0NoZWNrZWQgPSB0aGlzLl9kYXRhLmlzTXVzaWM7XG4gICAgICAgIERhdGEuc2F2ZURhdGEodGhpcy5fZGF0YSwgRGF0YS5MT0NBTF9LRVkpO1xuICAgIH1cblxuICAgIHN0b3BNdXNpYygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuc3RvcEF1ZGlvQkcoKTtcbiAgICB9XG5cbiAgICBwbGF5TXVzaWMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlBdWRpb0JHKCk7XG4gICAgfVxufVxuIl19