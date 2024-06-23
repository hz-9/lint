# @hz-9/eslint-config-airbnb

一个适用于 'hz-9'（JavaScript）的 [eslint] 配置。

![NPM 版本][npm-version-url] ![NPM 许可证][npm-license-url] ![NPM 下载量][npm-downloads-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://img.shields.io/npm/v/@hz-9/eslint-config-airbnb
[npm-license-url]: https://img.shields.io/npm/l/@hz-9/eslint-config-airbnb
[npm-downloads-url]: https://img.shields.io/npm/d18m/@hz-9/eslint-config-airbnb

## 安装

要安装 `@hz-9/eslint-config-airbnb` 包，请运行以下命令：

```bash
npm install @hz-9/eslint-config-airbnb --save-dev
```

## 使用

要使用此配置，请将以下代码添加到您的 `.eslintrc.js` 文件中：

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb'
  ],
}
```

之后，您可以运行 ESLint 修复命令来自动修复 linting 问题：

```bash
eslint --fix .
```
