
const {ccclass, property} = cc._decorator;

enum SOUND {
    enemyKill,
}

@ccclass
export default class NewClass extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    @property (cc.AudioClip)
    sounds: cc.AudioClip[] = [];

    onLoad () {
        this.node.getComponent(cc.Animation).play("beetle_idle").wrapMode = cc.WrapMode.Loop;
        cc.tween(this.node).repeatForever( 
            cc.tween()
            .by(4, {x:350})
            .delay(1)
            .call(() => this.node.scaleX = -3)
            .by(5, {x: -350})
            .delay(1)
            .call(() => this.node.scaleX = 3)
        )
        .start();
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }

    onBeginContact (contact, selfCollider, otherCollider) {
        if (otherCollider.tag == 1) { 
            this.node.getComponent(cc.Animation).play("beetle_die");
            // this.playSound(this.enemyKill);
            this.playSound(SOUND.enemyKill, false, 0)
            this.scheduleOnce(() => this.node.destroy(), 0.1);
        }
    }

    playSound(soundId: number, loop: boolean = false, delay: number = 0 ) {
        if (window.playsound){
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.sounds[soundId], false);
            }, delay);
        }
    }

    start () {

    }

    // update (dt) {}
}
