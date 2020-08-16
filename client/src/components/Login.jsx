import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer/Footer'
import './Login.css'

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
        <form
          className='login-form'
          onSubmit={(e) => {
          e.preventDefault();
          handleLogin(this.state)
          history.push('/accounthome')
        }}>
          <h3 className='login-title'>
            Login
            </h3>
          <div className ='login-input-fields'>
          <label >
              <input
              className='login-username-field'
              type='text'
              name='username'
              value={username}
              onChange={this.handleChange}
              placeholder='ENTER USERNAME'
            />
          </label>
          <label >
              <input
              className = 'login-password-field'
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              placeholder='ENTER PASSWORD'
            />
            </label>
           
          <button className='login-submit-button'>SUBMIT</button>
            <Link to='/register' style={{textDecoration:'none', color:'black'}}>make an account</Link>
            </div>
        </form>
        <Footer />
      </>
    )
  }
}
