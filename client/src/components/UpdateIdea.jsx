import React, { Component } from 'react'

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
    const {name, value } = e.target 
    this.setState({
      [name]: value
    })
  }
  render() {
    const {handleIdeaUpdate, history, id} = this.props
    return (
      <form
        className='update-idea-form'
        onSubmit={(e) => {
        e.preventDefault();
        handleIdeaUpdate(id, this.state)
        history.push(`/accounthome`)
      }}>
        <h3>Change Idea</h3>
        <label>
          Title:
           <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            />
        </label>
        <label>
          Date:
           <input
            type='text'
            placeholder = 'MM/DD/YY'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
            />
        </label>
        <label>
          Notes:
           <input
            type='text'
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Image:
           <input
            type='text'
            name='img_url'
            value={this.state.img_url}
            onChange={this.handleChange}
            />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
