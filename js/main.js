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
        loop: true
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