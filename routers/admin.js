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


    //分类修改
    router.post("/type/edit",function (req,res) {
        var id=req.body.tid;
        var tname=req.body.newname;
        pool.getConnection(function (err,conn) {
            conn.query("update type set tname=? where tid=?",[tname,id],function (err,result) {
                conn.release();
                if(err){
                    console.log(err);
                    resData.code=1;
                    resData.message="类名不可重复，请重新添加";
                    res.send(resData);
                }else{
                    resData.code=2;
                    resData.message="添加成功";
                    res.send(resData);
                }
            })
        })
    });




});
















//2、把这个路由的文件和主模块连接起来
module.exports=router;