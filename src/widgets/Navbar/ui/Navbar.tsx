import { RoutePaths } from '@shared/config';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '@shared/ui';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <Link to={RoutePaths.main} className={styles.link}>Main</Link>
        <Link to={RoutePaths.about} className={styles.link}>About</Link>
      </div>
    </div>
  );
}
