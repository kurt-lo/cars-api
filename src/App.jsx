import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carlists from './components/Carlists'
import Footer from './components/Footer'
import Stats from './components/Stats'

const App = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Carlists />
        <Stats />
        <Footer />
    </section>
  )
}

export default App