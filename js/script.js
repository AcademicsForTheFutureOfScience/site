$( document ).ready(function() {

    $('.about-read-more-button').on('click', function (e) {
        e.preventDefault();
        $('.about-opened-section').toggleClass('active');
    });

    $('.contact-congress-button.button-message').on('click', function () {
        $('.message-forms-wrapper').toggleClass('hidden');
        $('.address-form').toggleClass('hidden');
    });

    $('.step-1-submit').on('click', function () {
        $('.address-form').toggleClass('hidden');
        $('.checkbox-form').toggleClass('hidden');
    });

    $('.step-2-submit').on('click', function () {
        $('.checkbox-form').toggleClass('hidden');
        $('.write-message-form').toggleClass('hidden');
    });

    $('.step-2-back').on('click', function () {
        $('.checkbox-form').toggleClass('hidden');
        $('.address-form').toggleClass('hidden');
    });

    $('.step-3-submit').on('click', function (e) {
        e.preventDefault();
        $('.write-message-form').toggleClass('hidden');
        $('.done-form').toggleClass('hidden');
    });

    $('.step-3-back').on('click', function () {
        $('.write-message-form').toggleClass('hidden');
        $('.checkbox-form').toggleClass('hidden');
    });

    $('.done-close').on('click', function () {
        $('.done-form').toggleClass('hidden');
        $('.message-forms-wrapper').toggleClass('hidden');
    });

    $('.done-new-message').on('click', function () {
        $('.done-form').toggleClass('hidden');
        $('.address-form').toggleClass('hidden');
    });


    $('.side-form-open-button').on('click', function () {
        $('.side-form-closed').toggleClass('hidden');
    });

    $('.side-form-opened-wrapper').on('click', function () {
        $('.side-form-closed').toggleClass('hidden');
    });

    //ANKORS
    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 153);
    });
    function offsetAnchor() {
        if(location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 153);
        }
    }
    window.addEventListener("hashchange", offsetAnchor);
    window.setTimeout(offsetAnchor, 1);

    $("a[href='#content-wrapper']").click(function() {
        $('html, body').animate({
            scrollTop: $("#content-wrapper").offset().top - 153
        }, 500);
    });

    $("a[href='#contact-congress-section']").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-congress-section").offset().top - 153
        }, 500);
    });

    $("a[href='#shop-section']").click(function() {
        $('html, body').animate({
            scrollTop: $("#shop-section").offset().top - 153
        }, 500);
    });


    //MOBILE NAV OPEN
    $('.mobile-menu-button, .mobile-nav-item a, .embedded-mobile-list a').on('click', function () {
        $('body').toggleClass('not-scroll');
        $('.mobile-menu-opened-wrapper').toggleClass('opened');
    });


    //NAV SIZE DECREASE
    if ($(window).width() >= 1024) {
        if ($(window).scrollTop() >= 1) {
            $('.header-nav-wrapper').addClass('fixed');
            $('body').addClass('scroll-padding-fix');
        } else {
            $('.header-nav-wrapper').removeClass('fixed');
            $('body').removeClass('scroll-padding-fix');
        }
    }

    $(window).scroll(function() {
        if ($(window).width() >= 1024) {
            if ($(window).scrollTop() >= 1 ) {
                $('.header-nav-wrapper').addClass('fixed');
                $('body').addClass('scroll-padding-fix');
            } else {
                $('.header-nav-wrapper').removeClass('fixed');
                $('body').removeClass('scroll-padding-fix');
            }
        }
    });
});