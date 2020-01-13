import React from "react";
import "./Footer.scss";

const Footer = props => {
  const year = new Date().getFullYear();
  return (
    <footer className="Footer">
      <small className="Footer__copyright">
        &copy; {year}{" "}
        <a className="Footer__link" href="https://www.sashabajzek.com">
          Sasha Bajzek
        </a>
      </small>
    </footer>
  );
};

export default Footer;
