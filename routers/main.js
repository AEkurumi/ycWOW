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

//论坛
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





//首页
router.get("/",function (req,res) {
    res.render("main/index",{
        userInfo:req.session.user
    });
});
//home界面
router.get("/home",function (req,res) {
    res.render("main/home",{
        userInfo:req.session.user
    });
});
//登录
router.get("/user/login",function (req,res) {
    res.render("main/login",{

    });
});
//立即充值
router.get("/gamepoints/gamepoints",function (req,res) {
    res.render("main/gamepoints/gamepoints",{

    });
});


//手机充值
router.get("/gamepoints/cellphone",function (req,res) {
    res.render("main/gamepoints/cellphone",{

    });
});


//后台界面
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
    pool.getConnection(function (err,conn) {
        conn.query("select * from career",function (err,result) {
            conn.release();
            if(err){
                console.log(err);
            }else{
                res.render("main/game/classes",{
                    userInfo:req.session.user,
                    career1:result[0],
                    career2:result[1],
                    career3:result[2],
                    career4:result[3],
                    career5:result[4],
                    career6:result[5],
                    career7:result[6],
                    career8:result[7],
                    career9:result[8],
                    career10:result[9],
                    career11:result[10],
                    career12:result[11],
                    career13:result[12],
                });
            }
        })
    });
});

//种族
router.get("/gameraces",function (req,res) {
    console.log("gameraces");
    pool.getConnection(function (err,conn) {
        conn.query("select * from gameclass",function (err,result) {
            if(err){
                console.log(err);
            }else{
                res.render("main/game/races",{
                    userInfo:req.session.user,
                    gameclass:result
                });
            }
        })
    });
});

//新玩家
router.get("/newplayers1",function (req,res) {
    res.render("main/game/newplayers1",{
        userInfo:req.session.user
    });
});
router.get("/newplayers2",function (req,res) {
    res.render("main/game/newplayers2",{
        userInfo:req.session.user
    });
});

router.get("/newplayers3",function (req,res) {
    res.render("main/game/newplayers3",{
        userInfo:req.session.user
    });
});

router.get("/newplayers4",function (req,res) {
    res.render("main/game/newplayers4",{
        userInfo:req.session.user
    });
});



//老玩家
router.get("/oldplayers1",function (req,res) {
    res.render("main/game/oldplayers1",{
        userInfo:req.session.user
    });
});

router.get("/oldplayers2",function (req,res) {
    res.render("main/game/oldplayers2",{
        userInfo:req.session.user
    });
});
router.get("/oldplayers3",function (req,res) {
    res.render("main/game/oldplayers3",{
        userInfo:req.session.user
    });
});
router.get("/oldplayers4",function (req,res) {
    res.render("main/game/oldplayers4",{
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