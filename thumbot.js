/**
 * Module dependencies
 */

const exec = require("node-cmd")

const parseExtension = function (path) {
    return /\.([a-z0-9]{3,5})/i.exec(path);
}

/**
 * Thumbbot
 */

const InitThumbbot = function (uri) {
    return new Thumbbot(uri)
}

const Thumbbot = function Thumbbot(path) {
    this.path = path
    this.options = {}
    const [fullname, name, ext] = /\/([a-z0-9]+)\.([a-z0-9]{3,5})[\?|$]/i.exec(this.path) || ['noname.jpg', 'noname', 'jpg']
    this.fullname = fullname
    this.name = name
    this.ext = ext
    return this
}

Thumbbot.prototype.seek = function (duration) {
    for (let i = 0; i <= duration || 0; i++) {
        const s = i * 60 + 10
        this.saveVideo(s, __dirname + '/tmp/' + this.name + '_' + s + '.jpg')
    }
}

Thumbbot.prototype.saveVideo = function (seek, destPath) {
    var command = "ffmpeg -i \"" + this.path + "\" -ss \"" + seek + "\" -vframes 1 \"" + destPath + "\""
    console.log(command)

    return exec.get(command, function(err, data, stderr){
        if (err) {
            console.log(err)
        }
        if (stderr) {
            console.log(stderr)
        }
        if (data) {
            console.log(data)
        }
    })
}


/**
 * Module exports
 */

module.exports = InitThumbbot
