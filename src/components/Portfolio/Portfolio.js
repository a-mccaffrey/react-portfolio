import React, { Component } from "react";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Portfolio1 from "../../assets/portfolio-coding copy.png";
import Portfolio2 from "../../assets/portfolio-writing copy.png";
import Portfolio3 from "../../assets/portfolio-graphic-design.png";
import Portfolio4 from "../../assets/portfolio-animation.gif";
import Slider from "../Slider";
import "./Portfolio.css";
// import MyModals from "../MyModals";
import CodingModal from "../Modals/CodingModal";
import WritingModal from "../Modals/WritingModal";
import GraphicModal from "../Modals/GraphicModal";
import VideoModal from "../Modals/VideoModal";
// import { render } from "@testing-library/react";

class Portfolio extends Component {
  render() {
    const portfolioItems = [
      { 
        title: "Coding",
        image: Portfolio1, 
        id: 1,
        Modal: CodingModal
      },
      { 
        title: "Writing",
        image: Portfolio2, 
        id: 2,
        Modal: WritingModal
      },
      {
        title: "Graphic Design",
        image: Portfolio3, 
        id: 3,
        Modal: GraphicModal
      },
      {
        title: "Video/Animation",
        image: Portfolio4,
        id: 4,
        Modal: VideoModal
      }
    ];

    
    return (
      <div>
        {/* <section id="portfolio-section" > */}
        <Container className="portfolio-container">
          <div className="carousel-wrapper">
            <h2 className="portfolio-h2">Portfolio</h2>
            <Slider
              options={{
                autoPlay: 4000,
                pauseAutoPlayOnHover: true,
                wrapAround: false,
                fullscreen: true,
                adaptiveHeight: true,
              }}
            >
              {portfolioItems.map(( {title, image, id, Modal} ) => (
                <div
                  style={{ width: "22em", height: "400px", margin: "5em 2em 0 2em", textAlign: "center"}}
                  key={id}
                >
                <h4>
                  { title }
                </h4>
                  <img style={{ height: "200px", margin: "1em" }} 
                  src={image} alt="" />
                  {/* Where the magic happens */}
                  {Modal && <Modal />}
                </div>
              ))}
            </Slider>    
            </div>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
