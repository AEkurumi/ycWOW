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

var upload=multer({dest:"./pic"});
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


//用户列表显示
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

//显示联盟
router.get("/gameclass/lianmeng",function (req,res) {
    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个
    pool.getConnection(function (err,conn) {
        conn.query("select * from gameclass where gcamp='联盟'",function (err,result) {

            var count=result.length;
            var pages=Math.ceil(count/size);
            var mxpages=pages-1;
            //控制一下页数
            page=Math.min(page,pages);
            page=Math.max(page,1);

            conn.query("select * from gameclass where gcamp='联盟' limit ?,?",[size*(page-1),size],function (err,rs) {
                conn.release();
                if(err){
                    console.log(err);
                    result={};
                    res.render("admin/class",{
                        allClass:rs
                    });
                }else{
                    res.render("admin/class",{
                        userInfo:req.session.user,
                        allClass:rs,
                        tag:"gameclass/lianmeng",
                        page:page,
                        pages:pages,
                        count:count,
                        size:size
                    });
                }

            });
        })
    })
});

//显示联盟
router.get("/gameclass/buluo",function (req,res) {
    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个
    pool.getConnection(function (err,conn) {
        conn.query("select * from gameclass where gcamp='部落'",function (err,result) {

            var count=result.length;
            var pages=Math.ceil(count/size);
            var mxpages=pages-1;
            //控制一下页数
            page=Math.min(page,pages);
            page=Math.max(page,1);

            conn.query("select * from gameclass where gcamp='部落' limit ?,?",[size*(page-1),size],function (err,rs) {
                conn.release();
                if(err){
                    console.log(err);
                    result={};
                    res.render("admin/class",{
                        allClass:rs
                    });
                }else{
                    res.render("admin/class",{
                        userInfo:req.session.user,
                        allClass:rs,
                        tag:"gameclass/buluo",
                        page:page,
                        pages:pages,
                        count:count,
                        size:size
                    });
                }

            });
        })
    })
});


