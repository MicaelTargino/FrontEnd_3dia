import { useState, useEffect } from 'react'
import React from'react'



function App() {
  const [info, setInfo] = useState([])
    async function fetchData() {
    
      const dataI = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(info => setInfo(info))
    }  

    useEffect(() => {
      fetchData()
    }, [])
  

  return (
    <div className="app">
      {info.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  ) 

}

export default App
