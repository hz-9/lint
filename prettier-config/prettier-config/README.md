# @hz-9/prettier-config

A [prettier] config for for 'hz-9' (JavaScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]
<br /> ![Node Version][node-version-url] ![Last Commit][last-commit-url]

[prettier]: https://prettier.io/
[npm-version-url]: https://badgen.net/npm/v/@hz-9/prettier-config
[npm-license-url]: https://badgen.net/npm/license/@hz-9/prettier-config
[npm-downloads-url]: https://badgen.net/npm/dt/@hz-9/prettier-config
[node-version-url]: https://badgen.net/npm/node/@hz-9/prettier-config
[last-commit-url]: https://badgen.net/github/last-commit/hz-9/lint

[Document](https://hz-9.github.io/lint/guide/prettier-config/) | [文档](https://hz-9.github.io/lint/zh-CN/guide/prettier-config/)

## Installation

To install the `@hz-9/prettier-config` package, run the following command:

```bash
npm install @hz-9/prettier-config --save-dev
```

## Usage

To use this configuration, add the following code to your `.prettierrc.js` file:

```javascript
const prettierConfig = require('@hz-9/prettier-config')

module.exports = prettierConfig
```

After that, you can run the ESLint fix command to automatically fix linting issues:

```bash
prettier --write .
```