//种族删除
router.get("/gameclass/delete",function (req,res) {
    // var tid=req.url.split("=")[1];
    var gid=Number(req.query.id);
    pool.getConnection(function (err,conn) {
        conn.query("delete from gameclass where gid=?",[gid],function (err,result) {
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

//种族添加
router.post("/addClass",upload.array("pic"),function (req,res) {
    var gcamp=req.body.gcamp;
    var gname=req.body.gname;
    var gintro=req.body.gintro;

    pool.getConnection(function (err,conn) {
        if(req.files!=undefined){
            var file;
            var fileName;
            var filePath="";
            for(var i in req.files){
                file=req.files[i];
                fileName=new Date().getTime() + "_" +file.originalname;
                fs.renameSync(file.path,__dirname+"/pic/"+fileName);
                if(filePath!=""){
                    filePath+=",";
                }
                filePath+="/pic/"+fileName;

            }
        }
        conn.query("insert into gameclass values(null,?,?,?,?)",[gcamp,gname,gintro,filePath],function (err,result) {
            conn.release();
            if(err){
                console.log(err);
                resData.code = 0;
                resData.msg="网络连接失败，请稍后重试";
                res.json(resData);
            }else {
                resData.code = 1;
                resData.msg="添加成功";
                res.json(resData);
            }
        })
    })
});


router.get("/addClass",function (req,res) {
    res.render("admin/class_add",{
        userInfo:req.session.user
    })
});

























//******************************职业*******************


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


//职业删除
router.get("/character/delete",function (req,res) {
    // var tid=req.url.split("=")[1];
    var cid=Number(req.query.id);
    pool.getConnection(function (err,conn) {
        conn.query("delete from career where cid=?",[cid],function (err,result) {
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

router.get("/characteradd",function (req,res) {
    res.render("admin/character_add",{
        userInfo:req.session.user
    })
});



//职业添加
router.post("/characteradd",upload.array("pic"),function (req,res) {
    var cname=req.body.cname;
    var cfeatures=req.body.cfeatures;
    var cintro=req.body.cintro;

    pool.getConnection(function (err,conn) {
        if(req.files!=undefined){
            var file;
            var fileName;
            var filePath="";
            for(var i in req.files){
                file=req.files[i];
                fileName=new Date().getTime() + "_" +file.originalname;
                fs.renameSync(file.path,__dirname+"/pic/"+fileName);
                if(filePath!=""){
                    filePath+=",";
                }
                filePath+="/pic/"+fileName;

            }
        }
        conn.query("insert into career values(null,?,?,?,?)",[cname,cfeatures,cintro,filePath],function (err,result) {
            conn.release();
            if(err){
                console.log(err);
                resData.code = 0;
                resData.msg="网络连接失败，请稍后重试";
                res.json(resData);
            }else {
                resData.code = 1;
                resData.msg="添加成功";
                res.json(resData);
            }
        })
    })
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
            conn.query("select f.fname,fr.*from forumfirst f,forum fr where f.fid=fr.fid",function (err,result) {
                var count=result.length;
                var pages=Math.ceil(count/size);
                var mxpages=pages-1;
                //控制一下页数
                page=Math.min(page,pages);
                page=Math.max(page,1);

                //还要查一次数据库
                conn.query("select f.fname,fr.*from forumfirst f,forum fr where f.fid=fr.fid limit ?,?",[size*(page-1),size],function (err,rs) {
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
                            tag:"forum",
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

router.get("/forum/kuhu",function (req,res) {
    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个
    pool.getConnection(function (err,conn) {
        conn.query("select f.fname,fr.* from forumfirst f,forum fr where f.fid=fr.fid and fr.fid='1'",function (err,result) {

            var count=result.length;
            var pages=Math.ceil(count/size);
            var mxpages=pages-1;
            //控制一下页数
            page=Math.min(page,pages);
            page=Math.max(page,1);

            conn.query("select f.fname,fr.* from forumfirst f,forum fr where f.fid=fr.fid and fr.fid='1' limit ?,?",[size*(page-1),size],function (err,rs) {
                conn.release();
                if(err){
                    console.log(err);
                    result={};
                    res.render("admin/forum",{
                        forums:rs
                    });
                }else{
                    res.render("admin/forum",{
                        userInfo:req.session.user,
                        forums:rs,
                        tag:"forum/kuhu",
                        page:page,
                        pages:pages,
                        count:count,
                        size:size
                    });
                }

            });
        })
    })
});

router.get("/forum/zonghe",function (req,res) {
    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个
    pool.getConnection(function (err,conn) {
        conn.query("select f.fname,fr.* from forumfirst f,forum fr where f.fid=fr.fid and fr.fid='2'",function (err,result) {

            var count=result.length;
            var pages=Math.ceil(count/size);
            var mxpages=pages-1;
            //控制一下页数
            page=Math.min(page,pages);
            page=Math.max(page,1);

            conn.query("select f.fname,fr.* from forumfirst f,forum fr where f.fid=fr.fid and fr.fid='2' limit ?,?",[size*(page-1),size],function (err,rs) {
                conn.release();
                if(err){
                    console.log(err);
                    result={};
                    res.render("admin/forum",{
                        forums:rs
                    });
                }else{
                    res.render("admin/forum",{
                        userInfo:req.session.user,
                        forums:rs,
                        tag:"forum/zonghe",
                        page:page,
                        pages:pages,
                        count:count,
                        size:size
                    });
                }

            });
        })
    })
});

router.get("/forum/zhiye",function (req,res) {
    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个
    pool.getConnection(function (err,conn) {
        conn.query("select f.fname,fr.* from forumfirst f,forum fr where f.fid=fr.fid and fr.fid='3'",function (err,result) {

            var count=result.length;
            var pages=Math.ceil(count/size);
            var mxpages=pages-1;
            //控制一下页数
            page=Math.min(page,pages);
            page=Math.max(page,1);

            conn.query("select f.fname,fr.* from forumfirst f,forum fr where f.fid=fr.fid and fr.fid='3' limit ?,?",[size*(page-1),size],function (err,rs) {
                conn.release();
                if(err){
                    console.log(err);
                    result={};
                    res.render("admin/forum",{
                        forums:rs
                    });
                }else{
                    res.render("admin/forum",{
                        userInfo:req.session.user,
                        forums:rs,
                        tag:"forum/zhiye",
                        page:page,
                        pages:pages,
                        count:count,
                        size:size
                    });
                }

            });
        })
    })
});

router.get("/forumClass",function (req,res) {
    pool.getConnection(function (err,conn) {
        conn.query("select * from forum",function (err,result) {
            conn.release();
            if(err){
                res.render("admin/forum",{
                    forumClass:result
                });
            }else {
                res.render("admin/forum",{
                    userInfo:req.session.user,
                    forumClass:result
                });
            }
        })
    })
});






//论坛版块删除
router.get("/forum/delete",function (req,res) {
    // var tid=req.url.split("=")[1];
    var fid=Number(req.query.id);
    pool.getConnection(function (err,conn) {
        conn.query("delete from forum where fid=?",[fid],function (err,result) {
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







router.get("/forumAdd",function (req,res) {
    pool.getConnection(function (err,conn) {
        conn.query("select * from forumfirst",function (err,result) {
            if(err){
               console.log(err);
            }else {
                console.log(result);
                res.render("admin/forum_add",{
                    userInfo:req.session.user,
                    fnames:result
                })
            }
        })
    });
});


//论坛版块添加
router.post("/forumAdd",upload.array("pic"),function (req,res) {
    var fonename=Number(req.body.fonename);
    var ftwoname=req.body.ftwoname;
    var ftwointro=req.body.ftwointro;

    pool.getConnection(function (err,conn) {
        if(req.files!=undefined){
            var file;
            var fileName;
            var filePath="";
            for(var i in req.files){
                file=req.files[i];
                fileName=new Date().getTime() + "_" +file.originalname;
                fs.renameSync(file.path,__dirname+"/pic/"+fileName);
                if(filePath!=""){
                    filePath+=",";
                }
                filePath+="/pic/"+fileName;

            }
        }
        var data=new Date();
        var addTime=data.getFullYear()+","+(data.getMonth()+1)+","+data.getDate()+" "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()+":"+data.getMilliseconds();
        var addurl="/form/"+data.getTime();

        conn.query("insert into forum values(null,?,?,?,?,?)",[fonename,ftwoname,ftwointro,filePath,addurl],function (err,result) {
            conn.release();
            if(err){
                console.log(err);
                resData.code = 0;
                resData.msg="网络连接失败，请稍后重试";
                res.json(resData);
            }else {
                resData.code = 1;
                resData.msg="添加成功";
                res.json(resData);
            }
        })
    })
});




router.get("/forumSend",function (req,res) {
    pool.getConnection(function (err,conn) {
        conn.query("select * from forumfirst",function (err,result) {
            if(err){
                console.log(err);
            }else {
                conn.query("select * from forum",function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                    }else {
                        res.render("admin/forum_send",{
                            userInfo:req.session.user,
                            forums:rs,
                            fnames:result
                        })
                    }
                })
            }
        })
    });
});


router.get("/forumSend",function (req,res) {
    pool.getConnection(function (err,conn) {

    });
});


//发送官方贴
// router.get("/forumSend",function (req,res) {
//     res.render("admin/forum_send",{
//         userInfo:req.session.user
//     })
// });

router.post("/forumSend",function (req,res) {
    var conforum=req.body.conforum;
    var conforumname=req.body.conforumname;
    var contit=req.body.contit;
    var content=req.body.content;

    var data=new Date();
    var addTime=data.getFullYear()+","+(data.getMonth()+1)+","+data.getDate()+" "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()+":"+data.getMilliseconds();
    var addurl=data.getTime();

    pool.getConnection(function (err,conn) {
        conn.query("insert into content values(null,?,?,?,?,?,?,?,?,0)",[req.session.user._id,conforum,conforumname,contit,content,addTime,req.session.user.isadmin,addurl],function (err,result) {
            conn.release();
            if(err){
                console.log(err);
                resData.code=0;
                resData.msg="网络连接失败，请稍后重试注册";
                res.json(resData);
            }else{
                resData.code=1;
                resData.msg="发送成功";
                res.json(resData);
            }
        })
    })
});


//论坛列表显示
router.get("/sendHistory",function (req,res) {
    //确保绝对是从第一页开始的

    var page=Number(req.query.page || 1);
    var size=7;  //默认每一页7个

    //获取所有的用户信息
    pool.getConnection(function (err,conn) {
        if(err){
            console.log(err);
        }else{
            conn.query("select c.*,w.uname,f.fname,fr.ftwoname from forumfirst f,wowuser w,content c,forum fr where f.fid=c.fid and c.ftwoid=fr.ftwoid and c.uid=w.uid",function (err,result) {
                var count=result.length;
                var pages=Math.ceil(count/size);
                var mxpages=pages-1;
                //控制一下页数
                page=Math.min(page,pages);
                page=Math.max(page,1);

                //还要查一次数据库
                conn.query("select c.*,w.uname,f.fname,fr.ftwoname from forumfirst f,wowuser w,content c,forum fr where f.fid=c.fid and c.ftwoid=fr.ftwoid and c.uid=w.uid limit ?,?",[size*(page-1),size],function (err,rs) {
                    conn.release();
                    if(err){
                        console.log(err);
                        result={};
                        res.render("admin/forum_li",{
                            contents:rs
                        });
                    }else {
                        res.render("admin/forum_li",{
                            userInfo:req.session.user,
                            contents:rs,
                            tag:"sendHistory",
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
router.get("/sendHistory/delete",function (req,res) {
    // var tid=req.url.split("=")[1];
    var conid=Number(req.query.id);
    pool.getConnection(function (err,conn) {
        conn.query("delete from content where conid=?",[conid],function (err,result) {
            conn.release();
            if(err){
                console.log(err);
                res.send("0")
            }else{
                res.send("<script>alert('删除成功');location.href='/admin/sendHistory';</script>")
            }
        });
    })
});




//2、把这个路由的文件和主模块连接起来
module.exports=router;