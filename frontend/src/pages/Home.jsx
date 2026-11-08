import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Hero3D from '../components/Hero3D';

export default function Home() {
  const { t } = useLanguage();

  // On définit les filières avec leurs images
  const filieres = [
    {
      titre: "Accounting (ACC-CG)",
      desc: "Formation professionnelle de qualité, débouchés garantis.",
      image: "https://images.pexels.com/photos/34162710/pexels-photo-34162710.jpeg"
    },
    {
      titre: "Electrical Power System (EPS-F3)",
      desc: "Apprenez les métiers de l'électricité et de l'industrie.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
    },
    {
      titre: "Marketing (MKT-ACC)",
      desc: "Développez des stratégies commerciales modernes.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
    }
  ];

  return (
    <>
      {/* HERO avec image de fond (gérée dans le CSS .hero) */}
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

      {/* SECTION FILIÈRES avec animation au scroll Framer Motion */}
      <section className="section">
        <h2>Nos filières d'excellence</h2>
        
        <div className="grid">
          {filieres.map((filiere, index) => (
            <motion.div
              key={filiere.titre}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Effet cascade
              whileHover={{ y: -8, scale: 1.02 }} // Effet de survol
            >
              <img src={filiere.image} alt={filiere.titre} />
              <h3>{filiere.titre}</h3>
              <p>{filiere.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bouton pour voir toutes les filières */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/programs" className="btn btn-primary">
            Voir toutes nos filières
          </Link>
        </div>
      </section>

      {/* SECTION AVANTAGES (Nouveau) */}
      <section className="section" style={{ background: 'var(--gris-clair)', borderRadius: '20px', margin: '0 2rem' }}>
        <h2>Pourquoi choisir PAPYRUS ?</h2>
        <div className="grid">
          <motion.div 
            className="card" 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>🚌 Transport Scolaire</h3>
            <p>Un service de transport fiable pour la sécurité de vos enfants.</p>
          </motion.div>
          
          <motion.div 
            className="card" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>🔒 Système Biométrique</h3>
            <p>Suivez l'arrivée et le départ de votre enfant en temps réel.</p>
          </motion.div>

          <motion.div 
            className="card" 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>🌍 Ouverture Internationale</h3>
            <p>Possibilités d'études au Canada et en Chine pour les meilleurs élèves.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}