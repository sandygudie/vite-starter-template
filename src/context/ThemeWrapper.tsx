import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

interface ContextProps {
  theme: string
  changeTheme(): void
}

const defaultMode = 'light'

export const ThemeContext = createContext<ContextProps>({
  theme: defaultMode,
  changeTheme: () => {},
})

const ThemeWrapper: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultMode)

  const changeTheme = (): void => {
    setTheme(theme === 'light' ? `dark` : `light`)
  }

  useEffect(() => {
    switch (theme) {
      case 'dark':
        default:
          document.body.classList.add('dark-content')
          break
      case 'light':
        document.body.classList.remove('dark-content')
        break
     
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeWrapper
