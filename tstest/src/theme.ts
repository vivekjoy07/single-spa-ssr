import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    /*    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    } */
  },
})

export default theme

export const generateClassName = createGenerateClassName({
  productionPrefix: 'navbar-',

  // seed: "pk-"
})
