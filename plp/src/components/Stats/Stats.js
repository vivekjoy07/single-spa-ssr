import React from 'react'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'

import NativeSelect from '@material-ui/core/NativeSelect'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  resultsText: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'normal',
  },
  resultsCountText: {
    fontWeight: 200,
    color: '#999',
    fontSize: 18,
  },
  marginRightSpacer: {
    marginRight: theme.spacing(2),
  },
  selectOption: {
    borderBottom: '1px solid #777',
  },
}))

const Stats = () => {
  const classes = useStyles()
  return (
    <section id="plp-stats">
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} className={classes.resultsText}>
          Results for &nbsp;
          <Typography component={'h1'} variant="h5">
            Tvs & Home Theater
          </Typography>
          <span className={classes.resultsCountText}>&nbsp;(51)</span>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Box mr={2}>
            <Typography>Sort By</Typography>
          </Box>
          <Box mr={2}>
            <FormControl className={classes.formControl}>
              <NativeSelect
                // defaultValue={""}
                // onChange={handleChange}
                name="age"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
              >
                <option className={classes.selectOption} value="">
                  Relevance
                </option>
                <option value={10}>Top Rated</option>
                <option value={20}>Price: Low to High</option>
                <option value={30}>Price: High to Low</option>
              </NativeSelect>
            </FormControl>
          </Box>

          <Box>
            <FormControl className={classes.formControl}>
              <NativeSelect
                // defaultValue={""}
                // onChange={handleChange}
                name="age"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
              >
                <option value={40}>40 per page</option>
                <option value={60}>60 per page</option>
                <option value={800}>80 per page</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </section>
  )
}

export default Stats
