import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

export default class Register extends Component {
  state = {
    name: "",
    email: "",
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
    const { name, email, username, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <>
        <form
          className='register-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(this.state);
            history.push('/accounthome');
          }}>
          <h3 className='register-title'>make account</h3>
          <div className='register-input-fields'>
            <label>
              <input
                className='register-name-field'
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder='enter name'
              />
            </label>
            <label>
              <input
                className='register-email-field'
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder='enter email'
              />
            </label>
            
            <label>

              <input
                className='register-username-field'
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder='choose username'
              />
            </label>
           
            <label>

              <input
                className='register-password-field'
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder='choose password'
              />
            </label>

            <button className='register-submit-button'>Submit</button>
            <Link to='/login' style={{textDecoration:'none', color: 'black'}}>already making? Login</Link>
          </div>
        </form>
        
      </>
    )
  }
}