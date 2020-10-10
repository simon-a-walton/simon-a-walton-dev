import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="p-3 bg-blue">
        <div className="row text-center ">
          <div className="col">
            <Link to='/portfolio'>Portfolio</Link>
          </div>
          <div className="col">
            <Link to='/about'>About</Link>
          </div>
          <div className="col">
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
