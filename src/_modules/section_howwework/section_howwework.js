'use strict';

export default class SectionHowwework {
  constructor() {
    $('.circle').click(function () {
      $('.circle').removeClass('active');
      $(this).addClass('active');
    })
  }
}
