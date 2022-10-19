$(document).ready(function() {
	$(window).scroll(function(){

	  if($(window).scrollTop() >= 100){
	  	$('#site_header').addClass('fixed_header');
	  	// $('.menu_list li > a:first-child()').addClass('show_link')
	  }else{
	  	$('#site_header').removeClass('fixed_header');
	  	// $('.menu_list li:first-child > a').removeClass('show_link')
	  	}
	});


	$('.menu_list li > a').click(function(e){
		e.preventDefault()
		var data_id = $(this).data('id');
		$(this).addClass('active').siblings().removeClass('active');
		$("body, html").animate({
	      scrollTop: $('#'+data_id).position().top - $("header").innerHeight()
	    });
	});


	if ($(window).width() <= 1023) {
		$('.menu_icon').click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$('.menu_list').toggleClass('active');
		});
		$('.menu_list li > a').click(function(e){
			e.preventDefault()
			$('.menu_icon').removeClass('active');
			$('.menu_list').removeClass('active');
		});

		$('.mobi_form_btn').click(function(){
			$('#fixed_form_wrap').addClass('active');
		});

		$('.form_close').click(function(){
			$('#fixed_form_wrap').removeClass('active');
		});
	};

	

	
	  var owl = $('.highlights_carousel');
	  owl.owlCarousel({
	    margin: 40,
	    nav: true,
	    loop: true,
	    dots: true,
	    responsive: {
	      0: {
	        items: 1
	      },
	      600: {
	        items: 2
	      },
	      768: {
	        items: 3
	      },
	      1024: {
	        items: 4
	      }
	    }
	  });

	  var owl = $('.amenities_carousel');
	  owl.owlCarousel({
	    margin: 20,
	    nav: true,
	    dots: true,
	    loop: true,
	    responsive: {
	      0: {
	        items: 1
	      },
	      600: {
	        items: 2
	      },
	      768: {
	        items: 3
	      },
	      1024: {
	        items: 4
	      }
	    }
	  });


		$('.amenities_carousel .item > div').click(function(){
			var data_class = $(this).data('class');
			// var degree = $(this).data('degree');
			// var new_current = current+degree;
			// current = new_current

			$('.amenities_carousel .item > div').removeClass('active');
			$('.amenities_carousel .item > div.'+data_class).addClass('active');

			// $('.pointer-wrp .text-wrp > div').removeClass('active');
			// $('.pointer-wrp .text-wrp > div.'+data_class).addClass('active');

			setTimeout(function(){ 
				$('.popup_img_wrap').addClass('active');
				$('.popup_img').addClass('active');
				$('.popup_img > img').removeClass('active');
				$('.popup_img > img.'+data_class).addClass('active');
			}, 100);

		});
		$('.popup_img_close').click(function(){
			$('.popup_img_wrap').removeClass('active');
		});

		function section_animation(){
				$('.animated').each(function(){
					var window_scrollTop = $(window).scrollTop();
					var window_60 = 90 /  100 * $(window).height();
					var scroll_item = $(this);
					var item_scrollTop = $(scroll_item).offset().top - window_60;
					var data_class = $(this).data('class');

					if (window_scrollTop > item_scrollTop) {
					    $(this).addClass(data_class);
					} else {
					    // $(this).removeClass(data_class);
					}
				})
			};


		$(window).scroll(function() {
            	section_animation();
            });




	})