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

var iTimer=null;

$('.contact,.erweima').hover(function(){
	$('#erweima').fadeIn();
	clearTimeout(iTimer);
},function(){
	iTimer=setTimeout(function(){
		$('#erweima').fadeOut();
	},200);
});
