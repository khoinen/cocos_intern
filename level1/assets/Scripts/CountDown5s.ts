import EventManager from "./EventManager";


const {ccclass, property} = cc._decorator;

const TIME = 5;
@ccclass
export default class CountDown5s extends cc.Component {

    private countDown = null;
    onEnable(): void {
        this.runCountDown(TIME);
    }

    onDisable(): void {
        this.stopCountDown();
    }

    runCountDown(second: number): void {
        var start = Date.now();
        var end = start + second * 1000;
        var temp = second;
        this.countDown = function (): void {
            var milisecond = Date.now() - start;
            var percent = 1 - (1 / ((second * 1000) / (milisecond)));
            
            this.node.getComponent(cc.Sprite).fillRange = percent;
            this.node.getChildByName("Second").getComponent(cc.Label).string = Math.floor(6 - milisecond / 1000);

            if (percent < -0.009)
            {
                this.node.getComponent(cc.Sprite).fillRange = 0;

                var gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
                var currentScene = gameManager._currentScene;
                
                gameManager._ui.showUIContinue(false);
                if (currentScene)
                {
                    EventManager.sendRequestPlayStageBegin(currentScene);
                }
                this.unschedule(this.countDown);
            }
        }
        this.schedule(this.countDown, 0.01);     
    }

    stopCountDown(): void {
        this.unschedule(this.countDown);
        console.log("%cStop CountDown", "color:orange");
    }
}
