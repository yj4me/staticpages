// 初始化
$(document).ready(function(){
	// 倒计时功能
	// 定义一个定时器
	var loading = setInterval(function(){
		// 1秒渐隐
		$('.loading_page').fadeOut();
        clearInterval(loading);
	},4400);
	// 滚滚屏功能实现
	var nowPage = 0;//全局变量
   var lock = true;//添加锁
   //up -1,down 1
   $(document).mousewheel(function(e,delta){
        if(lock){
            nowPage  = nowPage-delta;
            // 对数据进行约束
            if(nowPage>4){
                nowPage=4;
            }else if(nowPage<0){
                nowPage=0;
            }
            console.log(nowPage);
            //让container进行动画
            // 向上平移一个屏幕高度(gungun必须是绝对定位)
            $(".main_page .gungun").animate(
            {
                "top":nowPage * -100 + "%"
            },1000,$.easie(0.261,0.818,0.98,0.335));

            //让当前的page有current属性，而其它盒子没有
            $(".part").eq(nowPage).addClass("current").siblings().removeClass("current");
            // 跟导航栏绑定
            $(".nav li").eq(nowPage).addClass("active").siblings().removeClass("active");
			$(".part_indicator li").eq(nowPage).addClass("current").siblings().removeClass("current");
          
            if(nowPage === 4){
                // 控制背景音乐
                $("audio").trigger("pause");
                $("audio").removeClass("play");
                $("audio").addClass("pause");
                $(".music").attr({"class":"music pause"});

                // 使背景音乐按钮不可点击
    
                // 控制钢琴音乐
                var j = 0;
                var jsq2 =setInterval(function(){
                    var nowLi = j+1;
                        $('.part5 .piano li').eq(nowLi).children('div').stop().animate({'bottom':'0px'},150);
                        $('.part5 .piano li').eq(nowLi).children('div').animate({'bottom':'-140px'},150);
                         myYinfu(j);
                    j++;

                    if(j === 7){
                        clearInterval(jsq2);
                    }
                },300) 
            }else{
                $(".music").attr("disabled", false); 
            }
                lock = false;
                //设置延时器
                setTimeout(function(){
                    lock = true;
                },2000);
            }
        
   });

   // 音乐播放按钮点击事件
   $(".music").click(function(){
        console.log('响应点击事件');
        console.log(nowPage);
        if(nowPage === 4 ){
            console.log('do nothing');
            return;
        }else{
            if($("audio.music").hasClass("play")){
                $("audio.music").trigger("pause");
                $("audio.music").removeClass("play");
                $("audio.music").addClass("pause");
                $(".music").attr({"class":"music pause"});

            }else{
                $("audio.music").trigger("play");
                $("audio.music").removeClass("pause");
                $("audio.music").addClass("play");
                $(".music").attr({"class":"music play"});
            }
        }
        
   })
   // 导航栏点击事件绑定
   $(".nav li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        nowPage = $(this).index();
        // 向上平移一个屏幕高度(gungun必须是绝对定位)
        $(".main_page .gungun").animate(
        {
            "top":nowPage * -100 + "%"
        },1000,$.easie(0.261,0.818,0.98,0.335));
        //让当前的page有current属性，而其它盒子没有
        $(".part").eq(nowPage).addClass("current").siblings().removeClass("current");
        // 跟导航栏绑定
        $(".nav li").eq(nowPage).addClass("active").siblings().removeClass("active");
        $(".part_indicator li").eq(nowPage).addClass("current").siblings().removeClass("current");
        if(nowPage === 3){
            console.log('当前是第四页');
            scrollit();
        }
        if(nowPage === 4){
            // 控制背景音乐
            $("audio").trigger("pause");
            $("audio").removeClass("play");
            $("audio").addClass("pause");
            $(".music").attr({"class":"music pause"});
            // 控制钢琴音乐
            var j = 0;
            var jsq2 =setInterval(function(){
            var nowLi = j+1;
                $('.part5 .piano li').eq(nowLi).children('div').stop().animate({'bottom':'0px'},150);
                $('.part5 .piano li').eq(nowLi).children('div').animate({'bottom':'-140px'},150);
                 myYinfu(j);
                j++;

                if(j === 7){
                    clearInterval(jsq2);
                }
            },300) 
        }
   })

   // 作品分类导航
   $(".part3 .worksul li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        if($(this).index()== 0){
            $(".ui").hide();
            $(".icon").hide();
            $(".other").hide();
            $(".web").fadeIn();
        }else if($(this).index() == 1){
            $(".web").hide();
            $(".icon").hide();
            $(".other").hide();
            $(".ui").fadeIn();
        }else if($(this).index() == 2){
            $(".web").hide();
            $(".ui").hide();
            $(".other").hide();
            $(".icon").fadeIn();

        }else if($(this).index() == 3){
            $(".web").hide();
            $(".icon").hide();
            $(".ui").hide();
            $(".other").fadeIn(1000);
        }
   })
   // 手机主题横向滚动
   var swiper = new Swiper('.swiper-container', {
                 // 如果需要前进后退按钮  
                nextButton: '.s_b_n4',     
                prevButton: '.s_b_p4',
                paginationClickable: true,
                spaceBetween: 0,
                loop: true,
                autoplay: 3000,
                slidesPerView : 'auto',
                observer:true,
                observeParents:true,
                autoplayDisableOnInteraction:false      
         });
   // 钢琴键
   var clolorArr = ['red','orange','yellow','green','pink','blue','purple','gray','orangered'];
        $('.part5 .piano li').each(function(index,element){
            $(element).children('div').css('background',clolorArr[index]);
        });
        $('.part5 .piano li').mouseenter(function(e){
            $(this).children('div').stop().animate({'bottom':'0px'},500);
            //如果用户多次触发音乐，那么先让之前的音乐回到0，再重新播放
            $('.yinfu audio').eq($(this).index())[0].currentTime = 0;
            $('.yinfu audio').eq($(this).index())[0].play();
        }).mouseleave(function(e){
            $(this).children('div').stop().animate({'bottom':'-140px'},500);
        });

     // 键盘按键事件
    $(window).keydown(function(e){
        console.log("按键码："+ e.keyCode);
        if(e.keyCode == 49){
            myYinfu(0);
            $('.part5 .piano li:first-child').children('div').stop().animate({'bottom':'0px'},500);
            $('.part5 .piano li:first-child').children('div').animate({'bottom':'-140px'},500);
            
        }   
        else if(e.keyCode == 50){
            myYinfu(1);
            $('.part5 .piano li:nth-child(2)').children('div').stop().animate({'bottom':'0px'},500);
            $('.part5 .piano li:nth-child(2)').children('div').animate({'bottom':'-140px'},500);
            
        }
        else if(e.keyCode == 51){
             myYinfu(2);
            $('.part5 .piano li:nth-child(3)').children('div').stop().animate({'bottom':'0px'},500);
            $('.part5 .piano li:nth-child(3)').children('div').animate({'bottom':'-140px'},500);
           
        }
        else if(e.keyCode == 52){
             myYinfu(3);
            $('.part5 .piano li:nth-child(4)').children('div').stop().animate({'bottom':'0px'},500);
            $('.part5 .piano li:nth-child(4)').children('div').animate({'bottom':'-140px'},500);
           
        }
        else if(e.keyCode == 53){
             myYinfu(4);
            $('.part5 .piano li:nth-child(5)').children('div').stop().animate({'bottom':'0px'},500);
            $('.part5 .piano li:nth-child(5)').children('div').animate({'bottom':'-140px'},500);
           
        }
        else if(e.keyCode == 54){
            myYinfu(5);
            $('.part5 .piano li:nth-child(6)').children('div').stop().animate({'bottom':'0px'},500);
            $('.part5 .piano li:nth-child(6)').children('div').animate({'bottom':'-140px'},500);
            
        } 
        else if(e.keyCode == 55){
            myYinfu(6);
            $('.part5 .piano li:last-child').children('div').stop().animate({'bottom':'0px'},500);
            $('.part5 .piano li:first-child').children('div').animate({'bottom':'-140px'},500);
            
        }
    })
    function myYinfu(i){
        $('.yinfu audio').eq(i)[0].currentTime = 0;
        $('.yinfu audio').eq(i)[0].play();
    }
    gaibian();
    // 将屏幕尺寸改变事件与gaibian事件绑定
    window.onresize = gaibian;
    function gaibian(){
        // 浏览器的宽度
        var kuandu = document.documentElement.clientWidth;
       
        if(kuandu<480){
            $('.iphone').fadeOut();
        }else{
             $('.iphone').fadeIn();
        }

    }
})


