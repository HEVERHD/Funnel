import { useState } from 'react'

import './App.css'
import Burbujas from './components/Burbujas'
import Column from './components/Column'
import Funnel from './components/Funnel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Funnel />
      <Burbujas />
      <Column />
    </>
  )
}

export default App;
