"use strict";
cc._RF.push(module, '8a866GWI09Fuq0ZAeTmADjR', 'FBInstantManager');
// Scripts/FBInstantManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LEADERBOARD_NAME = 'Top escaptists.';
var DATA_KEY = 'userData';
var GBInstantManager = /** @class */ (function () {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    function GBInstantManager() {
        this.playerId = '';
    }
    GBInstantManager_1 = GBInstantManager;
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    GBInstantManager.getInstance = function () {
        if (!GBInstantManager_1.instance) {
            GBInstantManager_1.instance = new GBInstantManager_1();
        }
        return GBInstantManager_1.instance;
    };
    GBInstantManager.prototype.getPlayerId = function () {
        if (!this.playerId) {
            try {
                this.playerId = FBInstant.player.getID();
            }
            catch (err) {
                this.playerId = 'localId';
            }
        }
        if (this.playerId)
            return this.playerId;
    };
    GBInstantManager.prototype.getShareImg = function (cb) {
        var _this = this;
        if (this.shareImg) {
            return cb(this.shareImg);
        }
        cc.resources.load('Base64/ShareImg', function (err, file) {
            _this.shareImg = file.text;
            cb(_this.shareImg);
        });
    };
    GBInstantManager.prototype.shareGame = function () {
        this.getShareImg(function (img) {
            var sharePlayerID = FBInstant.player.getID();
            FBInstant.shareAsync({
                intent: 'REQUEST',
                image: img,
                text: "Let's play prison escape!",
                data: { sharePlayerID: sharePlayerID },
            });
        });
    };
    GBInstantManager.prototype.invitePlay = function (customData) {
        if (customData === void 0) { customData = { level: 1, playerId: '' }; }
        var postInvite = function (leaderboardName) {
            FBInstant.getLeaderboardAsync(leaderboardName).then(function (leaderboard) {
                return leaderboard.setScoreAsync(customData.level, '');
            }).then(function () {
                FBInstant.updateAsync({
                    action: 'LEADERBOARD',
                    name: leaderboardName,
                    text: FBInstant.player.getName() + " had passed level " + customData.level + " invite you to play Escape Prison",
                }).then(function () {
                    cc.log('send invite - update leaderboard');
                }).catch(function (err) {
                    console.log('errr', err);
                });
            }).catch(function (err) {
                console.log('err', err);
            });
        };
        var contextFunc = FBInstant.context.chooseAsync;
        var param = [];
        if (customData.playerId) {
            contextFunc = FBInstant.context.createAsync;
            param.push(customData.playerId);
        }
        contextFunc.apply(void 0, param).then(function () {
            var leaderboardName = LEADERBOARD_NAME + FBInstant.context.getID();
            postInvite(leaderboardName);
        }).catch(function (err) {
            if (err === void 0) { err = null; }
            console.log('fail?', err);
        });
    };
    GBInstantManager.prototype.getConnectedPlayers = function (cb) {
        try {
            FBInstant.player.getConnectedPlayersAsync().then(function (players) {
                var data = players.map(function (p) {
                    return {
                        id: p.getID(),
                        name: p.getName(),
                        photo: p.getPhoto()
                    };
                });
                cb(data);
            }).catch(function (err) {
                console.log('get list fail', err);
            });
        }
        catch (err) {
            cc.log('error:', err);
        }
    };
    GBInstantManager.prototype.setPlayerData = function (data, cb) {
        try {
            if (!FBInstant)
                return cb(null);
        }
        catch (err) {
            return cb(null);
        }
        var saveData = {};
        saveData[DATA_KEY] = data;
        FBInstant.player.setDataAsync(saveData).then(function () {
            cb(null);
        }).catch(function (err) {
            cb(err);
        });
    };
    GBInstantManager.prototype.getPlayerData = function (cb) {
        try {
            if (!FBInstant)
                return cb(null, null);
        }
        catch (err) {
            return cb(null, null);
        }
        FBInstant.player.getDataAsync([DATA_KEY]).then(function (data) {
            cb(null, data[DATA_KEY]);
        }).catch(function (err) {
            cb(err, null);
        });
    };
    var GBInstantManager_1;
    GBInstantManager = GBInstantManager_1 = __decorate([
        ccclass
    ], GBInstantManager);
    return GBInstantManager;
}());
exports.default = GBInstantManager;

cc._RF.pop();