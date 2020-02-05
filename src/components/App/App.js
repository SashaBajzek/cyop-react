import React from "react";
import { navigate, Router } from "@reach/router";

import "./App.scss";
import { Footer, Header, ThemeSelect } from "components";
import { ThemeContext } from "context";
import { HomePage, TeachPage, VotePage } from "pages";
import pages from "../../fixtures/toc";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setTheme = theme => {
      this.setState({
        theme: theme
      });
    };

    this.state = {
      setTheme: this.setTheme,
      theme: "light"
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e: any) {
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

  goToNextPage = () => {
    const currentPageSplit = window.location.href.split("/");
    const currentId = currentPageSplit[currentPageSplit.length - 1];
    const nextPage = currentId
      ? pages[currentId].nextUrl
      : pages["home"].nextUrl;
    navigate(nextPage);
  };

  render() {
    const { setTheme, theme } = this.state;
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`App App--${theme}`}>
            <Header />
            <ThemeSelect />
            <Router>
              <HomePage path="/" theme={theme} />
              <TeachPage path="/teach/:id" theme={theme} />
              <VotePage path="/vote/:id" />
            </Router>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </React.StrictMode>
    );
  }
}

export default App;
