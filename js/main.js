$(document).ready(function () {
    $(".lds-ring").fadeOut(1000, function () {
        $(this).parent().hide();
        $('body').css("overflow-y", "auto");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });
    // Mobile Side Menu 
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('.page-body').css("overflow-y", "hidden");
        $('html').css("overflow-y", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow-y", "auto");
        $('html').css("overflow-y", "auto");
    });
    $('.closebtn').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow-y", "auto");
        $('html').css("overflow-y", "auto");
    });
    $(".main-xs-nav").click(function (e) {
        e.stopPropagation();
    });
    // Mobile Search 
    $('.search-icon').click(function () {
        $('.search-pop').fadeIn(500);
        $('body').css("overflow-y", "hidden");
        $('html').css("overflow-y", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(500);
        $('body').css("overflow-y", "auto");
        $('html').css("overflow-y", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });

    if ($(window).width() < 768) {
        $(".categories").addClass("owl-carousel");
        $('.categories').owlCarousel({
            items: 2,
            margin: 5,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: true,
            loop: true,
            nav: false,
            dots: true,
        });
    } else {
        $(".categories").removeClass("owl-carousel");
    }


    // Main Slider
    if ($(window).width() < 992) {
        $(".header-container").removeClass("container");
    } else {
        $(".header-container").addClass("container");
    }
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false
    });

    // Product Slider
    $('.Product-slider').owlCarousel({
        items: 6,
        autoplay: false,
        autoplayTimeout: 5000,
        margin: 14,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 3,
                dots: true,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });
    ////////////////////////////////////////////////////////
    if ($(window).width() < 768) {
        $(".foot-nav-links-header").addClass("moaccordion");
        $(".foot-links").addClass("mopanel");
    }
    var acc = document.getElementsByClassName("moaccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    AOS.init();
});