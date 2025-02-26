import { Theme, THEME_STORAGE_KEY, ThemeContext } from './ThemeContext';
import { ReactNode, useEffect, useState } from 'react';

const initialTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme || Theme.dark;

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;