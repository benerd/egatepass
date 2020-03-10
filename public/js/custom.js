/* ------------------------------------------ */
/*             TABLE OF CONTENTS
/* ------------------------------------------ */

/*   01 - Revolution Slider     */
/*   02 - MENU                  */
/*   03 - Sticky Navigation     */
/*   04 - owl Slider            */
/*   05 - Portfolio             */
/*   06 - Hover Portfolio       */
/*   07 - Loading Overlay       */
/*   08 - Search                */
/*   09 - Contact form          */
/*   10 - Fancybox              */
/*   11 - Progress-Bar          */
/*   12 - Accordions            */
/*   13 - Flickr                */
/*   14 - Tweet                 */
/*   15 - Back to top button    */
/*   16 - Parallax Mobile       */
/*   17 - WOW Animation         */


"use strict";

/*-----------------------------------------------------------------------------------*/
/*	Start Revolution Slider
/*-----------------------------------------------------------------------------------*/

	jQuery(document).ready(function() {
		var revapi = jQuery("#rev_slider").revolution({
			sliderType:"standard",
			jsFileLocation:"../style/rs-plugin/js/",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				arrows:{enable:true,style:"metis"},
			bullets: {
				enable:true,
				hide_onmobile:false,
				hide_under:778,
				style:"hermes",
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:30,
				v_offset:20,
				space:5,
				tmp:''
			},


			},
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				levels:[2,3,4,5,6,7,10,11,12,13],
			},
			responsiveLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[520,480,580,400],
		});
	});	/*ready*/

/*-----------------------------------------------------------------------------------*/
/*	End Revolution Slider
/*-----------------------------------------------------------------------------------*/
	
/*-----------------------------------------------------------------------------------*/
/*	Start MENU
/*-----------------------------------------------------------------------------------*/

	/*-----------------------------------------------------------------------------------*/
	/*	Start Menu fadeInUp
	/*-----------------------------------------------------------------------------------*/


	$(".flexnav").flexNav({
	  'animationSpeed':     250,            // default for drop down animation speed 
	});

	/*-----------------------------------------------------------------------------------*/
	/*	End Menu fadeInUp
	/*-----------------------------------------------------------------------------------*/

	/*-----------------------------------------------------------------------------------*/
	/*	Start Sticky Navigation
	/*-----------------------------------------------------------------------------------*/

	//menu header//
	jQuery(document).ready(function($){
		//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
		var MQL = 1170;

		//primary navigation slide-in effect
		if($(window).width() > MQL) {
			var headerHeight = $('.navbar-collapse').height();
			$(window).on('scroll',
			{
				previousTop: 0
			},
			function () {
				var currentTop = $(window).scrollTop();
				//check if user is scrolling up
				if (currentTop < this.previousTop ) {
					//if scrolling up...
					if (currentTop > 0 && $('.navbar-collapse').hasClass('is-fixed')) {
						$('.navbar-collapse').addClass('is-visible');
					} else {
						$('.navbar-collapse').removeClass('is-visible is-fixed');
					}
				} else {
					//if scrolling down...
					$('.navbar-collapse').removeClass('is-visible');
					if( currentTop > headerHeight && !$('.navbar-collapse').hasClass('is-fixed')) $('.navbar-collapse').addClass('is-fixed');
				}
				this.previousTop = currentTop;
			});
		}


	});


	$(document).ready(function () {

	if($('.navbar-collapse').attr('data-sticky') == "true"){
		$(window).on("scroll",function(){
			var Scrl = $(window).scrollTop();
			if (Scrl > 1) {
				$('.Navbar-Header').addClass('sticky animated fadeInDown');
			}else{
				$('.Navbar-Header').removeClass('sticky animated fadeInDown');
			}
		});
		$('document').ready(function(){
			var Scrl = $(window).scrollTop();
			if (Scrl > 1) {
				$('.Navbar-Header').addClass('sticky animated fadeInDown');
			}else{
				$('.Navbar-Header').removeClass('sticky animated fadeInDown');
			}
		});
	}

	});



	/*-----------------------------------------------------------------------------------*/
	/*	End Sticky Navigation
	/*-----------------------------------------------------------------------------------*/
	
