$(function () {
    $(window).mousedown(function (e) {
        e.preventDefault;
    })
    $(window).mousemove(function (e) {
        e.preventDefault;
    })
    var heights=$("section").height();
    var num=0;
    var les=$("section").length
    var flag=true;
    touch.on("body","swipeup","#fullpage",function (e) {
        if(!flag){
            return;
        }
        num++;
        if(num==les){
            num=les-1
            return
        }

        $("#fullpage").css({
            marginTop:-num*heights,
            transition:"margin-top 2s ease"
        })
        flag=false;

    })
    touch.on("body","swipedown","#fullpage",function (e) {
        if(!flag){
            return
        }
        num--;
        if(num==-1){
            num=0;
            return
        }
        $("#fullpage").css({
            marginTop:-num*heights,
            transition:"margin-top 2s ease"
        })
        flag=false;
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
    //菜单动画
    var flag2=true
    $(".menu-option").click(function () {
        if(flag2){
            $(".menu-option-top").css({
                transform:"translate(0,4px) rotate(45deg)"
            })
            $(".menu-option-bottom").css({
                transform:"translate(0,-4px) rotate(-45deg)"
            })
            $(".menu a").each(function (index,obj) {
                $(obj).css({
                    opacity:0,
                    animation:"menu 1s linear forwards "+index*0.2+"s"
                })
            })
            flag2=false;
        }else{

            $(".menu-option-top").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu-option-bottom").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu a").each(function (index,obj) {
                $(obj).css({
                    opacity:1,
                    animation:"menu1 2s linear forwards "+(1.6-index*0.2)+"s"
                })
            })
            flag2=true;
        }
    })
    $(window).resize(function () {
        clientH=$(window).height();
        $("#fullpage").css({marginTop:-num*clientH});
        var clinetW=$(window).width()
        if(clinetW>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotate(0deg)"
            })

            $(".menu-option-top").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu-option-bottom").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            flag2=true;
        }

    })
})