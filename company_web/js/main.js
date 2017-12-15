
/*右侧手机端小导航图标*/

var TonyShare = {
    ShareWebSite: function (shareplatform, shareobj) {
        shareobj.click(function () {
            shareobj.attr('href', 'http://www.jiathis.com/send/?webid=' + shareplatform + '&url=' + location.href + '&title=' + document.title + '&summary=' + jQuery('meta[name="description"]').attr('content') + '');
            return true;
        });
    },
    SharePic: function (shareplatform, shareobj, picobj) {
        shareobj.click(function () {
            shareobj.attr('href', 'http://www.jiathis.com/send/?webid=' + shareplatform + '&url=' + location.href + '&title=' + document.title + '&pic=http://' + location.hostname + picobj.attr("src") + '&summary=' + jQuery('meta[name="description"]').attr('content') + '');
            return true;
        });
    }
}

$(function () {

    TonyShare.ShareWebSite("qzone", $(".share .qq"));
    TonyShare.ShareWebSite("weixin", $(".share .weixin"));
    TonyShare.ShareWebSite("tsina", $(".share .weibo"));

    setNavMHeight();

    $(".navBtn").click(function () {
        if ($(this).hasClass("navShow")) {
            $(this).removeClass("navShow")
            $(".navM").slideUp();
        } else {
            $(this).addClass("navShow")
            $(".navM").slideDown();
        }

        return false;
    });
	
	$(".navMbox ul li").click(function(){
        $(".navBtn").removeClass("navShow")
        $(".navM").slideUp();
    });


    $(".navBtn2").click(function () {
        if ($(this).hasClass("navShow")) {
            $(this).removeClass("navShow")
            $(".nav").animate({ left: 0, opacity: "show" });

        } else {
            $(this).addClass("navShow")
            $(".nav").animate({ left: 50, opacity: "hide" });
        }

        return false;


    });

    $(window).resize(function () {
        setNavMHeight();
    });

    $(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT > 0) {
            $(".head").addClass("headFixed");
        } else {
            $(".head").removeClass("headFixed");
        }

    });

    function setNavMHeight() {
        $(".navM").height($(window).height() - 56);
    }


/*以下为"关于我们"的选项卡效果*/

   var aDiv=$('.about_con');
   
   $('.about_list a').click(function()
   {
	   	$(this).addClass("active").siblings().removeClass("active");
		aDiv.eq($(this).index()).addClass("show").siblings().removeClass("show");
   });


  $('.about_img ul li').hover(function()
  {
	  $(this).find('.img_mask').css({'top':'0','transition':'.4s'});
	  $(this).find('.hover_dot').css({'top':'50%','transition':'.8s'});	  
  },function()
  {
	  $(this).find('.img_mask').css({'top':'-300px','transition':'.4s'});
	  $(this).find('.hover_dot').css({'top':'-50%','transition':'.8s'});
  });



/*以下为新闻动态的切换图效果*/

    $.extend({
        ns:function(namespace, context) {
            var parent = (context == null) ? window : context;
            var arr = namespace.split('.');
            for (var i = 0; i < arr.length; i++) {
                if (!!!parent[arr[i]]) {
                    parent[arr[i]] = {};
                }
                parent = parent[arr[i]];
            }

            // 例如: 支持 namespace = $.ns('dao.cube.modules')
            return parent;
        },
        /**
         * 查看某个Module是否在Namespace中定义， 原理同{$.ns()}
         * @param {Object} moduleName
         * @param {Object} context
         */
        require_module:function(moduleName, context) {
            var parent = (context == null) ? window : context;
            var arr = moduleName.split('.');
            for (var i = 0; i < arr.length; i++) {
                if (!!!parent[arr[i]]) {
                    throw new Error("required module not found: " + moduleName);
                }
                parent = parent[arr[i]];
            }
            return parent;
        }
    });
});


