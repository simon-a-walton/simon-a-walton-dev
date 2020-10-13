import React from 'react';
import Navbar from '../components/Navbar.jsx';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container" id="about-page">
        <div className="row pt-4">
          <div className="col-lg-4 col-md-12 text-center pb-3">
            <img
              src="https://avatars2.githubusercontent.com/u/60608204?s=460&u=517fe81ca49a5627e1e845120537a7a5b6f3b346&v=4"
              alt="Simon the Coding Machine"
              id="about-img"
            />
          </div>
        <div className="col-lg-8 col-md-12 ">
          <p>Full-Stack Web Developer with keen interested in Front End and UI design.  I have experience working with Product and Engineering teams as a Coach, giving me a working understanding of building products from a number of perspectives. A keen climber and a noob skateboarder.</p>
        </div>
        <div className="pt-4 text-center">
          <h3>Top Skills</h3>
          <ul id="top-skills">
            <li><i className="fab fa-react mx-1" /> <em>ReactJS</em></li>
            <li><i className="fab fa-js-square mx-1" id = "java" /> <em>Javascript ES6</em></li>
            <li><i className="fas fa-gem mx-1" id = "ruby" /> <em>Ruby on Rails</em></li>
            <li><i className="fab fa-bootstrap" /> <em>Bootstrap</em></li>
            <li><i className="fab fa-figma mx-1" /> <em>Figma</em></li>
            <li><i className="far fa-file-alt mx-1" id = "html" /> <em>HTML5</em></li>
            <li><i className="fas fa-paint-brush mx-1" id = "css" /> <em>SCSS</em></li>
            <li><i className="fas fa-network-wired"></i> <em>SQL</em></li>
          </ul>
          <a className="d-flex justify-content-end pt-2" href="./../images/SimonWaltonCV.pdf" download= "Simon Walton CV | 2020">
            <i className="fas fa-download" /> CV
          </a>
        </div>
      </div>
      </div>
    </>
  )
}

export default About;
