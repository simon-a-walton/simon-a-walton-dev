import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import Sparkle from 'react-sparkle';
import simonHeadshot from './../images/simon-headshot.jpg';
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';

const containerStyle = css({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  color: colors.darkBlue
});

const linkStyle = css({
  color: colors.darkBlue,
  ':hover': {textDecoration: 'none', color: colors.babyPink}
});

class Home extends React.Component {
  render() {
    const Search = () => {
      const [showResults, setShowResults] = useState(false)
      const onClick = () => setShowResults(true)
      return (
        <div className="bg-div bg-blue">
          <RubberBand delay={1000}>
            <img
              src={simonHeadshot}
              onClick={onClick}
              alt="Simon the Coding Machine"
              className="simon-image"
            />
          </RubberBand>
            { showResults ? <Results/> : null }
        </div>
    )
  }

    const Results = () => {
      return (
        <div>
          <Bounce top>
            <Navbar
              containerClassName={containerStyle}
              linkClassName={linkStyle}
            />
          </Bounce>
          <Container className="homepage text-center text-white">
           <img
              src="https://avatars2.githubusercontent.com/u/60608204?s=460&u=517fe81ca49a5627e1e845120537a7a5b6f3b346&v=4"
              alt="Simon the Coding Machine"
              className="simon-image"
            />
            <Bounce bottom>
              <ul id="home-list "className="list-unstyled pt-1">
                <li id="name-text"><strong>SIMON WALTON</strong></li>
                <li id="description-text" style={{ position: 'relative' }}>
                  <Sparkle
                    color={'white'}
                    count={30}
                    flickerSpeed={'slow'}
                  />
                  <strong>Front End Developer</strong>
                </li>
                <li><Footer /></li>
              </ul>
            </Bounce>
          </Container>
        </div>
      )
    }
    return <Search />
  }
}

export default Home;