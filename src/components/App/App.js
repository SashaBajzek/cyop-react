import React from "react";

import "./App.scss";
import { Footer, Header, Slide, ThemeSelect } from "components";
import { ThemeContext } from "context";

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

  render() {
    const { setTheme, theme } = this.state;
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`App App--${theme}`}>
            <Header />
            <ThemeSelect />
            <Slide theme={theme} />
            <Footer />
          </div>
        </ThemeContext.Provider>
      </React.StrictMode>
    );
  }
}

export default App;
