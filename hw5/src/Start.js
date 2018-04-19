// 派生出登陆js
var Start = function () {
    Start.super(this); // 调用父类的构造函数

    Start.prototype.init = function () {
        this.btn_info.on(Laya.Event.CLICK, this, this.onInfo);
        this.btn_start.on(Laya.Event.CLICK, this, this.onStart);
    }
    // 关于按钮
    Start.prototype.onInfo = function () {
        console.log('123');
    }
    // 游戏开始按钮
    Start.prototype.onStart = function () {
        console.log('456');
    }
}
Laya.class(Start, 'Start', mainUI); // 设置继承