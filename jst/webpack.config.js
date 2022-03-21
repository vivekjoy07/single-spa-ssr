const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')
const path = require('path')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'react-mf',
    projectName: 'jst',
    webpackConfigEnv,
    argv,
  })

  return [
    merge(defaultConfig, {
      // modify the webpack config however you'd like to by adding to this object
    }),

    merge(defaultConfig, {
      // modify the webpack config however you'd like to by adding to this object
      target: 'node',
      mode: 'development',
      entry: path.resolve(process.cwd(), 'src/node-entry.js'),
      output: {
        library: 'mf',
        libraryTarget: 'var',
        filename: 'server.mjs',
      },
      externals: defaultConfig.externals.concat(/react-dom\/.+/).concat(/^@isomorphic-mf\/?.*$/),
      // plugins: [
      //   new EsmWebpackPlugin({
      //     moduleExternals: true
      //   })
      // ]
    }),
  ]
}
