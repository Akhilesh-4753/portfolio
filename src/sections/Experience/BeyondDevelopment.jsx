import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { Building2, MapPin, Globe, Palette, Search, Users } from 'lucide-react';
import { freelanceExperience } from '../../data/experience';
import './BeyondDevelopment.css';

const CONTRIBUTION_ICONS = {
  Globe,
  Palette,
  Search,
  Users
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const BeyondDevelopment = () => {
  const { heading, mainCollaboration, contributions } = freelanceExperience;
  const sectionRef = useRef(null);

  // Progressive enhancement: elements stay visible if JS fails or reduced motion is preferred.
  useIsomorphicLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root || typeof window === 'undefined') return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      return;
    }

    const targets = root.querySelectorAll('.bd-reveal');
    const cutoff = window.innerHeight * 0.92;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top <= cutoff) {
        el.dataset.bdVisible = 'true';
      }
    });

    root.dataset.bdAnimate = 'true';
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root || typeof window === 'undefined') return undefined;

    if (root.dataset.bdAnimate !== 'true') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.bdVisible = 'true';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px 20px 0px' }
    );

    const targets = root.querySelectorAll('.bd-reveal:not([data-bd-visible="true"])');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bd-section"
      aria-labelledby="bd-heading"
    >
      <div className="bd-ambient-glow" aria-hidden="true" />

      <header
        className="bd-header bd-reveal"
        style={{ '--bd-delay': '0ms' }}
      >
        <span className="bd-pill">
          <span>{heading.badge}</span>
        </span>

        <h2 id="bd-heading" className="bd-title">
          {heading.title}{' '}
          <span className="bd-title-accent">{heading.highlight}</span>
        </h2>

        <p className="bd-subtitle">{heading.subtitle}</p>
      </header>

      <div className="bd-split">
        <div
          className="bd-left bd-reveal"
          style={{ '--bd-delay': '60ms' }}
        >
          <span className="bd-collab-label">// MAIN COLLABORATION</span>

          <div className="bd-org-row">
            <span className="bd-org-tile" aria-hidden="true">
              <Building2 size={22} />
            </span>
            <h3 className="bd-org-title">{mainCollaboration.organization}</h3>
          </div>

          <p className="bd-location">
            <MapPin size={15} className="bd-location-icon" aria-hidden="true" />
            <span>{mainCollaboration.location}</span>
          </p>

          <p className="bd-desc">{mainCollaboration.description}</p>
        </div>

        <div className="bd-right">
          <div className="bd-grid">
            {contributions.map((item, idx) => {
              const Icon = CONTRIBUTION_ICONS[item.icon] || Globe;
              const delayMs = 100 + idx * 45;

              return (
                <article
                  key={item.title}
                  className="bd-contrib bd-reveal"
                  style={{ '--bd-delay': `${delayMs}ms` }}
                >
                  <div className="bd-contrib-light" aria-hidden="true" />
                  <span className="bd-contrib-rule" aria-hidden="true" />

                  <span className="bd-contrib-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>

                  <h4 className="bd-contrib-title">{item.title}</h4>
                  <p className="bd-contrib-desc">{item.description}</p>

                  {idx === 0 && <span className="bd-cross" aria-hidden="true" />}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
