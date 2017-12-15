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

oSearchInp.onfocus=function(){
    if(this.value=='请输入机构关键字'){
        this.value='';
    }
};

oSearchInp.onblur=function(){
    if(this.value==''){
        this.value='请输入机构关键字';
    }
};








