import React, { Component } from 'react'
import { getOneIdea } from '../services/ideas'
import { withRouter, Link, Redirect } from 'react-router-dom'
import ShowComments from './ShowComments'
import { getAllComments } from '../services/comments'



class IdeaItem extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    idea: null,
    comments: null,
  }

  componentDidMount() {
    this.fetchIdeaItem()
    this.fetchComments()
  }

  fetchIdeaItem = async () => {
    const idea = await getOneIdea(this.props.id)
    this.setState({ idea })
  }

  fetchComments = async () => {
    const comments = await getAllComments(this.props.id)
    this.setState({ comments })
  }

  render() {
    const { idea, comments } = this.state
    const { handleIdeaDelete, history } = this.props
    return (<>
      <div>
        {idea && (
          <>
            <h3>{idea.title}</h3>
            <h4>{idea.date}</h4>
            <h4>{idea.notes}</h4>
            <Link to={`/ideas/${idea.id}/edit`}><button>Edit</button></Link>

            <button onClick={() => {
              handleIdeaDelete(idea.id)
              history.push('/accounthome')
            }}>Delete</button>

            <h3>Comments</h3>
            {comments.filter(comment => comment.idea_id === idea.id).map((comment) =>
              <p key={comment.id}>{comment.body}</p>
            )}

          </>
        )}


      </div>
    </>)
  }
}
export default withRouter(IdeaItem)