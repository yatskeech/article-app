import { createContext } from 'react';

export enum Theme {
  blue = 'blue',
  green = 'green',
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const THEME_STORAGE_KEY = 'theme';
export const ThemeContext = createContext<ThemeContextProps>({});