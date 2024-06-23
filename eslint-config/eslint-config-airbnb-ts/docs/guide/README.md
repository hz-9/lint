# @hz-9/eslint-config-airbnb-ts

A [eslint] config for 'hz-9' (TypeScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://img.shields.io/npm/v/@hz-9/eslint-config-airbnb-ts
[npm-license-url]: https://img.shields.io/npm/l/@hz-9/eslint-config-airbnb-ts
[npm-downloads-url]: https://img.shields.io/npm/d18m/@hz-9/eslint-config-airbnb-ts

## Installation

To install the `@hz-9/eslint-config-airbnb-ts` package, run the following command:

```bash
npm install @hz-9/eslint-config-airbnb-ts --save-dev
```

## Usage

To use this configuration, add the following code to your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb-ts/node'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
}
```

After that, you can run the ESLint fix command to automatically fix linting issues:

```bash
eslint --fix .
```
