const webpackMerge = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

const path = require('path')
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin')
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'isomorphic-mf',
    projectName: 'tst',
    webpackConfigEnv,
    argv,
  })

  const serverConfig = singleSpaDefaults({
    orgName: 'isomorphic-mf',
    projectName: 'tst',
    webpackConfigEnv,
    argv,
  })

  defaultConfig.plugins = defaultConfig.plugins.filter(
    (p) => p.constructor.name !== 'CleanWebpackPlugin'
  )
  serverConfig.plugins = serverConfig.plugins.filter(
    (p) => p.constructor.name !== 'CleanWebpackPlugin'
  )

  return [
    webpackMerge.smart(defaultConfig, {
      plugins: [
        // new SystemJSPublicPathWebpackPlugin({
        //   // optional: defaults to 1
        //   // If you need the webpack public path to "chop off" some of the directories in the current module's url, you can specify a "root directory level". Note that the root directory level is read from right-to-left, with `1` indicating "current directory" and `2` indicating "up one directory":
        //   rootDirectoryLevel: 1,
        //   // ONLY NEEDED FOR WEBPACK 1-4. Not necessary for webpack@5
        //   systemjsModuleName: '@isomorphic-mf/tst',
        // }),
      ],
    }),
    webpackMerge.smart(serverConfig, {
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
      plugins: [
        new EsmWebpackPlugin({
          moduleExternals: true,
        }),
      ],
    }),
  ]

  // return merge(defaultConfig, {
  //   // modify the webpack config however you'd like to by adding to this object
  // })
}
