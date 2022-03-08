import fetch from 'isomorphic-unfetch'
import https from 'https'

const nodeGetPokemons = () => {
  return new Promise((resolve, reject) => {
    https
      .get('https://pokeapi.co/api/v2/pokemon?limit=12', function(res) {
        // A chunk of data has been recieved.
        let data = ''
        res.on('data', chunk => {
          data += chunk
        })

        // The whole response has been received. Print out the result.
        res.on('end', () => {
          resolve(JSON.parse(data).results)
        })
      })
      .on('error', err => {
        reject(err)
      })
  })
}

export async function getPokemons() {
  try {
    if (typeof window === 'undefined') {
      const results = await nodeGetPokemons()
      const pokemons = results.map((pokeman, index) => {
        const paddedId = ('00' + (index + 1)).slice(-3)

        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
        return { ...pokeman, img }
      })

      return pokemons
    } else {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      const { results } = await res.json()
      const pokemons = results.map((pokeman, index) => {
        const paddedId = ('00' + (index + 1)).slice(-3)

        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
        return { ...pokeman, img }
      })
      return pokemons
    }
  } catch (err) {
    console.error(err)
  }
}

export async function getPokeman(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokeman = await res.json()
    const paddedId = ('00' + id).slice(-3)
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
    pokeman.img = img
    return pokeman
  } catch (err) {
    console.error(err)
  }
}

export function getProducts() {
  const products = [
    {
      id: '111',
      brand: 'Sony TV',
      image: 'https://s7d6.scene7.com/is/image/bjs/273653__alt1?$bjs-180$',
      title:
        ' Sony 65" X80CJ 4K HDR LED Smart Google TV - KD65X80CJ with 5 Movie Credits and 12-Months of BRAVIA CORE',
      rating: 4.5,
      numOfRatings: 100,
      price: 749.99,
    },
    {
      id: '112',
      image: 'https://bjs.scene7.com/is/image/bjs/266904?$bjs-Initial480$',
      title: `Samsung 75" Q7DA QLED 4K Smart TV - QN75Q7DAAFXZA with Your Choice Subscription and 3-Year Warranty`,
      rating: 5,
      numOfRatings: 250,

      price: 1499.99,
    },
  ]
  return products
}
