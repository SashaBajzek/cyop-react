import React from "react";

import { ThemeContext } from "context";
import "./ThemeSelect.scss";
import Sun from "./Sun";
import Crescent from "./Crescent";
import Rainbow from "./Rainbow";

const ThemeSelect = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <form className={`ThemeSelect ThemeSelect--${theme}`}>
          <legend>Theme: </legend>
          <input
            defaultChecked={theme === "rainbow"}
            className="ThemeSelect__input"
            id="rainbow"
            name="theme"
            onChange={e => setTheme(e.target.value)}
            type="radio"
            value="rainbow"
          />
          <label className="ThemeSelect__label" htmlFor="rainbow">
            <span>Rainbow</span>
            <Rainbow theme={theme} />
          </label>
          <br />
          <input
            defaultChecked={theme === "dark"}
            className="ThemeSelect__input"
            id="dark"
            name="theme"
            onChange={e => setTheme(e.target.value)}
            type="radio"
            value="dark"
          />
          <label className="ThemeSelect__label" htmlFor="dark">
            <span>Dark</span>
            <Crescent theme={theme} />
          </label>
          <br />
          <input
            defaultChecked={theme === "light"}
            className="ThemeSelect__input"
            id="light"
            name="theme"
            onChange={e => setTheme(e.target.value)}
            type="radio"
            value="light"
          />
          <label className="ThemeSelect__label" htmlFor="light">
            <span>Light</span>
            <Sun theme={theme} />
          </label>
        </form>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeSelect;
