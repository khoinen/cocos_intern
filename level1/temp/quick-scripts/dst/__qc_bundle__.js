
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/ComingSoon/ComingSoon2');
require('./assets/Guide/Guide');
require('./assets/Introduce/Introduce');
require('./assets/Levels/Level19/Script/Level19_1');
require('./assets/Levels/Level19/Script/Level19_2');
require('./assets/Levels/Level19/Script/Level19_3');
require('./assets/Scripts/ActionController');
require('./assets/Scripts/Alert');
require('./assets/Scripts/BundleManager');
require('./assets/Scripts/ButtonNext');
require('./assets/Scripts/ClipController');
require('./assets/Scripts/ComingSoon');
require('./assets/Scripts/CountDown5s');
require('./assets/Scripts/Data');
require('./assets/Scripts/EffectManager');
require('./assets/Scripts/EventManager');
require('./assets/Scripts/FBInstantManager');
require('./assets/Scripts/GameManager');
require('./assets/Scripts/HomeController');
require('./assets/Scripts/LevelBase');
require('./assets/Scripts/LevelController');
require('./assets/Scripts/ListLevel/ClickItem');
require('./assets/Scripts/ListLevel/ListLevel');
require('./assets/Scripts/ListLevel/NewClickItem');
require('./assets/Scripts/Loading/Loading');
require('./assets/Scripts/Notification');
require('./assets/Scripts/OptimizePageView');
require('./assets/Scripts/OptionController');
require('./assets/Scripts/Other/FishSwim');
require('./assets/Scripts/Setting');
require('./assets/Scripts/StageController');
require('./assets/Scripts/UIController');
require('./assets/Scripts/spine');
require('./assets/TestSpine');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TestSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '022c5B9hZ9B277tox481Xtb', 'TestSpine');
// TestSpine.ts

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
var isTrue = true;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lupin = null;
        return _this;
    }
    NewClass.prototype.onEnable = function () {
        this.runAnimation();
    };
    NewClass.prototype.runAnimation = function () {
        // this.lupin.setMix("general/hide1", "general/stand_nervous", 0.5);
        // this.lupin.setMix("general/stand_nervous", "level_5/remote_control", 0.5);
        var _this = this;
        // this.lupin.setAnimation(0, "general/hide", true);
        this.lupin.setAnimation(0, "general/hide1", true);
        cc.tween(this.node).delay(3)
            .call(function () {
            _this.lupin.setAnimation(0, "emotion/sinister", true);
            _this.lupin.setCompleteListener(function (trackEntry) {
                if (trackEntry.animation.name == "emotion/sinister" && isTrue) {
                    _this.lupin.setAnimation(1, "level_5/throw_bida", false);
                }
            });
            // this.lupin.setAnimation(1, "general/stand_nervous", false);
            // this.lupin.clearTrack(1);
            // this.lupin.setAnimation(1, "level_5/remote_control", false);
            // this.setLupin(cc.v2(-80, -460), "emotion/sinister", "general/walk");
        })
            .start();
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "lupin", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UZXN0U3BpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBRWxCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0JDO1FBNUJHLFdBQUssR0FBZ0IsSUFBSSxDQUFDOztJQTRCOUIsQ0FBQztJQTFCRywyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0ksb0VBQW9FO1FBQ3BFLDZFQUE2RTtRQUZqRixpQkFxQkM7UUFqQkcsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNuQixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxVQUFBLFVBQVU7Z0JBQ3JDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksa0JBQWtCLElBQUksTUFBTSxFQUM3RDtvQkFDSSxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzNEO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCw4REFBOEQ7WUFDOUQsNEJBQTRCO1lBQzVCLCtEQUErRDtZQUMvQyx1RUFBdUU7UUFDM0YsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzJDQUNJO0lBSFQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStCNUI7SUFBRCxlQUFDO0NBL0JELEFBK0JDLENBL0JxQyxFQUFFLENBQUMsU0FBUyxHQStCakQ7a0JBL0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbnZhciBpc1RydWUgPSB0cnVlO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBsdXBpbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgcnVuQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLmx1cGluLnNldE1peChcImdlbmVyYWwvaGlkZTFcIiwgXCJnZW5lcmFsL3N0YW5kX25lcnZvdXNcIiwgMC41KTtcbiAgICAgICAgLy8gdGhpcy5sdXBpbi5zZXRNaXgoXCJnZW5lcmFsL3N0YW5kX25lcnZvdXNcIiwgXCJsZXZlbF81L3JlbW90ZV9jb250cm9sXCIsIDAuNSk7XG5cbiAgICAgICAgLy8gdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJnZW5lcmFsL2hpZGVcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwiZ2VuZXJhbC9oaWRlMVwiLCB0cnVlKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgzKVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJlbW90aW9uL3NpbmlzdGVyXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PSBcImVtb3Rpb24vc2luaXN0ZXJcIiAmJiBpc1RydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJsZXZlbF81L3Rocm93X2JpZGFcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJnZW5lcmFsL3N0YW5kX25lcnZvdXNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmx1cGluLmNsZWFyVHJhY2soMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDEsIFwibGV2ZWxfNS9yZW1vdGVfY29udHJvbFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldEx1cGluKGNjLnYyKC04MCwgLTQ2MCksIFwiZW1vdGlvbi9zaW5pc3RlclwiLCBcImdlbmVyYWwvd2Fsa1wiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '651ccMOV4lP5YZQYpu0DX8S', 'EffectManager');
// Scripts/EffectManager.ts

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
var tween = cc.tween;
var EffectManager = /** @class */ (function (_super) {
    __extends(EffectManager, _super);
    function EffectManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Làm scene tối dần, khi tối hoàn toàn sẽ gọi callback để chuyển cảnh
    EffectManager.hideScene = function (callback, node) {
        if (callback === void 0) { callback = null; }
        if (node === void 0) { node = null; }
        var shadow = cc.find("Canvas/Shadow");
        if (shadow) {
            if (callback) {
                tween(shadow).to(0.4, { opacity: 255 }).call(function () {
                    callback(node);
                }.bind(this)).start();
            }
        }
    };
    //Làm scene sáng dần
    EffectManager.showScene = function (callback) {
        if (callback === void 0) { callback = null; }
        var shadow = cc.find("Canvas/Shadow");
        if (shadow) {
            tween(shadow).to(0.4, { opacity: 0 }).start();
        }
    };
    EffectManager.effectFail = function () {
        var shadow = cc.find("Canvas/Shadow");
        var fail = cc.find("Canvas/Fail");
        if (shadow && fail) {
            tween(shadow).to(0.2, { opacity: 150, }, { easing: "cubicOut" }).start();
            tween(fail).to(0.2, { scale: 1, opacity: 255 }, { easing: "cubicOut" }).start();
        }
    };
    EffectManager.effectSuccess = function () {
        var shadow = cc.find("Canvas/Shadow");
        var success = cc.find("Canvas/Success");
        if (shadow && success) {
            tween(shadow).to(0.2, { opacity: 150, }, { easing: "cubicOut" }).start();
            tween(success).to(0.2, { scale: 0.7, opacity: 255 }, { easing: "cubicOut" }).start();
        }
    };
    //Hiệu ứng scale to ra
    EffectManager.effectScaleOption = function (node, timeScale) {
        node.active = true;
        node.scale = 0;
        tween(node).to(timeScale, { scale: 1, opacity: 255 }, { easing: "backOut" }).start();
    };
    EffectManager.effectHideButton = function (node, timeScale) {
        tween(node).to(timeScale, { scale: 0, opacity: 0 }, { easing: "backOut" }).start();
    };
    //Hiển thị/Ẩn các option
    EffectManager.showUI = function (isShow) {
        cc.find("Canvas/Level").active = isShow;
        cc.find("Canvas/OptionContainer").active = isShow;
    };
    //Hiệu ứng nhấy nháy
    EffectManager.flicker = function (node, times) {
        tween(node).repeat(times, tween().to(0.05, { opacity: 0 }).delay(0.1).to(0.05, { opacity: 255 })).start();
    };
    //Hiển thị tick xanh ở Option người chơi chọn
    EffectManager.showTick = function (option, node) {
        if (node === void 0) { node = null; }
        if (node)
            node.getChildByName("TrueAnswer").active = true;
        else
            cc.find("Canvas/Level/Line/TrueAnswer").active = true;
        var optionContainer = cc.find("Canvas/OptionContainer").getChildByName("option" + (option + 1));
        switch (option) {
            case 0:
                optionContainer.getChildByName("tick").active = true;
                break;
            case 1:
                optionContainer.getChildByName("tick").active = true;
                break;
            case 2:
                optionContainer.getChildByName("tick").active = true;
            default:
                break;
        }
    };
    //Hiển thị X ở Option người chơi chọn
    EffectManager.showX = function (option, node) {
        if (node === void 0) { node = null; }
        if (node)
            node.getChildByName("FalseAnswer").active = true;
        else
            cc.find("Canvas/Level/Line/FalseAnswer").active = true;
        var optionContainer = cc.find("Canvas/OptionContainer").getChildByName("option" + (option + 1));
        switch (option) {
            case 0:
                optionContainer.getChildByName("x").active = true;
                break;
            case 1:
                optionContainer.getChildByName("x").active = true;
                break;
            case 2:
                optionContainer.getChildByName("x").active = true;
            default:
                break;
        }
    };
    //Hiệu ứng tiền bay
    EffectManager.effectFlyMoney = function (child, parent) {
        var tempNode = [];
        for (var i = 0; i < 11; ++i) {
            var node = cc.instantiate(child);
            tempNode.push(node);
            parent.addChild(node);
        }
        var ui = cc.find("Canvas/UI");
        var _ui = ui.getComponent("UIController");
        var point = ui.convertToNodeSpaceAR(_ui.point.convertToWorldSpaceAR(ui));
        tween(tempNode[0]).to(1, { position: cc.v3(-110, 50) }, { easing: "quintOut" }).delay(0).bezierTo(0.5, cc.v2(-110, 50), cc.v2(-120, 350), cc.v2(point)).delay(0.2).call(function () {
            tempNode[0].active = false;
            tempNode[0].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[1]).to(1, { position: cc.v3(-52, 143) }, { easing: "quintOut" }).delay(0.05).bezierTo(0.5, cc.v2(-52, 143), cc.v2(-65, 310), cc.v2(point)).delay(0.2).call(function () {
            tempNode[1].active = false;
            tempNode[1].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[2]).to(1, { position: cc.v3(-240, 114) }, { easing: "quintOut" }).delay(0.05).bezierTo(0.5, cc.v2(-240, 114), cc.v2(-310, 300), cc.v2(point)).delay(0.2).call(function () {
            tempNode[2].active = false;
            tempNode[2].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[3]).to(1, { position: cc.v3(100, 200) }, { easing: "quintOut" }).delay(0.01).bezierTo(0.5, cc.v2(100, 200), cc.v2(305, 210), cc.v2(point)).delay(0.2).call(function () {
            tempNode[3].active = false;
            tempNode[3].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[4]).to(1, { position: cc.v3(165, 202) }, { easing: "quintOut" }).delay(0.1).bezierTo(0.5, cc.v2(165, 202), cc.v2(360, 310), cc.v2(point)).delay(0.2).call(function () {
            tempNode[4].active = false;
            tempNode[4].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[5]).to(1, { position: cc.v3(102, 280) }, { easing: "quintOut" }).delay(0.1).bezierTo(0.5, cc.v2(102, 280), cc.v2(111, 400), cc.v2(point)).delay(0.2).call(function () {
            tempNode[5].active = false;
            tempNode[5].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[6]).to(1, { position: cc.v3(208, 105) }, { easing: "quintOut" }).delay(0.15).bezierTo(0.5, cc.v2(208, 105), cc.v2(360, 142), cc.v2(point)).delay(0.2).call(function () {
            tempNode[6].active = false;
            tempNode[6].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[7]).to(1, { position: cc.v3(-193, -169) }, { easing: "quintOut" }).delay(0.15).bezierTo(0.5, cc.v2(-193, -169), cc.v2(-322, 40), cc.v2(point)).delay(0.2).call(function () {
            tempNode[7].active = false;
            tempNode[7].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[8]).to(1, { position: cc.v3(-100, -215) }, { easing: "quintOut" }).delay(0.2).bezierTo(0.5, cc.v2(-100, -215), cc.v2(127, -280), cc.v2(point)).delay(0.2).call(function () {
            tempNode[8].active = false;
            tempNode[8].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[9]).to(1, { position: cc.v3(71, -121) }, { easing: "quintOut" }).delay(0.2).bezierTo(0.5, cc.v2(71, -121), cc.v2(330, -88), cc.v2(point)).delay(0.2).call(function () {
            tempNode[9].active = false;
            tempNode[9].position = cc.v3(0, 0);
        }).start();
        tween(tempNode[10]).to(1, { position: cc.v3(35, -2) }, { easing: "quintOut" }).delay(0.025).bezierTo(0.5, cc.v2(35, -2), cc.v2(0, 0), cc.v2(point)).delay(0.2).call(function () {
            tempNode[10].active = false;
            tempNode[10].position = cc.v3(0, 0);
        }).start();
    };
    //Button dần hiện ra
    EffectManager.showButton = function (node, timeScale) {
        node.active = true;
        node.scale = 0;
        node.opacity = 0;
        tween(node).to(timeScale, { scale: 1, opacity: 255 }, { easing: "quadIn" }).start();
    };
    //Hiệu ứng nút to nhỏ liên tục
    EffectManager.scaleForever = function (node, min, max, timeScale) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        if (timeScale === void 0) { timeScale = null; }
        if (!(min && max && timeScale)) {
            cc.Tween.stopAllByTarget(node);
            return;
        }
        node.active = true;
        node.scale = 1;
        node.opacity = 0;
        tween(node).to(timeScale, { scale: max, opacity: 255 })
            .repeatForever(tween().to(timeScale, { scale: min }).to(timeScale, { scale: max })).start();
    };
    //Hiệu ứng nút Tap To Start đầu game
    EffectManager.effectScaleStart = function (node) {
        node.active = true;
        tween(node).to(0.25, { scale: 0.95 }, { easing: "backOut" })
            .repeatForever(tween().to(0.8, { scale: 0.95 }, { easing: "backOut" })
            .delay(0.4)
            .to(0.8, { scale: 1.05 }, { easing: "backOut" })
            .delay(0.4))
            .start();
    };
    EffectManager.effectScaleButton = function (node, x, y, duration) {
        node.active = true;
        node.opacity = 255;
        tween(node).parallel(tween().to(duration, { scaleX: x + 0.1 }, { easing: "cubicOut" }).to(0.3, { scaleX: x }), tween().to(duration, { scaleY: y + 0.1 }, { easing: "cubicOut" }).to(0.3, { scaleY: y })).start();
    };
    EffectManager = __decorate([
        ccclass
    ], EffectManager);
    return EffectManager;
}(cc.Component));
exports.default = EffectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0VmZmVjdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUd2QjtJQUEyQyxpQ0FBWTtJQUF2RDs7SUF5TkEsQ0FBQztJQXZORyxxRUFBcUU7SUFDOUQsdUJBQVMsR0FBaEIsVUFBaUIsUUFBZSxFQUFFLElBQW9CO1FBQXJDLHlCQUFBLEVBQUEsZUFBZTtRQUFFLHFCQUFBLEVBQUEsV0FBb0I7UUFDbEQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sRUFDVjtZQUNJLElBQUksUUFBUSxFQUNaO2dCQUNJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN6QjtTQUNKO0lBQ0wsQ0FBQztJQUVELG9CQUFvQjtJQUNiLHVCQUFTLEdBQWhCLFVBQWlCLFFBQWU7UUFBZix5QkFBQSxFQUFBLGVBQWU7UUFDNUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sRUFDVjtZQUNJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFF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QUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDM0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNySyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMzQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDM0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMzQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVB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LEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUNyRixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUF4TmdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F5TmpDO0lBQUQsb0JBQUM7Q0F6TkQsQUF5TkMsQ0F6TjBDLEVBQUUsQ0FBQyxTQUFTLEdBeU50RDtrQkF6Tm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvL0zDoG0gc2NlbmUgdOG7kWkgZOG6p24sIGtoaSB04buRaSBob8OgbiB0b8OgbiBz4bq9IGfhu41pIGNhbGxiYWNrIMSR4buDIGNodXnhu4NuIGPhuqNuaFxuICAgIHN0YXRpYyBoaWRlU2NlbmUoY2FsbGJhY2sgPSBudWxsLCBub2RlOiBjYy5Ob2RlID0gbnVsbCkgOiB2b2lkIHtcbiAgICAgICAgdmFyIHNoYWRvdyA9IGNjLmZpbmQoXCJDYW52YXMvU2hhZG93XCIpO1xuICAgICAgICBpZiAoc2hhZG93KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW4oc2hhZG93KS50bygwLjQsIHtvcGFjaXR5OiAyNTV9KS5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0zDoG0gc2NlbmUgc8OhbmcgZOG6p25cbiAgICBzdGF0aWMgc2hvd1NjZW5lKGNhbGxiYWNrID0gbnVsbCkgOiB2b2lkIHtcbiAgICAgICAgdmFyIHNoYWRvdyA9IGNjLmZpbmQoXCJDYW52YXMvU2hhZG93XCIpO1xuICAgICAgICBpZiAoc2hhZG93KVxuICAgICAgICB7XG4gICAgICAgICAgICB0d2VlbihzaGFkb3cpLnRvKDAuNCwge29wYWNpdHk6IDB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgc3RhdGljIGVmZmVjdEZhaWwoKSA6IHZvaWQge1xuICAgICAgICB2YXIgc2hhZG93ID0gY2MuZmluZChcIkNhbnZhcy9TaGFkb3dcIik7XG4gICAgICAgIHZhciBmYWlsID0gY2MuZmluZChcIkNhbnZhcy9GYWlsXCIpO1xuICAgICAgICBpZiAoc2hhZG93ICYmIGZhaWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR3ZWVuKHNoYWRvdykudG8oMC4yLCB7b3BhY2l0eTogMTUwLCB9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KS5zdGFydCgpO1xuICAgICAgICAgICAgdHdlZW4oZmFpbCkudG8oMC4yLCB7c2NhbGU6IDEsIG9wYWNpdHk6IDI1NX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWZmZWN0U3VjY2VzcygpIDogdm9pZCB7XG4gICAgICAgIHZhciBzaGFkb3cgPSBjYy5maW5kKFwiQ2FudmFzL1NoYWRvd1wiKTtcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBjYy5maW5kKFwiQ2FudmFzL1N1Y2Nlc3NcIik7XG4gICAgICAgIGlmIChzaGFkb3cgJiYgc3VjY2VzcylcbiAgICAgICAge1xuICAgICAgICAgICAgdHdlZW4oc2hhZG93KS50bygwLjIsIHtvcGFjaXR5OiAxNTAsIH0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB0d2VlbihzdWNjZXNzKS50bygwLjIsIHtzY2FsZTogMC43LCBvcGFjaXR5OiAyNTV9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vSGnhu4d1IOG7qW5nIHNjYWxlIHRvIHJhXG4gICAgc3RhdGljIGVmZmVjdFNjYWxlT3B0aW9uKG5vZGU6IGNjLk5vZGUsIHRpbWVTY2FsZTogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5vZGUuc2NhbGUgPSAwO1xuICAgICAgICB0d2Vlbihub2RlKS50byh0aW1lU2NhbGUsIHtzY2FsZTogMSwgb3BhY2l0eTogMjU1fSwge2Vhc2luZzogXCJiYWNrT3V0XCJ9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlZmZlY3RIaWRlQnV0dG9uKG5vZGU6IGNjLk5vZGUsIHRpbWVTY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKG5vZGUpLnRvKHRpbWVTY2FsZSwge3NjYWxlOiAwLCBvcGFjaXR5OiAwfSwge2Vhc2luZzogXCJiYWNrT3V0XCJ9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIC8vSGnhu4NuIHRo4buLL+G6qG4gY8OhYyBvcHRpb25cbiAgICBzdGF0aWMgc2hvd1VJKGlzU2hvdzogYm9vbGVhbikgOiB2b2lkIHtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9MZXZlbFwiKS5hY3RpdmUgPSBpc1Nob3c7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvT3B0aW9uQ29udGFpbmVyXCIpLmFjdGl2ZSA9IGlzU2hvdztcbiAgICB9XG5cbiAgICAvL0hp4buHdSDhu6luZyBuaOG6pXkgbmjDoXlcbiAgICBzdGF0aWMgZmxpY2tlcihub2RlOiBjYy5Ob2RlLCB0aW1lczogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICB0d2Vlbihub2RlKS5yZXBlYXQodGltZXMsIHR3ZWVuKCkudG8oMC4wNSwge29wYWNpdHk6IDB9KS5kZWxheSgwLjEpLnRvKDAuMDUsIHtvcGFjaXR5OiAyNTV9KSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvL0hp4buDbiB0aOG7iyB0aWNrIHhhbmgg4bufIE9wdGlvbiBuZ8aw4budaSBjaMahaSBjaOG7jW5cbiAgICBzdGF0aWMgc2hvd1RpY2sob3B0aW9uOiBudW1iZXIsIG5vZGU6IGNjLk5vZGUgPSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlKVxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRydWVBbnN3ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9MZXZlbC9MaW5lL1RydWVBbnN3ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9wdGlvbkNvbnRhaW5lciA9IGNjLmZpbmQoXCJDYW52YXMvT3B0aW9uQ29udGFpbmVyXCIpLmdldENoaWxkQnlOYW1lKFwib3B0aW9uXCIgKyAob3B0aW9uICsgMSkpO1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbilcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG9wdGlvbkNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBvcHRpb25Db250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgb3B0aW9uQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vSGnhu4NuIHRo4buLIFgg4bufIE9wdGlvbiBuZ8aw4budaSBjaMahaSBjaOG7jW5cbiAgICBzdGF0aWMgc2hvd1gob3B0aW9uOiBudW1iZXIsIG5vZGU6IGNjLk5vZGUgPSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlKVxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZhbHNlQW5zd2VyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTGV2ZWwvTGluZS9GYWxzZUFuc3dlclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIHZhciBvcHRpb25Db250YWluZXIgPSBjYy5maW5kKFwiQ2FudmFzL09wdGlvbkNvbnRhaW5lclwiKS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvblwiICsgKG9wdGlvbiArIDEpKTtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBvcHRpb25Db250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ4XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgb3B0aW9uQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwieFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIG9wdGlvbkNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcInhcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0hp4buHdSDhu6luZyB0aeG7gW4gYmF5XG4gICAgc3RhdGljIGVmZmVjdEZseU1vbmV5KGNoaWxkOiBjYy5QcmVmYWIsIHBhcmVudDogY2MuTm9kZSk6IHZvaWQge1xuICAgICAgICB2YXIgdGVtcE5vZGUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMTsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGNoaWxkKTtcbiAgICAgICAgICAgIHRlbXBOb2RlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdWkgPSBjYy5maW5kKFwiQ2FudmFzL1VJXCIpO1xuICAgICAgICBsZXQgX3VpID0gdWkuZ2V0Q29tcG9uZW50KFwiVUlDb250cm9sbGVyXCIpO1xuICAgICAgICBsZXQgcG9pbnQgPSB1aS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihfdWkucG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHVpKSk7XG5cbiAgICAgICAgdHdlZW4odGVtcE5vZGVbMF0pLnRvKDEsIHtwb3NpdGlvbjogY2MudjMoLTExMCwgNTApfSwge2Vhc2luZzogXCJxdWludE91dFwifSkuZGVsYXkoMCkuYmV6aWVyVG8oMC41LCBjYy52MigtMTEwLCA1MCksIGNjLnYyKC0xMjAsIDM1MCksIGNjLnYyKHBvaW50KSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRlbXBOb2RlWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGVtcE5vZGVbMF0ucG9zaXRpb24gPSBjYy52MygwLCAwKVxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0ZW1wTm9kZVsxXSkudG8oMSwge3Bvc2l0aW9uOiBjYy52MygtNTIsIDE0Myl9LCB7ZWFzaW5nOiBcInF1aW50T3V0XCJ9KS5kZWxheSgwLjA1KS5iZXppZXJUbygwLjUsIGNjLnYyKC01MiwgMTQzKSwgY2MudjIoLTY1LCAzMTApLCBjYy52Mihwb2ludCkpLmRlbGF5KDAuMikuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0ZW1wTm9kZVsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRlbXBOb2RlWzFdLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGVtcE5vZGVbMl0pLnRvKDEsIHtwb3NpdGlvbjogY2MudjMoLTI0MCwgMTE0KX0sIHtlYXNpbmc6IFwicXVpbnRPdXRcIn0pLmRlbGF5KDAuMDUpLmJlemllclRvKDAuNSwgY2MudjIoLTI0MCwgMTE0KSwgY2MudjIoLTMxMCwgMzAwKSwgY2MudjIocG9pbnQpKS5kZWxheSgwLjIpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGVtcE5vZGVbMl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0ZW1wTm9kZVsyXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKHRlbXBOb2RlWzNdKS50bygxLCB7cG9zaXRpb246IGNjLnYzKDEwMCwgMjAwKX0sIHtlYXNpbmc6IFwicXVpbnRPdXRcIn0pLmRlbGF5KDAuMDEpLmJlemllclRvKDAuNSwgY2MudjIoMTAwLCAyMDApLCBjYy52MigzMDUsIDIxMCksIGNjLnYyKHBvaW50KSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRlbXBOb2RlWzNdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGVtcE5vZGVbM10ucG9zaXRpb24gPSBjYy52MygwLCAwKVxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0ZW1wTm9kZVs0XSkudG8oMSwge3Bvc2l0aW9uOiBjYy52MygxNjUsIDIwMil9LCB7ZWFzaW5nOiBcInF1aW50T3V0XCJ9KS5kZWxheSgwLjEpLmJlemllclRvKDAuNSwgY2MudjIoMTY1LCAyMDIpLCBjYy52MigzNjAsIDMxMCksIGNjLnYyKHBvaW50KSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRlbXBOb2RlWzRdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGVtcE5vZGVbNF0ucG9zaXRpb24gPSBjYy52MygwLCAwKVxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0ZW1wTm9kZVs1XSkudG8oMSwge3Bvc2l0aW9uOiBjYy52MygxMDIsIDI4MCl9LCB7ZWFzaW5nOiBcInF1aW50T3V0XCJ9KS5kZWxheSgwLjEpLmJlemllclRvKDAuNSwgY2MudjIoMTAyLCAyODApLCBjYy52MigxMTEsIDQwMCksIGNjLnYyKHBvaW50KSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRlbXBOb2RlWzVdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGVtcE5vZGVbNV0ucG9zaXRpb24gPSBjYy52MygwLCAwKVxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0ZW1wTm9kZVs2XSkudG8oMSwge3Bvc2l0aW9uOiBjYy52MygyMDgsIDEwNSl9LCB7ZWFzaW5nOiBcInF1aW50T3V0XCJ9KS5kZWxheSgwLjE1KS5iZXppZXJUbygwLjUsIGNjLnYyKDIwOCwgMTA1KSwgY2MudjIoMzYwLCAxNDIpLCBjYy52Mihwb2ludCkpLmRlbGF5KDAuMikuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0ZW1wTm9kZVs2XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRlbXBOb2RlWzZdLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGVtcE5vZGVbN10pLnRvKDEsIHtwb3NpdGlvbjogY2MudjMoLTE5MywgLTE2OSl9LCB7ZWFzaW5nOiBcInF1aW50T3V0XCJ9KS5kZWxheSgwLjE1KS5iZXppZXJUbygwLjUsIGNjLnYyKC0xOTMsIC0xNjkpLCBjYy52MigtMzIyLCA0MCksIGNjLnYyKHBvaW50KSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRlbXBOb2RlWzddLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGVtcE5vZGVbN10ucG9zaXRpb24gPSBjYy52MygwLCAwKVxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0ZW1wTm9kZVs4XSkudG8oMSwge3Bvc2l0aW9uOiBjYy52MygtMTAwLCAtMjE1KX0sIHtlYXNpbmc6IFwicXVpbnRPdXRcIn0pLmRlbGF5KDAuMikuYmV6aWVyVG8oMC41LCBjYy52MigtMTAwLCAtMjE1KSwgY2MudjIoMTI3LCAtMjgwKSwgY2MudjIocG9pbnQpKS5kZWxheSgwLjIpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGVtcE5vZGVbOF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0ZW1wTm9kZVs4XS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKHRlbXBOb2RlWzldKS50bygxLCB7cG9zaXRpb246IGNjLnYzKDcxLCAtMTIxKX0sIHtlYXNpbmc6IFwicXVpbnRPdXRcIn0pLmRlbGF5KDAuMikuYmV6aWVyVG8oMC41LCBjYy52Mig3MSwgLTEyMSksIGNjLnYyKDMzMCwgLTg4KSwgY2MudjIocG9pbnQpKS5kZWxheSgwLjIpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGVtcE5vZGVbOV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0ZW1wTm9kZVs5XS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKHRlbXBOb2RlWzEwXSkudG8oMSwge3Bvc2l0aW9uOiBjYy52MygzNSwgLTIpfSwge2Vhc2luZzogXCJxdWludE91dFwifSkuZGVsYXkoMC4wMjUpLmJlemllclRvKDAuNSwgY2MudjIoMzUsIC0yKSwgY2MudjIoMCwgMCksIGNjLnYyKHBvaW50KSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRlbXBOb2RlWzEwXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRlbXBOb2RlWzEwXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLy9CdXR0b24gZOG6p24gaGnhu4duIHJhXG4gICAgc3RhdGljIHNob3dCdXR0b24obm9kZTogY2MuTm9kZSwgdGltZVNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLnNjYWxlID0gMDtcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdHdlZW4obm9kZSkudG8odGltZVNjYWxlLCB7c2NhbGU6IDEsIG9wYWNpdHk6IDI1NX0sIHtlYXNpbmc6IFwicXVhZEluXCJ9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIC8vSGnhu4d1IOG7qW5nIG7DunQgdG8gbmjhu48gbGnDqm4gdOG7pWNcbiAgICBzdGF0aWMgc2NhbGVGb3JldmVyKG5vZGU6IGNjLk5vZGUsIG1pbjogbnVtYmVyID0gbnVsbCwgbWF4OiBudW1iZXIgPSBudWxsLCB0aW1lU2NhbGU6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKCEobWluICYmIG1heCAmJiB0aW1lU2NhbGUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLnNjYWxlID0gMTtcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdHdlZW4obm9kZSkudG8odGltZVNjYWxlLCB7c2NhbGU6IG1heCwgb3BhY2l0eTogMjU1fSlcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICB0d2VlbigpLnRvKHRpbWVTY2FsZSwge3NjYWxlOiBtaW59KS50byh0aW1lU2NhbGUsIHtzY2FsZTogbWF4fSlcbiAgICAgICAgKS5zdGFydCgpO1xuICAgIH1cblxuICAgIC8vSGnhu4d1IOG7qW5nIG7DunQgVGFwIFRvIFN0YXJ0IMSR4bqndSBnYW1lXG4gICAgc3RhdGljIGVmZmVjdFNjYWxlU3RhcnQobm9kZTogY2MuTm9kZSk6IHZvaWQge1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHR3ZWVuKG5vZGUpLnRvKDAuMjUsIHtzY2FsZTogMC45NX0sIHtlYXNpbmc6IFwiYmFja091dFwifSlcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50bygwLjgsIHtzY2FsZTogMC45NX0sIHtlYXNpbmc6IFwiYmFja091dFwifSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC44LCB7c2NhbGU6MS4wNX0sIHtlYXNpbmc6IFwiYmFja091dFwifSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlZmZlY3RTY2FsZUJ1dHRvbihub2RlOiBjYy5Ob2RlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdHdlZW4obm9kZSkucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgdHdlZW4oKS50byhkdXJhdGlvbiwge3NjYWxlWDogeCArIDAuMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnRvKDAuMywge3NjYWxlWDogeH0pLFxuICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8oZHVyYXRpb24sIHtzY2FsZVk6IHkgKyAwLjF9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KS50bygwLjMsIHtzY2FsZVk6IHl9KVxuICAgICAgICAgICAgKS5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ListLevel/ListLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ecffeOqxSREMo+xDLR9m1qE', 'ListLevel');
// Scripts/ListLevel/ListLevel.ts

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
var Data_1 = require("../Data");
var EffectManager_1 = require("../EffectManager");
var NewClickItem_1 = require("./NewClickItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// Tổng số level của game
var TOTAL_LEVEL = 30;
// Số level hiển thị trong 1 trang
var LEVEL_PAGE = 10;
var tween = cc.tween;
var _gameManager = null;
var _ui = null;
var ListLevel = /** @class */ (function (_super) {
    __extends(ListLevel, _super);
    function ListLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.pageView = null;
        _this.page = null;
        _this.unlock = null;
        _this.lock = null;
        _this.current = null;
        _this.shadow = null;
        _this.container = null;
        _this.smallItem = null;
        _this.bigItem = null;
        _this.icon = [];
        return _this;
    }
    ListLevel.prototype.onLoad = function () {
        this.initItem();
        _gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        _ui = cc.find("Canvas/UI").getComponent("UIController");
        this.shadow.opacity = 0;
        // this.container.scale = 0.7;
        this.container.opacity = 0;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            _gameManager._selectedLevel = data.unlockedLevel;
        });
    };
    ListLevel.prototype.onEnable = function () {
        this.node.on("click_item", this.onClickItem, this);
        this.effectOpen();
        this.setStatus();
        var pageView = this.container.getChildByName("List").getComponent(cc.PageView);
        if (_gameManager._levelCurrent) {
            var index = Math.floor((_gameManager._levelCurrent.level + 1) / 10);
            pageView.setCurrentPageIndex(index);
        }
        else {
            pageView.setCurrentPageIndex(0);
        }
    };
    ListLevel.prototype.onDisable = function () {
        this.node.off("click_item", this.onClickItem, this);
        this.unschedule(this._close);
    };
    ListLevel.prototype.initItem = function () {
        var page = cc.instantiate(this.page);
        var count = 0;
        var item;
        for (var i = 0; i < TOTAL_LEVEL; ++i) {
            if ((i + 1) % 10 == 0)
                item = cc.instantiate(this.bigItem);
            else
                item = cc.instantiate(this.smallItem);
            item.children[0].getComponent(cc.Sprite).spriteFrame = this.icon[i];
            var script = item.getComponent("NewClickItem");
            script.tick.active = false;
            script.setLevel(i + 1);
            script.setStatus(NewClickItem_1.STATUS.LOCK);
            page.addChild(item);
            ++count;
            if (count == LEVEL_PAGE && TOTAL_LEVEL >= LEVEL_PAGE) {
                this.content.addChild(page);
                page = cc.instantiate(this.page);
                count = 0;
                if (i == TOTAL_LEVEL - 1) {
                    return;
                }
            }
        }
        this.content.addChild(page);
    };
    ListLevel.prototype.setStatus = function () {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var unlockedLevel = data.unlockedLevel + 1;
            var page = Math.floor(unlockedLevel / 10);
            var count = 0;
            if (page == 0) {
                for (var i = 0; i < unlockedLevel; ++i) {
                    var item = _this.content.children[0].children[i];
                    var script = item.getComponent("NewClickItem");
                    script.isClick = true;
                    if (i == unlockedLevel - 1) {
                        script.setStatus(NewClickItem_1.STATUS.CURRENT);
                        script.tick.active = false;
                    }
                    else {
                        script.setStatus(NewClickItem_1.STATUS.UNLOCK);
                        script.tick.active = true;
                    }
                }
            }
            else {
                var numPage = 0;
                var numItem = 0;
                while (numItem < unlockedLevel) {
                    var item = _this.content.children[numPage].children[numItem];
                    var script = item.getComponent("NewClickItem");
                    script.isClick = true;
                    if (numPage * 10 + numItem == unlockedLevel - 1) {
                        EffectManager_1.default.scaleForever(item, 0.95, 1.05, 0.7);
                        script.setStatus(NewClickItem_1.STATUS.CURRENT);
                        script.tick.active = false;
                        return;
                    }
                    if (numItem != unlockedLevel - 1) {
                        script.setStatus(NewClickItem_1.STATUS.UNLOCK);
                        script.tick.active = true;
                    }
                    ++numItem;
                    if (numItem == 10) {
                        ++numPage;
                        numItem = 0;
                    }
                }
            }
        });
    };
    ListLevel.prototype.effectOpen = function () {
        var _this = this;
        tween(this.shadow).to(0.2, { opacity: 200 })
            .call(function () {
            tween(_this.container).parallel(tween().to(0.2, { opacity: 255 }), tween().to(0.2, { scale: 1 }, { easing: "quartOut" }))
                .start();
        })
            .start();
    };
    ListLevel.prototype.effectClose = function (callback) {
        tween(this.shadow).to(0.2, { opacity: 0 }).start();
        tween(this.container).parallel(tween().to(0.2, { opacity: 0 }), tween().to(0.2, { scale: 0.7 }, { easing: "quartOut" }))
            .call(callback)
            .start();
    };
    ListLevel.prototype.onClose = function () {
        var _this = this;
        var _gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        _gameManager.playClickAudio();
        this.effectClose(function () {
            _this.node.active = false;
        });
        this._close = function () {
            this.node.active = false;
        };
        this.scheduleOnce(this._close, 0.3);
    };
    ListLevel.prototype.onClickItem = function (event) {
        var level = event.level;
        _gameManager.selectLevel(level);
        this.onClose();
    };
    ListLevel.prototype.previousPage = function () {
        var index = this.pageView.getCurrentPageIndex();
        if (index - 1 < 0)
            return;
        this.pageView.setCurrentPageIndex(index - 1);
    };
    ListLevel.prototype.nextPage = function () {
        var index = this.pageView.getCurrentPageIndex();
        this.pageView.setCurrentPageIndex(index + 1);
    };
    ListLevel.prototype.initItemNew = function () {
    };
    __decorate([
        property(cc.Node)
    ], ListLevel.prototype, "content", void 0);
    __decorate([
        property(cc.PageView)
    ], ListLevel.prototype, "pageView", void 0);
    __decorate([
        property(cc.Prefab)
    ], ListLevel.prototype, "page", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "unlock", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "lock", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "current", void 0);
    __decorate([
        property(cc.Node)
    ], ListLevel.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], ListLevel.prototype, "container", void 0);
    __decorate([
        property(cc.Prefab)
    ], ListLevel.prototype, "smallItem", void 0);
    __decorate([
        property(cc.Prefab)
    ], ListLevel.prototype, "bigItem", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ListLevel.prototype, "icon", void 0);
    ListLevel = __decorate([
        ccclass
    ], ListLevel);
    return ListLevel;
}(cc.Component));
exports.default = ListLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xpc3RMZXZlbC9MaXN0TGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQTJCO0FBQzNCLGtEQUFzQztBQUN0QywrQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMseUJBQXlCO0FBQ3pCLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixrQ0FBa0M7QUFDbEMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBRXRCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFdkIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztBQUdmO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBME1DO1FBdk1HLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQW1CLElBQUksQ0FBQTtRQUczQixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBcUIsRUFBRSxDQUFDOztJQXlLaEMsQ0FBQztJQXJLRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pFLEdBQUcsR0FB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Q0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwrQkFBVyxHQUFYO0lBRUEsQ0FBQztJQXRNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0NBQ087SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNLO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0U7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0c7SUFqQ1gsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBNN0I7SUFBRCxnQkFBQztDQTFNRCxBQTBNQyxDQTFNc0MsRUFBRSxDQUFDLFNBQVMsR0EwTWxEO2tCQTFNb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhIGZyb20gXCIuLi9EYXRhXCI7XG5pbXBvcnQgRWZmZWN0IGZyb20gXCIuLi9FZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQge1NUQVRVU30gZnJvbSBcIi4vTmV3Q2xpY2tJdGVtXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBU4buVbmcgc+G7kSBsZXZlbCBj4bunYSBnYW1lXG5jb25zdCBUT1RBTF9MRVZFTCA9IDMwO1xuLy8gU+G7kSBsZXZlbCBoaeG7g24gdGjhu4sgdHJvbmcgMSB0cmFuZ1xuY29uc3QgTEVWRUxfUEFHRSA9IDEwO1xuXG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuO1xuXG52YXIgX2dhbWVNYW5hZ2VyID0gbnVsbDtcbnZhciBfdWkgPSBudWxsO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdExldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlBhZ2VWaWV3KVxuICAgIHBhZ2VWaWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBhZ2U6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHVubG9jazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxvY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBjdXJyZW50OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGFkb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc21hbGxJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBiaWdJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGljb246IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2Nsb3NlO1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRJdGVtKCk7XG4gICAgICAgIF9nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIF91aSA9IGNjLmZpbmQoXCJDYW52YXMvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlDb250cm9sbGVyXCIpO1xuICAgICAgICB0aGlzLnNoYWRvdy5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuc2NhbGUgPSAwLjc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIF9nYW1lTWFuYWdlci5fc2VsZWN0ZWRMZXZlbCA9IGRhdGEudW5sb2NrZWRMZXZlbDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2xpY2tfaXRlbVwiLCB0aGlzLm9uQ2xpY2tJdGVtLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lZmZlY3RPcGVuKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgICAgIHZhciBwYWdlVmlldyA9IHRoaXMuY29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwiTGlzdFwiKS5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpO1xuICAgICAgICBpZiAoX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKF9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LmxldmVsICsgMSkgLyAxMCk7XG4gICAgICAgICAgICBwYWdlVmlldy5zZXRDdXJyZW50UGFnZUluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhZ2VWaWV3LnNldEN1cnJlbnRQYWdlSW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJjbGlja19pdGVtXCIsIHRoaXMub25DbGlja0l0ZW0sIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fY2xvc2UpO1xuICAgIH1cblxuICAgIGluaXRJdGVtKCk6IHZvaWQge1xuICAgICAgICBsZXQgcGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBpdGVtO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRPVEFMX0xFVkVMOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoaSArIDEpICUgMTAgPT0gMClcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdJdGVtKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbWFsbEl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvbltpXTtcbiAgICAgICAgICAgIGxldCBzY3JpcHQgPSBpdGVtLmdldENvbXBvbmVudChcIk5ld0NsaWNrSXRlbVwiKTtcbiAgICAgICAgICAgIHNjcmlwdC50aWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2NyaXB0LnNldExldmVsKGkgKyAxKTtcbiAgICAgICAgICAgIHNjcmlwdC5zZXRTdGF0dXMoU1RBVFVTLkxPQ0spO1xuICAgICAgICAgICAgcGFnZS5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSBMRVZFTF9QQUdFICYmIFRPVEFMX0xFVkVMID49IExFVkVMX1BBR0UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKHBhZ2UpO1xuICAgICAgICAgICAgICAgIHBhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhZ2UpO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBUT1RBTF9MRVZFTCAtIDEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChwYWdlKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVubG9ja2VkTGV2ZWwgPSBkYXRhLnVubG9ja2VkTGV2ZWwgKyAxO1xuICAgICAgICAgICAgbGV0IHBhZ2UgPSBNYXRoLmZsb29yKHVubG9ja2VkTGV2ZWwgLyAxMCk7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgaWYgKHBhZ2UgPT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5sb2NrZWRMZXZlbDsgKytpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBpdGVtLmdldENvbXBvbmVudChcIk5ld0NsaWNrSXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LmlzQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB1bmxvY2tlZExldmVsIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldFN0YXR1cyhTVEFUVVMuQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGljay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRTdGF0dXMoU1RBVFVTLlVOTE9DSyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGljay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bVBhZ2UgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBudW1JdGVtID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAobnVtSXRlbSA8IHVubG9ja2VkTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbnVtUGFnZV0uY2hpbGRyZW5bbnVtSXRlbV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBpdGVtLmdldENvbXBvbmVudChcIk5ld0NsaWNrSXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LmlzQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFnZSAqIDEwICsgbnVtSXRlbSA9PSB1bmxvY2tlZExldmVsIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0LnNjYWxlRm9yZXZlcihpdGVtLCAwLjk1LCAxLjA1LCAwLjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldFN0YXR1cyhTVEFUVVMuQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQudGljay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtSXRlbSAhPSB1bmxvY2tlZExldmVsIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldFN0YXR1cyhTVEFUVVMuVU5MT0NLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC50aWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKytudW1JdGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtSXRlbSA9PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1QYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtSXRlbSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgZWZmZWN0T3BlbigpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5zaGFkb3cpLnRvKDAuMiwge29wYWNpdHk6IDIwMH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuY29udGFpbmVyKS5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge29wYWNpdHk6IDI1NX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8oMC4yLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIGVmZmVjdENsb3NlKGNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjIsIHtvcGFjaXR5OiAwfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGhpcy5jb250YWluZXIpLnBhcmFsbGVsKFxuICAgICAgICAgICAgdHdlZW4oKS50bygwLjIsIHtvcGFjaXR5OiAwfSksXG4gICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge3NjYWxlOiAwLjd9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICApXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgICBsZXQgX2dhbWVNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgX2dhbWVNYW5hZ2VyLnBsYXlDbGlja0F1ZGlvKClcbiAgICAgICAgdGhpcy5lZmZlY3RDbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9jbG9zZSwgMC4zKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSXRlbShldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgdmFyIGxldmVsID0gZXZlbnQubGV2ZWw7XG4gICAgICAgIF9nYW1lTWFuYWdlci5zZWxlY3RMZXZlbChsZXZlbCk7XG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIHByZXZpb3VzUGFnZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5wYWdlVmlldy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XG4gICAgICAgIGlmIChpbmRleCAtIDEgPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNldEN1cnJlbnRQYWdlSW5kZXgoaW5kZXggLSAxKTtcbiAgICB9XG4gICAgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucGFnZVZpZXcuZ2V0Q3VycmVudFBhZ2VJbmRleCgpO1xuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNldEN1cnJlbnRQYWdlSW5kZXgoaW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBpbml0SXRlbU5ldygpOiB2b2lkIHtcblxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UIController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13ff8fyyBBLrq0/rwHWYaVT', 'UIController');
// Scripts/UIController.ts

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
var EffectManager_1 = require("./EffectManager");
var Data_1 = require("./Data");
var BundleManager_1 = require("./BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var onAds = true;
var UIController = /** @class */ (function (_super) {
    __extends(UIController, _super);
    function UIController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.home = null;
        _this.background = null;
        _this.moneyContainer = null;
        _this.moneyTop = null;
        _this.levels = null;
        _this.bed = null;
        _this.ads = null;
        _this.replay = null;
        _this.next = null;
        _this.tapToStart = null;
        _this.setting = null;
        _this.successful = null;
        _this.money = null;
        _this.second = null;
        _this.countDown = null;
        _this.continue = null;
        _this.money2 = null;
        _this.ads2 = null;
        _this.point = null;
        _this.comingSoon = null;
        _this.alert = null;
        _this.invite = null;
        _this.partical = null;
        _this.background2 = null;
        _this.uiEndGame = [];
        _this.uiIntroduce = [];
        _this.uiContinue = [];
        _this.uiControlling = [];
        _this._watchAds = [];
        _this._gameManager = null;
        return _this;
    }
    UIController.prototype.onLoad = function () {
        this.background.zIndex = cc.macro.MIN_ZINDEX;
        this.uiEndGame = [this.home, this.ads, this.replay, this.next, this.successful, this.moneyContainer, this.moneyTop, this.invite];
        this.uiIntroduce = [this.levels, this.bed, this.tapToStart, this.setting, this.moneyTop];
        this.uiContinue = [this.continue, this.countDown, this.second, this.money2, this.ads2, this.home];
        this.uiControlling = [this.levels, this.bed, this.tapToStart, this.setting];
        this._watchAds = [this.ads, this.ads2];
        this.node.zIndex = cc.macro.MAX_ZINDEX - 2;
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        this._bundleInstance = BundleManager_1.default.getInstance();
    };
    UIController.prototype.onEnable = function () {
        this.showHome();
    };
    UIController.prototype.start = function () {
        this.background.active = false;
        this.tapToStart.zIndex = cc.macro.MAX_ZINDEX - 1;
    };
    UIController.prototype.showHome = function () {
        this.showUIEndGame(false);
        this.showUIIntroduce(true);
        this.showUIContinue(false);
        this.showButtonAdsContinue(false);
        this.showButtonAdsEndGame(false);
        this.tapToStart.position = cc.v3(0, 213);
        EffectManager_1.default.effectScaleStart(this.tapToStart);
    };
    //Hiển thị các hiệu ứng scale, tiền bay khi người chơi chọn đúng đáp án
    UIController.prototype.showUIEndGame = function (isShow) {
        var _this = this;
        this.background.active = isShow;
        if (isShow) {
            this._gameManager._clickX4 = true;
            this.moneyContainer.getChildByName("txt_money").getComponent(cc.Label).string = "50";
            tween(this.node).call(function () {
                this.setting.active = false;
                this.moneyTop.scale = 0;
                this.moneyTop.opacity = 0;
                EffectManager_1.default.showButton(this.moneyTop, 0.2);
                EffectManager_1.default.showButton(this.ads, 0.2);
                this.effectMoneyFly();
                this.showButtonAdsEndGame(onAds);
                var p = cc.instantiate(this.partical);
                this.node.addChild(p);
                p.position = cc.v3(0, 230);
                p.zIndex = cc.macro.MIN_ZINDEX + 1;
            }.bind(this))
                .delay(1.25)
                .call(function () {
                _this.moneyContainer.scale = 0;
                _this.moneyContainer.opacity = 0;
                EffectManager_1.default.showButton(_this.moneyContainer, 0.7);
            })
                .delay(1)
                .call(function () {
                var money = _this._gameManager._levelCurrent.script._money;
                _this._gameManager.addMoney(money);
            })
                .delay(1.5)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.home, 0.7);
            })
                .delay(0.3)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.invite, 0.7);
            })
                .delay(0.5)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.next, 0.7);
            })
                .delay(0.3)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.replay, 0.7);
                var p = _this.node.getChildByName("Partical");
                if (p) {
                    p.destroy();
                }
            })
                .start();
        }
        else {
            this.uiEndGame.forEach(function (element) {
                element.active = isShow;
            });
            this.node.children.forEach(function (children) {
                if (children.name == "Money") {
                    children.destroy();
                }
            });
        }
    };
    UIController.prototype.effectMoneyFly = function () {
        EffectManager_1.default.effectFlyMoney(this.money, this.node);
    };
    //Hiển thị giới thiệu lý do Lupin vào tù
    UIController.prototype.showUIIntroduce = function (isShow) {
        var _this = this;
        this.background.active = false;
        this.home.active = false;
        this.tapToStart.position = cc.v3(0, 213);
        EffectManager_1.default.effectScaleStart(this.tapToStart);
        if (isShow) {
            this.uiIntroduce.forEach(function (element) {
                element.opacity = 0;
            });
            tween(this.node).call(function () {
                EffectManager_1.default.effectScaleOption(_this.setting, 0.3);
            })
                .delay(0.4)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.moneyTop, 0.3);
            })
                .delay(0.4)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.levels, 0.3);
            })
                .delay(0.4)
                .call(function () {
                EffectManager_1.default.effectScaleOption(_this.tapToStart, 0.3);
            })
                .start();
        }
        else {
            this.uiIntroduce.forEach(function (element) {
                element.active = isShow;
            });
        }
    };
    UIController.prototype.showUIContinue = function (isShow) {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var _data = data;
            if (_data.money < 200) {
                _this.uiContinue[3].getChildByName("txt_money").color = cc.color(255, 100, 100);
                _this.uiContinue[3].getChildByName("txt_money").getComponent(cc.LabelOutline).color = cc.color(255, 0, 0);
            }
            else {
                _this.uiContinue[3].getChildByName("txt_money").color = cc.color(255, 255, 255);
                _this.uiContinue[3].getChildByName("txt_money").getComponent(cc.LabelOutline).color = cc.color(77, 77, 77);
            }
        });
        this.background.active = isShow;
        for (var _i = 0, _a = this.uiContinue; _i < _a.length; _i++) {
            var node = _a[_i];
            node.active = isShow;
        }
        if (isShow) {
            this.showButtonAdsContinue(onAds);
        }
    };
    UIController.prototype.showComingSoon = function () {
        var comingSoon = this.node.getChildByName("ComingSoon");
        if (comingSoon) {
            comingSoon.active = true;
        }
        else {
            comingSoon = cc.instantiate(this.comingSoon);
            this.node.addChild(comingSoon);
        }
        this.effectMoneyFly();
    };
    UIController.prototype.showUIControlling = function (isShow) {
        if (isShow) {
            this.showUIIntroduce(true);
        }
        else {
            this.uiControlling.forEach(function (node) {
                node.active = false;
            });
        }
    };
    UIController.prototype.showButtonAdsContinue = function (isShow) {
        this.ads2.active = isShow;
    };
    UIController.prototype.showButtonAdsEndGame = function (isShow) {
        this.ads.active = isShow;
    };
    UIController.prototype.showAlert = function (txt, time) {
        if (txt === void 0) { txt = ''; }
        if (time === void 0) { time = 0; }
        var alert = this.node.getChildByName("Alert");
        if (alert) {
            alert.active = true;
        }
        else {
            alert = cc.instantiate(this.alert);
            this.node.addChild(alert);
        }
        if (txt) {
            var alertController = alert.getComponent('Alert');
            alertController.setText(txt);
        }
        time && this.scheduleOnce(function () { return alert.active = false; }, time);
    };
    UIController.prototype.setMoney = function (money) {
        var _money = this.moneyContainer.getChildByName("txt_money");
        var str = _money.getComponent(cc.Label).string;
        str = (Number(str) + money).toString();
        _money.getComponent(cc.Label).string = str;
    };
    UIController.prototype.showGuide = function (bool) {
        var _this = this;
        var hand = this.node.getChildByName("hand");
        if (bool) {
            tween(this.node).delay(1)
                .call(function () {
                _this.background2.active = true;
                _this.background2.zIndex = cc.macro.MAX_ZINDEX - 100;
                _this.background2.opacity = 150;
                hand.zIndex = cc.macro.MAX_ZINDEX;
                tween(hand).delay(1).repeatForever(tween(hand).call(function () {
                    hand.position = cc.v3(_this.tapToStart.x - 50, _this.tapToStart.y - 500);
                    hand.opacity = 0;
                    hand.active = true;
                })
                    .parallel(tween(hand).to(0.7, { opacity: 255 }), tween(hand).to(0.7, { position: cc.v3(_this.tapToStart.x - 50, _this.tapToStart.y - 300) }).call(function () {
                    cc.tween(hand).to(0.5, { scale: 0.9 }, { easing: "cubicIn" }).to(0.5, { scale: 1 }, { easing: "cubicOut" }).start();
                }))
                    .delay(1))
                    .start();
            }).start();
        }
        else {
            cc.Tween.stopAllByTarget(hand);
            hand.active = false;
            tween(this.background2).to(0.3, { opacity: 0 })
                .call(function () {
                _this.background2.active = false;
            })
                .start();
        }
    };
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "home", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "moneyContainer", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "moneyTop", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "levels", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "bed", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "ads", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "replay", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "next", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "tapToStart", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "setting", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "successful", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "money", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "second", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "countDown", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "continue", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "money2", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "ads2", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "point", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "comingSoon", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "alert", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "invite", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "partical", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "background2", void 0);
    UIController = __decorate([
        ccclass
    ], UIController);
    return UIController;
}(cc.Component));
exports.default = UIController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsK0JBQTBCO0FBQzFCLGlEQUE0QztBQUd0QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUdqQjtJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWtWQztRQS9VRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBWSxJ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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuL0VmZmVjdE1hbmFnZXJcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL0RhdGFcIjtcbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuL0J1bmRsZU1hbmFnZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcblxubGV0IG9uQWRzID0gdHJ1ZTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob21lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbW9uZXlDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbW9uZXlUb3A6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGV2ZWxzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJlZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhZHM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVwbGF5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5leHQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFwVG9TdGFydDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXR0aW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHN1Y2Nlc3NmdWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBtb25leTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNlY29uZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb3VudERvd246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGludWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbW9uZXkyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFkczI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY29taW5nU29vbjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYWxlcnQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbnZpdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwYXJ0aWNhbDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgdWlFbmRHYW1lID0gW107XG4gICAgcHJpdmF0ZSB1aUludHJvZHVjZSA9IFtdO1xuICAgIHByaXZhdGUgdWlDb250aW51ZSA9IFtdO1xuICAgIHByaXZhdGUgdWlDb250cm9sbGluZyA9IFtdO1xuICAgIHByaXZhdGUgX3dhdGNoQWRzID0gW107XG4gICAgcHJpdmF0ZSBfZ2FtZU1hbmFnZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2J1bmRsZUluc3RhbmNlO1xuICAgIG9uTG9hZCAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC56SW5kZXggPSBjYy5tYWNyby5NSU5fWklOREVYO1xuICAgICAgICB0aGlzLnVpRW5kR2FtZSA9IFt0aGlzLmhvbWUsIHRoaXMuYWRzLCB0aGlzLnJlcGxheSwgdGhpcy5uZXh0LCB0aGlzLnN1Y2Nlc3NmdWwsIHRoaXMubW9uZXlDb250YWluZXIsIHRoaXMubW9uZXlUb3AsIHRoaXMuaW52aXRlXTtcbiAgICAgICAgdGhpcy51aUludHJvZHVjZSA9IFt0aGlzLmxldmVscywgdGhpcy5iZWQsIHRoaXMudGFwVG9TdGFydCwgdGhpcy5zZXR0aW5nLCB0aGlzLm1vbmV5VG9wXTtcbiAgICAgICAgdGhpcy51aUNvbnRpbnVlID0gW3RoaXMuY29udGludWUsIHRoaXMuY291bnREb3duLCB0aGlzLnNlY29uZCwgdGhpcy5tb25leTIsIHRoaXMuYWRzMiwgdGhpcy5ob21lXTtcbiAgICAgICAgdGhpcy51aUNvbnRyb2xsaW5nID0gW3RoaXMubGV2ZWxzLCB0aGlzLmJlZCwgdGhpcy50YXBUb1N0YXJ0LCB0aGlzLnNldHRpbmddO1xuICAgICAgICB0aGlzLl93YXRjaEFkcyA9IFt0aGlzLmFkcywgdGhpcy5hZHMyXTtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAyO1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlID0gQnVuZGxlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlICgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93SG9tZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFwVG9TdGFydC56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYIC0gMTtcbiAgICB9XG5cbiAgICBzaG93SG9tZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93VUlFbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zaG93VUlJbnRyb2R1Y2UodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2hvd1VJQ29udGludWUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNob3dCdXR0b25BZHNDb250aW51ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbkFkc0VuZEdhbWUoZmFsc2UpO1xuICAgICAgICB0aGlzLnRhcFRvU3RhcnQucG9zaXRpb24gPSBjYy52MygwLCAyMTMpO1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlU3RhcnQodGhpcy50YXBUb1N0YXJ0KTtcbiAgICB9XG4gICAgLy9IaeG7g24gdGjhu4sgY8OhYyBoaeG7h3Ug4bupbmcgc2NhbGUsIHRp4buBbiBiYXkga2hpIG5nxrDhu51pIGNoxqFpIGNo4buNbiDEkcO6bmcgxJHDoXAgw6FuXG4gICAgc2hvd1VJRW5kR2FtZShpc1Nob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgaWYgKGlzU2hvdylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2NsaWNrWDQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb25leUNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiNTBcIjtcbiAgICAgICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlUb3Auc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlUb3Aub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93QnV0dG9uKHRoaXMubW9uZXlUb3AsIDAuMik7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93QnV0dG9uKHRoaXMuYWRzLCAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0TW9uZXlGbHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCdXR0b25BZHNFbmRHYW1lKG9uQWRzKTtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFydGljYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICBwLnBvc2l0aW9uID0gY2MudjMoMCwgMjMwKTtcbiAgICAgICAgICAgICAgICBwLnpJbmRleCA9IGNjLm1hY3JvLk1JTl9aSU5ERVggKyAxO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmRlbGF5KDEuMjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUNvbnRhaW5lci5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUNvbnRhaW5lci5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dCdXR0b24odGhpcy5tb25leUNvbnRhaW5lciwgMC43KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbW9uZXkgPSB0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LnNjcmlwdC5fbW9uZXk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYWRkTW9uZXkobW9uZXkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgxLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RTY2FsZU9wdGlvbih0aGlzLmhvbWUsIDAuNyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMuaW52aXRlLCAwLjcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RTY2FsZU9wdGlvbih0aGlzLm5leHQsIDAuNyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMucmVwbGF5LCAwLjcpO1xuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGFydGljYWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51aUVuZEdhbWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5uYW1lID09IFwiTW9uZXlcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVmZmVjdE1vbmV5Rmx5KCk6IHZvaWQge1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdEZseU1vbmV5KHRoaXMubW9uZXksIHRoaXMubm9kZSk7XG4gICAgfVxuICAgIFxuICAgIC8vSGnhu4NuIHRo4buLIGdp4bubaSB0aGnhu4d1IGzDvSBkbyBMdXBpbiB2w6BvIHTDuVxuICAgIHNob3dVSUludHJvZHVjZShpc1Nob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFwVG9TdGFydC5wb3NpdGlvbiA9IGNjLnYzKDAsIDIxMyk7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVTdGFydCh0aGlzLnRhcFRvU3RhcnQpO1xuICAgICAgICBpZiAoaXNTaG93KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVpSW50cm9kdWNlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMuc2V0dGluZywgMC4zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMC40KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVPcHRpb24odGhpcy5tb25leVRvcCwgMC4zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMC40KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVPcHRpb24odGhpcy5sZXZlbHMsIDAuMyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuNClcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKHRoaXMudGFwVG9TdGFydCwgMC4zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudWlJbnRyb2R1Y2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1VJQ29udGludWUoaXNTaG93KTogdm9pZCB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IF9kYXRhID0gZGF0YVxuICAgICAgICAgICAgaWYgKF9kYXRhLm1vbmV5IDwgMjAwIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udGludWVbM10uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfbW9uZXlcIikuY29sb3IgPSBjYy5jb2xvcigyNTUsIDEwMCwgMTAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29udGludWVbM10uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfbW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb250aW51ZVszXS5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb250aW51ZVszXS5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IGNjLmNvbG9yKDc3LCA3NywgNzcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5hY3RpdmUgPSBpc1Nob3c7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy51aUNvbnRpbnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dCdXR0b25BZHNDb250aW51ZShvbkFkcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29taW5nU29vbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbWluZ1Nvb24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb21pbmdTb29uXCIpO1xuICAgICAgICBpZiAoY29taW5nU29vbilcbiAgICAgICAge1xuICAgICAgICAgICAgY29taW5nU29vbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29taW5nU29vbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29taW5nU29vbik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY29taW5nU29vbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZmZlY3RNb25leUZseSgpO1xuICAgIH1cblxuICAgIHNob3dVSUNvbnRyb2xsaW5nKGlzU2hvdyk6IHZvaWQge1xuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dVSUludHJvZHVjZSh0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xsaW5nLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0J1dHRvbkFkc0NvbnRpbnVlKGlzU2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFkczIuYWN0aXZlID0gaXNTaG93O1xuICAgIH1cbiAgICBcbiAgICBzaG93QnV0dG9uQWRzRW5kR2FtZShpc1Nob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZHMuYWN0aXZlID0gaXNTaG93O1xuICAgIH1cblxuICAgIHNob3dBbGVydCh0eHQ9JycsIHRpbWU9MCk6IHZvaWQge1xuICAgICAgICBsZXQgYWxlcnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJBbGVydFwiKTtcbiAgICAgICAgaWYgKGFsZXJ0KVxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFsZXJ0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChhbGVydCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHh0KSB7XG4gICAgICAgICAgICBjb25zdCBhbGVydENvbnRyb2xsZXIgPSBhbGVydC5nZXRDb21wb25lbnQoJ0FsZXJ0JylcbiAgICAgICAgICAgIGFsZXJ0Q29udHJvbGxlci5zZXRUZXh0KHR4dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgJiYgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gYWxlcnQuYWN0aXZlID0gZmFsc2UsIHRpbWUpXG4gICAgfVxuXG4gICAgc2V0TW9uZXkobW9uZXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgX21vbmV5ID0gdGhpcy5tb25leUNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKTtcbiAgICAgICAgbGV0IHN0ciA9IF9tb25leS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcbiAgICAgICAgc3RyID0gKE51bWJlcihzdHIpICsgbW9uZXkpLnRvU3RyaW5nKCk7XG4gICAgICAgIF9tb25leS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0cjtcbiAgICB9XG5cbiAgICBzaG93R3VpZGUoYm9vbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XG4gICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZDIuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWCAtIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kMi5vcGFjaXR5ID0gMTUwO1xuICAgICAgICAgICAgICAgICAgICBoYW5kLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKGhhbmQpLmRlbGF5KDEpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0d2VlbihoYW5kKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZC5wb3NpdGlvbiA9IGNjLnYzKHRoaXMudGFwVG9TdGFydC54IC0gNTAsIHRoaXMudGFwVG9TdGFydC55IC0gNTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKGhhbmQpLnRvKDAuNywge29wYWNpdHk6IDI1NX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbihoYW5kKS50bygwLjcsIHtwb3NpdGlvbjogY2MudjModGhpcy50YXBUb1N0YXJ0LnggLSA1MCwgdGhpcy50YXBUb1N0YXJ0LnkgLSAzMDApfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihoYW5kKS50bygwLjUsIHtzY2FsZTogMC45fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KS50bygwLjUsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChoYW5kKTtcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLmJhY2tncm91bmQyKS50bygwLjMsIHtvcGFjaXR5OiAwfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZDIuYWN0aXZlICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbnRyb2R1Y2UvSW50cm9kdWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUMvQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7SUFDOUgsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO0lBQ2hSLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUs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O0lBRzNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRDQUNDO0lBbEJYLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E0RzdCO0lBQUQsZ0JBQUM7Q0E1R0QsQUE0R0MsQ0E1R3NDLEVBQUUsQ0FBQyxTQUFTLEdBNEdsRDtrQkE1R29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWZmZWN0TWFuYWdlciBmcm9tIFwiLi4vU2NyaXB0cy9FZmZlY3RNYW5hZ2VyXCI7XG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IHN0b3J5VGV4dCA9IFtbXCJTVElDS01BTlwiLCBcIklOVk9MVkVEXCIsIFwiSU5cIiwgXCJBXCIsIFwiQkFOS1wiLCBcIlJPQkJFUllcIiwgXCJIRVwiLCBcIldBU1wiLCBcIkFSUkVTVEVEXCIsIFwiSU5cIiwgXCJBXCIsIFwiU0VDUkVUXCIsIFwiUFJJU09OXCIsIFwiSU5cIiwgXCJBTUVSSUNBXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCJBRlRFUlwiLCBcIkVTQ0FQSU5HXCIsIFwiRlJPTVwiLCBcIlRIRVwiLCBcIlBSSVNPTixcIiwgXCJUSEVcIiwgXCJTVElDS01BTlwiLCBcIkxJVkVEXCIsIFwiQVwiLCBcIkxJRkVcIiwgXCJPRlwiLCBcIkxVWFVSWS5cIiwgXCJcXG5CVVRcIiwgXCJUSEVSRVwiLCBcIldBU1wiLCBcIkFOXCIsIFwiRU5FTVlcIiwgXCJXSE9cIiwgXCJXQVNcIiwgXCJMSVZJTkdcIiwgXCJJTlwiLCBcIkFcIiwgXCJQUklTT05cIiwgXCJVTkRFUlwiLCBcIlRIRVwiLCBcIlNFQS5cIiwgXCJcXG5QVU5JU0hJTkdcIiwgXCJISU1cIiwgXCJXQVNcIiwgXCJUSEVcIiwgXCJORVhUXCIsIFwiT0JKRUNUSVZFLlwiXSxcbiAgICAgICAgICAgICAgICAgICAgW1wiQUZURVJcIiwgXCJFU0NBUElOR1wiLCBcIlRPXCIsIFwiVEhFXCIsIFwiSVNMQU5ELFwiLCBcIlRIRVwiLCBcIlNUSUNLTUFOXCIsIFwiU1RPTEVcIiwgXCJBXCIsIFwiSkVXRUxcIiwgXCJGUk9NXCIsIFwiQU5cIiwgXCJBQk9SSUdJTkFMXCIsIFwiVFJJQkUuXCIsIFwiSEVcIiwgXCJXQVNcIiwgXCJPTkNFXCIsIFwiQUdBSU5cIiwgXCJBUlJFU1RFRFwiXV07XG5cbmNvbnN0IHR3ZWVuID0gY2MudHdlZW47XG5cbnZhciBpbnRyb0luZGV4ID0gMDtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRyb2R1Y2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxuICAgIHByaXNvblNjZW5lOiBjYy5TcHJpdGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbmV4dDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdG9yeTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc3RvcnlMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBsZWZ0OiBjYy5TcHJpdGVGcmFtZVtdID1bXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHJpZ2h0OiBjYy5TcHJpdGVGcmFtZVtdID1bXTtcblxuICAgIHByaXZhdGUgY291bnRXb3JkID0gMDtcbiAgICAvLyBwcml2YXRlIGludHJvSW5kZXggPSAwO1xuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldEludHJvZHVjZSgpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJ1bkFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldEludHJvZHVjZSgpO1xuICAgIH1cblxuICAgIHJlc2V0SW50cm9kdWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByaXNvblNjZW5lWzBdLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDUwLCAxMjAwKTtcbiAgICAgICAgdGhpcy5wcmlzb25TY2VuZVsxXS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTIwMCwgMTMzKTtcbiAgICAgICAgdGhpcy5uZXh0Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLm5leHQuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLnN0b3J5Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLnN0b3J5TGFiZWwuc3RyaW5nID0gXCJcIlxuICAgIH1cbiAgICBydW5BbmltYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLnByaXNvblNjZW5lWzBdLm5vZGUpLnRvKDAuMywge3Bvc2l0aW9uOiBjYy52MygwLCAzODUpfSkuc3RhcnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdHdlZW4odGhpcy5wcmlzb25TY2VuZVsxXS5ub2RlKS50bygwLjMsIHtwb3NpdGlvbjogY2MudjMoMCwgMjIwKX0pLnN0YXJ0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3Rvcnkuc2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdG9yeS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHR3ZWVuKHRoaXMuc3RvcnkpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlWDogMS4yLCBzY2FsZVk6IDEuNSwgb3BhY2l0eTogMjU1fSwge2Vhc2luZzogXCJxdWFkSW5cIn0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpbnRyb0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuZm9udFNpemUgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxhYmVsLmxpbmVIZWlnaHQgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuZm9udFNpemUgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxhYmVsLmxpbmVIZWlnaHQgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuZm9udFNpemUgPSAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxhYmVsLmxpbmVIZWlnaHQgPSAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudFdvcmQgPCBzdG9yeVRleHRbaW50cm9JbmRleF0ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiZWwuc3RyaW5nICs9IHN0b3J5VGV4dFtpbnRyb0luZGV4XVt0aGlzLmNvdW50V29yZF0gKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwic3RvcnlcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dCdXR0b24odGhpcy5uZXh0LCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudFdvcmQrK1xuICAgICAgICAgICAgICAgICAgICB9LDAuMSxzdG9yeVRleHRbaW50cm9JbmRleF0ubGVuZ3RoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIC8vIHR3ZWVuKHRoaXMucHJpc29uU2NlbmVbMF0pLnRvKDAuMywge3Bvc2l0aW9uOiBjYy52MygwLCAzODUpfSkuc3RhcnQoKTtcbiAgICAgICAgLy8gdHdlZW4odGhpcy5wcmlzb25TY2VuZVsxXSkuZGVsYXkoMC44KS50bygwLjMsIHtwb3NpdGlvbjogY2MudjMoMCwgMTMzKX0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgc2V0SW50cm8obGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZWZ0Lmxlbmd0aDtcbiAgICAgICAgaW50cm9JbmRleCA9IE1hdGguZmxvb3IobGV2ZWwgLyAxMClcbiAgICAgICAgdGhpcy5jb3VudFdvcmQgPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpbnRyb0luZGV4ID09IGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaXNvblNjZW5lWzBdLnNwcml0ZUZyYW1lID0gdGhpcy5sZWZ0W2ldO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpc29uU2NlbmVbMV0uc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0W2ldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Guide/Guide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83398XgwSJOD6j4WX9n26Ap', 'Guide');
// Guide/Guide.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.hand.active = false;
        this._shadow = cc.find("Canvas/Shadow");
        this._setting = cc.find("Canvas/BtnSetting");
    };
    NewClass.prototype.onEnable = function () {
        this.action();
        this._setting.getChildByName("Block").active = true;
        this._setting.color = new cc.Color(150, 150, 150, 255);
    };
    NewClass.prototype.onDisable = function () {
        this._shadow.opacity = 0;
        this._setting.getChildByName("Block").active = false;
        this._setting.color = new cc.Color(255, 255, 255, 255);
    };
    NewClass.prototype.action = function () {
        var _this = this;
        this.hand.active = true;
        cc.tween(this._shadow).to(0.2, { opacity: 150 })
            .call(function () {
            cc.tween(_this.hand).repeatForever(cc.tween().call(function () {
                _this.hand.position = cc.v3(-310, -960);
                _this.hand.opacity = 0;
            })
                .parallel(cc.tween().to(0.5, { opacity: 255 }), cc.tween().to(0.5, { position: cc.v3(-310, -800) }).call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            }))
                .delay(0.7)
                .to(0.5, { position: cc.v3(0, -800) })
                .call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            })
                .delay(0.7)
                .to(0.5, { position: cc.v3(310, -800) })
                .call(function () {
                cc.tween(_this.hand).to(0.2, { scale: 0.95 }, { easing: "cubicIn" }).to(0.2, { scale: 1 }, { easing: "cubicOut" }).start();
            })
                .delay(0.7)
                .parallel(cc.tween().by(0.5, { position: cc.v3(200, 0) }), cc.tween().to(0.5, { opacity: 0 })))
                .start();
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HdWlkZS9HdWlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZEQztRQTFERyxVQUFJLEdBQVksSUFBSSxDQUFDOztJQTBEekIsQ0FBQztJQXJERyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQUEsaUJBbUNDO1FBbENHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDO2FBQ3pDLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FDN0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDUixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUM7aUJBQ0QsUUFBUSxDQUNMLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuRCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RILENBQUMsQ0FBQyxDQUNMO2lCQUNBLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7aUJBQ25DLElBQUksQ0FBQztnQkFDRixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO2lCQUNyQyxJQUFJLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0SCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDVixRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUM3QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUNuQyxDQUNKO2lCQUNBLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBRWpCLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUhKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2RDVCO0lBQUQsZUFBQztDQTdERCxBQTZEQyxDQTdEcUMsRUFBRSxDQUFDLFNBQVMsR0E2RGpEO2tCQTdEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9zaGFkb3c7XG4gICAgcHJpdmF0ZSBfc2V0dGluZztcblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zaGFkb3cgPSBjYy5maW5kKFwiQ2FudmFzL1NoYWRvd1wiKTtcbiAgICAgICAgdGhpcy5fc2V0dGluZyA9IGNjLmZpbmQoXCJDYW52YXMvQnRuU2V0dGluZ1wiKTtcbiAgICB9XG4gICAgXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX3NldHRpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJCbG9ja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zZXR0aW5nLmNvbG9yID0gbmV3IGNjLkNvbG9yKDE1MCwgMTUwLCAxNTAsIDI1NSk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaGFkb3cub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuX3NldHRpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJCbG9ja1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2V0dGluZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgIH1cbiAgICBhY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLl9zaGFkb3cpLnRvKDAuMiwge29wYWNpdHk6IDE1MH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5wb3NpdGlvbiA9IGNjLnYzKC0zMTAsIC05NjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjUsIHtvcGFjaXR5OiAyNTV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNSwge3Bvc2l0aW9uOiBjYy52MygtMzEwLCAtODAwKX0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhhbmQpLnRvKDAuMiwge3NjYWxlOiAwLjk1fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KS50bygwLjIsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7cG9zaXRpb246IGNjLnYzKDAsIC04MDApfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhhbmQpLnRvKDAuMiwge3NjYWxlOiAwLjk1fSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KS50bygwLjIsIHtzY2FsZTogMX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoMzEwLCAtODAwKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kKS50bygwLjIsIHtzY2FsZTogMC45NX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSkudG8oMC4yLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjUsIHtwb3NpdGlvbjogY2MudjMoMjAwLCAwKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC41LCB7b3BhY2l0eTogMH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ActionController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5eadbNZIh1KfLC/ZwVlKPTE', 'ActionController');
// Scripts/ActionController.ts

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
exports.EASING = exports.LISTENER = exports.TYPE = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var TYPE;
(function (TYPE) {
    TYPE[TYPE["NONE"] = 0] = "NONE";
    TYPE[TYPE["ACTIVE"] = 1] = "ACTIVE";
    TYPE[TYPE["ANIMATION"] = 2] = "ANIMATION";
    TYPE[TYPE["MIX"] = 3] = "MIX";
    TYPE[TYPE["MOVE_TO"] = 4] = "MOVE_TO";
    TYPE[TYPE["MOVE_BY"] = 5] = "MOVE_BY";
    TYPE[TYPE["OPACITY"] = 6] = "OPACITY";
    TYPE[TYPE["ROTATION"] = 7] = "ROTATION";
    TYPE[TYPE["SCALE"] = 8] = "SCALE";
    TYPE[TYPE["STOP_ACTION"] = 9] = "STOP_ACTION";
    TYPE[TYPE["ZOOM_CAMERA"] = 10] = "ZOOM_CAMERA";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var LISTENER;
(function (LISTENER) {
    LISTENER[LISTENER["NONE"] = 0] = "NONE";
    LISTENER[LISTENER["START"] = 1] = "START";
    LISTENER[LISTENER["END"] = 2] = "END";
    LISTENER[LISTENER["COMPLETE"] = 3] = "COMPLETE";
})(LISTENER = exports.LISTENER || (exports.LISTENER = {}));
var EASING;
(function (EASING) {
    EASING[EASING["NONE"] = 0] = "NONE";
    EASING[EASING["QuadIn"] = 1] = "QuadIn";
    EASING[EASING["QuadOut"] = 2] = "QuadOut";
    EASING[EASING["QuadInOut"] = 3] = "QuadInOut";
    EASING[EASING["CubicIn"] = 4] = "CubicIn";
    EASING[EASING["CubicOut"] = 5] = "CubicOut";
    EASING[EASING["CubicInOut"] = 6] = "CubicInOut";
    EASING[EASING["QuartIn"] = 7] = "QuartIn";
    EASING[EASING["QuartOut"] = 8] = "QuartOut";
    EASING[EASING["QuartInOut"] = 9] = "QuartInOut";
    EASING[EASING["QuintIn"] = 10] = "QuintIn";
    EASING[EASING["QuintOut"] = 11] = "QuintOut";
    EASING[EASING["QuintInOut"] = 12] = "QuintInOut";
    EASING[EASING["SineIn"] = 13] = "SineIn";
    EASING[EASING["SineOut"] = 14] = "SineOut";
    EASING[EASING["SineInOut"] = 15] = "SineInOut";
    EASING[EASING["ExpoIn"] = 16] = "ExpoIn";
    EASING[EASING["ExpoOut"] = 17] = "ExpoOut";
    EASING[EASING["ExpoInOut"] = 18] = "ExpoInOut";
    EASING[EASING["CircIn"] = 19] = "CircIn";
    EASING[EASING["CircOut"] = 20] = "CircOut";
    EASING[EASING["CircInOut"] = 21] = "CircInOut";
    EASING[EASING["ElasticIn"] = 22] = "ElasticIn";
    EASING[EASING["ElasticOut"] = 23] = "ElasticOut";
    EASING[EASING["ElasticInOut"] = 24] = "ElasticInOut";
    EASING[EASING["BackIn"] = 25] = "BackIn";
    EASING[EASING["BackOut"] = 26] = "BackOut";
    EASING[EASING["BackInOut"] = 27] = "BackInOut";
    EASING[EASING["BounceIn"] = 28] = "BounceIn";
    EASING[EASING["BounceOut"] = 29] = "BounceOut";
    EASING[EASING["BounceInOut"] = 30] = "BounceInOut";
    EASING[EASING["Smooth"] = 31] = "Smooth";
    EASING[EASING["Fade"] = 32] = "Fade";
})(EASING = exports.EASING || (exports.EASING = {}));
;
var ActionController = /** @class */ (function (_super) {
    __extends(ActionController, _super);
    function ActionController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.type = TYPE.NONE;
        _this_1.repeatForever = false;
        _this_1._listener = LISTENER.NONE;
        _this_1._repeatTimes = 1;
        _this_1._skeleton = null;
        _this_1._track = 0;
        _this_1._animationName = "";
        _this_1._animation1 = "";
        _this_1._animation2 = "";
        _this_1._timeMix = 0;
        _this_1._loop = false;
        _this_1._timeScale = 0;
        _this_1.timeDelay = 0;
        _this_1.duration = 0;
        _this_1._isActive = false;
        _this_1._position = new cc.Vec2();
        _this_1._easing = EASING.NONE;
        _this_1._value = 0;
        _this_1._stopAllAction = false;
        _this_1.target = [];
        _this_1.callback = [];
        return _this_1;
    }
    Object.defineProperty(ActionController.prototype, "repeatTimes", {
        set: function (value) {
            if (value >= 0)
                this._repeatTimes = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionController.prototype.runAction = function (_this) {
        var isTrue = true;
        var easingName = _this.getEasing(_this._easing);
        switch (_this.type) {
            case TYPE.ACTIVE:
                _this.target.forEach(function (element) {
                    element.active = _this._isActive;
                });
                _this.runCallback(_this);
                break;
            case TYPE.ANIMATION:
                cc.Tween.stopAllByTarget(_this._skeleton);
                if (!_this._skeleton)
                    break;
                if (_this._timeMix > 0) {
                    _this._skeleton.setMix(_this._skeleton.animation, _this._animationName, _this._timeMix);
                }
                _this._skeleton.timeScale = _this._timeScale;
                tween(_this._skeleton.node).delay(_this.timeDelay).call(function () {
                    _this._skeleton.setAnimation(_this._track, _this._animationName, _this._loop);
                }).start();
                _this.onListener(_this, isTrue, _this._listener);
                break;
            case TYPE.MIX:
                _this._skeleton.setMix(_this._animation1, _this._animation2, _this.timeMix);
                _this.runCallback(_this);
                break;
            case TYPE.MOVE_BY:
                for (var _i = 0, _a = _this.target; _i < _a.length; _i++) {
                    var t = _a[_i];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).by(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).by(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.MOVE_TO:
                for (var _b = 0, _c = _this.target; _b < _c.length; _b++) {
                    var t = _c[_b];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { position: cc.v3(_this._position) }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.OPACITY:
                for (var _d = 0, _e = _this.target; _d < _e.length; _d++) {
                    var t = _e[_d];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { opacity: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { opacity: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.ROTATION:
                for (var _f = 0, _g = _this.target; _f < _g.length; _f++) {
                    var t = _g[_f];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { rotation: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { rotation: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.SCALE:
                for (var _h = 0, _j = _this.target; _h < _j.length; _h++) {
                    var t = _j[_h];
                    if (_this.repeatForever) {
                        tween(t).repeatForever(tween().delay(_this.timeDelay).to(_this.duration, { scale: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                    else {
                        tween(t).repeat(_this._repeatTimes, tween().delay(_this.timeDelay).to(_this.duration, { scale: _this._value }, { easing: easingName }))
                            .call(function () {
                            _this.runCallback(_this);
                        })
                            .start();
                    }
                }
                break;
            case TYPE.STOP_ACTION:
                if (_this._stopAllAction) {
                    _this.target.forEach(function (element) {
                        element.getComponent(sp.Skeleton).timeScale = 0;
                    });
                    cc.Tween.stopAll();
                }
                else {
                    _this.callback.forEach(function (element) {
                        cc.Tween.stopAllByTarget(element.target);
                    });
                }
                break;
            case TYPE.ZOOM_CAMERA:
                _this.callback.forEach(function (element) {
                    element.target.getComponent(cc.Camera).zoomRatio = _this._value;
                });
                break;
            case TYPE.NONE:
                _this.runCallback(_this);
                break;
        }
    };
    ActionController.prototype.onListener = function (_this, isTrue, type) {
        switch (type) {
            case LISTENER.START:
                if (_this._skeleton) {
                    _this._skeleton.setStartListener(function (trackEntry) {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName) {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
            case LISTENER.END:
                if (_this._skeleton) {
                    _this._skeleton.setEndListener(function (trackEntry) {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName) {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
            case LISTENER.COMPLETE:
                if (_this._skeleton) {
                    _this._skeleton.setCompleteListener(function (trackEntry) {
                        console.log("%c" + trackEntry.animation.name, "color:green");
                        console.log("%c" + trackEntry.animation.name, "color:blue");
                        if (isTrue && trackEntry.animation.name == _this._animationName) {
                            isTrue = false;
                            _this.runCallback(_this);
                        }
                    });
                }
                break;
        }
    };
    ActionController.prototype.runCallback = function (_this) {
        var component = "";
        var handler = "";
        for (var _i = 0, _a = _this.callback; _i < _a.length; _i++) {
            var item = _a[_i];
            if (_this.callback.length > 0) {
                component = item._componentName;
                handler = item.handler;
                var func = item.target.getComponent(component)[handler];
                func(item.target.getComponent(component));
            }
        }
    };
    ActionController.prototype.getEasing = function (easing) {
        if (easing == EASING.NONE) {
            return null;
        }
        switch (easing) {
            case EASING.QuadIn:
                return "quadIn";
            case EASING.QuadOut:
                return "quadOut";
            case EASING.QuadInOut:
                return "quadInOut";
            case EASING.CubicIn:
                return "cubicIn";
            case EASING.CubicOut:
                return "cubicOut";
            case EASING.CubicInOut:
                return "cubicInOut";
            case EASING.QuartIn:
                return "quartIn";
            case EASING.QuartOut:
                return "quartOut";
            case EASING.QuartInOut:
                return "quartInOut";
            case EASING.QuintIn:
                return "quintIn";
            case EASING.QuintOut:
                return "quintOut";
            case EASING.QuintInOut:
                return "quintInOut";
            case EASING.SineIn:
                return "sineIn";
            case EASING.SineOut:
                return "sineOut";
            case EASING.SineInOut:
                return "sineInOut";
            case EASING.ExpoIn:
                return "expoIn";
            case EASING.ExpoOut:
                return "expoOut";
            case EASING.ExpoInOut:
                return "expoInOut";
            case EASING.CircIn:
                return "circIn";
            case EASING.CircOut:
                return "circOut";
            case EASING.CircInOut:
                return "circInOut";
            case EASING.ElasticIn:
                return "elasticIn";
            case EASING.ElasticOut:
                return "elasticOut";
            case EASING.ElasticInOut:
                return "elasticInOut";
            case EASING.BackIn:
                return "backIn";
            case EASING.BackOut:
                return "backOut";
            case EASING.BackInOut:
                return "backInOut";
            case EASING.BounceIn:
                return "bounceIn";
            case EASING.BounceOut:
                return "bounceOut";
            case EASING.BounceInOut:
                return "bounceInOut";
            case EASING.Smooth:
                return "smooth";
            case EASING.Fade:
                return "fade";
        }
    };
    ActionController.prototype.onCompleteIntroduce = function () {
        this.node.dispatchEvent(new cc.Event.EventCustom("complete_introduce", true));
    };
    __decorate([
        property({ type: cc.Enum(TYPE) })
    ], ActionController.prototype, "type", void 0);
    __decorate([
        property({ visible: function () { return this.type != TYPE.ACTIVE && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "repeatForever", void 0);
    __decorate([
        property({ type: cc.Enum(LISTENER), visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_listener", void 0);
    __decorate([
        property({ visible: function () { return !this.repeatForever && this.type != TYPE.ACTIVE && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "_repeatTimes", void 0);
    __decorate([
        property({ type: sp.Skeleton, visible: function () { return this.type == TYPE.ANIMATION || this.type == TYPE.MIX; } })
    ], ActionController.prototype, "_skeleton", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_track", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_animationName", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.MIX; } })
    ], ActionController.prototype, "_animation1", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.MIX; } })
    ], ActionController.prototype, "_animation2", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_timeMix", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_loop", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ANIMATION; } })
    ], ActionController.prototype, "_timeScale", void 0);
    __decorate([
        property({ visible: function () { return !this.repeatForever && this.type != TYPE.ACTIVE && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "repeatTimes", null);
    __decorate([
        property({ visible: function () { return this.type != TYPE.MIX; } })
    ], ActionController.prototype, "timeDelay", void 0);
    __decorate([
        property({ visible: function () { return this.type != TYPE.STOP_ACTION && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "duration", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.ACTIVE; } })
    ], ActionController.prototype, "_isActive", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.MOVE_BY || this.type == TYPE.MOVE_TO; } })
    ], ActionController.prototype, "_position", void 0);
    __decorate([
        property({ type: cc.Enum(EASING), visible: function () { return this.type != TYPE.ACTIVE && this.type != TYPE.STOP_ACTION && this.type != TYPE.ANIMATION && this.type != TYPE.MIX; } })
    ], ActionController.prototype, "_easing", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.OPACITY || this.type == TYPE.ROTATION || this.type == TYPE.SCALE; } })
    ], ActionController.prototype, "_value", void 0);
    __decorate([
        property({ visible: function () { return this.type == TYPE.STOP_ACTION; } })
    ], ActionController.prototype, "_stopAllAction", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ActionController.prototype, "target", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ActionController.prototype, "callback", void 0);
    ActionController = __decorate([
        ccclass
    ], ActionController);
    return ActionController;
}(cc.Component));
exports.default = ActionController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FjdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFckIsSUFBWSxJQVlYO0FBWkQsV0FBWSxJQUFJO0lBQ1osK0JBQUksQ0FBQTtJQUNKLG1DQUFNLENBQUE7SUFDTix5Q0FBUyxDQUFBO0lBQ1QsNkJBQUcsQ0FBQTtJQUNILHFDQUFPLENBQUE7SUFDUCxxQ0FBTyxDQUFBO0lBQ1AscUNBQU8sQ0FBQTtJQUNQLHVDQUFRLENBQUE7SUFDUixpQ0FBSyxDQUFBO0lBQ0wsNkNBQVcsQ0FBQTtJQUNYLDhDQUFXLENBQUE7QUFDZixDQUFDLEVBWlcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBWWY7QUFFRCxJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDaEIsdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCxxQ0FBRyxDQUFBO0lBQ0gsK0NBQVEsQ0FBQTtBQUNaLENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtBQUVELElBQVksTUFrQ1g7QUFsQ0QsV0FBWSxNQUFNO0lBQ2QsbUNBQUksQ0FBQTtJQUNKLHVDQUFNLENBQUE7SUFDTix5Q0FBTyxDQUFBO0lBQ1AsNkNBQVMsQ0FBQTtJQUNULHlDQUFPLENBQUE7SUFDUCwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLHlDQUFPLENBQUE7SUFDUCwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLDBDQUFPLENBQUE7SUFDUCw0Q0FBUSxDQUFBO0lBQ1IsZ0RBQVUsQ0FBQTtJQUNWLHdDQUFNLENBQUE7SUFDTiwwQ0FBTyxDQUFBO0lB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QUFRLENBQUMsRUFBQyxPQUFPLGdCQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQyxFQUFDLENBQUM7NERBQy9CO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztvREFDSDtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQztzREFDSDtJQXRFMUIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E0WXBDO0lBQUQsdUJBQUM7Q0E1WUQsQUE0WUMsQ0E1WTZDLEVBQUUsQ0FBQyxTQUFTLEdBNFl6RDtrQkE1WW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG52YXIgdHdlZW4gPSBjYy50d2VlbjtcblxuZXhwb3J0IGVudW0gVFlQRSB7XG4gICAgTk9ORSxcbiAgICBBQ1RJVkUsXG4gICAgQU5JTUFUSU9OLFxuICAgIE1JWCxcbiAgICBNT1ZFX1RPLFxuICAgIE1PVkVfQlksXG4gICAgT1BBQ0lUWSxcbiAgICBST1RBVElPTixcbiAgICBTQ0FMRSxcbiAgICBTVE9QX0FDVElPTixcbiAgICBaT09NX0NBTUVSQVxufVxuXG5leHBvcnQgZW51bSBMSVNURU5FUiB7XG4gICAgTk9ORSxcbiAgICBTVEFSVCxcbiAgICBFTkQsXG4gICAgQ09NUExFVEVcbn1cblxuZXhwb3J0IGVudW0gRUFTSU5HIHtcbiAgICBOT05FLFxuICAgIFF1YWRJbixcbiAgICBRdWFkT3V0LFxuICAgIFF1YWRJbk91dCxcbiAgICBDdWJpY0luLFxuICAgIEN1YmljT3V0LFxuICAgIEN1YmljSW5PdXQsXG4gICAgUXVhcnRJbixcbiAgICBRdWFydE91dCxcbiAgICBRdWFydEluT3V0LFxuICAgIFF1aW50SW4sXG4gICAgUXVpbnRPdXQsXG4gICAgUXVpbnRJbk91dCxcbiAgICBTaW5lSW4sXG4gICAgU2luZU91dCxcbiAgICBTaW5lSW5PdXQsXG4gICAgRXhwb0luLFxuICAgIEV4cG9PdXQsXG4gICAgRXhwb0luT3V0LFxuICAgIENpcmNJbixcbiAgICBDaXJjT3V0LFxuICAgIENpcmNJbk91dCxcbiAgICBFbGFzdGljSW4sXG4gICAgRWxhc3RpY091dCxcbiAgICBFbGFzdGljSW5PdXQsXG4gICAgQmFja0luLFxuICAgIEJhY2tPdXQsXG4gICAgQmFja0luT3V0LFxuICAgIEJvdW5jZUluLFxuICAgIEJvdW5jZU91dCxcbiAgICBCb3VuY2VJbk91dCxcbiAgICBTbW9vdGgsXG4gICAgRmFkZVxufTtcblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkVudW0oVFlQRSl9KVxuICAgIHR5cGU6IFRZUEUgPSBUWVBFLk5PTkU7XG5cbiAgICBAcHJvcGVydHkoe3Zpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSAhPSBUWVBFLkFDVElWRSAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BTklNQVRJT04gJiYgdGhpcy50eXBlICE9IFRZUEUuTUlYfX0pXG4gICAgcmVwZWF0Rm9yZXZlciA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKExJU1RFTkVSKSwgdmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfbGlzdGVuZXI6IExJU1RFTkVSID0gTElTVEVORVIuTk9ORTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gIXRoaXMucmVwZWF0Rm9yZXZlciAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BQ1RJVkUgJiYgdGhpcy50eXBlICE9IFRZUEUuQU5JTUFUSU9OICYmIHRoaXMudHlwZSAhPSBUWVBFLk1JWH19KVxuICAgIHByaXZhdGUgX3JlcGVhdFRpbWVzID0gMTtcbiAgICBcbiAgICBAcHJvcGVydHkoe3R5cGU6IHNwLlNrZWxldG9uLCB2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5BTklNQVRJT04gfHwgdGhpcy50eXBlID09IFRZUEUuTUlYfX0pXG4gICAgcHJpdmF0ZSBfc2tlbGV0b246IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfdHJhY2sgPSAwO1xuXG4gICAgQHByb3BlcnR5KHt2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5BTklNQVRJT059fSlcbiAgICBwcml2YXRlIF9hbmltYXRpb25OYW1lID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuTUlYfX0pXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uMSA9IFwiXCI7XG4gICAgXG4gICAgQHByb3BlcnR5KHt2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5NSVh9fSlcbiAgICBwcml2YXRlIF9hbmltYXRpb24yID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfdGltZU1peCA9IDA7XG5cbiAgICBAcHJvcGVydHkoe3Zpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSA9PSBUWVBFLkFOSU1BVElPTn19KVxuICAgIHByaXZhdGUgX2xvb3AgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQU5JTUFUSU9OfX0pXG4gICAgcHJpdmF0ZSBfdGltZVNjYWxlID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gIXRoaXMucmVwZWF0Rm9yZXZlciAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BQ1RJVkUgJiYgdGhpcy50eXBlICE9IFRZUEUuTUlYfX0pXG4gICAgc2V0IHJlcGVhdFRpbWVzKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbHVlID49IDApXG4gICAgICAgICAgICB0aGlzLl9yZXBlYXRUaW1lcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlICE9IFRZUEUuTUlYfX0pXG4gICAgdGltZURlbGF5ID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlICE9IFRZUEUuU1RPUF9BQ1RJT04gJiYgdGhpcy50eXBlICE9IFRZUEUuQU5JTUFUSU9OICYmIHRoaXMudHlwZSAhPSBUWVBFLk1JWH19KVxuICAgIGR1cmF0aW9uID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuQUNUSVZFfX0pXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZSgpIHtyZXR1cm4gdGhpcy50eXBlID09IFRZUEUuTU9WRV9CWSB8fCB0aGlzLnR5cGUgPT0gVFlQRS5NT1ZFX1RPfX0pXG4gICAgcHJpdmF0ZSBfcG9zaXRpb24gPSBuZXcgY2MuVmVjMigpO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKEVBU0lORyksIHZpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSAhPSBUWVBFLkFDVElWRSAmJiB0aGlzLnR5cGUgIT0gVFlQRS5TVE9QX0FDVElPTiAmJiB0aGlzLnR5cGUgIT0gVFlQRS5BTklNQVRJT04gJiYgdGhpcy50eXBlICE9IFRZUEUuTUlYO319KVxuICAgIHByaXZhdGUgX2Vhc2luZzogRUFTSU5HID0gRUFTSU5HLk5PTkU7XG5cbiAgICBAcHJvcGVydHkoe3Zpc2libGUoKSB7cmV0dXJuIHRoaXMudHlwZSA9PSBUWVBFLk9QQUNJVFkgfHwgdGhpcy50eXBlID09IFRZUEUuUk9UQVRJT04gfHwgdGhpcy50eXBlID09IFRZUEUuU0NBTEU7fX0pXG4gICAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuXG4gICAgQHByb3BlcnR5KHt2aXNpYmxlKCkge3JldHVybiB0aGlzLnR5cGUgPT0gVFlQRS5TVE9QX0FDVElPTjt9fSlcbiAgICBwcml2YXRlIF9zdG9wQWxsQWN0aW9uID0gZmFsc2U7XG4gICAgXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcbiAgICB0YXJnZXQ6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl19KVxuICAgIGNhbGxiYWNrOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcblxuICAgIHJ1bkFjdGlvbihfdGhpcyk6IHZvaWQge1xuICAgICAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVhc2luZ05hbWUgPSBfdGhpcy5nZXRFYXNpbmcoX3RoaXMuX2Vhc2luZyk7XG4gICAgICAgIHN3aXRjaChfdGhpcy50eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFRZUEUuQUNUSVZFOlxuICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IF90aGlzLl9pc0FjdGl2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRZUEUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChfdGhpcy5fc2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX3NrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fdGltZU1peCA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc2tlbGV0b24uc2V0TWl4KF90aGlzLl9za2VsZXRvbi5hbmltYXRpb24sIF90aGlzLl9hbmltYXRpb25OYW1lLCBfdGhpcy5fdGltZU1peCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuX3NrZWxldG9uLnRpbWVTY2FsZSA9IF90aGlzLl90aW1lU2NhbGU7XG4gICAgICAgICAgICAgICAgdHdlZW4oX3RoaXMuX3NrZWxldG9uLm5vZGUpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oX3RoaXMuX3RyYWNrLCBfdGhpcy5fYW5pbWF0aW9uTmFtZSwgX3RoaXMuX2xvb3ApO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX3RoaXMub25MaXN0ZW5lcihfdGhpcywgaXNUcnVlLCBfdGhpcy5fbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLk1JWDpcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2tlbGV0b24uc2V0TWl4KF90aGlzLl9hbmltYXRpb24xLCBfdGhpcy5fYW5pbWF0aW9uMiwgX3RoaXMudGltZU1peCk7XG4gICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLk1PVkVfQlk6XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBvZiBfdGhpcy50YXJnZXQpXG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZXBlYXRGb3JldmVyKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0KS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkuZGVsYXkoX3RoaXMudGltZURlbGF5KS5ieShfdGhpcy5kdXJhdGlvbiwge3Bvc2l0aW9uOiBjYy52MyhfdGhpcy5fcG9zaXRpb24pfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0KF90aGlzLl9yZXBlYXRUaW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLmJ5KF90aGlzLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKF90aGlzLl9wb3NpdGlvbil9LCB7ZWFzaW5nOiBlYXNpbmdOYW1lfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLk1PVkVfVE86XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBvZiBfdGhpcy50YXJnZXQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVwZWF0Rm9yZXZlcilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtwb3NpdGlvbjogY2MudjMoX3RoaXMuX3Bvc2l0aW9uKX0sIHtlYXNpbmc6IGVhc2luZ05hbWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdChfdGhpcy5fcmVwZWF0VGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKF90aGlzLl9wb3NpdGlvbil9LCB7ZWFzaW5nOiBlYXNpbmdOYW1lfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRS5PUEFDSVRZOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgb2YgX3RoaXMudGFyZ2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlcGVhdEZvcmV2ZXIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7b3BhY2l0eTogX3RoaXMuX3ZhbHVlfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0KF90aGlzLl9yZXBlYXRUaW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtvcGFjaXR5OiBfdGhpcy5fdmFsdWV9LCB7ZWFzaW5nOiBlYXNpbmdOYW1lfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRZUEUuUk9UQVRJT046XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBvZiBfdGhpcy50YXJnZXQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVwZWF0Rm9yZXZlcilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtyb3RhdGlvbjogX3RoaXMuX3ZhbHVlfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odCkucmVwZWF0KF90aGlzLl9yZXBlYXRUaW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLmRlbGF5KF90aGlzLnRpbWVEZWxheSkudG8oX3RoaXMuZHVyYXRpb24sIHtyb3RhdGlvbjogX3RoaXMuX3ZhbHVlfSwge2Vhc2luZzogZWFzaW5nTmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuQ2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLlNDQUxFOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgb2YgX3RoaXMudGFyZ2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlcGVhdEZvcmV2ZXIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7c2NhbGU6IF90aGlzLl92YWx1ZX0sIHtlYXNpbmc6IGVhc2luZ05hbWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHQpLnJlcGVhdChfdGhpcy5fcmVwZWF0VGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5kZWxheShfdGhpcy50aW1lRGVsYXkpLnRvKF90aGlzLmR1cmF0aW9uLCB7c2NhbGU6IF90aGlzLl92YWx1ZX0sIHtlYXNpbmc6IGVhc2luZ05hbWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRS5TVE9QX0FDVElPTjpcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX3N0b3BBbGxBY3Rpb24pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxsYmFjay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGVsZW1lbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFLlpPT01fQ0FNRVJBOlxuICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5DYW1lcmEpLnpvb21SYXRpbyA9IF90aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRS5OT05FOlxuICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTGlzdGVuZXIoX3RoaXMsIGlzVHJ1ZSwgdHlwZSk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgTElTVEVORVIuU1RBUlQ6XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9za2VsZXRvbilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9za2VsZXRvbi5zZXRTdGFydExpc3RlbmVyKHRyYWNrRW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSwgXCJjb2xvcjpncmVlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUsIFwiY29sb3I6Ymx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1RydWUgJiYgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PSBfdGhpcy5fYW5pbWF0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5DYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTElTVEVORVIuRU5EOlxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fc2tlbGV0b24pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc2tlbGV0b24uc2V0RW5kTGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lLCBcImNvbG9yOmdyZWVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSwgXCJjb2xvcjpibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVHJ1ZSAmJiB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09IF90aGlzLl9hbmltYXRpb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMSVNURU5FUi5DT01QTEVURTpcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX3NrZWxldG9uKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3NrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lLCBcImNvbG9yOmdyZWVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSwgXCJjb2xvcjpibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVHJ1ZSAmJiB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09IF90aGlzLl9hbmltYXRpb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bkNhbGxiYWNrKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcnVuQ2FsbGJhY2soX3RoaXMpOiB2b2lkIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IFwiXCI7XG4gICAgICAgIHZhciBoYW5kbGVyID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBfdGhpcy5jYWxsYmFjaylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNhbGxiYWNrLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gaXRlbS5fY29tcG9uZW50TmFtZTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gaXRlbS5oYW5kbGVyO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jID0gaXRlbS50YXJnZXQuZ2V0Q29tcG9uZW50KGNvbXBvbmVudClbaGFuZGxlcl07XG4gICAgICAgICAgICAgICAgZnVuYyhpdGVtLnRhcmdldC5nZXRDb21wb25lbnQoY29tcG9uZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFYXNpbmcoZWFzaW5nOiBFQVNJTkcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZWFzaW5nID09IEVBU0lORy5OT05FKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGVhc2luZylcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVhZEluOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInF1YWRJblwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVhZE91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWFkT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5RdWFkSW5PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhZEluT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5DdWJpY0luOlxuICAgICAgICAgICAgICAgIHJldHVybiBcImN1YmljSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkN1YmljT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImN1YmljT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5DdWJpY0luT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImN1YmljSW5PdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLlF1YXJ0SW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhcnRJblwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVhcnRPdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhcnRPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLlF1YXJ0SW5PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhcnRJbk91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVpbnRJbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWludEluXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5RdWludE91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWludE91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuUXVpbnRJbk91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWludEluT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5TaW5lSW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic2luZUluXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5TaW5lT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcInNpbmVPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLlNpbmVJbk91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzaW5lSW5PdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkV4cG9JbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBvSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkV4cG9PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwb091dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuRXhwb0luT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImV4cG9Jbk91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQ2lyY0luOlxuICAgICAgICAgICAgICAgIHJldHVybiBcImNpcmNJblwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQ2lyY091dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjaXJjT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5DaXJjSW5PdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2lyY0luT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5FbGFzdGljSW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZWxhc3RpY0luXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5FbGFzdGljT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImVsYXN0aWNPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkVsYXN0aWNJbk91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJlbGFzdGljSW5PdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJhY2tJbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJiYWNrSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJhY2tPdXQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYmFja091dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQmFja0luT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImJhY2tJbk91dFwiO1xuICAgICAgICAgICAgY2FzZSBFQVNJTkcuQm91bmNlSW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYm91bmNlSW5cIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJvdW5jZU91dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJib3VuY2VPdXRcIjtcbiAgICAgICAgICAgIGNhc2UgRUFTSU5HLkJvdW5jZUluT3V0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcImJvdW5jZUluT3V0XCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5TbW9vdGg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic21vb3RoXCI7XG4gICAgICAgICAgICBjYXNlIEVBU0lORy5GYWRlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcImZhZGVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGVJbnRyb2R1Y2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImNvbXBsZXRlX2ludHJvZHVjZVwiLCB0cnVlKSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01bf0WmjNtFoaDXKbrhV1vh', 'GameManager');
// Scripts/GameManager.ts

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
exports.SOUND = void 0;
var Data_1 = require("./Data");
var EffectManager_1 = require("./EffectManager");
var FBInstantManager_1 = require("./FBInstantManager");
var BundleManager_1 = require("./BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var TOTAL_LEVEL = 19;
var VERSION = '1.3.0';
var SOUND;
(function (SOUND) {
    SOUND[SOUND["BG"] = 0] = "BG";
    SOUND[SOUND["CLICK"] = 1] = "CLICK";
    SOUND[SOUND["FAIL_STAGE"] = 2] = "FAIL_STAGE";
    SOUND[SOUND["SUCCESS_STAGE"] = 3] = "SUCCESS_STAGE";
    SOUND[SOUND["SUCCESS_LEVEL"] = 4] = "SUCCESS_LEVEL";
})(SOUND = exports.SOUND || (exports.SOUND = {}));
//Bật tắt Introduce
var SHOW_INTRO = true;
var lazyGetDataAsync = [];
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levels = [];
        _this.shadow = null;
        _this.sounds = [];
        _this.success = null;
        _this.fail = null;
        _this.ui = null;
        _this.shadowUI = null;
        _this.gameContainer = null;
        _this.optionContainer = null;
        _this.introducePrefab = null;
        _this.home = null;
        _this.listLevelPrefab = null;
        _this.level = null;
        _this.mainCamera = null;
        _this.setting = null;
        _this.noInternet = null;
        _this.introduce = null;
        _this.loading = null;
        _this.btnSetting = null;
        _this.guide = null;
        _this.comingSoon2 = null;
        _this._home = null;
        _this._introduce = null;
        _this._listLevel = null;
        _this._loading = null;
        _this._ui = null;
        _this._countDown = null;
        _this._levelCurrent = {
            script: null,
            level: 0
        };
        _this._levelArray = [];
        _this._currentScene = null;
        _this._beginScene = null;
        _this._data = null;
        _this._txtMoney = null;
        _this.currentAudioBG = null;
        _this._clickX4 = true;
        _this._selectedLevel = 0;
        _this._failLevelLoad = null;
        _this._bundleInstance = null;
        _this._temp = 0;
        _this.firstPlay = true;
        return _this;
    }
    GameManager_1 = GameManager;
    //GameManager để quản lý việc tạo và chuyển các level
    GameManager.prototype.onLoad = function () {
        var _this = this;
        this._bundleInstance = BundleManager_1.default.getInstance();
        console.log('APP VERSION: ', VERSION);
        this.ui.active = true;
        this._ui = this.ui.getComponent("UIController");
        this.shadowUI.opacity = 0;
        this.showHome();
        this.showShop(false);
        this._txtMoney = this._ui.moneyTop.getChildByName("txt_money").getComponent(cc.Label);
        this._countDown = this._ui.countDown.getComponent("CountDown5s");
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            _this._data = data;
            if (_this._data.unlockedLevel > 0) {
                _this.firstPlay = false;
            }
            _this._txtMoney.string = _this._data.money;
            _this._temp = _this._data.unlockedLevel;
            if (_this._data.unlockedLevel < TOTAL_LEVEL) {
                var path = "Level" + (_this._data.unlockedLevel + 1);
                _this._bundleInstance.getPrefabByName(path);
            }
            lazyGetDataAsync.forEach(function (lazyFunc) {
                lazyFunc(_this._data);
            });
        });
    };
    GameManager.prototype.onEnable = function () {
        var _this = this;
        this._home = this.home.getComponent("HomeController");
        if (this._home)
            this._home.updateCalendar();
        this._introduce = cc.find("Canvas/Introduce");
        this.optionContainer.zIndex = cc.macro.MAX_ZINDEX - 100;
        this.home.zIndex = cc.macro.MAX_ZINDEX - 99;
        this.getDataAsync(function (data) {
            _this._levelCurrent.level = data.unlockedLevel;
            _this._selectedLevel = data.unlockedLevel;
            if ((_this._data.unlockedLevel == 0) && _this.firstPlay) {
                _this._ui.showGuide(true);
                _this.firstPlay = false;
            }
        });
    };
    GameManager.prototype.start = function () {
        this.playAudioBG();
        this._loading = cc.instantiate(this.loading);
        this.showLoading(false);
        this._loading.zIndex = cc.macro.MAX_ZINDEX;
        cc.find("Canvas").addChild(this._loading);
    };
    GameManager.prototype.getDataAsync = function (cb) {
        if (this._data)
            return cb(this._data);
        lazyGetDataAsync.push(cb);
    };
    GameManager.prototype.playAudioBG = function () {
        this.playSound(SOUND.BG, true);
    };
    GameManager.prototype.stopAudioBG = function () {
        cc.audioEngine.stopMusic();
    };
    GameManager.prototype.showHome = function () {
        if (this.home) {
            this.home.active = true;
        }
    };
    GameManager.prototype.showLoading = function (show) {
        this._loading.active = show;
    };
    GameManager.prototype.showIntroduce = function () {
        if (this._introduce) {
            this.showLoading(false);
            this._introduce.active = true;
            this._introduce.zIndex = cc.macro.MAX_ZINDEX;
            this._ui.showUIIntroduce(false);
        }
    };
    GameManager.prototype.showListLevel = function () {
        this.playSound(SOUND.CLICK, false);
        if (this._listLevel) {
            this._listLevel.active = true;
        }
        else {
            this._listLevel = cc.instantiate(this.listLevelPrefab);
            this._listLevel.zIndex = cc.macro.MAX_ZINDEX - 1;
            cc.find("Canvas").addChild(this._listLevel);
        }
        this._ui.showGuide(false);
    };
    GameManager.prototype.nextIntroduce = function () {
        this.home.active = false;
        this._ui.showUIIntroduce(false);
        //Từ level 2 trở đi khi bấm vào game sẽ không xuất hiện phần Lupin bị bắt nữa
        // 0 là index tương đương level 1
        if (this._temp != 0)
            this._selectedLevel = this._temp;
        if (this._selectedLevel % 10 != 0) {
            this.startGame();
            return;
        }
        if (!SHOW_INTRO) {
            this.startGame();
            return;
        }
        if (this._introduce) {
            this._introduce.getComponent("Introduce").setIntro(this._selectedLevel);
            this._ui.showUIEndGame(false);
            this.showIntroduce();
        }
    };
    GameManager.prototype.onReplay = function () {
        this.playSound(SOUND.CLICK, false);
        this._currentScene.active = false;
        this._beginScene.active = true;
    };
    GameManager.prototype.onHome = function () {
        this.playSound(SOUND.CLICK, false);
        cc.Tween.stopAll();
        this.mainCamera.active = true;
        this.home.active = true;
        this.gameContainer.children.forEach(function (children) {
            children.active = false;
        });
        this._ui.showUIEndGame(false);
        this._ui.showUIIntroduce(true);
        this._ui.showUIContinue(false);
    };
    GameManager.prototype.onNextLevel = function () {
        var _this = this;
        this.playSound(SOUND.CLICK, false);
        if (this._levelCurrent.level >= TOTAL_LEVEL) {
            this.btnSetting.active = false;
            this._ui.showUIEndGame(false);
            this._ui.showComingSoon();
            return;
        }
        this.showLoading(true);
        this._temp = this._levelCurrent.level;
        var name = "Level" + (this._temp + 1);
        if (this._temp % 10 == 0) {
            this.nextIntroduce();
            return;
        }
        this._bundleInstance.getPrefabByName(name, function (err, prefab) {
            _this.showLoading(false);
            if (prefab) {
                _this._currentScene.active = false;
                if (_this._currentScene.parent != _this.gameContainer) {
                    _this._currentScene.parent.active = false;
                }
                _this.gameContainer.addChild(cc.instantiate(prefab));
                _this._ui.showUIEndGame(false);
                var current = _this._temp + 1;
                var next = _this._temp + 2;
                cc.error("Current " + current);
                cc.error("Next " + next);
                _this.setLevel(current, next);
                GameManager_1.logNextLevel(current);
                return;
            }
            console.error(err);
        });
    };
    GameManager.logEvent = function (eventName) {
    };
    GameManager.logFailed = function (level, stage, option) {
    };
    GameManager.logPassed = function (level, stage, option) {
    };
    GameManager.logLevel = function (level) {
    };
    GameManager.logNextLevel = function (level) {
    };
    GameManager.prototype.initGame = function (level) {
        var _this = this;
        GameManager_1.logLevel(level);
        for (var i = 0; i < this.gameContainer.children.length; ++i) {
            var node = this.gameContainer.children[i];
            if (node.name == ("Level" + (level + 1))) {
                node.active = true;
                if (node.children[0].name.includes("Level")) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var children = _a[_i];
                        children.active = false;
                    }
                    node.children[0].active = true;
                }
                return;
            }
        }
        this.showLoading(true);
        var name = "Level" + (level + 1);
        this._bundleInstance.getPrefabByName(name, function (err, prefab) {
            _this.showLoading(false);
            if (prefab) {
                var node = cc.instantiate(prefab);
                _this.gameContainer.addChild(node);
                return;
            }
            console.log('get level err', err);
            _this.onHome();
            if (!window.navigator.online) {
                _this._ui.showAlert('NO INTERNET CONNECTION');
                return;
            }
            _this._ui.showComingSoon();
            return;
        });
    };
    // addLevel(level: number, cb): void {
    //     this.showLoading(true);
    //     this._bundleInstance.loadPrefabByName("Level" + (level + 1) + "/" + "Level" + (level + 1), prefab => {
    //         this.showLoading(false);
    //         cb(prefab);
    //     })
    // }
    GameManager.prototype.startGame = function () {
        this.playSound(SOUND.CLICK, false);
        this.initGame(this._selectedLevel);
        // this.initGame(14);
    };
    GameManager.prototype.selectLevel = function (level) {
        if (this._data.unlockedLevel == TOTAL_LEVEL && level == TOTAL_LEVEL) {
            this.showComingSoon2();
            this.playSound(SOUND.CLICK, false);
            return;
        }
        this._selectedLevel = level;
        this.gameContainer.children.forEach(function (level) {
            level.active = false;
        });
        if (level % 10 == 0) {
            this._temp = this._selectedLevel;
            this.nextIntroduce();
            return;
        }
        this.initGame(level);
        this._ui.showUIIntroduce(false);
        this.home.active = false;
    };
    GameManager.prototype.setLevel = function (start, current) {
        var startLevel = this.level.getChildByName("Start").getChildByName("txtLevel");
        startLevel.getComponent(cc.Label).string = start.toString();
        var currentLevel = this.level.getChildByName("Current").getChildByName("txtLevel");
        currentLevel.getComponent(cc.Label).string = current.toString();
    };
    GameManager.prototype.playSound = function (id, loop) {
        var _this = this;
        Data_1.default.getData(Data_1.default.LOCAL_KEY, function (err, data) {
            var _data = data;
            if (_data.isSound && id != 0) {
                cc.audioEngine.play(_this.sounds[id], loop, 1);
            }
            if (_data.isMusic && id == 0) {
                cc.audioEngine.playMusic(_this.sounds[id], loop);
            }
        });
    };
    GameManager.prototype.playStageBegin = function () {
    };
    GameManager.prototype.addMoney = function (money, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        var direction = money < 0 ? -1 : 1;
        if (money == 0) {
            return;
        }
        else {
            Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
                _this._data = data;
                _this._data.money += money;
                Data_1.default.saveData(_this._data, Data_1.default.FACEBOOK_KEY, cb);
                tween(_this._txtMoney.node).repeat(money * direction / 3, tween().call(function () {
                    _this._txtMoney.string = parseInt(_this._txtMoney.string) + 3 * direction;
                })
                    .delay(0.03))
                    .call(function () {
                    _this._txtMoney.string = _this._data.money;
                })
                    .start();
            });
        }
    };
    GameManager.prototype.payMoney = function () {
        var _this = this;
        this.playSound(SOUND.CLICK, false);
        this.addMoney(-200, function (err) {
            _this.onPlayAgain();
        });
    };
    GameManager.prototype.playClickAudio = function () {
        this.playSound(SOUND.CLICK, false);
    };
    //Sau khi xem xong video sẽ được x4 tiền (50 ban đầu + thêm 150)
    GameManager.prototype.showVideoX4 = function (event) {
        if (!this._clickX4)
            return;
        this._clickX4 = false;
        this.playSound(SOUND.CLICK, false);
        GameManager_1.logEvent("x4RewardedVideo");
        this.addMoney(150);
        this._ui.setMoney(150);
        EffectManager_1.default.effectHideButton(event.target, 0.7);
    };
    //Sau khi xem quảng cáo sẽ cho chơi lại stage vừa fail
    GameManager.prototype.showVideo = function (event) {
        this.playSound(SOUND.CLICK, false);
        this._countDown.stopCountDown();
        GameManager_1.logEvent("RevivedRewaredVideo");
        this.onPlayAgain();
    };
    GameManager.prototype.onPlayAgain = function () {
        this._ui.showUIEndGame(false);
        this._ui.showUIContinue(false);
        this._countDown.stopCountDown();
        this._levelCurrent.script.initStage();
    };
    GameManager.prototype.onTapToStart = function () {
        var _this = this;
        this.playSound(SOUND.CLICK, false);
        this._ui.showGuide(false);
        if (this._data.unlockedLevel == TOTAL_LEVEL) {
            this.showListLevel();
            return;
        }
        if (this._failLevelLoad) {
            return;
        }
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            _this._temp = data.unlockedLevel;
            _this.nextIntroduce();
        });
    };
    GameManager.prototype.onClickSetting = function () {
        this.playSound(SOUND.CLICK, false);
        var setting = cc.find("Canvas/Setting");
        if (setting) {
            setting.active = true;
        }
        else {
            setting = cc.instantiate(this.setting);
            cc.find("Canvas").addChild(setting);
        }
        this._ui.showGuide(false);
    };
    GameManager.prototype.showShop = function (show) {
        return;
    };
    GameManager.prototype.onClickReload = function (e) {
    };
    GameManager.prototype.onShare = function (e) {
        FBInstantManager_1.default.getInstance().shareGame();
    };
    GameManager.prototype.onInvite = function (e) {
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            FBInstantManager_1.default.getInstance().invitePlay({
                level: data.unlockedLevel || 1,
                playerId: '',
            });
        });
    };
    GameManager.prototype.showGuide = function (bool) {
        if (this._data.unlockedLevel != 0) {
            return;
        }
        if (this.firstPlay) {
            if (bool) {
                var guide = cc.find("Canvas/Guide");
                if (guide) {
                    guide.active = true;
                }
                else {
                    guide = cc.instantiate(this.guide);
                    guide.zIndex = cc.macro.MAX_ZINDEX;
                    cc.find("Canvas").addChild(guide);
                }
            }
            else {
                var guide = cc.find("Canvas/Guide");
                if (guide) {
                    guide.active = false;
                    this.firstPlay = false;
                }
            }
        }
    };
    GameManager.prototype.showComingSoon2 = function () {
        var cs2 = cc.find("Canvas/ComingSoon2");
        if (cs2) {
            cs2.active = true;
        }
        else {
            cs2 = cc.instantiate(this.comingSoon2);
            cs2.zIndex = cc.macro.MAX_ZINDEX;
            cc.find("Canvas").addChild(cs2);
        }
    };
    var GameManager_1;
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "levels", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "shadow", void 0);
    __decorate([
        property([cc.AudioClip])
    ], GameManager.prototype, "sounds", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "success", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "fail", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "shadowUI", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "gameContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "optionContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "introducePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "home", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "listLevelPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "setting", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "noInternet", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "introduce", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "loading", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "btnSetting", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "guide", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "comingSoon2", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFDMUIsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUV2QixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFFdkIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBRXZCLElBQVksS0FNWDtBQU5ELFdBQVksS0FBSztJQUNiLDZCQUFFLENBQUE7SUFDRixtQ0FBSyxDQUFBO0lBQ0wsNkNBQVUsQ0FBQTtJQUNWLG1EQUFhLENBQUE7SUFDYixtREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFOVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFNaEI7QUFFRCxtQkFBbUI7QUFDbkIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBRXRCLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBSTVCO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ2lCQztRQTdoQkcsWUFBTSxHQUFnQixFQUFFLENBQUM7UUFHekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLFVBQUksR0FBWSxJQUFJLENB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LFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNVO0lBL0RiLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnaUIvQjtJQUFELGtCQUFDO0NBaGlCRCxBQWdpQkMsQ0FoaUJ3QyxFQUFFLENBQUMsU0FBUyxHQWdpQnBEO2tCQWhpQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tIFwiLi9EYXRhXCI7XG5pbXBvcnQgRWZmZWN0TWFuYWdlciBmcm9tIFwiLi9FZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQgRkJJbnN0YW50TWFuYWdlciBmcm9tIFwiLi9GQkluc3RhbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi9CdW5kbGVNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcblxuY29uc3QgVE9UQUxfTEVWRUwgPSAxOTtcblxuY29uc3QgVkVSU0lPTiA9ICcxLjMuMCdcblxuZXhwb3J0IGVudW0gU09VTkQge1xuICAgIEJHLFxuICAgIENMSUNLLFxuICAgIEZBSUxfU1RBR0UsXG4gICAgU1VDQ0VTU19TVEFHRSxcbiAgICBTVUNDRVNTX0xFVkVMLFxufVxuXG4vL0Lhuq10IHThuq90IEludHJvZHVjZVxubGV0IFNIT1dfSU5UUk8gPSB0cnVlO1xuXG5jb25zdCBsYXp5R2V0RGF0YUFzeW5jID0gW107XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGV2ZWxzOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2hhZG93OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBzb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdWNjZXNzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZhaWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2hhZG93VUk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvcHRpb25Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpbnRyb2R1Y2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob21lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGlzdExldmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGV2ZWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFpbkNhbWVyYTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNldHRpbmc6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub0ludGVybmV0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGludHJvZHVjZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbG9hZGluZzogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blNldHRpbmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBndWlkZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY29taW5nU29vbjI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBfaG9tZSA9IG51bGw7XG4gICAgX2ludHJvZHVjZTogY2MuTm9kZSA9IG51bGw7XG4gICAgX2xpc3RMZXZlbDogY2MuTm9kZSA9bnVsbDtcbiAgICBfbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBfdWkgPSBudWxsO1xuICAgIF9jb3VudERvd24gPSBudWxsO1xuICAgIF9sZXZlbEN1cnJlbnQgPSB7XG4gICAgICAgIHNjcmlwdDogbnVsbCxcbiAgICAgICAgbGV2ZWw6IDBcbiAgICB9O1xuXG4gICAgX2xldmVsQXJyYXkgPSBbXTtcbiAgICBfY3VycmVudFNjZW5lID0gbnVsbDtcbiAgICBfYmVnaW5TY2VuZSA9IG51bGw7XG4gICAgX2RhdGEgPSBudWxsO1xuICAgIF90eHRNb25leSA9IG51bGw7XG4gICAgY3VycmVudEF1ZGlvQkcgPSBudWxsO1xuICAgIF9jbGlja1g0ID0gdHJ1ZTtcbiAgICBfc2VsZWN0ZWRMZXZlbCA9IDA7XG4gICAgX2ZhaWxMZXZlbExvYWQgPSBudWxsO1xuICAgIF9idW5kbGVJbnN0YW5jZSA9IG51bGw7XG4gICAgX3RlbXA6IG51bWJlciA9IDA7XG4gICAgZmlyc3RQbGF5ID0gdHJ1ZTtcblxuICAgIC8vR2FtZU1hbmFnZXIgxJHhu4MgcXXhuqNuIGzDvSB2aeG7h2MgdOG6oW8gdsOgIGNodXnhu4NuIGPDoWMgbGV2ZWxcbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlID0gQnVuZGxlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnQVBQIFZFUlNJT046ICcsIFZFUlNJT04pXG4gICAgICAgIHRoaXMudWkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdWkgPSB0aGlzLnVpLmdldENvbXBvbmVudChcIlVJQ29udHJvbGxlclwiKTtcbiAgICAgICAgdGhpcy5zaGFkb3dVSS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5zaG93SG9tZSgpO1xuICAgICAgICB0aGlzLnNob3dTaG9wKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fdHh0TW9uZXkgPSB0aGlzLl91aS5tb25leVRvcC5nZXRDaGlsZEJ5TmFtZShcInR4dF9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLl9jb3VudERvd24gPSB0aGlzLl91aS5jb3VudERvd24uZ2V0Q29tcG9uZW50KFwiQ291bnREb3duNXNcIik7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YS51bmxvY2tlZExldmVsID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90eHRNb25leS5zdHJpbmcgPSB0aGlzLl9kYXRhLm1vbmV5O1xuICAgICAgICAgICAgdGhpcy5fdGVtcCA9IHRoaXMuX2RhdGEudW5sb2NrZWRMZXZlbDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhLnVubG9ja2VkTGV2ZWwgPCBUT1RBTF9MRVZFTCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gXCJMZXZlbFwiICsgKHRoaXMuX2RhdGEudW5sb2NrZWRMZXZlbCArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlLmdldFByZWZhYkJ5TmFtZShwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGF6eUdldERhdGFBc3luYy5mb3JFYWNoKChsYXp5RnVuYykgPT4ge1xuICAgICAgICAgICAgICAgIGxhenlGdW5jKHRoaXMuX2RhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ob21lID0gdGhpcy5ob21lLmdldENvbXBvbmVudChcIkhvbWVDb250cm9sbGVyXCIpO1xuICAgICAgICBpZiAodGhpcy5faG9tZSlcbiAgICAgICAgICAgIHRoaXMuX2hvbWUudXBkYXRlQ2FsZW5kYXIoKTtcbiAgICAgICAgdGhpcy5faW50cm9kdWNlID0gY2MuZmluZChcIkNhbnZhcy9JbnRyb2R1Y2VcIik7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAxMDA7XG4gICAgICAgIHRoaXMuaG9tZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYIC0gOTk7XG4gICAgICAgIHRoaXMuZ2V0RGF0YUFzeW5jKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sZXZlbEN1cnJlbnQubGV2ZWwgPSBkYXRhLnVubG9ja2VkTGV2ZWw7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZExldmVsID0gZGF0YS51bmxvY2tlZExldmVsO1xuICAgICAgICAgICAgaWYgKCh0aGlzLl9kYXRhLnVubG9ja2VkTGV2ZWwgPT0gMCkgJiYgdGhpcy5maXJzdFBsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91aS5zaG93R3VpZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheUF1ZGlvQkcoKTtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubG9hZGluZyk7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIHRoaXMuX2xvYWRpbmcuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZCh0aGlzLl9sb2FkaW5nKTtcbiAgICB9XG5cbiAgICBnZXREYXRhQXN5bmMoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RhdGEpIHJldHVybiBjYih0aGlzLl9kYXRhKVxuICAgICAgICBsYXp5R2V0RGF0YUFzeW5jLnB1c2goY2IpXG4gICAgfVxuXG4gICAgcGxheUF1ZGlvQkcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkJHLCB0cnVlKTtcbiAgICB9XG4gICAgXG4gICAgc3RvcEF1ZGlvQkcoKTogdm9pZCB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgIH1cblxuICAgIHNob3dIb21lKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ob21lKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMb2FkaW5nKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZy5hY3RpdmUgPSBzaG93O1xuICAgIH1cblxuICAgIHNob3dJbnRyb2R1Y2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRyb2R1Y2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5faW50cm9kdWNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9pbnRyb2R1Y2UuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dVSUludHJvZHVjZShmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMaXN0TGV2ZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLl9saXN0TGV2ZWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RMZXZlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbGlzdExldmVsID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0TGV2ZWxQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5fbGlzdExldmVsLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAxO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZCh0aGlzLl9saXN0TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VpLnNob3dHdWlkZShmYWxzZSk7XG4gICAgfVxuXG4gICAgbmV4dEludHJvZHVjZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob21lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlJbnRyb2R1Y2UoZmFsc2UpO1xuICAgICAgICAvL1Thu6sgbGV2ZWwgMiB0cuG7nyDEkWkga2hpIGLhuqVtIHbDoG8gZ2FtZSBz4bq9IGtow7RuZyB4deG6pXQgaGnhu4duIHBo4bqnbiBMdXBpbiBi4buLIGLhuq90IG7hu69hXG4gICAgICAgIC8vIDAgbMOgIGluZGV4IHTGsMahbmcgxJHGsMahbmcgbGV2ZWwgMVxuICAgICAgICBpZiAodGhpcy5fdGVtcCAhPSAwKVxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRMZXZlbCA9IHRoaXMuX3RlbXA7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZExldmVsICUgMTAgIT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVNIT1dfSU5UUk8pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2ludHJvZHVjZSkge1xuICAgICAgICAgICAgdGhpcy5faW50cm9kdWNlLmdldENvbXBvbmVudChcIkludHJvZHVjZVwiKS5zZXRJbnRybyh0aGlzLl9zZWxlY3RlZExldmVsKTtcbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dVSUVuZEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zaG93SW50cm9kdWNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iZWdpblNjZW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Ib21lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4gPT4ge1xuICAgICAgICAgICAgY2hpbGRyZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlFbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fdWkuc2hvd1VJSW50cm9kdWNlKHRydWUpO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlDb250aW51ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgb25OZXh0TGV2ZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xldmVsQ3VycmVudC5sZXZlbCA+PSBUT1RBTF9MRVZFTCkge1xuICAgICAgICAgICAgdGhpcy5idG5TZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fdWkuc2hvd1VJRW5kR2FtZShmYWxzZSlcbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dDb21pbmdTb29uKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fdGVtcCA9IHRoaXMuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgbGV0IG5hbWUgPSBcIkxldmVsXCIgKyAodGhpcy5fdGVtcCArIDEpO1xuICAgICAgICBpZiAodGhpcy5fdGVtcCAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubmV4dEludHJvZHVjZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlLmdldFByZWZhYkJ5TmFtZShuYW1lLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHByZWZhYikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFNjZW5lLnBhcmVudCAhPSB0aGlzLmdhbWVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHByZWZhYikpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VpLnNob3dVSUVuZEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5fdGVtcCArIDE7XG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLl90ZW1wICsgMjtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkN1cnJlbnQgXCIgKyBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIk5leHQgXCIgKyBuZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExldmVsKGN1cnJlbnQsIG5leHQpO1xuICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmxvZ05leHRMZXZlbChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgfVxuICAgIHN0YXRpYyBsb2dGYWlsZWQobGV2ZWw6IG51bWJlciwgc3RhZ2U6IG51bWJlciwgb3B0aW9uOiBudW1iZXIpIHtcbiAgICB9XG4gICAgc3RhdGljIGxvZ1Bhc3NlZChsZXZlbDogbnVtYmVyLCBzdGFnZTogbnVtYmVyLCBvcHRpb246IG51bWJlcikge1xuICAgIH1cbiAgICBzdGF0aWMgbG9nTGV2ZWwobGV2ZWw6IG51bWJlcikge1xuXG4gICAgfVxuICAgIHN0YXRpYyBsb2dOZXh0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgIH1cblxuICAgIGluaXRHYW1lKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgR2FtZU1hbmFnZXIubG9nTGV2ZWwobGV2ZWwpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2FtZUNvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT0gKFwiTGV2ZWxcIiArIChsZXZlbCArIDEpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMF0ubmFtZS5pbmNsdWRlcyhcIkxldmVsXCIpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRyZW4gb2Ygbm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgbGV0IG5hbWUgPSBcIkxldmVsXCIgKyAobGV2ZWwgKyAxKTtcbiAgICAgICAgdGhpcy5fYnVuZGxlSW5zdGFuY2UuZ2V0UHJlZmFiQnlOYW1lKG5hbWUsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGxldmVsIGVycicsIGVycilcblxuICAgICAgICAgICAgdGhpcy5vbkhvbWUoKVxuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3Iub25saW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdWkuc2hvd0FsZXJ0KCdOTyBJTlRFUk5FVCBDT05ORUNUSU9OJylcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3VpLnNob3dDb21pbmdTb29uKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFkZExldmVsKGxldmVsOiBudW1iZXIsIGNiKTogdm9pZCB7XG4gICAgLy8gICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgLy8gICAgIHRoaXMuX2J1bmRsZUluc3RhbmNlLmxvYWRQcmVmYWJCeU5hbWUoXCJMZXZlbFwiICsgKGxldmVsICsgMSkgKyBcIi9cIiArIFwiTGV2ZWxcIiArIChsZXZlbCArIDEpLCBwcmVmYWIgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgLy8gICAgICAgICBjYihwcmVmYWIpO1xuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICBzdGFydEdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5pbml0R2FtZSh0aGlzLl9zZWxlY3RlZExldmVsKTtcbiAgICAgICAgLy8gdGhpcy5pbml0R2FtZSgxNCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS51bmxvY2tlZExldmVsID09IFRPVEFMX0xFVkVMICYmIGxldmVsID09IFRPVEFMX0xFVkVMKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb21pbmdTb29uMigpO1xuICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3RlZExldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGxldmVsID0+IHtcbiAgICAgICAgICAgIGxldmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICBpZiAobGV2ZWwgJSAxMCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl90ZW1wID0gdGhpcy5fc2VsZWN0ZWRMZXZlbDtcbiAgICAgICAgICAgIHRoaXMubmV4dEludHJvZHVjZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdEdhbWUobGV2ZWwpO1xuICAgICAgICB0aGlzLl91aS5zaG93VUlJbnRyb2R1Y2UoZmFsc2UpO1xuICAgICAgICB0aGlzLmhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHNldExldmVsKHN0YXJ0OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgc3RhcnRMZXZlbCA9IHRoaXMubGV2ZWwuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFydFwiKS5nZXRDaGlsZEJ5TmFtZShcInR4dExldmVsXCIpO1xuICAgICAgICBzdGFydExldmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnQudG9TdHJpbmcoKTtcblxuICAgICAgICB2YXIgY3VycmVudExldmVsID0gdGhpcy5sZXZlbC5nZXRDaGlsZEJ5TmFtZShcIkN1cnJlbnRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRMZXZlbFwiKTtcbiAgICAgICAgY3VycmVudExldmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY3VycmVudC50b1N0cmluZygpO1xuICAgIH1cbiAgICBcbiAgICBwbGF5U291bmQoaWQ6IG51bWJlciwgbG9vcDogYm9vbGVhbik6dm9pZCB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkxPQ0FMX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IF9kYXRhID0gZGF0YVxuICAgICAgICAgICAgaWYgKF9kYXRhLmlzU291bmQgJiYgaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZHNbaWRdLGxvb3AsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX2RhdGEuaXNNdXNpYyAmJiBpZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRzW2lkXSxsb29wKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGxheVN0YWdlQmVnaW4oKTogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFkZE1vbmV5KG1vbmV5OiBudW1iZXIsIGNiOiBGdW5jdGlvbiA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gbW9uZXkgPCAwID8gLTEgOiAxXG5cbiAgICAgICAgaWYgKG1vbmV5ID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEubW9uZXkgKz0gbW9uZXk7XG4gICAgICAgICAgICAgICAgRGF0YS5zYXZlRGF0YSh0aGlzLl9kYXRhLCBEYXRhLkZBQ0VCT09LX0tFWSwgY2IpO1xuXG4gICAgICAgICAgICAgICAgdHdlZW4odGhpcy5fdHh0TW9uZXkubm9kZSkucmVwZWF0KG1vbmV5ICogZGlyZWN0aW9uIC8gMyxcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3R4dE1vbmV5LnN0cmluZyA9IHBhcnNlSW50KHRoaXMuX3R4dE1vbmV5LnN0cmluZykgKyAzICogZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4wMylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90eHRNb25leS5zdHJpbmcgPSB0aGlzLl9kYXRhLm1vbmV5O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF5TW9uZXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkTW9uZXkoLTIwMCwgKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblBsYXlBZ2FpbigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBsYXlDbGlja0F1ZGlvKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICAvL1NhdSBraGkgeGVtIHhvbmcgdmlkZW8gc+G6vSDEkcaw4bujYyB4NCB0aeG7gW4gKDUwIGJhbiDEkeG6p3UgKyB0aMOqbSAxNTApXG4gICAgc2hvd1ZpZGVvWDQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fY2xpY2tYNClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fY2xpY2tYNCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuXG4gICAgICAgIEdhbWVNYW5hZ2VyLmxvZ0V2ZW50KFwieDRSZXdhcmRlZFZpZGVvXCIpXG5cbiAgICAgICAgdGhpcy5hZGRNb25leSgxNTApO1xuICAgICAgICB0aGlzLl91aS5zZXRNb25leSgxNTApO1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdEhpZGVCdXR0b24oZXZlbnQudGFyZ2V0LCAwLjcpO1xuICAgIH1cbiAgICAvL1NhdSBraGkgeGVtIHF14bqjbmcgY8OhbyBz4bq9IGNobyBjaMahaSBs4bqhaSBzdGFnZSB24burYSBmYWlsXG4gICAgc2hvd1ZpZGVvKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5DTElDSywgZmFsc2UpO1xuICAgICAgICB0aGlzLl9jb3VudERvd24uc3RvcENvdW50RG93bigpO1xuICAgICAgICBcbiAgICAgICAgR2FtZU1hbmFnZXIubG9nRXZlbnQoXCJSZXZpdmVkUmV3YXJlZFZpZGVvXCIpXG4gICAgICAgIHRoaXMub25QbGF5QWdhaW4oKTtcbiAgICB9XG5cbiAgICBvblBsYXlBZ2FpbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdWkuc2hvd1VJRW5kR2FtZShmYWxzZSk7XG4gICAgICAgIHRoaXMuX3VpLnNob3dVSUNvbnRpbnVlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fY291bnREb3duLnN0b3BDb3VudERvd24oKTtcbiAgICAgICAgdGhpcy5fbGV2ZWxDdXJyZW50LnNjcmlwdC5pbml0U3RhZ2UoKTtcbiAgICB9XG5cbiAgICBvblRhcFRvU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkNMSUNLLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3VpLnNob3dHdWlkZShmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLl9kYXRhLnVubG9ja2VkTGV2ZWwgPT0gVE9UQUxfTEVWRUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpc3RMZXZlbCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9mYWlsTGV2ZWxMb2FkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RlbXAgPSBkYXRhLnVubG9ja2VkTGV2ZWxcbiAgICAgICAgICAgIHRoaXMubmV4dEludHJvZHVjZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrU2V0dGluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgbGV0IHNldHRpbmcgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIik7XG4gICAgICAgIGlmIChzZXR0aW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXR0aW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXR0aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZXR0aW5nKTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoc2V0dGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdWkuc2hvd0d1aWRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBzaG93U2hvcChzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG9uQ2xpY2tSZWxvYWQoZSkge1xuICAgIH1cblxuICAgIG9uU2hhcmUoZSkge1xuICAgICAgICBGQkluc3RhbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hhcmVHYW1lKClcbiAgICB9XG5cbiAgICBvbkludml0ZShlKSB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgRkJJbnN0YW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmludml0ZVBsYXkoe1xuICAgICAgICAgICAgICAgIGxldmVsOiBkYXRhLnVubG9ja2VkTGV2ZWwgfHwgMSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJJZDogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93R3VpZGUoYm9vbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS51bmxvY2tlZExldmVsICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RQbGF5KSB7XG4gICAgICAgICAgICBpZiAoYm9vbCkge1xuICAgICAgICAgICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoXCJDYW52YXMvR3VpZGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGd1aWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBndWlkZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3VpZGUpO1xuICAgICAgICAgICAgICAgICAgICBndWlkZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKGd1aWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKFwiQ2FudmFzL0d1aWRlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChndWlkZSkge1xuICAgICAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29taW5nU29vbjIoKTogdm9pZCB7XG4gICAgICAgIGxldCBjczIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbWluZ1Nvb24yXCIpO1xuICAgICAgICBpZiAoY3MyKSB7XG4gICAgICAgICAgICBjczIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNzMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29taW5nU29vbjIpO1xuICAgICAgICAgICAgY3MyLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKGNzMik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ComingSoon/ComingSoon2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53946CuBB5P87+zTy0UYp+D', 'ComingSoon2');
// ComingSoon/ComingSoon2.ts

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
var ComingSoon_1 = require("../Scripts/ComingSoon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ComingSoon2 = /** @class */ (function (_super) {
    __extends(ComingSoon2, _super);
    function ComingSoon2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComingSoon2.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.node.scale = 0.7;
    };
    ComingSoon2.prototype.onEnable = function () {
        var _this = this;
        cc.tween(this.node).parallel(cc.tween().to(0.2, { opacity: 255 }), cc.tween().to(0.2, { scale: 1 }, { easing: "quartOut" }))
            .call(function () {
            _this.node.on("touchend", _this.onClose, _this);
        })
            .start();
    };
    ComingSoon2.prototype.onClose = function () {
        var _this = this;
        cc.tween(this.node).parallel(cc.tween().to(0.2, { opacity: 0 }), cc.tween().to(0.2, { scale: 0.7 }, { easing: "quartOut" }))
            .call(function () {
            _this.node.active = false;
        })
            .start();
    };
    ComingSoon2 = __decorate([
        ccclass
    ], ComingSoon2);
    return ComingSoon2;
}(ComingSoon_1.default));
exports.default = ComingSoon2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21pbmdTb29uL0NvbWluZ1Nvb24yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUV6QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBVTtJQUFuRDs7SUE0QkEsQ0FBQztJQTFCRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUN4QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUNsQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUN2RDthQUNBLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFBQSxpQkFTQztRQVJHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FDcEIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFDaEMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FDekQ7YUFDQSxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTNCZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRCL0I7SUFBRCxrQkFBQztDQTVCRCxBQTRCQyxDQTVCd0Msb0JBQVUsR0E0QmxEO2tCQTVCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21pbmdTb29uIGZyb20gXCIuLi9TY3JpcHRzL0NvbWluZ1Nvb25cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21pbmdTb29uMiBleHRlbmRzIENvbWluZ1Nvb24ge1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuNztcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5wYXJhbGxlbChcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yLCB7b3BhY2l0eTogMjU1fSksXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMiwge3NjYWxlOiAxfSwge2Vhc2luZzogXCJxdWFydE91dFwifSlcbiAgICAgICAgKVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oXCJ0b3VjaGVuZFwiLCB0aGlzLm9uQ2xvc2UsIHRoaXMpO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnBhcmFsbGVsKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yLCB7b3BhY2l0eTogMH0pLFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yLCB7c2NhbGU6IDAuN30sIHtlYXNpbmc6IFwicXVhcnRPdXRcIn0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Other/FishSwim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fbf2HST0tF/o8oPnW3t+5Y', 'FishSwim');
// Scripts/Other/FishSwim.ts

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
var tween = cc.tween;
var FISHS_SPEED = [250, 500, 200, 300, 200, 150]; // speed, distant per sec
var FISHS_DELAY = [3, 6, 2, 2, 4, 1];
var FishSwim = /** @class */ (function (_super) {
    __extends(FishSwim, _super);
    function FishSwim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fishs = [];
        _this._durations = [];
        _this._fishsConfig = [];
        return _this;
    }
    FishSwim.prototype.onLoad = function () {
        var _this = this;
        this._fishsConfig = [];
        var width = this.node.width;
        var haftWidth = width / 2;
        FISHS_SPEED.forEach(function (sp) {
            _this._durations.push(parseInt(width / sp + ''));
        });
        this.fishs.forEach(function (f, i) {
            var haftNodeWidth = f.width / 2;
            var posX = f.position.x;
            _this._fishsConfig.push({
                node: f,
                duration: Math.abs(posX * 2) / FISHS_SPEED[i],
                startX: posX,
                endX: -posX,
                delay: FISHS_DELAY[i],
                y: f.y,
                scaleX: f.scaleX,
            });
        });
        cc.Tween.stopAllByTag(-100);
    };
    FishSwim.prototype.onEnable = function () {
        this._fishsConfig.forEach(function (config, i) {
            config.node.position.x = config.startX;
            config.node.scaleX = config.scaleX;
            tween(config.node)
                .tag(-100)
                .delay(config.delay / 2)
                .repeatForever(tween()
                .to(config.duration, { position: cc.v3(config.endX, config.y) })
                .delay(config.delay)
                .call(function () {
                config.node.scaleX = -config.scaleX;
            })
                .to(config.duration, { position: cc.v3(config.startX, config.y) })
                .delay(config.delay)
                .call(function () {
                config.node.scaleX = config.scaleX;
            }))
                .start();
        });
    };
    FishSwim.prototype.onDisable = function () {
        cc.Tween.stopAllByTag(-100);
    };
    __decorate([
        property([cc.Node])
    ], FishSwim.prototype, "fishs", void 0);
    FishSwim = __decorate([
        ccclass
    ], FishSwim);
    return FishSwim;
}(cc.Component));
exports.default = FishSwim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL090aGVyL0Zpc2hTd2ltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUE7QUFFdEIsSUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUUseUJBQXlCO0FBQzdFLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUd0QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdFQztRQTdERyxXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQTBEdEIsQ0FBQztJQXZERyx5QkFBTSxHQUFOO1FBQUEsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQzdCLElBQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUE7UUFFM0IsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7WUFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEIsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7WUFDakMsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDekIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLElBQUksRUFBRSxDQUFDO2dCQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsQ0FBQyxJQUFJO2dCQUNYLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBR0QsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQTtZQUVsQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7aUJBQ1QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QixhQUFhLENBQ1YsS0FBSyxFQUFFO2lCQUNGLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztpQkFDN0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ25CLElBQUksQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDdkMsQ0FBQyxDQUFDO2lCQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztpQkFDL0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ25CLElBQUksQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO1lBQ3RDLENBQUMsQ0FBQyxDQUNUO2lCQUNBLEtBQUssRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUE1REQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7MkNBQ0U7SUFITCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0U1QjtJQUFELGVBQUM7Q0FoRUQsQUFnRUMsQ0FoRXFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0VqRDtrQkFoRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHR3ZWVuID0gY2MudHdlZW5cclxuXHJcbmNvbnN0IEZJU0hTX1NQRUVEID0gWzI1MCwgNTAwLCAyMDAsIDMwMCwgMjAwLCAxNTBdICAvLyBzcGVlZCwgZGlzdGFudCBwZXIgc2VjXHJcbmNvbnN0IEZJU0hTX0RFTEFZID0gWzMsIDYsIDIsIDIsIDQsIDFdXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoU3dpbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGZpc2hzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBfZHVyYXRpb25zID0gW107XHJcbiAgICBfZmlzaHNDb25maWcgPSBbXTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2Zpc2hzQ29uZmlnID0gW11cclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMubm9kZS53aWR0aFxyXG4gICAgICAgIGNvbnN0IGhhZnRXaWR0aCA9IHdpZHRoIC8gMlxyXG5cclxuICAgICAgICBGSVNIU19TUEVFRC5mb3JFYWNoKChzcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbnMucHVzaChwYXJzZUludCh3aWR0aCAvIHNwICsgJycpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZmlzaHMuZm9yRWFjaCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYWZ0Tm9kZVdpZHRoID0gZi53aWR0aCAvIDJcclxuICAgICAgICAgICAgY29uc3QgcG9zWCA9IGYucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLl9maXNoc0NvbmZpZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IGYsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5hYnMocG9zWCAqIDIpIC8gRklTSFNfU1BFRURbaV0sXHJcbiAgICAgICAgICAgICAgICBzdGFydFg6IHBvc1gsXHJcbiAgICAgICAgICAgICAgICBlbmRYOiAtcG9zWCxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBGSVNIU19ERUxBWVtpXSxcclxuICAgICAgICAgICAgICAgIHk6IGYueSxcclxuICAgICAgICAgICAgICAgIHNjYWxlWDogZi5zY2FsZVgsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFnKC0xMDApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuX2Zpc2hzQ29uZmlnLmZvckVhY2goKGNvbmZpZywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25maWcubm9kZS5wb3NpdGlvbi54ID0gY29uZmlnLnN0YXJ0WFxyXG4gICAgICAgICAgICBjb25maWcubm9kZS5zY2FsZVggPSBjb25maWcuc2NhbGVYXHJcblxyXG4gICAgICAgICAgICB0d2Vlbihjb25maWcubm9kZSlcclxuICAgICAgICAgICAgICAgIC50YWcoLTEwMClcclxuICAgICAgICAgICAgICAgIC5kZWxheShjb25maWcuZGVsYXkgLyAyKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oY29uZmlnLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKGNvbmZpZy5lbmRYLCBjb25maWcueSl9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoY29uZmlnLmRlbGF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcubm9kZS5zY2FsZVggPSAtY29uZmlnLnNjYWxlWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oY29uZmlnLmR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKGNvbmZpZy5zdGFydFgsIGNvbmZpZy55KX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShjb25maWcuZGVsYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5ub2RlLnNjYWxlWCA9IGNvbmZpZy5zY2FsZVhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFnKC0xMDApXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Loading/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cb26ahkbZPCrGfz6CL5SeY', 'Loading');
// Scripts/Loading/Loading.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dot = [];
        return _this;
    }
    NewClass.prototype.onEnable = function () {
        for (var _i = 0, _a = this.dot; _i < _a.length; _i++) {
            var dot = _a[_i];
            dot.y = 0;
        }
        this.action();
    };
    NewClass.prototype.onDisable = function () {
        for (var _i = 0, _a = this.dot; _i < _a.length; _i++) {
            var dot = _a[_i];
            cc.Tween.stopAllByTarget(dot);
        }
    };
    NewClass.prototype.action = function () {
        cc.tween(this.dot[0]).repeatForever(cc.tween().by(0.2, { position: cc.v3(0, 30) }, { easing: "cubicIn" })
            .by(0.2, { position: cc.v3(0, -30) }, { easing: "cubicOut" })
            .delay(0.5)).start();
        cc.tween(this.dot[1]).delay(0.15).repeatForever(cc.tween().by(0.2, { position: cc.v3(0, 30) }, { easing: "cubicIn" })
            .by(0.2, { position: cc.v3(0, -30) }, { easing: "cubicOut" })
            .delay(0.5)).start();
        cc.tween(this.dot[2]).delay(0.3).repeatForever(cc.tween().by(0.2, { position: cc.v3(0, 30) }, { easing: "cubicIn" })
            .by(0.2, { position: cc.v3(0, -30) }, { easing: "cubicOut" })
            .delay(0.5)).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dot", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xvYWRpbmcvTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNDQztRQW5DRyxTQUFHLEdBQWMsRUFBRSxDQUFDOztJQW1DeEIsQ0FBQztJQWpDRywyQkFBUSxHQUFSO1FBQ0ksS0FBZ0IsVUFBUSxFQUFSLEtBQUEsSUFBSSxDQUFDLEdBQUcsRUFBUixjQUFRLEVBQVIsSUFBUSxFQUN4QjtZQURLLElBQUksR0FBRyxTQUFBO1lBRVIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLEtBQWdCLFVBQVEsRUFBUixLQUFBLElBQUksQ0FBQyxHQUFHLEVBQVIsY0FBUSxFQUFSLElBQVEsRUFDeEI7WUFESyxJQUFJLEdBQUcsU0FBQTtZQUVSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQzNCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUM7YUFDNUQsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUM7YUFDeEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNsQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FDdkMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQzthQUM1RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQzthQUN4RCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUN0QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDO2FBQzVELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDO2FBQ3hELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFISCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0M1QjtJQUFELGVBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBc0NqRDtrQkF0Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvdDogY2MuTm9kZVtdID0gW107XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgZG90IG9mIHRoaXMuZG90KVxuICAgICAgICB7XG4gICAgICAgICAgICBkb3QueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb24oKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGRvdCBvZiB0aGlzLmRvdClcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGRvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG90WzBdKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4yLCB7cG9zaXRpb246IGNjLnYzKDAsIDMwKX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSlcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMiwge3Bvc2l0aW9uOiBjYy52MygwLCAtMzApfSwge2Vhc2luZzogXCJjdWJpY091dFwifSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgICAgICkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb3RbMV0pLmRlbGF5KDAuMTUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjIsIHtwb3NpdGlvbjogY2MudjMoMCwgMzApfSwge2Vhc2luZzogXCJjdWJpY0luXCJ9KVxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4yLCB7cG9zaXRpb246IGNjLnYzKDAsIC0zMCl9LCB7ZWFzaW5nOiBcImN1YmljT3V0XCJ9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC41KVxuICAgICAgICAgICAgKS5zdGFydCgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmRvdFsyXSkuZGVsYXkoMC4zKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4yLCB7cG9zaXRpb246IGNjLnYzKDAsIDMwKX0sIHtlYXNpbmc6IFwiY3ViaWNJblwifSlcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMiwge3Bvc2l0aW9uOiBjYy52MygwLCAtMzApfSwge2Vhc2luZzogXCJjdWJpY091dFwifSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgICAgICkuc3RhcnQoKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ButtonNext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '619c7FKngVAq4hGivO+DbG/', 'ButtonNext');
// Scripts/ButtonNext.ts

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
var EffectManager_1 = require("./EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onEnable = function () {
        EffectManager_1.default.scaleForever(this.node, 1, 1.1, 0.7);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0J1dHRvbk5leHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQUtBLENBQUM7SUFIRywyQkFBUSxHQUFSO1FBQ0ksdUJBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFKZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQUs1QjtJQUFELGVBQUM7Q0FMRCxBQUtDLENBTHFDLEVBQUUsQ0FBQyxTQUFTLEdBS2pEO2tCQUxvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4vRWZmZWN0TWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLnNjYWxlRm9yZXZlcih0aGlzLm5vZGUsIDEsIDEuMSwgMC43KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bc46rpWClIqJJbH+W8pEmC', 'EventManager');
// Scripts/EventManager.ts

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
var EffectManager = /** @class */ (function (_super) {
    __extends(EffectManager, _super);
    function EffectManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Chuyển cảnh khác
    EffectManager.sendRequestNextScene = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("request_next_scene", true));
    };
    //Reset lại từ đầu level
    EffectManager.sendRequestReset = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("back_to_stage_begin", true));
    };
    //Chơi lại từ stage 1
    EffectManager.sendRequestPlayStageBegin = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("back_to_stage_begin", true));
    };
    //Qua màn
    EffectManager.sendRequestResult = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("next_level", true));
    };
    //Chuyển stage khác
    EffectManager.sendRequestNextStage = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("next_stage", true));
    };
    //Hiển thị đếm ngược
    EffectManager.sendRequestContinue = function (node) {
        node.dispatchEvent(new cc.Event.EventCustom("show_continue", true));
    };
    EffectManager = __decorate([
        ccclass
    ], EffectManager);
    return EffectManager;
}(cc.Component));
exports.default = EffectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0V2ZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUErQkEsQ0FBQztJQTdCRyxrQkFBa0I7SUFDSixrQ0FBb0IsR0FBbEMsVUFBbUMsSUFBYTtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsd0JBQXdCO0lBQ1YsOEJBQWdCLEdBQTlCLFVBQStCLElBQWE7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHFCQUFxQjtJQUNQLHVDQUF5QixHQUF2QyxVQUF3QyxJQUFhO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxTQUFTO0lBQ0ssK0JBQWlCLEdBQS9CLFVBQWdDLElBQWE7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxtQkFBbUI7SUFDTCxrQ0FBb0IsR0FBbEMsVUFBbUMsSUFBYTtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELG9CQUFvQjtJQUNOLGlDQUFtQixHQUFqQyxVQUFrQyxJQUFhO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBOUJnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBK0JqQztJQUFELG9CQUFDO0NBL0JELEFBK0JDLENBL0IwQyxFQUFFLENBQUMsU0FBUyxHQStCdEQ7a0JBL0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vQ2h1eeG7g24gY+G6o25oIGtow6FjXG4gICAgcHVibGljIHN0YXRpYyBzZW5kUmVxdWVzdE5leHRTY2VuZShub2RlOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oXCJyZXF1ZXN0X25leHRfc2NlbmVcIiwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vUmVzZXQgbOG6oWkgdOG7qyDEkeG6p3UgbGV2ZWxcbiAgICBwdWJsaWMgc3RhdGljIHNlbmRSZXF1ZXN0UmVzZXQobm9kZTogY2MuTm9kZSkgOiB2b2lkIHtcbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImJhY2tfdG9fc3RhZ2VfYmVnaW5cIiwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vQ2jGoWkgbOG6oWkgdOG7qyBzdGFnZSAxXG4gICAgcHVibGljIHN0YXRpYyBzZW5kUmVxdWVzdFBsYXlTdGFnZUJlZ2luKG5vZGU6IGNjLk5vZGUpIDogdm9pZCB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oXCJiYWNrX3RvX3N0YWdlX2JlZ2luXCIsIHRydWUpKTtcbiAgICB9XG5cbiAgICAvL1F1YSBtw6BuXG4gICAgcHVibGljIHN0YXRpYyBzZW5kUmVxdWVzdFJlc3VsdChub2RlOiBjYy5Ob2RlKSA6IHZvaWQge1xuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwibmV4dF9sZXZlbFwiLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgLy9DaHV54buDbiBzdGFnZSBraMOhY1xuICAgIHB1YmxpYyBzdGF0aWMgc2VuZFJlcXVlc3ROZXh0U3RhZ2Uobm9kZTogY2MuTm9kZSkgOiB2b2lkIHtcbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcIm5leHRfc3RhZ2VcIiwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vSGnhu4NuIHRo4buLIMSR4bq/bSBuZ8aw4bujY1xuICAgIHB1YmxpYyBzdGF0aWMgc2VuZFJlcXVlc3RDb250aW51ZShub2RlOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oXCJzaG93X2NvbnRpbnVlXCIsIHRydWUpKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClipController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29db6CM5eJA4LKE7xSCD9h9', 'ClipController');
// Scripts/ClipController.ts

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
exports.TYPE = void 0;
var StageController_1 = require("./StageController");
var EffectManager_1 = require("./EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TYPE;
(function (TYPE) {
    TYPE[TYPE["NONE"] = 0] = "NONE";
    TYPE[TYPE["INTRODUCE"] = 1] = "INTRODUCE";
    TYPE[TYPE["SUCCESS"] = 2] = "SUCCESS";
    TYPE[TYPE["FAIL"] = 3] = "FAIL";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var ClipController = /** @class */ (function (_super) {
    __extends(ClipController, _super);
    function ClipController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.type = TYPE.NONE;
        _this_1.nextStage = null;
        _this_1.fade = false;
        _this_1.actionStart = [];
        _this_1._ = null;
        return _this_1;
    }
    ClipController.prototype.onLoad = function () {
        this._ = this;
    };
    ClipController.prototype.onEnable = function () {
        // this.node.on("finish_stage", this.)
        this.node.on("complete_introduce", this.onCompleteIntroduce, this);
    };
    ClipController.prototype.onDisable = function () {
        this.node.on("complete_introduce", this.onCompleteIntroduce, this);
    };
    ClipController.prototype.onCompleteIntroduce = function (event) {
        event.stopPropagation();
        var optionContainer = cc.find("Canvas/OptionContainer");
        EffectManager_1.default.effectScaleOption(optionContainer, 0.7);
    };
    ClipController.prototype.startClip = function (_this) {
        var component = "";
        var handler = "";
        for (var _i = 0, _a = _this.actionStart; _i < _a.length; _i++) {
            var element = _a[_i];
            component = element._componentName;
            handler = element.handler;
            var func = element.target.getComponent(component)[handler];
            func(element.target.getComponent(component));
        }
    };
    ClipController.prototype.onFinishClip = function (_this) {
        console.log("%c" + _this.type, "color: violet");
        switch (_this.type) {
            case TYPE.INTRODUCE:
                var clip = _this.node.parent;
                var stageController = clip.getComponent("StageController");
                EffectManager_1.default.effectScaleOption(stageController.optionContainer, 0.5);
                break;
            default:
                var stage = _this.node.parent.getComponent("StageController");
                stage.onResult(_this.type);
                break;
        }
    };
    __decorate([
        property({ type: cc.Enum(TYPE) })
    ], ClipController.prototype, "type", void 0);
    __decorate([
        property({ type: StageController_1.default })
    ], ClipController.prototype, "nextStage", void 0);
    __decorate([
        property
    ], ClipController.prototype, "fade", void 0);
    __decorate([
        property({ type: cc.Component.EventHandler })
    ], ClipController.prototype, "actionStart", void 0);
    ClipController = __decorate([
        ccclass
    ], ClipController);
    return ClipController;
}(cc.Component));
exports.default = ClipController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsaXBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQVksSUFLWDtBQUxELFdBQVksSUFBSTtJQUNaLCtCQUFJLENBQUE7SUFDSix5Q0FBUyxDQUFBO0lBQ1QscUNBQU8sQ0FBQTtJQUNQLCtCQUFJLENBQUE7QUFDUixDQUFDLEVBTFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBS2Y7QUFHRDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHVFQTZEQztRQTFERyxZQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUd2QixpQkFBUyxHQUFvQixJQUFJLENBQUM7UUFHbEMsWUFBSSxHQUFHLEtBQUssQ0FBQztRQUdiLG1CQUFXLEdBQWdDLEVBQUUsQ0FBQztRQUV0QyxTQUFDLEdBQUcsSUFBSSxDQUFDOztJQStDckIsQ0FBQztJQTlDRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsS0FBMkI7UUFDM0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RCx1QkFBYSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQW9CLFVBQWlCLEVBQWpCLEtBQUEsS0FBSyxDQUFDLFdBQVcsRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFDckM7WUFESyxJQUFJLE9BQU8sU0FBQTtZQUVaLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQ25DLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzFCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNoRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQ2xCO1lBQ0ksS0FBSyxJQUFJLENBQUMsU0FBUztnQkFDZixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMzRCx1QkFBYSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU07WUFDVjtnQkFDSSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLE1BQU07U0FDYjtJQUNMLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO2dEQUNUO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLHlCQUFlLEVBQUMsQ0FBQztxREFDQTtJQUdsQztRQURDLFFBQVE7Z0RBQ0k7SUFHYjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQyxDQUFDO3VEQUNFO0lBWjdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E2RGxDO0lBQUQscUJBQUM7Q0E3REQsQUE2REMsQ0E3RDJDLEVBQUUsQ0FBQyxTQUFTLEdBNkR2RDtrQkE3RG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhZ2VDb250cm9sbGVyIGZyb20gXCIuL1N0YWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4vRWZmZWN0TWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gVFlQRSB7XG4gICAgTk9ORSxcbiAgICBJTlRST0RVQ0UsXG4gICAgU1VDQ0VTUyxcbiAgICBGQUlMXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGlwQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkVudW0oVFlQRSl9KVxuICAgIHR5cGU6IFRZUEUgPSBUWVBFLk5PTkU7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFN0YWdlQ29udHJvbGxlcn0pXG4gICAgbmV4dFN0YWdlOiBTdGFnZUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZmFkZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyfSlcbiAgICBhY3Rpb25TdGFydDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG5cbiAgICBwcml2YXRlIF8gPSBudWxsO1xuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fID0gdGhpcztcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwiZmluaXNoX3N0YWdlXCIsIHRoaXMuKVxuICAgICAgICB0aGlzLm5vZGUub24oXCJjb21wbGV0ZV9pbnRyb2R1Y2VcIiwgdGhpcy5vbkNvbXBsZXRlSW50cm9kdWNlLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJjb21wbGV0ZV9pbnRyb2R1Y2VcIiwgdGhpcy5vbkNvbXBsZXRlSW50cm9kdWNlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlSW50cm9kdWNlKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdmFyIG9wdGlvbkNvbnRhaW5lciA9IGNjLmZpbmQoXCJDYW52YXMvT3B0aW9uQ29udGFpbmVyXCIpO1xuICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKG9wdGlvbkNvbnRhaW5lciwgMC43KTtcbiAgICB9XG5cbiAgICBzdGFydENsaXAoX3RoaXMpOiB2b2lkIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IFwiXCI7XG4gICAgICAgIHZhciBoYW5kbGVyID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiBfdGhpcy5hY3Rpb25TdGFydClcbiAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gZWxlbWVudC5fY29tcG9uZW50TmFtZTtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBlbGVtZW50LmhhbmRsZXI7XG4gICAgICAgICAgICB2YXIgZnVuYyA9IGVsZW1lbnQudGFyZ2V0LmdldENvbXBvbmVudChjb21wb25lbnQpW2hhbmRsZXJdO1xuICAgICAgICAgICAgZnVuYyhlbGVtZW50LnRhcmdldC5nZXRDb21wb25lbnQoY29tcG9uZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbmlzaENsaXAoX3RoaXMpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgX3RoaXMudHlwZSwgXCJjb2xvcjogdmlvbGV0XCIpO1xuICAgICAgICBzd2l0Y2ggKF90aGlzLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgVFlQRS5JTlRST0RVQ0U6XG4gICAgICAgICAgICAgICAgdmFyIGNsaXAgPSBfdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB2YXIgc3RhZ2VDb250cm9sbGVyID0gY2xpcC5nZXRDb21wb25lbnQoXCJTdGFnZUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RTY2FsZU9wdGlvbihzdGFnZUNvbnRyb2xsZXIub3B0aW9uQ29udGFpbmVyLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsZXQgc3RhZ2UgPSBfdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJTdGFnZUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgc3RhZ2Uub25SZXN1bHQoX3RoaXMudHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9ICBcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/HomeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1401dGXgNZBWa6wc2UrdD/k', 'HomeController');
// Scripts/HomeController.ts

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
var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lupin = null;
        _this.ui = null;
        _this.wall = null;
        _this.floor = null;
        _this.bed = null;
        _this.tv = null;
        _this.window = null;
        _this.pricture = null;
        _this.toilet = null;
        _this.dayCount = null;
        _this.notification = null;
        _this._decorations = [];
        return _this;
    }
    HomeController.prototype.onLoad = function () {
        this._decorations = [this.wall, this.floor, this.bed, this.tv, this.window, this.pricture, this.toilet];
        this.setCurrentDeco();
        this.setLupinLoop();
    };
    HomeController.prototype.onEnable = function () {
        this.notification.active = true;
        this.lupin.setSkin('Lupin');
    };
    HomeController.prototype.onDisable = function () {
        this.notification.active = false;
    };
    HomeController.prototype.moveVertical = function (distance, duration, cb) {
        if (cb === void 0) { cb = function () { }; }
        cc.tween(this.node)
            .by(duration, { position: cc.v3(0, -distance) })
            .call(cb)
            .start();
    };
    HomeController.prototype.setDecoration = function (decoIndex, sFrame) {
        var deco = this._decorations[decoIndex];
        if (deco) {
            deco.node.opacity = 180;
            deco.spriteFrame = sFrame;
            tween(deco.node)
                .delay(.5)
                .to(.3, { opacity: 255 })
                .start();
        }
    };
    HomeController.prototype.setCurrentDeco = function () {
        var _this = this;
        var gameData = Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var gameData = data;
            var currentDeco = gameData.currentDeco || {};
            Object.keys(currentDeco).forEach(function (cate) {
                var decoData = currentDeco[cate];
                cc.resources.load("Shop/" + decoData.type + "/" + cate + "_" + decoData.type, cc.SpriteFrame, function (err, sFrame) {
                    if (err) {
                        sFrame = null;
                    }
                    _this.setDecoration(decoData.cateIndex, sFrame);
                });
            });
        });
    };
    HomeController.prototype.setLupinLoop = function () {
        var _this = this;
        var count = 0;
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name === 'home/bed') {
                count++;
                if (count >= 4) {
                    count = 0;
                    _this.setLupinToilet();
                }
            }
            if (track.animation.name === 'emotion/sinister') {
                count++;
                if (count >= 7) {
                    count = 0;
                    _this.setLupinBed();
                }
            }
        });
        this.setLupinStand();
    };
    HomeController.prototype.setLupinOpacity = function () {
        this.lupin.node.opacity = 180;
        tween(this.lupin.node)
            .to(.5, { opacity: 255 })
            .start();
    };
    HomeController.prototype.setLupinBed = function () {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var gameData = data;
            var currentDeco = gameData.currentDeco;
            if (!currentDeco || !currentDeco.Giuong || !currentDeco.Giuong.type) {
                return _this.setLupinToilet();
            }
            _this.lupin.timeScale = 1;
            _this.lupin.setAnimation(0, 'emotion/idle', false);
            _this.lupin.setAnimation(1, 'home/bed', true);
            _this.lupin.clearTrack(0);
            _this.lupin.node.position = cc.v3(264, -378);
            _this.setLupinOpacity();
        });
    };
    HomeController.prototype.setLupinStand = function () {
        this.lupin.setAnimation(1, 'general/stand_thinking', false);
        this.lupin.setAnimation(0, 'emotion/sinister', true);
        this.lupin.node.position = cc.v3(19, -515);
        this.setLupinOpacity();
    };
    HomeController.prototype.setLupinToilet = function () {
        var _this = this;
        this.lupin.setAnimation(1, 'home/seat_toilet', false);
        this.lupin.setAnimation(0, 'emotion/idle', false);
        this.lupin.node.position = cc.v3(-110, -305);
        this.lupin.node.opacity = 180;
        tween(this.lupin.node)
            .to(.5, { opacity: 255 })
            .repeat(2, tween()
            .call(function () {
            _this.lupin.setAnimation(1, 'home/seat_toilet', true);
            _this.lupin.setAnimation(0, 'emotion/idle', true);
        })
            .delay(5)
            .call(function () {
            _this.lupin.clearTrack(0);
            _this.lupin.setAnimation(1, 'home/seat_toilet2', false);
        })
            .delay(3))
            .call(function () {
            _this.setLupinStand();
        })
            .start();
    };
    HomeController.prototype.updateCalendar = function () {
        var _this = this;
        Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
            var day = 10 - (data.unlockedLevel % 10);
            _this.dayCount.string = day.toString();
        });
    };
    __decorate([
        property(sp.Skeleton)
    ], HomeController.prototype, "lupin", void 0);
    __decorate([
        property(cc.Node)
    ], HomeController.prototype, "ui", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "wall", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "floor", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "bed", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "tv", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "window", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "pricture", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeController.prototype, "toilet", void 0);
    __decorate([
        property(cc.Label)
    ], HomeController.prototype, "dayCount", void 0);
    __decorate([
        property(cc.Node)
    ], HomeController.prototype, "notification", void 0);
    HomeController = __decorate([
        ccclass
    ], HomeController);
    return HomeController;
}(cc.Component));
exports.default = HomeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0hvbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBa01DO1FBL0xHLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBR3pCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFHdEIsUUFBRSxHQUFjLElBQUksQ0FBQztRQUdyQixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQStKOUIsQ0FBQztJQTdKRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN2RyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFD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QUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0M7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBakNaLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrTWxDO0lBQUQscUJBQUM7Q0FsTUQsQUFrTUMsQ0FsTTJDLEVBQUUsQ0FBQyxTQUFTLEdBa012RDtrQkFsTW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IHR3ZWVuID0gY2MudHdlZW47XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGx1cGluOiBzcC5Ta2VsZXRvbiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgd2FsbDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgZmxvb3I6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJlZDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgdHY6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHdpbmRvdzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpY3R1cmU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHRvaWxldDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBkYXlDb3VudDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm90aWZpY2F0aW9uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2RlY29yYXRpb25zID0gW107XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX2RlY29yYXRpb25zID0gW3RoaXMud2FsbCwgdGhpcy5mbG9vciwgdGhpcy5iZWQsIHRoaXMudHYsIHRoaXMud2luZG93LCB0aGlzLnByaWN0dXJlLCB0aGlzLnRvaWxldF1cbiAgICAgICAgdGhpcy5zZXRDdXJyZW50RGVjbygpXG4gICAgICAgIHRoaXMuc2V0THVwaW5Mb29wKClcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRTa2luKCdMdXBpbicpXG4gICAgfVxuICAgIFxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIG1vdmVWZXJ0aWNhbChkaXN0YW5jZSwgZHVyYXRpb24sIGNiID0gKCkgPT4ge30pIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmJ5KGR1cmF0aW9uLCB7cG9zaXRpb246IGNjLnYzKDAsIC1kaXN0YW5jZSl9KVxuICAgICAgICAgICAgLmNhbGwoY2IpXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuICAgIHNldERlY29yYXRpb24oZGVjb0luZGV4LCBzRnJhbWUpIHtcbiAgICAgICAgY29uc3QgZGVjbyA9IHRoaXMuX2RlY29yYXRpb25zW2RlY29JbmRleF1cblxuICAgICAgICBpZiAoZGVjbykge1xuICAgICAgICAgICAgZGVjby5ub2RlLm9wYWNpdHkgPSAxODBcbiAgICAgICAgICAgIGRlY28uc3ByaXRlRnJhbWUgPSBzRnJhbWVcblxuICAgICAgICAgICAgdHdlZW4oZGVjby5ub2RlKVxuICAgICAgICAgICAgICAgIC5kZWxheSguNSlcbiAgICAgICAgICAgICAgICAudG8oLjMsIHtvcGFjaXR5OiAyNTV9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldEN1cnJlbnREZWNvKCkge1xuICAgICAgICBjb25zdCBnYW1lRGF0YSA9IERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZURhdGEgPSBkYXRhXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGVjbyA9IGdhbWVEYXRhLmN1cnJlbnREZWNvIHx8IHt9XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnREZWNvKS5mb3JFYWNoKChjYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb0RhdGEgPSBjdXJyZW50RGVjb1tjYXRlXVxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFxuICAgICAgICAgICAgICAgICAgICBgU2hvcC8ke2RlY29EYXRhLnR5cGV9LyR7Y2F0ZX1fJHtkZWNvRGF0YS50eXBlfWAsXG4gICAgICAgICAgICAgICAgICAgIGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgICAgICAgICAoZXJyLCBzRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzRnJhbWUgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGVjb3JhdGlvbihkZWNvRGF0YS5jYXRlSW5kZXgsIHNGcmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldEx1cGluTG9vcCgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuXG4gICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2spID0+IHtcblxuICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09PSAnaG9tZS9iZWQnKSB7XG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEx1cGluVG9pbGV0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PT0gJ2Vtb3Rpb24vc2luaXN0ZXInKSB7XG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEx1cGluQmVkKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRMdXBpblN0YW5kKClcbiAgICB9XG5cbiAgICBzZXRMdXBpbk9wYWNpdHkoKSB7XG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5vcGFjaXR5ID0gMTgwXG5cbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKVxuICAgICAgICAgICAgLnRvKC41LCB7b3BhY2l0eTogMjU1fSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgc2V0THVwaW5CZWQoKSB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZURhdGEgPSBkYXRhXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGVjbyA9IGdhbWVEYXRhLmN1cnJlbnREZWNvXG5cbiAgICAgICAgICAgIGlmICghY3VycmVudERlY28gfHwgIWN1cnJlbnREZWNvLkdpdW9uZyB8fCAhY3VycmVudERlY28uR2l1b25nLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRMdXBpblRvaWxldCgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMVxuICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgJ2Vtb3Rpb24vaWRsZScsIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgJ2hvbWUvYmVkJywgdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMubHVwaW4uY2xlYXJUcmFjaygwKVxuICAgICAgICAgICAgdGhpcy5sdXBpbi5ub2RlLnBvc2l0aW9uID0gY2MudjMoMjY0LCAtMzc4KVxuXG4gICAgICAgICAgICB0aGlzLnNldEx1cGluT3BhY2l0eSgpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldEx1cGluU3RhbmQoKSB7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDEsICdnZW5lcmFsL3N0YW5kX3RoaW5raW5nJywgZmFsc2UpXG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsICdlbW90aW9uL3NpbmlzdGVyJywgdHJ1ZSlcbiAgICAgICAgdGhpcy5sdXBpbi5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTksIC01MTUpXG5cbiAgICAgICAgdGhpcy5zZXRMdXBpbk9wYWNpdHkoKVxuICAgIH1cblxuICAgIHNldEx1cGluVG9pbGV0KCkge1xuICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigxLCAnaG9tZS9zZWF0X3RvaWxldCcsIGZhbHNlKVxuICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCAnZW1vdGlvbi9pZGxlJywgZmFsc2UpXG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0xMTAsIC0zMDUpXG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5vcGFjaXR5ID0gMTgwXG5cbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKVxuICAgICAgICAgICAgLnRvKC41LCB7b3BhY2l0eTogMjU1fSlcbiAgICAgICAgICAgIC5yZXBlYXQoXG4gICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICB0d2VlbigpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDEsICdob21lL3NlYXRfdG9pbGV0JywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsICdlbW90aW9uL2lkbGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoNSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5jbGVhclRyYWNrKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigxLCAnaG9tZS9zZWF0X3RvaWxldDInLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMdXBpblN0YW5kKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuICAgIHVwZGF0ZUNhbGVuZGFyKCk6IHZvaWQge1xuICAgICAgICBEYXRhLmdldERhdGEoRGF0YS5GQUNFQk9PS19LRVksIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXkgPSAxMCAtIChkYXRhLnVubG9ja2VkTGV2ZWwgJSAxMCk7XG4gICAgICAgICAgICB0aGlzLmRheUNvdW50LnN0cmluZyA9IGRheS50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZCSW5zdGFudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLGdCQUFnQixHQUFHLGlCQUFpQixDQUFBO0FBQzFDLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQTtBQUczQjtJQU1JOzs7T0FHRztJQUNIO1FBTlEsYUFBUSxHQUFHLEVBQUUsQ0FBQTtJQU1HLENBQUM7eUJBVlIsZ0JBQWdCO0lBWWpDOzs7OztPQUtHO0lBQ1csNEJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsa0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzVCLGtCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFnQixFQUFFLENBQUM7U0FDdEQ7UUFFRCxPQUFPLGtCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRU0sc0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJO2dCQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTthQUMzQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFBO2FBQzVCO1NBQ0o7UUFHRCxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQzNDLENBQUM7SUFFTyxzQ0FBVyxHQUFuQixVQUFvQixFQUFFO1FBQXRCLGlCQVNDO1FBUkcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzNCO1FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMs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QUFTO2dCQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUN4QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ3hCO1FBRUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDaEQsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBdEpnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVKcEM7SUFBRCx1QkFBQztDQXZKRCxBQXVKQyxJQUFBO2tCQXZKb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBMRUFERVJCT0FSRF9OQU1FID0gJ1RvcCBlc2NhcHRpc3RzLidcclxuY29uc3QgREFUQV9LRVkgPSAndXNlckRhdGEnXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQkluc3RhbnRNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHQkluc3RhbnRNYW5hZ2VyO1xyXG5cclxuICAgIHByaXZhdGUgc2hhcmVJbWdcclxuICAgIHByaXZhdGUgcGxheWVySWQgPSAnJ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFNpbmdsZXRvbidzIGNvbnN0cnVjdG9yIHNob3VsZCBhbHdheXMgYmUgcHJpdmF0ZSB0byBwcmV2ZW50IGRpcmVjdFxyXG4gICAgICogY29uc3RydWN0aW9uIGNhbGxzIHdpdGggdGhlIGBuZXdgIG9wZXJhdG9yLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RhdGljIG1ldGhvZCB0aGF0IGNvbnRyb2xzIHRoZSBhY2Nlc3MgdG8gdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIGxldCB5b3Ugc3ViY2xhc3MgdGhlIFNpbmdsZXRvbiBjbGFzcyB3aGlsZSBrZWVwaW5nXHJcbiAgICAgKiBqdXN0IG9uZSBpbnN0YW5jZSBvZiBlYWNoIHN1YmNsYXNzIGFyb3VuZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHQkluc3RhbnRNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIUdCSW5zdGFudE1hbmFnZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgR0JJbnN0YW50TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBHQkluc3RhbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gR0JJbnN0YW50TWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVySWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcklkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcklkID0gRkJJbnN0YW50LnBsYXllci5nZXRJRCgpXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJJZCA9ICdsb2NhbElkJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJJZCkgcmV0dXJuIHRoaXMucGxheWVySWRcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNoYXJlSW1nKGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVJbWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKHRoaXMuc2hhcmVJbWcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgnQmFzZTY0L1NoYXJlSW1nJywgKGVyciwgZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlSW1nID0gZmlsZS50ZXh0XHJcbiAgICAgICAgICAgIGNiKHRoaXMuc2hhcmVJbWcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hhcmVHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U2hhcmVJbWcoKGltZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFyZVBsYXllcklEID0gRkJJbnN0YW50LnBsYXllci5nZXRJRCgpXHJcblxyXG4gICAgICAgICAgICBGQkluc3RhbnQuc2hhcmVBc3luYyh7XHJcbiAgICAgICAgICAgICAgICBpbnRlbnQ6ICdSRVFVRVNUJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxldCdzIHBsYXkgcHJpc29uIGVzY2FwZSFcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgc2hhcmVQbGF5ZXJJRCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludml0ZVBsYXkoY3VzdG9tRGF0YT17bGV2ZWw6IDEsIHBsYXllcklkOiAnJ30pIHtcclxuICAgICAgICBjb25zdCBwb3N0SW52aXRlID0gKGxlYWRlcmJvYXJkTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBGQkluc3RhbnQuZ2V0TGVhZGVyYm9hcmRBc3luYyhcclxuICAgICAgICAgICAgICAgIGxlYWRlcmJvYXJkTmFtZVxyXG4gICAgICAgICAgICApLnRoZW4oKGxlYWRlcmJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVhZGVyYm9hcmQuc2V0U2NvcmVBc3luYyhjdXN0b21EYXRhLmxldmVsLCAnJylcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBGQkluc3RhbnQudXBkYXRlQXN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ0xFQURFUkJPQVJEJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBsZWFkZXJib2FyZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7RkJJbnN0YW50LnBsYXllci5nZXROYW1lKCl9IGhhZCBwYXNzZWQgbGV2ZWwgJHtjdXN0b21EYXRhLmxldmVsfSBpbnZpdGUgeW91IHRvIHBsYXkgRXNjYXBlIFByaXNvbmAsXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ3NlbmQgaW52aXRlIC0gdXBkYXRlIGxlYWRlcmJvYXJkJylcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJycicsIGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHRGdW5jID0gRkJJbnN0YW50LmNvbnRleHQuY2hvb3NlQXN5bmNcclxuICAgICAgICBjb25zdCBwYXJhbSA9IFtdXHJcblxyXG4gICAgICAgIGlmIChjdXN0b21EYXRhLnBsYXllcklkKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRGdW5jID0gRkJJbnN0YW50LmNvbnRleHQuY3JlYXRlQXN5bmNcclxuICAgICAgICAgICAgcGFyYW0ucHVzaChjdXN0b21EYXRhLnBsYXllcklkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dEZ1bmMoLi4ucGFyYW0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsZWFkZXJib2FyZE5hbWUgPSBMRUFERVJCT0FSRF9OQU1FICsgRkJJbnN0YW50LmNvbnRleHQuZ2V0SUQoKVxyXG4gICAgICAgICAgICBwb3N0SW52aXRlKGxlYWRlcmJvYXJkTmFtZSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyPW51bGwpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWw/JywgZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbm5lY3RlZFBsYXllcnMoY2IpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBGQkluc3RhbnQucGxheWVyLmdldENvbm5lY3RlZFBsYXllcnNBc3luYygpLnRoZW4ocGxheWVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcGxheWVycy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHAuZ2V0SUQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcC5nZXROYW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBwLmdldFBob3RvKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjYihkYXRhKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBsaXN0IGZhaWwnLCBlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygnZXJyb3I6JywgZXJyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGxheWVyRGF0YShkYXRhLCBjYikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghRkJJbnN0YW50KSByZXR1cm4gY2IobnVsbClcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHt9XHJcbiAgICAgICAgc2F2ZURhdGFbREFUQV9LRVldID0gZGF0YVxyXG5cclxuICAgICAgICBGQkluc3RhbnQucGxheWVyLnNldERhdGFBc3luYyhzYXZlRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNiKG51bGwpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjYihlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBsYXllckRhdGEoY2IpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIUZCSW5zdGFudCkgcmV0dXJuIGNiKG51bGwsIG51bGwpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCBudWxsKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRkJJbnN0YW50LnBsYXllci5nZXREYXRhQXN5bmMoW0RBVEFfS0VZXSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjYihudWxsLCBkYXRhW0RBVEFfS0VZXSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNiKGVyciwgbnVsbClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LevelController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6197e/VHQpPtbSIrhBevAtS', 'LevelController');
// Scripts/LevelController.ts

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
var LevelController = /** @class */ (function (_super) {
    __extends(LevelController, _super);
    function LevelController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = [];
        _this.stageBegin = null;
        _this.numberStage = 0;
        _this.topContainer = null;
        _this.itemStage = null;
        return _this;
    }
    LevelController.prototype.onLoad = function () {
        this.initTopContainer();
    };
    LevelController.prototype.onEnable = function () {
        this.stageBegin.getComponent("StageController").runStage();
    };
    LevelController.prototype.initTopContainer = function () {
        for (var i = 0; i < this.numberStage; ++i) {
            var s = cc.instantiate(this.itemStage);
            s.name = (i + 1).toString();
            this.topContainer.addChild(s);
        }
        this.topContainer.getChildByName("Next").zIndex = cc.macro.MAX_ZINDEX;
    };
    __decorate([
        property({ type: cc.Component.EventHandler })
    ], LevelController.prototype, "stage", void 0);
    __decorate([
        property(cc.Node)
    ], LevelController.prototype, "stageBegin", void 0);
    __decorate([
        property
    ], LevelController.prototype, "numberStage", void 0);
    __decorate([
        property(cc.Node)
    ], LevelController.prototype, "topContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelController.prototype, "itemStage", void 0);
    LevelController = __decorate([
        ccclass
    ], LevelController);
    return LevelController;
}(cc.Component));
exports.default = LevelController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xldmVsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWlDQztRQTlCRyxXQUFLLEdBQWdDLEVBQUUsQ0FBQztRQUd4QyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUdoQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQWtCaEMsQ0FBQztJQWhCRyxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEI7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFDekM7WUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzFFLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsQ0FBQztrREFDSjtJQUd4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBRzNCO1FBREMsUUFBUTt3REFDTztJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFmWCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBaUNuQztJQUFELHNCQUFDO0NBakNELEFBaUNDLENBakM0QyxFQUFFLENBQUMsU0FBUyxHQWlDeEQ7a0JBakNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcn0pXG4gICAgc3RhZ2U6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3RhZ2VCZWdpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBudW1iZXJTdGFnZSA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b3BDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtU3RhZ2U6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdFRvcENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFnZUJlZ2luLmdldENvbXBvbmVudChcIlN0YWdlQ29udHJvbGxlclwiKS5ydW5TdGFnZSgpO1xuICAgIH1cblxuICAgIGluaXRUb3BDb250YWluZXIoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJTdGFnZTsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVN0YWdlKTtcbiAgICAgICAgICAgIHMubmFtZSA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMudG9wQ29udGFpbmVyLmFkZENoaWxkKHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9wQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwiTmV4dFwiKS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LevelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5aee2Hmyp1LC4bNZhdX+QQs', 'LevelBase');
// Scripts/LevelBase.ts

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
exports.TOTAL_LEVEL = void 0;
var EffectManager_1 = require("./EffectManager");
var EventManager_1 = require("./EventManager");
var GameManager_1 = require("./GameManager");
var GameManager_2 = require("./GameManager");
var Data_1 = require("./Data");
var BundleManager_1 = require("./BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var optionContainer = null;
var optionController = null;
var ui = null;
var tween = cc.tween;
exports.TOTAL_LEVEL = 19;
var LevelBase = /** @class */ (function (_super) {
    __extends(LevelBase, _super);
    function LevelBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Set level hiện tại cho màn chơi [0, 1,...,Max_level - 1]
        _this.levelCurrent = 0;
        //Số stage trong 1 level
        //Dùng để hiển thị số gạch ngang xuất hiện giữa 2 nhãn level [0, 1, 2,....]
        _this.numberStage = 0;
        //Dùng để hiển thị màu xanh các stage đã qua
        _this.stageCurrent = 0;
        //Node này sẽ được active = true khi 
        _this.sceneBegin = null;
        _this.sceneOption0 = [];
        _this.sceneOption1 = [];
        _this.sceneOption2 = [];
        _this.background = null;
        _this.money = null;
        _this.line = null;
        _this.lupin = null;
        _this.otherSpine = [];
        _this.otherSprite = [];
        _this.iconOption = [];
        _this.next = null;
        _this.fishSwim = null;
        _this.sounds = [];
        _this.selected = 0;
        _this.currentId = 0;
        //clickOption de ngan goi ham nhieu lan khi nguoi choi click lien tuc
        _this.clickOption = true;
        _this.optionScene = [[], [], []];
        _this.arrScene = [];
        _this._gameManager = null;
        _this.fail = null;
        _this.success = null;
        _this.shadow = null;
        _this.currentLine = null;
        _this.isTrue = true;
        _this._money = 50;
        _this._fishSwim = null;
        _this._line = new cc.NodePool();
        _this.camera2d = [];
        return _this;
    }
    ;
    LevelBase.prototype.onLoad = function () {
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        optionContainer = this._gameManager.optionContainer;
        optionController = optionContainer.getComponent("OptionController");
        this.fail = this._gameManager.fail;
        this.success = this._gameManager.success;
        this.shadow = this._gameManager.shadow;
        ui = this._gameManager._ui;
        for (var _i = 0, _a = this.camera2d; _i < _a.length; _i++) {
            var camera = _a[_i];
            camera.active = false;
        }
        if (this.fishSwim && !this._fishSwim) {
            this._fishSwim = cc.instantiate(this.fishSwim);
            this._fishSwim.active = false;
            this.node.addChild(this._fishSwim);
        }
    };
    LevelBase.prototype.onEnable = function () {
        console.log(("%c" + this.node.name), "color:blue");
        this.initOption();
        this._gameManager._levelCurrent.script = this;
        cc.log(this._gameManager._levelCurrent);
        this.node.getChildByName("Background").zIndex = cc.macro.MIN_ZINDEX;
        this.initArrayScene();
        //Khi scene ket thuc animation thi se ban dispatch
        this.addEventCustom();
        this.clickOption = true;
        this.lupin.setSkin('Lupin');
        this.initStage();
        this.showOptionContainer(false);
        this._fishSwim && (this._fishSwim.active = true);
    };
    LevelBase.prototype.onDisable = function () {
        this.showOptionContainer(false);
        this.removeEventCustom();
        this.resetUIResult();
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.name.includes("Option")) {
                node.active = false;
            }
        }
        this._fishSwim && (this._fishSwim.active = false);
        this._gameManager._home.updateCalendar();
    };
    LevelBase.prototype.start = function () {
        if (this.levelCurrent + 1 < exports.TOTAL_LEVEL) {
            var next = Number(this._gameManager._levelCurrent.level + 2);
            var path = "Level" + next;
            BundleManager_1.default.getInstance().getPrefabByName(path, null);
        }
    };
    LevelBase.prototype.addEventCustom = function () {
        this.node.on("request_next_scene", this.nextScene, this);
        this.node.on("show_continue", this.onContinue, this);
        this.node.on("next_stage", this.nextStage, this);
        this.node.on("back_to_stage_begin", this.playStageBegin, this);
        this.node.on("next_level", this.endGame, this);
    };
    LevelBase.prototype.removeEventCustom = function () {
        this.node.off("request_next_scene", this.nextScene, this);
        this.node.off("show_continue", this.onContinue, this);
        this.node.off("back_to_stage_begin", this.playStageBegin, this);
        this.node.off("next_stage", this.nextStage, this);
        this.node.off("next_level", this.endGame, this);
    };
    LevelBase.prototype.checkNextSceneExits = function (index, option) {
        switch (option) {
            case 0:
                return this.node.getChildByName("Option1_" + (index + 1));
            case 1:
                return this.node.getChildByName("Option2_" + (index + 1));
            case 2:
                return this.node.getChildByName("Option3_" + (index + 1));
            default:
                cc.error("Khong co scene");
                break;
        }
    };
    LevelBase.prototype.getInstantiate = function (index, option) {
        switch (option) {
            case 0:
                return this.optionScene[0][index];
            case 1:
                return this.optionScene[1][index];
            case 2:
                return this.optionScene[2][index];
            default:
                cc.error("Khong co prefab");
                return null;
        }
    };
    LevelBase.prototype.selectedButton = function (node) {
        node.getChildByName("selected").active = true;
    };
    LevelBase.prototype.resetUIResult = function () {
        this.shadow.opacity = 0;
        this.fail.opacity = 0;
        this.fail.scale = 10;
        this.success.opacity = 0;
        this.success.scale = 10;
    };
    LevelBase.prototype.endGame = function (event) {
        var _this = this;
        if (this._gameManager._levelCurrent.level < exports.TOTAL_LEVEL)
            ++this._gameManager._levelCurrent.level;
        //Mở khóa level sau
        if (this._gameManager._levelCurrent.level > this._gameManager._data.unlockedLevel) {
            this._gameManager._data.unlockedLevel = this._gameManager._levelCurrent.level;
            Data_1.default.getData(Data_1.default.FACEBOOK_KEY, function (err, data) {
                data.unlockedLevel = _this._gameManager._levelCurrent.level;
                Data_1.default.saveData(data, Data_1.default.FACEBOOK_KEY);
            });
        }
        this.resetUIResult();
        this.showEndGame(event);
    };
    LevelBase.prototype.nextScene = function (event) {
        var _this = this;
        this._gameManager._currentScene.active = false;
        var newScene = this.checkNextSceneExits(this.currentId, this.selected);
        if (newScene) {
            newScene.active = true;
            this._gameManager._currentScene = newScene;
            ++this.currentId;
            return;
        }
        newScene = this.getInstantiate(this.currentId, this.selected);
        if (newScene) {
            newScene.zIndex = -1;
            this._gameManager._currentScene = newScene;
            this.arrScene.push(newScene);
            this.scheduleOnce(function () {
                _this.node.addChild(newScene);
            }, 0.2);
        }
        ++this.currentId;
    };
    LevelBase.prototype.nextStage = function (sceneName) {
        if (this.next) {
            for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
                var children = _a[_i];
                children.active = false;
            }
            var scene = this.node.parent.getChildByName(this.next.name);
            if (scene) {
                scene.active = true;
            }
            else {
                scene = cc.instantiate(this.next);
                this.node.parent.addChild(scene);
            }
        }
    };
    LevelBase.prototype.initStage = function () {
        cc.audioEngine.stopAllEffects();
        this._gameManager.btnSetting.active = true;
        this.currentId = 0;
        this.clickOption = true;
        this.camera2d[0].position = cc.v3(0, 0);
        this.camera2d[0].getComponent(cc.Camera).zoomRatio = 1;
        this.background.zIndex = cc.macro.MIN_ZINDEX;
        this._gameManager.mainCamera.active = false;
        for (var _i = 0, _a = this.camera2d; _i < _a.length; _i++) {
            var camera = _a[_i];
            camera.active = true;
        }
        this.lupin.timeScale = 1;
        for (var _b = 0, _c = this.otherSpine; _b < _c.length; _b++) {
            var spine = _c[_b];
            spine.timeScale = 1;
        }
        this.background.position = cc.v3(0, 0);
        this._gameManager.optionContainer.getComponent("OptionController").resetOption();
        this._gameManager._currentScene = this.sceneBegin;
        optionController.setImageOption(this.iconOption);
        ui.showUIEndGame(false);
        this.resetUIResult();
        EffectManager_1.default.showUI(true);
        this.removeLineStage();
        this.createLineStage(this.numberStage);
        this.resultLineStage();
        //Vì index bắt đầu từ 0 nên phải +1, +2 để ra level hiển thị
        this.setLevel(this.levelCurrent + 1, this.levelCurrent + 2);
        if ((this.levelCurrent + 1) % 5 == 0 && (this.levelCurrent) > 5) {
            this._gameManager.btnSetting.x = -515;
            this._gameManager.level.x = 50;
        }
        else {
            this._gameManager.btnSetting.x = -500;
            this._gameManager.level.x = 0;
        }
        this.showOptionContainer(false);
    };
    LevelBase.prototype.hideAllScene = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var children = _a[_i];
            if (children.name != "Background")
                children.active = false;
        }
    };
    LevelBase.prototype.showEndGame = function (event) {
        ui.showUIIntroduce(false);
        ui.showUIEndGame(true);
    };
    LevelBase.prototype.selectOption = function (event) {
        this._gameManager.playSound(GameManager_2.SOUND.CLICK, false);
        this._gameManager.showGuide(false);
        if (!this.clickOption) {
            cc.error("Khong duoc click lien tuc hoac chon dap an khac!!!");
            return;
        }
        this.clickOption = false;
        switch (event.target.name) {
            case "option1":
                this.selected = 0;
                optionContainer.getChildByName("option1").getChildByName("selected").active = true;
                this.runOption1();
                break;
            case "option2":
                this.selected = 1;
                optionContainer.getChildByName("option2").getChildByName("selected").active = true;
                this.runOption2();
                break;
            case "option3":
                this.selected = 2;
                optionContainer.getChildByName("option3").getChildByName("selected").active = true;
                this.runOption3();
                break;
            default:
                cc.error("Khong co case phu hop!");
                break;
        }
        this.selectedButton(event.target);
    };
    LevelBase.prototype.runOption1 = function () {
    };
    LevelBase.prototype.runOption2 = function () {
    };
    LevelBase.prototype.runOption3 = function () {
    };
    LevelBase.prototype.setLupin = function (position, emotion, action) {
        if (emotion) {
            this.lupin.setAnimation(0, emotion, true);
        }
        if (action) {
            this.lupin.setAnimation(1, action, true);
        }
        this.lupin.node.position = cc.v3(position);
    };
    LevelBase.prototype.setOtherSpine = function (other, position, emotion, action) {
        if (emotion) {
            other.setAnimation(0, emotion, true);
        }
        if (action) {
            other.setAnimation(1, action, true);
        }
        if (position) {
            other.node.position = cc.v3(position);
        }
    };
    LevelBase.prototype.setOtherSprite = function (other, position) {
        other.node.position = cc.v3(position);
    };
    //Khởi tạo các prefab -> node rồi push vào mảng để sử dụng
    LevelBase.prototype.initArrayScene = function () {
        var sceneOptions = [this.sceneOption0, this.sceneOption1, this.sceneOption2];
        for (var j = 0; j < 3; j++) {
            var tempArr = [];
            if (this.optionScene[j].length == 0) {
                for (var i = 0; i < sceneOptions[j].length; ++i) {
                    tempArr.push(cc.instantiate(sceneOptions[j][i]));
                }
                this.optionScene[j] = tempArr;
            }
        }
    };
    //Khởi tạo event cho các nút
    LevelBase.prototype.initOption = function () {
        for (var i = 0; i < 3; ++i) {
            optionController.setOption(i, this.node, this.node.name, "selectOption");
        }
    };
    LevelBase.prototype.showOptionContainer = function (isShow) {
        if (isShow) {
            EffectManager_1.default.effectScaleOption(optionContainer, 0.7);
        }
        optionContainer.active = isShow;
    };
    LevelBase.prototype.showFail = function (option) {
        var _this = this;
        GameManager_1.default.logFailed(this.levelCurrent, this.stageCurrent, option);
        // GameManager.logEvent(`Failed L${this.levelCurrent + 1} S${this.stageCurrent + 1}-${option + 1}`)
        cc.audioEngine.stopAllEffects();
        tween(this.node).call(function () {
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
            EffectManager_1.default.showX(option, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.FAIL_STAGE, false);
            }, 0.15);
            _this._gameManager.btnSetting.active = false;
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
            EffectManager_1.default.effectFail();
            EffectManager_1.default.showUI(false);
        })
            .delay(2)
            .call(function () {
            EffectManager_1.default.hideScene(EventManager_1.default.sendRequestReset, _this.node);
        }).start();
    };
    LevelBase.prototype.showSuccess = function (option) {
        var _this = this;
        GameManager_1.default.logPassed(this.levelCurrent, this.stageCurrent, option);
        // GameManager.logEvent(`Passed L${this.levelCurrent + 1}`)
        cc.audioEngine.stopAllEffects();
        tween(this.node).call(function () {
            EffectManager_1.default.showTick(option, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.SUCCESS_LEVEL, false);
            }, 0.2);
            _this._gameManager.btnSetting.active = false;
            EffectManager_1.default.effectSuccess();
            EffectManager_1.default.showUI(false);
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestResult(_this.node);
        })
            .start();
    };
    LevelBase.prototype.setCamera = function (camera, positon, zoomRatio) {
        camera.active = true;
        camera.position = cc.v3(positon);
        camera.getComponent(cc.Camera).zoomRatio = zoomRatio;
    };
    LevelBase.prototype.stopAction = function () {
        for (var _i = 0, _a = this.otherSpine; _i < _a.length; _i++) {
            var spine = _a[_i];
            spine.timeScale = 0;
        }
    };
    LevelBase.prototype.setTimeScaleAllSpine = function (timeScale) {
        for (var _i = 0, _a = this.otherSpine; _i < _a.length; _i++) {
            var spine = _a[_i];
            spine.timeScale = timeScale;
        }
        this.lupin.timeScale = timeScale;
    };
    LevelBase.prototype.onContinue = function (event) {
        this._gameManager.mainCamera.active = true;
        this.resetUIResult();
        this._gameManager._ui.showUIContinue(true);
    };
    LevelBase.prototype.playStageBegin = function () {
        if (this.node.parent.name != "GameContainer") {
            for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
                var children = _a[_i];
                children.active = false;
            }
        }
        var beginScene = this.getBeginSceen();
        if (beginScene) {
            beginScene.active = true;
            if (this.node.parent.name == "GameContainer") {
                this.initStage();
            }
            else {
                this.background.active = true;
            }
        }
    };
    LevelBase.prototype.setBeginSceen = function (node) {
        this._gameManager._beginScene = node;
    };
    LevelBase.prototype.getBeginSceen = function () {
        return this._gameManager._beginScene;
    };
    LevelBase.prototype.setLevel = function (current, next) {
        this._gameManager.setLevel(current, next);
    };
    LevelBase.prototype.createLineStage = function (numberStage) {
        var level = cc.find("Canvas/Level");
        level.getChildByName("Start").zIndex = cc.macro.MIN_ZINDEX;
        level.getChildByName("Current").zIndex = cc.macro.MAX_ZINDEX;
        for (var i = 0; i < numberStage; ++i) {
            var line = void 0;
            if (this._line.size() > 0) {
                line = this._line.get();
            }
            else {
                line = cc.instantiate(this.line);
            }
            line.zIndex = 0 + i;
            cc.find("Canvas/Level").addChild(line);
        }
    };
    LevelBase.prototype.removeLineStage = function () {
        var line = cc.find("Canvas/Level").children;
        for (var i = 0; i < line.length; ++i) {
            var children = line[i];
            if (children.name != "Start" && children.name != "Current") {
                for (var _i = 0, _a = children.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.active = false;
                }
                this._line.put(children);
                --i;
            }
        }
        // for (let i = 0; i < line.length; ++i)
        // {
        //     if (line[i].name != "Start" && line[i].name != "Current")
        //     {
        //         cc.find("Canvas/Level").removeChild(line[i], true);
        //     }
        // }
    };
    LevelBase.prototype.resultLineStage = function () {
        var level = cc.find("Canvas/Level");
        var count = 0;
        // Lặp từ 1 đến length - 2 vì node đầu là Start và node cuối là Current
        for (var i = 1; i < level.children.length - 1; ++i) {
            if (level.children[i].name == "Line" && count < this.stageCurrent) {
                ++count;
                level.children[i].getChildByName("TrueAnswer").active = true;
            }
        }
    };
    //Lấy line để hiển thị true/false của option
    // +2 vì 1 node là Start + 
    LevelBase.prototype.getLineCurrent = function () {
        var level = cc.find("Canvas/Level");
        return level.children[this.stageCurrent + 1];
    };
    LevelBase.prototype.nextLevel = function () {
        var _this = this;
        tween(this.node).call(function () {
            EffectManager_1.default.showTick(_this.selected, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.lupin.timeScale = 0;
            for (var _i = 0, _a = _this.otherSpine; _i < _a.length; _i++) {
                var spine = _a[_i];
                spine.timeScale = 0;
            }
            EffectManager_1.default.effectSuccess();
            EffectManager_1.default.showUI(false);
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestResult(_this.node);
        })
            .start();
    };
    LevelBase.prototype.showContinue = function () {
        var _this = this;
        GameManager_1.default.logFailed(this.levelCurrent, this.stageCurrent, this.selected);
        // GameManager.logEvent(`Failed L${this.levelCurrent + 1} S${this.stageCurrent + 1}-${this.selected + 1}`)
        cc.audioEngine.stopAllEffects();
        this.lupin.timeScale = 0;
        this.otherSpine.forEach(function (spine) {
            spine.timeScale = 0;
        });
        tween(this.node).call(function () {
            EffectManager_1.default.showX(_this.selected, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.FAIL_STAGE, false);
            }, 0.15);
            EffectManager_1.default.effectFail();
            EffectManager_1.default.showUI(false);
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestContinue(_this.node);
        }).start();
    };
    LevelBase.prototype.onPass = function () {
        var _this = this;
        GameManager_1.default.logPassed(this.levelCurrent, this.stageCurrent, this.selected);
        // GameManager.logEvent(`Passed L${this.levelCurrent + 1}_S${this.stageCurrent + 1}`)
        cc.audioEngine.stopAllEffects();
        tween(this.node).call(function () {
            EffectManager_1.default.showTick(_this.selected, _this.getLineCurrent());
        })
            .delay(1)
            .call(function () {
            _this._gameManager.btnSetting.active = false;
            _this.scheduleOnce(function () {
                _this._gameManager.playSound(GameManager_2.SOUND.SUCCESS_STAGE, false);
            }, 0.2);
            EffectManager_1.default.effectSuccess();
            EffectManager_1.default.showUI(false);
            _this.lupin.timeScale = 0;
            _this.otherSpine.forEach(function (spine) {
                spine.timeScale = 0;
            });
        })
            .delay(2)
            .call(function () {
            EventManager_1.default.sendRequestNextStage(_this.node);
        })
            .start();
    };
    LevelBase.prototype.showComingSoon = function () {
        this.resetUIResult();
        this._gameManager.playSound(GameManager_2.SOUND.SUCCESS_LEVEL, false);
        EffectManager_1.default.showTick(this.selected, this.getLineCurrent());
        ++this._gameManager._levelCurrent.level;
        if (this._gameManager._levelCurrent.level > this._gameManager._data.unlockedLevel) {
            this._gameManager._data.unlockedLevel = this._gameManager._levelCurrent.level;
            Data_1.default.saveData(this._gameManager._data, Data_1.default.FACEBOOK_KEY);
            Data_1.default.saveData(this._gameManager._data, Data_1.default.LOCAL_KEY);
        }
        this._gameManager.btnSetting.active = false;
        this._gameManager._ui.showComingSoon();
    };
    LevelBase.prototype.playSound = function (soundId, loop, delay) {
        var _this = this;
        Data_1.default.getData(Data_1.default.LOCAL_KEY, function (err, data) {
            if (data.isSound) {
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.sounds[soundId], loop);
                }, delay);
            }
        });
    };
    __decorate([
        property
    ], LevelBase.prototype, "levelCurrent", void 0);
    __decorate([
        property
    ], LevelBase.prototype, "numberStage", void 0);
    __decorate([
        property
    ], LevelBase.prototype, "stageCurrent", void 0);
    __decorate([
        property(cc.Node)
    ], LevelBase.prototype, "sceneBegin", void 0);
    __decorate([
        property([cc.Prefab])
    ], LevelBase.prototype, "sceneOption0", void 0);
    __decorate([
        property([cc.Prefab])
    ], LevelBase.prototype, "sceneOption1", void 0);
    __decorate([
        property([cc.Prefab])
    ], LevelBase.prototype, "sceneOption2", void 0);
    __decorate([
        property(cc.Node)
    ], LevelBase.prototype, "background", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "money", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "line", void 0);
    __decorate([
        property(sp.Skeleton)
    ], LevelBase.prototype, "lupin", void 0);
    __decorate([
        property([sp.Skeleton])
    ], LevelBase.prototype, "otherSpine", void 0);
    __decorate([
        property([cc.Sprite])
    ], LevelBase.prototype, "otherSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], LevelBase.prototype, "iconOption", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "next", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelBase.prototype, "fishSwim", void 0);
    __decorate([
        property([cc.AudioClip])
    ], LevelBase.prototype, "sounds", void 0);
    __decorate([
        property(cc.Node)
    ], LevelBase.prototype, "camera2d", void 0);
    LevelBase = __decorate([
        ccclass
    ], LevelBase);
    return LevelBase;
}(cc.Component));
exports.default = LevelBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xldmVsQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsNkNBQW9DO0FBQ3BDLCtCQUEwQjtBQUMxQixpREFBNEM7QUFHdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNkLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFVixRQUFBLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFHOUI7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFzc0JDO1FBcHNCRywwREFBMEQ7UUFFMUQsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFFakIsd0JBQXdCO1FBQ3hCLDJFQUEyRTtRQUUzRSxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVoQiw0Q0FBNEM7UUFFNUMsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFFakIscUNBQXFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGtCQUFZLEdBQWdCLEVBQUUsQ0FBQztRQUcvQixrQkFBWSxHQUFnQixFQUFFLENBQUM7UUFHL0Isa0JBQVksR0FBZ0IsRUFBRSxDQUFDO1FBR3RDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFrQixFQUFFLENBQUM7UUFHL0IsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQXFC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RUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO21EQUNnQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzttREFDZ0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7bURBQ2dCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NENBQ0k7SUFHMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aURBQ087SUFHL0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7a0RBQ1E7SUFHOUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aURBQ087SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzZDQUNHO0lBMkI1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBbkZSLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0Fzc0I3QjtJQUFELGdCQUFDO0NBdHNCRCxBQXNzQkMsQ0F0c0JzQyxFQUFFLENBQUMsU0FBUyxHQXNzQmxEO2tCQXRzQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWZmZWN0TWFuYWdlciBmcm9tIFwiLi9FZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL0V2ZW50TWFuYWdlclwiO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG5pbXBvcnQge1NPVU5EfSBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4vQnVuZGxlTWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG52YXIgb3B0aW9uQ29udGFpbmVyID0gbnVsbDtcbnZhciBvcHRpb25Db250cm9sbGVyID0gbnVsbDtcbnZhciB1aSA9IG51bGw7XG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuO1xuXG5leHBvcnQgY29uc3QgVE9UQUxfTEVWRUwgPSAxOTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvL1NldCBsZXZlbCBoaeG7h24gdOG6oWkgY2hvIG3DoG4gY2jGoWkgWzAsIDEsLi4uLE1heF9sZXZlbCAtIDFdXG4gICAgQHByb3BlcnR5XG4gICAgbGV2ZWxDdXJyZW50ID0gMDtcblxuICAgIC8vU+G7kSBzdGFnZSB0cm9uZyAxIGxldmVsXG4gICAgLy9Ew7luZyDEkeG7gyBoaeG7g24gdGjhu4sgc+G7kSBn4bqhY2ggbmdhbmcgeHXhuqV0IGhp4buHbiBnaeG7r2EgMiBuaMOjbiBsZXZlbCBbMCwgMSwgMiwuLi4uXVxuICAgIEBwcm9wZXJ0eVxuICAgIG51bWJlclN0YWdlID0gMDtcblxuICAgIC8vRMO5bmcgxJHhu4MgaGnhu4NuIHRo4buLIG3DoHUgeGFuaCBjw6FjIHN0YWdlIMSRw6MgcXVhXG4gICAgQHByb3BlcnR5XG4gICAgc3RhZ2VDdXJyZW50ID0gMDtcblxuICAgIC8vTm9kZSBuw6B5IHPhur0gxJHGsOG7o2MgYWN0aXZlID0gdHJ1ZSBraGkgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHNjZW5lQmVnaW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxuICAgIHB1YmxpYyBzY2VuZU9wdGlvbjA6IGNjLlByZWZhYltdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gICAgcHVibGljIHNjZW5lT3B0aW9uMTogY2MuUHJlZmFiW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcbiAgICBwdWJsaWMgc2NlbmVPcHRpb24yOiBjYy5QcmVmYWJbXSA9IFtdOztcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBtb25leTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGluZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBsdXBpbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXG4gICAgb3RoZXJTcGluZTogc3AuU2tlbGV0b25bXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxuICAgIG90aGVyU3ByaXRlOiBjYy5TcHJpdGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvbk9wdGlvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBuZXh0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBmaXNoU3dpbTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBzb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgc2VsZWN0ZWQ6IG51bWJlciA9IDA7XG5cbiAgICBwcm90ZWN0ZWQgY3VycmVudElkIDogbnVtYmVyID0gMDtcbiAgICBcbiAgICAvL2NsaWNrT3B0aW9uIGRlIG5nYW4gZ29pIGhhbSBuaGlldSBsYW4ga2hpIG5ndW9pIGNob2kgY2xpY2sgbGllbiB0dWNcbiAgICBwcm90ZWN0ZWQgY2xpY2tPcHRpb24gOiBCb29sZWFuID0gdHJ1ZTtcblxuICAgIHByb3RlY3RlZCBvcHRpb25TY2VuZTogY2MuTm9kZVtdW10gPSBbW10sIFtdLCBbXV07XG5cbiAgICBwcm90ZWN0ZWQgYXJyU2NlbmU6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIF9nYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGZhaWwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdWNjZXNzID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc2hhZG93ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgY3VycmVudExpbmUgPSBudWxsO1xuICAgIHByb3RlY3RlZCBpc1RydWUgPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIF9tb25leSA9IDUwO1xuXG4gICAgcHJvdGVjdGVkIF9maXNoU3dpbSA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgX2xpbmUgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYW1lcmEyZDogY2MuTm9kZVtdID0gW107XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgb3B0aW9uQ29udGFpbmVyID0gdGhpcy5fZ2FtZU1hbmFnZXIub3B0aW9uQ29udGFpbmVyO1xuICAgICAgICBvcHRpb25Db250cm9sbGVyID0gb3B0aW9uQ29udGFpbmVyLmdldENvbXBvbmVudChcIk9wdGlvbkNvbnRyb2xsZXJcIik7XG4gICAgICAgIHRoaXMuZmFpbCA9IHRoaXMuX2dhbWVNYW5hZ2VyLmZhaWw7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuX2dhbWVNYW5hZ2VyLnN1Y2Nlc3M7XG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5fZ2FtZU1hbmFnZXIuc2hhZG93O1xuICAgICAgICB1aSA9IHRoaXMuX2dhbWVNYW5hZ2VyLl91aTtcbiAgICAgICAgZm9yIChsZXQgY2FtZXJhIG9mIHRoaXMuY2FtZXJhMmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbWVyYS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpc2hTd2ltICYmICF0aGlzLl9maXNoU3dpbSkge1xuICAgICAgICAgICAgdGhpcy5fZmlzaFN3aW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZpc2hTd2ltKVxuICAgICAgICAgICAgdGhpcy5fZmlzaFN3aW0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLl9maXNoU3dpbSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygoXCIlY1wiICsgdGhpcy5ub2RlLm5hbWUpLCBcImNvbG9yOmJsdWVcIik7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbigpO1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LnNjcmlwdCA9IHRoaXM7XG4gICAgICAgIGNjLmxvZyh0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50KTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS56SW5kZXggPSBjYy5tYWNyby5NSU5fWklOREVYO1xuICAgICAgICB0aGlzLmluaXRBcnJheVNjZW5lKCk7XG4gICAgICAgIC8vS2hpIHNjZW5lIGtldCB0aHVjIGFuaW1hdGlvbiB0aGkgc2UgYmFuIGRpc3BhdGNoXG4gICAgICAgIHRoaXMuYWRkRXZlbnRDdXN0b20oKTtcbiAgICAgICAgdGhpcy5jbGlja09wdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0U2tpbignTHVwaW4nKVxuICAgICAgICB0aGlzLmluaXRTdGFnZSgpO1xuICAgICAgICB0aGlzLnNob3dPcHRpb25Db250YWluZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2Zpc2hTd2ltICYmICh0aGlzLl9maXNoU3dpbS5hY3RpdmUgPSB0cnVlKVxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93T3B0aW9uQ29udGFpbmVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudEN1c3RvbSgpO1xuICAgICAgICB0aGlzLnJlc2V0VUlSZXN1bHQoKTtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUuaW5jbHVkZXMoXCJPcHRpb25cIikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Zpc2hTd2ltICYmICh0aGlzLl9maXNoU3dpbS5hY3RpdmUgPSBmYWxzZSlcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2hvbWUudXBkYXRlQ2FsZW5kYXIoKTtcbiAgICB9ICAgIFxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsQ3VycmVudCArIDEgPCBUT1RBTF9MRVZFTCkge1xuICAgICAgICAgICAgbGV0IG5leHQgPSBOdW1iZXIodGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbCArIDIpO1xuICAgICAgICAgICAgbGV0IHBhdGggPSBcIkxldmVsXCIgKyBuZXh0O1xuICAgICAgICAgICAgQnVuZGxlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFByZWZhYkJ5TmFtZShwYXRoLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50Q3VzdG9tKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJyZXF1ZXN0X25leHRfc2NlbmVcIiwgdGhpcy5uZXh0U2NlbmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG93X2NvbnRpbnVlXCIsIHRoaXMub25Db250aW51ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihcIm5leHRfc3RhZ2VcIiwgdGhpcy5uZXh0U3RhZ2UsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJiYWNrX3RvX3N0YWdlX2JlZ2luXCIsIHRoaXMucGxheVN0YWdlQmVnaW4sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJuZXh0X2xldmVsXCIsIHRoaXMuZW5kR2FtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRDdXN0b20oKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJyZXF1ZXN0X25leHRfc2NlbmVcIiwgdGhpcy5uZXh0U2NlbmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFwic2hvd19jb250aW51ZVwiLCB0aGlzLm9uQ29udGludWUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFwiYmFja190b19zdGFnZV9iZWdpblwiLCB0aGlzLnBsYXlTdGFnZUJlZ2luLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcIm5leHRfc3RhZ2VcIiwgdGhpcy5uZXh0U3RhZ2UsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFwibmV4dF9sZXZlbFwiLCB0aGlzLmVuZEdhbWUsIHRoaXMpO1xuICAgIH1cblxuICAgIGNoZWNrTmV4dFNjZW5lRXhpdHMoaW5kZXg6IG51bWJlciwgb3B0aW9uOiBudW1iZXIpOiBjYy5Ob2RlIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uMV9cIiArIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uMl9cIiArIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uM19cIiArIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJLaG9uZyBjbyBzY2VuZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEluc3RhbnRpYXRlKGluZGV4OiBudW1iZXIsIG9wdGlvbjogbnVtYmVyKTogY2MuTm9kZSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uU2NlbmVbMF1baW5kZXhdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvblNjZW5lWzFdW2luZGV4XTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25TY2VuZVsyXVtpbmRleF07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiS2hvbmcgY28gcHJlZmFiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRCdXR0b24obm9kZSkgOiB2b2lkIHtcbiAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXRVSVJlc3VsdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaGFkb3cub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuZmFpbC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5mYWlsLnNjYWxlID0gMTA7XG4gICAgICAgIHRoaXMuc3VjY2Vzcy5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5zdWNjZXNzLnNjYWxlID0gMTA7XG4gICAgfVxuXG4gICAgZW5kR2FtZShldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPCBUT1RBTF9MRVZFTClcbiAgICAgICAgICAgICsrdGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgLy9N4bufIGtow7NhIGxldmVsIHNhdVxuICAgICAgICBpZiAoIHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPiB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsID0gdGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkZBQ0VCT09LX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEudW5sb2NrZWRMZXZlbCA9IHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWxcbiAgICAgICAgICAgICAgICBEYXRhLnNhdmVEYXRhKGRhdGEsIERhdGEuRkFDRUJPT0tfS0VZKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0VUlSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5zaG93RW5kR2FtZShldmVudCk7XG4gICAgfVxuXG4gICAgbmV4dFNjZW5lKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fY3VycmVudFNjZW5lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdmFyIG5ld1NjZW5lID0gdGhpcy5jaGVja05leHRTY2VuZUV4aXRzKHRoaXMuY3VycmVudElkLCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgaWYgKG5ld1NjZW5lKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdTY2VuZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2N1cnJlbnRTY2VuZSA9IG5ld1NjZW5lO1xuICAgICAgICAgICAgKyt0aGlzLmN1cnJlbnRJZDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1NjZW5lID0gdGhpcy5nZXRJbnN0YW50aWF0ZSh0aGlzLmN1cnJlbnRJZCwgdGhpcy5zZWxlY3RlZCk7XG5cbiAgICAgICAgaWYgKG5ld1NjZW5lKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdTY2VuZS56SW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl9jdXJyZW50U2NlbmUgPSBuZXdTY2VuZTtcbiAgICAgICAgICAgIHRoaXMuYXJyU2NlbmUucHVzaChuZXdTY2VuZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1NjZW5lKTtcbiAgICAgICAgICAgIH0sIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICArK3RoaXMuY3VycmVudElkO1xuICAgIH1cblxuICAgIG5leHRTdGFnZShzY2VuZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uZXh0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZHJlbiBvZiB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNjZW5lID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZSh0aGlzLm5leHQubmFtZSk7XG4gICAgICAgICAgICBpZiAoc2NlbmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NlbmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2VuZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubmV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzY2VuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRTdGFnZSgpOiB2b2lkIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IDA7XG4gICAgICAgIHRoaXMuY2xpY2tPcHRpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbWVyYTJkWzBdLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhMmRbMF0uZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuem9vbVJhdGlvID0gMTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnpJbmRleCA9IGNjLm1hY3JvLk1JTl9aSU5ERVg7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLm1haW5DYW1lcmEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGNhbWVyYSBvZiB0aGlzLmNhbWVyYTJkKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYW1lcmEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmx1cGluLnRpbWVTY2FsZSA9IDE7XG4gICAgICAgIGZvciAodmFyIHNwaW5lIG9mIHRoaXMub3RoZXJTcGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tncm91bmQucG9zaXRpb24gPSBjYy52MygwLCAwKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIub3B0aW9uQ29udGFpbmVyLmdldENvbXBvbmVudChcIk9wdGlvbkNvbnRyb2xsZXJcIikucmVzZXRPcHRpb24oKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2N1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVCZWdpbjtcbiAgICAgICAgb3B0aW9uQ29udHJvbGxlci5zZXRJbWFnZU9wdGlvbih0aGlzLmljb25PcHRpb24pO1xuICAgICAgICB1aS5zaG93VUlFbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZXNldFVJUmVzdWx0KCk7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1VJKHRydWUpO1xuICAgICAgICB0aGlzLnJlbW92ZUxpbmVTdGFnZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpbmVTdGFnZSh0aGlzLm51bWJlclN0YWdlKTtcbiAgICAgICAgdGhpcy5yZXN1bHRMaW5lU3RhZ2UoKTtcbiAgICAgICAgLy9Ww6wgaW5kZXggYuG6r3QgxJHhuqd1IHThu6sgMCBuw6puIHBo4bqjaSArMSwgKzIgxJHhu4MgcmEgbGV2ZWwgaGnhu4NuIHRo4buLXG4gICAgICAgIHRoaXMuc2V0TGV2ZWwodGhpcy5sZXZlbEN1cnJlbnQgKyAxLCB0aGlzLmxldmVsQ3VycmVudCArIDIpO1xuICAgICAgICBpZiAoKHRoaXMubGV2ZWxDdXJyZW50ICsgMSkgJSA1ID09IDAgJiYgKHRoaXMubGV2ZWxDdXJyZW50KSA+IDUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLmJ0blNldHRpbmcueCA9IC01MTU7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5sZXZlbC54ID0gNTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5idG5TZXR0aW5nLnggPSAtNTAwO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIubGV2ZWwueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93T3B0aW9uQ29udGFpbmVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICBoaWRlQWxsU2NlbmUoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkcmVuIG9mIHRoaXMubm9kZS5jaGlsZHJlbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLm5hbWUgIT0gXCJCYWNrZ3JvdW5kXCIpXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93RW5kR2FtZShldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgdWkuc2hvd1VJSW50cm9kdWNlKGZhbHNlKTtcbiAgICAgICAgdWkuc2hvd1VJRW5kR2FtZSh0cnVlKTtcbiAgICB9XG5cbiAgICBzZWxlY3RPcHRpb24oZXZlbnQ6IGNjLkV2ZW50KSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5wbGF5U291bmQoU09VTkQuQ0xJQ0ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuc2hvd0d1aWRlKGZhbHNlKTtcbiAgICAgICAgaWYgKCF0aGlzLmNsaWNrT3B0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIktob25nIGR1b2MgY2xpY2sgbGllbiB0dWMgaG9hYyBjaG9uIGRhcCBhbiBraGFjISEhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xpY2tPcHRpb24gPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIm9wdGlvbjFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gMDtcbiAgICAgICAgICAgICAgICBvcHRpb25Db250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb24xXCIpLmdldENoaWxkQnlOYW1lKFwic2VsZWN0ZWRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bk9wdGlvbjEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvcHRpb24yXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgICAgICAgICAgICAgb3B0aW9uQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwib3B0aW9uMlwiKS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5PcHRpb24yKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uM1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAyO1xuICAgICAgICAgICAgICAgIG9wdGlvbkNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbjNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RlZFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucnVuT3B0aW9uMygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIktob25nIGNvIGNhc2UgcGh1IGhvcCFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEJ1dHRvbihldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIHJ1bk9wdGlvbjEoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMigpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBydW5PcHRpb24zKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHNldEx1cGluKHBvc2l0aW9uOiBjYy5WZWMyLCBlbW90aW9uOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChlbW90aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCBlbW90aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigxLCBhY3Rpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubHVwaW4ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBzZXRPdGhlclNwaW5lKG90aGVyOiBzcC5Ta2VsZXRvbiwgcG9zaXRpb246IGNjLlZlYzIsIGVtb3Rpb246IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVtb3Rpb24pIHtcbiAgICAgICAgICAgIG90aGVyLnNldEFuaW1hdGlvbigwLCBlbW90aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBvdGhlci5zZXRBbmltYXRpb24oMSwgYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIG90aGVyLm5vZGUucG9zaXRpb24gPSBjYy52Myhwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPdGhlclNwcml0ZShvdGhlcjogY2MuU3ByaXRlLCBwb3NpdGlvbjogY2MuVmVjMik6IHZvaWQge1xuICAgICAgICBvdGhlci5ub2RlLnBvc2l0aW9uID0gY2MudjMocG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vS2jhu59pIHThuqFvIGPDoWMgcHJlZmFiIC0+IG5vZGUgcuG7k2kgcHVzaCB2w6BvIG3huqNuZyDEkeG7gyBz4butIGThu6VuZ1xuICAgIGluaXRBcnJheVNjZW5lKCk6IHZvaWQge1xuICAgICAgICB2YXIgc2NlbmVPcHRpb25zID0gW3RoaXMuc2NlbmVPcHRpb24wLCB0aGlzLnNjZW5lT3B0aW9uMSwgdGhpcy5zY2VuZU9wdGlvbjJdXG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAzOyBqKysgKXtcbiAgICAgICAgICAgIHZhciB0ZW1wQXJyID0gW107XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25TY2VuZVtqXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NlbmVPcHRpb25zW2pdLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKGNjLmluc3RhbnRpYXRlKHNjZW5lT3B0aW9uc1tqXVtpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNjZW5lW2pdID0gdGVtcEFycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vS2jhu59pIHThuqFvIGV2ZW50IGNobyBjw6FjIG7DunRcbiAgICBpbml0T3B0aW9uKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uQ29udHJvbGxlci5zZXRPcHRpb24oaSwgdGhpcy5ub2RlLCB0aGlzLm5vZGUubmFtZSwgXCJzZWxlY3RPcHRpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93T3B0aW9uQ29udGFpbmVyKGlzU2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNTaG93KVxuICAgICAgICB7XG4gICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFNjYWxlT3B0aW9uKG9wdGlvbkNvbnRhaW5lciwgMC43KVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbkNvbnRhaW5lci5hY3RpdmUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgc2hvd0ZhaWwob3B0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgR2FtZU1hbmFnZXIubG9nRmFpbGVkKHRoaXMubGV2ZWxDdXJyZW50LCB0aGlzLnN0YWdlQ3VycmVudCwgb3B0aW9uKVxuICAgICAgICAvLyBHYW1lTWFuYWdlci5sb2dFdmVudChgRmFpbGVkIEwke3RoaXMubGV2ZWxDdXJyZW50ICsgMX0gUyR7dGhpcy5zdGFnZUN1cnJlbnQgKyAxfS0ke29wdGlvbiArIDF9YClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKVxuICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzcGluZSBvZiB0aGlzLm90aGVyU3BpbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGluZS50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dYKG9wdGlvbiwgdGhpcy5nZXRMaW5lQ3VycmVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlTb3VuZChTT1VORC5GQUlMX1NUQUdFLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnRpbWVTY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BpbmUgb2YgdGhpcy5vdGhlclNwaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5lZmZlY3RGYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VUkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuaGlkZVNjZW5lKEV2ZW50TWFuYWdlci5zZW5kUmVxdWVzdFJlc2V0LCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93U3VjY2VzcyhvcHRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBHYW1lTWFuYWdlci5sb2dQYXNzZWQodGhpcy5sZXZlbEN1cnJlbnQsIHRoaXMuc3RhZ2VDdXJyZW50LCBvcHRpb24pXG4gICAgICAgIC8vIEdhbWVNYW5hZ2VyLmxvZ0V2ZW50KGBQYXNzZWQgTCR7dGhpcy5sZXZlbEN1cnJlbnQgKyAxfWApXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKClcbiAgICAgICAgdHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1RpY2sob3B0aW9uLCB0aGlzLmdldExpbmVDdXJyZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlTb3VuZChTT1VORC5TVUNDRVNTX0xFVkVMLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VUkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BpbmUgb2YgdGhpcy5vdGhlclNwaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lLnRpbWVTY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgyKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuc2VuZFJlcXVlc3RSZXN1bHQodGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2V0Q2FtZXJhKGNhbWVyYTogY2MuTm9kZSwgcG9zaXRvbjogY2MuVmVjMiwgem9vbVJhdGlvOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY2FtZXJhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNjLnYzKHBvc2l0b24pO1xuICAgICAgICBjYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuem9vbVJhdGlvID0gem9vbVJhdGlvO1xuICAgIH1cblxuICAgIHN0b3BBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHNwaW5lIG9mIHRoaXMub3RoZXJTcGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbWVTY2FsZUFsbFNwaW5lKHRpbWVTY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHNwaW5lIG9mIHRoaXMub3RoZXJTcGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gdGltZVNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gdGltZVNjYWxlO1xuICAgIH1cblxuICAgIG9uQ29udGludWUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLm1haW5DYW1lcmEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXNldFVJUmVzdWx0KCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl91aS5zaG93VUlDb250aW51ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBwbGF5U3RhZ2VCZWdpbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQubmFtZSAhPSBcIkdhbWVDb250YWluZXJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRyZW4gb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYmVnaW5TY2VuZSA9IHRoaXMuZ2V0QmVnaW5TY2VlbigpO1xuICAgICAgICBpZiAoYmVnaW5TY2VuZSkge1xuICAgICAgICAgICAgYmVnaW5TY2VuZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQubmFtZSA9PSBcIkdhbWVDb250YWluZXJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QmVnaW5TY2Vlbihub2RlOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl9iZWdpblNjZW5lID0gbm9kZTtcbiAgICB9XG5cbiAgICBnZXRCZWdpblNjZWVuKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU1hbmFnZXIuX2JlZ2luU2NlbmU7XG4gICAgfVxuXG4gICAgc2V0TGV2ZWwoY3VycmVudDogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuc2V0TGV2ZWwoY3VycmVudCwgbmV4dCk7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUxpbmVTdGFnZShudW1iZXJTdGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBsZXZlbCA9IGNjLmZpbmQoXCJDYW52YXMvTGV2ZWxcIik7XG4gICAgICAgIGxldmVsLmdldENoaWxkQnlOYW1lKFwiU3RhcnRcIikuekluZGV4ID0gY2MubWFjcm8uTUlOX1pJTkRFWDtcbiAgICAgICAgbGV2ZWwuZ2V0Q2hpbGRCeU5hbWUoXCJDdXJyZW50XCIpLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyU3RhZ2U7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGxpbmU7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGluZS5zaXplKCkgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpbmUgPSB0aGlzLl9saW5lLmdldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZS56SW5kZXggPSAwICsgaTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTGV2ZWxcIikuYWRkQ2hpbGQobGluZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMaW5lU3RhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxldCBsaW5lID0gY2MuZmluZChcIkNhbnZhcy9MZXZlbFwiKS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBsaW5lW2ldO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLm5hbWUgIT0gXCJTdGFydFwiICYmIGNoaWxkcmVuLm5hbWUgIT0gXCJDdXJyZW50XCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbGluZS5wdXQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyArK2kpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGlmIChsaW5lW2ldLm5hbWUgIT0gXCJTdGFydFwiICYmIGxpbmVbaV0ubmFtZSAhPSBcIkN1cnJlbnRcIilcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0xldmVsXCIpLnJlbW92ZUNoaWxkKGxpbmVbaV0sIHRydWUpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmVzdWx0TGluZVN0YWdlKCk6IHZvaWQge1xuICAgICAgICBsZXQgbGV2ZWwgPSBjYy5maW5kKFwiQ2FudmFzL0xldmVsXCIpO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAvLyBM4bq3cCB04burIDEgxJHhur9uIGxlbmd0aCAtIDIgdsOsIG5vZGUgxJHhuqd1IGzDoCBTdGFydCB2w6Agbm9kZSBjdeG7kWkgbMOgIEN1cnJlbnRcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZXZlbC5jaGlsZHJlbi5sZW5ndGggLSAxOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChsZXZlbC5jaGlsZHJlbltpXS5uYW1lID09IFwiTGluZVwiICYmIGNvdW50IDwgdGhpcy5zdGFnZUN1cnJlbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgICAgICBsZXZlbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIlRydWVBbnN3ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vTOG6pXkgbGluZSDEkeG7gyBoaeG7g24gdGjhu4sgdHJ1ZS9mYWxzZSBj4bunYSBvcHRpb25cbiAgICAvLyArMiB2w6wgMSBub2RlIGzDoCBTdGFydCArIFxuICAgIGdldExpbmVDdXJyZW50KCk6IGNjLk5vZGUge1xuICAgICAgICBsZXQgbGV2ZWwgPSBjYy5maW5kKFwiQ2FudmFzL0xldmVsXCIpO1xuICAgICAgICByZXR1cm4gbGV2ZWwuY2hpbGRyZW5bdGhpcy5zdGFnZUN1cnJlbnQgKyAxXTtcbiAgICB9XG5cbiAgICBuZXh0TGV2ZWwoKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VGljayh0aGlzLnNlbGVjdGVkLCB0aGlzLmdldExpbmVDdXJyZW50KCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzcGluZSBvZiB0aGlzLm90aGVyU3BpbmUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcGluZS50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLnNob3dVSShmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLnNlbmRSZXF1ZXN0UmVzdWx0KHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRpbnVlKCk6IHZvaWQge1xuICAgICAgICBHYW1lTWFuYWdlci5sb2dGYWlsZWQodGhpcy5sZXZlbEN1cnJlbnQsIHRoaXMuc3RhZ2VDdXJyZW50LCB0aGlzLnNlbGVjdGVkKVxuICAgICAgICAvLyBHYW1lTWFuYWdlci5sb2dFdmVudChgRmFpbGVkIEwke3RoaXMubGV2ZWxDdXJyZW50ICsgMX0gUyR7dGhpcy5zdGFnZUN1cnJlbnQgKyAxfS0ke3RoaXMuc2VsZWN0ZWQgKyAxfWApXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5vdGhlclNwaW5lLmZvckVhY2goc3BpbmUgPT4ge1xuICAgICAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMDtcbiAgICAgICAgfSlcbiAgICAgICAgdHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1godGhpcy5zZWxlY3RlZCwgdGhpcy5nZXRMaW5lQ3VycmVudCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDEpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5wbGF5U291bmQoU09VTkQuRkFJTF9TVEFHRSwgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMC4xNSk7XG4gICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmVmZmVjdEZhaWwoKTtcbiAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1VJKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZW5kUmVxdWVzdENvbnRpbnVlKHRoaXMubm9kZSk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25QYXNzKCk6IHZvaWQge1xuICAgICAgICBHYW1lTWFuYWdlci5sb2dQYXNzZWQodGhpcy5sZXZlbEN1cnJlbnQsIHRoaXMuc3RhZ2VDdXJyZW50LCB0aGlzLnNlbGVjdGVkKVxuICAgICAgICAvLyBHYW1lTWFuYWdlci5sb2dFdmVudChgUGFzc2VkIEwke3RoaXMubGV2ZWxDdXJyZW50ICsgMX1fUyR7dGhpcy5zdGFnZUN1cnJlbnQgKyAxfWApXG5cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKVxuICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VGljayh0aGlzLnNlbGVjdGVkLCB0aGlzLmdldExpbmVDdXJyZW50KCkpO1xuICAgICAgICB9KVxuICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuYnRuU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5wbGF5U291bmQoU09VTkQuU1VDQ0VTU19TVEFHRSwgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U3VjY2VzcygpO1xuICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5zaG93VUkoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5sdXBpbi50aW1lU2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5vdGhlclNwaW5lLmZvckVhY2goc3BpbmUgPT4ge1xuICAgICAgICAgICAgICAgIHNwaW5lLnRpbWVTY2FsZSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZW5kUmVxdWVzdE5leHRTdGFnZSh0aGlzLm5vZGUpO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93Q29taW5nU29vbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldFVJUmVzdWx0KCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlTb3VuZChTT1VORC5TVUNDRVNTX0xFVkVMLCBmYWxzZSk7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuc2hvd1RpY2sodGhpcy5zZWxlY3RlZCwgdGhpcy5nZXRMaW5lQ3VycmVudCgpKTtcbiAgICAgICAgKyt0aGlzLl9nYW1lTWFuYWdlci5fbGV2ZWxDdXJyZW50LmxldmVsO1xuICAgICAgICBpZiAoIHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPiB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fZGF0YS51bmxvY2tlZExldmVsID0gdGhpcy5fZ2FtZU1hbmFnZXIuX2xldmVsQ3VycmVudC5sZXZlbDtcbiAgICAgICAgICAgIERhdGEuc2F2ZURhdGEodGhpcy5fZ2FtZU1hbmFnZXIuX2RhdGEsIERhdGEuRkFDRUJPT0tfS0VZKTtcbiAgICAgICAgICAgIERhdGEuc2F2ZURhdGEodGhpcy5fZ2FtZU1hbmFnZXIuX2RhdGEsIERhdGEuTE9DQUxfS0VZKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5idG5TZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9nYW1lTWFuYWdlci5fdWkuc2hvd0NvbWluZ1Nvb24oKTtcbiAgICB9XG5cbiAgICBwbGF5U291bmQoc291bmRJZDogbnVtYmVyLCBsb29wOiBib29sZWFuLCBkZWxheTogbnVtYmVyKSB7XG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkxPQ0FMX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNTb3VuZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc291bmRzW3NvdW5kSWRdLCBsb29wKVxuICAgICAgICAgICAgICAgIH0sZGVsYXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OptimizePageView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1781R//gFAbLVSqbJk3RZg', 'OptimizePageView');
// Scripts/OptimizePageView.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = null;
        _this.content = null;
        return _this;
    }
    NewClass.prototype.update = function (dt) {
        var viewRect = cc.rect(0, -this.view.height / 2, this.view.width, this.view.height);
        var page = this.content.children;
        for (var i = 0; i < page.length; ++i) {
            var item = page[i].children;
            for (var j = 0; j < item.length; ++j) {
                if (viewRect.intersects(item[j].getBoundingBox()))
                    item[j].opacity = 255;
                else
                    item[j].opacity = 0;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "view", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "content", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL09wdGltaXplUGFnZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3QkM7UUFyQkcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixhQUFPLEdBQVksSUFBSSxDQUFDOztJQWtCNUIsQ0FBQztJQWhCRyx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQ3BDO1lBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFDcEM7Z0JBQ0ksSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7O29CQUV0QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQXBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFOUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0I1QjtJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0JqRDtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHZpZXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgdXBkYXRlKGR0KTogdm9pZCB7XG4gICAgICAgIGxldCB2aWV3UmVjdCA9IGNjLnJlY3QoMCwgLXRoaXMudmlldy5oZWlnaHQgLyAyLCB0aGlzLnZpZXcud2lkdGgsIHRoaXMudmlldy5oZWlnaHQpO1xuXG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5jb250ZW50LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UubGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gcGFnZVtpXS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbS5sZW5ndGg7ICsrailcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodmlld1JlY3QuaW50ZXJzZWN0cyhpdGVtW2pdLmdldEJvdW5kaW5nQm94KCkpKVxuICAgICAgICAgICAgICAgICAgICBpdGVtW2pdLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBpdGVtW2pdLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OptionController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71cf6u8DwJMgKVm2Oh5+mKG', 'OptionController');
// Scripts/OptionController.ts

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
var OptionController = /** @class */ (function (_super) {
    __extends(OptionController, _super);
    function OptionController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.option = [];
        return _this;
    }
    OptionController.prototype.onDisable = function () {
        this.resetOption();
    };
    OptionController.prototype.resetOption = function () {
        this.option.forEach(function (item) {
            item.getChildByName("selected").active = false;
            item.getChildByName("tick").active = false;
            item.getChildByName("x").active = false;
        });
    };
    // index là thứ tự của option [0-2]
    // target là node chứa script
    // component là script
    //handler là function cần thực thi
    OptionController.prototype.setOption = function (index, target, component, handler) {
        var clickHandler = new cc.Component.EventHandler();
        clickHandler.target = target;
        clickHandler.component = component;
        clickHandler.handler = handler;
        this.option[index].getComponent(cc.Button).clickEvents = [];
        this.option[index].getComponent(cc.Button).clickEvents.push(clickHandler);
    };
    OptionController.prototype.setImageOption = function (img) {
        for (var i = 0; i < img.length; ++i) {
            this.node.children[i].getChildByName("icon")
                .getComponent(cc.Sprite).spriteFrame = img[i];
        }
    };
    __decorate([
        property(cc.Node)
    ], OptionController.prototype, "option", void 0);
    OptionController = __decorate([
        ccclass
    ], OptionController);
    return OptionController;
}(cc.Component));
exports.default = OptionController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL09wdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFxQ0M7UUFsQ0csWUFBTSxHQUFjLEVBQUUsQ0FBQzs7SUFrQzNCLENBQUM7SUFoQ0csb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsb0NBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxNQUFlLEVBQUUsU0FBaUIsRUFBRSxPQUFlO1FBQ3hFLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNuQyxZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLEdBQXFCO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUNuQztZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRTtJQUNMLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSztJQUhOLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBcUNwQztJQUFELHVCQUFDO0NBckNELEFBcUNDLENBckM2QyxFQUFFLENBQUMsU0FBUyxHQXFDekQ7a0JBckNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3B0aW9uOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldE9wdGlvbigpO1xuICAgIH1cblxuICAgIHJlc2V0T3B0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwieFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaW5kZXggbMOgIHRo4bupIHThu7EgY+G7p2Egb3B0aW9uIFswLTJdXG4gICAgLy8gdGFyZ2V0IGzDoCBub2RlIGNo4bupYSBzY3JpcHRcbiAgICAvLyBjb21wb25lbnQgbMOgIHNjcmlwdFxuICAgIC8vaGFuZGxlciBsw6AgZnVuY3Rpb24gY+G6p24gdGjhu7FjIHRoaVxuICAgIHNldE9wdGlvbihpbmRleDogbnVtYmVyLCB0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGNsaWNrSGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNsaWNrSGFuZGxlci50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGNsaWNrSGFuZGxlci5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIGNsaWNrSGFuZGxlci5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5vcHRpb25baW5kZXhdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMub3B0aW9uW2luZGV4XS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuXG4gICAgc2V0SW1hZ2VPcHRpb24oaW1nOiBbY2MuU3ByaXRlRnJhbWVdKTogdm9pZCB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1nLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGltZ1tpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f46du+rlVPAasD8jvXHQxB', 'Setting');
// Scripts/Setting.ts

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
var Setting = /** @class */ (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound = null;
        _this.music = null;
        _this.shadow = null;
        _this.container = null;
        _this._data = null;
        _this._gameManager = null;
        return _this;
    }
    Setting.prototype.onLoad = function () {
        this.shadow.opacity = 0;
        this.container.scale = 0.7;
        this.container.opacity = 0;
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    };
    Setting.prototype.onEnable = function () {
        var _this = this;
        this.node.on("touchend", this.onClose, this);
        this.effectOpen();
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        Data_1.default.getData(Data_1.default.LOCAL_KEY, function (err, data) {
            _this._data = data;
            _this.music.isChecked = _this._data.isMusic;
            _this.sound.isChecked = _this._data.isSound;
        });
    };
    Setting.prototype.onDisable = function () {
        this.node.off("touchend", this.onClose, this);
    };
    Setting.prototype.effectOpen = function () {
        var _this = this;
        tween(this.shadow).to(0.2, { opacity: 200 })
            .call(function () {
            tween(_this.container).parallel(tween().to(0.2, { opacity: 255 }), tween().to(0.2, { scale: 1 }, { easing: "quartOut" }))
                .start();
        })
            .start();
    };
    Setting.prototype.effectClose = function (callback) {
        tween(this.shadow).to(0.2, { opacity: 0 }).start();
        tween(this.container).parallel(tween().to(0.2, { opacity: 0 }), tween().to(0.2, { scale: 0.7 }, { easing: "quartOut" }))
            .call(callback)
            .start();
    };
    Setting.prototype.onClose = function () {
        var _this = this;
        this.effectClose(function () {
            _this.node.active = false;
        });
    };
    Setting.prototype.onChangeToggle = function (event) {
        switch (event.target.parent.name) {
            case "ToggleSound":
                this._data.isSound = event.isChecked;
                Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
                break;
            case "ToggleMusic":
                this._data.isMusic = event.isChecked;
                Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
                if (event.isChecked) {
                    this.playMusic();
                }
                else {
                    this.stopMusic();
                }
                break;
        }
    };
    Setting.prototype.onRestoreSetting = function () {
        this._data.isSound = true;
        this._data.isMusic = true;
        this.sound.isChecked = this._data.isSound;
        this.music.isChecked = this._data.isMusic;
        Data_1.default.saveData(this._data, Data_1.default.LOCAL_KEY);
    };
    Setting.prototype.stopMusic = function () {
        this._gameManager.stopAudioBG();
    };
    Setting.prototype.playMusic = function () {
        this._gameManager.playAudioBG();
    };
    __decorate([
        property(cc.Toggle)
    ], Setting.prototype, "sound", void 0);
    __decorate([
        property(cc.Toggle)
    ], Setting.prototype, "music", void 0);
    __decorate([
        property(cc.Node)
    ], Setting.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], Setting.prototype, "container", void 0);
    Setting = __decorate([
        ccclass
    ], Setting);
    return Setting;
}(cc.Component));
exports.default = Setting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQTBCO0FBR3BCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFdkI7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF3R0M7UUF0R0csV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUVsQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2Isa0JBQVksR0FBRyxJQUFJLENBQUM7O0lBMEZoQyxDQUFDO0lBeEZHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMEJBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU5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QUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwQjtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMxQyxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQXJHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBWFQsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXdHM0I7SUFBRCxjQUFDO0NBeEdELEFBd0dDLENBeEdvQyxFQUFFLENBQUMsU0FBUyxHQXdHaEQ7a0JBeEdvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4vRWZmZWN0TWFuYWdlclwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHNvdW5kOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICBtdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNoYWRvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ2FtZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNoYWRvdy5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2NhbGUgPSAwLjc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hlbmRcIiwgdGhpcy5vbkNsb3NlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lZmZlY3RPcGVuKCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgXG4gICAgICAgIERhdGEuZ2V0RGF0YShEYXRhLkxPQ0FMX0tFWSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGFcbiAgICAgICAgICAgIHRoaXMubXVzaWMuaXNDaGVja2VkID0gdGhpcy5fZGF0YS5pc011c2ljO1xuICAgICAgICAgICAgdGhpcy5zb3VuZC5pc0NoZWNrZWQgPSB0aGlzLl9kYXRhLmlzU291bmQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcInRvdWNoZW5kXCIsIHRoaXMub25DbG9zZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgZWZmZWN0T3BlbigpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5zaGFkb3cpLnRvKDAuMiwge29wYWNpdHk6IDIwMH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuY29udGFpbmVyKS5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge29wYWNpdHk6IDI1NX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8oMC4yLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIGVmZmVjdENsb3NlKGNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjIsIHtvcGFjaXR5OiAwfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGhpcy5jb250YWluZXIpLnBhcmFsbGVsKFxuICAgICAgICAgICAgdHdlZW4oKS50bygwLjIsIHtvcGFjaXR5OiAwfSksXG4gICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge3NjYWxlOiAwLjd9LCB7ZWFzaW5nOiBcInF1YXJ0T3V0XCJ9KVxuICAgICAgICApXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVmZmVjdENsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VUb2dnbGUoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQucGFyZW50Lm5hbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJUb2dnbGVTb3VuZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEuaXNTb3VuZCA9IGV2ZW50LmlzQ2hlY2tlZDtcbiAgICAgICAgICAgICAgICBEYXRhLnNhdmVEYXRhKHRoaXMuX2RhdGEsIERhdGEuTE9DQUxfS0VZKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUb2dnbGVNdXNpY1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEuaXNNdXNpYyA9IGV2ZW50LmlzQ2hlY2tlZDtcbiAgICAgICAgICAgICAgICBEYXRhLnNhdmVEYXRhKHRoaXMuX2RhdGEsIERhdGEuTE9DQUxfS0VZKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNDaGVja2VkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wTXVzaWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc3RvcmVTZXR0aW5nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhLmlzU291bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kYXRhLmlzTXVzaWMgPSB0cnVlO1xuICAgICAgICB0aGlzLnNvdW5kLmlzQ2hlY2tlZCA9IHRoaXMuX2RhdGEuaXNTb3VuZDtcbiAgICAgICAgdGhpcy5tdXNpYy5pc0NoZWNrZWQgPSB0aGlzLl9kYXRhLmlzTXVzaWM7XG4gICAgICAgIERhdGEuc2F2ZURhdGEodGhpcy5fZGF0YSwgRGF0YS5MT0NBTF9LRVkpO1xuICAgIH1cblxuICAgIHN0b3BNdXNpYygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuc3RvcEF1ZGlvQkcoKTtcbiAgICB9XG5cbiAgICBwbGF5TXVzaWMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLnBsYXlBdWRpb0JHKCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Notification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bc37L3KwtG8K21z1sMKj3A', 'Notification');
// Scripts/Notification.ts

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
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.duration = 0;
        _this.delay = 0;
        return _this;
    }
    Notification.prototype.onEnable = function () {
        var _this = this;
        this.label.node.position = cc.v3(550, 0);
        cc.tween(this.label.node).repeatForever(cc.tween().delay(Number(this.delay)).by(Number(this.duration), { position: cc.v3(-2170, 0) })
            .call(function () {
            _this.label.node.position = cc.v3(550, 0);
        }))
            .start();
    };
    __decorate([
        property(cc.Label)
    ], Notification.prototype, "label", void 0);
    __decorate([
        property()
    ], Notification.prototype, "duration", void 0);
    __decorate([
        property()
    ], Notification.prototype, "delay", void 0);
    Notification = __decorate([
        ccclass
    ], Notification);
    return Notification;
}(cc.Component));
exports.default = Notification;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL05vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXFCQztRQWxCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFZdEIsQ0FBQztJQVZHLCtCQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUMvQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDdEYsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUNUO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNJO0lBR3ZCO1FBREMsUUFBUSxFQUFFO2tEQUNVO0lBR3JCO1FBREMsUUFBUSxFQUFFOytDQUNPO0lBVEQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFCaEM7SUFBRCxtQkFBQztDQXJCRCxBQXFCQyxDQXJCeUMsRUFBRSxDQUFDLFNBQVMsR0FxQnJEO2tCQXJCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIGR1cmF0aW9uOiBOdW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KClcbiAgICBkZWxheTogTnVtYmVyID0gMDtcblxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhYmVsLm5vZGUucG9zaXRpb24gPSBjYy52Myg1NTAsIDApO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxhYmVsLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5kZWxheShOdW1iZXIodGhpcy5kZWxheSkpLmJ5KE51bWJlcih0aGlzLmR1cmF0aW9uKSwge3Bvc2l0aW9uOiBjYy52MygtMjE3MCwgMCl9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUucG9zaXRpb24gPSBjYy52Myg1NTAsIDApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/spine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb70f8tOLNDzb/r+qkgLO7U', 'spine');
// Scripts/spine.ts

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
var spine = /** @class */ (function (_super) {
    __extends(spine, _super);
    function spine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    spine = __decorate([
        ccclass
    ], spine);
    return spine;
}(sp.Skeleton));
exports.default = spine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3NwaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFXO0lBQTlDOztJQUdBLENBQUM7SUFIb0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQUd6QjtJQUFELFlBQUM7Q0FIRCxBQUdDLENBSGtDLEVBQUUsQ0FBQyxRQUFRLEdBRzdDO2tCQUhvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzcGluZSBleHRlbmRzIHNwLlNrZWxldG9uIHtcblxuICAgIFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StageController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b31aD44/JG9Z0G6p57oiui', 'StageController');
// Scripts/StageController.ts

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
var EffectManager_1 = require("./EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageController = /** @class */ (function (_super) {
    __extends(StageController, _super);
    function StageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = [];
        _this.iconOption = [];
        _this.optionContainer = null;
        _this.stageStart = null;
        _this.topContainer = null;
        _this._ = null;
        _this.isClick = false;
        return _this;
    }
    StageController.prototype.onLoad = function () {
        this._ = this;
        this.optionContainer.scale = 0;
    };
    StageController.prototype.onEnable = function () {
        var option = this.optionContainer.getComponent("OptionController");
        option.setImageOption(this.iconOption);
        for (var i = 0; i < option.node.children.length; ++i) {
            option.setOption(i, this.node, "StageController", "runClip");
            this.isClick = true;
        }
        this.setTopContainer();
    };
    StageController.prototype.runStage = function () {
        var clipController = this.stageStart.getComponent("ClipController");
        clipController.startClip(clipController);
    };
    StageController.prototype.showOptionContainer = function () {
        EffectManager_1.default.effectScaleOption(this.optionContainer, 0.5);
    };
    StageController.prototype.runClip = function (event) {
        if (!this.isClick) {
            cc.error("Khong duoc click option lien tuc");
            return;
        }
        this.isClick = false;
        var _node = event.target;
        _node.getChildByName("selected").active = true;
        switch (_node.name) {
            case "option1":
                var clipController = this.target[0].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
            case "option2":
                var clipController = this.target[1].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
            case "option3":
                var clipController = this.target[2].getComponent("ClipController");
                clipController.startClip(clipController);
                break;
        }
    };
    StageController.prototype.setTopContainer = function () {
        var index = parseInt(this.node.name.split("Stage")[1]) - 1;
        ;
        for (var i = 0; i < this.topContainer.children.length; ++i) {
            var children = this.topContainer.children[i].getChildByName((index - 1).toString());
            if (children) {
                children.getChildByName("TrueAnswer").active = true;
            }
        }
    };
    StageController.prototype.onResult = function (type) {
        cc.Tween.stopAll();
    };
    __decorate([
        property({ type: cc.Node })
    ], StageController.prototype, "target", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageController.prototype, "iconOption", void 0);
    __decorate([
        property(cc.Node)
    ], StageController.prototype, "optionContainer", void 0);
    __decorate([
        property({ type: cc.Node })
    ], StageController.prototype, "stageStart", void 0);
    __decorate([
        property(cc.Node)
    ], StageController.prototype, "topContainer", void 0);
    StageController = __decorate([
        ccclass
    ], StageController);
    return StageController;
}(cc.Component));
exports.default = StageController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N0YWdlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFHdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFxRkM7UUFsRkcsWUFBTSxHQUFhLEVBQUUsQ0FBQztRQUd0QixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFHbEMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsT0FBQyxHQUFHLElBQUksQ0FBQztRQUNULGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBbUU1QixDQUFDO0lBakVHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFDcEQ7WUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NB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Qzt1REFDQztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO0lBZlosZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXFGbkM7SUFBRCxzQkFBQztDQXJGRCxBQXFGQyxDQXJGNEMsRUFBRSxDQUFDLFNBQVMsR0FxRnhEO2tCQXJGb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuL0VmZmVjdE1hbmFnZXJcIjtcbmltcG9ydCBDbGlwQ29udHJvbGxlciBmcm9tIFwiLi9DbGlwQ29udHJvbGxlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGV9KVxuICAgIHRhcmdldDogY2MuTm9kZVtdPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBpY29uT3B0aW9uOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvcHRpb25Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcbiAgICBzdGFnZVN0YXJ0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRvcENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF8gPSBudWxsO1xuICAgIHByaXZhdGUgaXNDbGljayA9IGZhbHNlO1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl8gPSB0aGlzO1xuICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lci5zY2FsZSA9IDA7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbkNvbnRhaW5lci5nZXRDb21wb25lbnQoXCJPcHRpb25Db250cm9sbGVyXCIpO1xuICAgICAgICBvcHRpb24uc2V0SW1hZ2VPcHRpb24odGhpcy5pY29uT3B0aW9uKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb24ubm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uLnNldE9wdGlvbihpLCB0aGlzLm5vZGUsIFwiU3RhZ2VDb250cm9sbGVyXCIsIFwicnVuQ2xpcFwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRUb3BDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBydW5TdGFnZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIGNsaXBDb250cm9sbGVyID0gdGhpcy5zdGFnZVN0YXJ0LmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICBjbGlwQ29udHJvbGxlci5zdGFydENsaXAoY2xpcENvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIHNob3dPcHRpb25Db250YWluZXIoKTogdm9pZCB7XG4gICAgICAgIEVmZmVjdE1hbmFnZXIuZWZmZWN0U2NhbGVPcHRpb24odGhpcy5vcHRpb25Db250YWluZXIsIDAuNSk7XG4gICAgfVxuXG4gICAgcnVuQ2xpcChldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNDbGljaylcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJLaG9uZyBkdW9jIGNsaWNrIG9wdGlvbiBsaWVuIHR1Y1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9ub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBfbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHN3aXRjaChfbm9kZS5uYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uMVwiOlxuICAgICAgICAgICAgICAgIHZhciBjbGlwQ29udHJvbGxlciA9IHRoaXMudGFyZ2V0WzBdLmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgIGNsaXBDb250cm9sbGVyLnN0YXJ0Q2xpcChjbGlwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uMlwiOlxuICAgICAgICAgICAgICAgIHZhciBjbGlwQ29udHJvbGxlciA9IHRoaXMudGFyZ2V0WzFdLmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgIGNsaXBDb250cm9sbGVyLnN0YXJ0Q2xpcChjbGlwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uM1wiOlxuICAgICAgICAgICAgICAgIHZhciBjbGlwQ29udHJvbGxlciA9IHRoaXMudGFyZ2V0WzJdLmdldENvbXBvbmVudChcIkNsaXBDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgIGNsaXBDb250cm9sbGVyLnN0YXJ0Q2xpcChjbGlwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUb3BDb250YWluZXIoKTogdm9pZCB7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRoaXMubm9kZS5uYW1lLnNwbGl0KFwiU3RhZ2VcIilbMV0pIC0gMTs7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3BDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMudG9wQ29udGFpbmVyLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKChpbmRleCAtIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmdldENoaWxkQnlOYW1lKFwiVHJ1ZUFuc3dlclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uUmVzdWx0KHR5cGUpOiB2b2lkIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ListLevel/ClickItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '999c8OWQ45LuamLep+cbF8/', 'ClickItem');
// Scripts/ListLevel/ClickItem.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isClick = false;
        return _this;
    }
    NewClass.prototype.onClick = function (event) {
        if (this.isClick) {
            var _event = new cc.Event.EventCustom("click_item", true);
            var strLabel = this.node.getChildByName("txt_number").getComponent(cc.Label).string;
            _event.level = Number(strLabel) - 1;
            this.node.dispatchEvent(_event);
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xpc3RMZXZlbC9DbGlja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFZQztRQVZHLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBVXBCLENBQUM7SUFURywwQkFBTyxHQUFQLFVBQVEsS0FBMkI7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUNoQjtZQUNJLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3BGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFYZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVk1QjtJQUFELGVBQUM7Q0FaRCxBQVlDLENBWnFDLEVBQUUsQ0FBQyxTQUFTLEdBWWpEO2tCQVpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBpc0NsaWNrID0gZmFsc2U7XG4gICAgb25DbGljayhldmVudDogY2MuRXZlbnQuRXZlbnRDdXN0b20pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGljaylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IF9ldmVudCA9IG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImNsaWNrX2l0ZW1cIiwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc3RyTGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfbnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICAgICAgX2V2ZW50LmxldmVsID0gTnVtYmVyKHN0ckxhYmVsKSAtIDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChfZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ListLevel/NewClickItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '829a9uw8npBu6RdJBGkk5Vr', 'NewClickItem');
// Scripts/ListLevel/NewClickItem.ts

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
exports.STATUS = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STATUS;
(function (STATUS) {
    STATUS[STATUS["UNLOCK"] = 0] = "UNLOCK";
    STATUS[STATUS["LOCK"] = 1] = "LOCK";
    STATUS[STATUS["CURRENT"] = 2] = "CURRENT";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var NewClickItem = /** @class */ (function (_super) {
    __extends(NewClickItem, _super);
    function NewClickItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tick = null;
        _this.frame = null;
        _this.bigNumber = null;
        _this.smallNumber = null;
        _this.image = [];
        _this.isClick = false;
        _this._status = STATUS.LOCK;
        _this._count = 0;
        return _this;
    }
    NewClickItem.prototype.onLoad = function () {
        this._view = this.node.parent.parent.parent;
    };
    NewClickItem.prototype.onClick = function (event) {
        if (this.isClick) {
            var _event = new cc.Event.EventCustom("click_item", true);
            var level = this.node.parent.children.indexOf(this.node);
            var content = this.node.parent.parent;
            var pageNumber = content.children.indexOf(this.node.parent);
            _event.level = 10 * pageNumber + level;
            this.node.dispatchEvent(_event);
        }
    };
    NewClickItem.prototype.setLevel = function (level) {
        this.frame.node.getChildByName("smallNumber").getComponent(cc.Label).string = level;
        this.frame.node.getChildByName("bigNumber").getComponent(cc.Label).string = level;
    };
    NewClickItem.prototype.setStatus = function (status) {
        this._status = status;
        switch (status) {
            case STATUS.UNLOCK:
                this.frame.spriteFrame = this.image[0];
                this.smallNumber.active = true;
                this.bigNumber.active = false;
                this.smallNumber.color = new cc.Color(255, 255, 255, 255);
                this.smallNumber.getComponent(cc.LabelOutline).color = new cc.Color(40, 40, 40, 102);
                break;
            case STATUS.CURRENT:
                this.frame.spriteFrame = this.image[1];
                this.smallNumber.active = false;
                this.bigNumber.active = true;
                this.bigNumber.color = new cc.Color(255, 255, 255, 255);
                this.bigNumber.getComponent(cc.LabelOutline).color = new cc.Color(83, 44, 0, 102);
                break;
            case STATUS.LOCK:
                this.frame.spriteFrame = this.image[2];
                this.smallNumber.active = false;
                this.bigNumber.active = true;
                this.bigNumber.color = new cc.Color(141, 141, 141, 255);
                this.bigNumber.getComponent(cc.LabelOutline).color = new cc.Color(40, 40, 40, 102);
                break;
        }
    };
    NewClickItem.prototype.localConvertWorldPointAR = function (node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    };
    NewClickItem.prototype.worldConvertLocalPointAR = function (node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    };
    NewClickItem.prototype.convetOtherNodeSpaceAR = function (node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        var worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
    };
    NewClickItem.prototype.update = function (dt) {
        var pos = this.convetOtherNodeSpaceAR(this.node, this._view);
        if (this.node.name == "item1") {
            (pos.x < -500 || pos.x > 500) ? this.node.opacity = 0 : this.node.opacity = 255;
        }
        else {
            (pos.x < -750 || pos.x > 750) ? this.node.opacity = 0 : this.node.opacity = 255;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClickItem.prototype, "tick", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClickItem.prototype, "frame", void 0);
    __decorate([
        property(cc.Node)
    ], NewClickItem.prototype, "bigNumber", void 0);
    __decorate([
        property(cc.Node)
    ], NewClickItem.prototype, "smallNumber", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClickItem.prototype, "image", void 0);
    NewClickItem = __decorate([
        ccclass
    ], NewClickItem);
    return NewClickItem;
}(cc.Component));
exports.default = NewClickItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xpc3RMZXZlbC9OZXdDbGlja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJQUNkLHVDQUFNLENBQUE7SUFDTixtQ0FBSSxDQUFBO0lBQ0oseUNBQU8sQ0FBQTtBQUNYLENBQUMsRUFKVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFJakI7QUFHRDtJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXNHQztRQW5HRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixXQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUU3QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBRVIsYUFBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUFpRnZCLENBQUM7SUFoRkcsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLEtBQTJCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDaEI7WUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixRQUFRLE1BQU0sRUFDZDtZQUNJLEtBQUssTUFBTSxDQUFDLE1BQU07Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JGLE1BQU07WUFDVixLQUFLLE1BQU0sQ0FBQyxPQUFPO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsRixNQUFNO1lBQ1YsS0FBSyxNQUFNLENBQUMsSUFBSTtnQkFDWixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkYsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELCtDQUF3QixHQUF4QixVQUF5QixJQUFJO1FBQ3pCLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQ0FBd0IsR0FBeEIsVUFBeUIsSUFBSSxFQUFFLFVBQVU7UUFDckMsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2Q0FBc0IsR0FBdEIsVUFBdUIsSUFBSSxFQUFFLFVBQVU7UUFDbkMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ25GO2FBQ0k7WUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDbkY7SUFDTCxDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7K0NBQ0U7SUFmWixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0doQztJQUFELG1CQUFDO0NBdEdELEFBc0dDLENBdEd5QyxFQUFFLENBQUMsU0FBUyxHQXNHckQ7a0JBdEdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIFNUQVRVUyB7XG4gICAgVU5MT0NLLFxuICAgIExPQ0ssXG4gICAgQ1VSUkVOVFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xpY2tJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmcmFtZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpZ051bWJlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21hbGxOdW1iZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaW1hZ2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIGlzQ2xpY2sgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3N0YXR1cyA9IFNUQVRVUy5MT0NLO1xuICAgIHByaXZhdGUgX3ZpZXc7XG4gICAgcHJpdmF0ZSBfY291bnQgPSAwO1xuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlldyA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50OiBjYy5FdmVudC5FdmVudEN1c3RvbSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgX2V2ZW50ID0gbmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwiY2xpY2tfaXRlbVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBsZXZlbCA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIGxldCBwYWdlTnVtYmVyID0gY29udGVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMubm9kZS5wYXJlbnQpO1xuICAgICAgICAgICAgX2V2ZW50LmxldmVsID0gMTAgKiBwYWdlTnVtYmVyICsgbGV2ZWw7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChfZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TGV2ZWwobGV2ZWw6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyYW1lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzbWFsbE51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGxldmVsO1xuICAgICAgICB0aGlzLmZyYW1lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiaWdOdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsZXZlbDtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoc3RhdHVzOiBTVEFUVVMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cylcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBTVEFUVVMuVU5MT0NLOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUuc3ByaXRlRnJhbWUgPSB0aGlzLmltYWdlWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hbGxOdW1iZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ051bWJlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNtYWxsTnVtYmVyLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbWFsbE51bWJlci5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IG5ldyBjYy5Db2xvcig0MCwgNDAsIDQwLCAxMDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFUVVMuQ1VSUkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lLnNwcml0ZUZyYW1lID0gdGhpcy5pbWFnZVsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNtYWxsTnVtYmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYmlnTnVtYmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWdOdW1iZXIuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ051bWJlci5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IG5ldyBjYy5Db2xvcig4MywgNDQsIDAsIDEwMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVRVUy5MT0NLOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUuc3ByaXRlRnJhbWUgPSB0aGlzLmltYWdlWzJdO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hbGxOdW1iZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWdOdW1iZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ051bWJlci5jb2xvciA9IG5ldyBjYy5Db2xvcigxNDEsIDE0MSwgMTQxLCAyNTUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmlnTnVtYmVyLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDQwLCA0MCwgNDAsIDEwMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbENvbnZlcnRXb3JsZFBvaW50QVIobm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB3b3JsZENvbnZlcnRMb2NhbFBvaW50QVIobm9kZSwgd29ybGRQb2ludCkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29udmV0T3RoZXJOb2RlU3BhY2VBUihub2RlLCB0YXJnZXROb2RlKSB7XG4gICAgICAgIGlmICghbm9kZSB8fCAhdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSB0aGlzLmxvY2FsQ29udmVydFdvcmxkUG9pbnRBUihub2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRDb252ZXJ0TG9jYWxQb2ludEFSKHRhcmdldE5vZGUsIHdvcmxkUG9pbnQpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZHQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuY29udmV0T3RoZXJOb2RlU3BhY2VBUih0aGlzLm5vZGUsIHRoaXMuX3ZpZXcpO1xuICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJpdGVtMVwiKSB7XG4gICAgICAgICAgICAocG9zLnggPCAtNTAwIHx8IHBvcy54ID4gNTAwKSA/IHRoaXMubm9kZS5vcGFjaXR5ID0gMCA6IHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKHBvcy54IDwgLTc1MCB8fCBwb3MueCA+IDc1MCkgPyB0aGlzLm5vZGUub3BhY2l0eSA9IDAgOiB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '044d3DDMC9Kf5Tpw9Zpr6YN', 'Alert');
// Scripts/Alert.ts

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
var tween = cc.tween;
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        return _this;
    }
    Alert.prototype.onEnable = function () {
        this.text.scale = 0;
        this.text.opacity = 0;
        tween(this.text)
            .to(.5, { scale: 1, opacity: 255 }, { easing: "cubicIn" })
            .start();
    };
    Alert.prototype.onClose = function () {
        this.node.active = false;
    };
    Alert.prototype.setText = function (txt) {
        var label = this.text.getComponent(cc.Label);
        label.string = txt;
    };
    __decorate([
        property(cc.Node)
    ], Alert.prototype, "text", void 0);
    Alert = __decorate([
        ccclass
    ], Alert);
    return Alert;
}(cc.Component));
exports.default = Alert;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUE7QUFHdEI7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFxQkM7UUFsQkcsVUFBSSxHQUFZLElBQUksQ0FBQzs7SUFrQnpCLENBQUM7SUFoQkcsd0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDWCxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUM7YUFDckQsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDNUIsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQ3RCLENBQUM7SUFqQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDRztJQUhKLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FxQnpCO0lBQUQsWUFBQztDQXJCRCxBQXFCQyxDQXJCa0MsRUFBRSxDQUFDLFNBQVMsR0FxQjlDO2tCQXJCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5jb25zdCB0d2VlbiA9IGNjLnR3ZWVuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0d2Vlbih0aGlzLnRleHQpXHJcbiAgICAgICAgICAgIC50byguNSwge3NjYWxlOiAxLCBvcGFjaXR5OiAyNTV9LCB7ZWFzaW5nOiBcImN1YmljSW5cIn0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dCh0eHQpIHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMudGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gdHh0XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Levels/Level19/Script/Level19_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77664Pcd1JBGpey+qpnQu7v', 'Level19_1');
// Levels/Level19/Script/Level19_1.ts

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
var LevelBase_1 = require("../../../Scripts/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var SOUND;
(function (SOUND) {
    SOUND[SOUND["DIZZY"] = 0] = "DIZZY";
    SOUND[SOUND["SWOOSH"] = 1] = "SWOOSH";
    SOUND[SOUND["WATER"] = 2] = "WATER";
    SOUND[SOUND["BITE"] = 3] = "BITE";
    SOUND[SOUND["FREEZE"] = 4] = "FREEZE";
    SOUND[SOUND["LIKE"] = 5] = "LIKE";
    SOUND[SOUND["PEEK"] = 6] = "PEEK";
})(SOUND || (SOUND = {}));
var Level19_1 = /** @class */ (function (_super) {
    __extends(Level19_1, _super);
    function Level19_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level19_1.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this._gameManager._levelCurrent.level = this.levelCurrent;
        this._gameManager._beginScene = this.node;
    };
    Level19_1.prototype.initStage = function () {
        _super.prototype.initStage.call(this);
        this.setStatus();
        this.setAction();
    };
    Level19_1.prototype.setStatus = function () {
        this._oldMan = this.otherSpine[0];
        this._cano = this.otherSpine[1];
        this._shark = this.otherSpine[2];
        this._oldMan.node.scaleX = -0.8;
        this._oldMan.node.scaleY = 0.8;
        this._cano.node.scale = 1;
        this.setOtherSpine(this._shark, cc.v2(-800, -1030), "shark_move", null);
        this.setOtherSpine(this._oldMan, cc.v2(-400, -665), "old_man/level_19_1/old_man_idle", null);
        this.setOtherSpine(this._cano, cc.v2(-213, -765), "level_19/cano_idle", null);
        this.lupin.clearTrack(1);
        this.setLupin(cc.v2(750, -1900), "level_19_1/mc_swim_idle", null);
    };
    Level19_1.prototype.setAction = function () {
        var _this = this;
        tween(this.lupin.node).to(3, { position: cc.v3(375, -1130) }, { easing: "cubicInOut" })
            .delay(1)
            .call(function () {
            _this.showOptionContainer(true);
        })
            .start();
    };
    Level19_1.prototype.runOption1 = function () {
        var _this = this;
        this.lupin.setMix("level_19_1/mc_swim_idle", "level_19_1/mc_lifting_fish", 0.3);
        this._oldMan.setMix("old_man/level_19_1/old_man_idle", "old_man/level_19_1/old_man_happy", 0.3);
        this._oldMan.setMix("old_man/level_19_1/old_man_happy", "old_man/level_19_1/old_man_welcome", 0.3);
        this.lupin.setAnimation(0, "level_19_1/mc_lifting_fish", false);
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_1/mc_lifting_fish") {
                _this.lupin.setCompleteListener(null);
                _this.playSound(SOUND.LIKE, false, 0.3);
                _this._oldMan.setAnimation(0, "old_man/level_19_1/old_man_happy", true);
                _this._oldMan.addAnimation(0, "old_man/level_19_1/old_man_welcome", true);
                _this._oldMan.setCompleteListener(function (track) {
                    if (track.animation.name == "old_man/level_19_1/old_man_welcome") {
                        _this._oldMan.setCompleteListener(null);
                        _this.lupin.setAnimation(1, "emotion/happy_2", true);
                        tween(_this.lupin.node).delay(1)
                            .call(function () {
                            _this.onPass();
                        })
                            .start();
                    }
                });
            }
        });
    };
    Level19_1.prototype.runOption2 = function () {
        var _this = this;
        this.lupin.setAnimation(0, "level_19_1/mc_jumping_boat", false);
        this.playSound(SOUND.SWOOSH, false, 0);
        tween(this.lupin.node).parallel(tween().to(0.5, { scaleX: -0.8 }), tween().to(0.5, { scaleY: 0.8 }), tween().bezierTo(0.5, cc.v2(this.lupin.node.x, this.lupin.node.y), cc.v2(-100, -450), cc.v2(-200, -685))
            .call(function () {
            _this._oldMan.node.scaleX = -0.8;
            _this._oldMan.setAnimation(0, "police/level_12/old_man_attack", false);
            _this.playSound(SOUND.FREEZE, false, 0.6);
            tween(_this.lupin.node).delay(0.6)
                .call(function () {
                _this.lupin.node.scaleX = -0.8;
                _this.lupin.setAnimation(0, "level_19_1/mc_get_hit", false);
                _this.playSound(SOUND.WATER, false, 0.7);
                _this.lupin.setCompleteListener(function (track) {
                    if (track.animation.name == "level_19_1/mc_get_hit") {
                        _this.lupin.setCompleteListener(null);
                        tween(_this.lupin.node).by(2, { position: cc.v3(0, -500) }, { easing: "cubicOut" })
                            .call(function () {
                            _this.showFail(_this.selected);
                        }).start();
                    }
                });
            })
                .start();
        }))
            .start();
    };
    Level19_1.prototype.runOption3 = function () {
        var _this = this;
        this.lupin.setMix("level_19_1/mc_swim_idle", "level_19_1/mc_swim_gun", 0.3);
        this.lupin.setAnimation(0, "level_19_1/mc_swim_gun", false);
        this.lupin.setAnimation(1, "emotion/sinister", true);
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_1/mc_swim_gun") {
                _this.lupin.setCompleteListener(null);
                _this.playSound(SOUND.PEEK, false, 0);
                _this._oldMan.setAnimation(0, "old_man/level_19_1/old_man_scare", false);
                tween(_this._shark.node).delay(1).to(1, { position: cc.v3(200, -1030) })
                    .call(function () {
                    _this._shark.timeScale = 1.5;
                    _this.playSound(SOUND.BITE, false, 0.1);
                    _this._shark.setAnimation(0, "shark_attack", false);
                    _this._shark.setCompleteListener(function (track) {
                        if (track.animation.name == "shark_attack") {
                            _this._shark.setCompleteListener(null);
                            // tween(this._shark.node).by(0.2, {position: cc.v3(200, -500)}).start();
                        }
                    });
                })
                    .delay(0.2)
                    .call(function () {
                    tween(_this.lupin.node).to(0.2, { position: cc.v3(765, -1560) })
                        .call(function () {
                        _this.showFail(_this.selected);
                    })
                        .start();
                })
                    .start();
            }
        });
    };
    Level19_1 = __decorate([
        ccclass
    ], Level19_1);
    return Level19_1;
}(LevelBase_1.default));
exports.default = Level19_1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9MZXZlbHMvTGV2ZWwxOS9TY3JpcHQvTGV2ZWwxOV8xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCLElBQUssS0FRSjtBQVJELFdBQUssS0FBSztJQUNOLG1DQUFLLENBQUE7SUFDTCxxQ0FBTSxDQUFBO0lBQ04sbUNBQUssQ0FBQTtJQUNMLGlDQUFJLENBQUE7SUFDSixxQ0FBTSxDQUFBO0lBQ04saUNBQUksQ0FBQTtJQUNKLGlDQUFJLENBQUE7QUFDUixDQUFDLEVBUkksS0FBSyxLQUFMLEtBQUssUUFRVDtBQUdEO0lBQXVDLDZCQUFTO0lBQWhEOztJQXNJQSxDQUFDO0lBaElHLDRCQUFRLEdBQVI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksaUJBQU0sU0FBUyxXQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFB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LEVBQUUsQ0FBQzthQUNoQjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXJJZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXNJN0I7SUFBRCxnQkFBQztDQXRJRCxBQXNJQyxDQXRJc0MsbUJBQVMsR0FzSS9DO2tCQXRJb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4uLy4uLy4uL1NjcmlwdHMvTGV2ZWxCYXNlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgdHdlZW4gPSBjYy50d2VlbjtcblxuZW51bSBTT1VORCB7XG4gICAgRElaWlksXG4gICAgU1dPT1NILFxuICAgIFdBVEVSLFxuICAgIEJJVEUsXG4gICAgRlJFRVpFLFxuICAgIExJS0UsXG4gICAgUEVFS1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxOV8xIGV4dGVuZHMgTGV2ZWxCYXNlIHtcblxuICAgIHByaXZhdGUgX2Nhbm87XG4gICAgcHJpdmF0ZSBfb2xkTWFuO1xuICAgIHByaXZhdGUgX3NoYXJrO1xuXG4gICAgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIHRoaXMuX2dhbWVNYW5hZ2VyLl9sZXZlbEN1cnJlbnQubGV2ZWwgPSB0aGlzLmxldmVsQ3VycmVudDtcbiAgICAgICAgdGhpcy5fZ2FtZU1hbmFnZXIuX2JlZ2luU2NlbmUgPSB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgaW5pdFN0YWdlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5pbml0U3RhZ2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29sZE1hbiA9IHRoaXMub3RoZXJTcGluZVswXTtcbiAgICAgICAgdGhpcy5fY2FubyA9IHRoaXMub3RoZXJTcGluZVsxXTtcbiAgICAgICAgdGhpcy5fc2hhcmsgPSB0aGlzLm90aGVyU3BpbmVbMl07XG5cbiAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuc2NhbGVYID0gLTAuODtcbiAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuc2NhbGVZID0gMC44O1xuICAgICAgICB0aGlzLl9jYW5vLm5vZGUuc2NhbGUgPSAxO1xuXG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9zaGFyaywgY2MudjIoLTgwMCwgLTEwMzApLCBcInNoYXJrX21vdmVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9vbGRNYW4sIGNjLnYyKC00MDAsIC02NjUpLCBcIm9sZF9tYW4vbGV2ZWxfMTlfMS9vbGRfbWFuX2lkbGVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9jYW5vLCBjYy52MigtMjEzLCAtNzY1KSwgXCJsZXZlbF8xOS9jYW5vX2lkbGVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMubHVwaW4uY2xlYXJUcmFjaygxKTtcbiAgICAgICAgdGhpcy5zZXRMdXBpbihjYy52Mig3NTAsIC0xOTAwKSwgXCJsZXZlbF8xOV8xL21jX3N3aW1faWRsZVwiLCBudWxsKTtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkudG8oMywge3Bvc2l0aW9uOiBjYy52MygzNzUsIC0xMTMwKX0sIHtlYXNpbmc6IFwiY3ViaWNJbk91dFwifSlcbiAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvbkNvbnRhaW5lcih0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBydW5PcHRpb24xKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmx1cGluLnNldE1peChcImxldmVsXzE5XzEvbWNfc3dpbV9pZGxlXCIsIFwibGV2ZWxfMTlfMS9tY19saWZ0aW5nX2Zpc2hcIiwgMC4zKTtcbiAgICAgICAgdGhpcy5fb2xkTWFuLnNldE1peChcIm9sZF9tYW4vbGV2ZWxfMTlfMS9vbGRfbWFuX2lkbGVcIiwgXCJvbGRfbWFuL2xldmVsXzE5XzEvb2xkX21hbl9oYXBweVwiLCAwLjMpO1xuICAgICAgICB0aGlzLl9vbGRNYW4uc2V0TWl4KFwib2xkX21hbi9sZXZlbF8xOV8xL29sZF9tYW5faGFwcHlcIiwgXCJvbGRfbWFuL2xldmVsXzE5XzEvb2xkX21hbl93ZWxjb21lXCIsIDAuMyk7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMS9tY19saWZ0aW5nX2Zpc2hcIiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMS9tY19saWZ0aW5nX2Zpc2hcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5MSUtFLCBmYWxzZSwgMC4zKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8xL29sZF9tYW5faGFwcHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLmFkZEFuaW1hdGlvbigwLCBcIm9sZF9tYW4vbGV2ZWxfMTlfMS9vbGRfbWFuX3dlbGNvbWVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJvbGRfbWFuL2xldmVsXzE5XzEvb2xkX21hbl93ZWxjb21lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJlbW90aW9uL2hhcHB5XzJcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLmx1cGluLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGFzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJ1bk9wdGlvbjIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMS9tY19qdW1waW5nX2JvYXRcIiwgZmFsc2UpO1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5TV09PU0gsIGZhbHNlLCAwKTtcbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS5wYXJhbGxlbChcbiAgICAgICAgICAgIHR3ZWVuKCkudG8oMC41LCB7c2NhbGVYOiAtMC44fSksXG4gICAgICAgICAgICB0d2VlbigpLnRvKDAuNSwge3NjYWxlWTogMC44fSksXG4gICAgICAgICAgICB0d2VlbigpLmJlemllclRvKDAuNSwgY2MudjIodGhpcy5sdXBpbi5ub2RlLngsIHRoaXMubHVwaW4ubm9kZS55KSwgY2MudjIoLTEwMCwgLTQ1MCksIGNjLnYyKC0yMDAsIC02ODUpKVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuc2NhbGVYID0gLTAuODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLnNldEFuaW1hdGlvbigwLCBcInBvbGljZS9sZXZlbF8xMi9vbGRfbWFuX2F0dGFja1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkZSRUVaRSwgZmFsc2UsIDAuNik7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkuZGVsYXkoMC42KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4ubm9kZS5zY2FsZVggPSAtMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMS9tY19nZXRfaGl0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5XQVRFUiwgZmFsc2UsIDAuNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMS9tY19nZXRfaGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkuYnkoMiwge3Bvc2l0aW9uOiBjYy52MygwLCAtNTAwKX0sIHtlYXNpbmc6IFwiY3ViaWNPdXRcIn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dGYWlsKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRNaXgoXCJsZXZlbF8xOV8xL21jX3N3aW1faWRsZVwiLCBcImxldmVsXzE5XzEvbWNfc3dpbV9ndW5cIiwgMC4zKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xOV8xL21jX3N3aW1fZ3VuXCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJlbW90aW9uL3NpbmlzdGVyXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMS9tY19zd2ltX2d1blwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELlBFRUssIGZhbHNlLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8xL29sZF9tYW5fc2NhcmVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX3NoYXJrLm5vZGUpLmRlbGF5KDEpLnRvKDEsIHtwb3NpdGlvbjogY2MudjMoMjAwLCAtMTAzMCl9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyay50aW1lU2NhbGUgPSAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CSVRFLCBmYWxzZSwgMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NoYXJrLnNldEFuaW1hdGlvbigwLCBcInNoYXJrX2F0dGFja1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyay5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJzaGFya19hdHRhY2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyay5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0d2Vlbih0aGlzLl9zaGFyay5ub2RlKS5ieSgwLjIsIHtwb3NpdGlvbjogY2MudjMoMjAwLCAtNTAwKX0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMilcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS50bygwLjIsIHtwb3NpdGlvbjogY2MudjMoNzY1LCAtMTU2MCl9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmFpbCh0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Levels/Level19/Script/Level19_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03e08dAn0BI86bPNn7Ydl0c', 'Level19_2');
// Levels/Level19/Script/Level19_2.ts

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
var LevelBase_1 = require("../../../Scripts/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var SOUND;
(function (SOUND) {
    SOUND[SOUND["DIZZY"] = 0] = "DIZZY";
    SOUND[SOUND["SWOOSH"] = 1] = "SWOOSH";
    SOUND[SOUND["WATER"] = 2] = "WATER";
    SOUND[SOUND["BOAT1"] = 3] = "BOAT1";
    SOUND[SOUND["BOAT2"] = 4] = "BOAT2";
    SOUND[SOUND["EXPLOSION"] = 5] = "EXPLOSION";
    SOUND[SOUND["KNIFE_HIT"] = 6] = "KNIFE_HIT";
    SOUND[SOUND["SCREAM"] = 7] = "SCREAM";
    SOUND[SOUND["SQUIRT"] = 8] = "SQUIRT";
    SOUND[SOUND["THROW"] = 9] = "THROW";
})(SOUND || (SOUND = {}));
var Level19_2 = /** @class */ (function (_super) {
    __extends(Level19_2, _super);
    function Level19_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level19_2.prototype.initStage = function () {
        _super.prototype.initStage.call(this);
        this.setStatus();
        this.setAction();
    };
    Level19_2.prototype.setStatus = function () {
        this._police = this.otherSpine[0];
        this._light = this.otherSprite[0];
        this._light.node.position = cc.v3(-510, -130);
        this._light.node.active = false;
        this.lupin.clearTrack(1);
        this.setLupin(cc.v2(-1000, -470), "level_19_2/mc_idle", null);
        this.setOtherSpine(this._police, cc.v2(-1000, -675), "police/level_19_2/idle_cano", null);
    };
    Level19_2.prototype.setAction = function () {
        var _this = this;
        this.playSound(SOUND.BOAT1, false, 1);
        tween(this.lupin.node).delay(1).to(0.8, { position: cc.v3(160, -165) })
            .call(function () {
            _this.playSound(SOUND.BOAT2, false, 0);
            tween(_this._police.node).to(0.6, { position: cc.v3(-320, -390) })
                .call(function () {
                _this.showOptionContainer(true);
            }).start();
        })
            .start();
    };
    Level19_2.prototype.runOption1 = function () {
        var _this = this;
        tween(this.lupin.node).to(0.5, { position: cc.v3(260, -365) })
            .call(function () {
            _this.lupin.timeScale = 1.5;
            _this.lupin.setAnimation(0, "level_19_2/mc_flashlight", false);
            _this.lupin.setCompleteListener(function (track) {
                if (track.animation.name == "level_19_2/mc_flashlight") {
                    _this.lupin.setCompleteListener(null);
                    _this._light.node.active = true;
                    _this.canoFail();
                }
            });
        })
            .start();
    };
    Level19_2.prototype.runOption2 = function () {
        var _this = this;
        tween(this.lupin.node).to(0.8, { position: cc.v3(460, -345) })
            .call(function () {
            tween(_this._police.node).to(0.5, { position: cc.v3(-400, -320) }).start();
            _this.lupin.timeScale = 1.5;
            _this.lupin.setAnimation(0, "level_19_2/mc_ca_kiem", false);
            _this.playSound(SOUND.THROW, false, 0.8);
            tween(_this._police.node).delay(1)
                .call(function () {
                _this.lupin.setAnimation(1, "emotion/happy_2", true);
                _this._police.timeScale = 1.5;
                _this.playSound(SOUND.KNIFE_HIT, false, 0);
                _this.playSound(SOUND.WATER, false, 0.7);
                _this._police.setAnimation(0, "police/level_19_2/option2_cakiem", false);
                _this._police.setCompleteListener(function (track) {
                    if (track.animation.name == "police/level_19_2/option2_cakiem") {
                        tween(_this.node).delay(0.5)
                            .call(function () {
                            _this.onPass();
                        })
                            .start();
                    }
                });
            })
                .start();
        })
            .start();
    };
    Level19_2.prototype.runOption3 = function () {
        var _this = this;
        tween(this.lupin.node).to(0.8, { position: cc.v3(260, -365) })
            .call(function () {
            _this.playSound(SOUND.SQUIRT, false, 1.2);
            _this.playSound(SOUND.SQUIRT, false, 1.4);
            _this.playSound(SOUND.SQUIRT, false, 1.6);
            _this.playSound(SOUND.SQUIRT, false, 1.8);
            _this.lupin.setAnimation(0, "level_19_2/mc_con_muc", false);
            _this.lupin.setCompleteListener(function (track) {
                if (track.animation.name == "level_19_2/mc_con_muc") {
                    _this.lupin.setCompleteListener(null);
                    _this.canoFail();
                }
            });
        })
            .start();
    };
    Level19_2.prototype.canoFail = function () {
        var _this = this;
        tween(this._police.node).call(function () {
            _this.playSound(SOUND.SCREAM, false, 0);
            _this.playSound(SOUND.BOAT2, false, 0);
            _this._police.setAnimation(0, "police/level_19_2/option1_denpin", false);
            _this._police.setCompleteListener(function (track) {
                if (track.animation.name == "police/level_19_2/option1_denpin") {
                    _this._police.setCompleteListener(null);
                    _this._light.node.active = false;
                    _this.playSound(SOUND.EXPLOSION, false, 0);
                    _this.lupin.setAnimation(0, "fx/explosive2", false);
                    _this._police.setAnimation(0, "police/level_19_2/cano_dam_nhau", false);
                    tween(_this.node).delay(1)
                        .call(function () {
                        _this.showContinue();
                    })
                        .start();
                }
            });
        })
            // .to(0.5, {position: cc.v3()})
            .start();
    };
    Level19_2 = __decorate([
        ccclass
    ], Level19_2);
    return Level19_2;
}(LevelBase_1.default));
exports.default = Level19_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9MZXZlbHMvTGV2ZWwxOS9TY3JpcHQvTGV2ZWwxOV8yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRXZCLElBQUssS0FXSjtBQVhELFdBQUssS0FBSztJQUNOLG1DQUFLLENBQUE7SUFDTCxxQ0FBTSxDQUFBO0lBQ04sbUNBQUssQ0FBQTtJQUNMLG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0lBQ0wsMkNBQVMsQ0FBQTtJQUNULDJDQUFTLENBQUE7SUFDVCxxQ0FBTSxDQUFBO0lBQ04scUNBQU0sQ0FBQTtJQUNOLG1DQUFLLENBQUE7QUFDVCxDQUFDLEVBWEksS0FBSyxLQUFMLEtBQUssUUFXVDtBQUdEO0lBQXVDLDZCQUFTO0lBQWhEOztJQXdIQSxDQUFDO0lBbkhHLDZCQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFD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Qzt5QkFDcEIsSUFBSSxDQUFDO3dCQUNGLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDO3lCQUNELEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDO1lBQ0YsZ0NBQWdDO2FBQy9CLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUF2SGdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3SDdCO0lBQUQsZ0JBQUM7Q0F4SEQsQUF3SEMsQ0F4SHNDLG1CQUFTLEdBd0gvQztrQkF4SG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi8uLi8uLi9TY3JpcHRzL0xldmVsQmFzZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IHR3ZWVuID0gY2MudHdlZW47XG5cbmVudW0gU09VTkQge1xuICAgIERJWlpZLFxuICAgIFNXT09TSCxcbiAgICBXQVRFUixcbiAgICBCT0FUMSxcbiAgICBCT0FUMixcbiAgICBFWFBMT1NJT04sXG4gICAgS05JRkVfSElULFxuICAgIFNDUkVBTSxcbiAgICBTUVVJUlQsXG4gICAgVEhST1dcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMTlfMiBleHRlbmRzIExldmVsQmFzZSB7XG5cbiAgICBwcml2YXRlIF9wb2xpY2U7XG4gICAgcHJpdmF0ZSBfbGlnaHQ7XG5cbiAgICBpbml0U3RhZ2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRTdGFnZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xuICAgIH1cblxuICAgIHNldFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9saWNlID0gdGhpcy5vdGhlclNwaW5lWzBdO1xuICAgICAgICB0aGlzLl9saWdodCA9IHRoaXMub3RoZXJTcHJpdGVbMF07XG4gICAgICAgIHRoaXMuX2xpZ2h0Lm5vZGUucG9zaXRpb24gPSBjYy52MygtNTEwLCAtMTMwKTtcbiAgICAgICAgdGhpcy5fbGlnaHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sdXBpbi5jbGVhclRyYWNrKDEpO1xuICAgICAgICB0aGlzLnNldEx1cGluKGNjLnYyKC0xMDAwLCAtNDcwKSwgXCJsZXZlbF8xOV8yL21jX2lkbGVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2V0T3RoZXJTcGluZSh0aGlzLl9wb2xpY2UsIGNjLnYyKC0xMDAwLCAtNjc1KSwgXCJwb2xpY2UvbGV2ZWxfMTlfMi9pZGxlX2Nhbm9cIiwgbnVsbCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CT0FUMSwgZmFsc2UsIDEpO1xuICAgICAgICB0d2Vlbih0aGlzLmx1cGluLm5vZGUpLmRlbGF5KDEpLnRvKDAuOCwge3Bvc2l0aW9uOiBjYy52MygxNjAsIC0xNjUpfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CT0FUMiwgZmFsc2UsIDApO1xuICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX3BvbGljZS5ub2RlKS50bygwLjYsIHtwb3NpdGlvbjogY2MudjMoLTMyMCwgLTM5MCl9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Db250YWluZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMSgpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoMjYwLCAtMzY1KX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi50aW1lU2NhbGUgPSAxLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xOV8yL21jX2ZsYXNobGlnaHRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcih0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSBcImxldmVsXzE5XzIvbWNfZmxhc2hsaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saWdodC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbm9GYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHJ1bk9wdGlvbjIoKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkudG8oMC44LCB7cG9zaXRpb246IGNjLnYzKDQ2MCwgLTM0NSl9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX3BvbGljZS5ub2RlKS50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoLTQwMCwgLTMyMCl9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4udGltZVNjYWxlID0gMS41O1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwibGV2ZWxfMTlfMi9tY19jYV9raWVtXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5USFJPVywgZmFsc2UsIDAuOCk7XG4gICAgICAgICAgICAgICAgdHdlZW4odGhpcy5fcG9saWNlLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDEsIFwiZW1vdGlvbi9oYXBweV8yXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9saWNlLnRpbWVTY2FsZSA9IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELktOSUZFX0hJVCwgZmFsc2UsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuV0FURVIsIGZhbHNlLCAwLjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9saWNlLnNldEFuaW1hdGlvbigwLCBcInBvbGljZS9sZXZlbF8xOV8yL29wdGlvbjJfY2FraWVtXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BvbGljZS5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJwb2xpY2UvbGV2ZWxfMTlfMi9vcHRpb24yX2Nha2llbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25QYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMygpOiB2b2lkIHtcbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS50bygwLjgsIHtwb3NpdGlvbjogY2MudjMoMjYwLCAtMzY1KX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuU1FVSVJULCBmYWxzZSwgMS4yKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5TUVVJUlQsIGZhbHNlLCAxLjQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELlNRVUlSVCwgZmFsc2UsIDEuNik7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuU1FVSVJULCBmYWxzZSwgMS44KTtcbiAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCBcImxldmVsXzE5XzIvbWNfY29uX211Y1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09IFwibGV2ZWxfMTlfMi9tY19jb25fbXVjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fub0ZhaWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgY2Fub0ZhaWwoKTogdm9pZCB7XG4gICAgICAgIHR3ZWVuKHRoaXMuX3BvbGljZS5ub2RlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5TQ1JFQU0sIGZhbHNlLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CT0FUMiwgZmFsc2UsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BvbGljZS5zZXRBbmltYXRpb24oMCwgXCJwb2xpY2UvbGV2ZWxfMTlfMi9vcHRpb24xX2RlbnBpblwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9saWNlLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJwb2xpY2UvbGV2ZWxfMTlfMi9vcHRpb24xX2RlbnBpblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb2xpY2Uuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpZ2h0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5FWFBMT1NJT04sIGZhbHNlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwiZngvZXhwbG9zaXZlMlwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb2xpY2Uuc2V0QW5pbWF0aW9uKDAsIFwicG9saWNlL2xldmVsXzE5XzIvY2Fub19kYW1fbmhhdVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIC50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoKX0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Levels/Level19/Script/Level19_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46b66MHnGhB3bLzrfdPWACZ', 'Level19_3');
// Levels/Level19/Script/Level19_3.ts

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
var LevelBase_1 = require("../../../Scripts/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tween = cc.tween;
var SOUND;
(function (SOUND) {
    SOUND[SOUND["DIZZY"] = 0] = "DIZZY";
    SOUND[SOUND["SWOOSH"] = 1] = "SWOOSH";
    SOUND[SOUND["WATER"] = 2] = "WATER";
    SOUND[SOUND["BREAK"] = 3] = "BREAK";
    SOUND[SOUND["GUN"] = 4] = "GUN";
    SOUND[SOUND["KISS"] = 5] = "KISS";
    SOUND[SOUND["SAX"] = 6] = "SAX";
    SOUND[SOUND["SPARK"] = 7] = "SPARK";
    SOUND[SOUND["BOAT1"] = 8] = "BOAT1";
})(SOUND || (SOUND = {}));
var Level19_3 = /** @class */ (function (_super) {
    __extends(Level19_3, _super);
    function Level19_3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level19_3.prototype.initStage = function () {
        _super.prototype.initStage.call(this);
        this.setStatus();
        this.setAction();
    };
    Level19_3.prototype.setStatus = function () {
        this._oldMan = this.otherSpine[0];
        this._oldWoman = this.otherSpine[1];
        this._cano = this.otherSpine[2];
        this._fishtank = this.otherSpine[3];
        this._fishtank.node.active = false;
        this._fishtank.node.position = cc.v3(128, -33);
        this.setLupin(cc.v2(-1000, -600), "level_19_2/mc_idle", null);
        this._oldWoman.node.active = false;
        this._oldWoman.node.position = cc.v3(213, -496);
        this._oldMan.node.active = false;
        this._oldMan.node.angle = 0;
        this.setOtherSpine(this._oldMan, cc.v2(197, -596), "police/level_12/old_man_run", null);
        this._cano.node.active = false;
        this.lupin.setMix("emotion/idle", "general/stand_thinking", 0.3);
        this._oldMan.setMix("police/level_12/old_man_run", "old_man/level_19_3/oldman_idle", 0.3);
        this._oldMan.setMix("old_man/level_19_3/oldman_shake_head", "old_man/level_19_3/old_man_aim_idle", 0.3);
    };
    Level19_3.prototype.setAction = function () {
        var _this = this;
        this.playSound(SOUND.BOAT1, false, 0);
        tween(this.lupin.node).to(2.5, { position: cc.v3(30, -622) })
            .call(function () {
            _this._cano.node.active = true;
            _this._oldMan.node.active = true;
            _this.lupin.setAnimation(0, "emotion/idle", true);
            _this._oldMan.setAnimation(0, "police/level_12/old_man_run", true);
            _this._oldMan.node.scaleX = -0.7;
            tween(_this._oldMan.node).to(2, { position: cc.v3(415, -410) })
                .call(function () {
                _this._oldMan.node.scaleX = 0.7;
                _this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_idle", true);
                _this.lupin.setAnimation(0, "general/stand_thinking", true);
                _this.lupin.setAnimation(1, "emotion/thinking", true);
            })
                .delay(2)
                .call(function () {
                _this.showOptionContainer(true);
            })
                .start();
        }).start();
    };
    Level19_3.prototype.runOption1 = function () {
        var _this = this;
        this.lupin.setMix("level_19_3/mc_swimwear", "level_1/die", 0.3);
        this.playSound(SOUND.SWOOSH, false, 1);
        this.lupin.setAnimation(0, "level_19_3/mc_swimwear", false);
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_3/mc_swimwear") {
                _this.lupin.setCompleteListener(null);
                _this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_shake_head", false);
                _this._oldMan.setCompleteListener(function (track) {
                    if (track.animation.name == "old_man/level_19_3/oldman_shake_head") {
                        _this._oldMan.setCompleteListener(null);
                        _this._oldMan.timeScale = 1.5;
                        _this.playSound(SOUND.GUN, false, 1.1);
                        _this._oldMan.setAnimation(0, "old_man/level_19_3/old_man_aim_idle", false);
                        _this._oldMan.addAnimation(0, "old_man/level_19_3/old_man_shoot", false);
                        tween(_this.lupin.node).delay(1.1)
                            .call(function () {
                            _this._oldMan.setCompleteListener(null);
                            _this.lupin.clearTrack(1);
                            _this.playSound(SOUND.DIZZY, false, 0.1);
                            _this.lupin.setAnimation(0, "level_1/die", false);
                            _this.lupin.node.position = cc.v3(-150, -520);
                            tween(_this.node).delay(2)
                                .call(function () {
                                _this.showContinue();
                            })
                                .start();
                        })
                            .start();
                    }
                });
            }
        });
    };
    Level19_3.prototype.runOption2 = function () {
        var _this = this;
        this.lupin.setMix("level_19_3/mc_fishtank", "level_19_3/mc_fishtank_fall", 0.3);
        this.lupin.setAnimation(1, "level_19_3/mc_fishtank", false);
        tween(this.lupin.node).delay(2)
            .call(function () {
            _this.lupin.setAnimation(0, "general/walk", true);
        })
            .to(1, { position: cc.v3(170, -570) })
            .call(function () {
            _this.lupin.setAnimation(0, "emotion/idle", false);
            _this.playSound(SOUND.BREAK, false, 0.1);
            _this.lupin.setAnimation(1, "level_19_3/mc_fishtank_fall", false);
            _this._fishtank.node.active = true;
            _this._fishtank.setAnimation(0, "level_19/fishtank_fall", false);
            _this.lupin.setCompleteListener(function (track) {
                if (track.animation.name == "level_19_3/mc_fishtank_fall") {
                    _this.lupin.setCompleteListener(null);
                    _this._oldMan.timeScale = 1.5;
                    _this.playSound(SOUND.GUN, false, 1.1);
                    _this._oldMan.setAnimation(0, "old_man/level_19_3/old_man_aim_idle", false);
                    _this._oldMan.addAnimation(0, "old_man/level_19_3/old_man_shoot", false);
                    tween(_this.lupin.node).delay(1.1)
                        .call(function () {
                        _this._oldMan.setCompleteListener(null);
                        _this.lupin.clearTrack(1);
                        _this.playSound(SOUND.DIZZY, false, 0.1);
                        _this.lupin.setAnimation(0, "level_1/die", false);
                        _this._fishtank.node.x = 550;
                        _this.lupin.node.position = cc.v3(-150, -520);
                        tween(_this.node).delay(2)
                            .call(function () {
                            _this.showContinue();
                        })
                            .start();
                    })
                        .start();
                }
            });
        })
            .start();
    };
    Level19_3.prototype.runOption3 = function () {
        var _this = this;
        this.lupin.setMix("level_19_3/mc_introduce", "general/stand_nervous", 0.3);
        this.lupin.clearTrack(1);
        this.playSound(SOUND.SPARK, false, 0.1);
        this.lupin.setAnimation(0, "level_19_3/mc_introduce", false);
        tween(this.node).delay(0.3)
            .call(function () {
            var count = 0;
            _this.playSound(SOUND.KISS, false, 0.3);
            _this.playSound(SOUND.KISS, false, 1.3);
            _this._oldWoman.node.active = true;
            _this._oldWoman.node.scaleX = -0.7;
            _this._oldWoman.setAnimation(0, "old_man/level_19_3/bigwife_idle", true);
            _this._oldWoman.setCompleteListener(function (track) {
                if (track.animation.name == "old_man/level_19_3/bigwife_idle") {
                    ++count;
                    if (count == 2) {
                        _this._oldWoman.setCompleteListener(null);
                        _this._oldWoman.setAnimation(0, "old_man/level_19_3/bigwife_carry_oldman", true);
                        tween(_this._oldWoman.node).to(2, { position: cc.v3(400, -420) })
                            .call(function () {
                            tween(_this._oldMan.node).parallel(tween().to(0.2, { position: cc.v3(305, -350) }), tween().to(0.2, { angle: -60 }))
                                .call(function () {
                                _this.playSound(SOUND.SAX, false, 0);
                            })
                                .to(1, { position: cc.v3(370, -320) })
                                .start();
                        })
                            .to(1, { position: cc.v3(465, -385) })
                            .delay(0.5)
                            .call(function () {
                            _this.showSuccess(_this.selected);
                        })
                            .start();
                    }
                    else if (count == 1) {
                        _this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_love", true);
                    }
                }
            });
        })
            .start();
        this.lupin.setCompleteListener(function (track) {
            if (track.animation.name == "level_19_3/mc_introduce") {
                _this.lupin.setCompleteListener(null);
                _this.lupin.setAnimation(0, "general/stand_nervous", true);
                _this.lupin.setAnimation(1, "emotion/happy_2", true);
            }
        });
    };
    Level19_3 = __decorate([
        ccclass
    ], Level19_3);
    return Level19_3;
}(LevelBase_1.default));
exports.default = Level19_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9MZXZlbHMvTGV2ZWwxOS9TY3JpcHQvTGV2ZWwxOV8zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUc3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBR3ZCLElBQUssS0FVSjtBQVZELFdBQUssS0FBSztJQUNOLG1DQUFLLENBQUE7SUFDTCxxQ0FBTSxDQUFBO0lBQ04sbUNBQUssQ0FBQTtJQUNMLG1DQUFLLENBQUE7SUFDTCwrQkFBRyxDQUFBO0lBQ0gsaUNBQUksQ0FBQTtJQUNKLCtCQUFHLENBQUE7SUFDSCxtQ0FBSyxDQUFBO0lBQ0wsbUNBQUssQ0FBQTtBQUNULENBQUMsRUFWSSxLQUFLLEtBQUwsS0FBSyxRQVVUO0FBR0Q7SUFBdUMsNkJBQVM7SUFBaEQ7O0lBMExBLENBQUM7SUFuTEcsNkJBQVMsR0FBVDtRQUNJLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO2FBQ3RELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7aUJBQ3ZELElBQUksQ0FBQztnQkFDRixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JFLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksQ0FBQztnQkFDRixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDO2lCQUNELEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQUEsaUJBaUNDO1FBaENHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFVBQUEsS0FBSztZQUNoQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLHdCQUF3QixFQUFFO2dCQUNsRCxLQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsc0NBQXNDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzVFLEtBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsVUFBQSxLQUFLO29CQUNsQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLHNDQUFzQyxFQUFFO3dCQUNoRSxLQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN2QyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDM0UsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUN4RSxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzZCQUM1QixJQUFJLENBQUM7NEJBQ0YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQ3hDLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQ2pELEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzdDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQ0FDcEIsSUFBSSxDQUFDO2dDQUNGLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs0QkFDeEIsQ0FBQyxDQUFDO2lDQUNELEtBQUssRUFBRSxDQUFDO3dCQUNqQixDQUFDLENBQUM7NkJBQ0QsS0FBSyxFQUFFLENBQUM7cUJBQ2hCO2dCQUNMLENBQUMsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQUEsaUJBd0NDO1FBdkNHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzFCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7YUFDbkMsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFVBQUEsS0FBSztnQkFDaEMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSw2QkFBNkIsRUFBRTtvQkFDdkQsS0FBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzNFLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDeEUsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzt5QkFDNUIsSUFBSSxDQUFDO3dCQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QyxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNqRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NkJBQ3BCLElBQUksQ0FBQzs0QkFDRixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQzs2QkFDRCxLQUFLLEVBQUUsQ0FBQztvQkFDakIsQ0FBQyxDQUFDO3lCQUNELEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFBQSxpQkFvREM7UUFuREcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ3RCLElBQUksQ0FBQztZQUNGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFBLEtBQUs7Z0JBQ3BDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsS0FBSyxDQUFDO29CQUNSLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFDWixLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hGLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDOzZCQUN6RCxJQUFJLENBQUM7NEJBQ0YsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUN6QixLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUM3QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FDaEM7aUNBQ0EsSUFBSSxDQUFDO2dDQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQztpQ0FDRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztpQ0FDbkMsS0FBSyxFQUFFLENBQUM7d0JBQ2pCLENBQUMsQ0FBQzs2QkFDRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQzs2QkFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs2QkFDVixJQUFJLENBQUM7NEJBQ0YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3BDLENBQUMsQ0FBQzs2QkFDRCxLQUFLLEVBQUUsQ0FBQztxQkFDaEI7eUJBQ0ksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO3dCQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ3hFO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsVUFBQSxLQUFLO1lBQ2hDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUkseUJBQXlCLEVBQUU7Z0JBQ25ELEtBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3ZEO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBekxnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMEw3QjtJQUFELGdCQUFDO0NBMUxELEFBMExDLENBMUxzQyxtQkFBUyxHQTBML0M7a0JBMUxvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0cy9MZXZlbEJhc2VcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IHR3ZWVuID0gY2MudHdlZW47XG5cblxuZW51bSBTT1VORCB7XG4gICAgRElaWlksXG4gICAgU1dPT1NILFxuICAgIFdBVEVSLFxuICAgIEJSRUFLLFxuICAgIEdVTixcbiAgICBLSVNTLFxuICAgIFNBWCxcbiAgICBTUEFSSyxcbiAgICBCT0FUMVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxOV8zIGV4dGVuZHMgTGV2ZWxCYXNlIHtcblxuICAgIHByaXZhdGUgX29sZE1hbjtcbiAgICBwcml2YXRlIF9vbGRXb21hbjtcbiAgICBwcml2YXRlIF9jYW5vO1xuICAgIHByaXZhdGUgX2Zpc2h0YW5rO1xuXG4gICAgaW5pdFN0YWdlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5pbml0U3RhZ2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29sZE1hbiA9IHRoaXMub3RoZXJTcGluZVswXTtcbiAgICAgICAgdGhpcy5fb2xkV29tYW4gPSB0aGlzLm90aGVyU3BpbmVbMV07XG4gICAgICAgIHRoaXMuX2Nhbm8gPSB0aGlzLm90aGVyU3BpbmVbMl07XG4gICAgICAgIHRoaXMuX2Zpc2h0YW5rID0gdGhpcy5vdGhlclNwaW5lWzNdO1xuICAgICAgICB0aGlzLl9maXNodGFuay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9maXNodGFuay5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTI4LCAtMzMpO1xuICAgICAgICB0aGlzLnNldEx1cGluKGNjLnYyKC0xMDAwLCAtNjAwKSwgXCJsZXZlbF8xOV8yL21jX2lkbGVcIiwgbnVsbCk7XG4gICAgICAgIHRoaXMuX29sZFdvbWFuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29sZFdvbWFuLm5vZGUucG9zaXRpb24gPSBjYy52MygyMTMsIC00OTYpO1xuICAgICAgICB0aGlzLl9vbGRNYW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLnNldE90aGVyU3BpbmUodGhpcy5fb2xkTWFuLCBjYy52MigxOTcsIC01OTYpLCBcInBvbGljZS9sZXZlbF8xMi9vbGRfbWFuX3J1blwiLCBudWxsKTtcbiAgICAgICAgdGhpcy5fY2Fuby5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmx1cGluLnNldE1peChcImVtb3Rpb24vaWRsZVwiLCBcImdlbmVyYWwvc3RhbmRfdGhpbmtpbmdcIiwgMC4zKTtcbiAgICAgICAgdGhpcy5fb2xkTWFuLnNldE1peChcInBvbGljZS9sZXZlbF8xMi9vbGRfbWFuX3J1blwiLCBcIm9sZF9tYW4vbGV2ZWxfMTlfMy9vbGRtYW5faWRsZVwiLCAwLjMpO1xuICAgICAgICB0aGlzLl9vbGRNYW4uc2V0TWl4KFwib2xkX21hbi9sZXZlbF8xOV8zL29sZG1hbl9zaGFrZV9oZWFkXCIsIFwib2xkX21hbi9sZXZlbF8xOV8zL29sZF9tYW5fYWltX2lkbGVcIiwgMC4zKTtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkJPQVQxLCBmYWxzZSwgMCk7XG4gICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkudG8oMi41LCB7cG9zaXRpb246IGNjLnYzKDMwLCAtNjIyKX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2Fuby5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCBcImVtb3Rpb24vaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwicG9saWNlL2xldmVsXzEyL29sZF9tYW5fcnVuXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi5ub2RlLnNjYWxlWCA9IC0wLjc7XG4gICAgICAgICAgICAgICAgdHdlZW4odGhpcy5fb2xkTWFuLm5vZGUpLnRvKDIsIHtwb3NpdGlvbjogY2MudjMoNDE1LCAtNDEwKX0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi5ub2RlLnNjYWxlWCA9IDAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi5zZXRBbmltYXRpb24oMCwgXCJvbGRfbWFuL2xldmVsXzE5XzMvb2xkbWFuX2lkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCBcImdlbmVyYWwvc3RhbmRfdGhpbmtpbmdcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigxLCBcImVtb3Rpb24vdGhpbmtpbmdcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgyKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Db250YWluZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBydW5PcHRpb24xKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmx1cGluLnNldE1peChcImxldmVsXzE5XzMvbWNfc3dpbXdlYXJcIiwgXCJsZXZlbF8xL2RpZVwiLCAwLjMpO1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5TV09PU0gsIGZhbHNlLCAxKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xOV8zL21jX3N3aW13ZWFyXCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSBcImxldmVsXzE5XzMvbWNfc3dpbXdlYXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8zL29sZG1hbl9zaGFrZV9oZWFkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0Q29tcGxldGVMaXN0ZW5lcih0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSBcIm9sZF9tYW4vbGV2ZWxfMTlfMy9vbGRtYW5fc2hha2VfaGVhZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi50aW1lU2NhbGUgPSAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5HVU4sIGZhbHNlLCAxLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLnNldEFuaW1hdGlvbigwLCBcIm9sZF9tYW4vbGV2ZWxfMTlfMy9vbGRfbWFuX2FpbV9pZGxlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi5hZGRBbmltYXRpb24oMCwgXCJvbGRfbWFuL2xldmVsXzE5XzMvb2xkX21hbl9zaG9vdFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLmx1cGluLm5vZGUpLmRlbGF5KDEuMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZE1hbi5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLmNsZWFyVHJhY2soMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkRJWlpZLCBmYWxzZSwgMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xL2RpZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0xNTAsIC01MjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBydW5PcHRpb24yKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmx1cGluLnNldE1peChcImxldmVsXzE5XzMvbWNfZmlzaHRhbmtcIiwgXCJsZXZlbF8xOV8zL21jX2Zpc2h0YW5rX2ZhbGxcIiwgMC4zKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJsZXZlbF8xOV8zL21jX2Zpc2h0YW5rXCIsIGZhbHNlKTtcbiAgICAgICAgdHdlZW4odGhpcy5sdXBpbi5ub2RlKS5kZWxheSgyKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwiZ2VuZXJhbC93YWxrXCIsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygxLCB7cG9zaXRpb246IGNjLnYzKDE3MCwgLTU3MCl9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uc2V0QW5pbWF0aW9uKDAsIFwiZW1vdGlvbi9pZGxlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZChTT1VORC5CUkVBSywgZmFsc2UsIDAuMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJsZXZlbF8xOV8zL21jX2Zpc2h0YW5rX2ZhbGxcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Zpc2h0YW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9maXNodGFuay5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xOS9maXNodGFua19mYWxsXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJsZXZlbF8xOV8zL21jX2Zpc2h0YW5rX2ZhbGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLnRpbWVTY2FsZSA9IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELkdVTiwgZmFsc2UsIDEuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8zL29sZF9tYW5fYWltX2lkbGVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLmFkZEFuaW1hdGlvbigwLCBcIm9sZF9tYW4vbGV2ZWxfMTlfMy9vbGRfbWFuX3Nob290XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubHVwaW4ubm9kZSkuZGVsYXkoMS4xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkTWFuLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHVwaW4uY2xlYXJUcmFjaygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuRElaWlksIGZhbHNlLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldEFuaW1hdGlvbigwLCBcImxldmVsXzEvZGllXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlzaHRhbmsubm9kZS54ID0gNTUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx1cGluLm5vZGUucG9zaXRpb24gPSBjYy52MygtMTUwLCAtNTIwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4odGhpcy5ub2RlKS5kZWxheSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcnVuT3B0aW9uMygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRNaXgoXCJsZXZlbF8xOV8zL21jX2ludHJvZHVjZVwiLCBcImdlbmVyYWwvc3RhbmRfbmVydm91c1wiLCAwLjMpO1xuICAgICAgICB0aGlzLmx1cGluLmNsZWFyVHJhY2soMSk7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELlNQQVJLLCBmYWxzZSwgMC4xKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJsZXZlbF8xOV8zL21jX2ludHJvZHVjZVwiLCBmYWxzZSk7XG4gICAgICAgIHR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC4zKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuS0lTUywgZmFsc2UsIDAuMyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoU09VTkQuS0lTUywgZmFsc2UsIDEuMyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkV29tYW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX29sZFdvbWFuLm5vZGUuc2NhbGVYID0gLTAuNztcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRXb21hbi5zZXRBbmltYXRpb24oMCwgXCJvbGRfbWFuL2xldmVsXzE5XzMvYmlnd2lmZV9pZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29sZFdvbWFuLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJvbGRfbWFuL2xldmVsXzE5XzMvYmlnd2lmZV9pZGxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZFdvbWFuLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkV29tYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8zL2JpZ3dpZmVfY2Fycnlfb2xkbWFuXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX29sZFdvbWFuLm5vZGUpLnRvKDIsIHtwb3NpdGlvbjogY2MudjMoNDAwLCAtNDIwKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMuX29sZE1hbi5ub2RlKS5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50bygwLjIsIHtwb3NpdGlvbjogY2MudjMoMzA1LCAtMzUwKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2VlbigpLnRvKDAuMiwge2FuZ2xlOiAtNjB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKFNPVU5ELlNBWCwgZmFsc2UsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHtwb3NpdGlvbjogY2MudjMoMzcwLCAtMzIwKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7cG9zaXRpb246IGNjLnYzKDQ2NSwgLTM4NSl9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWNjZXNzKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbGRNYW4uc2V0QW5pbWF0aW9uKDAsIFwib2xkX21hbi9sZXZlbF8xOV8zL29sZG1hbl9sb3ZlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5sdXBpbi5zZXRDb21wbGV0ZUxpc3RlbmVyKHRyYWNrID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSBcImxldmVsXzE5XzMvbWNfaW50cm9kdWNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmx1cGluLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMCwgXCJnZW5lcmFsL3N0YW5kX25lcnZvdXNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sdXBpbi5zZXRBbmltYXRpb24oMSwgXCJlbW90aW9uL2hhcHB5XzJcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
