import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const iconSizing = css({
  fontSize: 'calc(16px + 1.2vh)'
});

const iconStyle = css({
  color: 'white',
  ':hover': {
    color: 'black'
  }
});


class Footer extends React.PureComponent {
  static propsTypes = {
    link: PropTypes.string,
    iconName: PropTypes.string
  };

  render() {
    return (
      <>
        <footer id="footer" className={`p-3 ${iconSizing}`}>
          <div className="row text-center ">
            <div className="col">
              <a href={this.props.link}><i className={`fab fa-${this.props.iconName} ${iconStyle}`} /></a>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer;
