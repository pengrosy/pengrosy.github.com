// JavaScript Document
$(function(){
	var oMac=document.getElementById("mac");
	var oPrev=oMac.children[0].getElementsByTagName("a")[0];
	var oNext=oMac.children[0].getElementsByTagName("a")[1];
	var oOl=oMac.getElementsByTagName("ol");
	var aCardHead=oMac.children[0].getElementsByTagName("li");
	var oFocus=oMac.children[1];
	var timer=null;
	var R = 4;
	var C = 7;
	var len = R*C;	
	for(var r = 0; r < R; r++){
		for(var c = 0; c < C; c++){
			var oSpan = document.createElement("span");		
			oSpan.style.width = oFocus.offsetWidth/C + "px";
			oSpan.style.height = oFocus.offsetHeight/R + "px";
			oFocus.appendChild(oSpan);
			oSpan.style.left = oSpan.offsetWidth*c + "px";
			oSpan.style.top  = oSpan.offsetHeight*r + "px";
			oSpan.style.backgroundPosition = -oSpan.offsetLeft +"px -" + oSpan.offsetTop + "px";
		}
	}	
	var aSpan = oFocus.children;
	var iNow = 0;
	oNext.onclick = function(){		
		/*span 老图  div 新图*/		
		next();
	};
	timer=setInterval(next,3000);
	for(var i=0;i<aCardHead.length;i++){
		(function(index){
			aCardHead[i].onclick=function(){
				dot(index);
				oldImg(index);
				newImg(index);
			};
		})(i)
	}	
	oPrev.onclick = function(){		
		prev();
	};
	oPrev.onmouseover=oNext.onmouseover=oFocus.onmouseover=function(){
		clearInterval(timer);
	};
	oFocus.onmouseout=function(){
		timer=setInterval(next,3000);
	};
	function next(){
		oldImg(iNow);
		iNow++;
		if(iNow == 5){
			iNow = 0;
		}
		newImg(iNow);
		dot(iNow);
	}
	function prev(){
		oldImg(iNow);			
		if(iNow == 0){
			iNow = 4;
		}else{
			iNow--;
		}
		newImg(iNow);
		dot(iNow);
	}
	function oldImg(iNow){
		for(var i = 0; i < len; i++){
			aSpan[i].style.transition = "none";
			aSpan[i].style.transform = "none";
			aSpan[i].style.opacity = "1";
			aSpan[i].style.backgroundImage = "url(images/focus"+iNow+".jpg)";
		}		
	}
	function newImg(iNow){
		oFocus.style.backgroundImage = "url(images/focus"+iNow+".jpg)";		
		for(var i = 0; i < len; i++){
			aSpan[i].style.transition = "0.8s all ease";
			//var x = span.中心 - div.中心
			var x = aSpan[i].offsetLeft + aSpan[i].offsetWidth/2 - oFocus.offsetWidth/2;
			var y = aSpan[i].offsetTop + aSpan[i].offsetHeight/2 - oFocus.offsetHeight/2;
			aSpan[i].style.transform = "translate("+x+"px,"+y+"px) rotateX("+rnd(-180,180)+"deg)  rotateY("+rnd(-180,180)+"deg)";			
			//运动消失
			aSpan[i].style.opacity = "0";	
		}
	}
	function dot(iNow){
		for(var i=0;i<aCardHead.length;i++){
			aCardHead[i].className="";
		}
		aCardHead[iNow].className="active";
	}		
})