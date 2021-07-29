// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    show_popup () {
        if(!this.node.active) {
            this.node.active = true;

            this.node.opacity = 0;
            this.node.scale = 0.2;
            this.node.setPosition(0, 0);

            cc.tween(this.node).to(0.4, {scale: 1, opacity: 255}, {easing: 'sineOut'}).start();
        }

    }

    hide_popup () {

        cc.tween(this.node)
        .to(0.4, {scale: 0.2, opacity: 0}, {easing: 'sineOut'})
        .call(() => {this.node.active = false;})
        .start();
        
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
