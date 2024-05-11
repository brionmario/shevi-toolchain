/**
 * MIT License
 *
 * Copyright (c) 2022, Brion Mario.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Logger class for logging messages.
 */
class Logger {
  private pluginManager: PluginManager;
  private category: string;

  /**
   * Constructs a new Logger instance.
   * @param name The name of the category to log to.
   */
  constructor(name: string) {
    if (!name) {
      throw new Error('No category provided.');
    }
    this.category = name;
    this.pluginManager = new PluginManager();
  }

  /**
   * Gets the log level for the logger.
   * @returns The log level.
   */
  get level(): string {
    // Implementation to get log level
    return 'info'; // Placeholder implementation
  }

  /**
   * Sets the log level for the logger.
   * @param level The log level to set.
   */
  set level(level: string) {
    // Implementation to set log level
    // Example: this.logger.setLevel(level);
  }

  /**
   * Logs a message at the specified log level.
   * @param level The log level.
   * @param message The log message.
   */
  log(level: string, message: string): void {
    this.pluginManager.handleLog(level, message);
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  /**
   * Logs a debug message.
   * @param message The debug message.
   */
  debug(message: string): void {
    this.log('debug', message);
  }

  /**
   * Logs a trace message.
   * @param message The trace message.
   */
  trace(message: string): void {
    this.log('trace', message);
  }

  /**
   * Logs an info message.
   * @param message The info message.
   */
  info(message: string): void {
    this.log('info', message);
  }

  /**
   * Logs a warning message.
   * @param message The warning message.
   */
  warn(message: string): void {
    this.log('warn', message);
  }

  /**
   * Logs an error message.
   * @param message The error message.
   */
  error(message: string): void {
    this.log('error', message);
  }
}

export default Logger;
