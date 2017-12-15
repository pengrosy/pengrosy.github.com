// JavaScript Document
    window.onscroll=function()
	{
		
		var oAbout=document.getElementById('about');
		var aLi=oAbout.getElementsByTagName('li');
		var oRedSign=document.getElementById('red_sign');

     /*以下为红色标记显示*/
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].index=i;
			aLi[i].onclick=function()
			{
                  oRedSign.style.top=56+(this.index*40)+"px";
			};
		}
		
		
		
		
		/*以下为返回顶部*/

	var oBack=document.getElementById('toBack');
	var timer=null;
	var 用户滚的=true;
	oBack.onclick=function(){
		move(0,1000);
		function move(iTarget,time){
			var start=document.documentElement.scrollTop||document.body.scrollTop;
			var dis=iTarget-start;
			var count=Math.round(time/30);
			var n=0;
			
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=1-n/count;
				var cur=start+dis*(1-a*a*a);
				document.documentElement.scrollTop=cur;
				document.body.scrollTop=cur;
				用户滚的=false;
				if(n==count){
					clearInterval(timer);	
				}
			},30);
		}
	};	
	
	window.onscroll=function(){
		//console.log(用户滚的);
		if(用户滚的){
			clearInterval(timer);	
		}
		用户滚的=true;
		
		var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
		
		if(scrTop>=600){
			oBack.style.display='block';	
		}else{
			oBack.style.display='none';	
		}
	};
};	
		
