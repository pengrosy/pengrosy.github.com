// JavaScript Document
$(function(){
	var oCon=document.getElementById("connect");
	var aLi=oCon.getElementsByTagName("li");
	var i=0;
	var timer = setInterval(function(){
		(function(index){
			move(aLi[index],{left:200,opacity:1},{time:1000})	
		})(i)
		i++;
		if(i==aLi.length){
			clearInterval(timer);	
		}	
	},200);	
});