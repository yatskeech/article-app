import { useState } from 'react';
import { classnames } from '@shared/lib';
import styles from './Sidebar.module.scss';
import { LanguageSwitcher, ThemeSwitcher } from '@shared/ui';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpened, setIsOpened] = useState(true);
  const { t } = useTranslation();

  const toggleOpen = () => setIsOpened(!isOpened);

  return (
    <div
      className={classnames(styles.sidebar, className, {
        [styles.opened]: isOpened,
      })}
    >
      <button onClick={toggleOpen}>{t('sidebar.button')}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
