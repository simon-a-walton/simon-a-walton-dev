import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Main from "./../images/Main.jpg"
import Empty from "./../images/Empty.jpg"
import New from "./../images/New.jpg"
import Popover from "./../images/Popover.jpg"
import Playlist from "./../images/Playlist.jpg"
import { listStyle } from './RealHealthMatters';
import PortfolioLayout from "./../components/PortfolioLayout";
import { ESList } from './../data/skillLists';

const EasyStreamin = () => {
  const images = [ Playlist, Popover, Empty, Main, New ];
  return (
    <>
      <PortfolioLayout
        carouselItem={images.map((image, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt={image}
              key={index}
            />
          </Carousel.Item>
        ))}
        title="Easy Streamin'"
        description="Personal Project: A fun web app for listening to Spotify playlists online for free"
        gitHref="https://github.com/simon-a-walton/easystreamin"
        siteHref="https://easystreamin.herokuapp.com/"
      >
      <ol>
        <li>User can securely make an account and login</li>
        <li>User can easily manage their playlists by adding and deleting</li>
        <li>User can add as many playlists as they wish</li>
        <li>JS popover when on a mobile device to remind that it is for desktop use only</li>
        <li>Sign up and start streaming!</li>
      </ol>
      <div className={listStyle} id="top-skills">
        { ESList.map((skill) => (
          <li><i className={skill.className} /> <em>{skill.name}</em></li>
        ))}
      </div>
    </PortfolioLayout>
  </>
  )
}

export default EasyStreamin;
