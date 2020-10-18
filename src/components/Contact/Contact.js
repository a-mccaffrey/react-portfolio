import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

class Contact extends Component {
  render() {
    const styles = {
      fadeInLeft: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
      }
    };
    return (
      <StyleRoot>
        <div style={styles.fadeInLeft}>
          <Container className="contact-container">
            <Row>
              {/* Left Side Starts Here */}
              <Col md={6} className="help-container text-center">
                <h2>How can I help you?</h2>
                <h4>
                  I'm happy to help you on a contract, freelance, and full-time
                  basis in the following areas:
                </h4>
                <Row>
                  <Col className="icon-container">
                    <img
                      src="./assets/development-icon.svg"
                      alt=""
                      className="my-icons"
                      style={{ width: "75px" }}
                    />
                    <p>Front-End Web Development</p>
                  </Col>
                  <Col className="icon-container">
                    <img
                      src="./assets/ux-icon.svg"
                      alt=""
                      style={{ width: "75px" }}
                      className="my-icons"
                    />
                    <p>UX Design</p>
                  </Col>
                  <Col className="icon-container">
                    <img
                      src="./assets/graphic-design-icon.svg"
                      alt=""
                      style={{ width: "75px" }}
                      className="my-icons"
                    />
                    <p>Graphic Design</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="icon-container">
                    <img
                      src="./assets/video-editing-icon.svg"
                      alt=""
                      style={{ width: "75px" }}
                      className="my-icons"
                    />
                    <p>Video Editing and Animation</p>
                  </Col>
                  <Col className="icon-container">
                    <img
                      src="./assets/writing-icon.svg"
                      alt=""
                      style={{ width: "75px" }}
                      className="my-icons"
                    />
                    <p>Writing</p>
                  </Col>
                  <Col className="icon-container">
                    <img
                      src="./assets/consulting-icon.svg"
                      alt=""
                      style={{ width: "75px" }}
                      className="my-icons"
                    />
                    <p>Consulting</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      Don't see something on the list, but want to check if I
                      might be interested? I'm always down for a new experience.
                      Before my more marketing-focused work, I earned my living
                      in various roles: working the cash register at a small
                      family-owned restaurant, English tutoring, managing a
                      vintage clothing store, and a brief stint as an au pair in
                      China. I am happy to mentor, to offer pro-bono work for
                      charity, and to make new friends. Please feel free to get
                      in touch.
                    </p>
                  </Col>
                </Row>
              </Col>
              {/* Left Side ends here, right side begins */}
              <Col md={6}>
                <Form
                  className="mt-0"
                  action="https://formspree.io/mgenroaz"
                  method="POST"
                >
                  <Form.Group>
                    <Form.Label for="contact-name">Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label for="contact-email">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="_replyto"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label for="contact-message">Message</Form.Label>
                    <Form.Control
                      rows="4"
                      placeholder="Do you have anything special you want to say to me? Do you want to hire me? I would want to hire me, so I don't blame you."
                      name="message"
                      as="textarea"
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit" className="mybuttons m-0">
                    Submit
                  </Button>
                  <hr />
                  <h5 className="contact-form">
                    Further information (if you're feeling nosey)
                  </h5>
                  <p className="contact-form">
                    <i className="fas fa-envelope-open-text"></i>
                    <strong> For those who prefer email |</strong>
                    <a href="mailto: aisling.s.mccaffrey@gmail.com">
                      {" "}
                      Click Here
                    </a>
                  </p>
                  <p className="contact-form">
                    <i className="fas fa-map-marker-alt"></i>
                    <strong> Where I'd really like to work |</strong> Remotely
                    or in Luxembourg City
                  </p>
                  <p className="contact-form">
                    <i className="fas fa-phone"></i>
                    <strong> If you'd like to give me a call |</strong> Fill out
                    the form or email me first!
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </StyleRoot>
    );
  }
}

export default Contact;
