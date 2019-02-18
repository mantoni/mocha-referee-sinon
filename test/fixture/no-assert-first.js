/*eslint-env mocha*/
'use strict';

const { assert } = require('@sinonjs/referee-sinon');

describe('no-assert-first', () => {

  it('fails', () => {
    // No assertions
  });

  it('passes', () => {
    assert(true);
  });

});
