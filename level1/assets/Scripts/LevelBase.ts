import EffectManager from "./EffectManager";
import EventManager from "./EventManager";
import GameManager from "./GameManager";
import {SOUND} from "./GameManager";
import Data from "./Data";
import BundleManager from "./BundleManager";


const {ccclass, property} = cc._decorator;

var optionContainer = null;
var optionController = null;
var ui = null;
const tween = cc.tween;

export const TOTAL_LEVEL = 19;

@ccclass
export default class LevelBase extends cc.Component {

    //Set level hiện tại cho màn chơi [0, 1,...,Max_level - 1]
    @property
    levelCurrent = 0;

    //Số stage trong 1 level
    //Dùng để hiển thị số gạch ngang xuất hiện giữa 2 nhãn level [0, 1, 2,....]
    @property
    numberStage = 0;

    //Dùng để hiển thị màu xanh các stage đã qua
    @property
    stageCurrent = 0;

    //Node này sẽ được active = true khi 
    @property(cc.Node)
    public sceneBegin: cc.Node = null;

    @property([cc.Prefab])
    public sceneOption0: cc.Prefab[] = [];

    @property([cc.Prefab])
    public sceneOption1: cc.Prefab[] = [];

    @property([cc.Prefab])
    public sceneOption2: cc.Prefab[] = [];;

    @property(cc.Node)
    background: cc.Node = null;

    @property(cc.Prefab)
    money: cc.Prefab = null;

    @property(cc.Prefab)
    line: cc.Prefab = null;

    @property(sp.Skeleton)
    lupin: sp.Skeleton = null;

    @property([sp.Skeleton])
    otherSpine: sp.Skeleton[] = [];

    @property([cc.Sprite])
    otherSprite: cc.Sprite[] = [];

    @property([cc.SpriteFrame])
    iconOption: cc.SpriteFrame[] = [];

    @property(cc.Prefab)
    next: cc.Prefab = null;

    @property(cc.Prefab)
    fishSwim: cc.Prefab = null;

    @property([cc.AudioClip])
    sounds: cc.AudioClip[] = [];

    protected selected: number = 0;

    protected currentId : number = 0;
    
    //clickOption de ngan goi ham nhieu lan khi nguoi choi click lien tuc
    protected clickOption : Boolean = true;

    protected optionScene: cc.Node[][] = [[], [], []];

    protected arrScene: cc.Node[] = [];

    protected _gameManager: GameManager = null;

    protected fail = null;
    protected success = null;
    protected shadow = null;
    protected currentLine = null;
    protected isTrue = true;

    protected _money = 50;

    protected _fishSwim = null;

    protected _line = new cc.NodePool();
    @property(cc.Node)
    camera2d: cc.Node[] = [];

    onLoad(): void {
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        optionContainer = this._gameManager.optionContainer;
        optionController = optionContainer.getComponent("OptionController");
        this.fail = this._gameManager.fail;
        this.success = this._gameManager.success;
        this.shadow = this._gameManager.shadow;
        ui = this._gameManager._ui;
        for (let camera of this.camera2d)
        {
            camera.active = false;
        }

        if (this.fishSwim && !this._fishSwim) {
            this._fishSwim = cc.instantiate(this.fishSwim)
            this._fishSwim.active = false
            this.node.addChild(this._fishSwim)
        }
    }

    onEnable(): void {
        console.log(("%c" + this.node.name), "color:blue");
        this.initOption();
        this._gameManager._levelCurrent.script = this;
        cc.log(this._gameManager._levelCurrent);
        this.node.getChildByName("Background").zIndex = cc.macro.MIN_ZINDEX;
        this.initArrayScene();
        //Khi scene ket thuc animation thi se ban dispatch
        this.addEventCustom();
        this.clickOption = true;
        this.lupin.setSkin('Lupin')
        this.initStage();
        this.showOptionContainer(false);

        this._fishSwim && (this._fishSwim.active = true)
    }

