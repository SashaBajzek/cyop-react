import React from "react";
import "./Arrow.scss";

function Arrow(props) {
  return (
    <svg
      className={`Arrow Arrow--${props.theme}`}
      width={44.545}
      height={39.985}
      viewBox="0 0 44.545 39.985"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__cls-1{fill:none;stroke:#21142e;stroke-linecap:round;stroke-width:6px}"
          }
        </style>
      </defs>
      <g id="prefix__arrow" transform="translate(3 4.243)">
        <path
          id="prefix__Line_5"
          data-name="Line 5"
          className="prefix__cls-1"
          transform="translate(0 15.75)"
          d="M0 0h37.303"
        />
        <path
          id="prefix__Line_7"
          data-name="Line 7"
          className="prefix__cls-1"
          transform="translate(21.553 15.75)"
          d="M0 15.75L15.75 0"
        />
        <path
          id="prefix__Line_8"
          data-name="Line 8"
          className="prefix__cls-1"
          transform="translate(21.553)"
          d="M0 0l15.75 15.75"
        />
      </g>
    </svg>
  );
}

export default Arrow;
