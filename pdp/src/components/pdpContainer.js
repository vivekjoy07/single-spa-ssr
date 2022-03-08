import React from 'react'
import { BrowserRouter, Route, StaticRouter, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Container from '@material-ui/core/Container'

import PdpView from './pdpView'

import useProduct from '../use-product'

const isBrowser = () => typeof window !== 'undefined'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(90vh - 2px)',
    position: 'relative',
  },
}))

const PdpMain = () => {
  const classes = useStyles()
  const { loading } = useProduct()
  return (
    <div className={classes.root}>
      {loading && <LinearProgress color="secondary" />}
      {!loading && <div style={{ height: '4px' }} />}
      <Container style={{ marginTop: 16 }}>
        <Switch>
          <Route exact path="/">
            <PdpView />
          </Route>
          {/* <Route path="/:id/:name">
            <PokeDetailView />
          </Route> */}
        </Switch>
      </Container>
    </div>
  )
}

export default function Pokemons() {
  if (isBrowser()) {
    return (
      <BrowserRouter basename="/pdp">
        <Route path="/:id">
          <PdpMain />
        </Route>
      </BrowserRouter>
    )
  }
  return (
    <StaticRouter basename="/pdp">
      <Route path="/:id">
        <PdpMain />
      </Route>
    </StaticRouter>
  )
}
