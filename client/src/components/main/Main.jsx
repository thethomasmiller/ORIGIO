import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Login from '../Login'
import Register from '../Register'
import { getAllIdeas } from '../../services/ideas'
import ShowIdeas from '../ShowIdeas'
import IdeaItem from '../IdeaItem'



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
  render() {
    const { handleLogin, handleRegister } = this.props
    return (
      <main>
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

        <Route path='/ideas/:id' render={(props) => {
          const { id } = props.match.params;
          return <IdeaItem
            id={id}
            ideas={this.state.ideas}
          />
        }} />

      </main>
    )
  }
}
