const {ccclass, property} = cc._decorator;

const tween = cc.tween

const FISHS_SPEED = [250, 500, 200, 300, 200, 150]  // speed, distant per sec
const FISHS_DELAY = [3, 6, 2, 2, 4, 1]

@ccclass
export default class FishSwim extends cc.Component {

    @property([cc.Node])
    fishs: cc.Node[] = [];

    _durations = [];
    _fishsConfig = [];


    onLoad() {
        this._fishsConfig = []
        const width = this.node.width
        const haftWidth = width / 2

        FISHS_SPEED.forEach((sp) => {
            this._durations.push(parseInt(width / sp + ''))
        })

        this.fishs.forEach((f, i) => {
            const haftNodeWidth = f.width / 2
            const posX = f.position.x
            this._fishsConfig.push({
                node: f,
                duration: Math.abs(posX * 2) / FISHS_SPEED[i],
                startX: posX,
                endX: -posX,
                delay: FISHS_DELAY[i],
                y: f.y,
                scaleX: f.scaleX,
            })
        })

        cc.Tween.stopAllByTag(-100)
    }


    onEnable() {
        this._fishsConfig.forEach((config, i) => {
            config.node.position.x = config.startX
            config.node.scaleX = config.scaleX

            tween(config.node)
                .tag(-100)
                .delay(config.delay / 2)
                .repeatForever(
                    tween()
                        .to(config.duration, {position: cc.v3(config.endX, config.y)})
                        .delay(config.delay)
                        .call(() => {
                            config.node.scaleX = -config.scaleX
                        })
                        .to(config.duration, {position: cc.v3(config.startX, config.y)})
                        .delay(config.delay)
                        .call(() => {
                            config.node.scaleX = config.scaleX
                        })
                )
                .start()
        })
    }

    onDisable() {
        cc.Tween.stopAllByTag(-100)
    }
}
