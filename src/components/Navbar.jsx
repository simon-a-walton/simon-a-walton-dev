import React from "react";
import { Link } from "react-router-dom";
import { css } from "glamor";
import { colors } from "./../constants/StyleConstants";
import { navLinks } from "./../data/navLinks";
import Badge from "react-bootstrap/Badge";

const gridContainer =css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  textAlign: "center"
});

const containerStyle = css({
  backgroundColor: "white",
  color: colors.darkBlue,
  fontSize: "1.3em",
  "@media(max-width: 650px)": {
  fontSize: "0.8em"
  }
});

const backButton = css({
  color: "inherit",
  position: "absolute",
  top: 28,
  left: 30,
  "@media(max-width: 650px)": {
    top: 28,
    left: 12
  }
});

const linkStyle = css({
  color: colors.darkBlue,
  ":hover": {textDecoration: "none", color: colors.babyPink}
});

class Navbar extends React.PureComponent {
  render() {
    return (
      <>
        <nav className={`p-3 ${containerStyle}`}>
          <div {...gridContainer}>
            <a
              href ="/"
              {...backButton}
              className={ window.location.pathname === "/" ? "invisible" : "visible" }
            >
              <i className="fas fa-chevron-left" />
            </a>
            {navLinks.map((nav, index) => (
              <div key={index}>
                <Link to={nav.link} {...linkStyle}>
                  <div className={ window.location.pathname === nav.link ? "activated" : "" }>
                    <div>
                      <i className={nav.icon} />
                    </div>
                    <div>
                      {nav.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div>
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





