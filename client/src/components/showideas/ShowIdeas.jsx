import React from 'react'
import { Link } from 'react-router-dom';
import './ShowIdeas.css'



export default function ShowIdeas(props) {
  return (
    <div className = 'show-ideas'>
    
      <h3 className = 'idea-title'>Ideas</h3>
     <div className='idea-gallery'>
      {props.ideas.map(idea => (
        <React.Fragment key={idea.id} >
          <Link to={`/ideas/${idea.id}`} style={{textDecoration:'none'}} className='idea-item'>
            <img alt='idea' src={idea.img_url} className = 'img'/>
            <p className='idea-title-under-image'>{idea.title}</p>
          </Link>
       </React.Fragment>
      ))} </div>
    
      
    </div>
  )
}