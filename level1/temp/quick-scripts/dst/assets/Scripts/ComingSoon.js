
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ComingSoon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54298/iC0NMXYnoRNWGjB1u', 'ComingSoon');
// Scripts/ComingSoon.ts

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
var ComingSoon = /** @class */ (function (_super) {
    __extends(ComingSoon, _super);
    function ComingSoon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this.money = null;
        _this._gameManager = null;
        _this._data = null;
        return _this;
    }
    ComingSoon.prototype.start = function () {
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
    };
    ComingSoon.prototype.onHome = function () {
        this._gameManager.onHome();
        this.node.active = false;
    };
    ComingSoon.prototype.onReplay = function () {
        this._gameManager.onReplay();
        this.node.active = false;
    };
    ComingSoon.prototype.onEnable = function () {
        var _this = this;
        this.text.scale = 7;
        this.text.opacity = 0;
        tween(this.text).parallel(tween().to(1, { scale: 1 }, { easing: "cubicIn" }), tween().to(1, { opacity: 255 }, { easing: "cubicIn" }))
            .start();
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            _this._data = data;
            _this.money.string = _this._data.money;
        });
        // tween(this.node).delay(1)
        //     .call(() => {
        //         this.addMoney(150);
        //     })
        //     .start();
    };
    ComingSoon.prototype.addMoney = function (money) {
        var _this = this;
        var direction = money < 0 ? -1 : 1;
        if (money == 0) {
            return;
        }
        else {
            tween(this.money.node).repeat(money * direction / 3, tween().call(function () {
                _this.money.string = (parseInt(_this.money.string) + 3 * direction).toString();
            })
                .delay(0.03))
                .call(function () {
                Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
                    _this._data = data;
                    _this._data.money += money;
                    _this.money.string = _this._data.money;
                    Data_1.default.saveData(_this._data, Data_1.default.FACEBOOK_KEY);
                });
            })
                .start();
        }
    };
    __decorate([
        property(cc.Node)
    ], ComingSoon.prototype, "text", void 0);
    __decorate([
        property(cc.Label)
    ], ComingSoon.prototype, "money", void 0);
    ComingSoon = __decorate([
        ccclass
    ], ComingSoon);
    return ComingSoon;
}(cc.Component));
exports.default = ComingSoon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbWluZ1Nvb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBSXBCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFHdkI7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzRUM7UUFuRUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRWYsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUE2RHpCLENBQUM7SUEzREcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FDakIsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUM5QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQ3JEO2FBQ0EsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFJLENBQUMsT0FBTyxDQUFDLGNBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUN0QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNILDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsOEJBQThCO1FBQzlCLFNBQVM7UUFDVCxnQkFBZ0I7SUFDcEIsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQXRCLGlCQXlCQztRQXhCRyxJQUFNLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRXBDLElBQUksS0FBSyxJQUFJLENBQUMsRUFDZDtZQUNJLE9BQU87U0FDVjthQUVEO1lBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUMvQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakYsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDZjtpQkFDQSxJQUFJLENBQUM7Z0JBQ0YsY0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7b0JBQ3RDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO29CQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNyQyxjQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsY0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQWxFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0k7SUFOTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBc0U5QjtJQUFELGlCQUFDO0NBdEVELEFBc0VDLENBdEV1QyxFQUFFLENBQUMsU0FBUyxHQXNFbkQ7a0JBdEVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuXG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29taW5nU29vbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBtb25leTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ2FtZU1hbmFnZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2RhdGEgPSBudWxsO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICB9XG4gICAgXG4gICAgb25Ib21lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5vbkhvbWUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uUmVwbGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5vblJlcGxheSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dC5zY2FsZSA9IDc7XG4gICAgICAgIHRoaXMudGV4dC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdHdlZW4odGhpcy50ZXh0KS5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICB0d2VlbigpLnRvKDEsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSksXG4gICAgICAgICAgICAgICAgdHdlZW4oKS50bygxLCB7b3BhY2l0eTogMjU1fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGFcbiAgICAgICAgICAgIHRoaXMubW9uZXkuc3RyaW5nID0gdGhpcy5fZGF0YS5tb25leTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMSlcbiAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFkZE1vbmV5KDE1MCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgYWRkTW9uZXkobW9uZXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBtb25leSA8IDAgPyAtMSA6IDFcblxuICAgICAgICBpZiAobW9uZXkgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR3ZWVuKHRoaXMubW9uZXkubm9kZSkucmVwZWF0KG1vbmV5ICogZGlyZWN0aW9uIC8gMyxcbiAgICAgICAgICAgICAgICB0d2VlbigpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbmV5LnN0cmluZyA9IChwYXJzZUludCh0aGlzLm1vbmV5LnN0cmluZykgKyAzICogZGlyZWN0aW9uKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMDMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRGF0YS5nZXREYXRhKERhdGEuRkFDRUJPT0tfS0VZLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEubW9uZXkgKz0gbW9uZXk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uZXkuc3RyaW5nID0gdGhpcy5fZGF0YS5tb25leTtcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5zYXZlRGF0YSh0aGlzLl9kYXRhLCBEYXRhLkZBQ0VCT09LX0tFWSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=