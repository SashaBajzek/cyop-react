import React from 'react'
import {navigate, Redirect, Router} from '@reach/router'

import {Nav} from 'components'
import {EventHandlerPage, TeachPage, TitlePage, VotePage} from 'pages'
import pages from '../../fixtures/toc'
import './Slide.scss'

class Slide extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      nextPage: '/',
      prevNextPage: '/',
      prevTheme: this.props.theme,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this))
  }

  static getDerivedStateFromProps(props, state) {
    if (props.theme !== state.prevTheme) {
      return {count: state.count + 1, prevTheme: props.theme}
    } else if (state.nextPage !== state.prevNextPage) {
      return {count: state.count + 1, prevNextPage: state.nextPage}
    }
    // Return null if the state hasn't changed
    return null
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        // Left arrow, go back a page
        window.history.back()
        break
      case 39:
        // Right arrow, advance to next page
        this.goToNextPage()
        break
      default:
        break
    }
  }

  setNextPage = page => {
    this.setState({nextPage: page})
  }

  goToNextPage = () => {
    const currentPageSplit = window.location.href.split('/')
    const currentId = currentPageSplit[currentPageSplit.length - 1]
    const nextPage = currentId ? pages[currentId].nextUrl : pages['home'].nextUrl
    navigate(nextPage)
  }

  render() {
    console.log('Slide rendering')
    const {theme} = this.props
    const {count, nextPage} = this.state
    return (
      <div className={`Slide Slide--${theme}`}>
        <Nav nextUrl={nextPage} />
        <span className="Slide__counter">Slide Render Counter: {count}</span>
        <Router>
          <Redirect from="/" to="/title/home" noThrow />
          <EventHandlerPage
            nextPage={nextPage}
            path="/event_handler/:id"
            setNextPage={this.setNextPage}
            theme={theme}
          />
          <TeachPage nextPage={nextPage} path="/teach/:id" setNextPage={this.setNextPage} theme={theme} />
          <TitlePage nextPage={nextPage} path="/title/:id" setNextPage={this.setNextPage} theme={theme} />
          <VotePage nextPage={nextPage} path="/vote/:id" setNextPage={this.setNextPage} />
        </Router>
      </div>
    )
  }
}

export default Slide
