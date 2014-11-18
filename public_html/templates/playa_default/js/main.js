jQuery(function($) {

  $('#special-countdown').countdown('2015/01/01', function(event) {
    var $this = $(this).html(event.strftime('<div><span>%d</span> days</div><span class="seperator">:</span>' + '<div><span>%H</span> hours</div><span class="seperator">:</span>' + '<div><span>%M</span> minutes</div><span class="seperator">:</span>'  + '<div><span>%S</span> seconds</div>'));
  });

  
   var activeHover = 0;
  
  $('a.resorts-nav-toggle').hover(function(e) {
  

    e.preventDefault();
	if (activeHover == 0) {
		activeHover = 1;
		$('#resorts-nav').slideToggle();

	};
  });
  

 	$('#resorts-nav').mouseleave(function(e) {
		if (activeHover == 1) {
			$('#resorts-nav').slideToggle();
			activeHover = 0;
			}
	});


});
