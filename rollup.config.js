import babel from 'rollup-plugin-babel'

export default {
  input: 'Dump.js',
  output: {
    file: './index.js',
    format: 'cjs',
    exports: 'named',
    external: ['react'],
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
