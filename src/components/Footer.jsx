import React from 'react';
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';
import { socialLinks } from "./../constants/LinkConstants";

const iconSizing = css({
  fontSize: 'calc(16px + 1.2vh)'
});

const iconStyle = css({
  color: "white",
  ":hover": {
    color: colors.babyPink
  }
});

class Footer extends React.PureComponent {
  render() {
    return (
      <>
        <footer id="footer" className={`p-3 ${iconSizing}`}>
          <div className="row text-center ">
            <div className="col">
              <a href={socialLinks.github}><i className={`fab fa-github ${iconStyle}`} /></a>
            </div>
             <div className="col">
              <a href={socialLinks.linkedin}><i className={`fab fa-linkedin ${iconStyle}`} /></a>
            </div>
             <div className="col">
              <a href={socialLinks.angellist}><i className={`fab fa-angellist ${iconStyle}`} /></a>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer;
