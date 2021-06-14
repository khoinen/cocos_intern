import Data from "./Data";



const {ccclass, property} = cc._decorator;
const tween = cc.tween;

@ccclass
export default class ComingSoon extends cc.Component {

    @property(cc.Node)
    text: cc.Node = null;

    @property(cc.Label)
    money: cc.Label = null;

    private _gameManager = null;
    private _data = null;

    start(): void {
        this._gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
    }
    
    onHome(): void {
        this._gameManager.onHome();
        this.node.active = false;
    }

    onReplay(): void {
        this._gameManager.onReplay();
        this.node.active = false;
    }

    onEnable(): void {
        this.text.scale = 7;
        this.text.opacity = 0;
        tween(this.text).parallel(
                tween().to(1, {scale: 1}, {easing: "cubicIn"}),
                tween().to(1, {opacity: 255}, {easing: "cubicIn"})
            )
            .start();
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            this._data = data
            this.money.string = this._data.money;
        });
        // tween(this.node).delay(1)
        //     .call(() => {
        //         this.addMoney(150);
        //     })
        //     .start();
    }

    addMoney(money: number): void {
        const direction = money < 0 ? -1 : 1

        if (money == 0)
        {
            return;
        }
        else 
        {
            tween(this.money.node).repeat(money * direction / 3,
                tween().call(() => {
                    this.money.string = (parseInt(this.money.string) + 3 * direction).toString();
                })
                .delay(0.03)
            )
            .call(() => {
                Data.getData(Data.FACEBOOK_KEY, (err, data) => {
                    this._data = data
                    this._data.money += money;
                    this.money.string = this._data.money;
                    Data.saveData(this._data, Data.FACEBOOK_KEY);
                });
            })
            .start();
        }
    }
}
