'use strict';

export class Common {
  constructor() {
    $(function () {
      $(document).on("scroll", onScroll);
      if ($(window).width() > 768 && $(document).scrollTop() > 100) {
        $('header').removeClass('top');
      }
    });

    function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      if ($(window).width() > 768) {
        if (scrollPos > 100) {
          $('header').removeClass('top');
          $('header img').attr('src', 'images/logo.png');
        }
        else {
          $('header').addClass('top');
          $('header img').attr('src', 'images/logo_black.png');
        }
      }

      $('header a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 1 && refElement.position().top + refElement.height() > scrollPos) {
          $('header a').removeClass("active");
          currLink.addClass("active");
        }
        // else {
        //   currLink.removeClass("active");
        // }
      });
    }

    // $('header a').click(function () {
    //   $(this).addClass("active");
    // })
  }
}
