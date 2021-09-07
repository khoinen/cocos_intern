// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

enum SOUND {
    bgMusic,
}
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    download: cc.Node = null;

    @property(cc.AudioClip)
    sounds: cc.AudioClip[] = [];

    // LIFE-CYCLE CALLBACKS:

    makeResponsive() {
        let canvas = this.node.getComponent(cc.Canvas);
        let deviceResolution = cc.view.getFrameSize();
        
        // calculte design ratio
        let desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // calculte device ratio
        let deviceRatio = deviceResolution.width / deviceResolution.height;
    
        // if (deviceRatio >= desiredRatio) {
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        // } else if (deviceRatio < desiredRatio) {
        //     canvas.fitHeight = false;
        //     canvas.fitWidth = true; 
        // }
    }
    
    gameEnd() {
        window.gameEnd && window.gameEnd();
    }

    downloadClicked() {
        window.openStore();
    }

    playSound (soundId: number, loop: boolean = false, delay: number = 0) {
        if (window.playsound){
            this.scheduleOnce(() => {
                cc.audioEngine.playEffect(this.sounds[soundId], true);
            }, delay);
        }
    }

    onLoad() {
        window.gameReady && window.gameReady();
        if (window.mintegral){
            this.download.active = true;
        }
        this.makeResponsive();
        this.playSound(SOUND.bgMusic, false, 0);
    }

    start () {

    }

    // update (dt) {}
}
