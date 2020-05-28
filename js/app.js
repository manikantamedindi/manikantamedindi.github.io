// Navbar Affix Code
$(window).scroll(function () {
  var scroll = $(this).scrollTop();
  if (scroll > 20) {
    $("#main-navbar").addClass("affix");
  } else {
    $("#main-navbar").removeClass("affix");
  }
});
// Copyright year dynamic 
$('.c-year').text(new Date().getFullYear());
// AOS Initialization 
AOS.init({
  disable: 'mobile',
  duration: 1000
})

// AOS Refresh
$(window).on('load', function () {
  AOS.refresh();
});

// Changes Img to SVG 
$('img.svg').each(function () {
  var $img = $(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function (data) {
    var $svg = $(data).find('svg');
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    $img.replaceWith($svg);
  }, 'xml');
});


// Add smooth scrolling to all links
$(".scroll").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
});