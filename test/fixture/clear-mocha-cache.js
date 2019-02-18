'use strict';

const path = require('path');

module.exports = function (mocha) {
  // Clear require cache of mocha files after each run:
  for (const file of mocha.files) {
    delete require.cache[require.resolve(path.join(process.cwd(), file))];
  }
};
