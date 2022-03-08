import React from 'react'
import ReactDOMServer from 'react-dom/server.js'
import Root from './root.component'
import { ServerStyleSheets } from '@material-ui/core/styles'

// // import {parse} from 'url'
export const getResponseHeaders = (props) => {
  return {
    'x-tst': 1,
  }
}

export async function serverRender(props) {
  const sheets = new ServerStyleSheets({})
  // fetch pdp data server side here
  // console.log(props)
  // const pathname = props.pathname ? props.pathname.split('/') : null
  // const id = pathname[pathname.length - 1]
  // console.log('id', id)
  // const product = getProduct(id)
  const content = sheets.collect(<Root />)
  const htmlStream = ReactDOMServer.renderToString(content)

  // Grab the CSS from the sheets.
  const css = sheets.toString()
  const assets = `<style id="jss-server-side-pdp">${css}</style>`
  return { content: htmlStream, assets: '' }
}
