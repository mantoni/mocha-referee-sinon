/*eslint-env mocha*/
'use strict';

const Mocha = require('mocha');
const { assert, refute } = require('@sinonjs/referee-sinon');
const clearMochaCache = require('./fixture/clear-mocha-cache');

describe('verifier', () => {
  let mocha;
  let pass_count;
  let errors;

  function reporter(runner) {
    runner.on('pass', () => {
      pass_count++;
    });
    runner.on('fail', (test, err) => {
      errors.push(err);
    });
  }

  beforeEach(() => {
    pass_count = 0;
    errors = [];
    mocha = new Mocha({
      reporter
    });
    mocha.addFile('./index.js');
  });

  afterEach(() => {
    clearMochaCache(mocha);
  });

  it('passes test case with assertion', (done) => {
    mocha.addFile('./test/fixture/assert.js').run((failures) => {

      assert.equals(failures, 0);
      assert.equals(errors.length, 0);
      done();
    });
  });

  it('fails test case without assertion', (done) => {
    mocha.addFile('./test/fixture/no-assert.js').run((failures) => {

      refute.equals(failures, 0);
      assert.equals(String(errors),
        'Error: Expected assertion count to be at least 1, but was 0');
      done();
    });
  });

  it('fails throwing test case without additional error', (done) => {
    mocha.addFile('./test/fixture/throws.js').run((failures) => {

      refute.equals(failures, 0);
      assert.equals(String(errors), 'Error: Ouch!');
      done();
    });
  });

  it('continues running tests after failure', (done) => {
    mocha.addFile('./test/fixture/no-assert-first.js').run((failures) => {

      refute.equals(failures, 0);
      assert.equals(String(errors),
        'Error: Expected assertion count to be at least 1, but was 0');
      assert.equals(pass_count, 2);
      done();
    });
  });

});
