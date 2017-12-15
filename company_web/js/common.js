// JavaScript Document
//如果是用62.5%   下面设置的就是10/320
//如果html{font-size:32px;} 下面设置的就是32/320
window.onload = window.onresize = function(){
	
	//新的字体大小= 新的宽度 * 标准字体的大小/标准宽度
	document.documentElement.style.fontSize = 10/320*document.documentElement.clientWidth + "px";
};