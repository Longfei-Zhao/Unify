// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'slick-carousel';
import AOS from 'aos';
import { Common } from '../_modules/common/common';
import SectionWhoWeAre from '../_modules/section_whoweare/section_whoWeAre';
import SectionHowwework from '../_modules/section_howwework/section_howwework';


$(() => {
  new Common();
  new SectionWhoWeAre();
  new SectionHowwework();
  AOS.init({
    disable: 'phone',
    offset: 250
  });
  // let scroll = new SmoothScroll('a[href*="#"]');
});
