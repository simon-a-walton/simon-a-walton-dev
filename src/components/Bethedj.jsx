import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bedjevent from "./../images/bedjevent.jpg";
import bedjhome from "./../images/bedjhome.jpg";
import bedjlist from "./../images/bedjlist.jpg";
import bedjmap from "./../images/bedjmap.jpg";
import bedjplay from "./../images/bedjplay.jpg";
import { listStyle } from "./RealHealthMatters";
import PortfolioLayout from "./../components/PortfolioLayout";
import { DJList } from "./../data/skillLists";


const Bethedj = () => {
  const images = [ bedjhome, bedjevent, bedjlist, bedjmap, bedjplay ];
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
        title="BEtheDJ"
        description="A mobile web-app for requesting songs in bars and clubs"
        gitHref="https://github.com/Marc-Medlej/BEtheDJ"
        siteHref="http://www.bethedj.club/"
      >
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
        { DJList.map((skill, index) => (
          <li key={index}>
            <i className={skill.className} /> <em>{skill.name}</em>
          </li>
        ))}
      </div>
    </PortfolioLayout>
  </>
  )
}

export default Bethedj;

