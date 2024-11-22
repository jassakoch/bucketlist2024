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
    
      <div className='container'>
        <Nav/>
        {cards}
    </div>
  )
}

export default App
