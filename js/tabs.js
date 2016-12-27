$(document).ready(function() {
	$('.bookmark-link').on('click', function() {
		var bookmarkText = $(this).attr('rel');
		$('#bookmark-container li.active').removeClass('active');
		$(this).addClass('active');
		
		$('#text-container li.active').hide(0, function() {
			$(this).removeClass('active');
			$(bookmarkText).show(0, function() {
				$(this).addClass('active');
			})
		});
	});

	$('#main-menu-xs').on('click', function() {
    	$('#main-menu-xs ul').fadeToggle(100);
    })
});