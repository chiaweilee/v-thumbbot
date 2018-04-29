const prompt = require('prompt')
const Thumbbot = require('./thumbot')
const path = require('path')

prompt.start()
prompt.get(['uri', 'duration'], function (undefined, {uri, duration}) {
    // demo test
    if (!uri) uri = 'http://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4'
    if (!duration) duration = 10
    // core
    !!(new Thumbbot(uri)).seek(duration)
})
