// JavaScript Document
	var oBlock=document.getElementById('oBlock');
	var aLi=oBlock.getElementsByTagName('li');
	//alert(aLi.length);
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].index=i;
		aLi[i].onmouseover=function()
		{
		  //this.style.border="2px solid #e1e0e0";
		  this.style.boxShadow="0px 0px 10px #ededed";
		};
		
		aLi[i].onmouseout=function()
		{
		  //this.style.border="2px solid #fff";
		  this.style.boxShadow="0 0 0 #fff";
		};
	}
