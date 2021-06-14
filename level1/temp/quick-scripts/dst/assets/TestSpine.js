
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