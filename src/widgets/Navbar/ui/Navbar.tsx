import { RoutePaths } from '@shared/config';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.links}>
        <Link to={RoutePaths.main} className={styles.link}>Main</Link>
        <Link to={RoutePaths.about} className={styles.link}>About</Link>
      </div>
    </header>
  );
}
