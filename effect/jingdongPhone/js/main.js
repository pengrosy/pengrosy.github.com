function getClass(oPar,sClass){
	var aEle=(oPar||document).getElementsByTagName('*');
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var arr=[];
	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			arr.push(aEle[i]);	
		}
	}
	return arr;
};
window.onload=function(){
	var oSlider=document.getElementById('slider');
	var oSliderList=document.getElementById('slider-list');
	var aSliderLi=oSliderList.getElementsByTagName('li');
	var aBtn=getClass(oSlider,'point');
	var len=aSliderLi.length;
	var num=0;
	var timer=null,iTimer=null;
	var oClient=document.getElementById('client');
	var oCloseBtn=document.getElementById('icon_close');
	var oSeckill=document.getElementById('seckill');
	var aSecTime=getClass(oSeckill,'seckill-time')
	var oTheme=document.getElementById('theme');
	var oThemeBox=getClass(oTheme,'theme-box');
	var n=0;

	//关闭客户端广告
	touch.on(oCloseBtn,'tap',function(){
		oClient.style.display='none';
	});
	
	for(var i=0;i<len;i++){
		aSliderLi[i].style.width=window.screen.width-18+'px';	
	}
	oSliderList.style.width=aSliderLi[0].offsetWidth*len+'px';	//计算整个ul的宽
	
	touch.on(oSliderList,'touchstart',function(e){
		e.preventDefault();
		clearInterval(timer);
	});
	//左滑换到下一张
	touch.on(oSliderList,'swipeleft',function(){
		num++;
		if(num>aBtn.length-1) num=0;
		Tab();
	});
	//右滑换到上一张
	touch.on(oSliderList,'swiperight',function(){
		num--;
		if(num<0) num=aBtn.length-1;
		Tab();
	});
	function Tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='point';	
		}
		Move(oSliderList,{left:-num*aSliderLi[0].offsetWidth});
		aBtn[num].className='point selected';
	}
	timer=setInterval(fnAuto,5000);
	//自动轮播图片
	function fnAuto(){
		num++;
		if(num>aBtn.length-1) num=0;
		Tab();
	};
	touch.on(oSliderList,'touchend',function(){
		timer=setInterval(fnAuto,5000);
	});
	//倒计时
	iTimer=setInterval(Countdown,1000);
	
	function Countdown(){
		var newTime=new Date('April 16,2015 00:00:00');
		var nowTime=new Date();
		var t=Math.floor((newTime-nowTime)/1000);
		var str='';
		
		if(t>0){
			str=add(Math.floor(t%86400/3600))+add(Math.floor(t%86400%3600/60))+add(t%60);
			for(var i=0;i<aSecTime.length;i++){
				aSecTime[i].innerHTML=str.charAt(i);	
			}
		}else{
			clearInterval(iTimer)
		}
	};
	function add(n){
		return n<10?'0'+n:''+n;	
	};
	Countdown();
	//主题馆按序换图
	function Change(obj){
		var iNow=0;
		var aThemeImg=obj.getElementsByTagName('img');
		var iLen=aThemeImg.length;
		
		setInterval(function(){
			Clear();
			iNow++;
			aThemeImg[iNow%iLen].style.opacity=1;
			aThemeImg[iNow%iLen].style.display='';
		},8000)
		function Clear(){
			for(var i=0;i<iLen;i++){
				aThemeImg[i].style.display='none';
			}
		}
	};
	for(var i=0;i<oThemeBox.length;i++){
		Change(oThemeBox[i]);
	}
}