import React, { createContext, useContext, useState, useEffect } from 'react';
import type { YugaKey } from '../data/yugas';

export type Theme = 'dark' | 'light';

interface AppContextValue {
  activeYuga: YugaKey;
  setActiveYuga: (yuga: YugaKey) => void;
  scrollY: number;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue>({
  activeYuga: 'satya',
  setActiveYuga: () => {},
  scrollY: 0,
  isMobileMenuOpen: false,
  setMobileMenuOpen: () => {},
  theme: 'dark',
  toggleTheme: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeYuga, setActiveYuga] = useState<YugaKey>('satya');
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('artimas_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('artimas_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider
      value={{
        activeYuga,
        setActiveYuga,
        scrollY,
        isMobileMenuOpen,
        setMobileMenuOpen,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
