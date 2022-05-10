import React, { useState, useEffect }from 'react'
import Logo from './components/logo/Logo'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
    return (
      
    <>
        <Logo />
        <Header />
        <Nav />    
        <About /> 
        <Experience />    
        <Services />    
        <Portfolio />    
        <Testimonials /> 
        <Contact />  
        <Footer /> 
    </>
  )
   

}

export default App