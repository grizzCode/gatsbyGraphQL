import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PrimaryLayout from '../layouts/PrimaryLayout'


const ContactPage = () => {
  return (
    <>
      <PrimaryLayout grid="col-10">
        <div className="pt-5">
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="contactFrom.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email..." />
            </Form.Group>
            <Form.Group controlId="contactFrom.Subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject..." />
            </Form.Group>
            <Form.Group controlId="contactFrom.Message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="contactFrom.Submit">
              <Button>Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </PrimaryLayout>
    </>
  )
}


export default ContactPage
