import { useContext } from 'react';
import { ThemeContext, Theme } from '../contexts';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => setTheme(theme === 'dark' ? Theme.light : Theme.dark);

  return { theme, toggleTheme };
}
