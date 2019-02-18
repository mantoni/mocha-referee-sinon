/*eslint-env mocha*/
'use strict';

const Mocha = require('mocha');
const { assert, sinon } = require('@sinonjs/referee-sinon');
const clearMochaCache = require('./fixture/clear-mocha-cache');

describe('sinon.restore', () => {
  let mocha;

  function reporter() {
    // Do not report anything
  }

  beforeEach(() => {
    mocha = new Mocha({
      reporter
    });
    mocha.addFile('./index.js');
  });

  afterEach(() => {
    clearMochaCache(mocha);
  });

  it('restores sinon after test run', (done) => {
    function test() {}
    const object = { test };

    sinon.stub(object, 'test');
    mocha.addFile('./test/fixture/assert.js').run((failures) => {

      assert.equals(failures, 0);
      assert.same(object.test, test);
      done();
    });
  });

});
