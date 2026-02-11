import { useEffect, useState } from 'react';

export function useFakeLoader() {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const logoTimeout = setTimeout(() => {
      setShowLogo(false);
    }, 1000); // логотип 1 секунда

    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1;
      });
    }, 30);

    return () => {
      clearTimeout(logoTimeout);
      clearInterval(interval);
    };
  }, []);

  return { progress, showLogo };
}
