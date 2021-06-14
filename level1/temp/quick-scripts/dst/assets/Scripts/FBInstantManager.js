
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FBInstantManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZCSW5zdGFudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLGdCQUFnQixHQUFHLGlCQUFpQixDQUFBO0FBQzFDLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQTtBQUczQjtJQU1JOzs7T0FHRztJQUNIO1FBTlEsYUFBUSxHQUFHLEVBQUUsQ0FBQTtJQU1HLENBQUM7eUJBVlIsZ0JBQWdCO0lBWWpDOzs7OztPQUtHO0lBQ1csNEJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsa0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzVCLGtCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFnQixFQUFFLENBQUM7U0FDdEQ7UUFFRCxPQUFPLGtCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRU0sc0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJO2dCQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTthQUMzQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFBO2FBQzVCO1NBQ0o7UUFHRCxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQzNDLENBQUM7SUFFTyxzQ0FBVyxHQUFuQixVQUFvQixFQUFFO1FBQXRCLGlCQVNDO1FBUkcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzNCO1FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUMzQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDekIsRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBQyxHQUFHO1lBQ2pCLElBQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFOUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztnQkFDakIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLElBQUksRUFBRSxFQUFFLGFBQWEsZUFBQSxFQUFFO2FBQzFCLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLHFDQUFVLEdBQWpCLFVBQWtCLFVBQW1DO1FBQW5DLDJCQUFBLEVBQUEsZUFBWSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUM7UUFDakQsSUFBTSxVQUFVLEdBQUcsVUFBQyxlQUFlO1lBQy9CLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDekIsZUFBZSxDQUNsQixDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7Z0JBQ2YsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDMUQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLFNBQVMsQ0FBQyxXQUFXLENBQUM7b0JBQ2xCLE1BQU0sRUFBRSxhQUFhO29CQUNyQixJQUFJLEVBQUUsZUFBZTtvQkFDckIsSUFBSSxFQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLDBCQUFxQixVQUFVLENBQUMsS0FBSyxzQ0FBbUM7aUJBQzlHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0osRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO2dCQUM5QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUM1QixDQUFDLENBQUMsQ0FBQTtZQUVOLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUE7UUFFRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQTtRQUMvQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUE7UUFFaEIsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ3JCLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQTtZQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUNsQztRQUVELFdBQVcsZUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sZUFBZSxHQUFHLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDcEUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVE7WUFBUixvQkFBQSxFQUFBLFVBQVE7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSw4Q0FBbUIsR0FBMUIsVUFBMkIsRUFBRTtRQUN6QixJQUFJO1lBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87Z0JBQ3BELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO29CQUN0QixPQUFPO3dCQUNILEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO3dCQUNiLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO3dCQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtxQkFDdEIsQ0FBQTtnQkFDTCxDQUFDLENBQUMsQ0FBQTtnQkFFRixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1NBQ0w7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3hCO0lBQ0wsQ0FBQztJQUVNLHdDQUFhLEdBQXBCLFVBQXFCLElBQUksRUFBRSxFQUFFO1FBQ3pCLElBQUk7WUFDQSxJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNsQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDbEI7UUFFRCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDbkIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUV6QixTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHdDQUFhLEdBQXBCLFVBQXFCLEVBQUU7UUFDbkIsSUFBSTtZQUNBLElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUN4QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ3hCO1FBRUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDaEQsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBdEpnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVKcEM7SUFBRCx1QkFBQztDQXZKRCxBQXVKQyxJQUFBO2tCQXZKb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBMRUFERVJCT0FSRF9OQU1FID0gJ1RvcCBlc2NhcHRpc3RzLidcclxuY29uc3QgREFUQV9LRVkgPSAndXNlckRhdGEnXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQkluc3RhbnRNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHQkluc3RhbnRNYW5hZ2VyO1xyXG5cclxuICAgIHByaXZhdGUgc2hhcmVJbWdcclxuICAgIHByaXZhdGUgcGxheWVySWQgPSAnJ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFNpbmdsZXRvbidzIGNvbnN0cnVjdG9yIHNob3VsZCBhbHdheXMgYmUgcHJpdmF0ZSB0byBwcmV2ZW50IGRpcmVjdFxyXG4gICAgICogY29uc3RydWN0aW9uIGNhbGxzIHdpdGggdGhlIGBuZXdgIG9wZXJhdG9yLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RhdGljIG1ldGhvZCB0aGF0IGNvbnRyb2xzIHRoZSBhY2Nlc3MgdG8gdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIGxldCB5b3Ugc3ViY2xhc3MgdGhlIFNpbmdsZXRvbiBjbGFzcyB3aGlsZSBrZWVwaW5nXHJcbiAgICAgKiBqdXN0IG9uZSBpbnN0YW5jZSBvZiBlYWNoIHN1YmNsYXNzIGFyb3VuZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHQkluc3RhbnRNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIUdCSW5zdGFudE1hbmFnZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgR0JJbnN0YW50TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBHQkluc3RhbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gR0JJbnN0YW50TWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVySWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcklkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcklkID0gRkJJbnN0YW50LnBsYXllci5nZXRJRCgpXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJJZCA9ICdsb2NhbElkJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJJZCkgcmV0dXJuIHRoaXMucGxheWVySWRcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNoYXJlSW1nKGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVJbWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKHRoaXMuc2hhcmVJbWcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgnQmFzZTY0L1NoYXJlSW1nJywgKGVyciwgZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlSW1nID0gZmlsZS50ZXh0XHJcbiAgICAgICAgICAgIGNiKHRoaXMuc2hhcmVJbWcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hhcmVHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U2hhcmVJbWcoKGltZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFyZVBsYXllcklEID0gRkJJbnN0YW50LnBsYXllci5nZXRJRCgpXHJcblxyXG4gICAgICAgICAgICBGQkluc3RhbnQuc2hhcmVBc3luYyh7XHJcbiAgICAgICAgICAgICAgICBpbnRlbnQ6ICdSRVFVRVNUJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxldCdzIHBsYXkgcHJpc29uIGVzY2FwZSFcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgc2hhcmVQbGF5ZXJJRCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludml0ZVBsYXkoY3VzdG9tRGF0YT17bGV2ZWw6IDEsIHBsYXllcklkOiAnJ30pIHtcclxuICAgICAgICBjb25zdCBwb3N0SW52aXRlID0gKGxlYWRlcmJvYXJkTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBGQkluc3RhbnQuZ2V0TGVhZGVyYm9hcmRBc3luYyhcclxuICAgICAgICAgICAgICAgIGxlYWRlcmJvYXJkTmFtZVxyXG4gICAgICAgICAgICApLnRoZW4oKGxlYWRlcmJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVhZGVyYm9hcmQuc2V0U2NvcmVBc3luYyhjdXN0b21EYXRhLmxldmVsLCAnJylcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBGQkluc3RhbnQudXBkYXRlQXN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ0xFQURFUkJPQVJEJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBsZWFkZXJib2FyZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7RkJJbnN0YW50LnBsYXllci5nZXROYW1lKCl9IGhhZCBwYXNzZWQgbGV2ZWwgJHtjdXN0b21EYXRhLmxldmVsfSBpbnZpdGUgeW91IHRvIHBsYXkgRXNjYXBlIFByaXNvbmAsXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ3NlbmQgaW52aXRlIC0gdXBkYXRlIGxlYWRlcmJvYXJkJylcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJycicsIGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHRGdW5jID0gRkJJbnN0YW50LmNvbnRleHQuY2hvb3NlQXN5bmNcclxuICAgICAgICBjb25zdCBwYXJhbSA9IFtdXHJcblxyXG4gICAgICAgIGlmIChjdXN0b21EYXRhLnBsYXllcklkKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRGdW5jID0gRkJJbnN0YW50LmNvbnRleHQuY3JlYXRlQXN5bmNcclxuICAgICAgICAgICAgcGFyYW0ucHVzaChjdXN0b21EYXRhLnBsYXllcklkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dEZ1bmMoLi4ucGFyYW0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsZWFkZXJib2FyZE5hbWUgPSBMRUFERVJCT0FSRF9OQU1FICsgRkJJbnN0YW50LmNvbnRleHQuZ2V0SUQoKVxyXG4gICAgICAgICAgICBwb3N0SW52aXRlKGxlYWRlcmJvYXJkTmFtZSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyPW51bGwpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWw/JywgZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbm5lY3RlZFBsYXllcnMoY2IpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBGQkluc3RhbnQucGxheWVyLmdldENvbm5lY3RlZFBsYXllcnNBc3luYygpLnRoZW4ocGxheWVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcGxheWVycy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHAuZ2V0SUQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcC5nZXROYW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBwLmdldFBob3RvKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjYihkYXRhKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBsaXN0IGZhaWwnLCBlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygnZXJyb3I6JywgZXJyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGxheWVyRGF0YShkYXRhLCBjYikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghRkJJbnN0YW50KSByZXR1cm4gY2IobnVsbClcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHt9XHJcbiAgICAgICAgc2F2ZURhdGFbREFUQV9LRVldID0gZGF0YVxyXG5cclxuICAgICAgICBGQkluc3RhbnQucGxheWVyLnNldERhdGFBc3luYyhzYXZlRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNiKG51bGwpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjYihlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBsYXllckRhdGEoY2IpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIUZCSW5zdGFudCkgcmV0dXJuIGNiKG51bGwsIG51bGwpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCBudWxsKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRkJJbnN0YW50LnBsYXllci5nZXREYXRhQXN5bmMoW0RBVEFfS0VZXSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjYihudWxsLCBkYXRhW0RBVEFfS0VZXSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNiKGVyciwgbnVsbClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=