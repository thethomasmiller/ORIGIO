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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(this.state);
        history.push('/');
      }}>
        <h3>Register</h3>
        <label>
          Name:
           <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    )
  }
}