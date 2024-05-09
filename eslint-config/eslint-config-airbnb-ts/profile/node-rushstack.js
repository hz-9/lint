/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 22:23:36
 * @Description  : 用于 Node.js 运行时，针对 TypeScript 的 Eslint 配置规则。并添加了对 Rushstack 环境的支持。
 */

// 解决 https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  extends: ['@rushstack/eslint-config/profile/node', './index'].map(require.resolve),
  env: {
    browser: false,
    node: true,
  },

  rules: {
    // ...
  },
}