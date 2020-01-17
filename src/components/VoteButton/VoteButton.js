import React from "react";
import "./VoteButton.scss";

const VoteButton = ({ chosen, disable, result, text, winner }) => (
  <>
    <div className={winner ? "VoteButton VoteButton--winner" : "VoteButton"}>
      <input
        className={
          disable
            ? "VoteButton__input VoteButton__input--disabled"
            : "VoteButton__input"
        }
        disabled={disable}
        type="radio"
        name="exampleRadios"
        id={text}
        value={text}
      />
      <label
        className={
          disable
            ? "VoteButton__label VoteButton__label--disabled"
            : "VoteButton__label"
        }
        disabled={disable}
        htmlFor={text}
      >
        {text}
      </label>
      {result !== null ? <span>{result}%</span> : null}
    </div>
  </>
);

export default VoteButton;
