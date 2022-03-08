import React from 'react'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import PlpContainer from './components/plpContainer'
import PlpProvider from './plp-provider'
import { createTheme, generateClassName } from './theme'

export default function Root(props) {
  const [darkMode, setDarkMode] = React.useState(false)
  const theme = React.useMemo(() => createTheme(darkMode), [darkMode])

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side-plp')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    window.addEventListener('mode-event', handleThemeEvent)
    return () => {
      window.removeEventListener('mode-event', handleThemeEvent)
    }
  }, [])

  const handleThemeEvent = e => {
    if (typeof e.detail !== 'undefined') {
      setDarkMode(e.detail)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        {/* Plp Provider */}
        <PlpProvider products={props.products}>
          <PlpContainer />
        </PlpProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}
