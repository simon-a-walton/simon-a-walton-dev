import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Main from "./../images/pc-main.jpg";
import Tab from "./../images/pc-tab.jpg";
import Contact from "./../images/pc-contact.jpg";
import Modal from "./../images/pc-modal.jpg";
import Promises from "./../images/pc-promise.jpg";
import { listStyle } from "./RealHealthMatters";
import PortfolioLayout from "./../components/PortfolioLayout";
import { PCList } from "./../data/skillLists";

const PureClean = () => {
  const images = [ Main, Tab, Contact, Modal, Promises ];
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
        title="PureClean"
        update="Currently in Development:"
        description=" A website for a new window cleaning company"
        gitHref="https://github.com/simon-a-walton/pure-clean"
        siteHref="https://pure-clean.vercel.app/"
      >
      <ol>
        <li>User can see the company's location on embedded google map</li>
        <li>User can send a message via an embedded form</li>
        <li>React-Bootsrap used for the tabs in the Services page for better clarity of navigation</li>
        <li>CSS-in-JS used with Glamor plugin</li>
      </ol>
      <div className={listStyle} id="top-skills">
        { PCList.map((skill, index) => (
          <li key={index}>
            <i className={skill.className} /> <em>{skill.name}</em>
          </li>
        ))}
      </div>
    </PortfolioLayout>
  </>
  )
}

export default PureClean;




