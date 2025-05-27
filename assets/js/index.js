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


// Loader JS Start
window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});
// Loader JS Start