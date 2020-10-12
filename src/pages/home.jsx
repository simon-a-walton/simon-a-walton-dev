import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import Sparkle from 'react-sparkle';
import simonlogo from './../images/simonlogo.png';

class Home extends React.Component {
  render() {
    const Search = () => {
      const [showResults, setShowResults] = useState(false)
      const onClick = () => setShowResults(true)
      return (
        <Container fluid className="bg-div bg-blue">
          <RubberBand delay={1250}>
            <img
              src={simonlogo}
              onClick={onClick}
              alt="Simon the Coding Machine"
              className="simon-image"
            />
          </RubberBand>
            { showResults ? <Results/> : null }
        </Container>
    )
  }

    const Results = () => {
      return (
        <div>
          <Bounce top>
            <Navbar />
          </Bounce>
          <Container className="homepage text-center text-white">
           <img
              src="https://avatars2.githubusercontent.com/u/60608204?s=460&u=517fe81ca49a5627e1e845120537a7a5b6f3b346&v=4"
              alt="Simon the Coding Machine"
              className="simon-image"
            />
            <Bounce bottom>
              <ul id="home-list "className="list-unstyled pt-1">
                <li id="name-text">SIMON WALTON</li>
                <li style={{ position: 'relative' }}>
                  <Sparkle
                    color={'pink'}
                    count={30}
                    flickerSpeed={'slow'}
                  />
                  Front End Developer
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
