/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario
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

import {LogLevel} from './LogLevel';

export interface LoggerPlugin {
  /**
   * Optional debug level logging.
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  debug?(message: string, ...args: unknown[]): void;

  /**
   * Error level logging.
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  error(message: string, ...args: unknown[]): void;

  /**
   * Info level logging.
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  info(message: string, ...args: unknown[]): void;

  /**
   * General log function for any level of logging.
   * @param level - The log level
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  log(level: LogLevel, message: string, ...args: unknown[]): void;

  /**
   * Warn level logging.
   * @param message - The log message
   * @param args - Additional arguments to log
   */
  warn(message: string, ...args: unknown[]): void;
}
