import React, {FC, useMemo, useState} from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const key = LOCAL_STORAGE_THEME_KEY
const defaultTheme = localStorage.getItem(key) as Theme || Theme.light

interface ThemeProviderProps {
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
