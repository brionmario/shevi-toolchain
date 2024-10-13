<p align="center" style="color: #343a40">
  <h1 align="center">@shevi/logger 💖</h1>
</p>

<p align="center" style="font-size: 1.2rem;">A
<strong style="color: #F0F">pluggable</strong>
 logging utility for frontend developers.</p>
 
<div align="center">
  <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@shevi/logger">
  <img alt="npm" src="https://img.shields.io/npm/dw/@shevi/logger">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a>
</div>

## Installation

To install `@shevi/logger`, run the following command:

```sh
# With npm
npm install @shevi/logger

# With pnpm
pnpm add @shevi/logger

# With yarn
yarn add @shevi/logger
```

## Usage

Here's an example of how to use `@shevi/logger`:

### Basic Usage

```ts
import Logger from '@shevi/logger';

// Initialize the logger
const logger = new Logger({
  level: 'info', // Logging level (e.g., 'info', 'warn', 'error')
  prefix: '[App]', // Optional prefix for each log message
  format: 'json',  // Optional format (e.g., 'text', 'json')
});

// Log messages at different levels
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

// Example with dynamic data
logger.info('User logged in', { userId: '1234' });
```

### Advanced Usage with Plugins

You can extend the logger by adding custom plugins. Here's how you can add a plugin to handle log storage:

```ts
import Logger from '@shevi/logger';

// Define a custom plugin
const customPlugin = {
  handle(log) {
    // Save the log to a database or send it to an external service
    console.log('Custom plugin handling log:', log);
  },
};

// Initialize the logger with the plugin
const logger = new Logger({
  plugins: [customPlugin],
});

// Log a message
logger.info('This log will be handled by the custom plugin');
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
