import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Fade from 'react-reveal/Fade';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bethedj from '../components/Bethedj.jsx'
import RealHealthMatters from '../components/RealHealthMatters.jsx'
import SimonsCocktails from '../components/Simons-cocktails.jsx'
import { css } from 'glamor';

const Portfolio = () => {
  return (
    <>
      <Fade>
        <Navbar />
        <div className={`container-fluid ${css({ color: 'white' })}`} id="portfolio-page">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3} className="mt-3">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Real Health Matters</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">BeTheDJ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Mister Cocktail</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <RealHealthMatters />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Bethedj />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <SimonsCocktails />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Fade>
    </>
  )
}

export default Portfolio;
