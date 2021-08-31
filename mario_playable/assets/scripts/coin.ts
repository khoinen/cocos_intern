

const {ccclass, property} = cc._decorator;

enum SOUND {
    coinCollect,
}

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    sounds: cc.AudioClip[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let anim = this.node.getComponent(cc.Animation).play();
        cc.director.getCollisionManager().enabled = true;
    }

    onCollisionEnter (other, self) {
        console.log("onCollisionEnter");
        if (other.node.name == "player") {
            self.node.destroy();
            //cc.audioEngine.playEffect(this.coinCollect, false);
            this.playSound(SOUND.coinCollect, false, 0)
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
