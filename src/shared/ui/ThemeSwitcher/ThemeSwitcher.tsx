import { useTheme } from '@shared/hooks';
import styles from './ThemeSwitcher.module.scss';
import MoonIcon from '../../assets/icons/moon.svg';
import { classnames } from '@shared/lib';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={classnames(styles.button, className)}
    >
      <MoonIcon className={styles.icon} />
    </button>
  );
}
