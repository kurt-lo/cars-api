import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carlists from './components/Carlists'
import Footer from './components/Footer'

const App = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Carlists />
        <Footer />
    </section>
  )
}

export default App