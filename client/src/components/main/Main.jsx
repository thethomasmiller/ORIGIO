import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Login from '../login/Login'
import Register from '../register/Register'
import { getAllIdeas, createIdea, updateIdea, deleteIdea } from '../../services/ideas'
import {getAllComments, addComment, deleteComment} from '../../services/comments'
import ShowIdeas from '../showideas/ShowIdeas'
import IdeaItem from '../ideaitem/IdeaItem'
import Landing from '../Landing'
import CreateIdea from '../createidea/CreateIdea'
import UpdateIdea from '../updateidea/UpdateIdea'



export default class Main extends Component {
  state = {
    ideas: [],
    comments: []
  }

  componentDidMount() {
    this.fetchIdeas()
    this.fetchComments()
  }

  fetchIdeas = async () => {
    const ideas = await getAllIdeas()
    this.setState({ ideas })
  }

  fetchComments = async () => {
    const comments = await getAllComments()
    this.setState({ comments })
  }


  handleIdeaCreate = async (ideaData) => {
    const newIdea = await createIdea(ideaData);
    this.setState(prevState => ({
      ideas: [...prevState.ideas, newIdea]
    }))
  }

  handleCommentCreate = async (id, commentData) => {
    const newComment = await addComment(id, commentData)
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment]
    }))
  }


  handleIdeaUpdate = async (id, ideaData) => {
    const newIdea = await updateIdea(id, ideaData)
    this.setState(prevState => ({
      ideas: prevState.ideas.map(idea => idea.id === parseInt(id) ? newIdea : idea)
    }))
  }

  handleIdeaDelete = async (id) => {
    await deleteIdea(id)
    this.setState(prevState => ({
      ideas: prevState.ideas.filter(idea => idea.id !== id)
    }))
  }

  handleCommentDelete = async (idea_id, id) => {
    await deleteComment(idea_id, id)
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
  }
  


    render() {
      const { handleLogin, handleRegister, currentUser } = this.props
      return (
        <main>

          <Route exact path='/' component={Landing} />
          <Route exact path='/login' render={(props) =>

            <Login
              {...props}
              handleLogin={handleLogin}
            />}
          />
          <Route exact path='/register' render={(props) => (
            <Register
              {...props}
              handleRegister={handleRegister}
            />
          )} />
          <Route exact path='/accounthome' render={() => (
            <>
              <ShowIdeas
                ideas={this.state.ideas}
              /></>
          )} />

          <Route exact path='/ideas/new' render={(props) => (
            <CreateIdea
              {...props}
              handleIdeaCreate={this.handleIdeaCreate}
            />
          )} />


          <Route exact path='/ideas/:id' render={(props) => {
            const { id } = props.match.params;
            return <> <IdeaItem
              id={id}
              ideas={this.state.ideas}
              handleIdeaDelete={this.handleIdeaDelete}
              handleCommentCreate={this.handleCommentCreate}
              handleCommentDelete={this.handleCommentDelete}
              comments={this.state.comments}
              currentUser={this.props.currentUser}
           
            />
            </>
          }} />

          <Route exact path='/ideas/:id/edit' render={(props) => {
            const { id } = props.match.params
            const ideaItem = this.state.ideas.find(idea => idea.id === parseInt(id))
            return <UpdateIdea
              {...props}
              handleIdeaUpdate={this.handleIdeaUpdate}
            
              ideaItem={ideaItem}
              id={id}
            />
          }} />
          

        </main>
      )
    }
  }

