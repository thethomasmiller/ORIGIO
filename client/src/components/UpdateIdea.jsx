import React, { Component } from 'react'
import './UpdateIdea.css'

export default class UpdateIdea extends Component {

  state = {
    title: '',
    date: '',
    notes: '',
    img_url: ''
  }

  componentDidMount() {
    if (this.props.ideaItem) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ideaItem !== this.props.ideaItem) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      title: this.props.ideaItem.title,
      date: this.props.ideaItem.date,
      notes: this.props.ideaItem.date,
      img_url: this.props.ideaItem.img_url

    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    const { handleIdeaUpdate, history, id } = this.props
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleIdeaUpdate(id, this.state)
          history.push(`/accounthome`)
        }}>
        <h3 className='update-idea-title'></h3>
        <div className='update-idea-input-fields'>
          <div className='update-title'>
            <label>
              <input
                className='update-title-field'
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='update-date'>
            <label>
              <input
                className='update-date-field'
                type='text'
                placeholder='MM/DD/YY'
                name='date'
                value={this.state.date}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='update-notes'>
            <label>
              <textarea
                className='update-notes-field'
                type='text'
                name='notes'
                value={this.state.notes}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='update-image'>
            <label>
              <input
                className='update-image-field'
                type='text'
                name='img_url'
                value={this.state.img_url}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button className='update-submit-button'>change</button>
        </div>
      </form>
    )
  }
}
