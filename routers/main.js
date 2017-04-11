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

router.get("/user/register",function (req,res) {
    //使用模板引擎去渲染界面
    // 第一个参数模板的路径  第二个参数分配给模板使用的数据
    pool.getConnection(function (err,conn) {
        conn.query("select * from safequestion",function (err,result) {
            conn.release();
            if(err){
                console.log(err);
            }else if(result.length<=0){
                console.log("数据库为空，请先添加数据库");
            }else{
                res.render("main/register",{
                    questions:result
                })
            }
        })
    });
});


router.get("/",function (req,res) {
    res.render("main/index",{

    });
});

router.get("/user/login",function (req,res) {
    res.render("main/login",{

    });
});

router.get("/gamepoints/gamepoints",function (req,res) {
    res.render("main/gamepoints/gamepoints",{

    });
});



router.get("/gamepoints/cellphone",function (req,res) {
    res.render("main/gamepoints/cellphone",{

    });
});




//2、把这个路由的文件和主模块连接起来
module.exports=router;