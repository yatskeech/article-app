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
          {t('Главная')}
        </Link>
        <Link to={RoutePaths.about} className={styles.link}>
          {t('О сайте')}
        </Link>
      </div>
    </header>
  );
}
