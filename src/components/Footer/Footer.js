import React from "react";
import "./Footer.scss";

import { ThemeContext } from "context";

const Footer = props => {
  const year = new Date().getFullYear();
  console.log("footer render");
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <footer className={`Footer Footer--${theme}`}>
          <div aria-hidden="true" className="Footer__triangle"></div>
          <a className="Footer__link" href="https://www.sashabajzek.com">
            &copy; {year} Sasha Bajzek
          </a>
        </footer>
      )}
    </ThemeContext.Consumer>
  );
};

export default Footer;
