import './Header.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from "./assets/logo.png";
import spain from "./assets/spain.png";
import english from "./assets/united-kingdom.png";

function Header() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lng) => () => {
        i18n.changeLanguage(lng)
            .catch(err => console.error('Error changing language:', err));
    };

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSkills = () => {
        const element2 = document.getElementById('skills');
        if (element2) {
            element2.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const element3 = document.getElementById('contact');
        if (element3) {
            element3.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='header' id='inicio'>
            <img src={logo} alt="logo" />
            <div className="nav">
                <nav>
                    <button onClick={scrollToProjects}>{t('header_past_work')}</button>
                    <button onClick={scrollToSkills}>{t('header_skills')}</button>
                    <button onClick={scrollToContact}>{t('header_contact')}</button>
                </nav>
            </div>
            <div className="lenguajes">
                <img
                    onClick={handleLanguageChange('es')}
                    src={spain}
                    alt="Spanish"
                    style={{ cursor: 'pointer' }}
                    title='Español'
                />
                <img
                    onClick={handleLanguageChange('en')}
                    src={english}
                    alt="English"
                    style={{ cursor: 'pointer' }}
                    title='English'
                />
            </div>
        </div>
    );
}

export default Header;
