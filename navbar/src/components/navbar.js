import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { navigateToUrl } from 'single-spa'

import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import TrainIcon from '@material-ui/icons/Train'
import DetailsIcon from '@material-ui/icons/Details'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import GitHubIcon from '@material-ui/icons/GitHub'
import { useState } from 'react'
import { useEffect } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appTitle: {
    flexGrow: 1,
  },
  sectionButtons: {
    display: 'flex',
    marginRight: theme.spacing(2),
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      'box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
    },
  },
}))

export default function NavBar({ title, themeChange }) {
  const theme = useTheme()
  const classes = useStyles()
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.addEventListener('add-to-cart', function(e) {
      console.log(e.detail) // Prints "Example of an event"
      setCount(count => count + e.detail)
    })
  }, [])
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="home"
            href="/"
            onClick={navigateToUrl}
          >
            <HomeIcon />
          </IconButton>
          <div className={classes.appTitle}>
            <Typography variant="h6">{title}</Typography>
          </div>
          <div className={classes.sectionButtons}>
            {/* <IconButton aria-label="darkMode" color="inherit" onClick={() => themeChange()}>
              {theme.palette.type !== 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton> */}
            <IconButton
              aria-label="Pokemon Trainers"
              color="inherit"
              href="/plp"
              onClick={navigateToUrl}
            >
              <TrainIcon />
            </IconButton>

            <IconButton
              aria-label="Pokemon Trainers"
              color="inherit"
              href="/pdp"
              onClick={navigateToUrl}
            >
              <DetailsIcon />
            </IconButton>
            <Typography variant="h6">{count}</Typography>
            <IconButton
              aria-label="github"
              color="inherit"
              // target="_blank"
              // href="https://github.com/isomorphic-microfrontends"
              href="/tst"
              onClick={navigateToUrl}
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}
