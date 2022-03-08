import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

import Typography from '@material-ui/core/Typography'
import { refineByData } from './data'

const FilterContainer = ({ children, heading, pushLeft }) => {
  return (
    <Box borderBottom={'1px solid #ddd'} pb={2} mb={2}>
      <Typography variant="h6" component={'h3'}>
        {heading}
      </Typography>
      <Box mt={1} ml={pushLeft ? 1 : 0}>
        {children}
      </Box>
    </Box>
  )
}

export default FilterContainer
