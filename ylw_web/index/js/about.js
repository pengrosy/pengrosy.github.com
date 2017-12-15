// JavaScript Document
    var red_sign = document.getElementById('red_sign');
    var header = document.getElementsByClassName('header')[0];
    var conBox = document.getElementsByClassName('about_zoom')[0];
    var contents = document.getElementsByClassName('about_content');
    var oAboutRight = document.getElementsByClassName('about_right')[0];
	var oAboutMune=document.getElementById('about_mune');
    var tops = [];
    for( var i=0; i<contents.length; i++ ){
        tops.push(contents[i].offsetTop + 200);
    }

    window.onscroll =window.onresize= function(){
		    var ht=document.documentElement.scrollTop || document.body.scrollTop;
            if(ht>= 0 && ht<484){
                red_sign.style.top = '58px';
            }else if( ht >= 484 && ht < 1000 ){
                red_sign.style.top = '96px';
            }
			else{
                red_sign.style.top = '132px';
            }
        	//console.log(document.body.scrollTop + ':' + red_sign.offsetTop);
			
			if(ht>200){
				oAboutRight.style.top='80px';	
			}else{
				oAboutRight.style.top='';	
			}
    };