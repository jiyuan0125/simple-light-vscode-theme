#!/bin/bash

# sudo apt-get install libsecret-1-dev
# npm install -g vsce

rm simple-light-vscode-theme*.vsix
pnpm build
vsce package