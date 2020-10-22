import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bedjevent from './../images/bedjevent.jpg';
import bedjhome from './../images/bedjevent.jpg';
import bedjlist from './../images/bedjlist.jpg';
import bedjmap from './../images/bedjmap.jpg';
import bedjplay from './../images/bedjplay.jpg';
import { imageBorder, listStyle, buttonList, buttonListItem } from './RealHealthMatters';


const Bethedj = () => {
  return (
    <>
    <div className="row p-3">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <Carousel {...imageBorder}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bedjevent}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bedjhome}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bedjlist}
              alt="Third slide"
            />
          </Carousel.Item>
           <Carousel.Item>
            <img
              className="d-block w-100"
              src={bedjmap}
              alt="Fourth slide"
            />
          </Carousel.Item>
           <Carousel.Item>
            <img
              className="d-block w-100"
              src={bedjplay}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 px-5 pt-4">
        <h5 className="py-4">A mobile web-app for requesting songs in bars and clubs</h5>
        <h6>Features for Bars:</h6>
        <ol>
          <li>It uses Soptify's API to add songs to a playlist's queue and display which song is currently playing</li>
          <li>Once a song has been added to a playlist's queue, the request button disappears and other users cannot request the same song</li>
        </ol>
         <h6>Features for Clubs:</h6>
        <ol>
          <li>A DJ can upload their playlist for an event at a certain venue.</li>
          <li>The DJ has a dashboard where they can see the top requested songs of the night.</li>
        </ol>
        <div className={listStyle} id="top-skills">
          <li><i className="fas fa-gem mx-1" id = "ruby" /> <em>Ruby on Rails</em></li>
          <li><i className="fab fa-spotify" /> <em>Spotify API</em></li>
          <li><i className="fas fa-map-marked-alt" /> <em>Mapbox API</em></li>
          <li><i className="fab fa-js-square mx-1" id = "java" /> <em>Javascript ES6</em></li>
          <li><i className="fab fa-bootstrap" /> <em>Bootstrap</em></li>
        </div>
        <div {...buttonList}>
          <li {...buttonListItem}><a className="git-button" href='https://simon-a-walton.github.io/sam-mann/'>The site <i className="fas fa-laptop" /></a></li>
          <li {...buttonListItem}><a className="git-button" href='https://github.com/simon-a-walton/sam-mann'>The code <i className="fab fa-github" /></a></li>
        </div>
      </div>
    </div>
  </>
  )
}

export default Bethedj;

