---
"@shevi/logger": minor
---

Implement a pluggable logger utility to enable easy logging for frontend developers. This utility should provide various logging levels (info, warn, error) and a flexible API for customization. It should also allow for future extension, such as integrating with third-party logging services or formats.

This feature will introduce a logger utility that:
- Supports logging levels: `info`, `warn`, `error`
- Has a modular, pluggable architecture for custom logging extensions
- Can be used throughout frontend applications to maintain consistent logging practices
- Extensible to support future needs like integration with external logging platforms or advanced logging features

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
