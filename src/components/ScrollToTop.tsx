import React, { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  const executeScroll = () => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  useLayoutEffect(() => {
    executeScroll();
  }, [pathname, search]);

  useEffect(() => {
    executeScroll();
    const rafId = requestAnimationFrame(executeScroll);
    const timer1 = setTimeout(executeScroll, 20);
    const timer2 = setTimeout(executeScroll, 100);
    const timer3 = setTimeout(executeScroll, 360);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
