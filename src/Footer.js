import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className='footer'>
      <div className="left">
        <h5>{t('footer_additional_info')}</h5>
        <a href="https://www.linkedin.com/in/daniel-salcedo-vivancos-87855918b/" target="_blank" rel="noopener noreferrer">{t('footer_linkedin')}</a>
        <a href="https://github.com/Danyel2608" target="_blank" rel="noopener noreferrer">{t('footer_github')}</a>
      </div>
      <div className="right">
        <h5>{t('footer_contact_me')}</h5>
        <p>{t('footer_email')}</p>
        <p>{t('footer_phone')}</p>
      </div>
    </div>
  );
}

export default Footer;
