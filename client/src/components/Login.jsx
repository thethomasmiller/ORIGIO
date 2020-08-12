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
    return (
      <div>
        <Header />
        

        <Footer/>
      </div>
    )
  }
}
