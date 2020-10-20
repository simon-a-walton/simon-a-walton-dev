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

      <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 pt-2 text-left">
        <ul className={listStyle} id="top-skills">
          <li><i className="fas fa-gem mx-1" id = "ruby" /> <em>Ruby on Rails</em></li>
          <li><i className="fab fa-spotify" /> <em>Spotify API</em></li>
          <li><i className="fas fa-map-marked-alt" /> <em>Mapbox API</em></li>
          <li><i className="fab fa-js-square mx-1" id = "java" /> <em>Javascript ES6</em></li>
          <li><i className="fab fa-bootstrap" /> <em>Bootstrap</em></li>
        </ul>
        <h5 className="pb-2">A mobile web-app for requesting songs in bars and clubs</h5>
        <h6>Features for Bars:</h6>
        <ol>
          <li>It uses Soptify's API to add songs to a playlist's queue and display which song is currently playing</li>
          <li>Once a song has been added to a playlist's queue, the request button disappears and other users cannot request the same song</li>
        </ol>
         <h6>Features for Clubs:</h6>
        <ol>
          <li>A DJ can upload their playlist for an event at a certain venue.</li>
          <li>Clubbers can search through this playlist and can request the songs they want.</li>
          <li>The DJ has a dashboard where they can see the top requested songs of the night.</li>
          <li>Once the DJ has played the track, all users will see this on their dashboard and they cannot vote again.</li>
        </ol>
        <ul {...buttonList}>
          <li {...buttonListItem}><a className="git-button" href='http://www.bethedj.club/'>Visit the site <i className="fas fa-laptop" /></a></li>
          <li {...buttonListItem}><a className="git-button" href='https://github.com/Marc-Medlej/BEtheDJ'>See the code <i className="fab fa-github" /></a></li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default Bethedj;

