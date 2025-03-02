import { useState } from 'react';
import { classnames } from '@shared/lib';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from '@shared/ui';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpened, setIsOpened] = useState(true);

  const toggleOpen = () => setIsOpened(!isOpened);

  return (
    <div className={classnames(styles.sidebar, className, { [styles.opened]: isOpened })}>
      <button onClick={toggleOpen}>open</button>
      <ThemeSwitcher />
    </div>
  );
}
