'use strict';

import Common from '../common';

describe('Common View', function() {

  beforeEach(() => {
    this.common = new Common();
  });

  it('Should run a few assertions', () => {
    expect(this.common);
  });

});
