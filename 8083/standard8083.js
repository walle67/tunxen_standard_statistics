
//function loadCnzzJs() {
//    var script = document.createElement("script")
//    script.type = "text/javascript";
//    script.onload = function(){
//        alert("loadCnzzJs!");
//    };
//    script.src = "https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364";
//    document.getElementsByTagName("head")[0].appendChild(script);
//}

//function registerCnzz() {
//    var script = document.createElement("script")
//    script.type = "text/javascript";
//    script.onload = function(){
//        alert("registerCnzz!");
//        document.write(unescape("%3Cspan id='cnzz_stat_icon_1280767364'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364' type='text/javascript'%3E%3C/script%3E"));
//    };
//    script.src = "https://s9.cnzz.com/z_stat.php?id=1280767364&web_id=1280767364";
//    document.getElementsByTagName("head")[0].appendChild(script);
//}

function registerCnzzWithIcon() {
    document.write(unescape("%3Cspan id='cnzz_stat_icon_1280767364'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));

    alert("registerCnzzWithIcon!");
}

function openQuickApp() {
    alert("openQuickApp!");

    registerCnzzWithIcon();


    if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
        appRouter('com.tunxen.standard', 'TunXenStandard')
    }
}

function openTunxenStandard(){
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.onload = function(){
        openQuickApp();
    };
    script.src = "//statres.quickapp.cn/quickapp/js/routerinline.min.js";
    document.getElementsByTagName("head")[0].appendChild(script);

//    $("body").append('<script src="//statres.quickapp.cn/quickapp/js/routerinline.min.js" ></script>');



//        $("body").append('<script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1280767364&web_id=1280767364"></script>');

//        $("body").append('<script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280767364'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364' type='text/javascript'%3E%3C/script%3E"));</script>');

    alert("你好！" + navigator.platform);
}


