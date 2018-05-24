(function ($) {
	"use strict";
	$(window).on("load", function () {
		//Preloader
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	});

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function () {
		$(document).on('click', 'a.page-scroll', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	//Waypoints
	function onScrollInit(items, trigger) {
		items.each(function () {
			var osElement = $(this),
				osAnimationClass = osElement.attr('data-os-animation'),
				osAnimationDelay = osElement.attr('data-os-animation-delay');

			osElement.css({
				'-webkit-animation-delay': osAnimationDelay,
				'-moz-animation-delay': osAnimationDelay,
				'animation-delay': osAnimationDelay
			});

			var osTrigger = (trigger) ? trigger : osElement;

			osTrigger.waypoint(function () {
				osElement.addClass('animated').addClass(osAnimationClass);
			}, {
				triggerOnce: true,
				offset: '90%'
			});
		});
	}

	onScrollInit($('.os-animation'));
	onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));

	//Dropdown menu
	$(function () {
		$(".dropdown").hover(
			function () {
				$('.dropdown-menu', this).stop(true, true).delay(200).fadeIn(500);
				$(this).toggleClass('open');
				$('b', this).toggleClass("caret caret-up");
			},
			function () {
				$('.dropdown-menu', this).stop(true, true).delay(200).fadeOut(500);
				$(this).toggleClass('open');
				$('b', this).toggleClass("caret caret-up");
			});
	});
	
    //Back To Top
	$(function () {
		// Show or hide the sticky footer button
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.go-top').fadeIn(500);
			} else {
				$('.go-top').fadeOut(500);
			}
		});

		// Animate the scroll to top
		$('.go-top').click(function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		})
	});

})(jQuery);