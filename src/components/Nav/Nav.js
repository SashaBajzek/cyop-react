import React from 'react'
import {Link} from '@reach/router'
import './Nav.scss'

import {ThemeContext} from 'context'

const Nav = ({nextUrl = '/'}) => (
  <ThemeContext.Consumer>
    {({theme}) => (
      <nav className={`Nav Nav--${theme}`}>
        <button className="Nav__button Nav__button--back" onClick={() => window.history.back()}>
          <span className="Nav__text">Previous</span>
        </button>
        <Link to={nextUrl} className="Nav__button Nav__button--forward">
          <span className="Nav__text">Next</span>
        </Link>
      </nav>
    )}
  </ThemeContext.Consumer>
)

export default Nav
