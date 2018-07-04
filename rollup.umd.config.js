import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './utils/index.js',
    output: {
        name: 'onap-ui',
        file: './lib/index.umd.js',
        format: 'umd',
        exports: 'named',
    },
    plugins: [
        babel({
          exclude: 'node_modules/**',
          babelrc: false
        }),
        json(),
        nodeResolve({ jsnext: true, main: true}),
        commonjs(),
      ]
};
