// JavaScript Document
$(function(){
	var oPage4=document.getElementById("page4");
	var oUl=oPage4.children[1];
	var aLi=oUl.children;
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			//alert(this.innerHTML);
			var thisDiv=this.getElementsByTagName("div")[0];			
			move(thisDiv,{opacity:1,bottom:0},{duration:300});
		};
		aLi[i].onmouseout=function(){
			var thisDiv=this.getElementsByTagName("div")[0];
			move(thisDiv,{opacity:0,bottom:-81},{duration:300});
		};
	}
});