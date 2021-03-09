import React, {useState} from "react";
import Container from "react-bootstrap/Container"
import { colors } from "./../constants/StyleConstants";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import Sparkle from "react-sparkle";
import simonHeadshot from "./../images/simon-headshot.jpg";
import { css } from "glamor";

const nameText = css({
  fontSize: "calc(10px + 1.6vw)"
});

const descriptionText =css({
  fontSize: "calc(10px + 1.2vw)",
  position: "relative"
});

const headshotImage = css({
  border: `4px solid ${colors.babyPink}`,
  height: "30%",
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "auto",
  marginBottom: "auto",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: "50%",
  "&:hover": {
    cursor: "pointer"
  }
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
              title="Click me to enter!"
              {...headshotImage}
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
            <Navbar />
          </Bounce>
          <Container className="homepage text-center text-white">
           <img
              src={simonHeadshot}
              alt="Simon the Coding Machine"
              {...headshotImage}
            />
            <Bounce bottom>
              <ul className="list-unstyled">
                <li {...nameText}><strong>SIMON WALTON</strong></li>
                <li {...descriptionText}>
                  <Sparkle
                    color={"white"}
                    count={30}
                    flickerSpeed={"slow"}
                  />
                  <strong>Web Developer & Coach</strong>
                </li>
                <li>
                  <Footer />
                </li>
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
