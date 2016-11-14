$(function () {
    $(".lis").click(function () {
        var index=$(this).index();
        $(".lis-s").eq(index).toggle();
    })
    /*轮播图*/
    $(".imgbox>a").css("left","100%").eq(0).css("left","0");
    var num=0;
    var next=0;
    var flag=true;
    function wheel() {
        next++;
        if(next>=$(".imgbox>a").length){
            next=0;
            flag=false;
        }
        $(".imgbox>a").eq(num).animate({width:"80%",height:"80%"}).css("zIndex","0");
        $(".imgbox>a").eq(next).animate({left:0},function () {
            $(".imgbox>a").eq(num).css({width:"100%",height:"100%",left:"100%"});
                num=next;
                numtime=0;
                flag=true;
        }).css("zIndex","1")
    }
    var t=setInterval(wheel,3000)

    /*进度条*/
    var numtime=0;
    function line() {
        numtime+=100;
       var bili=numtime/2500;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(num).css({width:bili*100+"%"})
        if(flag==false){
            $(".progress").css({width:0})
        }
    }
    var t1=setInterval(line,100);


    $(window).blur(function () {
        clearInterval(t);
        clearInterval(t1);
    })
    $(window).focus(function () {
        t=setInterval(wheel,3000);
        t1=setInterval(line,100);
    })

    $(".lunbo>li").click(function () {
        next=$(this).index();
        stop();
    })
    $(".banner").hover(function () {
        clearInterval(t);
        clearInterval(t1);
    },function () {
        t=setInterval(wheel,3000);
        t1=setInterval(line,100);
    })
    
    $(".leftbtn").click(function () {
        next--;
        if(next<=-1){
            next=$(".imgbox>a").length-1;
        }
            stop();
    })

    $(".rightbtn").click(function () {
        next++;
        if(next>=$(".imgbox>a").length){
            next=0;
        }
        stop();
    })


    function stop() {
        clearInterval(t);
        clearInterval(t1);
        /*轮播点*/
        $(".progress").css("width","0");
        $(".progress").eq(next).css("width","100%");


        if (next>num){
            $(".imgbox>a").eq(num).animate({width:"80%",height:"80%"}).css("zIndex","0");
            $(".imgbox>a").eq(next).animate({left:0},function () {
                $(".imgbox>a").eq(num).css({width:"100%",height:"100%",left:"100%"});
                num=next;
            }).css("zIndex",1)
        }else if(next<num){
            $(".imgbox>a").eq(num).animate({left:"100%"});
            $(".imgbox>a").eq(next).css({width:"80%",height:"80%",left:"0"}).animate({width:"100%",height:"100%"},function () {
              num=next;
            });
        }
    }


    /*下拉菜单*/
    $(".small1").click(function () {
        $(".banner").css("display","none");
        $(".container").css("display","none");
        $("footer").css("display","none");
        $(".hidden").css("display","block");
    })















})