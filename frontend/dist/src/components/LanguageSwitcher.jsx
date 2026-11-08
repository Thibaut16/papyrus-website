import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      style={{ padding: '0.4rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
    >
      <option value="fr">🇫🇷 FR</option>
      <option value="en">🇬🇧 EN</option>
    </select>
  );
}