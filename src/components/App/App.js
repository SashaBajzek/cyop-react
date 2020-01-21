import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import { Footer, Header } from "components";
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
      currentPage: 1,
      presentationMode: true,
      setTheme: this.setTheme,
      theme: "rainbow",
      userType: "presenter"
    };
  }

  navShouldDisplay = () => {
    const { presentationMode, userType } = this.state;
    return userType === "presenter" || !presentationMode;
  };

  render() {
    const { setTheme, theme } = this.state;
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className="App">
            <Header />
            <Router>
              <HomePage displayNav={this.navShouldDisplay()} path="/" />
              <TeachPage
                displayNav={this.navShouldDisplay()}
                path="/teach/:id"
              />
              <VotePage displayNav={this.navShouldDisplay()} path="/vote/:id" />
            </Router>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </React.StrictMode>
    );
  }
}

export default App;
