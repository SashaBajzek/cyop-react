import React from "react";
import { Link } from "@reach/router";
import "./Header.scss";

import { ThemeContext } from "context";

const Header = ({ currentPageTitle = "Secondary Title" }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <header className={`Header Header--${theme}`}>
        <h1 className="Header__heading--main">
          <Link to="/">Choose Your Own Presentation: React</Link>
        </h1>
        <div aria-hidden="true" className="Header__triangle-1"></div>
        <div aria-hidden="true" className="Header__triangle-2"></div>
        <h2 className="Header__heading--secondary">{currentPageTitle}</h2>
      </header>
    )}
  </ThemeContext.Consumer>
);

export default Header;
