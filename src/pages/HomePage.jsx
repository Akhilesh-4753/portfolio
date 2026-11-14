import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SeoHead } from '../components/seo/SeoHead';
import { HOME_SEO } from '../data/seo';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import { Hero } from '../sections/Home/Hero';
import { About } from '../sections/About/About';
import { Experience } from '../sections/Experience/Experience';
import { CurrentWork } from '../sections/CurrentWork/CurrentWork';
import { Skills } from '../sections/Skills/Skills';
import { Projects } from '../sections/Projects/Projects';
import { Services } from '../sections/Services/Services';
import { Contact } from '../sections/Contact/Contact';

export const HomePage = ({ targetSection } = {}) => {
  const location = useLocation();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    // Determine target section from prop, URL hash, or semantic pathname
    const rawSection =
      targetSection ||
      (location.hash ? location.hash.replace('#', '') : null) ||
      (location.pathname !== '/' ? location.pathname.replace(/^\//, '') : null);

    if (rawSection && rawSection !== 'home') {
      const timer = setTimeout(() => {
        scrollTo('#' + rawSection, { offset: -80, duration: 1.4 });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash, targetSection, scrollTo]);

  return (
    <>
      <SeoHead {...HOME_SEO} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CurrentWork />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};
