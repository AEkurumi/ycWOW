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


router.get("/forum",function (req,res) {
    pool.getConnection(function (err,conn) {
        conn.query("select * from forum",function (err,result) {
            conn.release();
            if(err){
                console.log(err);
            }else if(result.length<=0){
                console.log("数据库为空，请先添加数据库");
            }else{
                res.render("main/forum/forumIndex",{
                    userInfo:req.session.user,
                    forums:result
                })
            }
        })
    });
});

router.get("/forum/kefu",function (req,res) {
    var url=req.url;
    pool.getConnection(function (err,conn) {
        conn.query("select * from forum where furl=?",[url],function (err,result) {
            if(err){
                console.log(err);
            }else{
                conn.query("select c.*,u.uname from content c,wowuser u where c.uid=u.uid && conforumname=?;",[result[0].ftwoname],function (err,rs) {
                    conn.release();
                    console.log(rs);
                    if(err){
                        console.log(err);
                    }else{
                        res.render("main/forum/forum",{
                            userInfo:req.session.user,
                            forumss:result,
                            cons:rs
                        })
                    }
                })
            }
        })
    })
});

router.get("/topic/1492826403692",function (req,res) {
    var url=req.url;
    var num=url.split("/")[2];
    console.log(num);
    console.log(url);
    pool.getConnection(function (err,conn) {
        conn.query("select c.*,u.uname from content c,wowuser u where c.uid=u.uid && conurl=?",[num],function (err,result) {
            conn.release();
            console.log(result);
            if(err){
                console.log(err);
            }else{
                res.render("main/forum/forum_posts_off",{
                    userInfo:req.session.user,
                    cons:result
                })
            }
        })
    })
});






router.get("/",function (req,res) {
    res.render("main/index",{
        userInfo:req.session.user
    });
});
router.get("/home",function (req,res) {
    res.render("main/home",{
        userInfo:req.session.user
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



router.get("/admin",function (req,res) {
    res.render("admin/index",{
        userInfo:req.session.user
    });
});


//新闻
router.get("/news",function (req,res) {
    res.render("main/news",{
        userInfo:req.session.user
    });
});

//职业
router.get("/gameclass",function (req,res) {
    console.log("gameclass");
    res.render("main/game/classes",{
        userInfo:req.session.user
    });
});

//种族
router.get("/gameraces",function (req,res) {
    console.log("gameraces");
    res.render("main/game/races",{
        userInfo:req.session.user
    });
});

//新玩家
router.get("/newplayers1",function (req,res) {
    res.render("main/game/newplayers1",{
        userInfo:req.session.user
    });
});


//老玩家
router.get("/oldplayers1",function (req,res) {
    res.render("main/game/oldplayers1",{
        userInfo:req.session.user
    });
});

//下载
router.get("/download",function (req,res) {
    res.render("main/game/download",{

    });
});




//2、把这个路由的文件和主模块连接起来
module.exports=router;