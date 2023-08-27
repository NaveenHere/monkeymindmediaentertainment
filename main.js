var project = $('.project-carousel');
project.owlCarousel({
    items:3,
    margin: 10,
    loop:true,
    autoplay:true,
    autoHeight:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
})



var project = $('.client-carousel');
project.owlCarousel({
    items:4,
    margin: 10,
    dots: false,
    loop:true,
    autoplay:true,
    autoHeight:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:4,
        },
        1000:{
            items:4,
        }
    }
})