import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Signup.css";
import image from "../Login/login.png";

function Signup() {
  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    const scrollRevealOptions = {
      distance: "50px",
      origin: "right",
      duration: 1000,
      reset: true,
    };

    ScrollReveal().reveal(".login-box", { ...scrollRevealOptions, delay: 0 });
    ScrollReveal().reveal(".login-form h2", {
      ...scrollRevealOptions,
      delay: 100,
    });
    ScrollReveal().reveal(".login-form p", {
      ...scrollRevealOptions,
      delay: 200,
    });
    ScrollReveal().reveal(".switch", { ...scrollRevealOptions, delay: 300 });
    ScrollReveal().reveal(".input-group", {
      ...scrollRevealOptions,
      interval: 100,
      delay: 400,
    });
    ScrollReveal().reveal(".remember-me", {
      ...scrollRevealOptions,
      delay: 500,
    });
    ScrollReveal().reveal(".login-btn", { ...scrollRevealOptions, delay: 600 });
    ScrollReveal().reveal(".social-login", {
      ...scrollRevealOptions,
      delay: 700,
    });
    ScrollReveal().reveal(".create-account", {
      ...scrollRevealOptions,
      delay: 800,
    });
    ScrollReveal().reveal(".login-image img", {
      ...scrollRevealOptions,
      origin: "right",
      delay: 900,
    });
  }, []);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <h2>Sign Up</h2>
          <p>Welcome to Savante</p>
          <div className="switch">
            <button
              className={isClient ? "active" : ""}
              onClick={() => setIsClient(true)}
            >
              Brand
            </button>
            <button
              className={!isClient ? "active" : ""}
              onClick={() => setIsClient(false)}
            >
              Influencer
            </button>
            <div
              className={`underline ${isClient ? "Brand" : "Influencer"}`}
            ></div>
          </div>
          <form>
            <div className="input-group-signup">
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Contact No." />
            </div>
            {isClient ? (
              <>
                <div className="input-group-signup">
                  <input type="text" placeholder="Brand Name" />
                  <input type="text" placeholder="Website URL" />
                </div>
                <div className="input-group-signup">
                  <select>
                    <option value="">Industry</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    <option value="health">Health</option>
                    <option value="technology">Technology</option>
                  </select>
                  <select>
                    <option value="">Company Size</option>
                    <option value="startup">Startup</option>
                    <option value="small">Small</option>
                    <option value="mid">Mid</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Instagram Handle" />
                </div>
                <div className="input-group-full">
                  <textarea
                    placeholder="Enter your brand description"
                    rows="2"
                    maxLength="70"
                    required
                  ></textarea>
                </div>
              </>
            ) : (
              <>
                <div className="input-group-signup">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Followers Count" />
                </div>
                <div className="input-group-full">
                  <select>
                    <option value="">Content Niche</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    <option value="health">Health</option>
                    <option value="technology">Technology</option>
                  </select>
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Instagram Handle" />
                </div>
                <div className="input-group-full">
                  <textarea
                    placeholder="Enter your Audience Description"
                    rows="2"
                    maxLength="100"
                    required
                  ></textarea>
                </div>
              </>
            )}
            {/* <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div> */}
            <div className="tc-signup">
              <input type="checkbox" />
              <label>
                By logging in you agree to Savante <u>Terms and Conditions</u>
              </label>
            </div>
            <button type="submit" className="login-btn">
              {isClient ? "Create Brand Account" : "Create Influencer Account"}
            </button>
          </form>
          {/* <div className="social-login">
            <p>OR</p>
            <button className="google-signin">
              <i className="ri-google-fill"></i>{" "}
              <span> Sign In with Google</span>
            </button>
            <button className="facebook-signin">
              <i className="ri-facebook-fill"></i>{" "}
              <span> Sign In with Facebook</span>
            </button>
          </div> */}
          <p className="create-account">
            Have an account? <a href="#">Sign In</a>
          </p>
        </div>
        <div className="login-image">
          <img src={image} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
