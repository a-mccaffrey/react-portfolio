import React from "react";

function About() {
  return (
    <div>
      <main id="about-me-content" className="container">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="./assets/ProfilePicture copy.png"
                alt="Aisling McCaffrey looking professional"
                id="bio-image"
                className="mx-auto card-img"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <p className="card-text">
                  I am a B2B marketer with a bachelor degree in International
                  Business and I am close to finishing a full-stack web
                  development certificate from Carleton University. I have been
                  running WordPress sites for my entire career, and I got my
                  coding start when I was 12 in the early days of social media.
                  Earlier this year, I decided to take my passion for web
                  development more seriously since it's the part of my job I
                  enjoy the most. I aim to transition to a role where I can use
                  my experience in marketing, graphic design, and coding to
                  create great web experiences. My knowledge of marketing, web
                  development, and client-centricity will be a great asset to
                  any team. I am immigrating to Luxembourg before the end of
                  2020, and I'm looking for my next career opportunity. As a
                  citizen of Ireland, I am legally allowed to work in
                  Luxembourg, where I intend to settle with my Luxembourgish
                  partner.
                </p>
                <p className="card-text">
                  Professionally, I have 4 years of B2B marketing experience in
                  multiple countries. I started my career in Shanghai, China,
                  where I worked for the Canadian Chamber of Commerce as Media
                  and Communications Manager. This role taught me about
                  nation-branding, building a business community, and working
                  with stakeholders from both business and government. Now, I'm
                  the marketing lead for the Commerce practice of a global
                  commerce and data management services provider, Pivotree. It
                  has been an amazing experience to work here. Though I'm not
                  client-facing, we are a client-first organization - everything
                  we do is for our clients' good, from the top-down. My
                  knowledge and experience of the eCommerce industry, dev-team
                  dynamics, branding, marketing and sales automation, as well as
                  content creation have grown significantly. Being exposed to
                  some of the most outstanding developers on this planet (not an
                  exaggeration) helped me immensely in pursuing an education in
                  full-stack web development, and developing this portfolio.
                </p>
                <p className="card-text">
                  If you want to learn more about my education and background,
                  you can check out my LinkedIn profile, which is right here:
                  <a
                    href="https://www.linkedin.com/in/aisling-s-mccaffrey/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    className="body-link"
                  >
                    <i className="fab fa-linkedin"></i> Aisling's LinkedIn
                  </a>
                </p>
                <p className="card-text">
                  If you want to take a peek inside my GitHub account to see
                  what I've been up to, you can find it by clicking here:
                  <a
                    href="https://github.com/a-mccaffrey"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    className="body-link"
                  >
                    <i className="fab fa-github"></i> Aisling's GitHub account
                  </a>
                </p>
                <p className="card-text">
                  You can also grab a copy of my CV from Google Drive by
                  clicking here:
                  <a
                    href="https://drive.google.com/file/d/1ZrTIoHswNLUD-a1F1gMhvddDmYLHa3cX/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    className="body-link"
                  >
                    <i className="fas fa-file"></i> Aisling's CV
                  </a>
                </p>
                <a
                  href="#portfolio"
                  aria-label="This is an interal link (opens in the same tab)"
                  className="mybuttons m-0"
                >
                  Check out my portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>{" "}
    </div>
  );
}

export default About;
