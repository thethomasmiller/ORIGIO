import React from 'react'
import './Landing.css'

import Tagline from './tagline/Tagline'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function Landing() {
  return (
    <div classname='landing-page'>
      <Header/>
      <Tagline />
      <Footer />
    </div>
  )
}
