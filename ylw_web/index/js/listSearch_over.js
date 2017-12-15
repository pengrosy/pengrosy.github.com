// JavaScript Document
	  var oUl=getClass(document,'listSearch')[0];
	  var aLi=oUl.getElementsByTagName('li');
	  
	  for(var i=0;i<aLi.length;i++)
	  {
		  aLi[i].onmouseover=function()
		  {
			 this.style.boxShadow="0 0 10px #ededed"; 
		  }
		  aLi[i].onmouseout=function()
		  {
			 this.style.boxShadow="0 0 0 #fff"; 
		  }		  
	  } 