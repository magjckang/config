/**
 * Module dependencies.
 */

var debug = require('debug')('config')
var deepMerge = require('deep-extend')
var rs = require('path').resolve

/**
 * Config directory and `NODE_ENV` environment variable.
 */

var dir = rs(process.cwd(), 'config')
var env = process.env.NODE_ENV || 'development'
var config

debug('dir %s', dir)
debug('env %s', env)

/**
 * Load from `index.js` when `default.js` doesn't exist.
 */

try {
  config = require(rs(dir, 'default'))
  debug('load default.js')
} catch (err) {
  config = require(dir)
  debug('load index.js')
}

/**
 * Load from `(env).js` if possible.
 */

try {
  deepMerge(config, require(rs(dir, env)))
  debug('load %s.js', env)
} catch (err) {}

/**
 * Load from `local.js` if possible.
 * Only for local config, should be added to `.gitignore`.
 */

try {
  require(rs(dir, 'local'))
  debug('load local.js')
} catch (err) {}

debug('export %o', config)

/**
 * Expose `config`.
 */

module.exports = config
