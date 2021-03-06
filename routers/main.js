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



// 论坛
router.get("/forum",function (req,res) {
    pool.getConnection(function (err,conn) {
        conn.query("select f.fname,fr.*from forumfirst f,forum fr where f.fid=fr.fid",function (err,result) {
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

router.get("/forum/*",function (req,res) {
    var url=req.url;
    pool.getConnection(function (err,conn) {
        conn.query("select f.fname,fr.* from forumfirst f,forum fr where f.fid=fr.fid and furl=?",[url],function (err,result) {
            if(err){
                console.log(err);
            }else{
                console.log(result);
                conn.query("select c.*,w.uname,f.fname,fr.ftwoname from forumfirst f,wowuser w,content c,forum fr where f.fid=c.fid and c.ftwoid=fr.ftwoid and c.uid=w.uid && ftwoname=?",[result[0].ftwoname],function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                    }else{

                        for(var i=0;i<rs.length;i++){

                            var length=rs[i].ans.split(";").length;

                            if(length==0){
                                rs[i].ans=0;
                            }else{
                                rs[i].ans=length-1;
                            }
                        }
                        console.log(rs);
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

router.get("/topic/*",function (req,res) {
    var url=req.url;
    var num=url.split("/")[2];
    pool.getConnection(function (err,conn) {
        conn.query("select fr.furl,c.*,w.uname,f.fname,fr.ftwoname from forumfirst f,wowuser w,content c,forum fr where f.fid=c.fid and c.ftwoid=fr.ftwoid and c.uid=w.uid && conurl=?",[num],function (err,result) {
            conn.release();

            var mycomments=result[0].ans.split(";");
            var comments=[];
            var mydata={};
            for(var i=0;i<mycomments.length-1;i++){
                mydata.uname=mycomments[i].split(",")[0];
                mydata.ttime=mycomments[i].split(",")[1];
                mydata.content=mycomments[i].split(",")[2];
                comments.push(mydata);
                mydata={};
            }

            //数组倒序
            comments.reverse();

            result[0].comments=comments.length;

            if(err){
                console.log(err);
            }else{
                res.render("main/forum/forum_posts_off",{
                    userInfo:req.session.user,
                    cons:result,
                    comments:comments

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
    pool.getConnection(function (err,conn) {
        conn.query("select * from career",function (err,result) {
            var len=result.length;
            var yblen;
            if(len%2==0){
                yblen=len/2;
            }else{
                yblen=Math.round(len/2);
            }
            conn.query("select * from career limit ?",[yblen],function (err,resu) {
                conn.query("select * from career limit ?,?",[yblen,len],function (err,resul) {
                    conn.release();
                    if(err){
                        console.log(err);
                    }else{
                        res.render("main/game/classes",{
                            userInfo:req.session.user,
                            career1s:resu,
                            career2s:resul


                        })
                    }
                });
            });
        })
    });
});

//种族
router.get("/gameraces",function (req,res) {
    pool.getConnection(function (err,conn) {
        conn.query("select * from gameclass",function (err,result) {
            conn.release();
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