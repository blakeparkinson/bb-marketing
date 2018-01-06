$(function() {
  $('.exceptional-results-numbers').on('inview', function(event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 1000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    } else {
      // element has gone out of viewport
    }
  });

});
