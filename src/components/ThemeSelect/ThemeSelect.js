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
            className="ThemeSelect__input"
            id="rainbow"
            name="theme"
            onChange={e => setTheme(e.target.value)}
            type="radio"
            value="rainbow"
          />
          <label className="ThemeSelect__label" for="rainbow">
            <span>Rainbow</span>
            <Rainbow theme={theme} />
          </label>
          <br />
          <input
            className="ThemeSelect__input"
            id="dark"
            name="theme"
            onChange={e => setTheme(e.target.value)}
            type="radio"
            value="dark"
          />
          <label className="ThemeSelect__label" for="dark">
            <span>Dark</span>
            <Crescent theme={theme} />
          </label>
          <br />
          <input
            defaultChecked
            className="ThemeSelect__input"
            id="light"
            name="theme"
            onChange={e => setTheme(e.target.value)}
            type="radio"
            value="light"
          />
          <label className="ThemeSelect__label" for="light">
            <span>Light</span>
            <Sun theme={theme} />
          </label>
        </form>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeSelect;

// import React from "react";

// import { ThemeContext } from "context";

// const ThemeSelect = props => {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, setTheme }) => (
//         <form>
//           <label htmlFor="theme">
//             Theme
//             <select
//               value={theme}
//               onChange={e => setTheme(e.target.value)}
//               onBlur={e => setTheme(e.target.value)}
//             >
//               <option value="rainbow">Rainbow</option>
//               <option value="dark">Dark</option>
//               <option value="light">Light</option>
//             </select>
//           </label>
//         </form>
//       )}
//     </ThemeContext.Consumer>
//   );
// };

// export default ThemeSelect;
