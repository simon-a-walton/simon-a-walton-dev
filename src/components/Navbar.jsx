import React from 'react'
import { Link } from "react-router-dom";
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';
import { navLinks } from './../data/navLinks';
import Badge from 'react-bootstrap/Badge'

const containerStyle = css({
  backgroundColor: 'white',
  color: colors.darkBlue,
  fontSize: "1.3em",
  "@media(max-width: 650px)": {
  fontSize: "0.8em"
  }
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
            {navLinks.map((nav) => (
              <div className="col">
                <Link to={nav.link} className={linkStyle}>
                  <div>
                    <i className={nav.icon} />
                  </div>
                  <div>
                    {nav.title}
                  </div>
                </Link>
              </div>
            ))}
            <div className="col">
              <a
                href="https://simonwaltondev.medium.com/your-first-create-react-app-website-resource-list-b50326389239"
                target="_blank"
                rel="noopener noreferrer"
                {...linkStyle}
              >
                <div>
                  <i className="fas fa-keyboard" />
                </div>
                Blog
                <Badge {...css({
                  backgroundColor: colors.babyPink,
                  verticalAlign: "text-top",
                  fontSize: "0.5em",
                  color: "white",
                  marginLeft: "2px"
                })}>
                  New
                </Badge>
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;





