import React from 'react'
import ReactDOMServer from 'react-dom/server.js'
import Root from './root.component.js'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { getProducts } from './api'

export const getResponseHeaders = props => {
  return {
    'x-plp': 1,
  }
}

export async function serverRender(props) {
  const sheets = new ServerStyleSheets({})
  // fetch pdp data server side here
  const products = getProducts()
  const content = sheets.collect(<Root products={products} {...props} />)
  const htmlStream = ReactDOMServer.renderToString(content)

  // Grab the CSS from the sheets.
  const css = sheets.toString()
  const assets = `<style id="jss-server-side-plp">${css}</style>`
  return { content: htmlStream, assets }
}
