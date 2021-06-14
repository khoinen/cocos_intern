import EffectManager from "./EffectManager";
import Data from "./Data";


const {ccclass, property} = cc._decorator;
const tween = cc.tween;
@ccclass
export default class Setting extends cc.Component {
    @property(cc.Toggle)
    sound: cc.Toggle = null;

    @property(cc.Toggle)
    music: cc.Toggle = null;

    @property(cc.Node)
    shadow: cc.Node = null;

    @property(cc.Node)
    container: cc.Node = null;

    private _data = null;
    private _gameManager = null;

    onLoad(): void {
        this.shadow.opacity = 0;
        this.container.scale = 0.7;
        this.container.opacity = 0;
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    }

    onEnable(): void {
        this.node.on("touchend", this.onClose, this);
        this.effectOpen();
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        
        Data.getData(Data.LOCAL_KEY, (err, data) => {
            this._data = data
            this.music.isChecked = this._data.isMusic;
            this.sound.isChecked = this._data.isSound;
        });
    }

    onDisable(): void {
        this.node.off("touchend", this.onClose, this);
    }

    effectOpen(): void {
        tween(this.shadow).to(0.2, {opacity: 200})
                    .call(() => {
                        tween(this.container).parallel(
                            tween().to(0.2, {opacity: 255}),
                            tween().to(0.2, {scale: 1}, {easing: "quartOut"})
                        )
                        .start();
                    })
                    .start();
    }

    effectClose(callback): void {
        tween(this.shadow).to(0.2, {opacity: 0}).start();
        tween(this.container).parallel(
            tween().to(0.2, {opacity: 0}),
            tween().to(0.2, {scale: 0.7}, {easing: "quartOut"})
        )
        .call(callback)
        .start();
    }

    onClose(): void {
        this.effectClose(() => {
            this.node.active = false;
        });
    }

    onChangeToggle(event) {
        switch (event.target.parent.name)
        {
            case "ToggleSound":
                this._data.isSound = event.isChecked;
                Data.saveData(this._data, Data.LOCAL_KEY);
                break;
            case "ToggleMusic":
                this._data.isMusic = event.isChecked;
                Data.saveData(this._data, Data.LOCAL_KEY);
                if (event.isChecked)
                {
                    this.playMusic();
                }
                else
                {
                    this.stopMusic();
                }
                break;
        }
    }

    onRestoreSetting(): void {
        this._data.isSound = true;
        this._data.isMusic = true;
        this.sound.isChecked = this._data.isSound;
        this.music.isChecked = this._data.isMusic;
        Data.saveData(this._data, Data.LOCAL_KEY);
    }

    stopMusic(): void {
        this._gameManager.stopAudioBG();
    }

    playMusic(): void {
        this._gameManager.playAudioBG();
    }
}
