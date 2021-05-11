(function ($) {

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

	//Counter
	$('.counter').counterUp({
		delay: 20,
		time: 2000
	});

	//Screenshots
	$('.screens').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 10,
		responsive: {
			768: {
				items: 3
			}
		}
	});

	//Our Team
	$('.our-team').owlCarousel({
		stagePadding: 10,
		margin: 30,
		nav: false,
		dots: true,
		//loop: true,
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
				items: 3
			},
			1199: {
				items: 4
			}
		}
	})

	//Testimonials
	$('.reviews').owlCarousel({
		nav: false,
		dots: true,
		loop: true,
		items: 1,
		smartSpeed: 1000,
		fluidSpeed: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	//Contact
	$('input').blur(function () {
		if ($(this).val()) $(this).addClass('used');
		else $(this).removeClass('used');
	});

})(jQuery);