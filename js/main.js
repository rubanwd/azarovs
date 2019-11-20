$(document).ready(function(){


  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 190) {
          $('.mobile-sticky-logo').fadeIn(100);
      } else {
          $('.mobile-sticky-logo').fadeOut(100);
      }

  });

});