import React from 'react'
import IdeaItem from './IdeaItem'

export default function ShowComments(props) {

  return (
    <div>
      <h3>Comments</h3>
      {props.comments.map(comment => (<p key={comment.id}>{comment.body}</p> ))}
      {props.comments.filter(comment => comment.id === "idea_id").map((comment) =>
        <p key={comment.id}>{comment.body}</p> 
      )}
    </div>
  )
}
