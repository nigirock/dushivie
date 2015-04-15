$(document).ready(function(){
    $(".slider").owlCarousel({
        items : 1,
        responsiveClass : false,
        loop : true,
        nav : true,
        navText : false,
        animateOut: "fadeOutLeft"
    });
    $(".slider_catalog").owlCarousel({
        items : 4,
        responsiveClass : true,
        loop : true,
        nav : true,
        navText : false,
        animateOut: "fadeOutLeft",
        margin: 25,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            481:{
                items:2,
                nav:true
            },
            768:{
                items:2,
                nav:true,
                loop:true
            },
            991:{
                items:3,
                nav:true,
                loop:true
            },
            1200:{
                items:4,
                nav:true,
                loop:true
             }
        }
    });

    $(".owl-next,.owl-prev").addClass("arrow");
    $(".owl-next").addClass("glyphicon glyphicon-menu-right");
    $(".owl-prev").addClass("glyphicon glyphicon-menu-left");
    $(".slide_item").hover(function(){
        $(this).addClass("hover_item");
        $(this).children().addClass("img_bg_opacity");
        $(this).find("h5").addClass("white_color");
    },function(){
        $(this).removeClass("hover_item");
        $(this).children().removeClass("img_bg_opacity");
        $(this).find("h5").removeClass("white_color");
    });



});

