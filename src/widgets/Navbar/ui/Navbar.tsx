import { RoutePaths } from '@shared/config';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { classnames } from '@shared/lib';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={classnames(styles.navbar, className)}>
      <div className={styles.links}>
        <Link to={RoutePaths.main} className={styles.link}>Main</Link>
        <Link to={RoutePaths.about} className={styles.link}>About</Link>
      </div>
    </header>
  );
}
