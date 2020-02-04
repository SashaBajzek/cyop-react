import React from "react";

import Arrow from "./Arrow";
import "./VoteButton.scss";

const VoteButton = ({ name = "exampleName", text, theme }) => (
  <>
    <div className={`VoteButton VoteButton--${theme}`}>
      <input
        className="VoteButton__input"
        id={text}
        name={name}
        type="radio"
        value={text}
      />
      <label className="VoteButton__label" htmlFor={text}>
        {text}
        <span className="VoteButton__arrow">
          <Arrow theme={theme} />
        </span>
      </label>
    </div>
  </>
);

export default VoteButton;
