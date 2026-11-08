import { useState } from 'react';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

export default function Admissions() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', class_applied: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admissions', form);
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', class_applied: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleDownloadSupplies = (cls) => {
    // Génère un PDF simple côté client (à remplacer par un vrai PDF)
    const content = `Liste des fournitures - ${cls}\n\n- Cahiers\n- Stylos\n- Uniforme\n- Chaussures noires et chaussettes blanches uniquement`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fournitures-${cls}.txt`;
    a.click();
  };

  return (
    <div className="section">
      <h2>Admissions</h2>
      <div className="grid">
        <div className="card">
          <h3>Conditions d'admission</h3>
          <p>6e et Form 1 : par examen d'entrée.</p>
          <p>À partir de la 5e et Form 2 : étude de dossier.</p>
        </div>
        <div className="card">
          <h3>Dossier à fournir</h3>
          <ul>
            <li>Copie de l'acte de naissance</li>
            <li>Bulletin de notes de l'année précédente</li>
            <li>4 photos d'identité 4×4</li>
            <li>4 A4 Papers (Double A ou IK Plus 80g)</li>
            <li>6 rouleaux de papier hygiénique</li>
          </ul>
        </div>
      </div>

      <h3 style={{ marginTop: '3rem', color: '#0a1f44' }}>Télécharger la liste des fournitures</h3>
      <div className="grid">
        {['6e', '5e', '4e', '3e', 'Form 1', 'Form 2'].map((cls) => (
          <div key={cls} className="card">
            <h3>{cls}</h3>
            <button className="btn btn-primary" onClick={() => handleDownloadSupplies(cls)}>
              Télécharger
            </button>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '3rem', color: '#0a1f44' }}>Formulaire de préinscription</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          type="text" placeholder="Nom complet" required
          value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          style={{ width: '100%', padding: '0.9rem', margin: '0.5rem 0', borderRadius: '8px', border: '1px solid #d1d5db' }}
        />
        <input
          type="email" placeholder="Email" required
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ width: '100%', padding: '0.9rem', margin: '0.5rem 0', borderRadius: '8px', border: '1px solid #d1d5db' }}
        />
        <input
          type="tel" placeholder="Téléphone" required
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ width: '100%', padding: '0.9rem', margin: '0.5rem 0', borderRadius: '8px', border: '1px solid #d1d5db' }}
        />
        <input
          type="text" placeholder="Classe demandée"
          value={form.class_applied} onChange={(e) => setForm({ ...form, class_applied: e.target.value })}
          style={{ width: '100%', padding: '0.9rem', margin: '0.5rem 0', borderRadius: '8px', border: '1px solid #d1d5db' }}
        />
        <textarea
          placeholder="Message (optionnel)"
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ width: '100%', padding: '0.9rem', margin: '0.5rem 0', borderRadius: '8px', border: '1px solid #d1d5db', minHeight: '100px' }}
        />
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          Envoyer ma demande
        </button>
        {status === 'success' && <p style={{ color: 'green', marginTop: '1rem' }}>✅ Demande envoyée ! Nous vous contacterons.</p>}
        {status === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>❌ Erreur, veuillez réessayer.</p>}
      </form>
    </div>
  );
}