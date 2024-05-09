/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 21:45:05
 * @Description  : 整合配置规则。
 */

module.exports = {
  extends: ['@hz9/eslint-config-airbnb'].map(require.resolve),

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],

      extends: [
        'eslint-config-airbnb-typescript/lib/shared',

        '../rules/best-practices',
        '../rules/errors',
        '../rules/es6',
        '../rules/imports',
        '../rules/node',
        '../rules/strict',
        '../rules/style',
        '../rules/variables',
      ].map(require.resolve),

      rules: {
        // ...
      },
    },
  ],

  rules: {
    // ...
  },
}
