import React from 'react'
import { PlpContext } from './plp-context'

const useProducts = () => {
  const { products, loading } = React.useContext(PlpContext)

  return { products, loading }
}

export default useProducts
