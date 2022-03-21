const webpackConfigSingleSpa = require('webpack-config-single-spa')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modifyConfig = (opts, webpackConfig) => {
  const merge = webpackMerge({
    customizeArray(a, b, key) {
      if (key === 'plugins' || key === 'resolve.extensions') {
        return a.concat(b)
      }
    },
  })

  return merge(webpackConfig, {
    entry: webpackConfig.entry.replace('.js', opts.framework === 'react' ? '.tsx' : '.ts'),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        },
      ],
    },
    plugins: [
      opts.webpackConfigEnv && opts.webpackConfigEnv.analyze
        ? false
        : new ForkTsCheckerWebpackPlugin({
            typescript: {
              mode: 'write-references',
            },
          }),
    ].filter(Boolean),
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
  })
}

function webpackConfigSingleSpaTypescript(opts) {
  const config = webpackConfigSingleSpa(opts)
  return modifyConfig(opts, config)
}

webpackConfigSingleSpaTypescript.modifyConfig = modifyConfig

module.exports = webpackConfigSingleSpaTypescript
