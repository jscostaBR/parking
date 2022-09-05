import React from 'react'

import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'

import { Tabs } from './components/Tabs'
import { Entry } from './modules/Entry'
import { Leave } from './modules/Leave'

import { Menu } from '../src/components/Menu'

const data = [
  {
    tabName: 'Entrada',
    isActive: true,
    component: <Entry />,
  },
  {
    tabName: 'Saída',
    isActive: false,
    component: <Leave />,
  },
]

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Tabs dependencies={{ tabList: data }} />
    </ThemeProvider>
  )
}
