/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 22:40:57
 * @Description  : 继承 eslint-config-airbnb-typescript 的规则，并删除 plugins parser
 */

const _configs = require('eslint-config-airbnb-typescript/lib/shared')

const configs = { ..._configs }

delete configs.plugins
delete configs.parser

module.exports = configs
