#!/bin/sh
echo 'transfrom js'
rollup -c build/rollup.config.js
echo 'transform less'
lessc src/styles/messageBox.less src/styles/messageBox.css
echo 'success'