# @hz-9/eslint-config-airbnb-ts

A [eslint] config for 'hz-9' (TypeScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://img.shields.io/npm/v/@hz-9/eslint-config-airbnb-ts
[npm-license-url]: https://img.shields.io/npm/l/@hz-9/eslint-config-airbnb-ts
[npm-downloads-url]: https://img.shields.io/npm/d18m/@hz-9/eslint-config-airbnb-ts

## 安装

要安装 `@hz-9/eslint-config-airbnb-ts` 包，请运行以下命令：

```bash
npm install @hz-9/eslint-config-airbnb-ts --save-dev
```

## 使用

要使用此配置，请将以下代码添加到您的 `.eslintrc.js` 文件中：

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

之后，您可以运行 ESLint 修复命令来自动修复 linting 问题：

```bash
eslint --fix .
```
