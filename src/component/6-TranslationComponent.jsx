import React, { useState } from 'react';
import translate from 'translate';

const TranslationComponent = ({ word, fromLanguage, toLanguage }) => {
  const [translatedWord, setTranslatedWord] = useState('');

  const translateWord = async () => {
    try {
      const translated = await translate(word, {
        from: fromLanguage,
        to: toLanguage
      });
      setTranslatedWord(translated);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  // Translate the word when the component mounts
  React.useEffect(() => {
    translateWord();
  }, []);

  return (
    <div>
      <p>Original Word: {word}</p>
      <p>Translated Word: {translatedWord}</p>
    </div>
  );
};

export default TranslationComponent;
