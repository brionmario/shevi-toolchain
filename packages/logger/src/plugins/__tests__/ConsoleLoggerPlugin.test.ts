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

import ConsoleLoggerPlugin from '../ConsoleLoggerPlugin';
import {LogLevel} from '../../types/LogLevel';

describe('ConsoleLoggerPlugin', (): void => {
  let consoleLogger: ConsoleLoggerPlugin;

  beforeEach((): void => {
    consoleLogger = new ConsoleLoggerPlugin();
  });

  afterEach((): void => {
    // Reset mocks after each test
    jest.restoreAllMocks();
  });

  it('should log an info message to console', (): void => {
    const consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(console, 'info')
      .mockImplementation(() => {});

    consoleLogger.info('Info message');
    expect(consoleSpy).toHaveBeenCalledWith('Info message');
    consoleSpy.mockRestore();
  });

  it('should log a warning message to console', (): void => {
    const consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    consoleLogger.warn('Warning message');
    expect(consoleSpy).toHaveBeenCalledWith('Warning message');
    consoleSpy.mockRestore();
  });

  it('should log an error message to console', (): void => {
    const consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    consoleLogger.error('Error message');
    expect(consoleSpy).toHaveBeenCalledWith('Error message');
    consoleSpy.mockRestore();
  });

  it('should log a debug message to console', (): void => {
    const consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(console, 'debug')
      .mockImplementation(() => {});

    // eslint-disable-next-line testing-library/no-debugging-utils
    consoleLogger.debug('Debug message');
    expect(consoleSpy).toHaveBeenCalledWith('Debug message');
    consoleSpy.mockRestore();
  });

  it('should log a message based on log level', (): void => {
    const logLevels: {level: LogLevel}[] = [{level: 'info'}, {level: 'warn'}, {level: 'error'}, {level: 'debug'}];

    logLevels.forEach(({level}: {level: LogLevel}) => {
      const consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
        .spyOn(console, level)
        .mockImplementation(() => {});

      consoleLogger.log(level, `${level} message`);
      expect(consoleSpy).toHaveBeenCalledWith(`${level} message`);
      consoleSpy.mockRestore();
    });
  });
});
