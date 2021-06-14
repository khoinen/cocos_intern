import EffectManager from "./EffectManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onEnable(): void {
        EffectManager.scaleForever(this.node, 1, 1.1, 0.7);
    }
}
