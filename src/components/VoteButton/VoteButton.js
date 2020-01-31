import React from "react";
import "./VoteButton.scss";

const VoteButton = ({ chosen, text }) => (
  <>
    <div className="VoteButton">
      <input
        className="VoteButton__input"
        type="radio"
        name="exampleRadios"
        id={text}
        value={text}
      />
      <label className="VoteButton__label" htmlFor={text}>
        {text}
      </label>
    </div>
  </>
);

export default VoteButton;
