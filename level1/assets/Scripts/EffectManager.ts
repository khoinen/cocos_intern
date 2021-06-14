
const {ccclass, property} = cc._decorator;

const tween = cc.tween;

@ccclass
export default class EffectManager extends cc.Component {

    //Làm scene tối dần, khi tối hoàn toàn sẽ gọi callback để chuyển cảnh
    static hideScene(callback = null, node: cc.Node = null) : void {
        var shadow = cc.find("Canvas/Shadow");
        if (shadow)
        {
            if (callback)
            {
                tween(shadow).to(0.4, {opacity: 255}).call(function() {
                    callback(node);
                }.bind(this)).start();
            }
        }
    }

    //Làm scene sáng dần
    static showScene(callback = null) : void {
        var shadow = cc.find("Canvas/Shadow");
        if (shadow)
        {
            tween(shadow).to(0.4, {opacity: 0}).start();
        }
    }
   
    static effectFail() : void {
        var shadow = cc.find("Canvas/Shadow");
        var fail = cc.find("Canvas/Fail");
        if (shadow && fail)
        {
            tween(shadow).to(0.2, {opacity: 150, }, {easing: "cubicOut"}).start();
            tween(fail).to(0.2, {scale: 1, opacity: 255}, {easing: "cubicOut"}).start();
        }
    }

    static effectSuccess() : void {
        var shadow = cc.find("Canvas/Shadow");
        var success = cc.find("Canvas/Success");
        if (shadow && success)
        {
            tween(shadow).to(0.2, {opacity: 150, }, {easing: "cubicOut"}).start();
            tween(success).to(0.2, {scale: 0.7, opacity: 255}, {easing: "cubicOut"}).start();
        }
    }
    
    //Hiệu ứng scale to ra
    static effectScaleOption(node: cc.Node, timeScale: number) : void {
        node.active = true;
        node.scale = 0;
        tween(node).to(timeScale, {scale: 1, opacity: 255}, {easing: "backOut"}).start();
    }

    static effectHideButton(node: cc.Node, timeScale: number): void {
        tween(node).to(timeScale, {scale: 0, opacity: 0}, {easing: "backOut"}).start();
    }

    //Hiển thị/Ẩn các option
    static showUI(isShow: boolean) : void {
        cc.find("Canvas/Level").active = isShow;
        cc.find("Canvas/OptionContainer").active = isShow;
    }

    //Hiệu ứng nhấy nháy
    static flicker(node: cc.Node, times: number) : void {
        tween(node).repeat(times, tween().to(0.05, {opacity: 0}).delay(0.1).to(0.05, {opacity: 255})).start();
    }

    //Hiển thị tick xanh ở Option người chơi chọn
    static showTick(option: number, node: cc.Node = null) {
        if (node)
            node.getChildByName("TrueAnswer").active = true;
        else
            cc.find("Canvas/Level/Line/TrueAnswer").active = true;
        var optionContainer = cc.find("Canvas/OptionContainer").getChildByName("option" + (option + 1));
        switch (option)
        {
            case 0:
                optionContainer.getChildByName("tick").active = true;
                break;
            case 1:
                optionContainer.getChildByName("tick").active = true;
                break;
            case 2:
                optionContainer.getChildByName("tick").active = true;
            default:
                break;
        }
    }

    //Hiển thị X ở Option người chơi chọn
    static showX(option: number, node: cc.Node = null) {
        if (node)
            node.getChildByName("FalseAnswer").active = true;
        else
            cc.find("Canvas/Level/Line/FalseAnswer").active = true;
            
        var optionContainer = cc.find("Canvas/OptionContainer").getChildByName("option" + (option + 1));
        switch (option)
        {
            case 0:
                optionContainer.getChildByName("x").active = true;
                break;
            case 1:
                optionContainer.getChildByName("x").active = true;
                break;
            case 2:
                optionContainer.getChildByName("x").active = true;
            default:
                break;
        }
    }

