import React from "react"
import Container from "./components/Container"
import User from './User'

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User 
        username='Jane Doe'
        avatar='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
    />
    <User 
        username='Bob Smith'
        avatar='https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg'
        excerpt="I'm Bob Smith, a vertically aligned type of guy"
    />
  </Container>
)