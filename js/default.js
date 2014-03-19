$(document).ready(function(){

/* Vars */
var width = $(window).width();
var doc = $('body,img');
/* End vars */

	/* Popup */
	var tags = $('div,#overlay');
	tags.click(function(){
		if($(this).attr('data')){
			popup_ini( $(this).attr('data') );
		}else{
			return;
		}
	});

	function popup_ini(data){

		/* if data type img or divs anway if sentence and function exist add popup */
		if ($('img[data="'+ data +'"]').attr('src')) {
			add_pop_img(data);
		}
		/* End if type */

		function add_pop_img(data){
			$('body').append('<section id="popup"><div><img src="'+$('img[data="'+ data +'"]').attr('src')+'"/></div></section>');

			var popup = $('#popup > div');
			popup.css({
				"margin-top": -popup.height()/2,
				"margin-left" : -popup.width()/2
			});

			$('#popup').hide();
			$('#popup').slideDown(1000,"easeInOutBack",function(){
				popup = $('#popup > div');
				popup.animate({
					"margin-top": -popup.height()/2,
					"margin-left" : -popup.width()/2
				});
			});

			$(window).resize(function(){
				popup = $('#popup > div');
				popup.css({
					"margin-top": -popup.height()/2,
					"margin-left" : -popup.width()/2
				});
			});			
		}

		/* Close popup */
		/* $('#popup article').on('click','#close',function(){ */

	}
	/* End popup */

	/* Galery */
	var shuffle_g = 'off'
	var selector = $('#selector');
	var base = $('#base');
	var select = $('#base div')

	$(function(){

		selector.hide();

		select.click(function(){
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

		base.mouseover(function(){
			selector.slideDown();
			shuffle_g = 'on';
		});

		selector.mouseleave(function(){
			//selector.stop().slideUp(1000,"easeInOutBack");
			selector.stop().slideUp();
			shuffle_g = 'off'
		});
	});
	/* End galery */

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
	
	/* Body load */
	doc.fadeOut();
	doc.load(function(){
		doc.fadeIn('slow');
	});
	/* End body load */

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
				overflow : "hidden"
			});
			width = $(window).width();
			$('#slider ul li').css({
				width : width +'px'
			});
			$('body').css({
				"overflow-y": "auto"
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