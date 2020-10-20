import React from 'react'
import { Link } from "react-router-dom";
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';

const containerStyle = css({
  backgroundColor: 'white',
  color: colors.darkBlue
});

const linkStyle = css({
  color: colors.darkBlue,
  ':hover': {textDecoration: 'none', color: colors.babyPink}
});

class Navbar extends React.PureComponent {
  render() {
    return (
      <>
        <nav className={`p-3 ${containerStyle}`}>
          <div className="row text-center ">
            <div className="col d-flex justify-content-around">
              {/*<Link to='/' className={this.props.linkClassName}>
                  <i className="fas fa-house-damage" />
              </Link>*/}
              <Link to='/about' className={linkStyle}>
                <ul className="list-unstyled">
                  <li><i className="fas fa-laptop-code" /></li>
                  <li>About</li>
                 </ul>
              </Link>
            </div>
            <div id="portfolio-nav" className="col">
              <Link to='/portfolio' className={linkStyle}>
                <strong>Portfolio</strong>
              </Link>
            </div>
            <div className="col">
              <Link to='/contact' className={linkStyle}>
                <ul className="list-unstyled">
                  <li><i className="fas fa-paper-plane" /></li>
                  <li>Contact</li>
                </ul>
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;





