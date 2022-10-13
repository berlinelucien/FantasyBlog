import React from "react";
import explore from "../images/explore.png";
import Popup from "reactjs-popup";
import ContactForm from "./ContactForm";

const Navbar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img
            src={explore}
            width="112"
            height="28"
            alt="explore the world logo"
          />
        </div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          {/** Home pages route link here */}
          <a href="/" class="navbar-item">
            Home
          </a>
          {/** About pages route link here */}
          <a href="/About" class="navbar-item">
            About
          </a>
          {/** Explore pages have fan art and cosplay  */}
          <a href="/Explore" class="navbar-item">
            Explore
          </a>
          {/** Fanatasy Books pages route link here */}
          <a href="/Books" class="navbar-item">
            Fantasy Books
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {/** POPUP MODAL SUBSCRIBE NEWSLETTER  */}
              <Popup
                trigger={<button class="button is-primary">Subscribe</button>}
                modal
              >
                <div>
                  <ContactForm />
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
