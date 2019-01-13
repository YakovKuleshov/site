$(function() {

		$('.expositionSlider').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 8000,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},

			]

		});

		var i = 0;
		
		setInterval(function() {
							
				$('img').eq(i).animate({opacity:0}, 7000);
				i++;
				if(i >= $('img').length) {
					i = 0;
				}

				$('img').eq(i).animate({opacity:1}, 7000) 
			}, 17000);



		setInterval(function() {
			$('.fa-phone').toggleClass('animated shake');
		}, 5000);

		setInterval(function() {
			$('.Tour3d').toggleClass('animated rubberBand');
		}, 6000);


		$('.gamburger').on('click', function() {
			$('html').css('overflow', 'hidden');
			$('.navigation__navMenu').css('left', 0);
		});

		$('.btnClose').on('click', function() {
			$('html').css('overflow', 'auto');
			$('.navigation__navMenu').css('left', -100+ '%');
		});
});
