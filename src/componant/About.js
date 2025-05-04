import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import MyForm from './Form';

function About() {
  return (
    <div>
      <br/><br/><br/>
      <Container>
        <Row>
          <Col xs={6}>
            <img
              src="/assets/images/22.jpg"
              alt="Counter"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Col>
          <Col xs={6} style={{ fontSize: '30px',textAlign:'center',
                padding: '10px',
                border: '1px solid #ccc',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', }}>
            <p >
              Defacto Solutions Limited was founded in August 1991 by three ex-Tetra employees Alec Willis,
              Tom O'Brien, and Gary Cassinelli. The aim of the business was to work closely with Tetra to provide
              consulting and bespoke programming services and resources to aid the Tetra Resellers.
            </p>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/>
      <MyForm/>
      <br/><br/><br/>
      <Footer />
    </div>
  );
}

export default About;