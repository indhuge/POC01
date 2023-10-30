import { useState } from 'react';
import { useRouter } from 'next/router';
import Style from './LanguageSelector.module.scss'


const LanguageSelector = ({ title, kind, onClick, type, disabled }) => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('en-us'); // Default language

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    router.push({
      route: router.pathname,
      query: router.query
    }, 
    router.asPath, { locale : language });
  
  };

  return (
    <div>
      <select
        className={Style['language-selector']}
        value={selectedLanguage}
        onChange={(e) => handleChangeLanguage(e.target.value)}
      >
        <option value="en-us">EN (US)</option>
        <option value="pt-br">PT (BR)</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
