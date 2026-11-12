import React, { useState, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';
import { FadeIn } from '../../components/animations/FadeIn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { WAVEFORM_VIEWBOX, getWaveformPath } from './waveforms';
import './Services.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const shellRef = useRef(null);
  const tabRefs = useRef([]);
  const isCompact = useMediaQuery('(max-width: 860px)');

  // Progressive enhancement: inactive panels stay visible in CSS unless JS marks the shell interactive.
  useIsomorphicLayoutEffect(() => {
    if (shellRef.current) {
      shellRef.current.dataset.sigInteractive = 'true';
    }
  }, []);

  const totalChannels = String(services.length).padStart(2, '0');

  const waveformPaths = useMemo(
    () =>
      services.reduce((acc, item) => {
        acc[item.waveform] = getWaveformPath(item.waveform);
        return acc;
      }, {}),
    []
  );

  const selectIndex = (index, focusTab = false) => {
    const bounded = (index + services.length) % services.length;
    setActiveIndex(bounded);
    if (focusTab) {
      tabRefs.current[bounded]?.focus();
    }
  };

  const handleTabKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        selectIndex(index + 1, true);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        selectIndex(index - 1, true);
        break;
      case 'Home':
        event.preventDefault();
        selectIndex(0, true);
        break;
      case 'End':
        event.preventDefault();
        selectIndex(services.length - 1, true);
        break;
      default:
        break;
    }
  };

  return (
    <section id="services" className="sig-section" aria-labelledby="sig-section-heading">
      <div className="sig-container">
        <FadeIn direction="up" distance={20} duration={0.55}>
          <header className="sig-header">
            <div className="sig-eyebrow">
              <span className="sig-eyebrow-led" aria-hidden="true" />
              <span>CAPABILITIES</span>
            </div>

            <h2 id="sig-section-heading" className="sig-title">
              What I <span className="sig-title-accent">Build &amp; Deliver</span>
            </h2>

            <p className="sig-subtitle">
              From business-focused applications to intelligent digital experiences, I build solutions that solve real-world problems.
            </p>
          </header>

          <div ref={shellRef} className="sig-shell">
            <div
              className="sig-tablist"
              role="tablist"
              aria-label="Engineering capabilities"
              aria-orientation={isCompact ? 'horizontal' : 'vertical'}
            >
              {services.map((service, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={service.number}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`sig-tab-${service.number}`}
                    aria-selected={isActive}
                    aria-controls={`sig-panel-${service.number}`}
                    tabIndex={isActive ? 0 : -1}
                    className="sig-tab"
                    onClick={() => selectIndex(idx)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  >
                    <span className="sig-tab-num">{service.number}</span>
                    <span className="sig-tab-title">{service.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="sig-panels">
              {services.map((service, idx) => {
                const isActive = idx === activeIndex;
                const wavePath = waveformPaths[service.waveform];

                return (
                  <div
                    key={service.number}
                    role="tabpanel"
                    id={`sig-panel-${service.number}`}
                    aria-labelledby={`sig-tab-${service.number}`}
                    data-active={isActive ? 'true' : 'false'}
                    tabIndex={isActive ? 0 : -1}
                    className="sig-panel"
                  >
                    <span className="sig-bracket sig-bracket--tl" aria-hidden="true" />
                    <span className="sig-bracket sig-bracket--tr" aria-hidden="true" />
                    <span className="sig-bracket sig-bracket--bl" aria-hidden="true" />
                    <span className="sig-bracket sig-bracket--br" aria-hidden="true" />

                    <div className="sig-status-bar">
                      <span className="sig-channel">
                        CH {service.number} / {totalChannels}
                      </span>
                      <span className="sig-status">
                        <span className="sig-status-led" aria-hidden="true" />
                        ACTIVE
                      </span>
                    </div>

                    <div className="sig-watermark" aria-hidden="true">
                      {service.number}
                    </div>

                    <div className="sig-body">
                      <h3 className="sig-panel-title">{service.title}</h3>
                      <p className="sig-panel-desc">{service.description}</p>

                      <ul className="sig-tags" aria-label={`${service.title} technologies`}>
                        {service.tags.map((tag) => (
                          <li key={tag} className="sig-tag">
                            <span className="sig-tag-led" aria-hidden="true" />
                            <span>{tag}</span>
                          </li>
                        ))}
                      </ul>

                      {service.relatedProject && (
                        <div className="sig-project-link-wrap">
                          <Link to={service.relatedProject.path} className="sig-project-link">
                            <span>{service.relatedProject.label}</span>
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </Link>
                        </div>
                      )}
                    </div>

                    <div className="sig-wave-bay" aria-hidden="true">
                      <svg
                        key={isActive ? `${service.number}-active` : `${service.number}-idle`}
                        className="sig-wave-svg"
                        viewBox={WAVEFORM_VIEWBOX}
                        preserveAspectRatio="none"
                        focusable="false"
                      >
                        <line
                          x1="0"
                          y1="46"
                          x2="640"
                          y2="46"
                          className="sig-wave-axis"
                        />
                        <path d={wavePath} className="sig-wave-ghost" />
                        <path
                          d={wavePath}
                          pathLength="1000"
                          className="sig-wave-trace"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
