import React from 'react'
import { Link } from 'react-router-dom';



export default function ShowIdeas(props) {
  return (
    <div>
      <h3>Ideas</h3>
      {props.ideas.map(idea => (
        <div key={idea.id}>
          <Link to={`/ideas/${idea.id}`}><p>{idea.title}</p></Link>
          
       </div>
      ))}
      <br />
      <Link to="/ideas/new"><button>Create Idea</button></Link>
    </div>
  )
}