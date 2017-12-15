// JavaScript Document

var oSelBuy=document.getElementById('sel_buy');
var aCate=getClass(oSelBuy,'category');


//房型类表
var oPc=document.getElementById('pc1');
var aBimg=getClass(oPc,'bImg');
var aThuImg=getClass(oPc,'thumb');
for(var i=0;i<aThuImg.length;i++)
{
	aThuImg[i].index = i;
	var aImg=aThuImg[i].getElementsByTagName('li');
	for(var j=0;j<aImg.length;j++)
	{ 
	  aImg[j].index=j;
	  aImg[j].onmouseover=function()
	  {
		  aBimg[this.parentNode.index].style.left=this.index*80+'px';
          aBimg[this.parentNode.index].getElementsByTagName('img')[0].src = this.getElementsByTagName('img')[0].src;
	  };

	  aImg[j].onmouseout=function()
	  {
		  aBimg[this.parentNode.index].style.left=-500+'px';
		 //alert(111);  
	  };

	}
}


//周边
changePic('scene');
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
  oFacePrev.style.opacity=oFaceNext.style.opacity=0;
  oFacePrev.style.filter=oFaceNext.style.filter='alpha(opacity=0)';
};

oFace.onmouseout=function(){
  oFacePrev.style.opacity=oFaceNext.style.opacity=1;
  oFacePrev.style.filter=oFaceNext.style.filter='alpha(opacity=100)';
};


window.onscroll=function(ev){
    var ev=ev||event;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var oSelect=document.getElementById('select_show');
    //document.title=scrollTop;
    if(scrollTop>860){
        oSelect.className='detail fixed';
    }else{
        oSelect.className='detail';
    }
}