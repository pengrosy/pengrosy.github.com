$(function(){
	var win_width = 0;
	var win_height = 0;
	var headHeight = 100;
	var box = $(".listBox").get(0);
	var imgs = $(".listBox ul").get(0);
	// var aImg = imgs.getElementsByTagName("li");
	var aImg = $(".listBox ul li");
	var downX = 0;
	var downY = 0;
	var downLeft = 0;
	var bannerInd = 0;
	var aboutInd = 0;
	var skillArr = [0.96,0.96,0.96,0.96,0.96];
	var workInd = 0;
	var workWid = 303;
	var workBox = $(".listBox");
	var workShowSize = 4;
	

   //头部导航下拉菜单效果


	//导航点击事件
	// $('.nav ul li .tBox').bind('mouseenter',function(){
	// 	$(this).find('.t1').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
	// 	$(this).find('.t2').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
	// 	$(this).parent().find('.bg').css({'opacity': '1', 'filter': 'alpha(opacity=100)', '-webkit-transform': 'scale(1)', 'transform': 'scale(1)'});
	// 	$(this).unbind("mouseleave").bind("mouseleave", function(){
	// 		$(this).parent().find('.bg').css({'opacity': '0', 'filter': 'alpha(opacity=0)', '-webkit-transform': 'scale(1.2)', 'transform': 'scale(1.2)', 'transition': '400ms', 'width': '100%', 'height': '100%', 'background': 'url(../images/navCur.png) no-repeat center'});
	// 		$(this).find('.t2').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
	// 		$(this).find('.t1').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
	// 	});
	// });
	// $('.nav ul li .tBox').bind('click',function(){
	// 	$('.nav ul li .tBox').removeClass('active')
	// 	$(this).addClass('active');
	// 	$(this).parent().find('.bg').css({'opacity': '0', 'filter': 'alpha(opacity=0)', '-webkit-transform': 'scale(1.2)', 'transform': 'scale(1.2)', 'transition': '400ms', 'width': '100%', 'height': '100%', 'background': 'url(../images/navCur.png) no-repeat center'});
	// 	$('.nav ul li .tBox').find('.t1').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
	// 	$('.nav ul li .tBox').find('.t2').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
	// 	$(this).find('.t1').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
	// 	$(this).find('.t2').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
	// 	$(this).unbind("mouseenter");
	// 	$(this).unbind("mouseleave");
	// })
	
	init();
	main();
	
	function init(){
		win_width = $(window).width();
  		win_height = $(window).height();
  		
  		$(".banner").height(win_height);
  		$(".banner li").width(win_width);
  		
  		setImgMax($(".banner li img"),1920,979);
		
		
		skillShow();
		
		if(win_width<=1440-17&&win_width>1050-17){
			$(".aboutMoreBox").css({width:win_width-300,marginLeft:-(win_width-300)/2});
			$(".item").css({width:win_width-300});
			
		}else{
			$(".aboutMoreBox").css({width:"",marginLeft:""});
			$(".item").css({width:""});
		}
		
		if(win_width<1050-17){
			headHeight = 56;
		}else{
			headHeight = 70;
		}
		
		setWorkStyle();
		
		if(workInd>=$(".work .listBox li").size()-workShowSize){
			workInd = $(".work .listBox li").size()-workShowSize;
		}
		$(".listBox ul").stop(false,false).css({left:-workWid*workInd});
		
	}
	
	function main(){
		loadPage();
		
		createWork("ALL");
		
		$(document).on("touchstart",".service li",function(){
			if($(this).hasClass("tc")){
				$(this).removeClass("tc");
			}else{
				$(this).addClass("tc");
			}
		}).on("mouseover",".service li",function(){
			$(this).addClass("tc");
		}).on("mouseleave",".service li",function(){
			$(this).removeClass("tc");
		});
			
		$(".nav li a").click(function(){
			var anchorCur = "#"+$(this).attr("href").split("#")[1];
	        if($(anchorCur).size()>0){
				setScroll(anchorCur);
			}else{
				$("html,body").animate({scrollTop:0},700);
			}
	        return false;
		});
		
		$(".navM li a").click(function(){
			var anchorCur = "#"+$(this).attr("href").split("#")[1];
	        if($(anchorCur).size()>0){
				setScroll(anchorCur);
			}else{
				$("html,body").animate({scrollTop:0},700);
			}
			$(".navBtn").removeClass("navShow")
			$(".navM").slideUp();
	        return false;
		});
		
		
		$(".banner .more a").click(function(){
			var anchorCur = "#work";
            setScroll(anchorCur);
            return false;
		});
		
		$(".banner .arrow").click(function(){
			var anchorCur = "#about";
            setScroll(anchorCur);
            return false;
		});
		
		
		$(".work .menu a").click(function(){
			createWork($(this).attr("type"));
			$(".work .menu a").removeClass("cur");
			$(this).addClass("cur");
			
			return false;
		});
		
		$(".work .btnLeft").click(function(){
			if(workInd<=0){
				return false;
			}
			workInd--;
			$(".work .list ul").stop(false,false).animate({left:-workWid*workInd});
	
			return false;
		});
		
		$(".work .btnRight").click(function(){
			if(workInd>=$(".work .list li").size()-workShowSize){
				return false;
			}
			workInd++;
			$(".work .list ul").stop(false,false).animate({left:-workWid*workInd});
	
			return false;
		});
		
		
	}
	
	$(window).scroll(function(){
		var sT = $(window).scrollTop();
		var aRow = $(".row");
		var curInd = 0;
		for(var i=0;i<5;i++){
			if(sT>aRow.eq(i).offset().top-win_height*0.3){
				curInd = i;
			}
		}
		if(sT>win_height){
			$(".head").removeClass("headFirst");
		}else{
			$(".head").addClass("headFirst");
		}
		$(".nav li").removeClass("cur").eq(curInd).addClass("cur");
		
		
	});
	
	$(window).resize(function(){
		init();
	});
	
	function loadPage(){
		var aLoadImg = $(".loadImg");
		var maxNum = $(".loadImg").size();
		var curNum = 0;
		var oLineCur = $(".lineCur");
		
		for(var i=0;i<maxNum;i++){
			aLoadImg.eq(i).attr("src",aLoadImg.eq(i).attr("_src")).load(function(){
				curNum++;
				oLineCur.css({width:parseInt(curNum/maxNum*win_width)})
				if(curNum==maxNum){
					setTimeout(function(){
						$(".welcome").fadeOut(800);
						setTimeout(function(){
							$(".head").animate({top:0},600);
							getHash();
							changeBanner();
						},100)
						
					},500)
				}
			});
		}
		
	}
	
	function getHash(){
		var hash = location.href.split("#")[1];
		if(hash){
			setScroll("#"+hash);
		}
	}
	
	function setScroll(anchorCur){
		$("html,body").animate({ scrollTop: $(anchorCur).offset().top-headHeight},700);
	}
	
	function changeBanner(){
		var bannerInv = setInterval(function(){
			if(bannerInd>=$(".banner .imgs li").size()-1){
				bannerInd = 0;
			}else{
				bannerInd++;
			}
			$(".banner .imgs li").stop(false,false).fadeOut(500).eq(bannerInd).stop(false,false).fadeIn(500);
		
		},7000);
		
	}
	
	function defaultAbout(){
		$(".about").removeClass("moreShow").find(".aboutMore").animate({left:"100%"},700,function(){
			$(this).find(".aboutList").css({left:0});
			aboutInd = 0;
			$(".skill .lineCur").width(10);
		});
	}
	
	function skillShow(){
		var aCur = $(".skill .lineCur");
		var w = $(".skill li .line").width();
		
		for(var i=0;i<5;i++){
			aCur.eq(i).stop(false,false).animate({width:w*skillArr[i]},1000);
			
		}
		
	}
	
	function createWork(type){
		var str = '';
		for(var i=0;i<workData.length;i++){
			if(type=='ALL'||workData[i].type==type){
				str += '<li><a href="'+workData[i].href+'" target="_blank"><div class="imgBox"><img src="'+workData[i].imgSrc+'" class="img"/><div class="bg"></div><img src="images/i5.png" class="i5"/><img src="images/i6.png" class="i6"/></div><div class="t">'+workData[i].title+'</div><p class="time">'+workData[i].time+'</p></a></li>';
			}
		}
		$(".work ul").css({left:0}).html(str);
		workInd = 0;
		setWorkStyle();
		touchImgMove(box,imgs,aImg);
	}
	
	function setWorkStyle(){
		workShowSize = 4;
  		if(win_width<=440-17){
  			workWid = workBox.width()*1.05;
  			workShowSize = 1;
  			workBox.find("li").css({width:workBox.width(),marginRight:workBox.width()*0.05});
  			
  			var workImgHeight = workBox.width()*1.05*180/272;
			workBox.find(".imgBox").css({height:workImgHeight});
			workBox.css({height:workBox.find("li").height()+19});
			
  		}else if(win_width<=840-17){
  			workWid = workBox.width()*0.54;
  			workShowSize = 2;
  			workBox.find("li").css({width:workBox.width()*0.46,marginRight:workBox.width()*0.08});
  			
  			var workImgHeight = workBox.width()*0.23*2*180/272;
			workBox.find(".imgBox").css({height:workImgHeight});
			workBox.css({height:workBox.find("li").height()+19});
			
  		}else if(win_width<=1280-17){
			workWid = workBox.width()*0.257;
  			workBox.find("li").css({width:workBox.width()*0.227,marginRight:workBox.width()*0.03});
  			
  			var workImgHeight = workBox.width()*0.227*220/272;
			workBox.find(".imgBox").css({height:workImgHeight});
			workBox.css({height:workBox.find("li").height()+19});
		}else{
//			workWid = 303;
//			workBox.find("li").css({width:"",margin:""});
//			workBox.find(".imgBox").css({height:""});
//			workBox.css({height:""});
			workWid = workBox.width()*0.257;
  			workBox.find("li").css({width:workBox.width()*0.227,marginRight:workBox.width()*0.03});
  			
  			var workImgHeight = workBox.width()*0.227*220/272;
			workBox.find(".imgBox").css({height:workImgHeight});
			workBox.css({height:workBox.find("li").height()+19});
		}
  		
	}
	
	function setImgMax(img,imgW,imgH,tW,tH){
		//设置图片宽高比例
		var tWidth = tW||win_width;
		var tHeight = tH||win_height;
		var coe = imgH/imgW;
		var coe2 = tHeight/tWidth;
		if(coe<coe2){
			var imgWidth = tHeight/coe;
			img.css({height:tHeight,width:imgWidth,left:-(imgWidth-tWidth)/2,top:0});
		}else{
			var imgHeight = tWidth*coe;
			img.css({height:imgHeight,width:tWidth,left:0,top:-(imgHeight-tHeight)/2});
		}
	}
	
	function touchImgMove(box,imgList,imgs){
		//imgList.style.width = workWid * imgs.length + "px";
		
		imgList.ontouchstart = function(ev){
			
			var touchs = ev.changedTouches[0];
			downX = touchs.pageX;
			downY = touchs.pageY;
			downLeft = this.offsetLeft;
			var onf = true;
			
			imgList.ontouchmove = function(ev){
				var touchs = ev.changedTouches[0];
				
				if(Math.abs((downX-touchs.pageX))>Math.abs((downY-touchs.pageY))){
					document.ontouchmove = function(ev){
						ev.preventDefault();
					};
				}else{
					imgList.ontouchmove = null;
					return;
				}
				
				if(this.offsetLeft >= 0){
					if(onf){
						onf = false;
						downX = touchs.pageX;
					}
					this.style.left = (touchs.pageX - downX)/3 + "px";
				}else if(this.offsetLeft <= box.offsetWidth - imgList.offsetWidth){
					if(onf){
						onf = false;
						downX = touchs.pageX;
					}
					this.style.left = (touchs.pageX - downX)/3 + (box.offsetWidth - imgList.offsetWidth) + "px";
				}else{
					this.style.left = touchs.pageX - downX + downLeft + "px";
				}
				
			};
			
			imgList.ontouchend = function(ev){
				var touchs = ev.changedTouches[0];
				
				if(touchs.pageX < downX){
					if(workInd!=imgs.length-workShowSize){
						if(downX - touchs.pageX > box.offsetWidth/5){
							workInd++;
						}
					}
					$(".work ul").stop(false,false).animate({left:-workWid*workInd},200);
					
				}else{
					if(workInd!=0){
						if(touchs.pageX - downX > box.offsetWidth/5){
							workInd--;
						}
					}
					$(".work ul").stop(false,false).animate({left:-workWid*workInd},200);
					
				}
				imgList.ontouchmove = null;
				imgList.ontouchend = null;
				document.ontouchmove = null;
			}
		}
		
		
	};
	
});