jQuery(function($) {

    // 默认配置
    var DefaultConf = {
        'preCount': 3,
        'container': null
    };

    var Slide = function(conf){
        this.conf = $.extend({}, DefaultConf, conf);
        this.init(conf);
    };

    Slide.prototype = {
        init: function(conf){
            // 初始状态
            this.preCount = this.conf.preCount;
            this.container = this.conf.container;
            this.items = this.container.find(this.conf.items);
            this.size = this.items.length;
            this.totalPage = Math.ceil(this.size / this.preCount);
            this.itemWidth = this.items.first().outerWidth(true);
            this.pageIndex = 1;

            // 为循环流畅滑动，前后各增加一页
            var aItems = this.items.filter(':lt('+this.preCount+')');
            var bItems = this.items.filter(':gt('+(this.size - this.preCount - 1)+')');
            aItems.clone().appendTo(this.container);
            bItems.clone().prependTo(this.container);

            // 初始slide的位置
            this.container.css({
                'left' : -(this.itemWidth * this.preCount),
                'width': this.itemWidth * ( this.size + 2 * this.preCount )
            });
        },
        next: function(callback){
            this.pageIndex++;
            if(this.pageIndex > this.totalPage){
                this.pageIndex = 1;
                this.container.css({
                    'left': 0
                });
            }
            this.animate(callback);
        },
        prev: function(callback){
            this.pageIndex--;
            if(this.pageIndex < 1){
                this.pageIndex = this.totalPage;
                this.container.css({
                    'left': -(this.itemWidth * (this.size + this.preCount))
                });
            }
            this.animate(callback);
        },
        jump: function(pIndex, callback){
            this.pageIndex = (pIndex < 1) ? 1 :
                (pIndex > this.totalPage) ? this.totalPage : pIndex;
            this.animate(callback);
        },
        animate: function(callback){
            var self = this;
            var distance = -(this.pageIndex * this.preCount * this.itemWidth);
            this.container.animate({
                'left': distance
            }, function(){
                if($.isFunction(callback)){
                    callback.apply(self, [self.pageIndex]);
                }
            });
        }
    };

    var namespaceName = 'dao.search.video.index',
    NameSpace = $.ns(namespaceName);
    NameSpace.Slide = Slide;
});

jQuery(function($) {
    var namespaceName = 'dao.search.video.index',
    NameSpace = $.ns(namespaceName);

    /**
     * slide模块鼠标hover
     * 效果：高亮 + 信息框上移 
     */
    var slideHoverItemSelector = '#slide .bd li';
    NameSpace.slideModsItemMouseHover = function(){
        $(slideHoverItemSelector).live('mouseover', function(evt){
            var self = $(this);
            self.find('.shadow-vanish').removeClass('inner-shadow');
            var iwrap = self.find('.info-wrap');
            iwrap.stop(true).animate({
                'opacity': 1
            }, 'slow');
        }).live('mouseout', function(evt){
            var self = $(this);
            self.find('.shadow-vanish').addClass('inner-shadow');
            var iwrap = self.find('.info-wrap');
            iwrap.stop(true).animate({
                'opacity': 0
            }, 'slow');
        });
    };
   
});

