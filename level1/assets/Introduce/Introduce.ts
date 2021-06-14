import EffectManager from "../Scripts/EffectManager";
const {ccclass, property} = cc._decorator;
const storyText = [["STICKMAN", "INVOLVED", "IN", "A", "BANK", "ROBBERY", "HE", "WAS", "ARRESTED", "IN", "A", "SECRET", "PRISON", "IN", "AMERICA"],
                    ["AFTER", "ESCAPING", "FROM", "THE", "PRISON,", "THE", "STICKMAN", "LIVED", "A", "LIFE", "OF", "LUXURY.", "\nBUT", "THERE", "WAS", "AN", "ENEMY", "WHO", "WAS", "LIVING", "IN", "A", "PRISON", "UNDER", "THE", "SEA.", "\nPUNISHING", "HIM", "WAS", "THE", "NEXT", "OBJECTIVE."],
                    ["AFTER", "ESCAPING", "TO", "THE", "ISLAND,", "THE", "STICKMAN", "STOLE", "A", "JEWEL", "FROM", "AN", "ABORIGINAL", "TRIBE.", "HE", "WAS", "ONCE", "AGAIN", "ARRESTED"]];

const tween = cc.tween;

var introIndex = 0;
@ccclass
export default class Introduce extends cc.Component {

    @property([cc.Sprite])
    prisonScene: cc.Sprite[] = [];

    @property(cc.Node)
    next: cc.Node = null;

    @property(cc.Node)
    story: cc.Node = null;

    @property(cc.Label)
    storyLabel:cc.Label = null;

    @property([cc.SpriteFrame])
    left: cc.SpriteFrame[] =[];

    @property([cc.SpriteFrame])
    right: cc.SpriteFrame[] =[];

    private countWord = 0;
    // private introIndex = 0;
    onLoad(): void {
        this.resetIntroduce();
    }

    onEnable(): void {
        this.runAnimation();
    }

    onDisable(): void {
        this.resetIntroduce();
    }

    resetIntroduce(): void {
        this.prisonScene[0].node.position = cc.v3(-450, 1200);
        this.prisonScene[1].node.position = cc.v3(1200, 133);
        this.next.opacity = 0;
        this.next.scale = 0;
        this.story.opacity = 0;
        this.storyLabel.string = ""
    }
    runAnimation(): void {
        tween(this.node).call(() => {
            tween(this.prisonScene[0].node).to(0.3, {position: cc.v3(0, 385)}).start();
        })
        .delay(0.3)
        .call(() => {
            tween(this.prisonScene[1].node).to(0.3, {position: cc.v3(0, 220)}).start();
        })
        .delay(0.5)
        .call(() => {
            this.story.active = true;
            this.story.scale = 0;
            this.story.opacity = 0;
            tween(this.story)
                .to(0.3, {scaleX: 1.2, scaleY: 1.5, opacity: 255}, {easing: "quadIn"})
                .call(()=>{
                    this.schedule(()=>{
                        switch (introIndex) {
                            case 0:
                                this.storyLabel.fontSize = 30;
                                this.storyLabel.lineHeight = 30;
                                break;
                            case 1:
                                this.storyLabel.fontSize = 22;
                                this.storyLabel.lineHeight = 22;
                                break;
                            case 2:
                                this.storyLabel.fontSize = 28;
                                this.storyLabel.lineHeight = 28;
                                break;
                        }
                        if (this.countWord < storyText[introIndex].length){
                            this.storyLabel.string += storyText[introIndex][this.countWord] + " "
                        }else{
                            cc.log("story", "end")
                            EffectManager.showButton(this.next, 0.3);
                        }
                        this.countWord++
                    },0.1,storyText[introIndex].length)
                })
                .start();
            
        })
        .start();
        // tween(this.prisonScene[0]).to(0.3, {position: cc.v3(0, 385)}).start();
        // tween(this.prisonScene[1]).delay(0.8).to(0.3, {position: cc.v3(0, 133)}).start();
    }

    startGame(): void {
        this.node.active = false;
        cc.find("Canvas/GameManager").getComponent("GameManager").startGame();
    }

    setIntro(level: number): void {
        let length = this.left.length;
        introIndex = Math.floor(level / 10)
        this.countWord = 0
        for (let i = 0; i < length; ++i)
        {
            if (introIndex == i) {
                this.prisonScene[0].spriteFrame = this.left[i];
                this.prisonScene[1].spriteFrame = this.right[i];
                return;
            }
        }
    }
}
