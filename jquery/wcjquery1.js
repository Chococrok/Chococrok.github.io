
		//background effect
$(window).on('scroll', function() {
    if ($(this).scrollTop() != 0) {
        	$('.hide').fadeTo(2000, 0.45, function() {
        		$('.hide').css('filter', 'blur(5px)')
        	})
    }
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > $('#section0')) { 
    	$('.hide').css('opacity', '1')
    }
});

		//nav effets:

	//arrow1

$('#arrow1').on('mouseenter', function() {
	$('#descriptionT1').fadeIn(200	)
});
$('#arrow1').on('mouseleave', function() {
	$('#descriptionT1').fadeOut(200)
});

	//arrow2

$('#arrow2').on('mouseenter', function() {
	$('#descriptionT2').fadeIn(200)
});
$('#arrow2').on('mouseleave', function() {
	$('#descriptionT2').fadeOut(200)
});

	//arrow3

$('#arrow3').on('mouseenter', function() {
	$('#descriptionT3').fadeIn(200)
});
$('#arrow3').on('mouseleave', function() {
	$('#descriptionT3').fadeOut(200)
});

		//img effects:

$('#profileimg1').on('mouseover', function() {
	$('#description1').css('opacity', '1')
	$('#description1').css('transition', '3s linear')
});

$('#profileimg2').on('mouseover', function() {
	$('#description2').css('opacity', '1')
	$('#description2').css('transition', '3s linear')
});

$('#profileimg3').on('mouseover', function() {
	$('#description3').css('opacity', '1')
	$('#description3').css('transition', '3s linear')
});