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

	/* On resize functions and variables */
	$(window).resize(function(){
		body_resize();
		resize_li();
	});

	resize_li();
	body_resize();

});