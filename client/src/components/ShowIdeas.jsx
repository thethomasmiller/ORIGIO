import React from 'react'
import { Link } from 'react-router-dom';
import './ShowIdeas.css'



export default function ShowIdeas(props) {
  return (
    <div>
      <h3>Ideas</h3>
      {props.ideas.map(idea => (
        <div key={idea.id}>
          <Link to={`/ideas/${idea.id}`}>
            <img src={idea.img_url} className = 'img'/>
            <p>{idea.title}</p>
          </Link>
          
       </div>
      ))}
      <br />
      <Link to="/ideas/new"><button>Create Idea</button></Link>
    </div>
  )
}