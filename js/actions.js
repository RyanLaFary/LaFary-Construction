$(document).ready(function(){
	$('#mobile-icon').click(function() {
		$(this).toggleClass('open');
    $('nav').toggleClass('open');
    $('body').toggleClass('open');
	});

  $('.slideshow').slick({
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>'
  });

	$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
});

});
