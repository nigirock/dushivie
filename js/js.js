$(document).ready(function(){
    $(".slider").owlCarousel({
        items : 1,
        responsiveClass : false,
        loop : true,
        nav : true,
        navText : false,
        animateOut: "fadeOutLeft"
    });
    $(".owl-next,.owl-prev").addClass("arrow");
    $(".owl-next").addClass("glyphicon glyphicon-menu-right");
    $(".owl-prev").addClass("glyphicon glyphicon-menu-left")

});

