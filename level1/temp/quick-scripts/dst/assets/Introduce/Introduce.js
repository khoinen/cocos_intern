
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Introduce/Introduce.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd019bXxFwlPZZ7uJAYL0AVJ', 'Introduce');
// Introduce/Introduce.ts

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
var EffectManager_1 = require("../Scripts/EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var storyText = [["STICKMAN", "INVOLVED", "IN", "A", "BANK", "ROBBERY", "HE", "WAS", "ARRESTED", "IN", "A", "SECRET", "PRISON", "IN", "AMERICA"],
    ["AFTER", "ESCAPING", "FROM", "THE", "PRISON,", "THE", "STICKMAN", "LIVED", "A", "LIFE", "OF", "LUXURY.", "\nBUT", "THERE", "WAS", "AN", "ENEMY", "WHO", "WAS", "LIVING", "IN", "A", "PRISON", "UNDER", "THE", "SEA.", "\nPUNISHING", "HIM", "WAS", "THE", "NEXT", "OBJECTIVE."],
    ["AFTER", "ESCAPING", "TO", "THE", "ISLAND,", "THE", "STICKMAN", "STOLE", "A", "JEWEL", "FROM", "AN", "ABORIGINAL", "TRIBE.", "HE", "WAS", "ONCE", "AGAIN", "ARRESTED"]];
