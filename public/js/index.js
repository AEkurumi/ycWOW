/**
 * Created by 吕金虎 on 2017/4/8.
 */

//注册

var code;
var bigCode;
var smallCode;

$(function () {
    createCode();
    //注册
    $("#subbtn").on("click",function () {
        var unum=$("#userid").val();
        var uname=$("#uname").val();
        var uemail=$("#email").val();
        var upwd=$("#upwd").val();
        var uans=$("uans").val();
        var uquestionid=$("span.question1").attr("value");
        console.log(uquestionid);

        unum=md5(unum);
        upwd=md5(upwd);
        uans=md5(uans);


        var repVerification=$("#rep_verification").val();
        if(repVerification.length<=0){
            $("input.verification").click();
            $("div.verification_err").show();
            $("div.verification_err span").text("请输入验证码");
            $("#rep_verification").addClass("inp_err");
            $("#rep_verification").removeClass("inp_def");
        }else if(bigCode==repVerification || smallCode==repVerification || code==repVerification){
            $("div.verification_err").hide();
            $("#rep_verification").addClass("inp_def");
            $("#rep_verification").removeClass("inp_err");

            //验证码输入正确
            $.ajax({
                type:"post",
                url:"/api/user/register",  //地址
                data:{               //传参
                    unum:unum,
                    uname:uname,
                    uemail:uemail,
                    upwd:upwd,
                    uquestionid:uquestionid,
                    uans:uans
                },
                dataType:"json",
                success:function (data) {
                    if(data.code==0){
                        alert(data.msg);
                    }else if(data.code==1){
                        alert(data.msg);
                    }else if(data.code==2){
                        location.href="../../view/main/registerSuccess.html?email="+data.msg;
                    }
                }
            });
        }else{
            $("#rep_verification").addClass("inp_err");
            $("#rep_verification").removeClass("inp_def");
            $("input.verification").click();
            $("div.verification_err").show();
            $("div.verification_err span").text("验证码输入错误，请重新输入");
        }
    });

    //登录
    $("#loginbtn").on("click",function () {
        var ulogemail=$("[name='uemail']").val();
        var ulogpwd=$("[name='pwd']").val();

        if(ulogemail=="" ||  ulogemail==null || ulogpwd=="" ||  ulogpwd==null ){
            alert("用户名或者密码不能为空");
            return;
        }

        ulogpwd=md5(ulogpwd);
        console.log(ulogpwd);

        $.ajax({
            type:'post',
            url:'/api/user/login',
            data:{
                ulogemail:ulogemail,
                ulogpwd:ulogpwd
            },
            dataType:"json",
            success:function (data) {
                if(data.code==0){
                    alert(data.msg);
                }else if(data.code==1){
                    alert(data.msg);
                }else if(data.code==2){
                    alert(data.msg);
                    console.log(data.msg);
                    setTimeout(function () {
                        location.href="../../view/main/home.html";
                    },1000);
                }

            }
        })
    });
});

function createCode() {
    code = "";
    bigCode="";
    smallCode="";
    var leftfirstNum=Math.floor(Math.random()*50); //生成距左的距离
    var topnum=Math.floor(Math.random()*30);   //生成距上的距离
    var codeLength = 6;//验证码的长度
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数
    for(var i=0;i<codeLength;i++){
        var spanTop=Math.floor(Math.random()*10)+topnum;
        var degnum=Math.floor(Math.random()*36);    //生成旋转的度数
        var index = Math.floor(Math.random()*62);//取得随机数的索引（0~62）
        $("#yanzheng span:eq("+i+")").text(random[index]);
        code+=random[index];
        $("#yanzheng span:eq("+i+")").css("top",spanTop);
        $("#yanzheng span:eq("+i+")").css("transform","rotate("+degnum+"deg)");
        $("#yanzheng span:eq("+i+")").css("left",leftfirstNum+(i*16));
    }
    for(var i=0;i<3;i++){
        var topline=Math.floor(Math.random()*45);
        var linedegnum=Math.floor(Math.random()*36);    //生成旋转的度数
        $("#yanzheng div.line:eq("+i+")").css("top",topline);
        $("#yanzheng div.line:eq("+i+")").css("transform","rotate("+linedegnum+"deg)");
    }
    bigCode=code.toUpperCase();
    smallCode=code.toLowerCase();
}