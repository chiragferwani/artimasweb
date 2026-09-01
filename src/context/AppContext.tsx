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
  isInitialLoaderDone: boolean;
  setInitialLoaderDone: (done: boolean) => void;
}

const AppContext = createContext<AppContextValue>({
  activeYuga: 'satya',
  setActiveYuga: () => {},
  scrollY: 0,
  isMobileMenuOpen: false,
  setMobileMenuOpen: () => {},
  theme: 'dark',
  toggleTheme: () => {},
  isInitialLoaderDone: false,
  setInitialLoaderDone: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeYuga, setActiveYuga] = useState<YugaKey>('satya');
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme] = useState<Theme>('dark');
  const [isInitialLoaderDone, setIsInitialLoaderDone] = useState<boolean>(() => {
    return typeof window !== 'undefined' && sessionStorage.getItem('artimas_initial_loader') === 'done';
  });

  const setInitialLoaderDone = (done: boolean) => {
    if (done) {
      sessionStorage.setItem('artimas_initial_loader', 'done');
    } else {
      sessionStorage.removeItem('artimas_initial_loader');
    }
    setIsInitialLoaderDone(done);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('artimas_theme', 'dark');
  }, []);

  const toggleTheme = () => {};

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
        isInitialLoaderDone,
        setInitialLoaderDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
