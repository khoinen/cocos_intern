// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab) 
    roadLoop: cc.Prefab = null;

    @property
    speed: number = 0;

    @property 
    additionalRoad: number = 0;

    game = null;
    numberRoad: number = 0;
    
    spawnUsingPrefabs (prefab, parent, posX, posY) {
        let newNode = cc.instantiate(prefab);
        parent.addChild(newNode);
        newNode.activate = true;
        newNode.setPosition(posX, posY);
    }

    spawnRoads() {
        this.numberRoad = Math.ceil(this.game.node.height / this.roadLoop.data.height + this.additionalRoad);

        for (let i = 0; i < this.numberRoad ; i++) {
            this.spawnUsingPrefabs(this.roadLoop, this.node, 0, this.roadLoop.data.height);
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.spawnRoads();
    }

    start () {
    }

    update (dt) {
        this.node.children.forEach((road, index) => {
            let nPosY = 0;
            if (road.getBoundingBoxToWorld().yMax <= 0) {
                nPosY = this.node.children[(index + this.numberRoad - 1) % this.numberRoad].y + road.height;
            } else { 
                nPosY = road.y;
            }

            nPosY -= this.speed * dt;

            road.setPosition(0,nPosY);
        })
    }
}
