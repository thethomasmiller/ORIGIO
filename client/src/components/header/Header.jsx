import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <Link to= '/home' style={{textDecoration: 'none', color: 'black'}}>
      <div className="header">
      <div>Origio</div>
      <div>Origio</div>
      <div>Origio</div>
      <div>Origio</div>
      <div>Origio</div>
      <div>O</div>
    </div>
    </Link> 
  )
}