var tween = cc.tween;
var introIndex = 0;
var Introduce = /** @class */ (function (_super) {
    __extends(Introduce, _super);
    function Introduce() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prisonScene = [];
        _this.next = null;
        _this.story = null;
        _this.storyLabel = null;
        _this.left = [];
        _this.right = [];
        _this.countWord = 0;
        return _this;
    }
    // private introIndex = 0;
    Introduce.prototype.onLoad = function () {
        this.resetIntroduce();
    };
    Introduce.prototype.onEnable = function () {
        this.runAnimation();
    };
    Introduce.prototype.onDisable = function () {
        this.resetIntroduce();
    };
    Introduce.prototype.resetIntroduce = function () {
        this.prisonScene[0].node.position = cc.v3(-450, 1200);
        this.prisonScene[1].node.position = cc.v3(1200, 133);
        this.next.opacity = 0;
        this.next.scale = 0;
        this.story.opacity = 0;
        this.storyLabel.string = "";
    };
    Introduce.prototype.runAnimation = function () {
        var _this = this;
        tween(this.node).call(function () {
            tween(_this.prisonScene[0].node).to(0.3, { position: cc.v3(0, 385) }).start();
        })
            .delay(0.3)
            .call(function () {
            tween(_this.prisonScene[1].node).to(0.3, { position: cc.v3(0, 220) }).start();
        })
            .delay(0.5)
            .call(function () {
            _this.story.active = true;
            _this.story.scale = 0;
            _this.story.opacity = 0;
            tween(_this.story)
                .to(0.3, { scaleX: 1.2, scaleY: 1.5, opacity: 255 }, { easing: "quadIn" })
                .call(function () {
                _this.schedule(function () {
                    switch (introIndex) {
                        case 0:
                            _this.storyLabel.fontSize = 30;
                            _this.storyLabel.lineHeight = 30;
                            break;
                        case 1:
                            _this.storyLabel.fontSize = 22;
                            _this.storyLabel.lineHeight = 22;
                            break;
                        case 2:
                            _this.storyLabel.fontSize = 28;
                            _this.storyLabel.lineHeight = 28;
                            break;
                    }
                    if (_this.countWord < storyText[introIndex].length) {
                        _this.storyLabel.string += storyText[introIndex][_this.countWord] + " ";
                    }
                    else {
                        cc.log("story", "end");
                        EffectManager_1.default.showButton(_this.next, 0.3);
                    }
                    _this.countWord++;
                }, 0.1, storyText[introIndex].length);
            })
                .start();
        })
            .start();
        // tween(this.prisonScene[0]).to(0.3, {position: cc.v3(0, 385)}).start();
        // tween(this.prisonScene[1]).delay(0.8).to(0.3, {position: cc.v3(0, 133)}).start();
    };
    Introduce.prototype.startGame = function () {
        this.node.active = false;
        cc.find("Canvas/GameManager").getComponent("GameManager").startGame();
    };
    Introduce.prototype.setIntro = function (level) {
        var length = this.left.length;
        introIndex = Math.floor(level / 10);
        this.countWord = 0;
        for (var i = 0; i < length; ++i) {
            if (introIndex == i) {
                this.prisonScene[0].spriteFrame = this.left[i];
                this.prisonScene[1].spriteFrame = this.right[i];
                return;
            }
        }
    };
    __decorate([
        property([cc.Sprite])
    ], Introduce.prototype, "prisonScene", void 0);
    __decorate([
        property(cc.Node)
    ], Introduce.prototype, "next", void 0);
    __decorate([
        property(cc.Node)
    ], Introduce.prototype, "story", void 0);
    __decorate([
        property(cc.Label)
    ], Introduce.prototype, "storyLabel", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Introduce.prototype, "left", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Introduce.prototype, "right", void 0);
    Introduce = __decorate([
        ccclass
    ], Introduce);
    return Introduce;
}(cc.Component));
exports.default = Introduce;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbnRyb2R1Y2UvSW50cm9kdWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUMvQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7SUFDOUgsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO0lBQ2hSLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUU3TCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUVuQjtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTRHQztRQXpHRyxpQkFBVyxHQUFnQixFQUFFLENBQUM7UUFHOUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFVBQUksR0FBb0IsRUFBRSxDQUFDO1FBRzNCLFdBQUssR0FBb0IsRUFBRSxDQUFDO1FBRXBCLGVBQVMsR0FBRyxDQUFDLENBQUM7O0lBd0YxQixDQUFDO0lBdkZHLDBCQUEwQjtJQUMxQiwwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBQ0QsZ0NBQVksR0FBWjtRQUFBLGlCQThDQztRQTdDRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsQixLQUFLLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDO1lBQ0YsS0FBSyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0UsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNaLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDO2lCQUNyRSxJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFFBQVEsQ0FBQztvQkFDVixRQUFRLFVBQVUsRUFBRTt3QkFDaEIsS0FBSyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs0QkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzRCQUNoQyxNQUFNO3dCQUNWLEtBQUssQ0FBQzs0QkFDRixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7NEJBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs0QkFDaEMsTUFBTTt3QkFDVixLQUFLLENBQUM7NEJBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzRCQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7NEJBQ2hDLE1BQU07cUJBQ2I7b0JBQ0QsSUFBSSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUM7d0JBQzlDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFBO3FCQUN4RTt5QkFBSTt3QkFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDdEIsdUJBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDNUM7b0JBQ0QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO2dCQUNwQixDQUFDLEVBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN2QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFFakIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFDVCx5RUFBeUU7UUFDekUsb0ZBQW9GO0lBQ3hGLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUMvQjtZQUNJLElBQUksVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsT0FBTzthQUNWO1NBQ0o7SUFDTCxDQUFDO0lBeEdEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2tEQUNRO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzJDQUNBO0lBRzNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRDQUNDO0lBbEJYLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E0RzdCO0lBQUQsZ0JBQUM7Q0E1R0QsQUE0R0MsQ0E1R3NDLEVBQUUsQ0FBQyxTQUFTLEdBNEdsRDtrQkE1R29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWZmZWN0TWFuYWdlciBmcm9tIFwiLi4vU2NyaXB0cy9FZmZlY3RNYW5hZ2VyXCI7XG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IHN0b3J5VGV4dCA9IFtbXCJTVElDS01BTlwiLCBcIklOVk9MVkVEXCIsIFwiSU5cIiwgXCJBXCIsIFwiQkFOS1wiLCBcIlJPQkJFUllcIiwgXCJIRVwiLCBcIldBU1wiLCBcIkFSUkVTVEVEXCIsIFwiSU5cIiwgXCJBXCIsIFwiU0VDUkVUXCIsIFwiUFJJU09OXCIsIFwiSU5cIiwgXCJBTUVSSUNBXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCJBRlRFUlwiLCBcIkVTQ0FQSU5HXCIsIFwiRlJPTVwiLCBcIlRIRVwiLCBcIlBSSVNPTixcIiwgXCJUSEVcIiwgXCJTVElDS01BTlwiLCBcIkxJVkVEXCIsIFwiQVwiLCBcIkxJRkVcIiwgXCJPRlwiLCBcIkxVWFVSWS5cIiwgXCJcXG5CVVRcIiwgXCJUSEVSRVwiLCBcIldBU1wiLCBcIkFOXCIsIFwiRU5FTVlcIiwgXCJXSE9cIiwgXCJXQVNcIiwgXCJMSVZJTkdcIiwgXCJJTlwiLCBcIkFcIiwgXCJQUklTT05cIiwgXCJVTkRFUlwiLCBcIlRIRVwiLCBcIlNFQS5cIiwgXCJcXG5QVU5JU0hJTkdcIiwgXCJISU1cIiwgXCJXQVNcIiwgXCJUSEVcIiwgXCJORVhUXCIsIFwiT0JKRUNUSVZFLlwiXSxcbiAgICAgICAgICAgICAgICAgICAgW1wiQUZURVJcIiwgXCJFU0NBUElOR1wiLCBcIlRPXCIsIFwiVEhFXCIsIFwiSVNMQU5ELFwiLCBcIlRIRVwiLCBcIlNUSUNLTUFOXCIsIFwiU1RPTEVcIiwgXCJBXCIsIFwiSkVXRUxcIiwgXCJGUk9NXCIsIFwiQU5cIiwgXCJBQk9SSUdJTkFMXCIsIFwiVFJJQkUuXCIsIFwiSEVcIiwgXCJXQVNcIiwgXCJPTkNFXCIsIFwiQUdBSU5cIiwgXCJBUlJFU1RFRFwiXV07XG5cbmNvbnN0IHR3ZWVuID0gY2MudHdlZW47XG5cbnZhciBpbnRyb0luZGV4ID0gMDtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRyb2R1Y2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxuICAgIHByaXNvblNjZW5lOiBjYy5TcHJpdGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbmV4dDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdG9yeTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc3RvcnlMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBsZWZ0OiBjYy5TcHJpdGVGcmFtZVtdID1bXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHJpZ2h0OiBjYy5TcHJpdGVGcmFtZVtdID1bXTtcblxuICAgIHByaXZhdGUgY291bnRXb3JkID0gMDtcbiAgICAvLyBwcml2YXRlIGludHJvSW5kZXggPSAwO1xuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldEludHJvZHVjZSgpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJ1bkFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldEludHJvZHVjZSgpO1xuICAgIH1cblxuICAgIHJlc2V0SW50cm9kdWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByaXNvblNjZW5lWzBdLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDUwLCAxMjAwKTtcbiAgICAgICAgdGhpcy5wcmlzb25TY2VuZVsxXS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTIwMCwgMTMzKTtcbiAgICAgICAgdGhpcy5uZXh0Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLm5leHQuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLnN0b3J5Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLnN0b3J5TGFiZWwuc3RyaW5nID0gXCJcIlxuICAgIH1cbiAgICBydW5BbmltYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLnByaXNvblNjZW5lWzBdLm5vZGUpLnRvKDAuMywge3Bvc2l0aW9uOiBjYy52MygwLCAzODUpfSkuc3RhcnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdHdlZW4odGhpcy5wcmlzb25TY2VuZVsxXS5ub2RlKS50bygwLjMsIHtwb3NpdGlvbjogY2MudjMoMCwgMjIwKX0pLnN0YXJ0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3Rvcnkuc2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdG9yeS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHR3ZWVuKHRoaXMuc3RvcnkpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlWDogMS4yLCBzY2FsZVk6IDEuNSwgb3BhY2l0eTogMjU1fSwge2Vhc2luZzogXCJxdWFkSW5cIn0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpbnRyb0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuZm9udFNpemUgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxhYmVsLmxpbmVIZWlnaHQgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuZm9udFNpemUgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxhYmVsLmxpbmVIZWlnaHQgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuZm9udFNpemUgPSAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxhYmVsLmxpbmVIZWlnaHQgPSAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudFdvcmQgPCBzdG9yeVRleHRbaW50cm9JbmRleF0ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuc3RyaW5nICs9IHN0b3J5VGV4dFtpbnRyb0luZGV4XVt0aGlzLmNvdW50V29yZF0gKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwic3RvcnlcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dCdXR0b24odGhpcy5uZXh0LCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudFdvcmQrK1xuICAgICAgICAgICAgICAgICAgICB9LDAuMSxzdG9yeVRleHRbaW50cm9JbmRleF0ubGVuZ3RoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIC8vIHR3ZWVuKHRoaXMucHJpc29uU2NlbmVbMF0pLnRvKDAuMywge3Bvc2l0aW9uOiBjYy52MygwLCAzODUpfSkuc3RhcnQoKTtcbiAgICAgICAgLy8gdHdlZW4odGhpcy5wcmlzb25TY2VuZVsxXSkuZGVsYXkoMC44KS50bygwLjMsIHtwb3NpdGlvbjogY2MudjMoMCwgMTMzKX0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgc2V0SW50cm8obGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZWZ0Lmxlbmd0aDtcbiAgICAgICAgaW50cm9JbmRleCA9IE1hdGguZmxvb3IobGV2ZWwgLyAxMClcbiAgICAgICAgdGhpcy5jb3VudFdvcmQgPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpbnRyb0luZGV4ID09IGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaXNvblNjZW5lWzBdLnNwcml0ZUZyYW1lID0gdGhpcy5sZWZ0W2ldO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpc29uU2NlbmVbMV0uc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0W2ldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==