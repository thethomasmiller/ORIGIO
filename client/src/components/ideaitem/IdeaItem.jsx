import React, { Component } from 'react'
import { getOneIdea } from '../../services/ideas'
import { withRouter, Link } from 'react-router-dom'
import { getAllComments } from '../../services/comments'
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
    const { handleIdeaDelete, history, handleCommentCreate, handleCommentDelete, currentUser } = this.props

    return (<>

      {idea && (
        <>
          <div className='idea-item-container'>
            <div className='image-info-button-container'>
              <div className='idea-item-title'>
                <p>{idea.title}</p>
              </div>
              <div className='image-info-container'>
                <div className='idea-item-image-container'>
                  <img src={idea.img_url} className='idea-item-image' />
                </div>

                <div className='idea-item-info-container'>

                  <p>{idea.date}</p>
                  <p>{idea.notes}</p>
                </div>
              </div>
              <div className='idea-item-button-container'>
                <Link to={`/ideas/${idea.id}/edit`}><button className='idea-edit-button'>Change</button></Link>

                <button className='idea-delete-button' onClick={() => {
                  handleIdeaDelete(idea.id)
                  history.push('/accounthome')
                }}>Delete</button>
              </div>
            </div>
            <div className='comments-container'>
              <h3 className='comments-title'>Comments</h3>

              {comments && comments.filter(comment => comment.idea_id === idea.id).map((comment) =>
                <div className='comment-body-button-container'>
                  <p key={comment.id} >{comment.body}</p><button className='comment-delete-button' onClick={() => {
                    handleCommentDelete(idea.id, comment.id)
                    history.push(`/accounthome`)
                  }}>X</button>
                </div>
              )}
            </div>
           
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommentCreate(this.state.idea_id, { body: this.state.body })
                  history.push(`/accounthome`)
                }}

            >
               <div className='add-comment-form'>
                <label>
                  <textarea
                    className='add-comment-field'
                    type='text'
                    name='body'
                    value={this.state.body}
                    onChange={this.handleChange}
                    placeholder='enter comment'
                  />
                </label>
              <button className='add-comment-submit-button'>+</button>
              </div>
              </form>
            
          </div>

        </>
      )}



    </>)
  }
}
export default withRouter(IdeaItem)