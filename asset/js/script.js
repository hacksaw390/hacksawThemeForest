//$(document).ready(function(){
//    
//	$('#search').click(function(){
//		$('.menu_item').toggleClass('hide_item')
//		$('.search_form').toggleClass('search_active')
//		
//	});
//
//	$('.top_slider').owlCarousel({
//	    loop:true,
//	    margin:10,
//	    nav:true,
//	    responsive:{
//	        0:{
//	            items:1
//	        },
//	        600:{
//	            items:1
//	        },
//	        1000:{
//	            items:1
//	        }
//	    }
//	})
//
//	$('.counter').counterUp({
//	    delay: 10,
//	    time: 5000
//	});
//
//
//
//
//
//
//
//});



$(document).ready(function(){
		AOS.init();
// scroll auto counter......................................................
	$('.counter').counterUp({
	    delay: 100,
	    time: 5000
	});
// about counter..............................................
	$('.about_counter').counterUp({
	    delay: 10,
	    time: 5000
	});


	$('#search').click(function(){
		$('.menu_item').toggleClass('hide_item')
		$('.search_form').toggleClass('search_active')
		
	});

	$('.top_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	$('.counter').counterUp({
	    delay: 10,
	    time: 5000
	});









	// $('.test-popup-link').magnificPopup({
	//   type: 'image'
	//   // other options
	// });

	// 	$('.menu_toggle').click(function(){
	// 	$('nav').toggleClass('active')
	// });
// main menu search icon.................................................
	// $('#search').click(function(){
	// 	$('.menu_item').toggleClass('hide_item')
	// 	$('.search_form').toggleClass('search_active')
	// });
// 	$('#search').click(function(){
// 		$('.menu_item').addClass('hide_item')
// 		$('.search_form').addClass('search_active')
// 		$('.close').addClass('search_active')
// 		$('#search').hide()
// 	});
// 	$('.close').click(function(){
// 		$('.menu_item').removeClass('hide_item')
// 		$('.search_form').removeClass('search_active')
// 		$('.close').removeClass('search_active')
// 		$('#search').show()
// 	});
// // main menu search icon outside click then hide............................................
// 	$(document).click(function(e){
// 		var target  = $("#search");
// 		var target2  = $(".search_form");
// 		if(!target.is(e.target) && target.has(e.target).length == 0 && !target2.is(e.target) && target2.has(e.target).length == 0){
// 			$('.search_form').removeClass('search_active')
// 			$('.menu_item').removeClass('hide_item')
// 			$('.search_form input').val('')
// 			$('.close').removeClass('search_active')
// 			$('#search').show()
// 		}
// 	});
// big slider...............................................
	// $('.top_slider').owlCarousel({
	//     loop:true,
	//     margin:10,
	//     nav:true,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:1
	//         },
	//         1000:{
	//             items:1
	//         }
	//     }
	// })
// team slider....................................
	$('.team_slider').owlCarousel({
	    loop:true,
	    autoplay:false,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        992:{
	            items:3
	        }
	    }
	})
// advangers slider....................................
	$('.ad_carousel').owlCarousel({
	    loop:true,
	    autoplay:false,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        }
	    }
	})
// product slider....................................
	$('.produt_carousel').owlCarousel({
	    loop:true,
	    autoplay:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:4
	        },
	        992:{
	            items:8
	        }
	    }
	})
// blog post slider....................................
	$('.blog_slider').owlCarousel({
	    loop:true,
	    autoplay:false,
	    margin:10,
	    nav:true,
	    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        }
	    }
	})




// main menu scoll hide and show..................................................
//	$(window).on("scroll", function(){
//		var scrolltop = $(this).scrollTop();
//		var scrollpostion = $(".big_header").scrollTop();
//		if(scrolltop > scrollpostion){
//			$(".header_section").addClass('menubarsizing');
//		}else{
//			$(".header_section").removeClass('menubarsizing');
//		}
//	})
//
//	var lastScrollTop = 0;
//	$(window).scroll(function(event){
//		var st = $(this).scrollTop();
//		var scrollpostion = $(".big_header").scrollTop();
//		if(st > scrollpostion){
//			// $(".header_section").addClass("menubarsizing");
//			if (st > lastScrollTop){
//				// downscroll code
//				$(".header_section").removeClass("menubarsizing2");
//			} else {
//				$(".header_section").addClass("menubarsizing2");
//					// upscroll code
//			}
//		}else{
//			$(".header_section").removeClass("menubarsizing2");
//		}
//		lastScrollTop = st;
//	});
});

// full window scoll top............................................
$(window).scroll(function(){

	if($(this).scrollTop()>200){
		$("#gotoup").fadeIn();
	}else{
		$("#gotoup").fadeOut();
	}	
});
$("#gotoup").click(function(){
		$("html, body").animate({scrollTop:0}, 2000);
});


// mixitup....................................................
var mainmix = $(".casemix");
var mixer = mixitup(mainmix);



// skill bar...................................................................


jQuery(document).ready(function() {
/*MODIFICATION START*/
  jQuery(document).on('scroll', function(){
    if(jQuery('html,body').scrollTop() > jQuery('.skill_bar_section').height()){
/*MODIFICATION END*/
      jQuery(".progress-bar").each(function() {
        jQuery(this).find(".progress-content").animate({
          width: jQuery(this).attr("data-percentage")
        },6000);

        jQuery(this).find(".progress-number-mark").animate({
          left: jQuery(this).attr("data-percentage")
        },{
          duration: 6000,
          step: function(now, fx) {
            var data = Math.round(now);
            jQuery(this).find(".percent").html(data + "%");
          }
        });
      });
/*MODIFICATION START*/
    }
  });
/*MODIFICATION END*/

});


