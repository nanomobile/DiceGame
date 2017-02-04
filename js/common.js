$(document).ready(function() {

	$('.toggle-bg input').click(function(){
		if($('input#checked-on:checked')){
			$('.free-money').toggleClass('free-money__enable');
			$('.real-money').toggleClass('free-money__disabled');
		}
	});

	$('.open-menu').click(function(){
		$('.mobile-menu').toggleClass('open-mobile-menu');
		$('.mobile-menu-overlay').toggleClass('open-menu-overlay');
	});

	$('.mobile-menu-overlay, .closed-mnu').click(function(){
		$('.mobile-menu').removeClass('open-mobile-menu');
		$('.mobile-menu-overlay').removeClass('open-menu-overlay');
	});

	$(".cat-menu").click(function(){
		$(this).next().slideToggle();
	});

});