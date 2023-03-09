import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const outputFileName = 'byzhtml';
const name = 'byzhtml';

export default {
  input: './index.js',
  output: [
    {
      file: `./dist/${outputFileName}.js`,
      format: 'iife',
      name,
    },
    {
      file: `./dist/${outputFileName}.min.js`,
      format: 'iife',
      name,
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
