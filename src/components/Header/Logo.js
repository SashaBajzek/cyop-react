import React from "react";
import "./Logo.scss";

function Logo(props) {
  return (
    <svg
      className={`Logo`}
      width={72.348}
      height={77.53}
      viewBox="0 0 72.348 77.53"
      {...props}
    >
      <defs>
        <style>
          {".prefix__cls-2{fill:none;stroke:#61dafb;stroke-width:4px}"}
        </style>
      </defs>
      <g id="prefix__REACT_logo" transform="translate(13 14.257)">
        <circle
          id="prefix__Ellipse_1"
          data-name="Ellipse 1"
          cx={6.59}
          cy={6.59}
          r={6.59}
          transform="translate(16.584 17.918)"
          fill="#61dafb"
        />
        <g
          id="prefix__Group_1"
          data-name="Group 1"
          transform="translate(-11 -11.525)"
        >
          <ellipse
            id="prefix__Ellipse_2"
            data-name="Ellipse 2"
            className="prefix__cls-2 "
            cx={34.174}
            cy={13.501}
            rx={34.174}
            ry={13.501}
            transform="translate(0 22.532)"
          />
          <path
            id="prefix__Path_1"
            data-name="Path 1"
            className="prefix__cls-2"
            d="M34.074 0c18.84.058 34.131 5.916 34.154 13.084S52.994 26.016 34.154 25.958.022 20.043 0 12.875 15.233-.057 34.074 0z"
            transform="rotate(60 14.179 24.559)"
          />
          <path
            id="prefix__Path_2"
            data-name="Path 2"
            className="prefix__cls-2"
            d="M34.154 0c18.84-.058 34.1 5.706 34.074 12.874S52.914 25.9 34.074 25.958-.022 20.252 0 13.084 15.313.058 34.154 0z"
            transform="rotate(120 27.489 24.523)"
          />
        </g>
      </g>
    </svg>
  );
}

export default Logo;
