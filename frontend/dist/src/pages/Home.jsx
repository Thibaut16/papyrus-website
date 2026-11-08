import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Hero3D from '../components/Hero3D';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <div className="btn-group">
          <Link to="/about" className="btn btn-secondary">{t('hero.discover')}</Link>
          <Link to="/admissions" className="btn btn-primary">{t('hero.enroll')}</Link>
        </div>
        <Hero3D />
      </section>

      <section className="section">
        <h2>Nos filières</h2>
        <div className="grid">
          {['Accounting (ACC-CG)', 'Marketing (MKT-ACC)', 'Electrical Power System (EPS-F3)', 'Building and Construction (BC-F4)'].map((f) => (
            <motion.div
              key={f}
              className="card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{f}</h3>
              <p>Formation professionnelle de qualité, débouchés garantis.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}