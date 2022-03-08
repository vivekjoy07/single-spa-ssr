import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { navigateToUrl } from 'single-spa'

import Card from '@material-ui/core/Card'

import CardMedia from '@material-ui/core/CardMedia'

import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'

import Grid from '@material-ui/core/Grid'
// import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
// import { priceFormat } from '@vivekjoy07/mfe-utils'
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    width: '100%',
    height: 180,
    // paddingTop: '56.25%', // 16:9
    objectFit: 'contain',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardMedia: {},
  productLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
}))

export default function ProductItem({ product }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      className={classes.root}
      elevation={expanded ? 8 : 0}
      onMouseEnter={handleExpandClick}
      onMouseLeave={handleExpandClick}
    >
      {/* <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      <CardMedia className={classes.media} image={product.image} title={product.brand} />
      <CardContent>
        <a href={`/pdp/${product.id}`} onClick={navigateToUrl} className={classes.productLink}>
          <Typography component={'h2'} style={{ fontWeight: 'bold', fontSize: 16 }}>
            {product.title}
          </Typography>
        </a>
        <Box my={1}>
          <Grid container spacing={2}>
            <Grid item>
              {/* <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                size="small"
              /> */}
            </Grid>
            <Grid item>
              <Typography variant="caption">{product.numOfRatings}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="h5" component={'h3'}>
              ${product.price}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">After $200 off</Typography>
          </Grid>
        </Grid>
        <Typography variant="caption">
          <em>Free shipping</em>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" fullWidth>
          <Typography>ADD TO CART</Typography>
        </Button>
      </CardActions>
    </Card>
  )
}
