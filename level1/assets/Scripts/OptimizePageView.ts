const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    view: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;
    
    update(dt): void {
        let viewRect = cc.rect(0, -this.view.height / 2, this.view.width, this.view.height);

        let page = this.content.children;
        for (let i = 0; i < page.length; ++i)
        {
            let item = page[i].children;
            for (let j = 0; j < item.length; ++j)
            {
                if (viewRect.intersects(item[j].getBoundingBox()))
                    item[j].opacity = 255;
                else
                    item[j].opacity = 0;
            }
        }
    }
}
