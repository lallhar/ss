/**
 * Created by thundersoft on 2017/10/17.
 */
$(function () {
    /*菜单出现背景颜色*/
    $(window).scroll(function () {
        var Wheight = $(window).scrollTop();
        if(Wheight>100){
            $(".header-bg").addClass("bg-white").removeClass("header-color2");

        }else{
            $(".header-bg").removeClass("bg-white");
             if(picCount == 1){
             $(".header-bg").addClass("header-color2");
             };
        }
    });
    getTyper("beautiful.");

    /*logo随机显示*/
    $(".logo-show img").hover(function () {
        $(this).animate({"opacity":0.5},500);
        clearInterval(timer);
    },function () {
        $(this).animate({"opacity":1},500);
        timer = setInterval(function () {
            logoInterval();
        },2500);
    });
    var count = 0;
    function logoInterval() {
        var number = Math.random();
        var number2 = Math.floor(number*6);
      /*  var url = [{"",""},]*/
        if (count<4){
            count++;
        }else {
            count=0;
        }
        /*switch (count) {

        }*/
        $(".logo-show .row div").eq(number2).find("img").eq(count).css("display","block").siblings().css("display","none");
    }
    var timer = setInterval(function () {
        logoInterval();
    },2500);
    logoInterval();

    /*人物轮播*/
    var liwidth=0;
    var $containerFluidPeo = $(".container-fluid-peo");
    $(".btn-after").click(function () {
        $(".peo-single-before .row .peo-single:first-child").appendTo(".peo-single-after .row");
        $(".peo-single-after  .row .peo-single:first-child").appendTo(".peo-single-before .row");
        /*liwidth = $(".peo-single-before .row .peo-single:first-child").outerWidth();
        $containerFluidPeo.animate({
            left: "-"+liwidth
        },1000,function(){
            $(this).find(".peo-single-before .peo-single:first-child").appendTo(".peo-single-after .row");
            $(this).find(".peo-single-after .peo-single:first-child").appendTo(".peo-single-before .row");
            $(this).css({left: "0px"});
        });*/
    });
    $(".btn-before").click(function () {
        $(".peo-single-before .row .peo-single:last-child").prependTo(".peo-single-after .row");
        $(".peo-single-after  .row .peo-single:last-child").prependTo(".peo-single-before .row");

       /* liwidth = $(".peo-single-before .row .peo-single:first-child").outerWidth();
        $containerFluidPeo.animate({
            left: liwidth
        },500,function(){
            $(this).find(".peo-single-before .peo-single:last-child").prependTo(".peo-single-after .row");
            $(this).find(".peo-single-after .peo-single:last-child").prependTo(".peo-single-before .row");
            $(this).css({left: "0px"});
        });*/
    });

    /*大圖背景輪播*/

    $(".btn-prev").click(function () {
        clearInterval(autoTimer);
        if(picCount<0){
            picCount = 3;
        }else {
            picCount--;
        }
        if (picCount == 1){
            $(".car-text").addClass("car-text2");
            $(".header-bg").addClass("header-color2");
        }else {
            $(".car-text").removeClass("car-text2");
            $(".header-bg").removeClass("header-color2");
        }
        $(".pics-wellness").eq(picCount).show().siblings().hide();
        changeWords(picCount);


        autoTimer = setInterval(function () {
            autoCarousel();
        },8000);
    });
    $(".btn-next").click(function () {
        clearInterval(autoTimer);
        autoCarousel();
        autoTimer = setInterval(function () {
            autoCarousel();
        },8000);
    });
    /*feature轮播*/
    var feaIndex = 0;
    $(".control-prev").click(function () {
        if(feaIndex>0){
            feaIndex--;
        }else {
            feaIndex = 3;
        }
        $(".fea-img-wrap .fea2").eq(feaIndex).show().siblings().hide();
        $(".fea-img-wrap2 .fea2").eq(feaIndex).show().siblings().hide();
    });
    $(".control-next").click(function () {
        if(feaIndex<3){
            feaIndex++;
        }else {
            feaIndex = 0;
        }
        $(".fea-img-wrap .fea2").eq(feaIndex).show().siblings().hide();
        $(".fea-img-wrap2 .fea2").eq(feaIndex).show().siblings().hide();
    });
    /*底部菜单显隐*/
    $(".wrap2-title").click(function () {
        $(this).toggleClass("is-active").find("ul").toggle("slow");
    });
   /* feature显隐*/
   $(".fea-img-wrap2").hover(function () {
       $(this).find(".fea2-hide").show("slow");
   },function () {
       $(this).find(".fea2-hide").hide();
   });
   /*模块延迟加载*/
    window.addEventListener("scroll",function () {
        if (getTop("design-feature") < 500) {
            getObj("design-feature").addClass("animate1").addClass("animatedura1");
        }
        if (getTop("store") < 500) {
            getObj("store").addClass("animate2").addClass("animatedura1");
        }
        if (getTop("marketing") < 500) {
            getObj("marketing").addClass("animate3").addClass("animatedura1");
        }
        if (getTop("support") < 500) {
            getObj("support").addClass("animate4").addClass("animatedura1");
        }
    });

});
/*模块延迟加载*/
function getTop(className) {
    var obj = getObj(className);
    return obj[0].getBoundingClientRect().top;//返回元素的大小及其相对于视口的位置
}
function getObj(className) {
    return $(document.getElementsByClassName(className)[0]);
}
/*模块延迟加载*/
function changeWords(count) {
    switch (count){
        case 0:getTyper("beautiful.");
            break;
        case 1:getTyper("loud.");
            break;
        case 2:getTyper("tasteful.");
            break;
        case 3:getTyper("show.");
            break;
    }
}
/*大图文字改变*/
function getTyper(text) {
$(".typed-cursor").remove();
    /*文字输入效果*/
    var options={
        strings: [".", text],
        typeSpeed: 100,
        backSpeed: 0,
        backDelay: 500,
        startDelay: 1000,
        loop: false
    };
    var typed = new Typed('.typer-container', options);
}

/*大图自动轮播*/

var picCount = 0;
function autoCarousel() {
    if(picCount<3){
        picCount++;
    }else {
        picCount=0;
    }
    if (picCount == 1){
        $(".car-text").addClass("car-text2");
        $(".header-bg").addClass("header-color2");
    }else {
        $(".car-text").removeClass("car-text2");
        $(".header-bg").removeClass("header-color2");
    }
    $(".pics-wellness").eq(picCount).show().siblings().hide();
    changeWords(picCount);

}
var autoTimer = setInterval(function () {
    autoCarousel();
},10000);
