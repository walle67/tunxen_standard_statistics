
function openQuickApp() {
    alert("openQuickApp!");
    if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
        appRouter('com.tunxen.standard', 'TunXenStandard')
    }
}

function openTunxenStandard(){
//    alert("你好，我是一个警告框sss！" + navigator.platform);

    var script = document.createElement("script")
    script.type = "text/javascript";
    //Firefox, Opera, Chrome, Safari 3+
    script.onload = function(){
        openQuickApp();
    };
    script.src = "//statres.quickapp.cn/quickapp/js/routerinline.min.js";
    document.getElementsByTagName("head")[0].appendChild(script);

//    $("body").append('<script src="//statres.quickapp.cn/quickapp/js/routerinline.min.js" ></script>');



//        $("body").append('<script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1280767364&web_id=1280767364"></script>');

//        $("body").append('<script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280767364'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364' type='text/javascript'%3E%3C/script%3E"));</script>');

    alert("你好，我！" + navigator.platform);
}


