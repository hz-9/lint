/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 17:59:44
 * @Description  : [PUBLIC] recommended 级别配置，设置了 `nodejs` 环境
 */

module.exports = {
  extends: ['./index'].map(require.resolve),
  env: {
    browser: false,
    node: true,
  },

  rules: {
    // ...
  },
}
