import React from "react";
import "./Footer.scss";

import { ThemeContext } from "context";

const Footer = props => {
  const year = new Date().getFullYear();
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <footer className={`Footer Footer--${theme}`}>
          <small className="Footer__copyright">
            &copy; {year}{" "}
            <a className="Footer__link" href="https://www.sashabajzek.com">
              Sasha Bajzek
            </a>
          </small>
        </footer>
      )}
    </ThemeContext.Consumer>
  );
};

export default Footer;
