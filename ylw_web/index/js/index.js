var oBanner=getClass(document,'banner')[0];
var oBannerUl=getClass(document,'ban_list')[0];
var oBannerLi=oBannerUl.getElementsByTagName('li');
var oBannerOl=getClass(oBanner,'nav_btn')[0];
var oBannerBtn=oBannerOl.getElementsByTagName('li');
var timer=null,num=0;
var oHotCity=getClass(document,'hot_city')[0];
var aHotBtn=getClass(oHotCity,'hot_menu')[0].getElementsByTagName('li');
var oHotItem=document.getElementById('hot_item');
var aHotItemUl=oHotItem.getElementsByTagName('ul');
var aHotItemImg=oHotItem.getElementsByTagName('img');
var oQuickBox=document.getElementById('q_box');
var aNavBtn=getClass(oQuickBox,'ban_nav')[0].getElementsByTagName('li');
var classArr=['rest','ask','plane','train'];
var aBanCon=getClass(oQuickBox,'con');
var oHotJd=document.getElementById('hot_jd');
var aHotJdPic=oHotJd.getElementsByTagName('img');


for(var i=0;i<aHotJdPic.length;i++){
	aHotJdPic[i].onmouseover=function(){
		this.style.WebkitTransform='scale(1.0)';
		this.style.MozTransform='scale(1.0)';
		this.style.MsTransform='scale(1.0)';
		this.style.transform='scale(1.0)';
	};
	aHotJdPic[i].onmouseout=function(){
		this.style.WebkitTransform='scale(1)';
		this.style.MozTransform='scale(1)';
		this.style.MsTransform='scale(1)';
		this.style.transform='scale(1)';
	};
}

for(var i=0;i<aHotItemImg.length;i++){
	aHotItemImg[i].onmouseover=function(){
		this.style.WebkitTransform='scale(1.2)';
		this.style.MozTransform='scale(1.2)';
		this.style.MsTransform='scale(1.2)';
		this.style.transform='scale(1.2)';
	};
	aHotItemImg[i].onmouseout=function(){
		this.style.WebkitTransform='scale(1)';
		this.style.MozTransform='scale(1)';
		this.style.MsTransform='scale(1)';
		this.style.transform='scale(1)';
	};
}	


setTimeout(function(){
  oQuickBox.style.left=0;
},0);

for(var i=0;i<aNavBtn.length;i++){
  aNavBtn[i].index=i;
  aNavBtn[i].onclick=function(){
      for(var i=0;i<aNavBtn.length;i++){
          aNavBtn[i].style.backgroundImage='url(images/icon_nav'+(i+1)+'.png)';
          aNavBtn[i].style.backgroundColor='#f3f3f3';
          aNavBtn[i].className=classArr[i];
          aBanCon[i].className='con';
      }

      this.style.backgroundImage='url(images/icon_nav'+(this.index+1)+'_on.png)';
      this.style.backgroundColor='#fff';
      this.className=classArr[this.index]+' active';
      aBanCon[this.index].className='con show';
  };
}




//设置图片父级总宽，防止图片换行

window.onresize=function()
{
	var oBannerUl=getClass(document,'ban_list')[0];
	var oBannerLi=oBannerUl.getElementsByTagName('li');
	for(var i=0;i<oBannerLi.length;i++){
		oBannerLi[i].style.width=document.documentElement.clientWidth+'px';	
	}
	oBannerUl.style.width=oBannerLi[0].offsetWidth*oBannerLi.length+'px';
	bannerTab();
	 tab();
};

//点击切换banner图
function bannerTab()
{
	for(var i=0;i<oBannerBtn.length;i++){
	   oBannerBtn[i].index=i;
	   oBannerBtn[i].onclick=function(){
		  Clear();
		  this.className='active';
		  oBannerUl.style.left=-this.index*oBannerLi[0].offsetWidth+'px';
		  num=this.index;
	   }; 
	    tab();
	}
};
bannerTab();
timer=setInterval(tab,8000);

//滑入banner停止播放，滑出继续播放
oBanner.onmouseover=function(){
    clearInterval(timer);
};
oBanner.onmouseout=function(){
    timer=setInterval(tab,8000);
};

function tab(){
    Clear();
    if(num>=oBannerBtn.length-1) num=0;
    else num++;
    oBannerBtn[num].className='active';
    oBannerUl.style.left=-num*oBannerLi[0].offsetWidth+'px';
}

function Clear(){
    for(var i=0;i<oBannerBtn.length;i++){
        oBannerBtn[i].className='';
    }
}

//切换热门城市
/*for(var i=0;i<aHotBtn.length;i++){
    aHotBtn[i].index=i;
    aHotBtn[i].onclick=function(){
        for(var i=0;i<aHotItemUl.length;i++){
            aHotItemUl[i].className='';
            if(aHotBtn[i].index==2) aHotBtn[i].className='special';
            else aHotBtn[i].className='';
        }
        aHotItemUl[this.index].className='show';
        this.className='on';
    }
}
*/



for(var i=0;i<aHotBtn.length;i++)
{
	aHotBtn[i].index=i;
    aHotBtn[i].onclick=function(){
        for(var i=0;i<aHotItemUl.length;i++){
            aHotItemUl[i].className=aHotBtn[i].className='';
        }
        aHotItemUl[this.index].className='show';
        this.className='on';
    }

}











