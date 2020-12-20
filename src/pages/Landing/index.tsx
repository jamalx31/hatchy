import React from 'react'

import Nav from '../../components/Nav'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'

const Landing = () => {
   return (
      <div>
         <Nav />
         <Hero />
         <Testimonials />
         <Features />
         <CTA />
         <Footer />
      </div>
   )
}

export default Landing