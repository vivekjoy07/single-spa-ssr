const webpackConfigSingleSpaTs = require('./webpack-ts.config')
const webpackConfigSingleSpaReact = require('./webpack-react.config')

module.exports = webpackConfigSingleSpaReactTs

function webpackConfigSingleSpaReactTs(opts) {
  opts.framework = 'react'
  const reactConfig = webpackConfigSingleSpaReact(opts)
  return webpackConfigSingleSpaTs.modifyConfig(opts, reactConfig)
}
