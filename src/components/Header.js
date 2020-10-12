import React from "react";
import playAudio from "./Pronunciation";

function Header() {
  return (
    <div styles={{ backgroundImage:"../assets/Garden.png" }}>
      <audio
        id="player"
        src="../assets/Aisling_McCaffrey_Name_Audio.mp3"
      ></audio>
      <header className="hero">
        <div className="hero-text">
          <h1 className="display-4 text-center">Hello, Moien!</h1>
          <p className="lead text-center">
            My name is Aisling McCaffrey
            {/* <a onClick={this.playAudio} href="#">
              <i
                className="fa fa-volume-up"
                data-tooltip
                title="Click to hear name pronunciation"
              ></i>
            </a> */}
            <playAudio />
            <a
              href="https://babynames.com/name/Aisling"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              <i
                className="fas fa-deaf"
                data-tooltip
                title="Click to read name pronunciation and learn a little about its origins"
              ></i>
            </a>
          </p>
          <p className="lead text-center">Welcome to my portfolio!</p>
          <p className="text-center">
            <a className="mybuttons" href="#about-me" role="button">
              About Me
            </a>
            <a className="mybuttons" href="#portfolio" role="button">
              Portfolio
            </a>
            <a className="mybuttons" href="#contact-me" role="button">
              Get in Touch
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;
