import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import "./Home.css";
import headerImage from "../Home/celeb.png";

const Home = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content h2", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal(".header__content .header__btn", {
      ...scrollRevealOption,
      delay: 2000,
    });
    ScrollReveal().reveal(".header__content .socials", {
      ...scrollRevealOption,
      delay: 2500,
    });
    ScrollReveal().reveal(".header__bar", {
      ...scrollRevealOption,
      delay: 3000,
    });
  }, []);

  return (
    <header className="header__container">
      <div className="header__image">
        <img src={headerImage} alt="header" />
      </div>
      <div className="header__content">
        <h2>AN AI PLATFORM</h2>
        <h1>
          Match Right
          <br />
          <span className="h1__span-1">Brands & Influencers</span>
          <span className="h1__span-2">with our Platform</span>
        </h1>
        <p>
          Build and maintain a brands and influencers digital presence, with
          effective content and engagement strategies to expand reach and
          engagement with audiences.
        </p>
        <div className="header__btn">
          <Link exact to="/signup">
            <button className="btn">Join Us</button>
          </Link>
        </div>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="ri-facebook-circle-fill"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-twitter-fill"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-youtube-fill"></i>
            </a>
          </li>
        </ul>
        <div className="header__bar">
          Copyright © 2024 Savante. All rights reserved.
        </div>
      </div>
    </header>
  );
};

export default Home;
