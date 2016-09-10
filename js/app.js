/* sticky menu*/

$(document).ready(function() {

var stickyNavTop = $('.menu-sticky').offset().top;

var stickyNav = function(){
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
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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
