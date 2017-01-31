$(document).ready(function(){ 
    
    
    // animation on page
    $(".part").animated("fadeInDown", "pulse");

    $("#btn-toogle").click(function() {
        $(".hero").toggleClass("hero_open");
    });
    
    
    // up button
    $('.up').click(function(){
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
        });  
    
    //slider
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
        autoPlay :false,
        slideSpeed : 300,
        loop: true,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [660,1],// betweem 900px and 601px    
        itemsTablet: [650,1], //2 items between 600 and 0
        itemsMobile : [400,1], // itemsMobile disabled - inherit from itemsTablet option
	});
	owl.on(".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
    
    });