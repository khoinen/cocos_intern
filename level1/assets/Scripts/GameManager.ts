import Data from "./Data";
import EffectManager from "./EffectManager";
import FBInstantManager from "./FBInstantManager";
import BundleManager from "./BundleManager";

const {ccclass, property} = cc._decorator;
const tween = cc.tween;

const TOTAL_LEVEL = 19;

const VERSION = '1.3.0'

export enum SOUND {
    BG,
    CLICK,
    FAIL_STAGE,
    SUCCESS_STAGE,
    SUCCESS_LEVEL,
}

//Bật tắt Introduce
let SHOW_INTRO = true;

const lazyGetDataAsync = [];


@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Prefab)
    levels: cc.Prefab[] = [];

    @property(cc.Node)
    shadow: cc.Node = null;

    @property([cc.AudioClip])
    sounds: cc.AudioClip[] = [];

    @property(cc.Node)
    success: cc.Node = null;

    @property(cc.Node)
    fail: cc.Node = null;

    @property(cc.Node)
    ui: cc.Node = null;

    @property(cc.Node)
    shadowUI: cc.Node = null;

    @property(cc.Node)
    gameContainer: cc.Node = null;

    @property(cc.Node)
    optionContainer: cc.Node = null;

    @property(cc.Prefab)
    introducePrefab: cc.Prefab = null;

    @property(cc.Node)
    home: cc.Node = null;

    @property(cc.Prefab)
    listLevelPrefab: cc.Prefab = null;

    @property(cc.Node)
    level: cc.Node = null;

    @property(cc.Node)
    mainCamera: cc.Node = null;

    @property(cc.Prefab)
    setting: cc.Prefab = null;

    @property(cc.Node)
    noInternet: cc.Node = null;
    
    @property(cc.Prefab)
    introduce: cc.Prefab = null;

    @property(cc.Prefab)
    loading: cc.Prefab = null;

    @property(cc.Node)
    btnSetting: cc.Node = null;

    @property(cc.Prefab)
    guide: cc.Prefab = null;

    @property(cc.Prefab)
    comingSoon2: cc.Prefab = null;

    _home = null;
    _introduce: cc.Node = null;
    _listLevel: cc.Node =null;
    _loading: cc.Node = null;

    _ui = null;
    _countDown = null;
    _levelCurrent = {
        script: null,
        level: 0
    };

    _levelArray = [];
    _currentScene = null;
    _beginScene = null;
    _data = null;
    _txtMoney = null;
    currentAudioBG = null;
    _clickX4 = true;
    _selectedLevel = 0;
    _failLevelLoad = null;
    _bundleInstance = null;
    _temp: number = 0;
    firstPlay = true;

    //GameManager để quản lý việc tạo và chuyển các level
    onLoad(): void {
        this._bundleInstance = BundleManager.getInstance();
        console.log('APP VERSION: ', VERSION)
        this.ui.active = true;
        this._ui = this.ui.getComponent("UIController");
        this.shadowUI.opacity = 0;
        this.showHome();
        this.showShop(false);
        this._txtMoney = this._ui.moneyTop.getChildByName("txt_money").getComponent(cc.Label);
        this._countDown = this._ui.countDown.getComponent("CountDown5s");
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            this._data = data;
            if (this._data.unlockedLevel > 0) {
                this.firstPlay = false;
            }
            this._txtMoney.string = this._data.money;
            this._temp = this._data.unlockedLevel;
            if (this._data.unlockedLevel < TOTAL_LEVEL) {
                let path = "Level" + (this._data.unlockedLevel + 1);
                this._bundleInstance.getPrefabByName(path);
            }

            lazyGetDataAsync.forEach((lazyFunc) => {
                lazyFunc(this._data)
            })
        })
    }

    onEnable(): void {
        this._home = this.home.getComponent("HomeController");
        if (this._home)
            this._home.updateCalendar();
        this._introduce = cc.find("Canvas/Introduce");
        this.optionContainer.zIndex = cc.macro.MAX_ZINDEX - 100;
        this.home.zIndex = cc.macro.MAX_ZINDEX - 99;
        this.getDataAsync((data) => {
            this._levelCurrent.level = data.unlockedLevel;
            this._selectedLevel = data.unlockedLevel;
            if ((this._data.unlockedLevel == 0) && this.firstPlay) {
                this._ui.showGuide(true);
                this.firstPlay = false;
            }
        })
    }
    start(): void {
        this.playAudioBG();
        this._loading = cc.instantiate(this.loading);
        this.showLoading(false)
        this._loading.zIndex = cc.macro.MAX_ZINDEX;
        cc.find("Canvas").addChild(this._loading);
    }

    getDataAsync(cb) {
        if (this._data) return cb(this._data)
        lazyGetDataAsync.push(cb)
    }

    playAudioBG(): void {
        this.playSound(SOUND.BG, true);
    }
    
    stopAudioBG(): void {
        cc.audioEngine.stopMusic();
    }

    showHome(): void {
        if (this.home)
        {
            this.home.active = true;
        }
    }

    showLoading(show: boolean): void {
        this._loading.active = show;
    }

    showIntroduce(): void {
        if (this._introduce)
        {
            this.showLoading(false);
            this._introduce.active = true;
            this._introduce.zIndex = cc.macro.MAX_ZINDEX;
            this._ui.showUIIntroduce(false);
            
        }
    }

    showListLevel(): void {
        this.playSound(SOUND.CLICK, false);
        if (this._listLevel)
        {
            this._listLevel.active = true;
        }
        else
        {
            this._listLevel = cc.instantiate(this.listLevelPrefab);
            this._listLevel.zIndex = cc.macro.MAX_ZINDEX - 1;
            cc.find("Canvas").addChild(this._listLevel);
        }
        this._ui.showGuide(false);
    }

    nextIntroduce(): void {
        this.home.active = false;
        this._ui.showUIIntroduce(false);
        //Từ level 2 trở đi khi bấm vào game sẽ không xuất hiện phần Lupin bị bắt nữa
        // 0 là index tương đương level 1
        if (this._temp != 0)
            this._selectedLevel = this._temp;
        if (this._selectedLevel % 10 != 0)
        {
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
    }

    onReplay(): void {
        this.playSound(SOUND.CLICK, false);
        this._currentScene.active = false;
        this._beginScene.active = true;
    }

    onHome(): void {
        this.playSound(SOUND.CLICK, false);
        cc.Tween.stopAll();
        this.mainCamera.active = true;
        this.home.active = true;
        this.gameContainer.children.forEach(children => {
            children.active = false;
        });
        this._ui.showUIEndGame(false);
        this._ui.showUIIntroduce(true);
        this._ui.showUIContinue(false);
    }

    onNextLevel(): void {
        this.playSound(SOUND.CLICK, false);

        if (this._levelCurrent.level >= TOTAL_LEVEL) {
            this.btnSetting.active = false;
            this._ui.showUIEndGame(false)
            this._ui.showComingSoon();
            return
        }

        this.showLoading(true);

        this._temp = this._levelCurrent.level;
        let name = "Level" + (this._temp + 1);
        if (this._temp % 10 == 0) {
            this.nextIntroduce();
            return;
        }
        this._bundleInstance.getPrefabByName(name, (err, prefab) => {
            this.showLoading(false);
            if (prefab) {
                this._currentScene.active = false;
                if (this._currentScene.parent != this.gameContainer) {
                    this._currentScene.parent.active = false;
                }
                this.gameContainer.addChild(cc.instantiate(prefab));
                this._ui.showUIEndGame(false);
                let current = this._temp + 1;
                let next = this._temp + 2;
                cc.error("Current " + current);
                cc.error("Next " + next);
                this.setLevel(current, next);
                GameManager.logNextLevel(current);
                return;
            }
            console.error(err);
        })
    }

    static logEvent(eventName: string) {
    }
    static logFailed(level: number, stage: number, option: number) {
    }
    static logPassed(level: number, stage: number, option: number) {
    }
    static logLevel(level: number) {

    }
    static logNextLevel(level: number) {
    }

    initGame(level: number): void {
        GameManager.logLevel(level)
        for (let i = 0; i < this.gameContainer.children.length; ++i)
        {
            let node = this.gameContainer.children[i];
            if (node.name == ("Level" + (level + 1)))
            {
                node.active = true;
                if (node.children[0].name.includes("Level"))
                {
                    for (let children of node.children)
                    {
                        children.active = false;
                    }
                    node.children[0].active = true;
                }
                return;
            }
        }
        this.showLoading(true);
        let name = "Level" + (level + 1);
        this._bundleInstance.getPrefabByName(name, (err, prefab) => {
            this.showLoading(false);
            if (prefab) {
                let node = cc.instantiate(prefab);
                this.gameContainer.addChild(node);
                return;
            }
            console.log('get level err', err)

            this.onHome()

            if (!window.navigator.online) {
                this._ui.showAlert('NO INTERNET CONNECTION')
                return 
            }

            this._ui.showComingSoon()
            return
        })
    }

    // addLevel(level: number, cb): void {
    //     this.showLoading(true);
    //     this._bundleInstance.loadPrefabByName("Level" + (level + 1) + "/" + "Level" + (level + 1), prefab => {
    //         this.showLoading(false);
    //         cb(prefab);
    //     })
    // }
    startGame(): void {
        this.playSound(SOUND.CLICK, false);

        this.initGame(this._selectedLevel);
        // this.initGame(14);
    }

    selectLevel(level: number) {
        if (this._data.unlockedLevel == TOTAL_LEVEL && level == TOTAL_LEVEL) {
            this.showComingSoon2();
            this.playSound(SOUND.CLICK, false);
            return;
        }
        this._selectedLevel = level;
        this.gameContainer.children.forEach(level => {
            level.active = false;
        })
        if (level % 10 == 0) {
            this._temp = this._selectedLevel;
            this.nextIntroduce();
            return;
        }
        this.initGame(level);
        this._ui.showUIIntroduce(false);
        this.home.active = false;
    }
    setLevel(start: number, current: number): void {
        var startLevel = this.level.getChildByName("Start").getChildByName("txtLevel");
        startLevel.getComponent(cc.Label).string = start.toString();

        var currentLevel = this.level.getChildByName("Current").getChildByName("txtLevel");
        currentLevel.getComponent(cc.Label).string = current.toString();
    }
    
    playSound(id: number, loop: boolean):void {
        Data.getData(Data.LOCAL_KEY, (err, data) => {
            let _data = data
            if (_data.isSound && id != 0) {
                cc.audioEngine.play(this.sounds[id],loop, 1)
            }
            if (_data.isMusic && id == 0) {
                cc.audioEngine.playMusic(this.sounds[id],loop)
            }
        });
        
    }

    playStageBegin(): void {
        
    }

    addMoney(money: number, cb: Function = null): void {
        const direction = money < 0 ? -1 : 1

        if (money == 0)
        {
            return;
        }
        else 
        {
            Data.getData(Data.FACEBOOK_KEY, (err, data) => {
                this._data = data
                this._data.money += money;
                Data.saveData(this._data, Data.FACEBOOK_KEY, cb);

                tween(this._txtMoney.node).repeat(money * direction / 3,
                    tween().call(() => {
                        this._txtMoney.string = parseInt(this._txtMoney.string) + 3 * direction;
                    })
                    .delay(0.03)
                )
                .call(() => {
                    this._txtMoney.string = this._data.money;
                })
                .start();
            });
            
        }
    }

    payMoney(): void {
        this.playSound(SOUND.CLICK, false);
        this.addMoney(-200, (err) => {
            this.onPlayAgain();
        })
    }

    playClickAudio(): void {
        this.playSound(SOUND.CLICK, false);
    }
    
    //Sau khi xem xong video sẽ được x4 tiền (50 ban đầu + thêm 150)
    showVideoX4(event: cc.Event.EventCustom): void {
        if (!this._clickX4)
            return;
        this._clickX4 = false;
        this.playSound(SOUND.CLICK, false);

        GameManager.logEvent("x4RewardedVideo")

        this.addMoney(150);
        this._ui.setMoney(150);
        EffectManager.effectHideButton(event.target, 0.7);
    }
    //Sau khi xem quảng cáo sẽ cho chơi lại stage vừa fail
    showVideo(event: cc.Event.EventCustom): void {
        this.playSound(SOUND.CLICK, false);
        this._countDown.stopCountDown();
        
        GameManager.logEvent("RevivedRewaredVideo")
        this.onPlayAgain();
    }

    onPlayAgain(): void {
        this._ui.showUIEndGame(false);
        this._ui.showUIContinue(false);
        this._countDown.stopCountDown();
        this._levelCurrent.script.initStage();
    }

    onTapToStart(): void {
        this.playSound(SOUND.CLICK, false);
        this._ui.showGuide(false);
        if (this._data.unlockedLevel == TOTAL_LEVEL) {
            this.showListLevel();
            return;
        }
        if (this._failLevelLoad) {
            return
        }
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            this._temp = data.unlockedLevel
            this.nextIntroduce();
        });
    }

    onClickSetting(): void {
        this.playSound(SOUND.CLICK, false);
        let setting = cc.find("Canvas/Setting");
        if (setting)
        {
            setting.active = true;
        }
        else
        {
            setting = cc.instantiate(this.setting);
            cc.find("Canvas").addChild(setting);
        }
        this._ui.showGuide(false);
    }

    showShop(show: boolean): void {
        return
    }

    onClickReload(e) {
    }

    onShare(e) {
        FBInstantManager.getInstance().shareGame()
    }

    onInvite(e) {
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            FBInstantManager.getInstance().invitePlay({
                level: data.unlockedLevel || 1,
                playerId: '',
            });
        })
    }

    showGuide(bool: boolean): void {
        if (this._data.unlockedLevel != 0) {
            return;
        }
        
        if (this.firstPlay) {
            if (bool) {
                let guide = cc.find("Canvas/Guide");
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
                let guide = cc.find("Canvas/Guide");
                if (guide) {
                    guide.active = false;
                    this.firstPlay = false;
                }
            }
        }
    }

    showComingSoon2(): void {
        let cs2 = cc.find("Canvas/ComingSoon2");
        if (cs2) {
            cs2.active = true;
        }
        else {
            cs2 = cc.instantiate(this.comingSoon2);
            cs2.zIndex = cc.macro.MAX_ZINDEX;
            cc.find("Canvas").addChild(cs2);
        }
    }
}
