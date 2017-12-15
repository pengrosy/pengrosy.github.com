//获取class元素
function getClass(oPar,sClass){
    var aEle=(oPar||document).getElementsByTagName('*');
    var arr=[];
    var res=new RegExp('\\b'+sClass+'\\b','i');

    for(var i=0;i<aEle.length;i++){
        if(res.test(aEle[i].className)){
            arr.push(aEle[i]);
        }
    }
    return arr;
}

var oHeader=getClass(document,'header')[0];
var oSearchInp=getClass(oHeader,'search')[0];
var oKeyWord=document.getElementById('word');

var aA=oKeyWord.getElementsByTagName('a');
   for(var i=0;i<aA.length;i++)
   {
	   aA[i].onclick=function()
	   {
		   oSearchInp.value=this.innerHTML;
		   oKeyWord.style.display='none';
	   };
	   
   }



oSearchInp.onfocus=function(){
    if(this.value=='请输入机构关键字'){
        this.value='';
    }
	this.style.lineHeight='20px';
	oKeyWord.style.display='block';
};

oSearchInp.onblur=function(){
    if(this.value==''){
        this.value='请输入机构关键字';
    }
	//oKeyWord.style.display='none';
};