jQuery(function($) {
    var namespaceName = 'dao.search.video.index',
    NameSpace = $.ns(namespaceName);

    var Slide = $.require_module('dao.search.video.index.Slide');

    NameSpace.initSlide = function(){

        // 创建slide实例
        var $slide = new Slide({
            'preCount': 3,
            'container': $('#slide .cover ul'),
            'items': 'li'
        });

        // 当前是否正在动画中
        var inAnimate = false;

        // 左滑动按钮的事件处理
        $('#slide .bd .left-btn').live('click',function(evt){
            if(inAnimate){
                return false;
            }
            inAnimate = true;
            $slide.prev(function(pageIndex){
                inAnimate = false;
                updateTabStatus(pageIndex);
            });
            evt.preventDefault();
        });

        // 右滑动按钮的事件处理
        $('#slide .bd .right-btn').live('click',function(evt){
            if(inAnimate){
                return false;
            }
            inAnimate = true;
            $slide.next(function(pageIndex){
                inAnimate = false;
                updateTabStatus(pageIndex);
            });
            evt.preventDefault();
        });

        // tab 切换事件处理
        $('#slide .tab a').live('click', function(evt){
            var tab = $(this);
            var tabs = tab.closest('.tab').find('a');
            var pageIndex = tab.data('index');
            if(inAnimate){
                return false;
            }
            if(!tab.hasClass('cur')){
                tabs.removeClass('cur');
                tab.addClass('cur');
                inAnimate = true;
                $slide.jump(pageIndex, function(){
                    inAnimate = false;
                });
            }
            evt.preventDefault();
        });

        /**
         * 更新 tab 状态
         * page   1  2  3  4  5  6  7  8
         * idx    1  1  2  2  3  3  4  4
         */
        var tabs = $('#slide .tab a');
        function updateTabStatus(pageIndex){
            var idx = Math.ceil(pageIndex/2) - 1;
            tabs.removeClass('cur');
            tabs.eq(idx).addClass('cur');
        }

        // =====================================================
        // = 自动播放
        // =====================================================
        var autoPlay = true;
        $('#slide, #slide .bd li').live('mouseover', function(evt){
            autoPlay = false;
        }).live('mouseout', function(evt){
            autoPlay = true;
        });
        window.setInterval(function(){
            if(!autoPlay) return;
            inAnimate = true;
            $slide.next(function(pageIndex){
                inAnimate = false;
                updateTabStatus(pageIndex);
            });
        }, 4000);
    };
	
	//新闻中心鼠标移上图片后的效果
	
	$('.cover ul li').hover(function()
	{
        $('.cover ul li span.info em').css('display','none');
        $(this).find('.info em').css('display','block');
		
	},function()
	{
		$('#slide li span.info em').css('display','none');
		
	})
      $('.kuang span.closed').click(function()
	  {
		  $('.tan_kuang').css('display','none');
		  
	  });	


      var carrousel=$(".tan_kuang");
      $(".cover ul li").click(function(e){
        var src=$(this).find('img').attr("data-src-wide");
        carrousel.find(".news_img img").attr("src",src);
        carrousel.fadeIn(200);
      });

	
});


