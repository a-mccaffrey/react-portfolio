import React, { Component } from "react";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Portfolio1 from "../../assets/portfolio-coding copy.png";
import Portfolio2 from "../../assets/portfolio-writing copy.png";
import Portfolio3 from "../../assets/portfolio-graphic-design.png";
import Portfolio4 from "../../assets/portfolio-animation.gif";
import Slider from "../Slider";
import "./Portfolio.css";



class Portfolio extends Component {
  render() {
    const portfolioItems = [
      { 
        title: "Full Stack Web Development",
        image: Portfolio1, 
        id: 1,
        link: "https://www.google.com",
        modalLink: "#"
      },
      { 
        title: "Professional Writing Examples",
        image: Portfolio2, 
        id: 2,
        link: "www.google.com",
        modalLink: "#"
      },
      {
        title: "Sample Graphic Design Work",
        image: Portfolio3, 
        id: 3,
        link: "www.google.com",
        modalLink: "#"
      },
      {
        title: "Video Editing and Animation Work",
        image: Portfolio4,
        id: 4,
        link: "www.google.com",
        modalLink: "#"
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
              {portfolioItems.map(( {title, image, id, link } ) => (
                <div
                  style={{ width: "22em", height: "400px", margin: "5em 3em 0 3em", textAlign: "center"}}
                  key={id}
                >
                  <h4>
                  { title }
                </h4>
                  <img style={{ height: "200px", margin: "1em" }} 
                  src={image} alt="" />
                  <Button
                    className="mybuttons more my-modals"
                    data-toggle="modal"
                    data-target={ link }
                    >Check it out</ Button>
                </div>
              ))}
            </Slider>
            {/* <div className="carousel" data-flickity>
                <div className="carousel-cell">
                  <h3>Full Stack Web Development</h3>
                  <Button
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#fullStackModal"
                    >Check it out</ Button>
                  <img
                    src="./assets/portfolio-coding copy.png"
                    className="carousel-image"
                    alt="Watercolour wireframe of a browser with code inside it"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>Projects to show a variety of skills</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <h3>Professional Writing Examples</h3>
                  <Button
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#writingModal"
                    >Check it out</ Button>
                  <img
                    src="./assets/portfolio-writing copy.png"
                    className="carousel-image"
                    alt="Writing that says 'Stubborn on vision, Flexible on details' but a 'b' in 'Stubborn' had to be added back in"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>eCommerce-focused</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <h3>Sample Graphic Design Work</h3>
                  <Button
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#graphicDesignModal"
                    >Check it out</ Button>
                  <img
                    src="./assets/portfolio-graphic-design.png"
                    className="carousel-image"
                    alt="Sketches of two people in traditional tattoo style"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>For work, fun, and by commission</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <h3>Video Editing and Animation Work</h3>
                  <Button
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#videoAnimationModal"
                    >Check it out</ Button>
                  <img
                    src="./assets/portfolio-animation.gif"
                    className="carousel-image"
                    alt="An animation of a yellow gust of wind circling a watercolour flower"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>Freelance and corporate</span>
                  </div>
                </div>
              </div>
              <div id="portfolio-contact">
                <Button className="myButtons mx-auto" href="#contact-me"
                  >Get in Touch</ Button>
              </div> */}
          </div>
        </Container>
        {/* </section>     */}
      </div>
    );
  }
}

export default Portfolio;
