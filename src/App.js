import React, { useState } from 'react'
import Redux from './pages/Redux'
import './App.css'

function App() {
  const [num, setNum] = useState(1)

  return (
    <div className="App">
      <button
        onClick={() => {
          setNum(num + 1)
        }}
      >
        change num: {num}
      </button>
      {num % 2 !== 0 && <Redux />}
    </div>
  )
}

export default App
