"use strict";
cc._RF.push(module, 'c55584XxZ5G/5H9kJJbLNrP', 'Data');
// Scripts/Data.ts

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FACEBOOK_KEY = exports.LOCAL_KEY = void 0;
var FBInstantManager_1 = require("./FBInstantManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playerId = FBInstantManager_1.default.getInstance().getPlayerId();
exports.LOCAL_KEY = "userData";
exports.FACEBOOK_KEY = "facebookData";
var Data = /** @class */ (function () {
    function Data() {
    }
    Data_1 = Data;
    Data.isLocal = function () {
        return playerId === 'localId';
    };
    Data.saveData = function (data, key, cb) {
        if (key === void 0) { key = exports.LOCAL_KEY; }
        if (cb === void 0) { cb = null; }
        if (key === exports.LOCAL_KEY) {
            cc.sys.localStorage.setItem(exports.LOCAL_KEY, JSON.stringify(data));
            cb && cb(null);
        }
        if (Data_1.isLocal() && key !== exports.LOCAL_KEY) {
            Data_1.saveData(data, Data_1.LOCAL_KEY);
            return cb && cb(null);
        }
        if (key === exports.FACEBOOK_KEY) {
            FBInstantManager_1.default.getInstance().setPlayerData(data, function (err) {
                err && console.log('save facebook err:', err);
                cc.sys.localStorage.setItem(Data_1.FACEBOOK_LOCAL_KEY, JSON.stringify(data));
                cb && cb(err);
            });
        }
    };
    Data.getData = function (key, cb) {
        if (key === void 0) { key = exports.LOCAL_KEY; }
        if (cb === void 0) { cb = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
        }; }
        if (key === exports.LOCAL_KEY)
            return Data_1.getLocalData(cb);
        if (Data_1.isLocal() && key !== Data_1.LOCAL_KEY)
            return Data_1.getLocalData(cb);
        if (key === exports.FACEBOOK_KEY)
            return Data_1.getFacebookData(cb);
    };
    Data.getLocalData = function (cb) {
        var _data = cc.sys.localStorage.getItem(exports.LOCAL_KEY);
        if (_data) {
            cb(null, JSON.parse(_data));
        }
        else {
            var data = __assign({}, Data_1.defaultData);
            cb(null, data);
        }
    };
    Data.getFacebookData = function (cb) {
        FBInstantManager_1.default.getInstance().getPlayerData(function (err, data) {
            if (err) {
                console.log('get facebook data err', err);
                var data_1 = cc.sys.localStorage.getItem(Data_1.FACEBOOK_LOCAL_KEY);
                if (data_1) {
                    return cb(null, JSON.parse(data_1));
                }
                return cb(null, __assign({}, Data_1.defaultData));
            }
            if (!data) {
                return Data_1.getData(Data_1.LOCAL_KEY, function (err, localData) {
                    cb(null, __assign(__assign({}, Data_1.defaultData), localData));
                });
            }
            cb(null, __assign(__assign({}, Data_1.defaultData), data));
        });
    };
    Data.prototype.removeData = function () {
        cc.sys.localStorage.removeItem(exports.LOCAL_KEY);
    };
    var Data_1;
    Data.LOCAL_KEY = exports.LOCAL_KEY;
    Data.FACEBOOK_KEY = exports.FACEBOOK_KEY;
    Data.FACEBOOK_LOCAL_KEY = "facebookLocalUserData";
    Data.defaultData = {
        money: 0,
        unlockedLevel: 18,
        isSound: true,
        isMusic: true,
        isVibrate: true,
    };
    Data = Data_1 = __decorate([
        ccclass
    ], Data);
    return Data;
}());
exports.default = Data;

cc._RF.pop();