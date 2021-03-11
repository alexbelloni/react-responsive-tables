import React from 'react'

import Search from './containers/Search'
import products from './assets/products.json';

const App = () => {
  return <Search products={products} />
}

export default App;
