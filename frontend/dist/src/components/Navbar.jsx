import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="navbar">
      <Link to="/" className="logo">PAPYRUS <span>BHS</span></Link>
      <nav>
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/about">{t('nav.about')}</Link>
        <Link to="/programs">{t('nav.programs')}</Link>
        <Link to="/admissions">{t('nav.admissions')}</Link>
        <Link to="/tuition-fees">{t('nav.fees')}</Link>
        <Link to="/advantages">{t('nav.advantages')}</Link>
        <Link to="/gallery">{t('nav.gallery')}</Link>
        <Link to="/news">{t('nav.news')}</Link>
        <Link to="/contact">{t('nav.contact')}</Link>
        <LanguageSwitcher />
      </nav>
    </nav>
  );
}