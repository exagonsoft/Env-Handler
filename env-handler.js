const { getEOL } = require('./utils/utilFunctions');
const fs = require('fs');

function loadEnvVariables(filePath) {
  try {
    const EOL = getEOL();
    const envFile = fs.readFileSync(filePath, 'utf8');
    const lines = envFile.split(EOL);

    lines.forEach((line) => {
      const [key, value] = line.split('=');
      if (key && value) {
        process.env[key.trim()] = value.trim();
      }
    });
  } catch (error) {
    console.error(`Error loading environment variables: ${error.message}`);
  }
}

function loadEnv(options = {}) {
  const envFilePath = options.path || '.env';
  loadEnvVariables(envFilePath);
  return process.env;
}

module.exports = loadEnv;
