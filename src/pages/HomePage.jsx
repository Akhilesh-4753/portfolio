import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Home/Hero';
import { About } from '../sections/About/About';
import { Experience } from '../sections/Experience/Experience';
import { CurrentWork } from '../sections/CurrentWork/CurrentWork';
import { Skills } from '../sections/Skills/Skills';
import { Projects } from '../sections/Projects/Projects';
import { Services } from '../sections/Services/Services';
import { Contact } from '../sections/Contact/Contact';

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling from external or cross-page transitions
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <CurrentWork />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};
