"use strict";
cc._RF.push(module, '7645afhoy5Be4b1dv1hvYmb', 'BundleManager');
// Scripts/BundleManager.ts

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
var BundleManager = /** @class */ (function (_super) {
    __extends(BundleManager, _super);
    function BundleManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bundle = [];
        _this._prefabs = [];
        _this._lazyLoadBundle = [];
        return _this;
    }
    BundleManager_1 = BundleManager;
    BundleManager.getInstance = function () {
        if (BundleManager_1._instance)
            return BundleManager_1._instance;
        else {
            BundleManager_1._instance = new BundleManager_1();
            return BundleManager_1._instance;
        }
    };
    // New  
    BundleManager.prototype.getPrefabByName = function (name, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        for (var _i = 0, _a = this._prefabs; _i < _a.length; _i++) {
            var _prefab = _a[_i];
            if (_prefab.name == name) {
                cb && cb(null, _prefab);
                return;
            }
        }
        cc.assetManager.loadBundle(name, function (err, bundle) {
            if (!err) {
                bundle.load(name, cc.Prefab, function (err, prefab) {
                    if (!err) {
                        console.error("Loaded " + prefab.name);
                        if (!_this._prefabs.includes(prefab)) {
                            _this._prefabs.push(prefab);
                        }
                        cb && cb(null, prefab);
                        return;
                    }
                    console.log(err);
                });
                return;
            }
            if (cb) {
                console.error(err);
                cb(err, null);
            }
            else {
                console.error(err);
            }
        });
    };
    var BundleManager_1;
    BundleManager._instance = null;
    BundleManager = BundleManager_1 = __decorate([
        ccclass
    ], BundleManager);
    return BundleManager;
}(cc.Component));
exports.default = BundleManager;

cc._RF.pop();