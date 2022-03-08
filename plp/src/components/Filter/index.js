import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import { refineByData } from './data'
import FilterContainer from './FilterContainer'

const Filter = () => {
  return (
    <section id="product-filter">
      <FilterContainer heading={'Refine By'} pushLeft>
        {refineByData.map(data => (
          <Grid key={data.item} spacing={2} container justifyContent="space-between">
            <Grid item xs={9}>
              <Link href="#" color="inherit">
                {data.item}
              </Link>
            </Grid>
            <Grid item xs={3}>
              ({data.count})
            </Grid>
          </Grid>
        ))}
      </FilterContainer>

      <FilterContainer heading={'Delivery & Pickup'} pushLeft>
        <FormControl component="fieldset">
          <RadioGroup aria-label="deliveryPickup" name="deliveryPickup1" value={'all'}>
            <FormControlLabel value="all" control={<Radio size="small" />} label="Show All" />
            <FormControlLabel
              value="freePickup"
              control={<Radio size="small" />}
              label="Free Pickup"
            />
            <FormControlLabel value="ship" control={<Radio size="small" />} label="Ship It" />
            <FormControlLabel
              value="sdd"
              control={<Radio size="small" />}
              label="Same-Day Delivery"
            />
          </RadioGroup>
        </FormControl>
      </FilterContainer>

      <FilterContainer heading={'Screen Size'}>
        <FormGroup>
          <FormControlLabel control={<Checkbox size="small" name="checkedA" />} label='30" - 39"' />
          <FormControlLabel
            control={<Checkbox size="small" name="checkedB" color="secondary" />}
            label='40" - 49"'
          />

          <FormControlLabel
            control={<Checkbox size="small" name="checkedB" color="secondary" />}
            label='50" - 59"'
          />
          <FormControlLabel
            control={<Checkbox size="small" name="checkedB" color="secondary" />}
            label='60" - 69"'
          />
          <FormControlLabel
            control={<Checkbox size="small" name="checkedB" color="secondary" />}
            label='70" - 79"'
          />
          <FormControlLabel
            control={<Checkbox size="small" name="checkedB" color="secondary" />}
            label='80"+'
          />
        </FormGroup>
      </FilterContainer>
    </section>
  )
}

export default Filter
