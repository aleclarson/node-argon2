
var path = require('path');

var binaryName = [
  process.platform, '-',
  process.arch, '-',
  process.versions.modules
].join('');

var binaryPath = path.join(__dirname, 'vendor', binaryName, 'argon2.node');

module.exports = require(binaryPath);
