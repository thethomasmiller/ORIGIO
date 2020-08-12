import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'

export default class Main extends Component {
  render() {
    const {handleLogin, handleRegister} = this.props
    return (
      <main>
        <Route path='/login' render={(props) =>
          <Login
            {...props}
            handleLogin={handleLogin}
          /> } 
     />
      </main>
    )
  }
}
