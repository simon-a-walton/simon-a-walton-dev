import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bethedj from '../components/Bethedj.jsx'
import RealHealthMatters from '../components/RealHealthMatters.jsx'
import SimonsCocktails from '../components/Simons-cocktails.jsx'
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';

const containerStyle = css({
  backgroundColor: colors.darkBlue,
  color: 'white'
});

const linkStyle = css({
  color: 'white',
  ':hover': {textDecoration: 'none', color: colors.babyPink}
});


const Portfolio = () => {
  return (
    <>
      <Fade>
        <Navbar
          containerClassName={containerStyle}
          linkClassName={linkStyle}
        />
        <Container id="portfolio-page" fluid className="bg-white text-black">

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                {/*<Link to='/'>
                  <p id="back-button"><i className="fas fa-chevron-left" /></p>
                </Link>*/}
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
{/*                      <FastText textOne="ReactJS" textTwo="React-Bootstrap" textThree="Mapbox API" />
*/}                   <RealHealthMatters />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Bethedj />
{/*                      <FastText textOne="Ruby on Rails" textTwo="Spotify API" textThree="Javascript" />
*/}                    </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <SimonsCocktails />
{/*                      <FastText textOne="Ruby on Rails" textTwo="Cloudinary Photo Upload" textThree="Javascript" />
*/}                    </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Fade>
    </>
  )
}

export default Portfolio;
