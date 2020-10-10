import React from 'react';
import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container'

const Portfolio = () => {
  return (
    <>
      <Layout />
        <Fade left>
          <Container fluid className="homepage text-center text-white bg-blue">
            <h1>Yes</h1>
            <h2>Foo</h2>
          </Container>
        </Fade>
    </>
  )
}

export default Portfolio;
