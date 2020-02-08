import React from "react";
import { Link } from "@reach/router";
import Logo from "./Logo";
import "./Header.scss";

import { ThemeContext } from "context";

const Header = () => {
  console.log("header rendering");
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className={`Header Header--${theme}`}>
          <h1 className="Header__heading--main">
            <Link to="/">Choose Your Own Presentation</Link>
          </h1>
          <div aria-hidden="true" className="Header__triangle"></div>
          <Logo theme={theme} />
          <h2 className="Header__heading--secondary">React</h2>
        </header>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
