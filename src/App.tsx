import { useState, useEffect } from 'react'
import React from'react'



function App() {
  const [info, setInfo] = useState([])
    async function fetchData() {
    
      const dataI = await fetch('https://jsonplaceholder.typicode.com/users')
      // const dataI = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => response.json())
      .then(info => setInfo(info))
    }  

  return (
    <div className="app">
      <button onClick={fetchData}>See content</button>
      {info.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  ) 

}

export default App
