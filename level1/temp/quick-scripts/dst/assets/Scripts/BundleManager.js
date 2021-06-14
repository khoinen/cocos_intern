
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BundleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0J1bmRsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFxREM7UUFsRFcsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxxQkFBZSxHQUFHLEVBQUUsQ0FBQzs7SUErQ2pDLENBQUM7c0JBckRvQixhQUFhO0lBUWhCLHlCQUFXLEdBQXpCO1FBQ0ksSUFBSSxlQUFhLENBQUMsU0FBUztZQUN2QixPQUFPLGVBQWEsQ0FBQyxTQUFTLENBQUM7YUFDOUI7WUFDRCxlQUFhLENBQUMsU0FBUyxHQUFHLElBQUksZUFBYSxFQUFFLENBQUM7WUFDOUMsT0FBTyxlQUFhLENBQUMsU0FBUyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUix1Q0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxFQUFjO1FBQTVDLGlCQWtDQztRQWxDNkIsbUJBQUEsRUFBQSxTQUFjO1FBQ3hDLEtBQW9CLFVBQWEsRUFBYixLQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWEsRUFDakM7WUFESyxJQUFJLE9BQU8sU0FBQTtZQUVaLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QixPQUFPO2FBQ1Y7U0FDSjtRQUVELEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3pDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO29CQUNqQyxJQUFJLENBQUMsR0FBRyxFQUFFO3dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDdEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUNqQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDOUI7d0JBQ0QsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ3ZCLE9BQU87cUJBQ1Y7b0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBQ0QsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNqQjtpQkFDSTtnQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztJQWxEYyx1QkFBUyxHQUFHLElBQUksQ0FBQztJQUZmLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FxRGpDO0lBQUQsb0JBQUM7Q0FyREQsQUFxREMsQ0FyRDBDLEVBQUUsQ0FBQyxTQUFTLEdBcUR0RDtrQkFyRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tIFwiLi9EYXRhXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bmRsZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcbiAgICBwcml2YXRlIF9idW5kbGUgPSBbXTtcbiAgICBwcml2YXRlIF9wcmVmYWJzID0gW107XG5cbiAgICBwcml2YXRlIF9sYXp5TG9hZEJ1bmRsZSA9IFtdO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBCdW5kbGVNYW5hZ2VyIHtcbiAgICAgICAgaWYgKEJ1bmRsZU1hbmFnZXIuX2luc3RhbmNlKVxuICAgICAgICAgICAgcmV0dXJuIEJ1bmRsZU1hbmFnZXIuX2luc3RhbmNlO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEJ1bmRsZU1hbmFnZXIuX2luc3RhbmNlID0gbmV3IEJ1bmRsZU1hbmFnZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBCdW5kbGVNYW5hZ2VyLl9pbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5ldyAgXG4gICAgZ2V0UHJlZmFiQnlOYW1lKG5hbWU6IHN0cmluZywgY2I6IGFueSA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgX3ByZWZhYiBvZiB0aGlzLl9wcmVmYWJzKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoX3ByZWZhYi5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCBfcHJlZmFiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShuYW1lLCAoZXJyLCBidW5kbGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICBidW5kbGUubG9hZChuYW1lLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkxvYWRlZCBcIiArIHByZWZhYi5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9wcmVmYWJzLmluY2x1ZGVzKHByZWZhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzLnB1c2gocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNiKGVyciwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19