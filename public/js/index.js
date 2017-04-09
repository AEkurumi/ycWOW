/**
 * Created by 吕金虎 on 2017/4/8.
 */

//注册
$(function () {
    $("#subbtn").on("click",function () {
        var unum=$("#userid").val();
        var uname=$("#uname").val();
        var uemail=$("#email").val();
        var upwd=$("#pwd").val();
        var uquestion=$("span.question1").val();
        var uans=$("uans").val();

        unum=md5(unum);
        upwd=md5(upwd);
        uans=md5(upwd);

        $.ajax({
            type:"post",
            url:"/api/user/register",  //地址
            data:{               //传参
                unum:unum,
                uname:uname,
                uemail:uemail,
                upwd:upwd,
                uquestion:uquestion,
                uans:uans
            },
            dataType:"json",
            success:function (data) {






            }
        })





    })












});


