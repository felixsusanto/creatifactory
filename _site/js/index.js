$(document).ready(function () {
  $('.full-carousel').slick();
  $('#main-nav').on('hide.bs.collapse', function() {
    $(this).removeClass('white-overlay');
  });
  $('#main-nav').on('show.bs.collapse', function() {
    $(this).addClass('white-overlay');
  });
});