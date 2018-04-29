/**
 * Module exports
 */

var exports = module.exports;

exports.tmpPath = tmpPath;
exports.parseExtension = parseExtension;

/**
 * Utilities
 */

function tmpPath (filename, format) {
	if (!format) format = 'jpg';
	
	var filename = Math.random().toString(36).substring(7);

	return '/tmp/' + filename + '.' + format;
}

function parseExtension (path) {
	return /\.([a-z0-9]{3,5})$/i.exec(path)[1];
}