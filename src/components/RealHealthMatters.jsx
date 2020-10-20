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
  borderRadius: '8px'
});

export const buttonList = css({
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
});

export const buttonListItem = css({
  margin: '10px',
  fontSize: '12px'
})

const RealHealthMatters = () => {
  return (
    <>
    <div className="row p-3">
      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <Carousel {...imageBorder}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={RHM1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={RHM2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={RHM3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 pt-2">
        <ul className={listStyle} id="top-skills">
          <li><i className="fab fa-js-square mx-1" id = "java" /> <em>Javascript ES6</em></li>
          <li><i className="fab fa-react" /> <em>ReactJS</em></li>
          <li><i className="fab fa-bootstrap" /> <em>Bootstrap</em></li>
          <li><i className="fas fa-palette" /> <em>Glamor</em></li>
        </ul>
        <h5 className="pb-2">A website for the Health Coaching company 'Real Health Matters'</h5>
         <h6>Features:</h6>
        <ol>
          <li>User can see the coach's location on Mapbox map</li>
          <li>User can send a message via an embedded form</li>
          <li>There is a fun animation on the homepage with the title text appearing line-by-line</li>
          <li>This is my first project using ReactJS and using in-line styling with Glamor</li>
        </ol>
        <ul {...buttonList}>
          <li {...buttonListItem}><a className="git-button" href='https://simon-a-walton.github.io/sam-mann/'>Visit the site <i className="fas fa-laptop" /></a></li>
          <li {...buttonListItem}><a className="git-button" href='https://github.com/simon-a-walton/sam-mann'>See the code <i className="fab fa-github" /></a></li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default RealHealthMatters;
