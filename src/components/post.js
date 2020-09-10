import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Post = (props) => (
  <Card style={{ width: '30rem', marginTop: '2rem'}}>
    <Card.Img variant="top" src={props.img}/>
    <Card.Body>
      <Card.Title dangerouslySetInnerHTML={{__html: props.title}}/>
      <Card.Text dangerouslySetInnerHTML={{__html: props.preview}} />
      <Button variant="primary" href={props.readMore}>Read More...</Button>
    </Card.Body>
  </Card>
)

export default Post