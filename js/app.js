/* sticky menu*/

$(document).ready(function() {

    var stickyNavTop = $('.menu-sticky').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.menu-sticky').addClass('sticky');

        } else {
            $('.menu-sticky').removeClass('sticky');
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();

    });


});

/* sticky menu end*/


/*responsive tabs*/

$(document).ready(function() {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true // 100% fit in a container
    });
});

/* responsive tabs end*/

/*smooth scrolling */

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* smooth scrolling end*/


/*prevent scroll on google maps*/

$(document).ready(function () {
    $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready

    $('#overlay').on("mouseup",function(){          // lock it when mouse up
        $('#map').addClass('scrolloff');
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () {              // becuase the mouse up doesn't work...
        $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                    // or you can do it on some other event
    });

});

/*prevent scroll on google maps end*/
