function css(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];	
}

function Move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var onOff=true;
		for(var attr in json){
			var iCur=0;
			if(attr=='opacity'){
				iCur=parseInt(parseFloat(css(obj,attr))*100);	
			}else{
				iCur=parseInt(css(obj,attr));
			}
			
			var speed=(json[attr]-iCur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(iCur!=json[attr]) onOff=false;
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity='+(iCur+speed)+')';
				obj.style.opacity=(iCur+speed)/100;
			}else{
				obj.style[attr]=iCur+speed+'px';	
			}
		}
		if(onOff){
			clearInterval(obj.timer);
			if(typeof fn=='function') fn();	
		}
	},15);
}