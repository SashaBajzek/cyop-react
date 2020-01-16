import React from "react";
import { Link } from "@reach/router";
import "./Nav.scss";

const Nav = ({ display, nextOptionalText = "" }) => {
  return display ? (
    <nav className="App__nav">
      <button onClick={() => window.history.back()}>Previous</button>
      <Link to="/vote/1" className="App__button">
        Next{nextOptionalText}
      </Link>
    </nav>
  ) : null;
};

export default Nav;
