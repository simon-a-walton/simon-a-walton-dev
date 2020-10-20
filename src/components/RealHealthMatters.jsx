import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import RHM1 from "./../images/RHM1.jpg"
import RHM2 from "./../images/RHM2.jpg"
import RHM3 from "./../images/RHM3.jpg"
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';

export const imageBorder = css({
  border: `6px solid ${colors.darkBlue}`
})

const Bethedj = () => {
  return (
    <>
    <div className="row p-3">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
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
        <p className="pt-2 hashtag-text"><em>#rubyonrails #spotifyAPI #mapboxAPI</em></p>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8 pt-2 text-left">
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
        <p><a className="git-button" href='#'>Visit the site <i className="fas fa-laptop" /></a></p>
        <p><a className="git-button" href='#'>See the code <i className="fab fa-github" /></a></p>
      </div>
    </div>
  </>
  )
}

export default Bethedj;
