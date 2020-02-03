import React from "react";

import { ThemeContext } from "context";

const ThemeSelect = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <form>
          <label htmlFor="theme">
            Theme
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              onBlur={e => setTheme(e.target.value)}
            >
              <option value="rainbow">Rainbow</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </label>
        </form>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeSelect;
