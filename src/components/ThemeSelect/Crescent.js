import React from "react";

function Crescent(props) {
  return (
    <svg
      className={`ThemeIcon ThemeIcon--${props.theme} ThemeIcon--crescent`}
      width={22.421}
      height={33.038}
      viewBox="0 0 22.421 33.038"
      {...props}
    >
      <path
        d="M20.921 2.187a15 15 0 000 28.665 15 15 0 110-28.665z"
        fill="#276168"
        stroke="#276168"
        strokeLinejoin="round"
        strokeWidth={3}
      />
    </svg>
  );
}

export default Crescent;
