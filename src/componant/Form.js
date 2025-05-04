import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyForm() {
  return (
    <div className="d-flex justify-content-center">
      <div className="border p-4 shadow" style={{ width: '600px', height: '450px' }}>
        <Form>
          <h2>Any complaint?</h2>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="let us know about your complain.." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default MyForm;