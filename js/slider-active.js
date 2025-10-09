(function ($) {
	"use strict";


	// ////text-slider
	let tp_text_slide = new Swiper(".tp-text-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	let hr_brand_slide = new Swiper(".hr-brand-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 100,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 2000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

    ///testimonial-slider
	let tp_testimonial = new Swiper('.tp-testimonial-active', {
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
		loopedSlides: 4,
        speed: 500,
        navigation: {
            prevEl: '.tp-testimonial-prev',
            nextEl: '.tp-testimonial-next',
        },
        keyboard: {
            enabled: true,
        },
		pagination: {
			el: ".tp-dot",
			clickable: true,
		}
    });

    ///testimonial-slider
	let tp_testimonial_2 = new Swiper('.bnc-testimonial-active', {
		spaceBetween: 10,
		slidesPerView: 3,
		loop: true,
		speed: 500,
		centeredSlides: true,
		pagination: {
			el: ".bnc-testimonial-dot",
			clickable: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 3,
			},
			'1200':{
				slidesPerView:3,
			},
			'768':{
				slidesPerView:2,
			},
			'576': {
				slidesPerView:1,
			},
			'0': {
				slidesPerView:1,
			},
		},
    });


    ///portfolio-slider
	let tp_portfolio = new Swiper('.tp-portfolio-active', {
        loop: true,
        spaceBetween: 24,
		slidesPerView: 4,
		loopedSlides: 1,
        speed: 500,
        navigation: {
            prevEl: '.tp-portfolio-prev',
            nextEl: '.tp-portfolio-next',
        },
        keyboard: {
            enabled: true,
        },
		pagination: {
			el: ".tp-dot",
			clickable: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 3.5,
			},
			'1200':{
				slidesPerView:3,
			},
			'768':{
				slidesPerView:2,
			},
			'576': {
				slidesPerView:1,
			},
			'0': {
				slidesPerView:1,
			},
		},
    });

    ///testimonial-slider
	let dgm_portfolio = new Swiper('.dgm-portfolio-active', {
        spaceBetween: 30,
		slidesPerView: 4,
        loop: true,
        speed: 500,
        navigation: {
            prevEl: '.dgm-portfolio-prev',
            nextEl: '.dgm-portfolio-next',
        },
        keyboard: {
            enabled: true,
        },
		breakpoints: {
			'1400':{
				slidesPerView:4,
			},
			'1200':{
				slidesPerView:3,
			},
			'768':{
				slidesPerView:2,
			},
			'576': {
				slidesPerView:1,
			},
			'0': {
				slidesPerView:1,
			},
		}
    });

    ///testimonial-slider
	let dgm_service = new Swiper('.dgm-service-active', {
        spaceBetween: 30,
		slidesPerView: 4,
        loop: true,
        speed: 500,
        keyboard: {
            enabled: true,
        },
		breakpoints: {
			'1400':{
				slidesPerView:4,
			},
			'1200':{
				slidesPerView:3,
			},
			'992':{
				slidesPerView:2.8,
			},
			'768':{
				slidesPerView:2,
			},
			'576': {
				slidesPerView:1,
			},
			'0': {
				slidesPerView:1,
			},
		}
    });
	
	/// Testimonial two
	let tp_testimonial_two = new Swiper('.tp-testimonial-2-active', {
        loop: true,
        spaceBetween: 40,
        centeredSlides: true,
		loopedSlides: 4,
        speed: 500,
        navigation: {
            prevEl: '.tp-testimonial-prev',
            nextEl: '.tp-testimonial-next',
        },
		pagination: {
			el: '#paginations',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				let zero = total > 9 ? '' : '';
				let index = zero + current
				let all = zero + total
				let html = `<div class="testimonial-progress-bar">
								<span>${index}</span>
								<span>/${all}</span>
							</div>`;
				return html;
			}
		}
    });


	///testimonial-slider
	let tp_testimonial_three = new Swiper('.cr-testimonial-active', {
        spaceBetween: 30,
		slidesPerView: 1,
        loop: true,
        speed: 500,
        keyboard: {
            enabled: true,
        },
		pagination: {
			el: ".cr-testimonial-dot",
			clickable: true,
		}
    });

	///team-slider
	let hr_team_active = new Swiper('.hr-team-active', {
        spaceBetween: 30,
		slidesPerView: 3,
        loop: true,
        speed: 500,
        keyboard: {
            enabled: true,
        },
		navigation: {
            prevEl: '.hr-team-prev',
            nextEl: '.hr-team-next',
        },
		breakpoints: {
			'1400':{
				slidesPerView: 3,
			},
			'1200':{
				slidesPerView: 3,
			},
			'992':{
				slidesPerView: 3,
			},
			'768':{
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1.5,
			},
			'0': {
				slidesPerView: 1,
			},
		}
    });

	///testimonial-slider
	let lw_service_active = new Swiper('.lw-service-active', {
        spaceBetween: 30,
		slidesPerView: 3,
        loop: true,
        speed: 500,
        keyboard: {
            enabled: true,
        },
		navigation: {
            prevEl: '.lw-service-prev',
            nextEl: '.lw-service-next',
        },
		breakpoints: {
			'1400':{
				slidesPerView: 3,
			},
			'1200':{
				slidesPerView: 3,
			},
			'768':{
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}
    });

	///testimonial-slider
	let instagram_active = new Swiper('.cr-instagram-active', {
        spaceBetween: 0,
		slidesPerView: 5,
        loop: true,
        speed: 500,
        keyboard: {
            enabled: true,
        },
		breakpoints: {
			'1400':{
				slidesPerView:6,
			},
			'1200':{
				slidesPerView:5,
			},
			'768':{
				slidesPerView:3,
			},
			'576': {
				slidesPerView:2.5,
			},
			'0': {
				slidesPerView:1,
			},
		}
    });

	//// Brand slider
	let tp_brand_slide = new Swiper(".tp-brand-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 6,
		spaceBetween: 10,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 7000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView:6,
			},
			'1200':{
				slidesPerView:5,
			},
			'768':{
				slidesPerView:3.8,
			},
			'576': {
				slidesPerView:2.5,
			},
			'0': {
				slidesPerView:2,
			},
		}
	});

	//// Brand slider
	let lw_service_slide = new Swiper(".lw-service-2-active", {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 200,
		autoplay: true,
		pagination: {
			el: ".lw-service-dot",
			clickable: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 4,
			},
			'1200':{
				slidesPerView: 3.5,
			},
			'992':{
				slidesPerView: 2.8,
			},
			'768':{
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}
	});

	//// testimonial slider
	let lw_testimonial_slide = new Swiper(".lw-testimonial-active", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 200,
		autoplay: true,
		pagination: {
			el: ".lw-service-dot",
			clickable: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 3,
			},
			'1200':{
				slidesPerView: 3,
			},
			'992':{
				slidesPerView: 2,
			},
			'768':{
				slidesPerView: 1.6,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}
	});

	//// Brand slider
	let dgm_brand_slide = new Swiper(".dgm-brand-active", {
		loop: true,
		freemode: true,
		slidesPerView: 6,
		spaceBetween: 10,
		allowTouchMove: true,
		speed: 2000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView:6,
			},
			'1200':{
				slidesPerView:5,
			},
			'768':{
				slidesPerView:3.8,
			},
			'576': {
				slidesPerView:2.5,
			},
			'0': {
				slidesPerView:2,
			},
		}
	});

	//// Brand slider
	let dgm_brand_slide_2 = new Swiper(".dgm-brand-active-2", {
		loop: true,
		freemode: true,
		slidesPerView: 6,
		spaceBetween: 0,
		allowTouchMove: true,
		speed: 2000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 6,
			},
			'1200':{
				slidesPerView: 5,
			},
			'768':{
				slidesPerView: 3.8,
			},
			'576': {
				slidesPerView: 2.5,
			},
			'0': {
				slidesPerView: 2,
			},
		}
	});

	//// Service slider
	let cr_service_active = new Swiper(".cr-service-active", {
		loop: true,
		freemode: true,
		slidesPerView: 3,
		spaceBetween: 30,
		allowTouchMove: true,
		speed: 1500,
		autoplay:false,
		navigation: {
            prevEl: '.cr-service-prv',
            nextEl: '.cr-service-next',
        },
		breakpoints: {
			'1400':{
				slidesPerView:3,
			},
			'1200':{
				slidesPerView:2.8,
			},
			'768':{
				slidesPerView:2,
			},
			'576': {
				slidesPerView:1,
			},
			'0': {
				slidesPerView:1,
			},
		}
	});
	
	////Text slider 2
	let tp_text_slide_two = new Swiper(".tp-text-2-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 12000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

    ///Service slider
	let sa_service_slide = new Swiper('.sa-service-slider-active', {
        spaceBetween: 30,
		slidesPerView: 4,
        loop: true,
        speed: 500,
		pagination: {
			el: ".sa-service-dot",
			clickable: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 4,
			},
			'1200':{
				slidesPerView: 3,
			},
			'768':{
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}
    });

    ///testimonial slider
	let sa_testimonial_slide = new Swiper('.sa-testimonial-slider-active', {
        spaceBetween: 30,
		slidesPerView: 3,
        loop: true,
        speed: 500,
		centeredSlides: true,
		pagination: {
			el: ".sa-testimonial-dot",
			clickable: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 3,
			},
			'1200':{
				slidesPerView: 3,
			},
			'768':{
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}
    });


	///text-slider
	let tp_text_slide_three = new Swiper(".dgm-portfolio-text-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 9000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});


	///thumb-slider
	let ca_thumb_slide = new Swiper(".ca-about-thumb-active", {
		loop: true,
		freemode: true,
		slidesPerView: 5,
		spaceBetween: 24,
		centeredSlides: true,
		allowTouchMove: true,
		breakpoints: {
			'1400':{
				slidesPerView: 5,
			},
			'1200':{
				slidesPerView: 4,
			},
			'768':{
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2.5,
			},
			'0': {
				slidesPerView: 1,
			},
		}
	});


	///ca-project-active
	let ca_project_active = new Swiper('.ca-project-active', {
        spaceBetween: 30,
		slidesPerView: 3,
        loop: true,
        speed: 500,
        keyboard: {
            enabled: true,
        },
		navigation: {
            prevEl: '.ca-project-prev',
            nextEl: '.ca-project-next',
        },
		breakpoints: {
			'1400':{
				slidesPerView: 3,
			},
			'1200':{
				slidesPerView: 3,
			},
			'768':{
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}
    });

	///ca-testimoni-slide
	var swiper = new Swiper(".ca-testimoni-slide", {
		loop: true,
		freemode: true,
		slidesPerView: 3.5,
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 5000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400':{
				slidesPerView: 3.5,
			},
			'1200':{
				slidesPerView: 3,
			},
			'768':{
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}
	});

	///tp-project-showcase-slide-active
	let t7_showcase_slide_active = new Swiper(".tp-project-showcase-slide-active", {
        spaceBetween: 80,
        slidesPerView: 1,
        loop: true,
		spaceBetween: 24,
        allowTouchMove: true,
		mousewheel: true,
		speed: 600,
		navigation: {
			nextEl: '.tp-project-showcase-next',
			prevEl: '.tp-project-showcase-prev',
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	///postbox-slider
	var postbox_active = new Swiper('.postbox-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			}
		},
		a11y: false,

		// Navigation arrows
		navigation: {
			prevEl: '.postbox-arrow-prev',
			nextEl: '.postbox-arrow-next',
		},

	});

	////brand-slider
	var tp_brand = new Swiper(".tp-brand-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 12000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	// tp-3d-slide-wrapper
	if ($("#tp-3d-slide-wrapper").length > 0) {
		var Slider = (function () {
			var initSlider = function () {
				var dir = $("html").attr("dir");
				var swipeHandler = new Hammer(document.getElementById("tp-3d-slide-wrapper"));
				swipeHandler.on('swipeleft', function (e) {
					if (dir == "rtl")
						$(".tp-3d-slide-arrow-left").trigger("click");
					else
						$(".tp-3d-slide-arrow-right").trigger("click");
				});

				swipeHandler.on('swiperight', function (e) {
					if (dir == "rtl")
						$(".tp-3d-slide-arrow-right").trigger("click");
					else
						$(".arrow-left").trigger("click");
				});

				$(".tp-3d-slide-arrow-right , .tp-3d-slide-arrow-left").click(function (event) {
					var nextActiveSlide = $(".tp-3d-slide.active").next();

					if ($(this).hasClass("tp-3d-slide-arrow-left"))
						nextActiveSlide = $(".tp-3d-slide.active").prev();

					if (nextActiveSlide.length > 0) {
						var nextActiveIndex = nextActiveSlide.index();
						$(".dots span").removeClass("active");
						$($(".dots").children()[nextActiveIndex]).addClass("active");

						updateSlides(nextActiveSlide);
					}
				});

				$(".dots span").click(function (event) {
					var slideIndex = $(this).index();
					var nextActiveSlide = $($(".slider").children()[slideIndex]);
					$(".dots span").removeClass("active");
					$(this).addClass("active");

					updateSlides(nextActiveSlide);
				});

				var updateSlides = function (nextActiveSlide) {
					var nextActiveSlideIndex = $(nextActiveSlide).index();

					$(".tp-3d-slide").removeClass("prev-1");
					$(".tp-3d-slide").removeClass("next-1");
					$(".tp-3d-slide").removeClass("active");

					nextActiveSlide.addClass("active");

					nextActiveSlide.prev().addClass("prev-1");
					nextActiveSlide.addClass("active");
					nextActiveSlide.next().addClass("next-1");
				}

				var updateToNextSlide = function (nextActiveSlide) {

				}
			}
			return {
				init: function () {
					initSlider();
				}
			}
		})();

		Slider.init();

	}

	// tp-pp-slider-active
	// let verticalslider1;
	// function toggleVerticalSwiper() {
	// 	if (window.innerWidth >= 1199) {
	// 		if (!verticalslider1) {
	// 			verticalslider1 = new Swiper('.tp-pp-slider-active', {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				loop: false,
	// 				mousewheel: true,
	// 				speed: 800,
	// 				pagination: {
	// 					el: ".pp-slider-pagination",
	// 					clickable: true,
	// 					type: 'progressbar',
	// 				},
	// 				on: {
	// 					init: function () {
	// 						let swiper = this;
	// 						let fraction = document.querySelector('.swiper-pagination-fraction');
	// 						if (fraction) {
	// 							let totalSlides = swiper.slides.length - swiper.loopedSlides * 2; 
	// 							fraction.innerHTML = `<span class="current">${swiper.realIndex + 1}</span><span class="total">${totalSlides}</span>`;
	// 						}
	// 					},
	// 					slideChange: function () {
	// 						let swiper = this;
	// 						let fraction = document.querySelector('.swiper-pagination-fraction');
	// 						if (fraction) {
	// 							let current = fraction.querySelector('.current');
	// 							if (current) {
	// 								current.textContent = swiper.realIndex + 1;
	// 							}
	// 						}
	// 					}
	// 				}
	// 			});
	// 		}
	// 	} else {
	// 		if (verticalslider1) {
	// 			verticalslider1.destroy(true, true);
	// 			verticalslider1 = undefined;
	// 		}
	// 	}
	// }
	// toggleVerticalSwiper();
	// window.addEventListener("resize", toggleVerticalSwiper);


	let verticalslider1;
	function toggleVerticalSwiper() {
		if (window.innerWidth >= 1199) {
			if (!verticalslider1) {
				verticalslider1 = new Swiper('.tp-pp-slider-active', {
					slidesPerView: 1,
					spaceBetween: 0,
					loop: false,
					mousewheel: true,
					speed: 800,
					pagination: {
						el: ".pp-slider-pagination",
						clickable: true,
						type: 'progressbar',
					},
					on: {
						init: function () {
							let swiper = this;
							let fraction = document.querySelector('.swiper-pagination-fraction');
							if (fraction) {
								let totalSlides = swiper.params.loop
									? swiper.slides.length - swiper.loopedSlides * 2
									: swiper.slides.length;

								fraction.innerHTML = `
									<span class="current">${String(swiper.realIndex + 1).padStart(2, '0')}</span>
									<span class="total">${String(totalSlides).padStart(2, '0')}</span>
								`;
							}
						},
						slideChange: function () {
							let swiper = this;
							let fraction = document.querySelector('.swiper-pagination-fraction');
							if (fraction) {
								let current = fraction.querySelector('.current');
								if (current) {
									current.textContent = String(swiper.realIndex + 1).padStart(2, '0');
								}
							}
						}

					}
				});
			}
		} else {
			if (verticalslider1) {
				verticalslider1.destroy(true, true);
				verticalslider1 = undefined;
			}
		}
	}
	toggleVerticalSwiper();
	window.addEventListener("resize", toggleVerticalSwiper);


	if ($(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: 'fade',

			// If we need pagination
			pagination: {
				el: ".main-slider-dot, .main-slider-dot-8",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + '<button>'+ '0' +(  index + 1)+'</button>' + "</span>";
				},
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next, .slider-button-8-next",
				prevEl: ".slider-button-prev, .slider-button-8-prev",
			},

			a11y: false,
		});
	}


	var slider = new Swiper('.product__category-slider-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".product-slider-dot",
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + '<button>'+(index + 1)+'</button>' + "</span>";
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: ".product-button-next",
			prevEl: ".product-button-prev",
		},

		scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
		},

		breakpoints: {
			'1601': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
	});
	

})(jQuery);