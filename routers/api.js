/**
 * Created by 吕金虎 on 2017/4/8.
 */

var express=require("express");
var mysql=require("mysql");
var email=require("emailjs");   //加载emailjs模块

//数据库连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    database:"wow",
    user:"root",
    password:"aaaa"
});

//配置emailjs模块
var server=email.server.connect({
    user:"991538766@qq.com",
    password:"bestggcxpqtabefb",
    host:"smtp.qq.com",
    ssl: true
});

//1、加载路由
var router=express.Router();

var resData;
router.use(function (req,res,next) {
    resData={
        code:-1,
        msg:""
    };
    next();
});

//查看用户是否登录过
router.get("/user/userIsLogin",function (req,res) {
    if(req.session.user == undefined){
        //证明没有登录过
        res.send("0");
    }else{
        res.send(req.session.user);
    }
});




//注册
router.post("/user/register",function (req,res) {
    //获取传过来的参数
    var unum=req.body.unum;
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var uemail=req.body.uemail;
    var uquestionid=req.body.uquestionid;
    var uans=req.body.uans;


    pool.getConnection(function (err,conn) {
        conn.query("select * from wowuser where uemail=?",[uemail],function (err,result) {
            if(err){
                resData.code=0;
                resData.msg="网络连接失败，请稍后重试";
                res.json(resData);
            }else if(result.length>0){
                resData.code=1;
                resData.msg="您所输入的邮箱已经注册，请登录";
                res.json(resData);
            }else{
                //可以 注册
                conn.query("insert into wowuser values(null,?,?,?,?,?,?,0)",[unum,uname,uemail,upwd,uquestionid,uans,0],function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                        resData.code=0;
                        resData.msg="网络连接失败，请稍后重试注册";
                        res.json(resData);
                    }else{
                        resData.code=2;
                        resData.msg=uemail;
                        res.json(resData);

                        //邮箱验证
                        server.send({
                            text:"您已经成功注册战网通行证，╮(︶﹏︶)╭鬼知道你经历了什么╮",
                            from:"991538766@qq.com",
                            to:uemail,
                            subject:"╮(︶﹏︶)╭鬼知道我经历了什么╮"
                        },function (err,message) {
                            console.log(err);
                        })

                    }
                })
            }
        })
    })
});



//登录2
router.post("/user/login",function (req,res) {
    //获取传过来的参数
    var ulogemail=req.body.ulogemail;
    var ulogpwd=req.body.ulogpwd;


    pool.getConnection(function (err,conn) {
        if(err){
            console.log(err);
            resData.code=0;
            resData.msg="网络连接失败，请稍后重试";
            res.json(resData);
        }else {
            conn.query("select * from wowuser where uemail=? && upwd=?", [ulogemail, ulogpwd], function (err, result) {
                conn.release();
                if (err) {
                    console.log(err);
                    resData.code = 0;
                    resData.msg="网络连接失败，请稍后重试";
                    res.json(resData);

                } else if(result.length<=0) {
                    resData.code = 1;
                    resData.msg="用户名或者密码错误，请验证后再试";
                    res.json(resData);
                    console.log(ulogpwd);
                    console.log(ulogemail);
                }else{
                    resData.code = 2;
                    resData.msg="登录成功";

                    resData.info=result[0];   //传输到前台，好收获用户名
                    //存session
                    req.session.user={
                        _id:result[0].uid,
                        uname:result[0].uname,
                        isadmin:result[0].isadmin
                    };
                    res.json(resData);
                }
            })
        }
    })
});


//退出
router.get("/user/logout",function (req,res) {
    delete req.session.user;
    res.send("1");
});

//退出
router.get("/outlog",function (req,res) {
    delete req.session.user;
    res.send("1");
});

//2、把这个路由的文件和主模块连接起来
module.exports=router;