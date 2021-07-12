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

    @property(cc.Prefab)
    crossroad: cc.Prefab = null;

    @property
    speed: number = 0;
    
    @property 
    additionalRoad: number = 0;

    game = null;
    numberRoad: number = 0;
    hasCrossRoad: boolean = false;
    endAtCrossRoad: boolean = false;

    
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

    findTopIndex(array) { 
        let index = 0;
        for ( let i = 0; i < this.numberRoad; i++ ) {
            if (array[i].y > array[index].y){
                index = i;
            }
        }
        return index;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.spawnRoads();
    }

    start () {
    }

    update (dt) {
        if (this.game.isStarted && !this.hasCrossRoad && this.findTopIndex(this.node.children) === this.numberRoad - 1) {
            let nPosY = this.node.children[this.numberRoad - 1].y + (this.roadLoop.data.height + this.crossroad.data.height) / 2;
            this.spawnUsingPrefabs(this.crossroad, this.node, 0, nPosY);
            this.numberRoad += 1;
            this.hasCrossRoad = true;
        }
        if (!this.endAtCrossRoad){
            this.node.children.forEach((road, index) => {
                let nPosY = 0;
                if (road.getBoundingBoxToWorld().yMax <= 0) {
                    nPosY = this.node.children[(index + this.numberRoad - 1) % this.numberRoad].y + road.height;
                } else { 
                    nPosY = road.y;
                }
    
                nPosY -= this.speed * dt;
    
                road.setPosition(0,nPosY);

                if (this.hasCrossRoad && index === this.numberRoad - 1 && road.getBoundingBoxToWorld().yMax <= 2 * this.game.node.height){
                    this.endAtCrossRoad = true;
                }
            })
             
        }
    }
}
