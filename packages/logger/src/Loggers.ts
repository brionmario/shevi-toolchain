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

import {LogLevel} from './types/LogLevel';
import {LoggerPlugin} from './types/LoggerPlugin';

export default class Logger {
  private plugin: LoggerPlugin;

  constructor(plugin: LoggerPlugin) {
    this.plugin = plugin;
  }

  /**
   * Logs a message at the specified log level.
   * @param level - Log level (info, warn, error, etc.)
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  log(level: LogLevel, message: string, ...args: unknown[]): void {
    this.plugin.log(level, message, ...args);
  }

  /**
   * Logs an info message.
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  info(message: string, ...args: unknown[]): void {
    this.plugin.info(message, ...args);
  }

  /**
   * Logs a warning message.
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  warn(message: string, ...args: unknown[]): void {
    this.plugin.warn(message, ...args);
  }

  /**
   * Logs an error message.
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  error(message: string, ...args: unknown[]): void {
    this.plugin.error(message, ...args);
  }

  /**
   * Logs a debug message (optional for some plugins).
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  debug(message: string, ...args: unknown[]): void {
    if (this.plugin.debug) {
      this.plugin.debug(message, ...args);
    }
  }
}
