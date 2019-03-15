module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', { useBuiltIns: 'usage' }], '@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: 'css'
      }
    ]
  ]
};
