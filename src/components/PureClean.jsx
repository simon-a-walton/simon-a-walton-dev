import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Main from "./../images/pc-main.jpg"
import Tab from "./../images/pc-tab.jpg"
import Contact from "./../images/pc-contact.jpg"
import Modal from "./../images/pc-modal.jpg"
import Promises from "./../images/pc-promise.jpg"
import { imageBorder, listStyle, buttonList, buttonListItem } from './RealHealthMatters';

const PureClean = () => {
  const images = [ Main, Tab, Contact, Modal, Promises ];
  return (
    <>
    <div className="row p-3">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
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
        <h5 className="py-4">A website for a new window cleaning company</h5>
          <h6>Features:</h6>
          <ol>
            <li>User can see the company's location on embedded google map</li>
            <li>User can send a message via an embedded form</li>
            <li>React-Bootsrap used for the tabs in the Services page for better clarity of navigation</li>
            <li>CSS-in-JS used with Glamor plugin</li>
          </ol>
          <div className={listStyle} id="top-skills">
            <li><i className="fab fa-react" /> <em>ReactJS</em></li>
            <li><i className="fab fa-bootstrap" /> <em>React-Bootstrap</em></li>
            <li><i className="fas fa-palette" /> <em>Glamor</em></li>
            <li><i className="fas fa-cloud-upload-alt" /> <em>Cloudinary</em></li>
          </div>
          <div {...buttonList}>
            <li {...buttonListItem}>
              <a
                className="git-button"
                href="https://pure-clean.vercel.app/"
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
                href="https://github.com/simon-a-walton/pure-clean"
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

export default PureClean;
