
function openTunsenStandard() {
    if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
        $("body").append('<script src="//statres.quickapp.cn/quickapp/js/routerinline.min.js" ></script>');

//        $("body").append('<script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1280767364&web_id=1280767364"></script>');

//        $("body").append('<script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280767364'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280767364' type='text/javascript'%3E%3C/script%3E"));</script>');

//    	window['aplus_queue'] = window['aplus_queue'] || [];
//    	var f = document.getElementsByTagName('script')[0];
//    	var j = document.createElement('script');
//    	j.async = true;
//    	j.id = 'beacon-aplus';
//    	j.src = 'https://d.alicdn.com/alilog/mlog/aplus/203467608.js';
//    	f.parentNode.insertBefore(j, f);
//
//    	//集成应用的appKey
//    	aplus_queue.push({
//            action: 'aplus.setMetaInfo',
//            arguments: ['appKey', '614b4f6c16b6c75de06cf2f8']
//    	});

    	appRouter('com.tunxen.standard', 'TunXenStandard')
    }
}
	   