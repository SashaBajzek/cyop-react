import {createContext} from 'react'

const ThemeContext = createContext({
  theme: 'rainbow',
  setTheme: () => {},
})

export default ThemeContext
