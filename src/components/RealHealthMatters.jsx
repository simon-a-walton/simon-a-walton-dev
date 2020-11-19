import React from "react";
import Carousel from "react-bootstrap/Carousel";
import RHM1 from "./../images/RHM1.jpg";
import RHM2 from "./../images/RHM2.jpg";
import RHM3 from "./../images/RHM3.jpg";
import { css } from "glamor";
import { colors } from "./../constants/StyleConstants";
import PortfolioLayout from "./../components/PortfolioLayout";
import { RHMList } from "./../data/skillLists";

export const listStyle = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  backgroundColor: "white",
  color: colors.darkBlue,
  padding: "8px",
  margin: "40px 0",
  borderRadius: "8px"
});

export const buttonList = css({
  padding: 0,
  margin: 0,
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  "& li": {
    margin: "10px",
    fontSize: "calc(10px + 0.5vw)"
  }
});

const RealHealthMatters = () => {
  const images = [ RHM1, RHM2, RHM3 ];
  return (
    <>
      <PortfolioLayout
        carouselItem={images.map((image, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt={image}
              key={index}
            />
          </Carousel.Item>
        ))}
        title="Real Health Matters"
        description="A website for a Health Coaching company"
        gitHref="https://github.com/simon-a-walton/sam-mann"
        siteHref="https://realhealthmatters.co.uk"
      >
      <ol>
        <li>User can see the coach's location on Mapbox map</li>
        <li>User can send a message via an embedded form</li>
        <li>There is a fun animation on the homepage with the title text appearing line-by-line</li>
        <li>This is my first project using ReactJS and using in-line styling with Glamor</li>
      </ol>
      <div className={listStyle} id="top-skills">
        { RHMList.map((skill, index) => (
          <li key={index}>
            <i className={skill.className} /> <em>{skill.name}</em>
          </li>
        ))}
      </div>
    </PortfolioLayout>
  </>
  )
}

export default RealHealthMatters;
