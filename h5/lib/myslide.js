$(document).ready(function(){
  $("#door-left").animate({width:"toggle",opacity:0}, 2000);    //左门打开  
  $("#door-right").animate({width:"toggle",opacity:0}, 2000);    //右门跟左门同时打开 
  var nowPage = 0;
	var lock = true;//添加锁
	//up -1,down 1
	$(document).mousewheel(function(e,delta){
	    if(lock){
	        nowPage  = nowPage-delta;
	        // 对数据进行约束
	        if(nowPage>5){
	            nowPage=5;
	        }else if(nowPage<0){
	            nowPage=0;
	        }
	        console.log(nowPage);
	        //让container进行动画
	        $(".pageContent").animate(
	        {
	            "top":nowPage * -100 +"%",
	        },800,$.easie(0.261,0.818,0.98,0.335));
	        //让当前的page有current属性，而其它盒子没有
	        $(".page").eq(nowPage).addClass("current").siblings().removeClass("current");
	        lock = false;
	        //设置延时器
	        setTimeout(function(){
	            lock = true;
	        },2000);
	    }
	    
	});

});