AOS.init({
  disable: 'mobile',
  duration: 1000
})

$(window).on('load', function () {
  AOS.refresh();
});