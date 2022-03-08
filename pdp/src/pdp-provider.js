import React from 'react'
import { getProduct } from './api'
import { PdpContext } from './pdp-context'

export default function PdpProvider(props) {
  const [loading, setLoading] = React.useState(false)
  const { children } = props
  const [product, setProduct] = React.useState(props.product || undefined)

  React.useEffect(() => {
    console.log(window.location.pathname)
    const pathname = window.location.pathname.split('/')
    const id = pathname[pathname.length - 1]
    console.log('id', id)
    async function initProduct() {
      if (!product) {
        setLoading(true)
        // const pokes = await getPokemons();
        const product = getProduct(id)

        setLoading(false)
        setProduct(product)
      }
    }
    initProduct()
  }, [product])

  return <PdpContext.Provider value={{ product, loading: loading }}>{children}</PdpContext.Provider>
}
