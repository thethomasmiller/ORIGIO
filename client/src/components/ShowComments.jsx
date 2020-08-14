import React from 'react'

export default function ShowComments(props) {
  return (
    <div>
      <h3>Comments</h3>
      {props.comments.map(comment => (
        <p key={comment.id}>{comment.body}</p>
      ))}
    </div>
  )
}
