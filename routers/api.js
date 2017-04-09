/**
 * Created by 吕金虎 on 2017/4/8.
 */

var express=require("express");
var mysql=require("mysql");


//数据库连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    database:"wow",
    user:"root",
    password:"aaaa"
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


router.post("/user/register",function (req,res) {
    //获取传过来的参数
    var unum=req.body.unum;
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var uemail=req.body.uemail;
    var uquestion=req.body.uquestion;
    var uans=req.body.uans;

    pool.getConnection(function (err,conn) {
        conn.query("select questionid from safequestion where quesname=? ",[uquestion],function (err,result) {
            console.log(result);
            if(err){
                resData.code=0;
                resData.msg="网络连接失败，请稍后重试";
                res.json(resData);
            }else{
                // conn.query("insert into wowuser values(null,?,?,?,?,?,?,0)",[unum,uname,uemail,upwd,1,])
            }

        })
    })




    // pool.getConnection(function (err,conn) {
    //     conn.query("select * from user where uname=?",[uname],function (err,result) {
    //         if(err){
    //             resData.code=0;
    //             resData.msg="网络连接失败，请稍后重试";
    //             res.json(resData);
    //         }else if(result.length>0){
    //             resData.code=1;
    //             resData.msg="用户名已存在，请重新输入";
    //             res.json(resData);
    //         }else{
    //             //可以 注册
    //             conn.query("insert into user  values(null,?,?,0)",[uname,pwd],function (err,resu) {
    //                 conn.release();
    //                 if(err){
    //                     console.log(err);
    //                     resData.code=0;
    //                     resData.msg="网络连接失败，请稍后重试注册";
    //                     res.json(resData);
    //                 }else{
    //                     resData.code=2;
    //                     resData.msg="注册成功";
    //                     res.json(resData);
    //                 }
    //             })
    //         }
    //     })
    // })
});






//2、把这个路由的文件和主模块连接起来
module.exports=router;