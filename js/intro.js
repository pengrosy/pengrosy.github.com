// JavaScript Document
$(function(){
	var str = "精通DIV+CSS页面架构和布局；精通原生JS，熟悉JQuery等主流框架；精通Seajs、Requirejs、Ajax、Jsonp、Angularjs等运作机制；熟悉H5、CSS3的新标签及运用。";	
	var oIntro=document.getElementById("intro");
	for(var i = 0; i < str.length; i++){
		var oSpan = document.createElement("span");
		oSpan.innerHTML = str[i];
		oIntro.appendChild(oSpan);
	}	
	var aSpan = oIntro.children;
	var i = 0; 	
	var timer = setInterval(function(){
		aSpan[i].className = "active";
		i++;
		if(i == str.length){
			clearInterval(timer);
		}
	},100);	
});