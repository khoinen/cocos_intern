import Data from "../Data";
import Effect from "../EffectManager";
import {STATUS} from "./NewClickItem";

const {ccclass, property} = cc._decorator;

// Tổng số level của game
const TOTAL_LEVEL = 30;
// Số level hiển thị trong 1 trang
const LEVEL_PAGE = 10;

const tween = cc.tween;

var _gameManager = null;
var _ui = null;

@ccclass
export default class ListLevel extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.PageView)
    pageView: cc.PageView = null;

    @property(cc.Prefab)
    page: cc.Prefab = null;
    
    @property(cc.SpriteFrame)
    unlock: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    lock: cc.SpriteFrame = null
    
    @property(cc.SpriteFrame)
    current: cc.SpriteFrame = null;

    @property(cc.Node)
    shadow: cc.Node = null;

    @property(cc.Node)
    container: cc.Node = null;

    @property(cc.Prefab)
    smallItem: cc.Prefab = null;

    @property(cc.Prefab)
    bigItem: cc.Prefab = null;

    @property(cc.SpriteFrame)
    icon: cc.SpriteFrame[] = [];

    private _close;

    onLoad(): void {
        this.initItem();
        _gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        _ui = cc.find("Canvas/UI").getComponent("UIController");
        this.shadow.opacity = 0;
        // this.container.scale = 0.7;
        this.container.opacity = 0;
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            _gameManager._selectedLevel = data.unlockedLevel;
        })
    }

    onEnable(): void {
        this.node.on("click_item", this.onClickItem, this);
        this.effectOpen();
        this.setStatus();
        var pageView = this.container.getChildByName("List").getComponent(cc.PageView);
        if (_gameManager._levelCurrent) {
            let index = Math.floor((_gameManager._levelCurrent.level + 1) / 10);
            pageView.setCurrentPageIndex(index);
        }
        else {
            pageView.setCurrentPageIndex(0);
        }
    }

    onDisable(): void {
        this.node.off("click_item", this.onClickItem, this);
        this.unschedule(this._close);
    }

    initItem(): void {
        let page = cc.instantiate(this.page);
        let count = 0;
        let item;
        for (let i = 0; i < TOTAL_LEVEL; ++i)
        {
            if ((i + 1) % 10 == 0)
                item = cc.instantiate(this.bigItem);
            else
                item = cc.instantiate(this.smallItem);
            item.children[0].getComponent(cc.Sprite).spriteFrame = this.icon[i];
            let script = item.getComponent("NewClickItem");
            script.tick.active = false;
            script.setLevel(i + 1);
            script.setStatus(STATUS.LOCK);
            page.addChild(item);
            
            ++count;
            if (count == LEVEL_PAGE && TOTAL_LEVEL >= LEVEL_PAGE)
            {
                this.content.addChild(page);
                page = cc.instantiate(this.page);
                count = 0;
                if (i == TOTAL_LEVEL - 1)
                {
                    return;
                }
            }
        }
        this.content.addChild(page);
    }

    setStatus(): void {
        Data.getData(Data.FACEBOOK_KEY, (err, data) => {
            let unlockedLevel = data.unlockedLevel + 1;
            let page = Math.floor(unlockedLevel / 10);
            let count = 0;
            if (page == 0) {
                for (let i = 0; i < unlockedLevel; ++i)
                {
                    let item = this.content.children[0].children[i];
                    let script = item.getComponent("NewClickItem");
                    script.isClick = true;
                    if (i == unlockedLevel - 1) {
                        script.setStatus(STATUS.CURRENT);
                        script.tick.active = false;
                    }
                    else {
                        script.setStatus(STATUS.UNLOCK);
                        script.tick.active = true;
                    }
                }
            }
            else {
                let numPage = 0;
                let numItem = 0;
                while (numItem < unlockedLevel) {
                    let item = this.content.children[numPage].children[numItem];
                    let script = item.getComponent("NewClickItem");
                    script.isClick = true;
                    if (numPage * 10 + numItem == unlockedLevel - 1) {
                        Effect.scaleForever(item, 0.95, 1.05, 0.7);
                        script.setStatus(STATUS.CURRENT);
                        script.tick.active = false;
                        return;
                    }
                    if (numItem != unlockedLevel - 1) {
                        script.setStatus(STATUS.UNLOCK);
                        script.tick.active = true;
                    }
                    ++numItem;
                    if (numItem == 10) {
                        ++numPage;
                        numItem = 0;
                    }
                }
            }
        });
        
    }
    effectOpen(): void {
        tween(this.shadow).to(0.2, {opacity: 200})
                    .call(() => {
                        tween(this.container).parallel(
                            tween().to(0.2, {opacity: 255}),
                            tween().to(0.2, {scale: 1}, {easing: "quartOut"})
                        )
                        .start();
                    })
                    .start();
    }

    effectClose(callback): void {
        tween(this.shadow).to(0.2, {opacity: 0}).start();
        tween(this.container).parallel(
            tween().to(0.2, {opacity: 0}),
            tween().to(0.2, {scale: 0.7}, {easing: "quartOut"})
        )
        .call(callback)
        .start();
    }

    onClose(): void {
        let _gameManager = cc.find("Canvas/GameManager").getComponent("GameManager");
        _gameManager.playClickAudio()
        this.effectClose(() => {
            this.node.active = false;
        });
        this._close = function() {
            this.node.active = false;
        };
        this.scheduleOnce(this._close, 0.3);
    }

    onClickItem(event: cc.Event.EventCustom): void {
        var level = event.level;
        _gameManager.selectLevel(level);
        this.onClose();
    }

    previousPage(): void {
        let index = this.pageView.getCurrentPageIndex();
        if (index - 1 < 0)
            return;
        this.pageView.setCurrentPageIndex(index - 1);
    }
    nextPage(): void {
        let index = this.pageView.getCurrentPageIndex();
        this.pageView.setCurrentPageIndex(index + 1);
    }

    initItemNew(): void {

    }
}
