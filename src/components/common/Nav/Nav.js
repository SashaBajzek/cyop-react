import React from "react";
import { Link } from "@reach/router";
import "./Nav.scss";

const Nav = ({ display, nextOptionalText = "", nextUrl = "/" }) => {
  return display ? (
    <nav className="Nav">
      <button onClick={() => window.history.back()}>Previous</button>
      <Link to={nextUrl} className="Nav__button">
        Next{nextOptionalText}
      </Link>
    </nav>
  ) : null;
};

export default Nav;
