
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