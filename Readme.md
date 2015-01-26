# Minimal config for node

## Example

```bash
$ export NODE_ENV=production
```

  in `config/default.js`

```js
module.exports = {
  foo: 'foo'
}
```

  in `config/production.js`

```js
module.exports = {
  bar: 'bar'
}
```

  in `config/local.js`

```js
module.exports = {
  foo: 'local.js is recommended to be added to .gitignore'
}
```

  in project code

```js
var config = require('m-config')

// local.js is recommended to be added to .gitignore
console.log(config.foo)

// bar
console.log(config.bar)
```

  Config directory **SHOULD** be located in path `config` relative to `process.cwd()`.
