const { execSync } = require('child_process')
const fs = require('fs')
execSync(`webpack --config _develop/webpack.config.js`)
execSync(`webpack --config _develop/webpack.config.js --env.minimize`)
/* eslint no-sync: "off" */
fs.rmSync('dist/quill.core')
fs.rmSync('dist/quill.bubble')
fs.rmSync('dist/quill.snow')
execSync(`npm version patch`)
execSync(`npm publish`)
/* eslint no-console: "off" */
console.log('complete!')
