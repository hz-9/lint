# @hz-9/eslint-config-airbnb

A [eslint] config for for 'hz-9' (JavaScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://img.shields.io/npm/v/@hz-9/eslint-config-airbnb
[npm-license-url]: https://img.shields.io/npm/l/@hz-9/eslint-config-airbnb
[npm-downloads-url]: https://img.shields.io/npm/d18m/@hz-9/eslint-config-airbnb

[English Document](https://hz-9.github.io/lint/guide/eslint-config-airbnb/) | [中文文档](https://hz-9.github.io/lint/zh-CN/guide/eslint-config-airbnb/)

## Installation

To install the `@hz-9/eslint-config-airbnb` package, run the following command:

```bash
npm install @hz-9/eslint-config-airbnb --save-dev
```

## Usage

To use this configuration, add the following code to your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb'
  ],
}
```

After that, you can run the ESLint fix command to automatically fix linting issues:

```bash
eslint --fix .
```
