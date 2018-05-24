(function ($) {

	//Slideshow Normal
	$('.slideshow-normal').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		smartSpeed: 1000,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 5000
	});

	//Slideshow Fade
	$('.slideshow-fade').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 1000,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 5000
	});

	//Slideshow Bounce
	$('.slideshow-bounce').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		animateOut: 'bounceOutUp',
		animateIn: 'bounceInUp',
		smartSpeed: 1000,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 5000
	});

	//Slideshow Slide
	$('.slideshow-slide').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp',
		smartSpeed: 1000,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 5000
	});

	//Tooltip Share
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

})(jQuery);