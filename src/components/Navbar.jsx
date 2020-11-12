import React from 'react'
import { Link } from "react-router-dom";
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';
import { navLinks } from './../data/navLinks';
import { Markup } from 'interweave';

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
            {navLinks.map((nav) => (
              <div className={nav.className} id={nav.id}>
                <Link to={nav.link} className={linkStyle}>
                  <Markup content={nav.content} />
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;





