import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from '../components/Navbar';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';

class Home extends React.Component {
  render() {
    const Search = () => {
      const [showResults, setShowResults] = useState(false)
      const onClick = () => setShowResults(true)
      return (
        <Container fluid className="bg-div bg-blue">
          <RubberBand>
            <img
              src="https://avatars2.githubusercontent.com/u/60608204?s=460&u=517fe81ca49a5627e1e845120537a7a5b6f3b346&v=4"
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
            <Bounce bottom>
              <ul className="list-unstyled">
                <li><h1>Simon Walton</h1></li>
                <li><h2>Front End Developer</h2></li>
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


