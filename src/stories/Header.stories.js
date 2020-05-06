import React from 'react'
import {Header} from 'components'

export default {
  title: 'Header',
  component: Header,
}

export const HeaderLight = () => <Header theme={'light'} />

HeaderLight.story = {
  name: 'light theme',
}

export const HeaderDark = () => <Header theme={'dark'} />

HeaderDark.story = {
  name: 'dark theme',
}

export const HeaderRainbow = () => <Header theme={'rainbow'} />

HeaderRainbow.story = {
  name: 'rainbow theme',
}
