import React, { Component } from 'react'
import './CreateIdea.css'


export default class CreateIdea extends Component {
  state = {
    title: '',
    date: '',
    notes: '',
    img_url: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleIdeaCreate, history } = this.props;


    return (
      <form
        clasName='create-idea-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleIdeaCreate(this.state)
          history.push(`/accounthome`)
        }}>
        <h3 className='create-idea-title'>Make Idea</h3>

        <div className='create-idea-input-fields'>
        <div className='title-date-fields'>
          <label>
            <input
              className='new-idea-title'
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
              placeholder='title'

            />
          </label>
          <label>

            <input
              className='new-idea-date'
              type='text'
              placeholder='MM/DD/YY'
              name='date'
              value={this.state.date}
              onChange={this.handleChange}
              placeholder='mm/dd/yy'
            />
            </label>
          </div>
          <div className='notes-field'>
          <label>

            <textarea
              className='new-idea-notes'
              type='text'
              name='notes'
              value={this.state.notes}
              onChange={this.handleChange}
              placeholder='notes'
            />
            </label>
            
          </div>
          
          <div className='image-url-field'>
          <label>

            <input
              className='new-idea-image-url'
              type='text'
              name='img_url'
              value={this.state.img_url}
              onChange={this.handleChange}
              placeholder='image url'
            />
            </label>
            </div>
          <button className='create-idea-submit-button'>Submit</button>
        </div>
      </form>
    )
  }
}
