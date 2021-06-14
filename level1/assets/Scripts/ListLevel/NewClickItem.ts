const {ccclass, property} = cc._decorator;

export enum STATUS {
    UNLOCK,
    LOCK,
    CURRENT
}

@ccclass
export default class NewClickItem extends cc.Component {

    @property(cc.Node)
    tick: cc.Node = null;

    @property(cc.Sprite)
    frame: cc.Sprite = null;

    @property(cc.Node)
    bigNumber: cc.Node = null;
    
    @property(cc.Node)
    smallNumber: cc.Node = null;

    @property([cc.SpriteFrame])
    image: cc.SpriteFrame[] = [];

    isClick = false;

    private _status = STATUS.LOCK;
    private _view;
    private _count = 0;
    onLoad(): void {
        this._view = this.node.parent.parent.parent;
    }

    onClick(event: cc.Event.EventCustom): void {
        if (this.isClick)
        {
            let _event = new cc.Event.EventCustom("click_item", true);
            let level = this.node.parent.children.indexOf(this.node);
            let content = this.node.parent.parent;
            let pageNumber = content.children.indexOf(this.node.parent);
            _event.level = 10 * pageNumber + level;
            this.node.dispatchEvent(_event);
        }
    }

    setLevel(level: any): void {
        this.frame.node.getChildByName("smallNumber").getComponent(cc.Label).string = level;
        this.frame.node.getChildByName("bigNumber").getComponent(cc.Label).string = level;
    }

    setStatus(status: STATUS): void {
        this._status = status;
        switch (status)
        {
            case STATUS.UNLOCK:
                this.frame.spriteFrame = this.image[0];
                this.smallNumber.active = true;
                this.bigNumber.active = false;
                this.smallNumber.color = new cc.Color(255, 255, 255, 255);
                this.smallNumber.getComponent(cc.LabelOutline).color = new cc.Color(40, 40, 40, 102);
                break;
            case STATUS.CURRENT:
                this.frame.spriteFrame = this.image[1];
                this.smallNumber.active = false;
                this.bigNumber.active = true;
                this.bigNumber.color = new cc.Color(255, 255, 255, 255);
                this.bigNumber.getComponent(cc.LabelOutline).color = new cc.Color(83, 44, 0, 102);
                break;
            case STATUS.LOCK:
                this.frame.spriteFrame = this.image[2];
                this.smallNumber.active = false;
                this.bigNumber.active = true;
                this.bigNumber.color = new cc.Color(141, 141, 141, 255);
                this.bigNumber.getComponent(cc.LabelOutline).color = new cc.Color(40, 40, 40, 102);
                break;
        }
    }

    localConvertWorldPointAR(node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    }

    worldConvertLocalPointAR(node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    }

    convetOtherNodeSpaceAR(node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        let worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
    }
    
    update(dt): void {
        let pos = this.convetOtherNodeSpaceAR(this.node, this._view);
        if (this.node.name == "item1") {
            (pos.x < -500 || pos.x > 500) ? this.node.opacity = 0 : this.node.opacity = 255;
        }
        else {
            (pos.x < -750 || pos.x > 750) ? this.node.opacity = 0 : this.node.opacity = 255;
        }
    }
}
