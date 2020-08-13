import React, { Component } from 'react'

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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleIdeaCreate(this.state)
        history.push(`/accounthome`)
      }}>
        <h3>Make Idea</h3>
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
