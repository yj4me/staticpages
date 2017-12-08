$(document).ready(function(){

	//圆周运动
           var arc_parmas1 = {
            center:[200-40,200-40],
            radius:200,
            start:30,
            end:31,
            dir:-1     //1逆时针 －1顺时针
           } 
           var arc_parmas2 = {
            center:[200-25,200-25],
            radius:150,
            start:120,
            end:121,
            dir:-1     //1逆时针 －1顺时针
           } 
           var arc_parmas3 = {
            center:[200-40,200-40],
            radius:200,
            start:210,
            end:211,
            dir:-1     //1逆时针 －1顺时针
           } 
           var arc_parmas4 = {
            center:[200-30,200-30],
            radius:150,
            start:300,
            end:301,
            dir:-1     //1逆时针 －1顺时针
           }
           run();
           function run(){
            $(".box ul li:eq(0)").animate({path:new $.path.arc(arc_parmas1)},7000,"linear",function(){
                //回调函数
                run();
            })
            $(".box ul li:eq(1)").animate({path:new $.path.arc(arc_parmas2)},7000,"linear")
            $(".box ul li:eq(2)").animate({path:new $.path.arc(arc_parmas3)},7000,"linear")
            $(".box ul li:eq(3)").animate({path:new $.path.arc(arc_parmas4)},7000,"linear")
           }

})
