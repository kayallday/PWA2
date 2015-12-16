// JavaScript Document


/*  --------- Navigation Bar --------- */
$(function(){
	
	$("li a").mouseenter(function(){
var whichone = $(this).attr('id');
		$('ul' + '.' + whichone).show();
$('li ul').not($('ul' + '.' + whichone)).hide();
	});
$("li a").mouseleave(function(){
var whichone = $(this).attr('id');
		$('ul' + '.' + whichone).hide();
});	




/* --------- Accordion --------- */

$('#acc p').hide().eq(0).show();


$('#acc-Nav li').click(function(e) {
	e.preventDefault();
	$('#acc p').hide();
	
		$('#acc-Nav .current').removeClass("current");
			$(this).addClass('current');
				var clicker = $(this).find('a:first').attr('href');
				
					$('#acc ' + clicker).fadeIn('fast');
}).eq(0).addClass('current');


/* --------- Modal --------- */

$('.modalClick').on('click', function(e){ /* e is short for event */
	e.preventDefault();
	$('#overlay')
	.fadeIn() /* adding methods */
	.find('#modal')
	.fadeIn();
	console.log("open"); /* checks */
});

$('.close').on('click', function(e){
	e.preventDefault();
	$('#overlay')
	.fadeOut()
	.find('#modal')
	.fadeOut();
	console.log("close"); /* checks */
});


/* --------- Tooltip --------- */

$('.masterTooltip').hover(function(){
	//hover over
	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn('slow');
}, function() {
	//hover out
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip').remove();
}).mousemove(function(e) {
	var mousex = e.pageX + 20; //x coordinates
	var mousey = e.pageY + 20; //y coordinates
	$('.tooltip')
	.css({ top: mousey, left: mousex });
	
});












});