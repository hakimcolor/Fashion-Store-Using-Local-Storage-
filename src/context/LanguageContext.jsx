import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'en' | 'bn'
  const toggle = () => setLang((l) => (l === 'en' ? 'bn' : 'en'));
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
