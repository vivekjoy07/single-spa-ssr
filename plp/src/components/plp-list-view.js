import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Stats from './Stats/Stats'
import Container from '@material-ui/core/Container'

import Filter from './Filter'
import useProducts from '../use-products'
import ProductItem from './productItem'
import { useState } from 'react'
import { useEffect } from 'react'

export default () => {
  const { products } = useProducts()

  return (
    <main>
      <Container style={{ marginTop: 16 }}>
        <Stats />
        <Box mt={4} mb={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Filter />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Box component={'section'}>
                <Grid container spacing={2}>
                  {products.map(product => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                      <ProductItem product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  )
}
