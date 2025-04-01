const common = require('./common')

console.log(123, require.resolve('@trivago/prettier-plugin-sort-imports'))

module.exports = {
  plugins: ['./node_modules/@trivago/prettier-plugin-sort-imports/lib/src/index.js'],

  ...common,

  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^@hz-9/(.*)$', '^@/(.*)$', '^[./]'],

  importOrderSeparation: true,

  importOrderSortSpecifiers: true,

  importOrderGroupNamespaceSpecifiers: true,

  importOrderParserPlugins: ['typescript', 'classProperties', 'decorators-legacy'],
}
