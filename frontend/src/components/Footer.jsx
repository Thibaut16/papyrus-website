import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>PAPYRUS Bilingual High School</h3>
          <p>B.P. 8190, Douala – Cameroun</p>
          <p>+237 695 878 931</p>
          <p>+237 683 180 095</p>
        </div>
        <div>
          <h4>{t('footer.quickLinks')}</h4>
          <a href="/admissions">{t('nav.admissions')}</a>
          <a href="/tuition-fees">{t('nav.fees')}</a>
          <a href="/programs">{t('nav.programs')}</a>
        </div>
        <div>
          <h4>{t('footer.followUs')}</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} PAPYRUS Bilingual High School. {t('footer.rights')}
      </div>
    </footer>
  );
}