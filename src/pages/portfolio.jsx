import React from "react";
import Navbar from "../components/Navbar.jsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bethedj from "../components/Bethedj.jsx";
import RealHealthMatters from "../components/RealHealthMatters.jsx";
import EasyStreamin from "../components/EasyStreamin.jsx";
import PureClean from "../components/PureClean.jsx";
import { css } from "glamor";

const fontAltering = css({
  "@media(min-width: 1300px)": {
    fontSize: "1.3em",
  "& h3, h5, h6, a": {
     fontSize: "1.3em"
  },
  }
});

const Portfolio = () => {
  const titles = [ "PureClean", "Easy Streamin'", "Real Health Matters", "BeTheDJ" ];
  return (
    <>
      <Navbar />
      <div className={`container-fluid ${css({ color: "white", "@media(max-width: 650px)": { fontSize: "0.8em" } })}`} id="portfolio-page">
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
          <Row>
            <Col sm={3} className="mt-3">
              <Nav variant="pills" className="flex-column">
                {titles.map((title, index) => (
                  <Nav.Item>
                    <Nav.Link eventKey={index} {...fontAltering}>{title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="0">
                  <PureClean />
                </Tab.Pane>
                <Tab.Pane eventKey="1">
                  <EasyStreamin />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <RealHealthMatters />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <Bethedj />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  )
}

export default Portfolio;
