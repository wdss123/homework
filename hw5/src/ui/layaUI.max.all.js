var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var mainUI=(function(_super){
		function mainUI(){
			
		    this.btn_start=null;
		    this.btn_info=null;

			mainUI.__super.call(this);
		}

		CLASS$(mainUI,'ui.mainUI',_super);
		var __proto__=mainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainUI.uiView);

		}

		mainUI.uiView={"type":"View","props":{"width":900,"height":600},"child":[{"type":"Image","props":{"y":128,"x":126,"width":900,"skin":"comp/bg.png","pivotY":127,"pivotX":126,"height":599}},{"type":"Button","props":{"y":510,"x":662,"width":180,"var":"btn_start","skin":"comp/button.png","label":"游戏开始","height":36}},{"type":"Button","props":{"y":458,"x":660,"width":180,"var":"btn_info","skin":"comp/button.png","label":"关于游戏","height":36}},{"type":"Label","props":{"y":79,"x":386,"width":127,"text":"世界杯对对碰","height":24,"fontSize":20,"font":"Arial","color":"#5bb93d","bold":true}}]};
		return mainUI;
	})(View);