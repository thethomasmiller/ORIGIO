import React from 'react'
import './Landing.css'

import Tagline from './tagline/Tagline'
import Footer from './footer/Footer'

export default function Landing() {
  return (
    <div classname='landing-page'>
      <Tagline />
      <Footer />
    </div>
  )
}
