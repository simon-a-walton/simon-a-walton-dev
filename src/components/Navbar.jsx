import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Navbar extends React.PureComponent {
  static propsTypes = {
  containerClassName: PropTypes.string,
  linkClassName: PropTypes.string
};
  render() {
      return (
    <>
      <nav className={`p-3 ${this.props.containerClassName}`}>
        <div className="row text-center ">
          <div className="col d-flex justify-content-around">
            <Link to='/' className={this.props.linkClassName}>
                <i className="fas fa-arrow-left" />
            </Link>
            <Link to='/about' className={this.props.linkClassName}>
              <ul className="list-unstyled">
                <li><i className="fas fa-laptop-code" /></li>
                <li>About</li>
               </ul>
            </Link>
          </div>
          <div id="portfolio-nav" className="col">
            <Link to='/portfolio' className={this.props.linkClassName}>
              <strong>Portfolio</strong>
            </Link>
          </div>
          <div className="col">
            <a href="mailto:simonwaltondev@gmail.com" className={this.props.linkClassName}>
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

}

export default Navbar;





