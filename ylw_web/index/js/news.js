//
(function(){
    var oMain=getClass(document,'news')[0];
    var oNewsBanner=getClass(oMain,'banner')[0];
    var aNewsLi=oNewsBanner.getElementsByTagName('li');
    var oResTab=getClass(oMain,'res_tabs')[0];
    var aResBtn=oResTab.getElementsByTagName('span');
    var aNewsUl=getClass(oMain,'news_list');
    var iNow=0,iTimer=null;

    //自动播放banner图
    iTimer=setInterval(tabs,4000);

    function tabs(){
        for(var i=0;i<aNewsLi.length;i++){
            aNewsLi[i].className='';
        }
        if(iNow>=aNewsLi.length-1) iNow=0;
        else iNow++;
        
        aNewsLi[iNow].className='on';

    }

    oNewsBanner.onmouseover=function(){
        clearInterval(iTimer);
    };

    oNewsBanner.onmouseout=function(){
        iTimer=setInterval(tabs,4000);
    };

    //点击切换内容
    for(var i=0;i<aResBtn.length;i++){
        aResBtn[i].index=i;
        aResBtn[i].onclick=function(){
            for(var i=0;i<aNewsUl.length;i++){
                aNewsUl[i].className='news_list';
                aResBtn[i].className='';
            }
            this.className='active';
            aNewsUl[this.index].className='news_list show';
        };
    }
})()








