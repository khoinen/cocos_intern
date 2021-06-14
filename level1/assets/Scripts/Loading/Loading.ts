const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    dot: cc.Node[] = [];

    onEnable(): void {
        for (let dot of this.dot)
        {
            dot.y = 0;
        }
        this.action();
    }

    onDisable(): void {
        for (let dot of this.dot)
        {
            cc.Tween.stopAllByTarget(dot);
        }
    }

    action(): void {
        cc.tween(this.dot[0]).repeatForever(
                cc.tween().by(0.2, {position: cc.v3(0, 30)}, {easing: "cubicIn"})
                    .by(0.2, {position: cc.v3(0, -30)}, {easing: "cubicOut"})
                    .delay(0.5)
            ).start();
        cc.tween(this.dot[1]).delay(0.15).repeatForever(
                cc.tween().by(0.2, {position: cc.v3(0, 30)}, {easing: "cubicIn"})
                    .by(0.2, {position: cc.v3(0, -30)}, {easing: "cubicOut"})
                    .delay(0.5)
            ).start();
        cc.tween(this.dot[2]).delay(0.3).repeatForever(
                cc.tween().by(0.2, {position: cc.v3(0, 30)}, {easing: "cubicIn"})
                    .by(0.2, {position: cc.v3(0, -30)}, {easing: "cubicOut"})
                    .delay(0.5)
            ).start();
    }

}
