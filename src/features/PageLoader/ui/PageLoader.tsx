import { Loader } from '@shared/ui';
import styles from './PageLoader.module.scss';

export function PageLoader() {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  );
}
