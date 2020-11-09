import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import RHM1 from "./../images/RHM1.jpg"
import RHM2 from "./../images/RHM2.jpg"
import RHM3 from "./../images/RHM3.jpg"
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';

export const imageBorder = css({
  border: `6px solid white`
});

export const listStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: colors.darkBlue,
  padding: '8px',
  margin: '40px 0',
  borderRadius: '8px'
});

export const buttonList = css({
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
});

export const buttonListItem = css({
  margin: '10px',
  fontSize: 'calc(10px + 0.5vw)'
})

const RealHealthMatters = () => {
  const images = [ RHM1, RHM2, RHM3 ];
  return (
    <>
    <div className="row p-3">
      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <Carousel {...imageBorder}>
          {images.map((image, index) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image}
                alt={image}
                key={index}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 px-5 pt-4">
        <h5 className="py-4">A website for a Health Coaching company</h5>
         <h6>Features:</h6>
        <ol>
          <li>User can see the coach's location on Mapbox map</li>
          <li>User can send a message via an embedded form</li>
          <li>There is a fun animation on the homepage with the title text appearing line-by-line</li>
          <li>This is my first project using ReactJS and using in-line styling with Glamor</li>
        </ol>
        <div className={listStyle} id="top-skills">
          <li><i className="fab fa-js-square mx-1" id = "java" /> <em>Javascript ES6</em></li>
          <li><i className="fab fa-react" /> <em>ReactJS</em></li>
          <li><i className="fab fa-bootstrap" /> <em>Bootstrap</em></li>
          <li><i className="fas fa-palette" /> <em>Glamor</em></li>
        </div>
        <div {...buttonList}>
          <li {...buttonListItem}>
            <a
              className="git-button"
              href="https://realhealthmatters.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              The site
              <i className="fas fa-laptop" />
            </a>
          </li>
          <li {...buttonListItem}>
            <a
              className="git-button"
              href="https://github.com/simon-a-walton/sam-mann"
              target="_blank"
              rel="noopener noreferrer"
            >
              The code
              <i className="fab fa-github" />
            </a>
          </li>
        </div>
      </div>
    </div>
  </>
  )
}

export default RealHealthMatters;
