var oSelect=document.getElementById('select_show');
var aSelBtn=oSelect.getElementsByTagName('a');
var oBoxImg=document.getElementById('box_img');
var imgArr=['images/list_show01.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg','images/13.jpg','images/14.jpg','images/15.jpg'];
var oBoxBot=getClass(document,'box_bot')[0];
var oBoxUl=oBoxBot.getElementsByTagName('ul')[0];
var aBoxBtn=oBoxUl.getElementsByTagName('li');
var oBoxNext=getClass(oBoxBot,'next')[0];
var oBoxPrev=getClass(oBoxBot,'prev')[0];
var oComment=document.getElementById('user_comment');
var aKids=getClass(oComment,'kids');
var oVipNext=getClass(oComment,'next')[0];
var oVipPrev=getClass(oComment,'prev')[0];
var n=0;
var oTelShow=document.getElementById('tel_show');
var oIconOpen=document.getElementById('icon_open');
var oMoreIntro=document.getElementById('more_intro');
var bOpen=true;
var oFace=document.getElementById('facility');
var oFacePic=oFace.getElementsByTagName('img')[0];
var aFaceBtn=oFace.getElementsByTagName('li');
var oFacePrev=getClass(oFace,'prev')[0];
var oFaceNext=getClass(oFace,'next')[0];
var fNum=0;
var oFaceArr=['images/facility_img01.jpg','images/hot_01.jpg','images/hot_02.jpg','images/hot_03.jpg','images/hot_04.jpg'];
var oSelBuy=document.getElementById('sel_buy');
var aCate=getClass(oSelBuy,'category');

//选择购买项目分类
for(var i=0;i<aCate.length;i++){
    selBuyItem(aCate[i]);
}

function selBuyItem(obj){
    var aLi=obj.getElementsByTagName('li');

    for(var i=0;i<aLi.length;i++){
      aLi[i].onclick=function(){
          clear();

          
          if(this.className=='other'){
            this.className='other bingo';
          }else{
            this.className='bingo';
          }
      }
    }

    function clear(){
      for(var i=0;i<aLi.length;i++){
        
        if(aLi[i].className=='other'||aLi[i].className=='other bingo'){
          aLi[i].className='other';
        }else{
          aLi[i].className='';
        }
      }
    }

}

//点评
comment('reviews',0,0);

function comment(id,num,iNow){
    var obj=document.getElementById(id);
    var oPercent=getClass(obj,'percent')[0].getElementsByTagName('b')[0];
    var timer=null,timer2=null;
    var aSum=getClass(obj,'sum');
    var aCountBtn=document.getElementById('count').getElementsByTagName('li');
    var oSay=document.getElementById('say');
    var aPerson=getClass(oSay,'person');

    //点击评价显示好中差
    for(var i=0;i<aCountBtn.length;i++){
        aCountBtn[i].index=i;
        aCountBtn[i].onclick=function(){
            for(var i=0;i<aCountBtn.length;i++){
                aCountBtn[i].className='';
            }
            this.className='on';

            if(this.index==0) allShow();
            if(this.index==1) goodbad('good');
            if(this.index==2) goodbad('common');
            if(this.index==3) goodbad('bad');  
        };
    }

    function goodbad(sClass){
        for(var i=0;i<aPerson.length;i++){
            if(aPerson[i].className=='person '+sClass){
                for(var j=0;j<aPerson.length;j++){
                    aPerson[j].style.display='none';
                }
                aPerson[i].style.display='block';
            }
        }
    }

    function allShow(){
        for(var i=0;i<aPerson.length;i++){
            aPerson[i].style.display='block';
        }
    }

    timer=setInterval(function(){
      if(num==94){
        num=94;
        clearInterval(timer);
      }else{
        num++;
      } 
      oPercent.innerHTML=num+'%';
    },15);

    timer2=setInterval(function(){
      
      for(var i=0;i<aSum.length;i++){
          var oW=aSum[i].getElementsByTagName('span')[0];

          if(i==0){
            add(0.98);
          }else if(i==1){
            add(0.02);
          }else{
            add(0.01);
          }
          
          function add(n){
            oW.style.width=Math.ceil(iNow*n)+'px';
            if(iNow==aSum[i].offsetWidth){
              iNow=aSum[i].offsetWidth;
              clearInterval(timer2);
            }else{
              iNow++;
            }
          }
      }
    },10);
}

//文化
changePic('scene2');

function changePic(id){
   var obj=document.getElementById(id);
   var oScPrev=getClass(obj,'prev')[0];
   var oScNext=getClass(obj,'next')[0];
   var oScUl=obj.getElementsByTagName('ul')[0];
   var aScLi=oScUl.getElementsByTagName('li');

   oScUl.style.width=(aScLi[0].offsetWidth+11)*aScLi.length-11+'px';

   oScNext.onclick=function(){
      oScUl.style.left=-(oScUl.offsetWidth-obj.offsetWidth)+'px';
   };

   oScPrev.onclick=function(){
      oScUl.style.left=0;
   };

   for(var i=0;i<aScLi.length;i++){
        tour(aScLi[i]);
   }
}

