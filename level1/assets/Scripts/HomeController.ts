import Data from './Data';

const {ccclass, property} = cc._decorator;
const tween = cc.tween;
@ccclass
export default class HomeController extends cc.Component {

    @property(sp.Skeleton)
    lupin: sp.Skeleton = null

    @property(cc.Node)
    ui: cc.Node = null;

    @property(cc.Sprite)
    wall: cc.Sprite = null;

    @property(cc.Sprite)
    floor: cc.Sprite = null;

    @property(cc.Sprite)
    bed: cc.Sprite = null;

    @property(cc.Sprite)
    tv: cc.Sprite = null;

    @property(cc.Sprite)
    window: cc.Sprite = null;

    @property(cc.Sprite)
    pricture: cc.Sprite = null;

    @property(cc.Sprite)
    toilet: cc.Sprite = null;

    @property(cc.Label)
    dayCount: cc.Label = null;

    @property(cc.Node)
    notification: cc.Node = null;

    private _decorations = [];

    onLoad() {
        this._decorations = [this.wall, this.floor, this.bed, this.tv, this.window, this.pricture, this.toilet]
        this.setCurrentDeco()
        this.setLupinLoop()
    }

    onEnable(): void {
        this.notification.active = true;
        this.lupin.setSkin('Lupin')
    }
    
    onDisable(): void {
        this.notification.active = false;
    }
    
    moveVertical(distance, duration, cb = () => {}) {
        cc.tween(this.node)
            .by(duration, {position: cc.v3(0, -distance)})
            .call(cb)
            .start()
    }

    setDecoration(decoIndex, sFrame) {
        const deco = this._decorations[decoIndex]

        if (deco) {
            deco.node.opacity = 180
            deco.spriteFrame = sFrame

            tween(deco.node)
                .delay(.5)
                .to(.3, {opacity: 255})
                .start()
        }

    }

    setCurrentDeco() {
        const gameData = Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            const gameData = data
            const currentDeco = gameData.currentDeco || {}

            Object.keys(currentDeco).forEach((cate) => {
                const decoData = currentDeco[cate]
                cc.resources.load(
                    `Shop/${decoData.type}/${cate}_${decoData.type}`,
                    cc.SpriteFrame,
                    (err, sFrame) => {
                        if (err) {
                            sFrame = null
                        }

                        this.setDecoration(decoData.cateIndex, sFrame)
                    },
                )

            })
        })
        
    }

    setLupinLoop() {
        let count = 0

        this.lupin.setCompleteListener((track) => {

            if (track.animation.name === 'home/bed') {
                count++
                if (count >= 4) {
                    count = 0
                    this.setLupinToilet()
                }
            }

            if (track.animation.name === 'emotion/sinister') {
                count++
                if (count >= 7) {
                    count = 0
                    this.setLupinBed()
                }
            }
        })

        this.setLupinStand()
    }

    setLupinOpacity() {
        this.lupin.node.opacity = 180

        tween(this.lupin.node)
            .to(.5, {opacity: 255})
            .start()
    }

    setLupinBed() {
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            const gameData = data
            const currentDeco = gameData.currentDeco

            if (!currentDeco || !currentDeco.Giuong || !currentDeco.Giuong.type) {
                return this.setLupinToilet()
            }

            this.lupin.timeScale = 1
            this.lupin.setAnimation(0, 'emotion/idle', false)
            this.lupin.setAnimation(1, 'home/bed', true)
            this.lupin.clearTrack(0)
            this.lupin.node.position = cc.v3(264, -378)

            this.setLupinOpacity()
        })
        
    }

    setLupinStand() {
        this.lupin.setAnimation(1, 'general/stand_thinking', false)
        this.lupin.setAnimation(0, 'emotion/sinister', true)
        this.lupin.node.position = cc.v3(19, -515)

        this.setLupinOpacity()
    }

    setLupinToilet() {
        this.lupin.setAnimation(1, 'home/seat_toilet', false)
        this.lupin.setAnimation(0, 'emotion/idle', false)
        this.lupin.node.position = cc.v3(-110, -305)
        this.lupin.node.opacity = 180

        tween(this.lupin.node)
            .to(.5, {opacity: 255})
            .repeat(
                2,
                tween()
                    .call(() => {
                        this.lupin.setAnimation(1, 'home/seat_toilet', true)
                        this.lupin.setAnimation(0, 'emotion/idle', true)
                    })
                    .delay(5)
                    .call(() => {
                        this.lupin.clearTrack(0)
                        this.lupin.setAnimation(1, 'home/seat_toilet2', false)
                    })
                    .delay(3)
            )
            .call(() => {
                this.setLupinStand()
            })
            .start()
    }

    updateCalendar(): void {
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            let day = 10 - (data.unlockedLevel % 10);
            this.dayCount.string = day.toString();
        });
        
    }
}
