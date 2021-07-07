// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Star extends cc.Component {
    
    @property
    pickRadius: number = 0;

    game = null;

    getPlayerDistance() {
        let playerPos = this.game.player.getPosition();
        let distance = this.node.position.sub(playerPos).mag();
        return distance;
    }

    // LIFE-CYCLE CALLBACKS:

    onPicked () {
        this.game.spawnNewStar();
        this.game.gainScore();
        this.node.destroy();
    }

    start () {

    }

    update (dt) {
        if ( this.getPlayerDistance() < this.pickRadius){
            this.onPicked();
        }
        let opacityRatio = 1 - this.game.timer / this.game.starDuration;
        let minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor( (255 - minOpacity) * opacityRatio );
    }
}
