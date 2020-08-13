import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Login from '../Login'
import Register from '../Register'
import { getAllIdeas, createIdea, updateIdea } from '../../services/ideas'
import ShowIdeas from '../ShowIdeas'
import IdeaItem from '../IdeaItem'
import Landing from '../Landing'
import CreateIdea from '../CreateIdea'
import UpdateIdea from '../UpdateIdea'



export default class Main extends Component {
  state = {
    ideas: []
  }

  componentDidMount() {
    this.fetchIdeas()
  }

  fetchIdeas = async () => {
    const ideas = await getAllIdeas()
    this.setState({ ideas })
  }
  handleIdeaCreate = async (ideaData) => {
    const newIdea = await createIdea(ideaData);
    this.setState(prevState => ({
      ideas: [...prevState.ideas, newIdea]
    }))
  }

  handleIdeaUpdate = async (id, ideaData) => {
    const newIdea = await updateIdea(id, ideaData)
    this.setState(prevState => ({
      ideas: prevState.ideas.map(idea=>idea.id === parseInt(id)? newIdea : idea)
    }))
  }

  render() {
    const { handleLogin, handleRegister } = this.props
    return (
      <main>

        <Route exact path='/home' component={Landing} />
        <Route exact path='/login' render={(props) =>

          <Login
            {...props}
            handleLogin={handleLogin}
          />}
        />
        <Route exact path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={handleRegister}
          />
        )} />
        <Route exact path='/accounthome' render={() => (
          <>
            <ShowIdeas
              ideas={this.state.ideas}
            /></>
        )} />

        <Route path='/ideas/new' render={(props) => (
          <CreateIdea
            {...props}
            handleIdeaCreate={this.handleIdeaCreate}
          />
        )} />


        <Route exact path='/ideas/:id' render={(props) => {
          const { id } = props.match.params;
          return <IdeaItem
            id={id}
            ideas={this.state.ideas}
          />
        }} />

        <Route exact path='/ideas/:id/edit' render={(props) => {
          const { id } = props.match.params
          const ideaItem = this.state.ideas.find(idea => idea.id === parseInt(id))
          return <UpdateIdea
            {...props}
            handleIdeaUpdate={this.handleIdeaUpdate}
            ideaItem={ideaItem}
            id={id}
          />
        }} />
          

      </main>
    )
  }
}
