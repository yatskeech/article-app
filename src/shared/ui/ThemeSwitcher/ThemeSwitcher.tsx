import { useTheme } from '@shared/hooks';
import styles from './ThemeSwitcher.module.scss';
import MoonIcon from '../../assets/icons/moon.svg';

export function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.button}>
      <MoonIcon className={styles.icon} />
    </button>
  );
}
