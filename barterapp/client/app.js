import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {Testing} from './components'

const App = () => {
  console.log('hi')
  return (
    <div>
      <Navbar />
      <Routes />
      <Testing />
    </div>
  )
}

export default App
