// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    cannonPower: number = 1;
    game = null;

    // LIFE-CYCLE CALLBACKS:
    posXY(event) {
        let cannonPos = cc.v2(this.node.position.x + this.node.parent.width / 2, this.node.position.y + this.node.parent.height / 2);
        let mousePos = event.getLocation();
        // console.log(cannonPos.x + ","  + cannonPos.y);
        // console.log(mousePos.x + "," + mousePos.y);

        let degree = 0;
        if (cannonPos.x == mousePos.x){
            let radian = cannonPos.y > mousePos.y ? Math.PI / 2 : -Math.PI / 2
            degree = cc.misc.radiansToDegrees(radian);
        }
        else {
		    let radian = Math.atan2(mousePos.y - cannonPos.y, mousePos.x - cannonPos.x);
		
		    degree = radian * 180 / Math.PI;
            
		    if(mousePos.y < cannonPos.y) {
			    if(mousePos.x < cannonPos.x) degree += 180;
		    }
            else {
			    degree = 90 - degree ;
		    }
        }
        this.node.angle = -degree;
        // console.log(this.node.angle);
        return -degree;
    }

    increase() {
        this.cannonPower++ ;
        this.checkPower();
    }

    decrease() {
        this.cannonPower-- ;
        this.checkPower();
    }

    checkPower() {
        this.cannonPower = this.cannonPower > 7 ? 1 : this.cannonPower < 1 ? 7 : this.cannonPower;
        this.node.children.forEach(element => {
            element.active = false ;
        })
        this.node.children[this.cannonPower-1].active = true
    }

    onLoad () {
        this.node.parent.on('mousemove', this.posXY, this);
    }

    start () {

    }

    // update (dt) {}

    onDestroy() {
        this.node.parent.off('mousemove', this.posXY,this);
    }
}
