// Interactive background   
$(function() {
    $('#parallax-bg').iosParallax({
        movementFactor: 50,
	    dampenFactor: 24
    });
});

// Countdown	
// Date format Year/Month/Day
$('#countdown').countdown('2017/08/21', function(event) {
	 var $this = $(this).html(event.strftime(''
		+ '<div class="counter"><span>%D</span><p>Days</p></div>'
		+ '<div class="counter"><span>%H</span><p>Hours</p></div>'
		+ '<div class="counter"><span>%M</span><p>Minutes</p></div>'
		+ '<div class="counter"><span>%S</span><p>Seconds</p></div>'));
	});