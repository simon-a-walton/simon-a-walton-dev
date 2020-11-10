import React from "react";
import { css } from "glamor";
import PropTypes from "prop-types";
import { colors } from './../constants/StyleConstants';
import Carousel from 'react-bootstrap/Carousel'

const imageBorder = css({
  border: "6px solid white",
  width: "250px"
});

const buttonStyling = css({
  "& a": {
    padding: "8px",
    backgroundColor: colors.babyPink,
    marginBottom: "20px",
    borderRadius: "4px",
    color: "white",
    "&:hover": {
      color: "black",
      textDecoration: "none"
    }
  }
});

const buttonList = css({
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  '& li': {
    margin: '10px',
    fontSize: 'calc(10px + 0.5vw)'
  }
});

class PortfolioLayout extends React.PureComponent {
  static propsTypes = {
    carouselItem: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    gitHref: PropTypes.string,
    siteHref: PropTypes.string
  };

  render() {
    return (
      <>
        <div className="row p-3">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4" {...css({ "@media(max-width: 992px)": { display: "flex", justifyContent: "center"} })}>
            <Carousel {...imageBorder}>
                {this.props.carouselItem}
            </Carousel>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 px-5 pt-4">
            <h4 className="py-2">{this.props.title}</h4>
            <h5 className="pb-4">{this.props.description}</h5>
            <h6>Features:</h6>
              {this.props.children}
            <ul {...buttonList}>
              <li {...buttonStyling}>
                <a
                  href={this.props.siteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The site
                  &nbsp; <i className="fas fa-laptop" />
                </a>
              </li>
              <li {...buttonStyling}>
              <a
                href={this.props.gitHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                The code
                &nbsp; <i className="fab fa-github" />
              </a>
            </li>
          </ul>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioLayout;





