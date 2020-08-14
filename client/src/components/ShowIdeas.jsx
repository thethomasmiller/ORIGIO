import React from 'react'
import { Link } from 'react-router-dom';
import './ShowIdeas.css'



export default function ShowIdeas(props) {
  return (
    <div className = 'show-ideas'>
    
      <h3 className = 'Idea-title'>Ideas</h3>
     <div className='idea-gallery'>
      {props.ideas.map(idea => (
        <React.Fragment key={idea.id}>
          <Link to={`/ideas/${idea.id}`}>
            <img alt='idea' src={idea.img_url} className = 'img'/>
            <p>{idea.title}</p>
          </Link>
       </React.Fragment>
      ))} </div>
    
      <Link to="/ideas/new" ><button className = 'create-button' >Create Idea</button></Link>
    </div>
  )
}