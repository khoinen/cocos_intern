// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    makeResponsive() {
        let canvas = this.node.getComponent(cc.Canvas);
        let deviceResolution = cc.view.getFrameSize();
        
        // calculte design ratio
        let desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // calculte device ratio
        let deviceRatio = deviceResolution.width / deviceResolution.height;
    
        if (deviceRatio >= desiredRatio) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        } else if (deviceRatio < desiredRatio) {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    }
    
    onLoad() {
        this.makeResponsive();
    }

    start () {

    }

    // update (dt) {}
}
