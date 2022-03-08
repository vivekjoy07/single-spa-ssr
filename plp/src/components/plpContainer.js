import React from 'react'
import { BrowserRouter, Route, StaticRouter, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Container from '@material-ui/core/Container'

import PlpView from './plp-list-view'

import useProducts from '../use-products'
const isBrowser = () => typeof window !== 'undefined'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(90vh - 2px)',
    position: 'relative',
  },
}))

const PokeView = () => {
  const classes = useStyles()
  const { loading } = useProducts()
  return (
    <div className={classes.root}>
      {loading && <LinearProgress color="secondary" />}
      {!loading && <div style={{ height: '4px' }} />}
      <Container style={{ marginTop: 16 }}>
        <Switch>
          <Route exact path="/">
            <PlpView />
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
      <BrowserRouter basename="/plp">
        <PokeView />
      </BrowserRouter>
    )
  }
  return (
    <StaticRouter basename="/plp">
      <PokeView />
    </StaticRouter>
  )
}
