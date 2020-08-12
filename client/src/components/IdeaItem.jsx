import React, { Component } from 'react'
import { getOneIdea } from '../services/ideas'
import { Link } from 'react-router-dom'


export default class IdeaItem extends Component {
  constructor(props) {
  super(props)
  }
  state = {
    idea: null,
  }

  componentDidMount() {
  this.fetchIdeaItem()
  }
  
  fetchIdeaItem = async () => {
    const idea = await getOneIdea(this.props.id)
    this.setState({idea})
  }


  render() {
    const { idea } = this.state
    return (
      <div>
        {idea && (
          <>
            <h3>{idea.title}</h3>
            <h4>{idea.date}</h4>
            <h4>{idea.notes}</h4>
            <Link to={`/ideas/${idea.id}/edit`}><button>Edit</button></Link>
          <button onClick={() => this.props.handleIdeaDelete(idea.id)}>Delete</button> 
           </> 
        )}
        
      </div>
    )
  }
}
