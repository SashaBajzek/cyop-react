import React from "react";
import { Link } from "@reach/router";
import "./Header.scss";

const Header = props => (
  <header>
    <Link to="/">
      <h1>Create Your Own Presentation: React</h1>
    </Link>
  </header>
);

export default Header;
