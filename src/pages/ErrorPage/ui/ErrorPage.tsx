import { useTranslation } from 'react-i18next';
import styles from './ErrorPage.module.scss';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => navigate(0);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{t('Произошла ошибка')}</h1>
      <button className={styles.action} onClick={handleClick}>
        {t('Перезагрузить страницу')}
      </button>
    </div>
  );
}
