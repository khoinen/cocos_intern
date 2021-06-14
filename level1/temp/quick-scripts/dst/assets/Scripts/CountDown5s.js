
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CountDown5s.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7be24qOSP5BCqev62sqCXxY', 'CountDown5s');
// Scripts/CountDown5s.ts

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
var EventManager_1 = require("./EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TIME = 5;
var CountDown5s = /** @class */ (function (_super) {
    __extends(CountDown5s, _super);
    function CountDown5s() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countDown = null;
        return _this;
    }
    CountDown5s.prototype.onEnable = function () {
        this.runCountDown(TIME);
    };
    CountDown5s.prototype.onDisable = function () {
        this.stopCountDown();
    };
    CountDown5s.prototype.runCountDown = function (second) {
        var start = Date.now();
        var end = start + second * 1000;
        var temp = second;
        this.countDown = function () {
            var milisecond = Date.now() - start;
            var percent = 1 - (1 / ((second * 1000) / (milisecond)));
            this.node.getComponent(cc.Sprite).fillRange = percent;
            this.node.getChildByName("Second").getComponent(cc.Label).string = Math.floor(6 - milisecond / 1000);
            if (percent < -0.009) {
                this.node.getComponent(cc.Sprite).fillRange = 0;
                var gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
                var currentScene = gameManager._currentScene;
                gameManager._ui.showUIContinue(false);
                if (currentScene) {
                    EventManager_1.default.sendRequestPlayStageBegin(currentScene);
                }
                this.unschedule(this.countDown);
            }
        };
        this.schedule(this.countDown, 0.01);
    };
    CountDown5s.prototype.stopCountDown = function () {
        this.unschedule(this.countDown);
        console.log("%cStop CountDown", "color:orange");
    };
    CountDown5s = __decorate([
        ccclass
    ], CountDown5s);
    return CountDown5s;
}(cc.Component));
exports.default = CountDown5s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvdW50RG93bjVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUdwQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUM7QUFFZjtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTRDQztRQTFDVyxlQUFTLEdBQUcsSUFBSSxDQUFDOztJQTBDN0IsQ0FBQztJQXpDRyw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLE1BQWM7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFckcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQ3BCO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM1RSxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO2dCQUU3QyxXQUFXLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxZQUFZLEVBQ2hCO29CQUNJLHNCQUFZLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3hEO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBM0NnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNEMvQjtJQUFELGtCQUFDO0NBNUNELEFBNENDLENBNUN3QyxFQUFFLENBQUMsU0FBUyxHQTRDcEQ7a0JBNUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9FdmVudE1hbmFnZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgVElNRSA9IDU7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnREb3duNXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBjb3VudERvd24gPSBudWxsO1xuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJ1bkNvdW50RG93bihUSU1FKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcENvdW50RG93bigpO1xuICAgIH1cblxuICAgIHJ1bkNvdW50RG93bihzZWNvbmQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyBzZWNvbmQgKiAxMDAwO1xuICAgICAgICB2YXIgdGVtcCA9IHNlY29uZDtcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSBmdW5jdGlvbiAoKTogdm9pZCB7XG4gICAgICAgICAgICB2YXIgbWlsaXNlY29uZCA9IERhdGUubm93KCkgLSBzdGFydDtcbiAgICAgICAgICAgIHZhciBwZXJjZW50ID0gMSAtICgxIC8gKChzZWNvbmQgKiAxMDAwKSAvIChtaWxpc2Vjb25kKSkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gcGVyY2VudDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNlY29uZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGguZmxvb3IoNiAtIG1pbGlzZWNvbmQgLyAxMDAwKTtcblxuICAgICAgICAgICAgaWYgKHBlcmNlbnQgPCAtMC4wMDkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IDA7XG5cbiAgICAgICAgICAgICAgICB2YXIgZ2FtZU1hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U2NlbmUgPSBnYW1lTWFuYWdlci5fY3VycmVudFNjZW5lO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGdhbWVNYW5hZ2VyLl91aS5zaG93VUlDb250aW51ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY2VuZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZW5kUmVxdWVzdFBsYXlTdGFnZUJlZ2luKGN1cnJlbnRTY2VuZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50RG93biwgMC4wMSk7ICAgICBcbiAgICB9XG5cbiAgICBzdG9wQ291bnREb3duKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudERvd24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiVjU3RvcCBDb3VudERvd25cIiwgXCJjb2xvcjpvcmFuZ2VcIik7XG4gICAgfVxufVxuIl19