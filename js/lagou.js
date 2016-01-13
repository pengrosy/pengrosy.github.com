// JavaScript Document
$(function(){
	var oLagou=document.getElementById('lagou');
	var aLi=oLagou.getElementsByTagName('li');
	var oChange=document.getElementById("change");
	var aSpan=oChange.getElementsByTagName("span")[0];
	var aPosLi=[]//[{left:..,top:...},..{}];
	var content=0;
	var ready=true;
	var desc=["瀑布流","百度下拉搜索","照片墙","提示框","chromeApps","拖拽放大","拖拽碰撞","苹果桌面","分布运动","滑动幻灯片","倒计时幻灯片","手风琴","Path菜单","h5写的倒影","h5时钟","h5点击翻页","h5切换上下页","h5 3D环绕拖拽","h5 svg饼图","h5 raphael饼图","等待更新..."];
	var xg=["xg/Waterfallflow.html","xg/baidu.html","xg/Photowall.html","xg/Promptwindow.html","xg/chromeApps.html","xg/dragcenter.html","xg/dragcolltest.html","xg/apple.html","xg/Blockmotion.html","xg/slider/index.html","xg/Countdown.html","xg/accordion.html","xg/Path.html","xg/invertedimage.html","xg/clock.html","xg/pageturning.html","xg/changeprevnext.html","xg/3Dsurround.html","xg/svg-path.html","xg/raphael.html","xg/more.html"]
	//1.布局转换
	for(var i=0;i<aLi.length;i++){
		aPosLi.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop,width:aLi[i].offsetWidth,height:aLi[i].offsetHeight,opacity:1});
		aLi[i].style.left=aPosLi[i].left+'px';
		aLi[i].style.top=aPosLi[i].top+'px';
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.position='absolute';
		aLi[i].style.margin=0;
		aLi[i].innerHTML='<span><a href="'+xg[content]+'" target="_blank">'+desc[content]+'</a></span><img src="images/img'+content+++'.jpg">';	
		
		lagou(aLi[i]);
	}
	aSpan.onclick=function(){
		if(!ready) return;
		ready=false;
		down();	
		if(content==24){
			content=0;
		}
	};
	
	function getDir(obj,oEvent){
		var x = oEvent.pageX - getPos(obj).left - obj.offsetWidth/2;
		var y = getPos(obj).top + obj.offsetHeight/2 - oEvent.pageY;		
		// n 0 左 1 下  2 右   3 上
		return Math.round((Math.atan2(y,x)*180/Math.PI + 180)/90)%4;
	}		
	function lagou(oDiv){
		oDiv.onmouseover = function(ev){
			var oEvent = ev || event;
			var oFrom = oEvent.fromElement || oEvent.relatedTarget;			
			if(oDiv.contains(oFrom)){
				return;
			}			
			var oSpan = this.children[0];
			var n = getDir(this,oEvent);			
			switch(n){
				case 0:
					oSpan.style.left = "-300px";
					oSpan.style.top = "0";
					break;
				case 1:
					oSpan.style.left = "0";
					oSpan.style.top = "300px";
					break;
				case 2:
					oSpan.style.left = "300px";
					oSpan.style.top = "0";
					break;
				case 3:
					oSpan.style.left = "0";
					oSpan.style.top = "-300px";
					break;
			}			
			move(oSpan,{left:0,top:0});				
		};		
		oDiv.onmouseout = function(ev){
			var oEvent = ev || event;
			var oTo = oEvent.toElement || oEvent.relatedTarget;			
			if(oDiv.contains(oTo)){
				return ;
			}
			var oSpan = this.children[0];
			var n = getDir(this,oEvent);			
			switch(n){
				case 0:
					move(oSpan,{left:-300,top:0});
					break;
				case 1:
					move(oSpan,{left:0,top:300});
					break;
				case 2:
					move(oSpan,{left:300,top:0});
					break;
				case 3:
					move(oSpan,{left:0,top:-300});
					break;
			}				
		};	
	}	
	
	function down(){
		var i=aLi.length-1;
		var timer=setInterval(function(){
			(function(index){
				move(aLi[i],{left:oLagou.offsetWidth/2+150,top:oLagou.offsetHeight+150,width:0,height:0,opacity:0},{time:500,fn:function(){
					if(index==0){
						//准备数据	
						for(var i=0;i<aLi.length;i++){
							aLi[i].innerHTML='<span><a href="'+xg[content]+'" target="_blank">'+desc[content]+'</a></span><img src="images/img'+content+++'.jpg">';	
						}
						up();//放出来
					}
					
				}});
			})(i);				
			i--
			if(i==-1) clearInterval(timer);	
		},100);
	}
	function up(){
		var i=aLi.length-1;
		var timer=setInterval(function(){
			(function(index){
				move(aLi[i],aPosLi[i],{time:500,fn:function(){
					if(index==0){//完全放出来了，ready为true
						ready=true;	
					}
				}});
			})(i);
			i--;
			if(i==-1) clearInterval(timer);	
		},100);	
	}
});