/*-----------------------------------------------------------------------------------*/
/*	End MENU
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*	Start owl Slider
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {

	$("#Testimonials-1col").owlCarousel({
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	  items : 1,
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	
	$("#Testimonials-2col").owlCarousel({
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	  items : 2,
	});
	
	$("#Testimonials-3col").owlCarousel({
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	  items : 3,
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 481px
      itemsTablet: [480,1], //2 items between 480px and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
});

$(document).ready(function() {
    $("#Our-clients").owlCarousel({
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	  items : 6,
	  pagination: false,
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,4], // betweem 900px and 601px
      itemsTablet: [600,3], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	
	$("#our-clients-3col").owlCarousel({
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	  items : 3,
	  pagination: false,
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,4], // betweem 900px and 601px
      itemsTablet: [600,3], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	$("#our-clients-3col2").owlCarousel({
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	  items : 3,
	  pagination: false,
	});
	
});

$(document).ready(function() {
  var owl = $("#slider-blog");
  owl.owlCarousel({
	  slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay : 3000,
      items : 10, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  }) 
});

$(document).ready(function() {
  var owl = $("#slider-projects");
  owl.owlCarousel({
	  slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay : 3000,
      items : 10, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  }) 
});

$(document).ready(function() {

  $("#Projects-Slider-full").owlCarousel({
    navigation : true
  });

});

$(document).ready(function() {

  $("#Projects-Slider").owlCarousel({
      slideSpeed : 300,
	  items : 3,
      paginationSpeed : 400,
      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
  
  $("#projects-slider-4col").owlCarousel({
      slideSpeed : 300,
	  items : 5,
      paginationSpeed : 400,
      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});

/*-----------------------------------------------------------------------------------*/
/*	End owl Slider
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*	Start Portfolio
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {

	$('ul#filters li a').click(function(e) {
		e.preventDefault();
	    $('ul#filters .active-link').removeClass('active-link');
		$(this).parent().addClass('active-link');
		var filter = $(this).attr('data-filter').toLowerCase();
		$('.portfolio-items .portfolio-item:visible').each(function(i) {
			$(this).fadeOut(0,function(){show(filter);});
			$('.portfolio-items .portfolio-item').addClass('animated flipInY');
		});
		return false;
	});

	function show(filter){
		if(filter == '*') {
			$('.portfolio-items .portfolio-item').fadeIn(0);
			$('.portfolio-items .portfolio-item').removeClass('animated flipInY');
		} else {
			$('.portfolio-items .portfolio-item').each(function() {
				if($(this).attr('data-filter') == filter) {
					$(this).fadeIn(0);
				}
			});
		}
	}

});

/*-----------------------------------------------------------------------------------*/
/*	End Portfolio
/*-----------------------------------------------------------------------------------*

/*-----------------------------------------------------------------------------------*/
/*	Start Hover Portfolio
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
	$('.portfolio-item').each(function(){
		var $this = $(this),
			$index = $this.index(),
			contents = $this.find('.projectItem-hover');
		$this.hover(function(){
			contents.fadeIn(300).find('.projectItem-hover').addClass('animated fadeOutUp').addClass('animated fadeInDown');
			contents.find('.projectItem-hover').addClass('animated fadeOutDown').addClass('animated fadeInUp');
			return false;
		},function(){
			contents.fadeOut(300).find('.projectItem-hover').addClass('animated fadeInDown').addClass('animated fadeOutUp');
			contents.find('.projectItem-hover').addClass('animated fadeInUp').addClass('animated fadeOutDown');
			return false;
		});
	});
});

/*-----------------------------------------------------------------------------------*/
/*	End Hover Portfolio
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*	Strat Loading Overlay
/*-----------------------------------------------------------------------------------*/

$(window).load(function()
{
	$(".loading-overlay .spinner").fadeOut(300);

	$(".loading-overlay").fadeOut(300);
});

$(window).load(function() {
  $('body').css({'overflow':'auto', 'height':'auto', 'position':'relative'});
});

/*-----------------------------------------------------------------------------------*/
/*	End Loading Overlay
/*-----------------------------------------------------------------------------------*/

	
/* ---------------------------------------------------------------------- */
/*	Start Search
/* ---------------------------------------------------------------------- */

