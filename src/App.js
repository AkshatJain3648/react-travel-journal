import React from "react"
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data';

function App() {
  const card = data.map(item => {
    return (
      <Card
       item = {item}
       key = {item.id}
      />
    )
  })

  return (
    <>
      <Navbar/>
      <div className="cards">
       {card}
      </div>
    </>
  );
}

export default App;
