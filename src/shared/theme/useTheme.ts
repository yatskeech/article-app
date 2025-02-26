import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => setTheme(theme === 'dark' ? Theme.light : Theme.dark);

  return { theme, toggleTheme };
}