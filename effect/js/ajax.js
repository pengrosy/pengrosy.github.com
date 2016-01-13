// JavaScript Document
function ajax(opations){
	opations=opations||{};
	opations.data=opations.data||{};
	opations.type=opations.type||'get';
	opations.timeOut=opations.timeOut||0;//0代表不做超时限定
	opations.success=opations.success||null;
	opations.error=opations.error||null;
	
	opations.data.t=Math.random();
	var arr=[];
	for(var key in opations.data){
		arr.push(key+'='+encodeURIComponent(opations.data[key]));
	}
	var str=arr.join('&');
	
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(opations.type=='get'){
		oAjax.open('get',opations.url+'?'+str,true);
		oAjax.send();
	}else{
		oAjax.open('post',opations.url,true);
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		oAjax.send(str);
	}
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			clearTimeout(timer);
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
				opations.success && opations.success(oAjax.responseText);
			}else{
				opations.error && opations.error('数据加载失败：'+oAjax.status);
			}
		}
	};
	if(opations.timeOut){
		var timer=setTimeout(function(){
			alert('超时了');
			oAjax.abort();
		},opations.timeOut);
	}
};