$(function () {
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
})