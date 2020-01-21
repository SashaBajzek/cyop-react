import React from "react";
import { Link } from "@reach/router";
import "./Header.scss";

import { ThemeContext } from "context";
import { ThemeSelect } from "components";

const Header = props => (
  <header className="Header">
    <Link to="/">
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <h1 className={`Header__heading Header__heading--${theme}`}>
            Choose Your Own Presentation: React
          </h1>
        )}
      </ThemeContext.Consumer>
    </Link>
    <ThemeSelect />
  </header>
);

export default Header;
