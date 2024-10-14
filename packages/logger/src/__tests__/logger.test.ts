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

import Logger from '../Logger';
import {LoggerPlugin} from '../types/LoggerPlugin';
import {LogLevel} from '../types/LogLevel';

describe('Logger', (): void => {
  let mockPlugin: LoggerPlugin;
  let logger: Logger;

  beforeEach((): void => {
    mockPlugin = {
      debug: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
      log: jest.fn(),
      warn: jest.fn(),
    };
    logger = new Logger(mockPlugin);
  });

  afterEach((): void => {
    // Reset mocks after each test
    jest.restoreAllMocks();
  });

  it('should call the debug method on the plugin with the correct message', (): void => {
    const message: string = 'debug message';
    const debugSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(mockPlugin, 'debug')
      .mockImplementation(() => {});

    // eslint-disable-next-line testing-library/no-debugging-utils
    logger.debug(message);
    expect(debugSpy).toHaveBeenCalledWith(message);
    debugSpy.mockRestore();
  });

  it('should call the error method on the plugin with the correct message', (): void => {
    const message: string = 'error message';
    const errorSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(mockPlugin, 'error')
      .mockImplementation(() => {});

    logger.error(message);
    expect(errorSpy).toHaveBeenCalledWith(message);
    errorSpy.mockRestore();
  });

  it('should call the info method on the plugin with the correct message', (): void => {
    const message: string = 'info message';
    const infoSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(mockPlugin, 'info')
      .mockImplementation(() => {});

    logger.info(message);
    expect(infoSpy).toHaveBeenCalledWith(message);
    infoSpy.mockRestore();
  });

  it('should call the log method on the plugin with the correct message', (): void => {
    const message: string = 'log message';
    const logLevels: {level: LogLevel}[] = [{level: 'info'}, {level: 'warn'}, {level: 'error'}, {level: 'debug'}];

    logLevels.forEach(({level}: {level: LogLevel}): void => {
      const logSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
        .spyOn(mockPlugin, 'log')
        .mockImplementation(() => {});

      logger.log(level, message);
      expect(logSpy).toHaveBeenCalledWith(level, message);
      logSpy.mockRestore();
    });
  });

  it('should call the warn method on the plugin with the correct message', (): void => {
    const message: string = 'warn message';
    const warnSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]> = jest
      .spyOn(mockPlugin, 'warn')
      .mockImplementation(() => {});

    logger.warn(message);
    expect(warnSpy).toHaveBeenCalledWith(message);
    warnSpy.mockRestore();
  });
});
