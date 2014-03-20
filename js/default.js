$(document).ready(function(){
/* Vars */
var width = $(window).width();
var doc = $(window);
/* End vars */

/* Body load */
$('body').hide()
doc.load(function(){
	$('body').fadeIn('slow');
});
/* End body load */
	
	/* toggle */
	var shuffle_t = 'off';
	$('#toggle').hide();
	$('#more').click(function(){
		if( shuffle_t ==='off'){
			$('#toggle').slideDown(1000,"easeInOutBack");
			shuffle_t = 'on';
		}else{
			$('#toggle').slideUp('slow',"easeInOutBack");
			shuffle_t = 'off';
		}
	})
	/* toggle */

	/* Popup */
	var p_active = 'off';

	var tags = $('div,#overlay');
	$('#popup').hide()
	$('#popup > div #comments').hide();

	tags.click(function(){
		if($(this).attr('data')){

			img_ini( $(this).attr('data') );

		}
		if( $(this).attr('vid') ){
			vid_ini( $(this).attr('vid') )
		}
		else{
			return;
		}
		$(document).on('click','#close',function(){
			popup_rem();
		});
	});


	function img_ini(data){
		p_active = 'on';

		/* if data type img or divs anway if sentence and function exist add popup */
		if (data) {
			add_pop_img(data);
		}
		/* End if type */

		function add_pop_img(data){
			$('#popup > div').prepend('<div id="close"></div><img src="'+$('img[data="'+ data +'"]').attr('src')+'"/>').load(
			/* On load image append function incrusted not call function not working */
			$(function(){
				/* Preformated css */
				$('#popup').css({
					opacity:0
				});
				$('#popup').show(1,function(){
				var popup = $('#popup > div');
				if( popup.height() > $(window).height() ){
					popup.css({
						"top" :0+'px',
						"margin-top": 0,
						"margin-left" : -popup.width()/2
					});
				}else{
					popup.css({
						"top":50+'%',
						"margin-top": -popup.height()/2,
						"margin-left" : -popup.width()/2
					});
				}
				/* Preformated css */
				$('#popup').hide(1,function(){
					$('#popup').css({
						opacity : 1
					});
					$('#popup > div #comments[data="'+data+'"]').show();
				});
				$('#popup').slideDown(1000,"easeInOutBack",function(){
					if( popup.height() > $(window).height() ){
						popup.animate({
							"top" :0+'px',
							"margin-top": 0,
							"margin-left" : -popup.width()/2
						});
						$('#popup').css({
							"overflow-y" : "auto"
						});
					}else{
						popup.animate({
							"top":50+'%',
							"margin-top": -popup.height()/2,
							"margin-left" : -popup.width()/2
						});
					}
				});

				$(window).resize(function(){
					if( p_active === 'on' ){
						$('body').css({
						"overflow" : "hidden",
						"overflow-x" : "hidden"
						});
					}
					popup = $('#popup > div');
					if( popup.height() > $(window).height() ){
						popup.css({
							"top" :0+'px',
							"margin-top": 0,
							"margin-left" : -popup.width()/2
						});
						$('#popup').css({
							"overflow-y" : "auto",
							"overflow-x" : "hidden"
						});
					}else{
						popup.css({
							"top":50+'%',
							"margin-top": -popup.height()/2,
							"margin-left" : -popup.width()/2
						});
					}
				});
				});
			}));
			/* End on load image append */
					
		}
	}

	function vid_ini(data){
		p_active = 'on';

		/* if data type img or divs anway if sentence and function exist add popup */
		if (data) {
			add_pop_vid(data);
		}
		
		function add_pop_vid(data){
			$('#popup > div').prepend('<div id="close"></div><img src="" />').load(
			/* On load vid append function incrusted not call function not working */
			$(function(){
				/* Preformated css */
				$('#popup').css({
					opacity:0
				});
				$('#popup').show(1,function(){
				var popup = $('#popup > div');
				if( popup.height() > $(window).height() ){
					popup.css({
						"top" :0+'px',
						"margin-top": 0,
						"margin-left" : -popup.width()/2
					});
				}else{
					popup.css({
						"top":50+'%',
						"margin-top": -popup.height()/2,
						"margin-left" : -popup.width()/2
					});
				}
				/* Preformated css */
				$('#popup').hide(1,function(){
					$('#popup').css({
						opacity : 1
					});
					$('#popup > div #comments[data="'+data+'"]').show();
				});
				$('#popup').slideDown(1000,"easeInOutBack",function(){
					if( popup.height() > $(window).height() ){
						popup.animate({
							"top" :0+'px',
							"margin-top": 0,
							"margin-left" : -popup.width()/2
						});
						$('#popup').css({
							"overflow-y" : "auto"
						});
					}else{
						popup.animate({
							"top":50+'%',
							"margin-top": -popup.height()/2,
							"margin-left" : -popup.width()/2
						});
					}
				});

				$(window).resize(function(){
					if( p_active === 'on' ){
						$('body').css({
						"overflow" : "hidden",
						"overflow-x" : "hidden"
						});
					}
					popup = $('#popup > div');
					if( popup.height() > $(window).height() ){
						popup.css({
							"top" :0+'px',
							"margin-top": 0,
							"margin-left" : -popup.width()/2
						});
						$('#popup').css({
							"overflow-y" : "auto",
							"overflow-x" : "hidden"
						});
					}else{
						popup.css({
							"top":50+'%',
							"margin-top": -popup.height()/2,
							"margin-left" : -popup.width()/2
						});
					}
				});
				});
			}));
			/* End on load vid append */
		}
	}

	/* Close popup */
	function popup_rem(data){
		p_active = 'off';

		$('#popup').slideUp(1000,"easeInOutBack",function(){
			$('#popup').hide(function(){
				$('#popup > div #close,#popup > div img').remove();
				$('#popup > div #comments').hide();
			});
			$('body').css({
				"overflow-y" : "auto",
				"overflow-x" : "hidden"
			});
		});
	}

	/* End popup */

	/* Galery selector */
	var shuffle_g = 'off'
	var selector = $('#selector');
	var base = $('#base');
	var select = $('#base div')

	$(function(){

		selector.hide();

		select,base.click(function(){
			if( shuffle_g === 'on'){
				selector.slideUp();
				shuffle_g = 'off';
				return;
			}else{
				selector.slideDown();
				shuffle_g = 'on';
				return;
			}
		});
	});
	/* End galery selector*/

	/* Menu */
	var m_items = $('#menu nav ul li > a').text().length * 10 + 100;
	var nav = $('#menu nav ul');
	var icon = $('#r-icon');
	var mobile = $('#mobile');
	var top = $('#top').width();
	var content = $('body');
	var shuffle = "off";

	$('#menu').css({
		"max-width" : top+'px'
	});

	function m_r(){

		if( m_items > $(window).width() - 95 ){
			nav.fadeOut('fast');	
			nav.slideUp(1000,"easeInOutBack");
			icon.slideDown(1000,"easeInOutBack");
		}else{
			icon.slideUp(800,"easeInOutBack");
			nav.slideDown(800,"easeInOutBack");
		}

	}

	icon.click(function(){
		_m();
	});

	function _m(){

		if(shuffle === 'off'){

			mobile.animate({
				right : 0+'px'
			},1000,'easeInOutExpo');
			content.animate({
				right : mobile.width()+'px'
			},1000,'easeInOutExpo');
			shuffle = 'on';
		}else{
			mobile.animate({
				right : -mobile.width()+'px'
			},1000,'easeInOutExpo');
			content.animate({
				right : 0+'px'
			},1000,'easeInOutExpo');
			shuffle = 'off';
		}
	}
	/* End menu */

	/* Counter */
	var new_date = $('#count').attr('date');
	
    $('#counter').countdown(new_date, function(event) {
    $(this).html(event.strftime(
        '<div><div id="days">%D</div><div>dias</div></div>'
       + '<div><div id="hours">%H</div><div>horas</div></div>'
       + '<div><div id="minuts">%M</div><div>minutos</div></div>'
       + '<div><div id="seconds">%S</div><div>segundos</div></div>'
       ));
  	});
	/* End counter */

	/* Background heigth */
	function body_resize(){
		var height = $(window).height();
		$('html,body,#content-res').css({
			"min-height" : height+'px'
		});
	}
	/* End background height */

	/* Slider */
	var c_items = $('#slider ul');
	var items = $('#slider ul li').length;	
	var index = 0;
	var nex = $('#nex');
	var prev = $('#prev');

	nex.click(function(){
		index++;
		if(items == index){ index = 0; }

		c_items.animate({
			right : width*index+'px'
		},1000,'easeInOutCirc');

	});

	prev.click(function(){
		index--;
		if(index == -1){ index = items-1; }
		c_items.animate({
			right : width*index+'px'
		},1000,'easeInOutCirc');
	});

	function resize_li(){
			$('body').css({
				"overflow" : "hidden",
				"overflow-x" : "hidden"
			});
			width = $(window).width();
			$('#slider ul li').css({
				width : width +'px'
			});
			$('body').css({
				"overflow-y": "auto",
				"overflow-x" : "hidden"
			});
	}
	/* End Slider */

	resize_li();
	body_resize();
	m_r();

	/* On resize functions and variables */
	$(window).resize(function(){
		body_resize();
		resize_li();
		m_r();
		/* Mobile */
		if(shuffle === 'on'){
			mobile.animate({
				right : -mobile.width()+'px'
			},1000,'easeInOutExpo');
			content.animate({
				right : 0+'px'
			},1000,'easeInOutExpo');
			shuffle = 'off';
		}
		/* End mobile */
	});

});