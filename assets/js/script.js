jQuery(document).ready(function($) {

  $('a.scroll-link').click(function(e) {
    e.preventDefault();
    $id = $(this).attr('href');
    $('body,html').animate({
      scrollTop: $($id).offset().top - 40
    }, 750);
  });

});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll < 500) {
    $('.navbar').css('background', 'rgba(255, 255, 255, 1)');
  } else {
    $('.navbar').css('background', 'rgba(245, 245, 245, 1)');
  }
});


// Smooth scroll with scrollspy
$(document).ready(function() {
  $(".nav-link,.dropdown-item").click(function() {
    var t = $(this).attr('href');
    $('.active').not('.carousel-item.active').removeClass('active');
    $("html, body").animate({
      scrollTop: $(t).offset().top - 40
    }, {
      duration: 1e3,
    });

    $('body').scrollspy({
      target: '#navbar-example',
      offset: $(t).offset().top
    });
    $(this).parent().addClass('active');

    return false;
  });

});

// Test sidebar
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
