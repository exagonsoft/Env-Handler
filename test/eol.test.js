const chai = require('chai');
const mockRequire = require('mock-require');
const expect = chai.expect;

describe('getEOL function', () => {
  let getEOL;

  beforeEach(() => {
    mockRequire('../src/getEOL', (platform) => {
      return platform === 'win32' ? '\r\n' : platform === 'darwin' ? '\r' : '\n';
    });

    getEOL = require('../src/getEOL');
  });

  afterEach(() => {
    mockRequire.stopAll();
  });

  it('should return "\\r\\n" on Windows', () => {
    const eol = getEOL('win32');
    expect(eol).to.equal('\r\n');
  });

  it('should return "\\r" on macOS', () => {
    const eol = getEOL('darwin');
    expect(eol).to.equal('\r');
  });

  it('should return "\\n" on other platforms', () => {
    const eol = getEOL('linux');
    expect(eol).to.equal('\n');
  });
});
