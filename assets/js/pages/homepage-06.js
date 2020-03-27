(function ($) {

	//Hero Slider
	$('#hero-slider').owlCarousel({
		nav: false,
		dots: false,
		items: 1,
		loop: true,
		autoWidth: true,
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 4000
	});

	//Typed
	$(".typed").typed({
		strings: ["with an amazing design", "easy to customize"],
		typeSpeed: 100,
		backDelay: 900,
		loop: true
	});

	//Screenshots
	$('.screens').owlCarousel({
		stagePadding: 10,
		margin: 30,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 2
			},
			979: {
				items: 4
			}
		}
	});

	//Popup video
	$('#play-video').click(function (e) {
		e.preventDefault();

		var video_link = $(this).data('video');
		video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

		$('.work-video').append(video_link).fadeIn(200);
	});

	$('.close-video').click(function (e) {
		e.preventDefault();

		$('.work-video').fadeOut(200, function () {
			$('iframe', this).remove();
		});

	});

})(jQuery);