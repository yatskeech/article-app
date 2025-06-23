import { RoutePaths } from '@shared/config/router';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { classnames } from '@shared/lib';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <header className={classnames(styles.navbar, className)}>
      <div className={styles.links}>
        <Link to={RoutePaths.main} className={styles.link}>
          {t('navbar.links.main')}
        </Link>
        <Link to={RoutePaths.about} className={styles.link}>
          {t('navbar.links.about')}
        </Link>
      </div>
    </header>
  );
}
