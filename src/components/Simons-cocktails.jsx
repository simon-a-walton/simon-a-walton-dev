import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import c1 from "./../images/c1.jpg"
import c2 from "./../images/c2.jpg"
import c3 from "./../images/c3.jpg"
import c4 from "./../images/c4.jpg"

const SimonsCocktails = () => {
  return (
    <>
    <div className="row p-3">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <Carousel style={{border:'6px solid white'}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <p className="pt-2 hashtag-text"><em>#rubyonrails #mapboxAPI #cloudinaryAPI</em></p>
      </div>
        <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8 pt-2 text-left">
          <h5 className="pb-2">A web app for cocktail recipes</h5>
          <h6>Features:</h6>
          <ol>
            <li>Users can add their own cocktails and upload pictures</li>
            <li>Each cocktail has a list of ingredients and dosages, which users can edit</li>
            <li>Give it a go!</li>
          </ol>
          <p><a className="git-button" href='#'>Visit the site <i className="fas fa-laptop" /></a></p>
          <p><a className="git-button" href='#'>See the code <i className="fab fa-github" /></a></p>
        </div>
      </div>
    </>
  )
}

export default SimonsCocktails;
