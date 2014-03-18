$(document).ready(function(){

/* Vars */
var new_date = $('#count').attr('date');

var width = $(window).width();
var doc = $('body,img');
var c_items = $('#slider ul');
var items = $('#slider ul li').length;	
var index = 0;
var nex = $('#nex');
var prev = $('#prev');
/* End vars */

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