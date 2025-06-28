import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');

  return <div>{t('Страница о сайте')}</div>;
}

export default AboutPage;
