$(document).ready(function() {
	$('.recent-4column').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: false,
				nav: true
			},
			767: {
				items: 2,
				dots: false,
				nav: false
			},
			920: {
				items: 2,
				dots: false,
				nav: false
			},
			979: {
				items: 2,
				dots: false,
				nav: false
			},
			1199: {
				items: 4,
				nav: true,
				dots: false,
				loop: false,
				margin: 30
			}
		}
	});

	$(document).ready(function(){
		$('.recent-3column').owlCarousel({
		  loop: true,                // Enable looping of items
		  margin: 30,                // Set margin between items
		  autoplay: true,           // Enable autoplay
		  autoplayTimeout: 3000,    // Delay between transitions (5 seconds)
		  smartSpeed: 1000,          // Speed of transition
		  responsiveClass: true,    // Enable responsive behavior
		  responsive: {
			0: {
			  items: 1,             // Number of items to display on screens less than 767px wide
			  dots: false,          // Disable dots on small screens
			  nav: true             // Enable navigation arrows on small screens
			},
			767: {
			  items: 2,             // Number of items to display on screens 767px to 919px wide
			  dots: false,          // Disable dots on medium screens
			  nav: false            // Disable navigation arrows on medium screens
			},
			920: {
			  items: 2,             // Number of items to display on screens 920px to 978px wide
			  dots: false,          // Disable dots on larger screens
			  nav: false            // Disable navigation arrows on larger screens
			},
			979: {
			  items: 2,             // Number of items to display on screens 979px to 1198px wide
			  dots: false,          // Disable dots on larger screens
			  nav: false            // Disable navigation arrows on larger screens
			},
			1199: {
			  items: 3,             // Number of items to display on screens 1199px and wider
			  nav: true,            // Enable navigation arrows on larger screens
			  dots: false,          // Disable dots on larger screens
			  loop: false,          // Disable looping on larger screens
			  margin: 30            // Set margin between items on larger screens
			}
		  }
		});
	  });
	  
	$('.recent-1column').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 11000,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: false,
				nav: false
			},
			767: {
				items: 1,
				dots: false,
				nav: false
			},
			920: {
				items: 1,
				dots: false,
				nav: false
			},
			979: {
				items: 1,
				dots: false,
				nav: false
			},
			1199: {
				items: 1,
				nav: true,
				dots: false,
				loop: false,
				margin: 0
			}
		}
	});
	$('.recent-full').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 11000,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			767: {
				items: 2,
				nav: false,
				dots: false,
			},
			920: {
				items: 2,
				nav: false,
				dots: false,
			},
			979: {
				items: 3,
				nav: false,
				dots: false,
			},
			1199: {
				items: 4,
				nav: false,
				dots: false,
				loop: false,
				margin: 0
			}
		}
	});
	$('.fullwidth-column').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 11000,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				dots: false,
			},
			767: {
				items: 2,
				nav: true,
				dots: false,
			},
			920: {
				items: 2,
				nav: true,
				dots: false,
			},
			979: {
				items: 3,
				nav: true,
				dots: false,
			},
			1199: {
				items: 3,
				nav: true,
				dots: false,
				loop: false,
				margin: 0
			}
		}
	});
	$('.clients').owlCarousel({
		margin: 30,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				dots: false,
				nav: false
			},
			767: {
				items: 3,
				dots: false,
				nav: false
			},
			920: {
				items: 4,
				dots: false,
				nav: false
			},
			979: {
				items: 4,
				dots: false,
				nav: false
			},
			1199: {
				items: 6,
				nav: true,
				dots: false,
				loop: false,
				margin: 30
			}
		}
	});
	$('.single-item').owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
		margin: 0,
		autoplay: true,
		autoplayTimeout: 12000,
		smartSpeed: 1000,
		responsiveClass: true,
		items: 1,
		nav: true,
		dots: false,
	});
	$('.single-product').owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
		margin: 0,
		autoplay: true,
		autoplayTimeout: 12000,
		smartSpeed: 1000,
		responsiveClass: true,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 2,
			},
			920: {
				items: 2,
			},
			979: {
				items: 2,
			},
			1199: {
				items: 1,
			}
		}
	});
	$('.single-dotted-nav').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 12000,
		smartSpeed: 1000,
		responsiveClass: true,
		items: 1,
		nav: false,
		dots: true,
	});
	$('.slideOutDown').owlCarousel({
		loop: true,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		margin: 0,
		autoplay: true,
		autoplayTimeout: 12000,
		smartSpeed: 1000,
		responsiveClass: true,
		items: 1,
		nav: true,
		dots: false,
	});
	$('.loop-center').owlCarousel({
		center: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 15000,
		smartSpeed: 1000,
		loop: true,
		margin: 10,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			767: {
				items: 3,
			},
			920: {
				items: 4,
			},
			979: {
				items: 4,
			},
			1199: {
				items: 4,

			}
		}
	});
	$('.product-4column').owlCarousel({
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				dots: false,
			},
			767: {
				items: 2,
				nav: true,
				dots: false,
			},
			920: {
				items: 2,
				nav: true,
				dots: false,
			},
			979: {
				items: 2,
				nav: true,
				dots: false,
			},
			1199: {
				items: 4,
				nav: true,
				dots: false,
				loop: false,
				margin: 20
			}
		}
	});
	$('.article-2column').owlCarousel({
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				dots: false,
			},
			767: {
				items: 1,
				nav: true,
				dots: false,
			},
			920: {
				items: 1,
				nav: true,
				dots: false,
			},
			979: {
				items: 2,
				nav: true,
				dots: false,
			},
			1199: {
				items: 2,
				nav: true,
				dots: false,
				loop: false,
				margin: 20
			}
		}
	});
})