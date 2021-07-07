// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property(cc.Prefab)
    starPrefab: cc.Prefab = null;

    @property(cc.Node)
    ground: cc.Node = null;

    @property(cc.Node)
    player: cc.Node = null;

    @property
    maxStarDuration: number = 0;

    @property
    minStarDuration: number = 0;

    @property(cc.Label)
    scoreDisplay: cc.Label = null;

    @property(cc.AudioClip)
    scoreAudio: cc.AudioClip = null;

    groundY: any;

    score: number;
    timer: number;
    starDuration: number;
    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.groundY = this.ground.y + this.ground.height/2;
        this.timer = 0;
        this.starDuration = 0;
        this.spawnNewStar();        
        this.score = 0;
        this.player.getComponent("Player").game = this;
    }

    spawnNewStar () {
        let newStar = cc.instantiate(this.starPrefab);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPos()); 
        newStar.getComponent("Star").game = this;

        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    }

    getNewStarPos () : cc.Vec2 {
        let randomX = 0 ;
        let randomY = this.groundY + Math.random() * this.player.getComponent("Player").jumpHeight + 50 ;
        let maxX = this.node.width / 2;
        randomX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randomX, randomY);
    }
    
    gainScore() {
        this.score += 1;
        this.scoreDisplay.string = "Score: " + this.score;
        cc.audioEngine.playEffect(this.scoreAudio, false);
    }

    gameOver() {
        this.player.stopAllActions();
        cc.director.loadScene('game');
    }

    update (dt) {
        if (this.timer > this.starDuration){
            this.gameOver();
            return;
        }

        this.timer += dt; 
    }
}
