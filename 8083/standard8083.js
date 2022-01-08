
function openTunsenStandard() {
    if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
    	window['aplus_queue'] = window['aplus_queue'] || [];
    	var f = document.getElementsByTagName('script')[0];
    	var j = document.createElement('script');
    	j.async = true;
    	j.id = 'beacon-aplus';
    	j.src = 'https://d.alicdn.com/alilog/mlog/aplus/203467608.js';
    	f.parentNode.insertBefore(j, f);

    	//集成应用的appKey
    	aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['appKey', '614b4f6c16b6c75de06cf2f8']
    	});

    	appRouter('com.tunxen.standard', 'TunXenStandard')
    }
}
	   