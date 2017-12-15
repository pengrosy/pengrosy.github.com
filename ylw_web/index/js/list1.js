var oSearchBox=getClass(document,'search_box')[0];
var oCurBox=getClass(oSearchBox,'cur_search')[0];
var aSearchList=getClass(oSearchBox,'l_search');
var iNow=0;

for(var i=0;i<aSearchList.length;i++){
   filter(aSearchList[i],i); 
}

function filter(obj,num){
    var aI=obj.getElementsByTagName('dd');
    var allIcon=oSearchBox.getElementsByTagName('i');
    var aIcon=obj.getElementsByTagName('i');
    var aDD=oCurBox.getElementsByTagName('dd');
    var len=aDD.length-1;  

    //清空条件
    aDD[aDD.length-1].onclick=function(){
        oCurBox.style.display='none';
        for(var i=0;i<aDD.length-1;i++){
            aDD[i].style.display='none';
        }
        for(var i=0;i<allIcon.length;i++){
            allIcon[i].className='';
        }
        iNow=0;
    }

    var oClose=aDD[num].getElementsByTagName('span')[0];
    //关闭当前选项
    oClose.onclick=function(){
        this.parentNode.style.display='none';
        for(var i=0;i<aIcon.length;i++){
            aIcon[i].className='';
        }
        iNow--;
        if(iNow==0){
             oCurBox.style.display='none';
             iNow=0;   
        } 
    };

    for(var i=0;i<aI.length;i++){
        aI[i].index=i;

        aI[i].onclick=function(){
            var oI=this.getElementsByTagName('i')[0];
            var oB=this.getElementsByTagName('b')[0];

            oCurBox.style.display='block';

            for(var i=0;i<aIcon.length;i++){
                aIcon[i].className='';
            }
            
            if(oB.className=='hover'){
                oI.className='active';
                oB.className='';
                //当前选择内容
                aDD[num].getElementsByTagName('b')[0].innerHTML=oB.innerHTML;
                aDD[num].style.display='block';
                iNow++;
                
            }else{
                oI.className='';
                oB.className='hover';
                aDD[num].style.display='none';
                iNow--;
                
            }
            
            
        };
        aI[i].onmouseover=function(){
            var oI=this.getElementsByTagName('i')[0];
            var oB=this.getElementsByTagName('b')[0];

            if(oI.className=='active'){
                return false;
            }else{
               oI.className=oB.className='hover'; 
            }
        }

        aI[i].onmouseout=function(){
            var oI=this.getElementsByTagName('i')[0];
            var oB=this.getElementsByTagName('b')[0];

            if(oI.className=='active'){
                return false;
            }else{
               oI.className=oB.className=''; 
            }
        }
    }

    console.log(iNow);
}

function ShowContent()
{ 
    alert(aDD.length)
};


   //查看详情
	 var oListDetail=getClass(document,'res_l')[0];
	 var aDetail=oListDetail.getElementsByTagName('li');
	   for(var i=0;i<aDetail.length;i++)
	   {
		   aDetail[i].onclick=function()
		   {
	          var checkDetail = this.getElementsByTagName('a')[0];
                location.href = checkDetail.href;
		   };
	   }
