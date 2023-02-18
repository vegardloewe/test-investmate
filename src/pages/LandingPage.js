import React from 'react'
import '../styling/style.css'
import Nav from '../components/1_Nav'
import Header from '../components/2_Header'
import ValueProposition from '../components/3_ValueProposition'
import Partners from '../components/4_Partners'
import Features from '../components/5_Features'
import Statement from '../components/6_Statement'
import Traction from '../components/7_Traction'
import Join from '../components/8_Join'
import Testimonials from '../components/9_Testimonials'
import Cta from '../components/10_Cta'
import Footer from '../components/11_Footer'
import { Seo } from '../components/SEO'

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <ValueProposition />
      <Partners />
      <Features />
      <Statement />
      <Traction />
      <Join />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default LandingPage

export const Head = () => <Seo />
