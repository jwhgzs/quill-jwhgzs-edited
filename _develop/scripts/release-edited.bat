@echo off
cmd /k "webpack --config _develop/webpack.config.js"
cmd /k "webpack --config _develop/webpack.config.js --env.minimize"
del dist/quill.core
del dist/quill.bubble
del dist/quill.snow
npm version patch
npm publish