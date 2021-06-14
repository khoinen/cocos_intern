
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Data.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBTSxRQUFRLEdBQUcsMEJBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7QUFFaEQsUUFBQSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQ3ZCLFFBQUEsWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUkzQztJQUFBO0lBOEZBLENBQUM7YUE5Rm9CLElBQUk7SUFhUCxZQUFPLEdBQXJCO1FBQ0ksT0FBTyxRQUFRLEtBQUssU0FBUyxDQUFBO0lBQ2pDLENBQUM7SUFFYSxhQUFRLEdBQXRCLFVBQXVCLElBQVUsRUFBRSxHQUF1QixFQUFFLEVBQW1CO1FBQTVDLG9CQUFBLEVBQUEsTUFBYyxpQkFBUztRQUFFLG1CQUFBLEVBQUEsU0FBbUI7UUFDM0UsSUFBSSxHQUFHLEtBQUssaUJBQVMsRUFBRTtZQUNuQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0QsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNqQjtRQUVELElBQUksTUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsS0FBSyxpQkFBUyxFQUFFO1lBQ3JDLE1BQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNuQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDeEI7UUFFRCxJQUFJLEdBQUcsS0FBSyxvQkFBWSxFQUFFO1lBQ3RCLDBCQUFnQixDQUFDLFdB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LGNBQVMsR0FBRyxpQkFBUyxDQUFDO0lBQ3RCLGlCQUFZLEdBQUcsb0JBQVksQ0FBQztJQUM1Qix1QkFBa0IsR0FBRyx1QkFBdUIsQ0FBQztJQUU3QyxnQkFBVyxHQUFHO1FBQ3hCLEtBQUssRUFBRSxDQUFDO1FBQ1IsYUFBYSxFQUFFLEVBQUU7UUFDakIsT0FBTyxFQUFFLElBQUk7UUFDYixPQUFPLEVBQUUsSUFBSTtRQUNiLFNBQVMsRUFBRSxJQUFJO0tBQ2xCLENBQUE7SUFYZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThGeEI7SUFBRCxXQUFDO0NBOUZELEFBOEZDLElBQUE7a0JBOUZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZCSW5zdGFudE1hbmFnZXIgZnJvbSAnLi9GQkluc3RhbnRNYW5hZ2VyJztcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IHBsYXllcklkID0gRkJJbnN0YW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFBsYXllcklkKClcblxuZXhwb3J0IGNvbnN0IExPQ0FMX0tFWSA9IFwidXNlckRhdGFcIjtcbmV4cG9ydCBjb25zdCBGQUNFQk9PS19LRVkgPSBcImZhY2Vib29rRGF0YVwiO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcbiAgICBwdWJsaWMgc3RhdGljIExPQ0FMX0tFWSA9IExPQ0FMX0tFWTtcbiAgICBwdWJsaWMgc3RhdGljIEZBQ0VCT09LX0tFWSA9IEZBQ0VCT09LX0tFWTtcbiAgICBwdWJsaWMgc3RhdGljIEZBQ0VCT09LX0xPQ0FMX0tFWSA9IFwiZmFjZWJvb2tMb2NhbFVzZXJEYXRhXCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHREYXRhID0ge1xuICAgICAgICBtb25leTogMCxcbiAgICAgICAgdW5sb2NrZWRMZXZlbDogMTgsXG4gICAgICAgIGlzU291bmQ6IHRydWUsXG4gICAgICAgIGlzTXVzaWM6IHRydWUsXG4gICAgICAgIGlzVmlicmF0ZTogdHJ1ZSxcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzTG9jYWwoKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJJZCA9PT0gJ2xvY2FsSWQnXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzYXZlRGF0YShkYXRhOiBKU09OLCBrZXk6IHN0cmluZyA9IExPQ0FMX0tFWSwgY2I6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAoa2V5ID09PSBMT0NBTF9LRVkpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9LRVksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRGF0YS5pc0xvY2FsKCkgJiYga2V5ICE9PSBMT0NBTF9LRVkpIHtcbiAgICAgICAgICAgIERhdGEuc2F2ZURhdGEoZGF0YSwgRGF0YS5MT0NBTF9LRVkpXG4gICAgICAgICAgICByZXR1cm4gY2IgJiYgY2IobnVsbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09IEZBQ0VCT09LX0tFWSkge1xuICAgICAgICAgICAgRkJJbnN0YW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldFBsYXllckRhdGEoZGF0YSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGVyciAmJiBjb25zb2xlLmxvZygnc2F2ZSBmYWNlYm9vayBlcnI6JywgZXJyKVxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShEYXRhLkZBQ0VCT09LX0xPQ0FMX0tFWSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoZXJyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0YShrZXk6IHN0cmluZyA9IExPQ0FMX0tFWSwgY2I6IEZ1bmN0aW9uID0gKC4uLnBhcmFtcykgPT4ge30pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gTE9DQUxfS0VZKSByZXR1cm4gRGF0YS5nZXRMb2NhbERhdGEoY2IpXG4gICAgICAgIGlmIChEYXRhLmlzTG9jYWwoKSAmJiBrZXkgIT09IERhdGEuTE9DQUxfS0VZKSByZXR1cm4gRGF0YS5nZXRMb2NhbERhdGEoY2IpXG4gICAgICAgIGlmIChrZXkgPT09IEZBQ0VCT09LX0tFWSkgcmV0dXJuIERhdGEuZ2V0RmFjZWJvb2tEYXRhKGNiKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9jYWxEYXRhKGNiKSB7XG4gICAgICAgIGxldCBfZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9LRVkpO1xuICAgICAgICBpZiAoX2RhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNiKG51bGwsIEpTT04ucGFyc2UoX2RhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0geyAuLi5EYXRhLmRlZmF1bHREYXRhIH1cbiAgICAgICAgICAgIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRGYWNlYm9va0RhdGEoY2IpIHtcbiAgICAgICAgRkJJbnN0YW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFBsYXllckRhdGEoKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgZmFjZWJvb2sgZGF0YSBlcnInLCBlcnIpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShEYXRhLkZBQ0VCT09LX0xPQ0FMX0tFWSlcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYihudWxsLCBKU09OLnBhcnNlKGRhdGEpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB7IC4uLkRhdGEuZGVmYXVsdERhdGEgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEuZ2V0RGF0YShEYXRhLkxPQ0FMX0tFWSwgKGVyciwgbG9jYWxEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNiKFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5EYXRhLmRlZmF1bHREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxvY2FsRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNiKFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5EYXRhLmRlZmF1bHREYXRhLFxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKExPQ0FMX0tFWSk7XG4gICAgfVxufVxuIl19