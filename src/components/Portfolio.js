import React from "react"
 
function Portfolio(props) {
  return (
    <div>
<section id="portfolio-section">
          <div className="container">
            <div className="carousel-wrapper">
              <h2 className="portfolio-h2">Portfolio</h2>
              <div className="carousel" data-flickity>
                <div className="carousel-cell">
                  <h3>Full Stack Web Development</h3>
                  <a
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#fullStackModal"
                    >Check it out</a
                  >
                  <img
                    src="./assets/portfolio-coding copy.png"
                    className="carousel-image"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>Projects to show a variety of skills</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <h3>Professional Writing Examples</h3>
                  <a
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#writingModal"
                    >Check it out</a
                  >
                  <img
                    src="./assets/portfolio-writing copy.png"
                    className="carousel-image"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>eCommerce-focused</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <h3>Sample Graphic Design Work</h3>
                  <a
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#graphicDesignModal"
                    >Check it out</a
                  >
                  <img
                    src="./assets/portfolio-graphic-design.png"
                    className="carousel-image"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>For work, fun, and by commission</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <h3>Video Editing and Animation Work</h3>
                  <a
                    className="more my-modals"
                    data-toggle="modal"
                    data-target="#videoAnimationModal"
                    >Check it out</a
                  >
                  <img
                    src="./assets/portfolio-animation.gif"
                    className="carousel-image"
                  />
                  <div className="line"></div>
                  <div className="description">
                    <span>Freelance and corporate</span>
                  </div>
                </div>
              </div>
              <div id="portfolio-contact">
                <a className="mybuttons mx-auto" href="#contact-me" role="button"
                  >Get in Touch</a
                >
              </div>
            </div>
          </div>
        </section>    </div>
  )
}
 
export default Portfolio;