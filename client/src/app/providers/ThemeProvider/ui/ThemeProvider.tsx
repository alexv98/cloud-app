import { type FC, type ReactNode, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = props => {
  const {
    initialTheme,
    children
  } = props

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
