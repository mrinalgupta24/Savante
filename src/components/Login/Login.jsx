import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Login.css";
import image from "../Login/login.png";

function Login() {
  const [isClient, setIsClient] = useState(true);
  useEffect(() => {
    const scrollRevealOptions = {
      distance: '50px',
      origin: 'right',
      duration: 1000,
      reset: true, 
    };

    ScrollReveal().reveal('.login-box', { ...scrollRevealOptions, delay: 0 });
    ScrollReveal().reveal('.login-form h2', { ...scrollRevealOptions, delay: 100 });
    ScrollReveal().reveal('.login-form p', { ...scrollRevealOptions, delay: 200 });
    ScrollReveal().reveal('.switch', { ...scrollRevealOptions, delay: 300 });
    ScrollReveal().reveal('.input-group', { ...scrollRevealOptions, interval: 100, delay: 400 });
    ScrollReveal().reveal('.remember-me', { ...scrollRevealOptions, delay: 500 });
    ScrollReveal().reveal('.login-btn', { ...scrollRevealOptions, delay: 600 });
    ScrollReveal().reveal('.social-login', { ...scrollRevealOptions, delay: 700 });
    ScrollReveal().reveal('.create-account', { ...scrollRevealOptions, delay: 800 });
    ScrollReveal().reveal('.login-image img', { ...scrollRevealOptions, origin: 'right', delay: 900 });
  }, []);


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <h2>Login</h2>
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
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="remember-me">
              <input type="checkbox" />
              <label>Remember Me</label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-btn">
              {isClient ? "Brand Log In" : "Influencer Log In"}
            </button>
          </form>
          <div className="social-login">
            <p>OR</p>
            <button className="google-signin">
              <i class="ri-google-fill"></i> <span> Sign In with Google</span>
            </button>
            <button className="facebook-signin">
              <i class="ri-facebook-fill"></i>{" "}
              <span> Sign In with Facebook</span>
            </button>
          </div>
          <p className="create-account">
            Don't have an account? <a href="#">Create Account</a>
          </p>
        </div>
        <div className="login-image">
          <img src={image} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;
