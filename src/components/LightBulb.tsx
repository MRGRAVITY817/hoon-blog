import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs';

export const LightBulb = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <button onClick={switchTheme} className="text-2xl">
      {typeof theme === 'undefined' ? (
        <h3>Loading...</h3>
      ) : theme === 'light' ? (
        <BsLightbulbOff />
      ) : (
        <BsLightbulb />
      )}
    </button>
  );
};
