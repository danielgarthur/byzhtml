import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import { createRequire } from 'node:module';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const require = createRequire(import.meta.url);
const lib = require('./package.json');

const outputFileName = 'byzhtml';
const name = 'byzhtml';

const banner = `// ${name} v${lib.version}`;

export default {
  input: './index.js',
  output: [
    {
      file: `./dist/${outputFileName}.js`,
      format: 'iife',
      name,
      banner,
    },
    {
      file: `./dist/${outputFileName}.min.js`,
      format: 'iife',
      name,
      plugins: [terser()],
      banner,
    },
  ],
  plugins: [json(), nodeResolve()],
};
