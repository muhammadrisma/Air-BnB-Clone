import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import CardData from './components/CardData'

export default function App() {

  const cards = CardData.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
}) 

  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='cards-list'> 
        {cards}
      </section>
    </>
  )
}
