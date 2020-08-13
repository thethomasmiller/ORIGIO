import React, { Component } from 'react'

export default class UpdateIdea extends Component {
  state = {
    name: ''
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

    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
