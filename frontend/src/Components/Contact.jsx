import React from 'react'
import './Contact.css'
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
// import { Element } from 'react-scroll';


const Contact = () => {
  return (
   
         <div className='contact mt-4'>
          
          <div >
              <div id="middle">
                  <h2 id="clr"><strong>Get in Touch with Us</strong></h2>
                  <p>Have questions or want to learn more about our services? Please fill out the form below, and we'll get back to you shortly. Your feedback is important to us!</p>
              </div>
                                       
             
            <div className='row' id="details">
              <Col md={3}>
                   
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>              
              </Col>
              
              <Col md={3}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>           
              </Col>
              <Col md={3}>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tel Number:</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Your Phone Number" />
                    </Form.Group> 
                </Col>
                  <div>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Enter Your Message:</Form.Label>
                      <Form.Control as="textarea" rows={5} />
                      </Form.Group> 
                  </div>
                  <div id="send">
                      <Button variant="primary" >Message us</Button>{' '}
                  </div>
          </div>              
          </div>
     </div>
   
      
  )
}

export default Contact