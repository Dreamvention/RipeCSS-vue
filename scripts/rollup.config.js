const fs = require('fs')
const path = require('path')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const { camelCase } = require('lodash')
let { name, dependencies } = require('../package.json')
name = name.split('/')[1]
const base = path.resolve(__dirname, '..')
const src = path.resolve(base, 'src')
const dist = path.resolve(base, 'dist')

const externalExcludes = []

const baseConfig = {
  input: path.resolve(src, 'index.js'),
  external: Object.keys(dependencies),
  plugins: [
    resolve({ external: ['vue'] }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ]
}

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist)
}

module.exports = [
  // UMD
  {
    ...baseConfig,
    external: Object.keys(dependencies).filter(dep => externalExcludes.indexOf(dep) === -1),
    output: {
      format: 'umd',
      name: camelCase(name),
      file: path.resolve(dist, name + '.js'),
      sourcemap: true
    }
  },

  // COMMON
  {
    ...baseConfig,
    external: Object.keys(dependencies).filter(dep => externalExcludes.indexOf(dep) === -1),
    output: {
      format: 'cjs',
      name: camelCase(name),
      file: path.resolve(dist, name + '.common.js'),
      sourcemap: true
    }
  },

  // ES
  {
    ...baseConfig,
    output: {
      format: 'es',
      file: path.resolve(dist, name + '.esm.js'),
      sourcemap: true
    }
  }
]
