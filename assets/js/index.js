// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End

// Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("fixed_header", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End

// Slider JS Start
$('.single-item-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay:true,});
// Slider JS Start

	// Read More Functionality JS Start
// jQuery (with document ready handler)
$(document).ready(function() {
  $('.subpage-readmore-btn').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var $content = $this.closest('.hot_cards_content').find('.hot_exp_content');      
      $content.slideToggle(500, function() {
          if ($content.is(':visible')) {
              $this.text('Read Less');
          } else {
              $this.text('Read More');
          }
      });
  });
});
// Read More Functionality JS end