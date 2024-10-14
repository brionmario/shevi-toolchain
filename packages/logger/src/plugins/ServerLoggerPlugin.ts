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

import {LoggerPlugin} from '../types/LoggerPlugin';
import {LogLevel} from '../types/LogLevel';

/**
 * ServerLoggerPlugin class implements the LoggerPlugin interface
 * and provides methods to log messages to the server's stdout and stderr.
 */
export default class ServerLoggerPlugin implements LoggerPlugin {
  private output: NodeJS.Process = process;

  /**
   * Logs a message with the specified log level.
   * @param level - The log level (e.g., 'info', 'warn', 'error', 'debug').
   * @param message - The message to log.
   * @param args - Additional arguments to log.
   */
  log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (level === 'error') {
      this.writeToStderr(level, message, ...args);
      return;
    }

    this.writeToStdout(level, message, ...args);
  }

  /**
   * Logs an informational message.
   * @param message - The message to log.
   * @param args - Additional arguments to log.
   */
  info(message: string, ...args: unknown[]): void {
    this.writeToStdout('info', message, ...args);
  }

  /**
   * Logs a warning message.
   * @param message - The message to log.
   * @param args - Additional arguments to log.
   */
  warn(message: string, ...args: unknown[]): void {
    this.writeToStdout('warn', message, ...args);
  }

  /**
   * Logs an error message.
   * @param message - The message to log.
   * @param args - Additional arguments to log.
   */
  error(message: string, ...args: unknown[]): void {
    this.writeToStderr('error', message, ...args);
  }

  /**
   * Logs a debug message.
   * @param message - The message to log.
   * @param args - Additional arguments to log.
   */
  debug(message: string, ...args: unknown[]): void {
    this.writeToStdout('debug', message, ...args);
  }

  /**
   * Writes a message to stdout with the specified log level.
   * @param level - The log level (e.g., 'info', 'debug').
   * @param message - The message to log.
   * @param args - Additional arguments to log.
   */
  private writeToStdout(level: string, message: string, ...args: unknown[]): void {
    const formattedArgs: string = args.length ? ` ${args.join(' ')}` : '';
    this.output.stdout.write(`[${level.toUpperCase()}] ${message}${formattedArgs}`);
  }

  /**
   * Writes a message to stderr with the specified log level.
   * @param level - The log level (e.g., 'warn', 'error').
   * @param message - The message to log.
   * @param args - Additional arguments to log.
   */
  private writeToStderr(level: string, message: string, ...args: unknown[]): void {
    const formattedArgs: string = args.length ? ` ${args.join(' ')}` : '';
    this.output.stderr.write(`[${level.toUpperCase()}] ${message}${formattedArgs}`);
  }
}
