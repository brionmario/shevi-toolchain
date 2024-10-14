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

const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const {terser} = require('rollup-plugin-terser');
const path = require('path');

const pkg = require('./package.json');

const LIB_TSCONFIG = path.resolve(__dirname, 'tsconfig.lib.json');
const INPUT = path.resolve(__dirname, 'src', 'index.ts');
const MERGED_TYPINGS_INPUT = path.resolve(__dirname, path.join('dist', 'esm', 'types', 'index.d.ts'));
const MERGED_TYPINGS_OUTPUT = path.resolve(__dirname, path.join('dist', 'index.d.ts'));

module.exports = [
  {
    cache: false,
    input: INPUT,
    output: [
      {
        file: pkg.main,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: pkg.commonjs,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        exportConditions: ['node'],
      }),
      commonjs(),
      typescript({tsconfig: LIB_TSCONFIG}),
      terser(),
    ],
  },
  {
    cache: false,
    external: [/\.s?css$/],
    input: MERGED_TYPINGS_INPUT,
    output: [{file: MERGED_TYPINGS_OUTPUT, format: 'esm'}],
    plugins: [dts.default()],
  },
];
