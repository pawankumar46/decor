import { useState } from 'react'
import './App.css'
import ListOfItems from './components/ListOfItems'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <ListOfItems/>
    </div>
  )
}

export default App
