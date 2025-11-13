import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEOHead = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update document title
    document.title = t('seo.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.description'));
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('seo.ogTitle'));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('seo.ogDescription'));
    }
    
    // Update html lang attribute
    document.documentElement.setAttribute('lang', i18n.language);
  }, [t, i18n.language]);

  return null;
};

export default SEOHead;
