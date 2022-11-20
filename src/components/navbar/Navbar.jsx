import React, { useState } from "react";
import "../../App.scss";
import "./navbar.scss";

const Navbar = () => {
  const [toggleMoreMenu, setToggleMoreMenu] = useState(false);

  return (
    <div className="navbar section">
      <div className="navbar__container row">
        <div className="navbar__items">
          <div className="navbar__items__logo">
            <svg
              role="img"
              aria-labelledby="logo"
              class="main-nav__logo__image"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="21"
              viewBox="0 0 45 21"
            >
              <title id="logo">Ableton Homepage</title>
              <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
            </svg>
          </div>

          <ul className="navbar__items__list">
            <li className="navbar__items__list__item">
              <a href="/">Live</a>
            </li>

            <li className="navbar__items__list__item">
              <a href="/">Push</a>
            </li>

            <li className="navbar__items__list__item">
              <a href="/">Note</a>
            </li>

            <li className="navbar__items__list__item">
              <a href="/">Link</a>
            </li>

            <li className="navbar__items__list__item">
              <a href="/">Shop</a>
            </li>

            <li className="navbar__items__list__item">
              <a href="/">Packs</a>
            </li>

            <li className="navbar__items__list__item">
              <a href="/">Help</a>
            </li>

            {/* More submenu */}
            <li className="navbar__items__list__item navbar__items__list__item__more">
              {toggleMoreMenu ? (
                <div>
                  <a
                    href="/"
                    className="color-orange"
                    onClick={() => setToggleMoreMenu(false)}
                  >
                    More
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    href="/"
                    className="color-orange"
                    onClick={() => setToggleMoreMenu(true)}
                  >
                    More
                  </a>
                  <div className="navbar__items__list__item__more__submenu">
                    <div className="navbar__items__list__item__more__submenu__container">
                      <h4>More on Ableton.com</h4>

                      <ul className="navbar__items__list">
                        <li className="navbar__items__list__item">
                          <a href="/">Blog</a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">Ableton for the Classroom</a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">Ableton for Colleges and Universities</a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">Certified Training</a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/" className="color-orange">
                            About Ableton
                          </a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">Jobs</a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">Apprenticeships</a>
                        </li>
                      </ul>
                    </div>

                    <div className="navbar__items__list__item__more__submenu__container">
                      <h4>More from Ableton</h4>

                      <ul className="navbar__items__list">
                        <li className="navbar__items__list__item">
                          <a href="/">
                            <p className="navbar__items__list__item__heading">
                              Loop
                            </p>
                            <p>
                              Watch Talks, Performances and Features from
                              Ableton's Summit for Music Makers
                            </p>
                          </a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">
                            <p className="navbar__items__list__item__heading">
                              Learning Music
                            </p>
                            <p>
                              Learn the fundamentals of music making right in
                              your browser.
                            </p>
                          </a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">
                            <p className="navbar__items__list__item__heading">
                              Learning Synths
                            </p>
                            <p>
                              Get started with synthesis using a web-based synth
                              and accompanying lessons.
                            </p>
                          </a>
                        </li>

                        <li className="navbar__items__list__item">
                          <a href="/">
                            <p className="navbar__items__list__item__heading">
                              Making Music
                            </p>
                            <p>
                              Some tips from 74 Creative Strategies for
                              Electronic Producers.
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            {/* End more submenu */}

            <li className="navbar__items__list__item navbar__items__list__item__try">
              <a href="/" className="color-blue">
                Try Live for free
              </a>
            </li>

            <li className="navbar__items__list__item navbar__items__list__item__login">
              <a href="/">Log in or register</a>
            </li>
          </ul>

          {/* Mobile menu */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