$('.Icons-Search').click(function(){
	if($(this).parent().find('.Block-Search').is(':visible')){
		$('.Block-Search').fadeOut(300);
		$(this).parent().removeClass('selected');
		$('body').removeClass('show-search');
		return false;
	}else{
		$('.Block-Search').fadeIn(100);
		$(this).parent().addClass('selected');
		$('body').addClass('show-search');
		return false;
	}
});

$(window).load(function() {
  $('.Block-Search').css({'display':'none'});
});	

$(".Icons-Search a").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});



$( ".open-shop-cart" ).click(function() {     
   $('.shop-cart-header').toggleClass("active animated flipInY");
   $('.open-shop-cart').toggleClass("select");
});






/* ---------------------------------------------------------------------- */
/*	End Search
/* ---------------------------------------------------------------------- */

/*-----------------------------------------------------------------------------------*/
/*	Start Contact form
/*-----------------------------------------------------------------------------------*/

var frm = $('#cform');
frm.submit(function (ev) {
	$.ajax({
		type: frm.attr('method'),
		url: frm.attr('action'),
		data: frm.serialize(),
		success: function (data) {
			$('#cform').append("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><i class='fa fa-thumbs-o-up'></i><strong>Well done!</strong> Your Message Submitted!</div>")
		}
	});

	ev.preventDefault();
});			

/*-----------------------------------------------------------------------------------*/
/*	End Contact form
/*-----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------- */
/*	Start Fancybox
/* ---------------------------------------------------------------------- */

$(document).ready(function() {
	/*
	 *  Simple image gallery. Uses default settings
	 */

	$('.fancybox').fancybox();

	/*
	 *  Different effects
	 */

	// Change title type, overlay closing speed
	$(".fancybox-effects-a").fancybox({
		helpers: {
			title : {
				type : 'outside'
			},
			overlay : {
				speedOut : 0
			}
		}
	});

	// Disable opening and closing animations, change title type
	$(".fancybox-effects-b").fancybox({
		openEffect  : 'none',
		closeEffect	: 'none',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});

	// Set custom style, close if clicked, change title type and overlay color
	$(".fancybox-effects-c").fancybox({
		wrapCSS    : 'fancybox-custom',
		closeClick : true,

		openEffect : 'none',

		helpers : {
			title : {
				type : 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(238,238,238,0.85)'
				}
			}
		}
	});

	// Remove padding, set opening and closing animations, close if clicked and disable overlay
	$(".fancybox-effects-d").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed  : 150,

		closeClick : true,

		helpers : {
			overlay : null
		}
	});

	/*
	 *  Button helper. Disable animations, hide close button, change title type and content
	 */

	$('.fancybox-buttons').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',

		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,

		helpers : {
			title : {
				type : 'inside'
			},
			buttons	: {}
		},

		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});


	/*
	 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
	 */

	$('.fancybox-thumbs').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,
		arrows    : false,
		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});

	/*
	 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
	*/
	$(".video").click(function() {
		$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 640,
			'height'		: 385,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'				: 'transparent',
			'allowfullscreen'	: 'true'
			}
		});

		return false;
	});


	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}

		});

	/*
	 *  Open manually
	 */

	$("#fancybox-manual-a").click(function() {
		$.fancybox.open('1_b.jpg');
	});

	$("#fancybox-manual-b").click(function() {
		$.fancybox.open({
			href : 'iframe.html',
			type : 'iframe',
			padding : 5
		});
	});

	$("#fancybox-manual-c").click(function() {
		$.fancybox.open([
			{
				href : '1_b.jpg',
				title : 'My title'
			}, {
				href : '2_b.jpg',
				title : '2nd title'
			}, {
				href : '3_b.jpg'
			}
		], {
			helpers : {
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});


});

/* ---------------------------------------------------------------------- */
/*	End Fancybox
/* ---------------------------------------------------------------------- */

/*-----------------------------------------------------------------------------------*/
/*	Start Progress-Bar
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
	if (jQuery(".progress-bar").length) {
		jQuery(".progress-bar").each(function(){
			var $this = jQuery(this);
			var percent = $this.attr("data-percent");
			$this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
				if (isInView) {
					$this.animate({ "width" : percent + "%"}, percent*20);
				}
			});
		});
	}

});

/*-----------------------------------------------------------------------------------*/
/*	End Progress-Bar
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*	Start Accordions
/*-----------------------------------------------------------------------------------*/

jQuery(".tap-title").each(function(){
	jQuery(this).click(function() {
		if (jQuery(this).parent().parent().hasClass("toggle-accordion")) {
			jQuery(this).parent().find("li:first .tap-title").addClass("active");
			jQuery(this).parent().find("li:first .tap-title").next(".accordion-inner").addClass("active");
			jQuery(this).toggleClass("active");
			jQuery(this).next(".accordion-inner").slideToggle().toggleClass("active");
			jQuery(this).find("i").toggleClass("fa-plus").toggleClass("fa-minus");
		}else {
			if (jQuery(this).next().is(":hidden")) {
				jQuery(this).parent().parent().find(".tap-title").removeClass("active").next().slideUp(200);
				jQuery(this).parent().parent().find(".tap-title").next().removeClass("active").slideUp(200);
				jQuery(this).toggleClass("active").next().slideDown(200);
				jQuery(this).next(".accordion-inner").toggleClass("active");
				jQuery(this).parent().parent().find("i").removeClass("fa-minus").addClass("fa-plus");
				jQuery(this).find("i").removeClass("fa-plus").addClass("fa-minus");
		}else{
				jQuery(this).toggleClass("active").next().slideToggle(200);
				jQuery(this).next(".accordion-inner").toggleClass("active");
				jQuery(this).parent().parent().find("i").removeClass("fa-minus").addClass("fa-plus");
      	}
		}
		return false;
	});
});


/*-----------------------------------------------------------------------------------*/
/*	End Accordions
/*-----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------- */
/*	Start Flickr
/* ---------------------------------------------------------------------- */

$('#Flickr').jflickrfeed({
	limit: 10,
	qstrings: {
		id: '52617155@N08' // Flickr Id form feed Rss in your photostream in flickr profile
		//( Don't know your ID? Go to http://idgettr.com/ to find it. )
	},
	itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}" /></a></li>'
});

