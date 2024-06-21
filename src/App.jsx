import { useState } from 'react'

import './App.css'
import Burbujas from './components/Burbujas'
import Column from './components/Column'
import Funnel from './components/Funnel'
import CustomBubbleChart from './components/CustomBubbleChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomBubbleChart />
      <Funnel />
      <Burbujas />
      <Column />
    </>
  )
}

export default App;
