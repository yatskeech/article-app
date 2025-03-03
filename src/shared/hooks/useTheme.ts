import { useContext } from 'react';
import { ThemeContext, Theme } from '../contexts';

const themes = Object.values(Theme);

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const index = themes.indexOf(theme);
    const isLast = index === themes.length - 1;
    setTheme(themes[isLast ? 0 : index + 1]);
  };

  return { theme, toggleTheme };
}
