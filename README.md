# O R I G I O <!-- omit in toc -->

<br>

## Overview

**ORIGIO** is a space for makers. Users can create an account and build a collection of ideas. They can edit the titles, dates, and notes for these ideas, as well as add and delete comments. 

[ORIGIO](http://origio.surge.sh/)

<br>

## MVP
The **ORIGIO** MVP will allow users to create an account, see all ideas, add a new idea, update an idea, and delete an idea. They can also add/delete comments on an an idea. 

<br>

### Goals
- A Full CRUD Application with backend built with Ruby/Rails
- A user can create an account
- A user can create an Idea
- A user can change the Idea
- A user can add comments to ideas
- A user can logout and keep the contents of their account.


<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front End with full CRUD functionality_   |
|   React Router   | _Navigation between screens_               |
| Ruby on Rails    | _Back end with full CRUD functionality_    |


<br>

### Client (Front End)

#### Wireframes

[ORIGIO | WIREFRAMES](https://www.figma.com/file/yVUwrVH5ksXsgT8Mbp9I6E/ORIGIO-Colors?node-id=12%3A4)


#### Component Tree

[ORIGIO | COMPONENT TREE](https://whimsical.com/6UmnuTb11kLLBhCbS6bY4w)

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ componenets/
      |__ Header/
            |__ Header.jsx
            |__ Header.css
      |__ Footer/
            |__ Footer.jsx
            |__ Footer.jsx
|__ screens/
      |__ Landing/
            |__ Landing.jsx
            |__ Landing.css
      |__ Login/
            |__ Login.jsx
            |__ Login.css
      |__ Register/
            |__ Register.jsx
            |__ Register.css
      |__ UserHome/
            |__ UserHome.jsx
            |__ UserHome.css
      |__ ShowIdea/
            |__ ShowIdea.jsx
            |__ ShowIdea.css
      |__ ChangeIdea/
            |__ ChangeIdea.jsx
            |__ ChangeIdea.css
      |__ About/
            |__ About.jsx
            |__ About.css
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ ideas.js
```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  APP  | class |   y   |   n   | _Storage for Routes and State._|
|    Landing    | functional |   n   |   n   | _The Landing will welcome the user and provide a link to Login, Register, and About._              |
|  Register  | class |   n   |   n   | _Register will allow a user to create an account._|
|   Login    |   class    |   n   |   n   | _Login will allow a user to login to their account._|
| UserHome| class |   n   |   y   | _User Home will render all ideas, along with a personal greeting and options to Add an Idea and logout._                 |
|    UserIdea    | class |   n   |   y   | _UserIdea will show an idea and link to the ChangeIdea page._|
|    ChangeIdea    | class |   n   |   y   | _ChangeIdea will allow a user to update or delete an idea, including updating and removing collaborators._|
|    About    | class |   n   |   n   | _The About will display the mission of the application, and links to register or login_ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Authorization    |    M     |     5 hrs      |     3 hrs     |    3 hrs    |
| Build Front End |    H     |     7 hrs      |     24 hrs     |     24 hrs     |
| Ideas |    H     |     5 hrs      |     2 hrs     |     2 hrs     |
| Comments |    H     |     5 hrs      |     8 hrs     |     8 hrs     |
| Build Backend |    H     |     5 hrs      |     5 hrs     |     5 hrs     |
| Styling/Media Queries |    H     |     8 hrs      |     16 hrs     |     16 hrs     |
| Post MVP |    H     |     5 hrs      |     5 hrs     |     5 hrs     |
| TOTAL    |          |     40 hrs      |     63 hrs     |    63 hrs     |

<br>

### Server (Back End)

#### ERD Model

[ORIGIO | ERD](https://drive.google.com/file/d/1u9YOaFFfoN9wHmaclrXumcxsZoCrhOIc/view)

<br>

***

## Post-MVP

- Allow for more detailed planning in IDEAS (links, more spacious layout, input prompts)
- Allow Collaborators to see IDEAS they are associated with
- Allow communication between collaborators
- Create a board where users can look for collaborators
- Create a board where experts can offer help to users

***

## Code Showcase

>  {comments && comments.filter(comment => comment.idea_id === idea.id).map((comment) =>
      <div className='comment-body-button-container'>
      <p key={comment.id} >{comment.body}</p>
      <button className='comment-delete-button' onClick={() => {
            handleCommentDelete(idea.id, comment.id)
            history.push(`/accounthome`)}}>
            X</button>

- These 6 lines of code really solidified my understanding of table relationships and control flow through the hierarchy of my project. As I wrote this and tracked the flow of information back to its source, Unit 4 suddenly sank in, and I feel inspired to pursue more complex backend structures in Post-MVP.


## Code Issues & Resolutions

> See Issues

