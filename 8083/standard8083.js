//
//
//function registerCnzzWithIcon() {
//    document.write(unescape("%3Cspan id='cnzz_stat_icon_1280767364'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));
//}
//
//function openQuickApp() {
//    if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
//        appRouter('com.tunxen.standard', 'TunXenStandard');
//        registerCnzzWithIcon();
//    }
//}
//
//function openTunxenStandard(){
//    var script = document.createElement("script")
//    script.type = "text/javascript";
//    script.onload = function(){
//        openQuickApp();
//    };
//    script.src = "//statres.quickapp.cn/quickapp/js/routerinline.min.js";
//    document.getElementsByTagName("head")[0].appendChild(script);
//}


(function (){
    if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.onload = function(){
            appRouter('com.tunxen.standard', 'TunXenStandard');
            document.write(unescape("%3Cspan id='cnzz_stat_icon_1280767364'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));
        };
        script.src = "//statres.quickapp.cn/quickapp/js/routerinline.min.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    } else{
//        alert(navigator.platform)
    }
})();



