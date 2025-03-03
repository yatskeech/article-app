import { useTranslation } from 'react-i18next';
import LanguageIcon from '@shared/assets/icons/language.svg';
import styles from './LanguageSwitcher.module.scss';

enum Languages {
  en = 'en',
  ru = 'ru',
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation('common');

  const toggleLanguage = () => {
    i18n.changeLanguage(
      i18n.language === Languages.en ? Languages.ru : Languages.en,
    );
  };

  return (
    <button onClick={toggleLanguage} className={styles.button}>
      <LanguageIcon className={styles.icon} />
    </button>
  );
}
