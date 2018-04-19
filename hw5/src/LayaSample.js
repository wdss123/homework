// 首页
(() =>{
    (() => {
        Laya.init(900, 600);
        Laya.stage.alignH = 'center';
        Laya.stage.alignV = 'middle';
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        LoadRes();
        // 显示帧数
        Laya.Stat.show(0, 0);
    })();
    function LoadRes () {
        var resArray = ['res/atlas/comp.atlas'];
        Laya.loader.load(resArray, Laya.Handler.create(null, onLoaded));
    }
    function onLoaded () {
        var start = new Start();
        start.init();
        Laya.stage.addChild(start);
    }
})();


