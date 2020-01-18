import React from "react";
import { Link } from "@reach/router";
import "./Nav.scss";

const Nav = ({ display, nextOptionalText = "", nextUrl = "/" }) => {
  return display ? (
    <nav className="App__nav">
      <button onClick={() => window.history.back()}>Previous</button>
      <Link to={nextUrl} className="App__button">
        Next{nextOptionalText}
      </Link>
    </nav>
  ) : null;
};

export default Nav;