$('#Flickr-sidebar').jflickrfeed({
	limit: 10,
	qstrings: {
		id: '52617155@N08' // Flickr Id form feed Rss in your photostream in flickr profile
		//( Don't know your ID? Go to http://idgettr.com/ to find it. )
	},
	itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}" /></a></li>'
});

/*-----------------------------------------------------------------------------------*/
/*	End Flickr
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*	Start Tweet
/*-----------------------------------------------------------------------------------*/

$('.tweet').twittie({
	username: 'EnvatoStudio',
	hideReplies: true,
	dateFormat: '%b. %d, %Y',
	template: '<i class="fa fa-twitter"></i> {{screen_name}} {{tweet}} <div class="date">{{date}}</div>',
	count: 2,
	loadingText: 'Loading!'
});

/*-----------------------------------------------------------------------------------*/
/*	End Tweet
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {

	var num = $('#items-num').val();
	$('.add-items .plus').click(function(e){
		e.preventDefault();
		num ++;
		$('#items-num').attr('value',num);
	});

	$('.add-items .minus').click(function(e){
		e.preventDefault();
		if (num > 1){
			num --;
			$('#items-num').attr('value',num);
		}
	});
});
	
/*-----------------------------------------------------------------------------------*/
/*	Start Back to top button
/*-----------------------------------------------------------------------------------*/

var winScroll = $(window).scrollTop();
	if (winScroll > 1) {
		$('#to-top').css({bottom:"10px"});
	} else {
		$('#to-top').css({bottom:"-100px"});
	}
	$(window).on("scroll",function(){
		winScroll = $(window).scrollTop();

		if (winScroll > 1) {
			$('#to-top').css({opacity:1,bottom:"30px"});
		} else {
			$('#to-top').css({opacity:0,bottom:"-100px"});
		}
	});
	$('#to-top').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 800);
		return false;
});

$('.fa-hover').wrapInner('<span />');

/*-----------------------------------------------------------------------------------*/
/*	End Back to top button
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*	Start Parallax Mobile
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
});

/*-----------------------------------------------------------------------------------*/
/*	End Parallax Mobile
/*-----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------- */
/*	Start WOW Animation
/* ---------------------------------------------------------------------- */

$(document).ready(function () {
 new WOW().init();
});

/*-----------------------------------------------------------------------------------*/
/*	End WOW Animation
/*-----------------------------------------------------------------------------------*/