    onDisable(): void {
        this.showOptionContainer(false);
        this.removeEventCustom();
        this.resetUIResult();
        for (let node of this.node.children)
        {
            if (node.name.includes("Option"))
            {
                node.active = false;
            }
        }

        this._fishSwim && (this._fishSwim.active = false)
        this._gameManager._home.updateCalendar();
    }    

    start(): void {
        if (this.levelCurrent + 1 < TOTAL_LEVEL) {
            let next = Number(this._gameManager._levelCurrent.level + 2);
            let path = "Level" + next;
            BundleManager.getInstance().getPrefabByName(path, null);
        }
    }

    addEventCustom(): void {
        this.node.on("request_next_scene", this.nextScene, this);
        this.node.on("show_continue", this.onContinue, this);
        this.node.on("next_stage", this.nextStage, this);
        this.node.on("back_to_stage_begin", this.playStageBegin, this);
        this.node.on("next_level", this.endGame, this);
    }

    removeEventCustom(): void {
        this.node.off("request_next_scene", this.nextScene, this);
        this.node.off("show_continue", this.onContinue, this);
        this.node.off("back_to_stage_begin", this.playStageBegin, this);
        this.node.off("next_stage", this.nextStage, this);
        this.node.off("next_level", this.endGame, this);
    }

