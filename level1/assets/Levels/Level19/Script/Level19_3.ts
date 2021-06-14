import LevelBase from "../../../Scripts/LevelBase";


const {ccclass, property} = cc._decorator;
const tween = cc.tween;


enum SOUND {
    DIZZY,
    SWOOSH,
    WATER,
    BREAK,
    GUN,
    KISS,
    SAX,
    SPARK,
    BOAT1
}

@ccclass
export default class Level19_3 extends LevelBase {

    private _oldMan;
    private _oldWoman;
    private _cano;
    private _fishtank;

    initStage(): void {
        super.initStage();
        this.setStatus();
        this.setAction();
    }

    setStatus(): void {
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
    }

    setAction(): void {
        this.playSound(SOUND.BOAT1, false, 0);
        tween(this.lupin.node).to(2.5, {position: cc.v3(30, -622)})
            .call(() => {
                this._cano.node.active = true;
                this._oldMan.node.active = true;
                this.lupin.setAnimation(0, "emotion/idle", true);
                this._oldMan.setAnimation(0, "police/level_12/old_man_run", true);
                this._oldMan.node.scaleX = -0.7;
                tween(this._oldMan.node).to(2, {position: cc.v3(415, -410)})
                    .call(() => {
                        this._oldMan.node.scaleX = 0.7;
                        this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_idle", true);
                        this.lupin.setAnimation(0, "general/stand_thinking", true);
                        this.lupin.setAnimation(1, "emotion/thinking", true);
                    })
                    .delay(2)
                    .call(() => {
                        this.showOptionContainer(true);
                    })
                    .start();
            }).start();
    }

    runOption1(): void {
        this.lupin.setMix("level_19_3/mc_swimwear", "level_1/die", 0.3);
        this.playSound(SOUND.SWOOSH, false, 1);
        this.lupin.setAnimation(0, "level_19_3/mc_swimwear", false);
        this.lupin.setCompleteListener(track => {
            if (track.animation.name == "level_19_3/mc_swimwear") {
                this.lupin.setCompleteListener(null);
                this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_shake_head", false);
                this._oldMan.setCompleteListener(track => {
                    if (track.animation.name == "old_man/level_19_3/oldman_shake_head") {
                        this._oldMan.setCompleteListener(null);
                        this._oldMan.timeScale = 1.5;
                        this.playSound(SOUND.GUN, false, 1.1);
                        this._oldMan.setAnimation(0, "old_man/level_19_3/old_man_aim_idle", false);
                        this._oldMan.addAnimation(0, "old_man/level_19_3/old_man_shoot", false);
                        tween(this.lupin.node).delay(1.1)
                            .call(() => {
                                this._oldMan.setCompleteListener(null);
                                this.lupin.clearTrack(1);
                                this.playSound(SOUND.DIZZY, false, 0.1);
                                this.lupin.setAnimation(0, "level_1/die", false);
                                this.lupin.node.position = cc.v3(-150, -520);
                                tween(this.node).delay(2)
                                    .call(() => {
                                        this.showContinue();
                                    })
                                    .start();
                            })
                            .start();
                    }
                })
            }
        })
    }

    runOption2(): void {
        this.lupin.setMix("level_19_3/mc_fishtank", "level_19_3/mc_fishtank_fall", 0.3);
        this.lupin.setAnimation(1, "level_19_3/mc_fishtank", false);
        tween(this.lupin.node).delay(2)
            .call(() => {
                this.lupin.setAnimation(0, "general/walk", true);
            })
            .to(1, {position: cc.v3(170, -570)})
            .call(() => {
                this.lupin.setAnimation(0, "emotion/idle", false);
                this.playSound(SOUND.BREAK, false, 0.1);
                this.lupin.setAnimation(1, "level_19_3/mc_fishtank_fall", false);
                this._fishtank.node.active = true;
                this._fishtank.setAnimation(0, "level_19/fishtank_fall", false);
                this.lupin.setCompleteListener(track => {
                    if (track.animation.name == "level_19_3/mc_fishtank_fall") {
                        this.lupin.setCompleteListener(null);
                        this._oldMan.timeScale = 1.5;
                        this.playSound(SOUND.GUN, false, 1.1);
                        this._oldMan.setAnimation(0, "old_man/level_19_3/old_man_aim_idle", false);
                        this._oldMan.addAnimation(0, "old_man/level_19_3/old_man_shoot", false);
                        tween(this.lupin.node).delay(1.1)
                            .call(() => {
                                this._oldMan.setCompleteListener(null);
                                this.lupin.clearTrack(1);
                                this.playSound(SOUND.DIZZY, false, 0.1);
                                this.lupin.setAnimation(0, "level_1/die", false);
                                this._fishtank.node.x = 550;
                                this.lupin.node.position = cc.v3(-150, -520);
                                tween(this.node).delay(2)
                                    .call(() => {
                                        this.showContinue();
                                    })
                                    .start();
                            })
                            .start();
                    }
                })
            })
            .start();
    }

    runOption3(): void {
        this.lupin.setMix("level_19_3/mc_introduce", "general/stand_nervous", 0.3);
        this.lupin.clearTrack(1);
        this.playSound(SOUND.SPARK, false, 0.1);
        this.lupin.setAnimation(0, "level_19_3/mc_introduce", false);
        tween(this.node).delay(0.3)
            .call(() => {
                let count = 0;
                this.playSound(SOUND.KISS, false, 0.3);
                this.playSound(SOUND.KISS, false, 1.3);
                this._oldWoman.node.active = true;
                this._oldWoman.node.scaleX = -0.7;
                this._oldWoman.setAnimation(0, "old_man/level_19_3/bigwife_idle", true);
                this._oldWoman.setCompleteListener(track => {
                    if (track.animation.name == "old_man/level_19_3/bigwife_idle") {
                        ++count;
                        if (count == 2) {
                            this._oldWoman.setCompleteListener(null);
                            this._oldWoman.setAnimation(0, "old_man/level_19_3/bigwife_carry_oldman", true);
                            tween(this._oldWoman.node).to(2, {position: cc.v3(400, -420)})
                                .call(() => {
                                    tween(this._oldMan.node).parallel(
                                            tween().to(0.2, {position: cc.v3(305, -350)}),
                                            tween().to(0.2, {angle: -60})
                                        )
                                        .call(() => {
                                            this.playSound(SOUND.SAX, false, 0);
                                        })
                                        .to(1, {position: cc.v3(370, -320)})
                                        .start();
                                })
                                .to(1, {position: cc.v3(465, -385)})
                                .delay(0.5)
                                .call(() => {
                                    this.showSuccess(this.selected);
                                })
                                .start();
                        }
                        else if (count == 1) {
                            this._oldMan.setAnimation(0, "old_man/level_19_3/oldman_love", true);
                        }
                    }
                })
            })
            .start();
        this.lupin.setCompleteListener(track => {
            if (track.animation.name == "level_19_3/mc_introduce") {
                this.lupin.setCompleteListener(null);
                this.lupin.setAnimation(0, "general/stand_nervous", true);
                this.lupin.setAnimation(1, "emotion/happy_2", true);
            }
        })
    }
}
