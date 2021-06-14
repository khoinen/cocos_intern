import LevelBase from "../../../Scripts/LevelBase";

const {ccclass, property} = cc._decorator;
const tween = cc.tween;

enum SOUND {
    DIZZY,
    SWOOSH,
    WATER,
    BITE,
    FREEZE,
    LIKE,
    PEEK
}

@ccclass
export default class Level19_1 extends LevelBase {

    private _cano;
    private _oldMan;
    private _shark;

    onEnable(): void {
        super.onEnable();
        this._gameManager._levelCurrent.level = this.levelCurrent;
        this._gameManager._beginScene = this.node;
    }

    initStage(): void {
        super.initStage();
        this.setStatus();
        this.setAction();
    }

    setStatus(): void {
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
    }

    setAction(): void {
        tween(this.lupin.node).to(3, {position: cc.v3(375, -1130)}, {easing: "cubicInOut"})
            .delay(1)
            .call(() => {
                this.showOptionContainer(true);
            })
            .start();
    }

    runOption1(): void {
        this.lupin.setMix("level_19_1/mc_swim_idle", "level_19_1/mc_lifting_fish", 0.3);
        this._oldMan.setMix("old_man/level_19_1/old_man_idle", "old_man/level_19_1/old_man_happy", 0.3);
        this._oldMan.setMix("old_man/level_19_1/old_man_happy", "old_man/level_19_1/old_man_welcome", 0.3);
        this.lupin.setAnimation(0, "level_19_1/mc_lifting_fish", false);
        this.lupin.setCompleteListener(track => {
            if (track.animation.name == "level_19_1/mc_lifting_fish") {
                this.lupin.setCompleteListener(null);
                this.playSound(SOUND.LIKE, false, 0.3);
                this._oldMan.setAnimation(0, "old_man/level_19_1/old_man_happy", true);
                this._oldMan.addAnimation(0, "old_man/level_19_1/old_man_welcome", true);
                this._oldMan.setCompleteListener(track => {
                    if (track.animation.name == "old_man/level_19_1/old_man_welcome") {
                        this._oldMan.setCompleteListener(null);
                        this.lupin.setAnimation(1, "emotion/happy_2", true);
                        tween(this.lupin.node).delay(1)
                            .call(() => {
                                this.onPass();
                            })
                            .start();
                    }
                })
            }
        })
    }

    runOption2(): void {
        this.lupin.setAnimation(0, "level_19_1/mc_jumping_boat", false);
        this.playSound(SOUND.SWOOSH, false, 0);
        tween(this.lupin.node).parallel(
            tween().to(0.5, {scaleX: -0.8}),
            tween().to(0.5, {scaleY: 0.8}),
            tween().bezierTo(0.5, cc.v2(this.lupin.node.x, this.lupin.node.y), cc.v2(-100, -450), cc.v2(-200, -685))
                .call(() => {
                    this._oldMan.node.scaleX = -0.8;
                    this._oldMan.setAnimation(0, "police/level_12/old_man_attack", false);
                    this.playSound(SOUND.FREEZE, false, 0.6);
                    tween(this.lupin.node).delay(0.6)
                        .call(() => {
                            this.lupin.node.scaleX = -0.8;
                            this.lupin.setAnimation(0, "level_19_1/mc_get_hit", false);
                            this.playSound(SOUND.WATER, false, 0.7);
                            this.lupin.setCompleteListener(track => {
                                if (track.animation.name == "level_19_1/mc_get_hit") {
                                    this.lupin.setCompleteListener(null);
                                    tween(this.lupin.node).by(2, {position: cc.v3(0, -500)}, {easing: "cubicOut"})
                                        .call(() => {
                                            this.showFail(this.selected);
                                        }).start();
                                }
                            })
                        })
                        .start();
                })
        )
        .start();
    }

    runOption3(): void {
        this.lupin.setMix("level_19_1/mc_swim_idle", "level_19_1/mc_swim_gun", 0.3);
        this.lupin.setAnimation(0, "level_19_1/mc_swim_gun", false);
        this.lupin.setAnimation(1, "emotion/sinister", true);
        this.lupin.setCompleteListener(track => {
            if (track.animation.name == "level_19_1/mc_swim_gun") {
                this.lupin.setCompleteListener(null);
                this.playSound(SOUND.PEEK, false, 0);
                this._oldMan.setAnimation(0, "old_man/level_19_1/old_man_scare", false);
                tween(this._shark.node).delay(1).to(1, {position: cc.v3(200, -1030)})
                    .call(() => {
                        this._shark.timeScale = 1.5;
                        this.playSound(SOUND.BITE, false, 0.1);
                        this._shark.setAnimation(0, "shark_attack", false);
                        this._shark.setCompleteListener(track => {
                            if (track.animation.name == "shark_attack") {
                                this._shark.setCompleteListener(null);
                                // tween(this._shark.node).by(0.2, {position: cc.v3(200, -500)}).start();
                            }
                        })
                    })
                    .delay(0.2)
                    .call(() => {
                        tween(this.lupin.node).to(0.2, {position: cc.v3(765, -1560)})
                            .call(() => {
                                this.showFail(this.selected);
                            })
                            .start();
                    })
                    .start();
            }
        })
    }
}
