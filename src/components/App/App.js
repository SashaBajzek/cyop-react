import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import { Footer, Header } from "components";
import { HomePage, TeachPage, VotePage } from "pages";

const ThemeContext = React.createContext("default");

class App extends React.Component {
  state = {
    currentPage: 1,
    presentationMode: true,
    userType: "presenter"
  };

  navShouldDisplay = () => {
    const { presentationMode, userType } = this.state;
    return userType === "presenter" || !presentationMode;
  };

  render() {
    return (
      <React.StrictMode>
        <ThemeContext.Provider value="default">
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
