import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Fade from 'react-reveal/Fade';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bethedj from '../components/Bethedj.jsx'
import RealHealthMatters from '../components/RealHealthMatters.jsx'
import PureClean from '../components/PureClean.jsx'
import { css } from 'glamor';

const Portfolio = () => {
  const titles = [ "PureClean", "Real Health Matters", "BeTheDJ" ];
  return (
    <>
      <Fade>
        <Navbar />
        <div className={`container-fluid ${css({ color: 'white' })}`} id="portfolio-page">
          <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <Row>
              <Col sm={3} className="mt-3">
                <Nav variant="pills" className="flex-column">
                  { titles.map((title, index) => (
                    <Nav.Item>
                      <Nav.Link eventKey={index}>{title}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="0">
                    <PureClean />
                  </Tab.Pane>
                  <Tab.Pane eventKey="1">
                    <RealHealthMatters />
                  </Tab.Pane>
                  <Tab.Pane eventKey="2">
                    <Bethedj />
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
