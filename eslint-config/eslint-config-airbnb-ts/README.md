# @hz-9/eslint-config-airbnb-ts

A `eslint` config for for 'hz-9' (TypeScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]

[npm-version-url]: https://img.shields.io/npm/v/@hz-9/eslint-config-airbnb-ts
[npm-license-url]: https://img.shields.io/npm/l/@hz-9/eslint-config-airbnb-ts
[npm-downloads-url]: https://img.shields.io/npm/d18m/@hz-9/eslint-config-airbnb-ts

## Installation

``` bash
npm install @hz-9/eslint-config-airbnb-ts --save-dev
```

## Usage

Add to `.eslintrc.js`:

``` js
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb-ts/node'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
}
```

Then run

``` bash
eslint --fix .
```
