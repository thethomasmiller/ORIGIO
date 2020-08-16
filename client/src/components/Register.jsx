import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    name:"",
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

      <form
        className='register-form'
        onSubmit={(e) => {
        e.preventDefault();
        handleRegister(this.state);
        history.push('/');
      }}>
        <h3 className='register-title'>Register</h3>
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
            placeholder='enter username'
          />
        </label>
        <br />
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
        <br />
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
  
          <button>Submit</button>
          <Link to='/login'>already making? Login</Link>
          </div>
      </form>
    )
  }
}