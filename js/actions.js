$(document).ready(function(){
	$('#mobile-icon').click(function() {
		$(this).toggleClass('open');
    $('nav').toggleClass('open');
    $('body').toggleClass('open');
	});

  $('.your-class').slick({
    nextArrow: '<button type="button" class="slick-next">></button>',
    prevArrow: '<button type="button" class="slick-next"><</button>'
  });
});
