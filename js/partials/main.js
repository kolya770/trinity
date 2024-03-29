$(document).ready(function () {

    var md = new MobileDetect(window.navigator.userAgent);

    if (!md.mobile()) {
        var size_container = $('.size-container').height();
        $('.left-block').css('height', size_container);
        $('.right-block').css('height', size_container);

        $('.fade-bottom').fadeThis({
            speed: 1000
        });

    }

    $("#lightgallery").lightGallery({
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        mode: 'lg-slide-circular'
    });

    $("#gallery-diploma-1").lightGallery({
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        mode: 'lg-slide-circular'
    });
    $("#gallery-diploma-2").lightGallery({
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        mode: 'lg-slide-circular'
    });
    $("#gallery-diploma-1-m").lightGallery({
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        mode: 'lg-slide-circular'
    });

    //Fix popup
    var modal = $('.modal');

    modal.on('show.bs.modal', function () {
        if ($(document).height() > $(window).height()) {
            // no-scroll
            $('body').addClass("modal-open-noscroll");
        }
        else {
            $('body').removeClass("modal-open-noscroll");
        }
    });

    modal.on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    });

});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

