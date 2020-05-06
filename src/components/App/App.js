import React from 'react'

import {Footer, Header, Slide, ThemeSelect} from 'components'
import {ThemeContext} from 'context'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      setTheme: newTheme => {
        this.setState({
          theme: newTheme,
        })
      },
      theme: 'light',
    }
  }

  render() {
    const {theme} = this.state
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={this.state}>
          <div className={`App App--${theme}`}>
            <Header theme={theme} />
            <ThemeSelect />
            <Slide theme={theme} />
            <Footer />
          </div>
        </ThemeContext.Provider>
      </React.StrictMode>
    )
  }
}

export default App
