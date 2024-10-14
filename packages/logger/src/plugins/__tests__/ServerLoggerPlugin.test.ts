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

import ServerLoggerPlugin from '../ServerLoggerPlugin';
import {LogLevel} from '../../types/LogLevel';

describe('ServerLoggerPlugin', (): void => {
  let serverLogger: ServerLoggerPlugin;
  let stdoutSpy: jest.SpyInstance;
  let stderrSpy: jest.SpyInstance;

  beforeEach((): void => {
    serverLogger = new ServerLoggerPlugin();
    stdoutSpy = jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
    stderrSpy = jest.spyOn(process.stderr, 'write').mockImplementation(() => true);
  });

  afterEach((): void => {
    jest.restoreAllMocks();
  });

  it('should log an info message to stdout', (): void => {
    serverLogger.info('Info message', 'arg1', 'arg2');
    expect(stdoutSpy).toHaveBeenCalledWith('[INFO] Info message arg1 arg2');
  });

  it('should log a warning message to stderr', (): void => {
    serverLogger.warn('Warning message', 'arg1', 'arg2');
    expect(stdoutSpy).toHaveBeenCalledWith('[WARN] Warning message arg1 arg2');
  });

  it('should log an error message to stderr', (): void => {
    serverLogger.error('Error message', 'arg1', 'arg2');
    expect(stderrSpy).toHaveBeenCalledWith('[ERROR] Error message arg1 arg2');
  });

  it('should log a debug message to stdout', (): void => {
    // eslint-disable-next-line testing-library/no-debugging-utils
    serverLogger.debug('Debug message', 'arg1', 'arg2');
    expect(stdoutSpy).toHaveBeenCalledWith('[DEBUG] Debug message arg1 arg2');
  });

  it('should log a message based on log level to stdout or stderr', (): void => {
    const logLevels: {level: LogLevel; writeStream: jest.SpyInstance}[] = [
      {level: 'info', writeStream: stdoutSpy},
      {level: 'warn', writeStream: stdoutSpy},
      {level: 'error', writeStream: stderrSpy},
      {level: 'debug', writeStream: stdoutSpy},
    ];

    logLevels.forEach(({level, writeStream}: {level: LogLevel; writeStream: jest.SpyInstance}) => {
      serverLogger.log(level, `${level} message`);
      expect(writeStream).toHaveBeenCalledWith(`[${level.toUpperCase()}] ${level} message`);
    });
  });

  it('should log without additional arguments', (): void => {
    serverLogger.info('Info message');
    expect(stdoutSpy).toHaveBeenCalledWith('[INFO] Info message');

    serverLogger.warn('Warning message');
    expect(stdoutSpy).toHaveBeenCalledWith('[WARN] Warning message');
  });
});