jQuery(function($) {
    var namespaceName = 'dao.search.video.index',
    NameSpace = $.ns(namespaceName);
    // 初始化首页一些模块的鼠标hover效果
    NameSpace.slideModsItemMouseHover();
    // 初始化slide模块
    NameSpace.initSlide();


/*加盟合作*/

      /*加盟合作选项卡*/
	   var aPic=$('.pic');
	   
	   $('.service_list a').click(function()
	   {
			$(this).addClass("cur").siblings().removeClass("cur");
			aPic.eq($(this).index()).addClass("show").siblings().removeClass("show");
	   });
	
	  

     /*加盟合作内容效果展示*/

	 $('.pic ul li').hover(function(){
		  $(this).css({'background':'#fff','borderStyle':'dashed','borderWidth':'1px','borderColor':'#ccc'});
		  $(this).find('img').css('top','10%');
		  $(this).find('.pic_text').css('top','44%');
		  $(this).find('span').css('bottom','0');
		 },function(){
			 $(this).css({'background':'#f8f8f8','borderStyle':'dashed','borderWidth':'1px','borderColor':'#fff'});
			 $(this).find('img').css('top','20%'); 
			 $(this).find('.pic_text').css('top','53%');
			 $(this).find('span').css('bottom','-94px');
			 });


   /*手机端菜单栏的交互展示*/
    var _width = $(window).width(); 
     if(_width < 420){
		 
		$('#banner .swiper-container .swiper-button-prev').css('display','none');
		$('#banner .swiper-container .swiper-button-next').css('display','none');

		$('.head a.navBtn2').css('display','block'); 
		$('.navMbox ul li').click(function()
		{
			$('a.navBtn').removeClass('.navShow');
		});

		  var mySwiper = new Swiper ('.swiper-container02', {
			direction:'horizontal',
			slidesPerView :1,
			slidesPerGroup :1,
			speed:300,
			//loop: true,
			autoplay:3000,
			// 如果需要分页器
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
  			}) 

     }
	 else
	 {
		 $('.head a.navBtn2').css('display','none');
		 $('#banner .swiper-container .swiper-button-prev').css('display','block');
		 $('#banner .swiper-container .swiper-button-next').css('display','block');
		 
		 	var mySwiper = new Swiper ('.swiper-container02', {
			direction:'horizontal',
			slidesPerView :4,
			slidesPerGroup :1,
			speed:300,
			//loop: true,
			autoplay:3000,
			// 如果需要分页器
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
  			}) 
	 }
	 



//加盟合作鼠标移上的效果
   $('#service .box ul li').hover(function()
   {
	   $(this).find('.t2').css('bottom','0');
	   $(this).css({'background':'#fff','border':'1px dotted #ccc'});
	   $(this).find('.t1').css('top','-50px');
   },function()
   {
	   $(this).find('.t2').css('bottom','-105px');
	   $(this).css({'background':'#f8f8f8','border':'1px solid #f8f8f8'});
	    $(this).find('.t1').css('top','0px'); 
   });
   
   var aSerBtn=$('.service .box ul');
   $('.ser_btn a').click(function()
   {
	   		$(this).addClass("cur").siblings().removeClass("cur");
			aSerBtn.eq($(this).index()).addClass("active").siblings().removeClass("active");

	   
   });

//导航点击事件
  $('.nav ul li .tBox').bind('click',function(){
    $('.nav ul li .tBox').removeClass('active')
    $(this).addClass('active');
    $(this).parent().find('.bg').css({'opacity': '0', 'filter': 'alpha(opacity=0)', '-webkit-transform': 'scale(1.2)', 'transform': 'scale(1.2)', 'transition': '400ms', 'width': '100%', 'height': '100%', 'background': 'url(../images/navCur.png) no-repeat center'});
    $('.nav ul li .tBox').find('.t1').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
    $('.nav ul li .tBox').find('.t2').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
    $(this).find('.t1').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
    $(this).find('.t2').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
    $(this).unbind("mouseenter");
    $(this).unbind("mouseleave");
  })
 $('.nav ul li .tBox').bind('mouseenter',function(){
    $(this).find('.t1').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
    $(this).find('.t2').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
    $(this).parent().find('.bg').css({'opacity': '1', 'filter': 'alpha(opacity=100)', '-webkit-transform': 'scale(1)',
     'transform': 'scale(1)'});
    $(this).unbind("mouseleave").bind("mouseleave", function(){
      $(this).parent().find('.bg').css({'opacity': '0', 'filter': 'alpha(opacity=0)', '-webkit-transform': 'scale(1.2)',
       'transform': 'scale(1.2)', 'transition': '400ms', 'width': '100%', 'height': '100%'});
      $(this).find('.t2').css({'top': '-15px','opacity': '0', 'filter': 'alpha(opacity=0)'});
      $(this).find('.t1').css({'top': '0', 'opacity': '1', 'filter': 'alpha(opacity=100)'});
    });
  });
 $(".nav ul li a").click(function(){
      var target = $(this.hash);
      if (target){
        $('html, body').animate({
          scrollTop:target.offset().top
        }, 500);
        return false;
      }
    });
 //新闻小图点击显示大图
 var carrousel=$(".carrousel");
  $(".portrait").click(function(e){
    var src=$(this).find(".pic").attr("data-src-wide");
    carrousel.find("img").attr("src",src);
    carrousel.fadeIn(200);
  });
  carrousel.find(".close").click(function(e){
    carrousel.find("img").attr("src",'');
    carrousel.fadeOut(200);
  });



});

