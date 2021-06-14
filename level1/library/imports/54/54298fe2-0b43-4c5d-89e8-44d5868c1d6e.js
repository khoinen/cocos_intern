"use strict";
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