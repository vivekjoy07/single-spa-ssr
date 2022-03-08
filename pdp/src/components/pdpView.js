import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
// import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles'
import useProduct from '../use-product'
// import { priceFormat } from '@vivekjoy07/mfe-utils'

const useStyles = makeStyles(theme => ({
  productImage: {
    // width: '100%',
    height: 400,
    maxWidth: '100%',
  },
  quantityButton: {
    border: 'none',
    fontSize: 24,
  },
}))
const PdpContainer = () => {
  const { product } = useProduct()
  const classes = useStyles()

  const addToCart = () => {
    // Create the event
    var event = new CustomEvent('add-to-cart', { detail: 1 })

    // Dispatch/Trigger/Fire the event
    document.dispatchEvent(event)
  }
  return (
    <main>
      <Container>
        <Box mt={4}>
          {product && (
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <img src={product.image} className={classes.productImage} />
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography variant="h5" component={'h1'}>
                  {product.title}
                </Typography>
                <Box mb={2} />
                <Link href="#" color="primary">
                  Shop {product.brand}
                </Link>

                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container spacing={1}>
                      {/* <Grid item> */}
                      {/* <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                        size="small"
                      /> */}
                      {/* </Grid>
                    <Grid item>
                      <Typography variant="body1">(100)</Typography>
                    </Grid> */}
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1">Item: 273653|Model: ABCD65X80CJ</Typography>
                  </Grid>
                </Grid>
                <Box mb={2} />

                <Typography variant="h5" component={'p'}>
                  $ {product.price}
                </Typography>

                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <h4>Product Features</h4>
                    <ul>
                      <li>Upscale everything with the 4K Processor X1 and 4K X-Reality PRO</li>
                      <li>See exactly what the creator intended with the advanced color </li>
                    </ul>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography>Quantity</Typography>
                      <Box
                        mb={4}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        border="1px solid #777"
                        width={140}
                      >
                        <Button size="small">
                          <Typography style={{ fontSize: 20 }}>-</Typography>
                        </Button>
                        <Typography>1</Typography>
                        <Button size="small" color="secondary">
                          <Typography style={{ fontSize: 20 }}>+</Typography>
                        </Button>
                      </Box>

                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{ width: 220 }}
                        onClick={addToCart}
                      >
                        <Typography>ADD TO CART</Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </main>
  )
}

export default PdpContainer
