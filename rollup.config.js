import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
export default {
  input: 'build/tsc/index.js',
  output: {
    file: 'build/rollup/bundle.js',
    format:'iife'
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
  ]
};