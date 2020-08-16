import React from 'react'
import {Link} from 'react-router-dom'
import './Tagline.css'

export default function Tagline() {
  return (
    <>
      <div className="tagline">
        <div className="vertical-text">
          <div>a</div>
          <div>
            <div>s</div>
            <div>p</div>
            <div>a</div>
            <div>c</div>
            <div>e</div>
          </div>
          <div>
            <div>f</div>
            <div>o</div>
            <div>r</div>
          </div>

        </div>
        <div className="makers-button-container">
          <div className="makers-title">
            <div>makers</div>
          </div>
          <div className="makers-buttons">
            <Link to= '/register'><button className='start-making-button'>start making</button></Link>
            <Link to= '/login'><button className='keep-making-button'>keep making</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
