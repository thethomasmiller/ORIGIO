import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from '../Login'

import UserHeader from '../UserHeader'

export default class Main extends Component {
  render() {
    const {handleLogin} = this.props
    return (
      <main>
        <Route exact path='/login' render={(props) =>
          <Login
            {...props}
            handleLogin={handleLogin}
          /> } 
        />
        
        
      </main>
    )
  }
}
