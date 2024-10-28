// slider start

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
})

// slider end


//menu start

let ShowMenu = $('.my-menu-icon')
let MyBoxMenu = $('.box-menu')
let CloseMenu = $('.close-menu')
let OverlyForMenu = $('.overly-for-box-menu')


ShowMenu.on('click' , function () {
    MyBoxMenu.addClass('show-box-menu')
    MyBoxMenu.css('visibility' , 'visible')
    MyBoxMenu.css('opacity' , '1')
    OverlyForMenu.css('opacity' , '1')
    OverlyForMenu.css('visibility' , 'visible')
})

OverlyForMenu.on('click' , function () {
    OverlyForMenu.css('visibility' , 'hidden')
    MyBoxMenu.css('visibility' , 'hidden')
    MyBoxMenu.removeClass('show-box-menu')
    MyBoxMenu.css('opacity' , '0')
    OverlyForMenu.css('opacity' , '0')
})

CloseMenu.on('click' , function () {
    OverlyForMenu.css('visibility' , 'hidden')
    MyBoxMenu.css('visibility' , 'hidden')
    MyBoxMenu.removeClass('show-box-menu')
    MyBoxMenu.css('opacity' , '0')
    OverlyForMenu.css('opacity' , '0')
})


//menu end

























