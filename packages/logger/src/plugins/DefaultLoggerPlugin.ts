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
import isBrowser from '../utils/isBrowser';
import isServer from '../utils/isServer';
import ConsoleLoggerPlugin from './ConsoleLoggerPlugin';

export default class ServerLoggerPlugin implements LoggerPlugin {
  private plugin: LoggerPlugin;

  constructor() {
    if (isBrowser) {
      this.plugin = new ConsoleLoggerPlugin();
    } else if (isServer) {
      this.plugin = new ServerLoggerPlugin();
    } else {
      throw new Error('Unknown environment');
    }
  }

  log(level: LogLevel, message: string, ...args: unknown[]): void {
    this.plugin.log(level, message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    this.plugin.info(message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.plugin.warn(message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    this.plugin.error('error', message, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    if (!this.plugin.debug) {
      return;
    }

    this.plugin.debug('debug', message, ...args);
  }
}
