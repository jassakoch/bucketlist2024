import { useState } from 'react'
import React from 'react';
import Nav from './components/Nav'
import Card from './components/Card';
import data from './data';

import './App.css'

function App() {
 
  const cards = data.map(item => {
    return (
     
      <Card 

      key={item.id}
      {...item}
      />
     
    )
})




  return (
    
      <div className='card-container'>
        <Nav/>
        <div className='card-container'>
        {cards}
        </div>
    </div>
  )
}

export default App
