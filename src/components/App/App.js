import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import { Footer } from "components";
import { ThemeContext } from "context";
import { HomePage, TeachPage, VotePage } from "pages";

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
      theme: "rainbow"
    };
  }

  render() {
    const { setTheme, theme } = this.state;
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`App App--${theme}`}>
            <Router>
              <HomePage path="/" />
              <TeachPage path="/teach/:id" />
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
