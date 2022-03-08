import React from 'react'
import { PdpContext } from './pdp-context'

const useProduct = () => {
  const { product, loading } = React.useContext(PdpContext)

  return { product, loading }
}

export default useProduct
