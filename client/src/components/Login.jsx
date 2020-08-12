import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    const { username, password } = this.state
    const { handleLogin, history } = this.props

    return (
      <>
        <Header />
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(this.state)
          history.push('/')
        }}>
          <h3>Login</h3>
          <label>
            Username:
            <input
              type='text'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
          <input
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button>Submit</button>
          <Link to= '/register'>make an account</Link>
        </form>
        <Footer />
      </>)
  }
}
