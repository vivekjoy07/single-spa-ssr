import React from 'react'
import { getProducts } from './api'
import { PlpContext } from './plp-context'

export default function PlpProvider(props) {
  const [loading, setLoading] = React.useState(false)
  const { children } = props
  const [products, setProducts] = React.useState(props.products || [])

  React.useEffect(() => {
    async function initProducts() {
      if (products.length === 0) {
        setLoading(true)
        // const pokes = await getPokemons();
        const products = getProducts()

        setLoading(false)
        setProducts(products)
      }
    }
    initProducts()
  }, [products])

  return (
    <PlpContext.Provider value={{ products, loading: loading }}>{children}</PlpContext.Provider>
  )
}
