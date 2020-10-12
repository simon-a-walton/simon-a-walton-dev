import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="p-3">
        <div className="row text-center ">
          <div className="col">
            <Link to='/about'>
              <ul className="list-unstyled">
                <li><i className="fas fa-laptop-code" /></li>
                <li>About</li>
               </ul>
            </Link>
          </div>
          <div id="portfolio-nav" className="col">
            <Link to='/portfolio'>
              <strong>Portfolio</strong>
            </Link>
          </div>
          <div className="col">
            <a href="mailto:simonwaltondev@gmail.com">
              <ul className="list-unstyled">
                <li><i className="fas fa-paper-plane" /></li>
                <li>Contact</li>
              </ul>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
