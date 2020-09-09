import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Post = (props) => (
  <Card style={{ width: '30rem', marginTop: '2rem'}}>
    <Card.Img variant="top" src={props.img}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.preview}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
)

export default Post