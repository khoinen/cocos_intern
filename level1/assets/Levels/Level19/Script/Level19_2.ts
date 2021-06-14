import LevelBase from "../../../Scripts/LevelBase";

const {ccclass, property} = cc._decorator;
const tween = cc.tween;

enum SOUND {
    DIZZY,
    SWOOSH,
    WATER,
    BOAT1,
    BOAT2,
    EXPLOSION,
    KNIFE_HIT,
    SCREAM,
    SQUIRT,
    THROW
}

@ccclass
export default class Level19_2 extends LevelBase {

    private _police;
    private _light;

    initStage(): void {
        super.initStage();
        this.setStatus();
        this.setAction();
    }

    setStatus(): void {
        this._police = this.otherSpine[0];
        this._light = this.otherSprite[0];
        this._light.node.position = cc.v3(-510, -130);
        this._light.node.active = false;
        this.lupin.clearTrack(1);
        this.setLupin(cc.v2(-1000, -470), "level_19_2/mc_idle", null);
        this.setOtherSpine(this._police, cc.v2(-1000, -675), "police/level_19_2/idle_cano", null);
    }

    setAction(): void {
        this.playSound(SOUND.BOAT1, false, 1);
        tween(this.lupin.node).delay(1).to(0.8, {position: cc.v3(160, -165)})
            .call(() => {
                this.playSound(SOUND.BOAT2, false, 0);
                tween(this._police.node).to(0.6, {position: cc.v3(-320, -390)})
                    .call(() => {
                        this.showOptionContainer(true);
                    }).start();
            })
            .start();
    }

    runOption1(): void {
        tween(this.lupin.node).to(0.5, {position: cc.v3(260, -365)})
            .call(() => {
                this.lupin.timeScale = 1.5;
                this.lupin.setAnimation(0, "level_19_2/mc_flashlight", false);
                this.lupin.setCompleteListener(track => {
                    if (track.animation.name == "level_19_2/mc_flashlight") {
                        this.lupin.setCompleteListener(null);
                        this._light.node.active = true;
                        this.canoFail();
                    }
                })
            })
            .start();
    }

    runOption2(): void {
        tween(this.lupin.node).to(0.8, {position: cc.v3(460, -345)})
            .call(() => {
                tween(this._police.node).to(0.5, {position: cc.v3(-400, -320)}).start();
                this.lupin.timeScale = 1.5;
                this.lupin.setAnimation(0, "level_19_2/mc_ca_kiem", false);
                this.playSound(SOUND.THROW, false, 0.8);
                tween(this._police.node).delay(1)
                    .call(() => {
                        this.lupin.setAnimation(1, "emotion/happy_2", true);
                        this._police.timeScale = 1.5;
                        this.playSound(SOUND.KNIFE_HIT, false, 0);
                        this.playSound(SOUND.WATER, false, 0.7);
                        this._police.setAnimation(0, "police/level_19_2/option2_cakiem", false);
                        this._police.setCompleteListener(track => {
                            if (track.animation.name == "police/level_19_2/option2_cakiem") {
                                tween(this.node).delay(0.5)
                                    .call(() => {
                                        this.onPass();
                                    })
                                    .start();
                            }
                        })
                    })
                    .start();
            })
            .start();
    }

    runOption3(): void {
        tween(this.lupin.node).to(0.8, {position: cc.v3(260, -365)})
            .call(() => {
                this.playSound(SOUND.SQUIRT, false, 1.2);
                this.playSound(SOUND.SQUIRT, false, 1.4);
                this.playSound(SOUND.SQUIRT, false, 1.6);
                this.playSound(SOUND.SQUIRT, false, 1.8);
                this.lupin.setAnimation(0, "level_19_2/mc_con_muc", false);
                this.lupin.setCompleteListener(track => {
                    if (track.animation.name == "level_19_2/mc_con_muc") {
                        this.lupin.setCompleteListener(null);
                        this.canoFail();
                    }
                })
            })
            .start();
    }

    canoFail(): void {
        tween(this._police.node).call(() => {
                this.playSound(SOUND.SCREAM, false, 0);
                this.playSound(SOUND.BOAT2, false, 0);
                this._police.setAnimation(0, "police/level_19_2/option1_denpin", false);
                this._police.setCompleteListener(track => {
                    if (track.animation.name == "police/level_19_2/option1_denpin") {
                        this._police.setCompleteListener(null);
                        this._light.node.active = false;
                        this.playSound(SOUND.EXPLOSION, false, 0);
                        this.lupin.setAnimation(0, "fx/explosive2", false);
                        this._police.setAnimation(0, "police/level_19_2/cano_dam_nhau", false);
                        tween(this.node).delay(1)
                            .call(() => {
                                this.showContinue();
                            })
                            .start();
                    }
                })
            })
            // .to(0.5, {position: cc.v3()})
            .start();
    }
}
