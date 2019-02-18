# mocha-referee-sinon

[![Build Status]](https://travis-ci.org/mantoni/mocha-referee-sinon)
[![SemVer]](http://semver.org)
[![License]](https://github.com/mantoni/mocha-referee-sinon/blob/master/LICENSE)

Common initialization file for [Mocha][] when used with
[@sinonjs/referee-sinon][].

## What it does

Installs global `beforeEach` and `afterEach` hooks for Mocha to verify that

- each test has at least one referee assertion
- the global Sinon sandbox is restored with `sinon.restore()`

## Install

Install in `devDependencies`:

```bash
❯ npm install -D mocha-referee-sinon
```

## Usage

```bash
❯ mocha --file ./node_modules/mocha-referee-sinon
```

## Compatibility

- `1.0.0`: Mocha 5.2, `@sinonjs/referee-sinon` 5.0

## License

MIT

[Build Status]: https://img.shields.io/travis/mantoni/mocha-referee-sinon/master.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/mocha-referee-sinon.svg
[Mocha]: https://mochajs.org
[@sinonjs/referee-sinon]: https://sinonjs.github.io/referee-sinon/
