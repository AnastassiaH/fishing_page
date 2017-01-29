$(document).ready(function(){ 
    
    
    
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
    
    });