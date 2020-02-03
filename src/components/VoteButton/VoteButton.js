import React from "react";

import Arrow from "./Arrow";
import "./VoteButton.scss";

const VoteButton = ({ text, theme }) => (
  <>
    <div className={`VoteButton VoteButton--${theme}`}>
      <input
        className="VoteButton__input"
        type="radio"
        name="exampleRadios"
        id={text}
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
