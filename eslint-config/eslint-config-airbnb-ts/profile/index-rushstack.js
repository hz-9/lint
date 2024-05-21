/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-21 11:51:19
 * @Description  : 整合配置规则。
 */

module.exports = {
  extends: ['@hz9/eslint-config-airbnb'].map(require.resolve),

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],

      extends: ['./_no-parse-rushstack', '../rules/all'].map(require.resolve),

      rules: {
        // ...
      },
    },
  ],

  rules: {
    // ...
  },
}
