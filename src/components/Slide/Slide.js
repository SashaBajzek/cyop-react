import React from "react";
import { navigate, Redirect, Router } from "@reach/router";

import { Nav } from "components";
import { ThemeContext } from "context";
import { TeachPage, TitlePage, VotePage } from "pages";
import pages from "../../fixtures/toc";

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nextPage: "/"
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        // Left arrow, go back a page
        window.history.back();
        break;
      case 39:
        // Right arrow, advance to next page
        this.goToNextPage();
        break;
      default:
        break;
    }
  }

  setNextPage = page => {
    this.setState({ nextPage: page });
  };

  goToNextPage = () => {
    const currentPageSplit = window.location.href.split("/");
    const currentId = currentPageSplit[currentPageSplit.length - 1];
    const nextPage = currentId
      ? pages[currentId].nextUrl
      : pages["home"].nextUrl;
    navigate(nextPage);
  };

  render() {
    const { theme } = this.props;
    const { nextPage } = this.state;
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={{ theme }}>
          <div className={`Slide Slide--${theme}`}>
            <Nav nextUrl={nextPage} />
            <Router>
              <Redirect from="/" to="/title/home" noThrow />
              <TeachPage
                nextPage={nextPage}
                path="/teach/:id"
                setNextPage={this.setNextPage}
                theme={theme}
              />
              <TitlePage
                nextPage={nextPage}
                path="/title/:id"
                setNextPage={this.setNextPage}
                theme={theme}
              />
              <VotePage
                nextPage={nextPage}
                path="/vote/:id"
                setNextPage={this.setNextPage}
              />
            </Router>
          </div>
        </ThemeContext.Provider>
      </React.StrictMode>
    );
  }
}

export default Slide;
