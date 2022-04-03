/*!
 * cross-exec v1.0.0
 * Copyright (c) 2022 Azat Ahmedov <payalord@gmail.com>
 * MIT License
 */
const command = process.argv.find(e => e.includes(process.platform))?.split('=')[1]
if (command) {
    const { exec } = require('child_process')
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(error)
            return
        }
        if (stdout.length) console.log(stdout)
        if (stderr.length) console.error(stderr)
    })
}
