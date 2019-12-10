'use strict';

export default class SectionWhoWeAre {
  constructor() {
    $('.slick').slick({
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
}
