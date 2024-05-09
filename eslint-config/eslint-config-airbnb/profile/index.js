/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 18:10:12
 * @Description  : 整合配置规则。
 */

module.exports = {
  extends: [
    '../rules/best-practices',
    '../rules/errors',
    '../rules/es6',
    '../rules/imports',
    '../rules/node',
    '../rules/strict',
    '../rules/style',
    '../rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // ...
  },
}
