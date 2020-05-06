import React from 'react'

import {ThemeContext} from 'context'
import './ThemeSelect.scss'
import {ThemeButton} from './ThemeButton'
import Sun from './iconSVGS/Sun'
import Crescent from './iconSVGS/Crescent'
import Rainbow from './iconSVGS/Rainbow'

const ThemeSelect = props => {
  const themeOptions = [
    {
      iconComponent: <Rainbow />,
      value: 'rainbow',
    },
    {
      iconComponent: <Crescent />,
      value: 'dark',
    },
    {
      iconComponent: <Sun />,
      value: 'light',
    },
  ]
  return (
    <ThemeContext.Consumer>
      {({theme}) => (
        <>
          <form className={`ThemeSelect ThemeSelect--${theme}`}>
            <legend> Theme: </legend>
            {themeOptions.map(themeOption => (
              <ThemeButton key={themeOption.value} value={themeOption.value}>
                {themeOption.iconComponent}
              </ThemeButton>
            ))}
          </form>
        </>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeSelect
