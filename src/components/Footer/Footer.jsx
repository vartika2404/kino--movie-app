import "./Footer.css";
import React from "react";

const Footer = () => {
  return (

    <footer className="footer">

      
      <div className="footer_top">

        
        <div className="footer_brand">
          <h1>kinO</h1>

          <p>
            Your go-to destination for discovering popular,
            top-rated, and upcoming movies from around the
            world
          </p>
        </div>

        
        <div className="footer_links">
          <h3>Browse</h3>

          <a href="/">Popular Movies</a>
          <a href="/">Top Rated</a>
          <a href="/">Upcoming Releases</a>
        </div>

        
        <div className="footer_info">
          <h3>info</h3>
          <a href="/">About us</a>
          <a href="/">Privacy Policy</a>
        </div>

      </div>

      <div className="footer_bottom">
        <p>
          © 2026 <span>KinO</span>. All rights reserved.
         
        </p>
      </div>

    </footer>

  );
};

export default Footer;