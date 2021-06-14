const {ccclass, property} = cc._decorator;

var isTrue = true;
@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    lupin: sp.Skeleton = null;

    onEnable(): void {
        this.runAnimation();
    }

    runAnimation(): void {
        // this.lupin.setMix("general/hide1", "general/stand_nervous", 0.5);
        // this.lupin.setMix("general/stand_nervous", "level_5/remote_control", 0.5);

        // this.lupin.setAnimation(0, "general/hide", true);
        this.lupin.setAnimation(0, "general/hide1", true);
        cc.tween(this.node).delay(3)
                .call(() => {
                    this.lupin.setAnimation(0, "emotion/sinister", true);
                    this.lupin.setCompleteListener(trackEntry => {
                        if (trackEntry.animation.name == "emotion/sinister" && isTrue)
                        {
                            this.lupin.setAnimation(1, "level_5/throw_bida", false);
                        }
                    });
                    // this.lupin.setAnimation(1, "general/stand_nervous", false);
                    // this.lupin.clearTrack(1);
                    // this.lupin.setAnimation(1, "level_5/remote_control", false);
                                    // this.setLupin(cc.v2(-80, -460), "emotion/sinister", "general/walk");
                })
                .start();
    }
}
