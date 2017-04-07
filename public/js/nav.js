/**
 * Created by Administrator on 2017/3/27 0027.
 */
window.onscroll=function () {

    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var menu = document.getElementById( "menu" );
    // console.log(menu);
    var nav = document.getElementById("nav");
    var menulogo = document.getElementById("menu-logo");
    if( t >= 100 ) {
        menu.className= "menugundong";
        nav.className= "navgundong";
        menulogo.className= "menu-logogundong";
    } else {
        menu.className= "menu";
        nav.className= "nav";
        menulogo.className= "menu-logo";
    }
};

//                background: rgba(68,47,38,.5);
var tuozhan1=$("#tuozhan1");
var tuozhan2=$("#tuozhan2");
var game=$("#game");
var story=$("#story");

game.click(function () {

    if (tuozhan1.css("display") === "none" ){
        game.parent().css("background", "rgba(68,47,38,.5)");
        story.parent().css("background", "rgba(68,47,38,0)");
        game.children("span").css("background","#ffffff")
            .css("background-size", "1em 1em")
            .css("-webkit-background-clip","text")
            .css("-webkit-text-fill-color", "transparent");

        game.children("span").eq(1).attr("class", "zt glyphicon glyphicon-chevron-up");
        story.children("span").eq(1).attr("class", "zt glyphicon glyphicon-chevron-down");
        tuozhan2.hide();
        tuozhan1.show();

    }else {
        tuozhan1.hide();
        game.children("span").eq(1).attr("class", "zt glyphicon glyphicon-chevron-down");
        game.parent().css("background", "rgba(68,47,38,0)");
        game.children("span")
            .css("background-image","-webkit-linear-gradient(top,#efd100 0,#e2a233 25%, #f0c328 50%, #fff1a3 70%, #ffe13e 100%)")
            .css("background-size", "1em 1em")
            .css("-webkit-background-clip","text")
            .css("-webkit-text-fill-color", "transparent");

    }

});
story.click(function () {
    if (tuozhan2.css("display") === "none" ){
        story.parent().css("background", "rgba(68,47,38,.5)");
        game.parent().css("background", "rgba(68,47,38,0)");
        story.children("span").css("background","#ffffff")
            .css("background-size", "1em 1em")
            .css("-webkit-background-clip","text")
            .css("-webkit-text-fill-color", "transparent");

        story.children("span").eq(1).attr("class", "zt glyphicon glyphicon-chevron-up");
        game.children("span").eq(1).attr("class", "zt glyphicon glyphicon-chevron-down");

        tuozhan1.hide();
        tuozhan2.show();

    }else {
        tuozhan2.hide();
        story.children("span").eq(1).attr("class", "zt glyphicon glyphicon-chevron-down");
        story.parent().css("background", "rgba(68,47,38,0)");
        story.children("span")
            .css("background-image","-webkit-linear-gradient(top,#efd100 0,#e2a233 25%, #f0c328 50%, #fff1a3 70%, #ffe13e 100%)")
            .css("background-size", "1em 1em")
            .css("-webkit-background-clip","text")
            .css("-webkit-text-fill-color", "transparent");

    }
});