import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserHeader from './UserHeader'
import ShowIdeas from './ShowIdeas'
import MiniHeader from './header/MiniHeader'

export default class AccountHome extends Component {
  render() {
    return (
      <div>
        <ShowIdeas />
      </div>
    )
  }
}
