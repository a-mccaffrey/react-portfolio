import React, { Component, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class CodingModal extends Component {
    render() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3 class="m-5">
                  My entire portfolio (including graphics) was created from
                  scratch using GitHub, Bootstrap, React,
                  Illustrator, and Photoshop. I hope you enjoy it.
                </h3>
                <h4>Featured Projects</h4>
                {/* <!-- Recipe Generator --> */}
                <a
                  href="https://a-mccaffrey.github.io/aplus-foodies/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/recipe-generator.png"
                    alt="A screenshot of recipe generator application"
                    width="50%"
                    class="video-example"
                  />
                  <h5 class="pb-4">Recipe Generator Deployed Application</h5>
                </a>
                <p>
                  <a
                    href="https://github.com/a-mccaffrey/aplus-foodies"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    >Click here for GitHub repository
                  </a>
                </p>
                {/* <!-- Appointify --> */}
                <a
                  href="https://floating-inlet-71164.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/appointify.png"
                    alt="A screenshot of an application with the headline: An open source project for booking doctor's appointments"
                    width="50%"
                    class="video-example"
                  />
                  <h5 class="pb-4">Appointify</h5>
                </a>
                <p class="pb-4">
                  <a
                    href="https://github.com/a-mccaffrey/covid-doctor-checkup"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    >Click here for GitHub repository
                  </a>
                </p>
                <hr />
                <h4 class="pt-4">Additional GitHub projects</h4>
                {/* <!-- Weather Dashboard --> */}
                <a
                  href="https://a-mccaffrey.github.io/gabriels-weather-dashboard/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/Weather-Dashboard.png"
                    alt="A screenshot of a weather dashboard. The navbar is the colours of the Irish flag - green, white, and orange."
                    width="50%"
                    class="video-example"
                  />
                  <h5 class="pb-4">Gabriel's Weather Dashboard</h5></a
                >
                <p>
                  <a
                    href="https://github.com/a-mccaffrey/gabriels-weather-dashboard"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    >Click here for GitHub repository
                  </a>
                </p>
                {/* <!-- Work Day Scheduler --> */}
                <a
                  href="https://a-mccaffrey.github.io/workday-scheduler/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/Work-Scheduler.png"
                    alt="A screenshot of a work day scheduler - a simple calendar app for scheduling your workday."
                    width="50%"
                    class="video-example"
                  />
                  <h5 class="pb-4">Workday Scheduler</h5></a
                >
                <p>
                  <a
                    href="https://github.com/a-mccaffrey/workday-scheduler"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    >Click here for GitHub repository
                  </a>
                </p>
                {/* <!-- Note Taker --> */}
                <a
                  href="https://vast-citadel-57216.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/note-taker.png"
                    alt="A screenshot of a note taker application."
                    width="50%"
                    class="video-example"
                  />
                  <h5 class="pb-4">JSON Note Taker</h5></a
                >
                <p>
                  <a
                    href="https://github.com/a-mccaffrey/JSON-note-taker"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    >Click here for GitHub repository
                  </a>
                </p>
                {/* <!-- Readme Generator --> */}
                <a
                  href="https://github.com/a-mccaffrey/readme-generator"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/cli-readme.png"
                    alt="A screenshot of a command line application that generates a useable readme."
                    width="50%"
                    class="video-example"
                  />
                  <h5>
                    Readme Generator - Command Line Application (GitHub repo
                    only)
                  </h5></a
                >
                {/* <!-- Employee Summary Template Engine --> */}
                <a
                  href="https://github.com/a-mccaffrey/template-engine-employee-summary"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/employee-tracker.png"
                    alt="A screenshot of an employee summary template generated through a command line application."
                    width="50%"
                    class="video-example"
                  />
                  <h5>
                    Employee Summary Template Engine - Command Line Application
                    (GitHub repo only)
                  </h5></a
                >
                {/* <!-- MySQL Employee Tracker --> */}
                <a
                  href="https://github.com/a-mccaffrey/MySQL-Employee-Tracker"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  <img
                    src="./assets/Coding Screenshots/employee-manager.png"
                    alt="A screenshot of a command line application that helps track employees within an organization."
                    width="50%"
                    class="video-example"
                  />
                  <h5 class="pb-4">
                    MySQL Employee Tracker - Command Line Application (GitHub
                    repo only)
                  </h5></a
                >

                <hr />
                <h4 class="pt-4">WordPress Pages (Not full-stack)</h4>
                <a
                  href="https://pivotree.com/platforms/coveo-for-commerce/"
                  target="_blank"
                  class="d-block m-3"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                  >Coveo for Commerce Webpage</a
                >
                <a
                  href="https://pivotree.com/our-clients/tgi-fridays-sap-commerce-marketing-and-customer-data/"
                  target="_blank"
                  class="d-block m-3"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                  >Case Study Page</a
                >
                <a
                  href="https://pivotree.com/social-distancing-commerce-enablement-solutions/buy-online-pickup-in-store-bopis-with-curbside-pickup-by-pivotree/"
                  target="_blank"
                  class="d-block m-3"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                  >Buy Online Pickup in Store Solution Page</a
                >
                <a
                  href="https://pivotree.com/about-us/newsroom/"
                  target="_blank"
                  class="d-block m-3"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                  >Newsroom</a
                >
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CodingModal;