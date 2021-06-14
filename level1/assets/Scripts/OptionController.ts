const {ccclass, property} = cc._decorator;

@ccclass
export default class OptionController extends cc.Component {

    @property(cc.Node)
    option: cc.Node[] = [];

    onDisable(): void {
        this.resetOption();
    }

    resetOption(): void {
        this.option.forEach(item => {
            item.getChildByName("selected").active = false;
            item.getChildByName("tick").active = false;
            item.getChildByName("x").active = false;
        });
    }

    // index là thứ tự của option [0-2]
    // target là node chứa script
    // component là script
    //handler là function cần thực thi
    setOption(index: number, target: cc.Node, component: string, handler: string) {
        var clickHandler = new cc.Component.EventHandler();
        clickHandler.target = target;
        clickHandler.component = component;
        clickHandler.handler = handler;
        this.option[index].getComponent(cc.Button).clickEvents = [];
        this.option[index].getComponent(cc.Button).clickEvents.push(clickHandler);
    }

    setImageOption(img: [cc.SpriteFrame]): void {
        for (var i = 0; i < img.length; ++i)
        {
            this.node.children[i].getChildByName("icon")
                                .getComponent(cc.Sprite).spriteFrame = img[i];
        }
    }
}
