import React from "react";
import "./Button.scss";

const Button = ({ onClickCallback, text }) => (
  <button className="button" onClick={onClickCallback}>
    {text}
  </button>
);

export default Button;
