import React, { Component } from 'react'
import { getOneIdea } from '../services/ideas'
import { withRouter, Link } from 'react-router-dom'
import { getAllComments } from '../services/comments'
import './IdeaItem.css'


class IdeaItem extends Component {
 
  state = {
    idea: null,
    comments: null,
    body: '',
    idea_id: '',
    user_id: '',
  }

  componentDidMount() {
    this.fetchIdeaItem()
    this.fetchComments()
  }

  fetchIdeaItem = async () => {
    const idea = await getOneIdea(this.props.id)
    this.setState({
      idea: idea,
      idea_id: idea.id,
      user_id: idea.user_id
    })
  }

  fetchComments = async () => {
    const comments = await getAllComments(this.props.id)
    this.setState({ comments })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      body: value
    })
  }

  render() {
    const { idea, comments } = this.state
    const { handleIdeaDelete, history, handleCommentCreate } = this.props
   
    return (<>
      <div className = "idea-item-body">
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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommentCreate(this.state.body, this.state.user_id, this.state.idea_id)
                history.push(`/ideas/:id`)
              }}

            >
            <label>
                <input
                    type='text'
                    name='body'
                    value={this.state.body}
                    onChange={this.handleChange}
                />
              </label>
              <button>Add</button>
            </form>
          </>
        )}


      </div>
    </>)
  }
}
export default withRouter(IdeaItem)