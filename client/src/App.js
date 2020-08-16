import React, { Component } from 'react'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import Header from './components/header/Header'
import Main from './components/main/Main'
import UserHeader from './components/UserHeader'
import { withRouter} from 'react-router-dom'
import './App.css'

class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData)
    this.setState({ currentUser })
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData)
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser()
    this.setState({ currentUser })
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <UserHeader
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout} />
        <Main
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />
      </div>
    )
  }
}
export default withRouter(App)