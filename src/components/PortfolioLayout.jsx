import React from "react";
import { css } from "glamor";
import PropTypes from "prop-types";
import { colors } from "./../constants/StyleConstants";
import Carousel from "react-bootstrap/Carousel";

export const fontAltering = css({
  "@media(min-width: 1300px)": {
    fontSize: "1.3em",
  "& h3, h5, h6, a, span": {
     fontSize: "1.3em"
  },
  }
});

// const imageBorder = css({
//   border: "6px solid white",
//   width: "100%",
//   "@media(max-width: 800px)": {
//   width: "250px",
//   }
// });

const buttonStyling = css({
  "& a": {
    color: "white",
    "&:hover": {
      color: "black",
      textDecoration: "none"
    }
  },
  // "& i": {
  //   width: "calc(20px + 0.5vw)",
  //   textAlign: "center"
  // }
});

const buttonList = css({
  padding: 0,
  margin: "0 0 0 10px",
  listStyleType: "none",
  display: "inline-block",
  justifyContent: "center",
  verticalAlign: "text-top",
  "& li": {
    margin: "8px",
    fontSize: "calc(10px + 0.5vw)",
    display: "inline-block"
  }
});

class PortfolioLayout extends React.PureComponent {
  static propsTypes = {
    carouselItem: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    update: PropTypes.string,
    gitHref: PropTypes.string,
    siteHref: PropTypes.string
  };

  render() {
    return (
      <>
        <div className="row p-3">
          <div
            align="center"
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4" {...css({ "@media(max-width: 992px)": { display: "flex", justifyContent: "center"} })}>
            <Carousel>
              {this.props.carouselItem}
            </Carousel>
          </div>
          <div className={`col-sm-12 col-md-12 col-lg-8 col-xl-8 px-md-5 pt-4 ${fontAltering}`}>
            <h3 className="py-2 mb-5" {...css({ "@media(max-width: 992px)": { fontSize: "1.2rem" } })}>
              <span {...css({ background: colors.babyPink, fontWeight: "bold", padding: "8px", borderRadius: "4px" })}>
                {this.props.title}
                <ul {...buttonList}>
                <li {...buttonStyling}>
                  <a
                    href={this.props.siteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="The site"
                  >
                   <i className="fas fa-laptop" />
                  </a>
                </li>
                <li {...buttonStyling}>
                  <a
                    href={this.props.gitHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="The code"
                  >
                   <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
              </span>
            </h3>
            <h5 className="pb-4">
              {this.props.description}
            </h5>
            <h6>Features:</h6>
              {this.props.children}

          </div>
        </div>
      </>
    );
  }
}

export default PortfolioLayout;





