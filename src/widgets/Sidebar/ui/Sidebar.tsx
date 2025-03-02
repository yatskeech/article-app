import { useState } from 'react';
import { classnames } from '@shared/lib';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from '@shared/ui';

export function Sidebar() {
  const [isOpened, setIsOpened] = useState(true);

  const toggleOpen = () => setIsOpened(!isOpened);

  return (
    <div className={classnames(styles.sidebar, { [styles.opened]: isOpened })}>
      <button onClick={toggleOpen}>open</button>
      <ThemeSwitcher />
    </div>
  );
}
