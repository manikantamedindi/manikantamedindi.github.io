(function ($) {
  'use strict';

  $(window).on('load', function () {
    $('.portfolio-filter ul li').on('click', function () {
      $('.portfolio-filter ul li').removeClass('active');
      $(this).addClass('active');

      var data = $(this).attr('data-filter');
      $workGrid.isotope({
        filter: data
      });
    });

    if (document.getElementById('portfolio')) {
      var $workGrid = $('.portfolio-grid').isotope({
        itemSelector: '.all',
        percentPosition: true,
        masonry: {
          columnWidth: '.all'
        }
      });
    }
  });
})(jQuery);

new Vue({
  el: '#app',
  data: {
    projects: [],
  },
  created() {
    axios
      .get("./data/projects.json")
      .then(response => {
        this.projects = response.data;
      });
  }
});