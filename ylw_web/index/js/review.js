// JavaScript Document

	/*打字个数统计*/
	var oTxt=document.getElementById('text1');
	var oNumber=document.getElementById('number_word');
	
	var timer=null;
	oTxt.onfocus=function()
	{
		timer=setInterval(function(){
			
			oNumber.innerHTML=oTxt.value.length;
			
			},30)
	};
	
	oTxt.onblur=function()
	{
		clearInterval(timer);
	};
	
	/*评价按钮*/
	
	var oEval=document.getElementById('eval');
	var aSpan=oEval.getElementsByTagName('span');
	
	for(var i=0;i<aSpan.length;i++)
	{
		aSpan[i].index=i;
		aSpan[i].onmouseover=function()
		{
			for(var i=0;i<aSpan.length;i++)
			{
				aSpan[i].className="";
			}
			this.className="hover";
		};
		
	   aSpan[i].onclick=function()
	   {
			for(var i=0;i<aSpan.length;i++)
			{
				aSpan[i].className="";
			}
			this.className="active";
	   };
		
	}
