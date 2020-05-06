import React from 'react'

import {ThemeContext} from 'context'
import './ThemeButton.scss'

const ThemeButton = ({children, value}) => (
  <ThemeContext.Consumer>
    {({theme, setTheme}) => (
      <>
        <input
          defaultChecked={theme === value}
          className={`ThemeButton__input ThemeButton__input--${theme}`}
          id={value}
          name="theme"
          onChange={e => setTheme(e.target.value)}
          type="radio"
          value={value}
        />
        <label className={`ThemeButton__label ThemeButton__label--${theme}`} htmlFor={value}>
          <span>{value}</span>
          {children}
        </label>
        <br />{' '}
      </>
    )}
  </ThemeContext.Consumer>
)

export default ThemeButton
