$( window ).scroll(function() {

	if($(window).scrollTop() >= 55){
		$( "header" ).addClass("headscroll wow slideInDown");
		$("header").attr("data-wow-duration","1s");
		$( "header" ).addClass("wow fadeInUp");
		$("header").attr("data-wow-delay","1");
	} else {
		$( "header" ).removeClass("headscroll wow slideInDown");
	}

});
