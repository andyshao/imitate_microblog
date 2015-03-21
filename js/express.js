;(function($){
	/* var expdata = [
		{
			'nick':'88_org',
			'name':'拜拜',
			'href':'./img/express/88_org.gif'
		},
		{
			'nick':'bs2_thumb',
			'name':'鄙视',
			'href':'./img/express/bs2_thumb.gif'
		},
		{
			'nick':'bz_thumb',
			'name':'闭嘴',
			'href':'./img/express/bz_thumb.gif'
		},
		{
			'nick':'cj_thumb',
			'name':'刺激',
			'href':'./img/express/cj_thumb.gif'
		},
		{
			'nick':'crazya_org',
			'name':'疯了',
			'href':'./img/express/crazya_org.gif'
		},
		{
			'nick':'good_org',
			'name':'真棒',
			'href':'./img/express/good_org.gif'
		},
		{
			'nick':'hatea_org',
			'name':'讨厌',
			'href':'./img/express/hatea_org.gif'
		},
		{
			'nick':'kbsa_org',
			'name':'抠鼻',
			'href':'./img/express/kbsa_org.gif'
		},
		{
			'nick':'kl_thumb',
			'name':'哭了',
			'href':'./img/express/kl_thumb.gif'
		},
		{
			'nick':'laugh',
			'name':'大笑',
			'href':'./img/express/laugh.gif'
		},
		{
			'nick':'lovea_org',
			'name':'爱情',
			'href':'./img/express/lovea_org.gif'
		},
		{
			'nick':'sada_thumb',
			'name':'悲剧',
			'href':'./img/express/sada_thumb.gif'
		},
		{
			'nick':'shamea_thumb',
			'name':'害羞',
			'href':'./img/express/shamea_thumb.gif'
		},
		{
			'nick':'smilea_thumb',
			'name':'微笑',
			'href':'./img/express/smilea_thumb.gif'
		},
		{
			'nick':'tootha_org',
			'name':'露牙',
			'href':'./img/express/tootha_org.gif'
		},
		{
			'nick':'xiaoku_org',
			'name':'笑哭',
			'href':'./img/express/xiaoku_org.gif'
		},
		{
			'nick':'zy_thumb',
			'name':'调皮',
			'href':'./img/express/zy_thumb.gif'
		}
	]; */
	var expdata = {
		'拜拜':'./img/express/88_org.gif',
		'鄙视':'./img/express/bs2_thumb.gif',
		'闭嘴':'./img/express/bz_thumb.gif',
		'刺激':'./img/express/cj_thumb.gif',
		'疯了':'./img/express/crazya_org.gif',
		'真棒':'./img/express/good_org.gif',
		'讨厌':'./img/express/hatea_org.gif',
		'抠鼻':'./img/express/kbsa_org.gif',
		'哭了':'./img/express/kl_thumb.gif',
		'大笑':'./img/express/laugh.gif',
		'爱情':'./img/express/lovea_org.gif',
		'悲剧':'./img/express/sada_thumb.gif',
		'害羞':'./img/express/shamea_thumb.gif',
		'微笑':'./img/express/smilea_thumb.gif',
		'露牙':'./img/express/tootha_org.gif',
		'笑哭':'./img/express/xiaoku_org.gif',
		'调皮':'./img/express/zy_thumb.gif'
	};

	var $exp_list = $('.exp_list'),
		html = "";

	for(var key in expdata){
		html += '<li title="'+key+'"><img src="'+expdata[key]+'" alt=""></li>';
	}
    /* for(var i=0; i<expdata.length; i++){
    	html += '<li title="'+expdata[i].name+'"><img src="'+expdata[i].href+'" alt=""></li>';
    } */

    $exp_list.find('ul').html(html);
   
    $exp_list.delegate("li", "click", function(e){
    	var title = '['+$(this).attr("title")+']';
    	$("#say").val($("#say").val()+title);

    	e.stopPropagation();
    });
    $("body").not('.express, .exp_list').on("click", function(e){
    	$exp_list.fadeOut();
    });

    $('.exp_list .close').click(function(){
    	$exp_list.fadeOut();
    })

    window.expdata = expdata;
})(jQuery);
