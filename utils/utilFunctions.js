function getEOL() {
  const isWindows = process.platform === 'win32';
  const isMacOS = process.platform === 'darwin';
  return isWindows ? '\r\n' : isMacOS ? '\r' : '\n';
}

module.exports = getEOL;
