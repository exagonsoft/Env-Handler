const getEOL = require('./utils/utilFunctions');
const fileio = require('./build/Release/fileio.node');

function loadEnvVariables(filePath) {
  try {
    const EOL = getEOL();
    const envFileContent = fileio.readFile(filePath);
    const lines = envFileContent.split(EOL);

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
