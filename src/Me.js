import './Me.css';
import perfil from "./assets/FOTO_PERFIL-removebg-preview.png";
import { useTranslation } from 'react-i18next';

function Me() {
  const { t } = useTranslation();

  return (
    <div className='about-me' id='inicio'>
      <div className="about-me-content">
        <h2>{t('welcome')}</h2>
        <div className="info-me">
          <img src={perfil} alt="perfil" />
          <h5>{t('introduction')}</h5>
        </div>
      </div>
    </div>
  );
}

export default Me;
