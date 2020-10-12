import React from "react"
 
function Navbar(props) {
  return (
    <div>
         <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div class="container">
        <a class="navbar-brand" href="./index.html">
          <h3>
            <img
              src="../assets/flower-icon.svg"
              alt="A small flower design by Aisling McCaffrey"
              class="logo"
            /> Aisling McCaffrey
          </h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto flex-nowrap">
            <li class="nav-item">
              <a class="nav-link" href="#about-me">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-me">Get in Touch</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
 
export default Navbar;