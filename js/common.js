// JavaScript Document
function $(fn){
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded",fn,false);
	}else{
		document.attachEvent("onreadystatechange",function(){
			if(document.readyState=="complete"){
				fn && fn();
			}
		});
	}
};
function rnd(n,m){
	return Math.floor(Math.random()*(m-n) + n);
}

function getPos(obj){
	var l=t=0;	//存left
	l-=document.documentElement.clientLeft;
	t-=document.documentElement.clientTop;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent	//body没有定位父级	会返回null
	}
	return {left:l, top:t};
}

function addEvent(obj, name, fn)
{
	if(obj.addEventListener)
	{
		obj.addEventListener(name, fn, false);
	}
	else
	{
		obj.attachEvent('on'+name, fn);
	}
}

function move(obj,json,opational){
	opational=opational||{};
	opational.time=opational.time||700;
	opational.fn=opational.fn||null;
	opational.type=opational.type||'ease-out';	
	var start={};
	var dis={};	
	for(var key in json){
		start[key]=parseFloat(getStyle(obj,key));
		dis[key]=json[key]-start[key];
	}	
	var count=Math.round(opational.time/30);	
	var n=0;	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;		
		for(var key in json){
			switch(opational.type){
				case 'linear':
					var a=n/count;//0---1的数
					var cur=start[key]+dis[key]*a;
					break;	
				case 'ease-in':
					var a=n/count;//0---1的数
					var cur=start[key]+dis[key]*(a*a*a);
					break;	
				case 'ease-out':
					var a=1-n/count;//0---1的数
					var cur=start[key]+dis[key]*(1-a*a*a);
					break;
			}			
			if(key=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+(cur*100)+')';	
			}else{
				obj.style[key]=cur+'px';	
			}
		}		
		if(n==count){
			clearInterval(obj.timer);
			console.timeEnd('go');
			opational.fn && opational.fn();
		}
	},30);	
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];	
}