const chai = require('chai');
const expect = chai.expect;
const loadEnv = require('../env-handler');

beforeEach(() => {
  // Clear process.env before each test
  process.env = {};
});

describe('loadEnv', () => {
  it('should load environment variables from a file', () => {
    const env = loadEnv({ path: './test/.env' });
    expect(env.PORT).to.equal('3000');
  });

  it('should handle errors and return undefined', () => {
    const env = loadEnv({ path: '.exe' });
    expect(env.PORT).to.deep.equal(undefined);
  });
});
