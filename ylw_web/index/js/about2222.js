// JavaScript Document
    var red_sign = document.getElementById('red_sign');
    var header = document.getElementsByClassName('header')[0];
    var conBox = document.getElementsByClassName('about_zoom')[0];
    var contents = document.getElementsByClassName('about_content');
    var tops = [];
    for( var i=0; i<contents.length; i++ ){
        tops.push(contents[i].offsetTop + 200);
    }
    console.log(tops);
    window.onscroll = function(){
        //document.body.scrollTop = 592;
            if( document.body.scrollTop >= 0 && document.body.scrollTop < 484 ){
                red_sign.style.top = '58px';
            }else if( document.body.scrollTop >= 484 && document.body.scrollTop < 1000 ){
                red_sign.style.top = '96px';
            }else{
                red_sign.style.top = '132px';
            }
        console.log(document.body.scrollTop + ':' + red_sign.offsetTop);
    };





window.onscroll = function(){
	var ht=document.documentElement.scrollTop || document.body.scrollTop; 
	for(var i=0;i<mts.length;i++){
	if(mts.item(i).offsetTop<ht+100 && mts.item(i+1).offsetTop>ht+100){
		lis.item(i).style.color="#f00";
		lis.item(i).style.fontWeight="bold";
		}else{
		lis.item(i).style.color="#000";
		lis.item(i).style.fontWeight="normal";
		}
	}
	if(ht>100){
		menu.style.position="fixed";
		menu.style.top="100px";
		menu.style.right="50px";
		menu.style.display="block";
		}
	else{
		menu.style.position="relative";
		menu.style.display="none";
		}
	}