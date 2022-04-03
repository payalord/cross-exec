[![npm](https://img.shields.io/npm/v/cross-exec.svg)](https://www.npmjs.com/package/cross-exec)

# cross-exec
Simple script to identify platform and execute further npm scripts, such as build scripts (for example), by platform.

# Installation
`npm i -D cross-exec`

# Syntax
`cross-exec <platform-name-1>="command 1" <platform-name-2>="command 2"...`

* `platform-name` argument must include platform name in it (i.e `win32` for example), but it can also have additional characters. Example: `--win32=\"npm run build:win32\"`. Two dashes will be ignored in that case.

# Usage

Let say you have build npm scripts for 3 platforms and you want to create 4th script to auto build, but depends on what platform you are currently running it:

`package.json` scripts:
```json
"build": "cross-exec win32=\"npm run build:win32\" linux=\"npm run build:linux\" darwin=\"npm run build:darwin\"",
"build:win32": "echo \"Win32 build process\"",
"build:linux": "echo \"Linux build process\"",
"build:darwin": "echo \"Mac OS build process\""
```

Script finds by `proccess.platform` which is the current platform. Then executes command value passed by argument with the same platform name. This gives you ability to **auto** build based on what platform you are working right now.

# License
[MIT License](LICENSE)
