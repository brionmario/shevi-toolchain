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

import Logger, {ILogger} from '../logger';

describe('Logger', () => {
  let mockBackend: any;
  let logger: ILogger;

  beforeEach(() => {
    mockBackend = {
      debug: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
    };
    logger = new Logger(mockBackend);
  });

  it('should call the debug method on the backend with the correct message', () => {
    const message: string = 'debug message';
    // eslint-disable-next-line testing-library/no-debugging-utils
    logger.debug(message);
    expect(mockBackend.debug).toHaveBeenCalledWith(message);
  });

  it('should call the error method on the backend with the correct message', () => {
    const message: string = 'error message';
    logger.error(message);
    expect(mockBackend.error).toHaveBeenCalledWith(message);
  });

  it('should call the info method on the backend with the correct message', () => {
    const message: string = 'info message';
    logger.info(message);
    expect(mockBackend.info).toHaveBeenCalledWith(message);
  });

  it('should call the warn method on the backend with the correct message', () => {
    const message: string = 'warn message';
    logger.warn(message);
    expect(mockBackend.warn).toHaveBeenCalledWith(message);
  });
});
