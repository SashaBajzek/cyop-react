import React from "react";
import { Link } from "@reach/router";
import Logo from "./Logo";
import "./Header.scss";

class Header extends React.PureComponent {
  state = { count: 1, prevTheme: this.props.theme };

  static getDerivedStateFromProps(props, state) {
    if (props.theme !== state.prevTheme) {
      return { count: state.count + 1, prevTheme: props.theme };
    }
    // Return null if the state hasn't changed
    return null;
  }

  render() {
    console.log("Header rendering");
    const { count } = this.state;
    const { theme } = this.props;
    return (
      <header className={`Header Header--${theme}`}>
        <h1 className="Header__heading--main">
          <Link to="/">Choose Your Own Presentation</Link>
        </h1>
        <div aria-hidden="true" className="Header__triangle"></div>
        <Logo />
        <h2 className="Header__heading--secondary">React</h2>
        <span className="Header__counter-title">Render counter</span>
        <span className="Header__counter">Header: {count}</span>
      </header>
    );
  }
}

export default Header;
