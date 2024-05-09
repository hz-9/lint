/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 17:59:39
 * @Description  : [PUBLIC] base 级别配置，设置了 `browser` 环境
 */

module.exports = {
  extends: ['./index'].map(require.resolve),
  env: {
    browser: true,
    node: false,
  },

  rules: {
    // ...
  },
}
