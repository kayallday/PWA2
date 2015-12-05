// JavaScript Document
$(function(){
	
	$('.dropmenu > li > a').hover(function() {
		$(this).addClass('waiting');
		setTimeout(function() {
			$('.dropmenu.waiting')
			.click()
			.removeClass('waiting');
		}, 600);
	}, function() {
		$('.dropmenu.waiting').removeClass('waiting');
	});
	
	
	
	
});