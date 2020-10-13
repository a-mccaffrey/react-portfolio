import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  playAudio(event) {
    event.preventDefault();
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  render() {
    return (
      <div>
        <header className="content-container hero">
          <div className="hero-text">
            <h1 className="display-4 text-center">Hello, Moien!</h1>
            <p className="lead text-center">
              My name is Aisling McCaffrey
              <button
                onClick={this.playAudio}
                className="pronunciation-button p-1"
              >
                <i
                  className="fa fa-volume-up"
                  data-tooltip
                  title="Click to hear name pronunciation"
                ></i>
              </button>
              <audio className="audio-element">
                <source src="../assets/Aisling_McCaffrey_Name_Audio.mp3"></source>
              </audio>
              <a
                href="https://babynames.com/name/Aisling"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
                className="iconography p-1"
              >
                <i
                  className="fas fa-deaf"
                  data-tooltip
                  title="Click to read name pronunciation and learn a little about its origins"
                ></i>
              </a>
            </p>
            <p className="lead text-center">Welcome to my portfolio!</p>
            <div className="text-center">
              <NavLink to="/about" activeClassName="active">
                <a className="mybuttons" href="#about-me" role="button">
                  About Me
                </a>
              </NavLink>
              <NavLink to="/portfolio" activeClassName="active">
                <a className="mybuttons" href="#portfolio" role="button">
                  Portfolio
                </a>
              </NavLink>
              <NavLink to="/contact" activeClassName="active">
                <a className="mybuttons" href="#contact-me" role="button">
                  Get in Touch
                </a>
              </NavLink>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