    //Hiệu ứng tiền bay
    static effectFlyMoney(child: cc.Prefab, parent: cc.Node): void {
        var tempNode = [];
        for (var i = 0; i < 11; ++i)
        {
            var node = cc.instantiate(child);
            tempNode.push(node);
            parent.addChild(node);
        }

        let ui = cc.find("Canvas/UI");
        let _ui = ui.getComponent("UIController");
        let point = ui.convertToNodeSpaceAR(_ui.point.convertToWorldSpaceAR(ui));

        tween(tempNode[0]).to(1, {position: cc.v3(-110, 50)}, {easing: "quintOut"}).delay(0).bezierTo(0.5, cc.v2(-110, 50), cc.v2(-120, 350), cc.v2(point)).delay(0.2).call(() => {
            tempNode[0].active = false;
            tempNode[0].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[1]).to(1, {position: cc.v3(-52, 143)}, {easing: "quintOut"}).delay(0.05).bezierTo(0.5, cc.v2(-52, 143), cc.v2(-65, 310), cc.v2(point)).delay(0.2).call(() => {
            tempNode[1].active = false;
            tempNode[1].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[2]).to(1, {position: cc.v3(-240, 114)}, {easing: "quintOut"}).delay(0.05).bezierTo(0.5, cc.v2(-240, 114), cc.v2(-310, 300), cc.v2(point)).delay(0.2).call(() => {
            tempNode[2].active = false;
            tempNode[2].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[3]).to(1, {position: cc.v3(100, 200)}, {easing: "quintOut"}).delay(0.01).bezierTo(0.5, cc.v2(100, 200), cc.v2(305, 210), cc.v2(point)).delay(0.2).call(() => {
            tempNode[3].active = false;
            tempNode[3].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[4]).to(1, {position: cc.v3(165, 202)}, {easing: "quintOut"}).delay(0.1).bezierTo(0.5, cc.v2(165, 202), cc.v2(360, 310), cc.v2(point)).delay(0.2).call(() => {
            tempNode[4].active = false;
            tempNode[4].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[5]).to(1, {position: cc.v3(102, 280)}, {easing: "quintOut"}).delay(0.1).bezierTo(0.5, cc.v2(102, 280), cc.v2(111, 400), cc.v2(point)).delay(0.2).call(() => {
            tempNode[5].active = false;
            tempNode[5].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[6]).to(1, {position: cc.v3(208, 105)}, {easing: "quintOut"}).delay(0.15).bezierTo(0.5, cc.v2(208, 105), cc.v2(360, 142), cc.v2(point)).delay(0.2).call(() => {
            tempNode[6].active = false;
            tempNode[6].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[7]).to(1, {position: cc.v3(-193, -169)}, {easing: "quintOut"}).delay(0.15).bezierTo(0.5, cc.v2(-193, -169), cc.v2(-322, 40), cc.v2(point)).delay(0.2).call(() => {
            tempNode[7].active = false;
            tempNode[7].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[8]).to(1, {position: cc.v3(-100, -215)}, {easing: "quintOut"}).delay(0.2).bezierTo(0.5, cc.v2(-100, -215), cc.v2(127, -280), cc.v2(point)).delay(0.2).call(() => {
            tempNode[8].active = false;
            tempNode[8].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[9]).to(1, {position: cc.v3(71, -121)}, {easing: "quintOut"}).delay(0.2).bezierTo(0.5, cc.v2(71, -121), cc.v2(330, -88), cc.v2(point)).delay(0.2).call(() => {
            tempNode[9].active = false;
            tempNode[9].position = cc.v3(0, 0)
        }).start();
        tween(tempNode[10]).to(1, {position: cc.v3(35, -2)}, {easing: "quintOut"}).delay(0.025).bezierTo(0.5, cc.v2(35, -2), cc.v2(0, 0), cc.v2(point)).delay(0.2).call(() => {
            tempNode[10].active = false;
            tempNode[10].position = cc.v3(0, 0)
        }).start();
    }

    //Button dần hiện ra
    static showButton(node: cc.Node, timeScale: number): void {
        node.active = true;
        node.scale = 0;
        node.opacity = 0;
        tween(node).to(timeScale, {scale: 1, opacity: 255}, {easing: "quadIn"}).start();
    }

    //Hiệu ứng nút to nhỏ liên tục
    static scaleForever(node: cc.Node, min: number = null, max: number = null, timeScale: number = null): void {
        if (!(min && max && timeScale))
        {
            cc.Tween.stopAllByTarget(node);
            return;
        }
        node.active = true;
        node.scale = 1;
        node.opacity = 0;
        tween(node).to(timeScale, {scale: max, opacity: 255})
        .repeatForever(
            tween().to(timeScale, {scale: min}).to(timeScale, {scale: max})
        ).start();
    }

    //Hiệu ứng nút Tap To Start đầu game
    static effectScaleStart(node: cc.Node): void {
        node.active = true;
        tween(node).to(0.25, {scale: 0.95}, {easing: "backOut"})
                .repeatForever(
                    tween().to(0.8, {scale: 0.95}, {easing: "backOut"})
                        .delay(0.4)
                        .to(0.8, {scale:1.05}, {easing: "backOut"})
                        .delay(0.4)
                )
                .start();
    }

    static effectScaleButton(node: cc.Node, x: number, y: number, duration: number): void {
        node.active = true;
        node.opacity = 255;
        tween(node).parallel(
                tween().to(duration, {scaleX: x + 0.1}, {easing: "cubicOut"}).to(0.3, {scaleX: x}),
                tween().to(duration, {scaleY: y + 0.1}, {easing: "cubicOut"}).to(0.3, {scaleY: y})
            ).start();
    }
}
