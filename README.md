# Env-Handler

`Env-Handler` is a lightweight and efficient Node.js module designed to simplify environment variable management in your applications. It provides a modern alternative to popular packages like `dotenv` while ensuring seamless integration with modern JavaScript frameworks and build tools.

## Key Features

- **Synchronous Environment Loading:** Load environment variables synchronously without blocking the event loop, ensuring smooth and predictable application startup.

- **Webpack and Browser Compatibility:** Designed to work seamlessly with modern bundlers like Webpack and in browser environments, allowing you to manage environment variables consistently across different platforms.

- **Flexible Configuration:** Customize the module's behavior according to your project requirements, offering flexibility without unnecessary complexity.

## Usage Example

```javascript
import { loadEnv } from 'env-handler';

// Load environment variables synchronously
loadEnv();

// Access loaded environment variables
console.log(process.env.API_KEY);
console.log(process.env.DATABASE_URL);
```

# Installation
To install env-handler, use npm:

```bash
npm install env-handler
```
# Contributing

We welcome contributions from the community! If you have an idea for improvement, a bug fix, or a new feature, feel free to open an issue or submit a pull request.

# License

This module is licensed under the MIT License. See the LICENSE file for details.

# Links
Documentation
Issue Tracker
Pull Requests

**Let's simplify environment variable handling in Node.js applications together!** ✨

