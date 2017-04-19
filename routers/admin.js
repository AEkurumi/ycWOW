/**
 * Created by 吕金虎 on 2017/4/8.
 */
var express=require("express");
var mysql=require("mysql");
var multer=require("multer");
var fs=require("fs");

//数据库连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    database:"wow",
    user:"root",
    password:"aaaa"
});

var upload=multer({dest:"./photo"});
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



router.get("/user",function (req,res) {
    //确保绝对是从第一页开始的
    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个

    //获取所有的用户信息
    pool.getConnection(function (err,conn) {
        if(err){
            console.log(err);
        }else{
            conn.query("select * from wowuser",function (err,result) {
                var count=result.length;
                var pages=Math.ceil(count/size);
                var mxpages=pages-1;
                //控制一下页数
                page=Math.min(page,pages);
                page=Math.max(page,1);

                //还要查一次数据库
                conn.query("select * from wowuser limit ?,?",[size*(page-1),size],function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                        result={};
                        res.render("admin/user_index",{
                            allUser:rs
                        });
                    }else {
                        res.render("admin/user_index",{
                            userInfo:req.session.user,
                            allUser:rs,
                            tag:"user",
                            page:page,
                            pages:pages,
                            count:count,
                            size:size
                        });
                    }
                })
            })
        }
    });

});



//种族列表显示
router.get("/gameclass",function (req,res) {
    //确保绝对是从第一页开始的

    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个

    //获取所有的用户信息
    pool.getConnection(function (err,conn) {
        if(err){
            console.log(err);
        }else{
            conn.query("select * from gameclass",function (err,result) {
                var count=result.length;
                var pages=Math.ceil(count/size);
                var mxpages=pages-1;
                //控制一下页数
                page=Math.min(page,pages);
                page=Math.max(page,1);

                //还要查一次数据库
                conn.query("select * from gameclass limit ?,?",[size*(page-1),size],function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                        result={};
                        res.render("admin/class",{
                            allClass:rs
                        });
                    }else {
                        res.render("admin/class",{
                            userInfo:req.session.user,
                            allClass:rs,
                            tag:"gameClass",
                            page:page,
                            pages:pages,
                            count:count,
                            size:size
                        });
                    }
                })
            })
        }
    });
});


//种族删除
router.get("/gameclass/delete",function (req,res) {
    // var tid=req.url.split("=")[1];
    var gid=Number(req.query.id);
    pool.getConnection(function (err,conn) {
        conn.query("delete from gameclass where gid=?",[gid],function () {
            conn.release();
            if(err){
                console.log(err);
                res.send("0")
            }else{
                res.send("<script>alert('删除成功');location.href='/admin/gameclass';</script>")
            }
        });
    })
});




//职业列表显示
router.get("/character",function (req,res) {
    //确保绝对是从第一页开始的

    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个

    //获取所有的用户信息
    pool.getConnection(function (err,conn) {
        if(err){
            console.log(err);
        }else{
            conn.query("select * from career",function (err,result) {
                var count=result.length;
                var pages=Math.ceil(count/size);
                var mxpages=pages-1;
                //控制一下页数
                page=Math.min(page,pages);
                page=Math.max(page,1);

                //还要查一次数据库
                conn.query("select * from career limit ?,?",[size*(page-1),size],function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                        result={};
                        res.render("admin/character",{
                            CClass:rs
                        });
                    }else {
                        res.render("admin/character",{
                            userInfo:req.session.user,
                            CClass:rs,
                            tag:"character",
                            page:page,
                            pages:pages,
                            count:count,
                            size:size
                        });
                    }
                })
            })
        }
    });
});


//种族删除
router.get("/character/delete",function (req,res) {
    // var tid=req.url.split("=")[1];
    var cid=Number(req.query.id);
    pool.getConnection(function (err,conn) {
        conn.query("delete from career where cid=?",[cid],function () {
            conn.release();
            if(err){
                console.log(err);
                res.send("0")
            }else{
                res.send("<script>alert('删除成功');location.href='/admin/character';</script>")
            }
        });
    })
});




router.get("/addClass",function (req,res) {
    res.render("admin/class_add",{
        userInfo:req.session.user
    })
});



//种族添加
router.post("/addClass",upload.array("pic"),function (req,res) {
    var gcamp=req.body.gcamp;
    var gname=req.body.gname;
    var gpic=req.body.gpic;
    var gintro=req.body.gintro;

    console.log(gcamp);
    console.log(gname);
    console.log(gpic);
    console.log(gintro);

});



//**********************论坛版块**********************************
//论坛列表显示
router.get("/forum",function (req,res) {
    //确保绝对是从第一页开始的

    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个

    //获取所有的用户信息
    pool.getConnection(function (err,conn) {
        if(err){
            console.log(err);
        }else{
            conn.query("select * from forum",function (err,result) {
                var count=result.length;
                var pages=Math.ceil(count/size);
                var mxpages=pages-1;
                //控制一下页数
                page=Math.min(page,pages);
                page=Math.max(page,1);

                //还要查一次数据库
                conn.query("select * from forum limit ?,?",[size*(page-1),size],function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                        result={};
                        res.render("admin/forum",{
                            forums:rs
                        });
                    }else {
                        res.render("admin/forum",{
                            userInfo:req.session.user,
                            forums:rs,
                            tag:"character",
                            page:page,
                            pages:pages,
                            count:count,
                            size:size
                        });
                    }
                })
            })
        }
    });
});


//论坛版块删除
router.get("/forum/delete",function (req,res) {
    // var tid=req.url.split("=")[1];
    var fid=Number(req.query.id);
    pool.getConnection(function (err,conn) {
        conn.query("delete from forum where fid=?",[fid],function () {
            conn.release();
            if(err){
                console.log(err);
                res.send("0")
            }else{
                res.send("<script>alert('删除成功');location.href='/admin/forum';</script>")
            }
        });
    })
});




//2、把这个路由的文件和主模块连接起来
module.exports=router;