import React from 'react'
import { BrowserRouter, Redirect, Route, StaticRouter } from 'react-router-dom'
import { createMuiTheme, ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { generateClassName } from './theme'
import Title from './components/title/Title'
// import theme from "./theme";

const isBrowser = () => typeof window !== 'undefined'

export default function Root(props) {
  const inputRef = React.useRef(null)
  const [darkMode, setDarkMode] = React.useState(false)
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  )

  // TODO - This needs to be handled a bit differently I guess
  // adding this causes the client side to break
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const handleDarkMode = () => {
    const event = new CustomEvent('mode-event', {
      detail: !darkMode,
      bubbles: true,
      cancelable: false,
      composed: true, // makes the event jump shadow DOM boundary); */
    })
    inputRef.current.dispatchEvent(event)
    setDarkMode(!darkMode)
  }

  const RootChildren = () => (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <section>
            <Title label="TS TEST" color="red" />
          </section>
        </ThemeProvider>
      </StylesProvider>
    </>
  )

  if (isBrowser()) {
    return (
      <BrowserRouter basename="/">
        <RootChildren />
      </BrowserRouter>
    )
  }
  return (
    <StaticRouter basename="/">
      <RootChildren />
    </StaticRouter>
  )
}
