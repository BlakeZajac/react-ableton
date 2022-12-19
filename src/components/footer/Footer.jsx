import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import logo from "../../assets/images/logo.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer section">
      <div className="footer__container row">
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>

        <div className="footer__items">
          <div className="footer__items__col">
            <ul className="footer__items__list">
              <li className="footer__items__list__item">
                <a href="#">Register Live or Push</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">About Ableton</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">Jobs</a>
              </li>
            </ul>

            <ul className="footer__items__social">
              <li className="footer__items__social__item facebook">
                <a href="#">
                  <BsFacebook />
                </a>
              </li>

              <li className="footer__items__social__item twitter">
                <a href="#">
                  <BsTwitter />
                </a>
              </li>

              <li className="footer__items__social__item youtube">
                <a href="#">
                  <BsYoutube />
                </a>
              </li>

              <li className="footer__items__social__item instagram">
                <a href="#">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__items__col">
            <h4 className="footer__items__heading">Education</h4>
            <ul className="footer__items__list">
              <li className="footer__items__list__item">
                <a href="#">Offers for students and teachers</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">Ableton for the Classroom</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">Ableton for Colleges and Universities</a>
              </li>
            </ul>
          </div>

          <div className="footer__items__col">
            <h4 className="footer__items__heading">
              Sign up to our newsletter
            </h4>

            <p className="footer__items__newsletter-content">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>

            <div className="footer__items__newsletter">
              <input
                type="email"
                className="footer__items__newsletter__input"
                placeholder="Enter your email address"
              />

              <button className="footer__items__newsletter__input button">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="footer__items">
          <div className="footer__items__col">
            <h4 className="footer__items__heading">Community</h4>
            <ul className="footer__items__list">
              <li className="footer__items__list__item">
                <a href="#">Find Ableton User Groups</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">Find Certified Training</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">Become a Certified Trainer</a>
              </li>
            </ul>
          </div>

          <div className="footer__items__col">
            <h4 className="footer__items__heading">Distributors</h4>
            <ul className="footer__items__list">
              <li className="footer__items__list__item">
                <a href="#">Find Distributors</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">Find Distributors</a>
              </li>

              <li className="footer__items__list__item">
                <a href="#">Try Push in-store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_socket row">
        <ul className="footer__socket__item">
          <li className="footer__socket__list__item">
            <a href="#">Contact us</a>
          </li>

          <li className="footer__socket__list__item">
            <a href="#">Press Resources</a>
          </li>

          <li className="footer__socket__list__item">
            <a href="#">Legal Info</a>
          </li>

          <li className="footer__socket__list__item">
            <a href="#">Privacy Policy</a>
          </li>

          <li className="footer__socket__list__item">
            <a href="#">Cookie Settings</a>
          </li>

          <li className="footer__socket__list__item">
            <a href="#">Imprint</a>
          </li>
        </ul>

        <div className="footer__socket__credit">
          <div className="footer__socket__credit__logo">
            <svg
              role="img"
              aria-labelledby="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="21"
              viewBox="0 0 45 21"
            >
              <title id="logo">Ableton Homepage</title>
              <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
            </svg>
          </div>
          <div className="footer__socket__credit__content">
            <p>Made in Berlin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