function tour(obj){
    var oName=obj.getElementsByTagName('p')[0];
    var oMask=obj.getElementsByTagName('div')[0];

    obj.onmouseover=function(){
        oName.style.bottom='-30px';
        oMask.style.opacity=1;
        oMask.style.filter='alpha(opacity=100)';
    };
    obj.onmouseout=function(){
        oName.style.bottom=0;
        oMask.style.opacity=0;
        oMask.style.filter='alpha(opacity=0)';
    };
}

oFace.onmouseover=function(){
  oFacePrev.style.opacity=oFaceNext.style.opacity=1;
  oFacePrev.style.filter=oFaceNext.style.filter='alpha(opacity=100)';
};

oFace.onmouseout=function(){
  oFacePrev.style.opacity=oFaceNext.style.opacity=0;
  oFacePrev.style.filter=oFaceNext.style.filter='alpha(opacity=0)';
};

//设施服务切换图片
for(var i=0;i<aFaceBtn.length;i++){
  aFaceBtn[i].index=i;
  aFaceBtn[i].onclick=function(){
    for(var i=0;i<aFaceBtn.length;i++){
      aFaceBtn[i].className='';
    }
    oFacePic.src=oFaceArr[this.index];
    this.className='on';
    fNum=this.index;
  };
}

oFacePrev.onclick=function(){
  if(fNum<=0) fNum=0;
  else fNum--;
  oFacePic.src=oFaceArr[fNum];
  for(var i=0;i<aFaceBtn.length;i++){
    aFaceBtn[i].className='';
  }
  aFaceBtn[fNum].className='on';
};

oFaceNext.onclick=function(){
  if(fNum>=aFaceBtn.length-1) fNum=aFaceBtn.length-1;
  else fNum++;
  oFacePic.src=oFaceArr[fNum];
  for(var i=0;i<aFaceBtn.length;i++){
    aFaceBtn[i].className='';
  }
  aFaceBtn[fNum].className='on';
};

//点击显示电话
oTelShow.onclick=function(){
    oTelShow.innerHTML='0571-8888888';
};

oIconOpen.onclick=function(){
    if(bOpen){
      this.className='icon_open open_rot';
      oMoreIntro.style.height='auto';  
    }else{
      this.className='icon_open';
      oMoreIntro.style.height='16px';  
    }
    bOpen=!bOpen;
};

//右侧会员评论内容
oVipNext.onclick=function(){
    
    for(var i=0;i<aKids.length;i++){
        aKids[i].className='kids';
    }
    
    if(n>=aKids.length-2){
       oVipNext.className='next'; 
       n=aKids.length-1;
    }else{
        n++;
    }
    aKids[n].className='kids z-show';
    oVipPrev.className='prev p_act';
};
oVipPrev.onclick=function(){
    
    for(var i=0;i<aKids.length;i++){
        aKids[i].className='kids';
    }
    
    if(n<=aKids.length-2){
       oVipPrev.className='prev'; 
       n=0;
    }else{
        n--;
    }
    aKids[n].className='kids z-show';
    oVipNext.className='next n_act';
};

//切换主图
oBoxUl.style.width=(aBoxBtn[0].offsetWidth+8)*aBoxBtn.length+'px';

oBoxNext.onclick=function(){
   oBoxUl.style.left=-(oBoxUl.offsetWidth-607)+'px'; 
}

oBoxPrev.onclick=function(){
   oBoxUl.style.left='0px'; 
}

for(var i=0;i<aBoxBtn.length;i++){
   aBoxBtn[i].index=i;
   aBoxBtn[i].onclick=function(){
       oBoxImg.src=imgArr[this.index]; 
   }; 
}

//点击切换详情内容+快速导航
var quickArr=[640,960,1435,1895,2150,2400,2836];

for(var i=0;i<aSelBtn.length;i++){
    aSelBtn[i].index=i;
    aSelBtn[i].onclick=function(ev){
        var ev=ev||event;
        clear();
        this.className='on';

        if(this.index==aSelBtn.length-1||this.index==aSelBtn.length-2){
          comment('reviews',0,0);
        }
		
		document.documentElement.scrollTop=quickArr[this.index];
		document.body.scrollTop=quickArr[this.index];
    };
}

function clear(){
    for(var i=0;i<aSelBtn.length;i++){
        aSelBtn[i].className='';
    }
}



window.onscroll=function(ev){
    var ev=ev||event;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var oSelect=document.getElementById('select_show');

    if(scrollTop>640){
        oSelect.className='detail fixed';
    }else{
        oSelect.className='detail';
    }
}