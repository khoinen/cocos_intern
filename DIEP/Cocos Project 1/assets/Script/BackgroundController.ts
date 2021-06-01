// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Background extends cc.Component {

  @property(cc.Node)
  bottomPoint: cc.Node = null;

  @property(cc.Node)
  topPoint: cc.Node = null;

  @property(cc.Node)
  background: cc.Node = null;

  @property(cc.Float)
  scrollSpeed: number = Number("0.3");
  @property(cc.Boolean)
  isRunning: boolean = true;

  onLoad () {
    this.isRunning = true;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
  }

  start () {
      this.background.position = this.topPoint.position;
  }
    
  update (dt) {
      if(this.isRunning){
        this.background.setPosition( 0.0, this.background.position.y - this.scrollSpeed );
      }

      if ( this.background.position.y <= this.bottomPoint.position.y ) {
        this.background.setPosition( 0.0, this.topPoint.position.y);
      }
  }

  onKeyPressed(event){
    switch(event.keyCode) {
      case cc.macro.KEY.space:
          this.isRunning = !this.isRunning;
          break;
    }
  }
}