    checkNextSceneExits(index: number, option: number): cc.Node {
        switch (option)
        {
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
    }

    getInstantiate(index: number, option: number): cc.Node {
        switch (option)
        {
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
    }

    selectedButton(node) : void {
        node.getChildByName("selected").active = true;
    }

    resetUIResult(): void {
        this.shadow.opacity = 0;
        this.fail.opacity = 0;
        this.fail.scale = 10;
        this.success.opacity = 0;
        this.success.scale = 10;
    }

    endGame(event: cc.Event.EventCustom): void {
        if (this._gameManager._levelCurrent.level < TOTAL_LEVEL)
            ++this._gameManager._levelCurrent.level;
        //Mở khóa level sau
        if ( this._gameManager._levelCurrent.level > this._gameManager._data.unlockedLevel)
        {
            this._gameManager._data.unlockedLevel = this._gameManager._levelCurrent.level;
            Data.getData(Data.FACEBOOK_KEY, (err, data) => {
                data.unlockedLevel = this._gameManager._levelCurrent.level
                Data.saveData(data, Data.FACEBOOK_KEY);
            })
        }

        this.resetUIResult();
        this.showEndGame(event);
    }

    nextScene(event: cc.Event.EventCustom): void {
        this._gameManager._currentScene.active = false;
        
        var newScene = this.checkNextSceneExits(this.currentId, this.selected);
        if (newScene)
        {
            newScene.active = true;
            this._gameManager._currentScene = newScene;
            ++this.currentId;
            return;
        }

        newScene = this.getInstantiate(this.currentId, this.selected);

        if (newScene)
        {
            newScene.zIndex = -1;
            this._gameManager._currentScene = newScene;
            this.arrScene.push(newScene);
            this.scheduleOnce(() => {
                this.node.addChild(newScene);
            }, 0.2);
        }

        ++this.currentId;
    }

    nextStage(sceneName: string): void {
        if (this.next) {
            for (let children of this.node.parent.children)
            {
                children.active = false;
            }
            var scene = this.node.parent.getChildByName(this.next.name);
            if (scene)
            {
                scene.active = true;
            }
            else
            {
                scene = cc.instantiate(this.next);
                this.node.parent.addChild(scene);
            }
            
        }
    }

    initStage(): void {
        cc.audioEngine.stopAllEffects();
        this._gameManager.btnSetting.active = true;
        this.currentId = 0;
        this.clickOption = true;
        this.camera2d[0].position = cc.v3(0, 0);
        this.camera2d[0].getComponent(cc.Camera).zoomRatio = 1;
        this.background.zIndex = cc.macro.MIN_ZINDEX;
        this._gameManager.mainCamera.active = false;
        for (let camera of this.camera2d)
        {
            camera.active = true;
        }
        this.lupin.timeScale = 1;
        for (var spine of this.otherSpine)
        {
            spine.timeScale = 1;
        }
        this.background.position = cc.v3(0, 0);
        this._gameManager.optionContainer.getComponent("OptionController").resetOption();
        this._gameManager._currentScene = this.sceneBegin;
        optionController.setImageOption(this.iconOption);
        ui.showUIEndGame(false);
        this.resetUIResult();
        EffectManager.showUI(true);
        this.removeLineStage();
        this.createLineStage(this.numberStage);
        this.resultLineStage();
        //Vì index bắt đầu từ 0 nên phải +1, +2 để ra level hiển thị
        this.setLevel(this.levelCurrent + 1, this.levelCurrent + 2);
        if ((this.levelCurrent + 1) % 5 == 0 && (this.levelCurrent) > 5) {
            this._gameManager.btnSetting.x = -515;
            this._gameManager.level.x = 50;
        }
        else
        {
            this._gameManager.btnSetting.x = -500;
            this._gameManager.level.x = 0;
        }
        this.showOptionContainer(false);
    }

    hideAllScene(): void {
        for (let children of this.node.children)
        {
            if (children.name != "Background")
                children.active = false;
        }
    }

    showEndGame(event: cc.Event.EventCustom): void {
        ui.showUIIntroduce(false);
        ui.showUIEndGame(true);
    }

    selectOption(event: cc.Event) : void {
        this._gameManager.playSound(SOUND.CLICK, false);
        this._gameManager.showGuide(false);
        if (!this.clickOption)
        {
            cc.error("Khong duoc click lien tuc hoac chon dap an khac!!!");
            return;
        }
        this.clickOption = false;
        switch (event.target.name)
        {
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
    }

    runOption1(): void {
    }

    runOption2(): void {
    }

    runOption3(): void {
    }

    setLupin(position: cc.Vec2, emotion: string, action: string): void {
        if (emotion) {
            this.lupin.setAnimation(0, emotion, true);
        }
        if (action) {
            this.lupin.setAnimation(1, action, true);
        }
        this.lupin.node.position = cc.v3(position);
    }

    setOtherSpine(other: sp.Skeleton, position: cc.Vec2, emotion: string, action: string): void {
        if (emotion) {
            other.setAnimation(0, emotion, true);
        }
        if (action) {
            other.setAnimation(1, action, true);
        }
        if (position) {
            other.node.position = cc.v3(position);
        }
    }

    setOtherSprite(other: cc.Sprite, position: cc.Vec2): void {
        other.node.position = cc.v3(position);
    }

    //Khởi tạo các prefab -> node rồi push vào mảng để sử dụng
    initArrayScene(): void {
        var sceneOptions = [this.sceneOption0, this.sceneOption1, this.sceneOption2]
        for(var j = 0; j < 3; j++ ){
            var tempArr = [];
            if (this.optionScene[j].length == 0) {
                for (var i = 0; i < sceneOptions[j].length; ++i)
                {
                    tempArr.push(cc.instantiate(sceneOptions[j][i]));
                }
                this.optionScene[j] = tempArr;
            }
        }
    }

    //Khởi tạo event cho các nút
    initOption(): void {
        for (let i = 0; i < 3; ++i)
        {
            optionController.setOption(i, this.node, this.node.name, "selectOption");
        }
    }

    showOptionContainer(isShow: boolean): void {
        if (isShow)
        {
            EffectManager.effectScaleOption(optionContainer, 0.7)
        }
        optionContainer.active = isShow;
    }

    showFail(option: number): void {
        GameManager.logFailed(this.levelCurrent, this.stageCurrent, option)
        // GameManager.logEvent(`Failed L${this.levelCurrent + 1} S${this.stageCurrent + 1}-${option + 1}`)
        cc.audioEngine.stopAllEffects()
        tween(this.node).call(() => {
                            this.lupin.timeScale = 0;
                            for (let spine of this.otherSpine)
                            {
                                spine.timeScale = 0;
                            }
                            EffectManager.showX(option, this.getLineCurrent());
                        })
                        .delay(1)
                        .call(() => {
                            this.scheduleOnce(() => {
                                this._gameManager.playSound(SOUND.FAIL_STAGE, false);
                            }, 0.15);
                            this._gameManager.btnSetting.active = false;
                            this.lupin.timeScale = 0;
                            for (let spine of this.otherSpine)
                            {
                                spine.timeScale = 0;
                            }
                            EffectManager.effectFail();
                            EffectManager.showUI(false);
                        })
                        .delay(2)
                        .call(() => {
                            EffectManager.hideScene(EventManager.sendRequestReset, this.node);
                        }).start();
    }

    showSuccess(option: number): void {
        GameManager.logPassed(this.levelCurrent, this.stageCurrent, option)
        // GameManager.logEvent(`Passed L${this.levelCurrent + 1}`)
        cc.audioEngine.stopAllEffects()
        tween(this.node).call(() => {
                        EffectManager.showTick(option, this.getLineCurrent());
                    })
                    .delay(1)
                    .call(() => {
                        this.scheduleOnce(() => {
                            this._gameManager.playSound(SOUND.SUCCESS_LEVEL, false);
                        }, 0.2);
                        this._gameManager.btnSetting.active = false;
                        EffectManager.effectSuccess();
                        EffectManager.showUI(false);
                        this.lupin.timeScale = 0;
                        for (let spine of this.otherSpine)
                        {
                            spine.timeScale = 0;
                        }
                    })
                    .delay(2)
                    .call(() => {
                        EventManager.sendRequestResult(this.node);
                    })
                    .start();
    }

    setCamera(camera: cc.Node, positon: cc.Vec2, zoomRatio: number): void {
        camera.active = true;
        camera.position = cc.v3(positon);
        camera.getComponent(cc.Camera).zoomRatio = zoomRatio;
    }

    stopAction(): void {
        for (let spine of this.otherSpine)
        {
            spine.timeScale = 0;
        }
    }

    setTimeScaleAllSpine(timeScale: number): void {
        for (let spine of this.otherSpine)
        {
            spine.timeScale = timeScale;
        }
        this.lupin.timeScale = timeScale;
    }

    onContinue(event: cc.Event.EventCustom): void {
        this._gameManager.mainCamera.active = true;
        this.resetUIResult();
        this._gameManager._ui.showUIContinue(true);
    }

    playStageBegin(): void {
        if (this.node.parent.name != "GameContainer")
        {
            for (let children of this.node.parent.children)
            {
                children.active = false;
            }
        }
        var beginScene = this.getBeginSceen();
        if (beginScene) {
            beginScene.active = true;
            if (this.node.parent.name == "GameContainer")
            {
                this.initStage();
            }
            else
            {
                this.background.active = true;
            }
        }
    }

    setBeginSceen(node: cc.Node): void {
        this._gameManager._beginScene = node;
    }

    getBeginSceen(): cc.Node {
        return this._gameManager._beginScene;
    }

    setLevel(current: number, next: number): void {
        this._gameManager.setLevel(current, next);
    }
    
    createLineStage(numberStage: number): void {
        let level = cc.find("Canvas/Level");
        level.getChildByName("Start").zIndex = cc.macro.MIN_ZINDEX;
        level.getChildByName("Current").zIndex = cc.macro.MAX_ZINDEX;
        for (let i = 0; i < numberStage; ++i)
        {
            let line;
            if (this._line.size() > 0)
            {
                line = this._line.get();
            }
            else
            {
                line = cc.instantiate(this.line);
            }
            line.zIndex = 0 + i;
            cc.find("Canvas/Level").addChild(line);
        }
    }

    removeLineStage(): void {
        let line = cc.find("Canvas/Level").children;
        for (let i = 0; i < line.length; ++i)
        {
            let children = line[i];
            if (children.name != "Start" && children.name != "Current")
            {
                for (let child of children.children)
                {
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
    }

    resultLineStage(): void {
        let level = cc.find("Canvas/Level");
        let count = 0;
        // Lặp từ 1 đến length - 2 vì node đầu là Start và node cuối là Current
        for (let i = 1; i < level.children.length - 1; ++i)
        {
            if (level.children[i].name == "Line" && count < this.stageCurrent)
            {
                ++count;
                level.children[i].getChildByName("TrueAnswer").active = true;
            }
        }
    }

    //Lấy line để hiển thị true/false của option
    // +2 vì 1 node là Start + 
    getLineCurrent(): cc.Node {
        let level = cc.find("Canvas/Level");
        return level.children[this.stageCurrent + 1];
    }

    nextLevel(): void {
        tween(this.node).call(() => {
                EffectManager.showTick(this.selected, this.getLineCurrent());
            })
            .delay(1)
            .call(() => {
                this.lupin.timeScale = 0;
                for (let spine of this.otherSpine)
                {
                    spine.timeScale = 0;
                }
                EffectManager.effectSuccess();
                EffectManager.showUI(false);
            })
            .delay(2)
            .call(() => {
                EventManager.sendRequestResult(this.node);
            })
            .start();
    }

    showContinue(): void {
        GameManager.logFailed(this.levelCurrent, this.stageCurrent, this.selected)
        // GameManager.logEvent(`Failed L${this.levelCurrent + 1} S${this.stageCurrent + 1}-${this.selected + 1}`)
        cc.audioEngine.stopAllEffects();
        this.lupin.timeScale = 0;
        this.otherSpine.forEach(spine => {
            spine.timeScale = 0;
        })
        tween(this.node).call(() => {
            EffectManager.showX(this.selected, this.getLineCurrent());
        })
        .delay(1)
        .call(() => {
            this.scheduleOnce(() => {
                this._gameManager.playSound(SOUND.FAIL_STAGE, false);
            }, 0.15);
            EffectManager.effectFail();
            EffectManager.showUI(false);
        })
        .delay(2)
        .call(() => {
            EventManager.sendRequestContinue(this.node);
        }).start();
    }

    onPass(): void {
        GameManager.logPassed(this.levelCurrent, this.stageCurrent, this.selected)
        // GameManager.logEvent(`Passed L${this.levelCurrent + 1}_S${this.stageCurrent + 1}`)

        cc.audioEngine.stopAllEffects()
        tween(this.node).call(() => {
            EffectManager.showTick(this.selected, this.getLineCurrent());
        })
        .delay(1)
        .call(() => {
            this._gameManager.btnSetting.active = false;
            this.scheduleOnce(() => {
                this._gameManager.playSound(SOUND.SUCCESS_STAGE, false);
            }, 0.2);
            EffectManager.effectSuccess();
            EffectManager.showUI(false);
            this.lupin.timeScale = 0;
            this.otherSpine.forEach(spine => {
                spine.timeScale = 0;
            });
        })
        .delay(2)
        .call(() => {
            EventManager.sendRequestNextStage(this.node);
        })
        .start();
    }

    showComingSoon(): void {
        this.resetUIResult();
        this._gameManager.playSound(SOUND.SUCCESS_LEVEL, false);
        EffectManager.showTick(this.selected, this.getLineCurrent());
        ++this._gameManager._levelCurrent.level;
        if ( this._gameManager._levelCurrent.level > this._gameManager._data.unlockedLevel)
        {
            this._gameManager._data.unlockedLevel = this._gameManager._levelCurrent.level;
            Data.saveData(this._gameManager._data, Data.FACEBOOK_KEY);
            Data.saveData(this._gameManager._data, Data.LOCAL_KEY);
        }
        this._gameManager.btnSetting.active = false;
        this._gameManager._ui.showComingSoon();
    }

    playSound(soundId: number, loop: boolean, delay: number) {
        Data.getData(Data.LOCAL_KEY, (err, data) => {
            if (data.isSound)
            {
                this.scheduleOnce(()=>{
                    cc.audioEngine.playEffect(this.sounds[soundId], loop)
                },delay)
            }
        });
        

    }

}
