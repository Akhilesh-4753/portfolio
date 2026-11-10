import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Maximize2, Images } from 'lucide-react';
import { TiltCard } from '../animations/TiltCard';
import { FadeIn } from '../animations/FadeIn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const GalleryImageButton = ({
  item,
  projectTitle,
  index,
  onOpen,
  isPortrait = false,
  isOverview = false
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`View full size: ${projectTitle} - ${item.title}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        background: 'transparent',
        color: 'inherit',
        textAlign: 'left',
        cursor: 'pointer'
      }}
    >
      <div
        className="glass-panel"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          padding: '0.85rem',
          gap: '0.85rem',
          backgroundColor: 'rgba(14, 14, 14, 0.92)'
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: isPortrait && !isOverview ? '18px' : '12px',
            overflow: 'hidden',
            backgroundColor: '#070707',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={item.src}
            alt={item.alt || `${projectTitle} — ${item.title}`}
            loading="lazy"
            style={{
              width: isPortrait && !isOverview ? 'auto' : '100%',
              maxWidth: '100%',
              maxHeight: isPortrait && !isOverview ? '540px' : 'none',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              transition: prefersReducedMotion ? 'none' : 'transform 0.35s ease'
            }}
          />

          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.65rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(8, 8, 8, 0.78)',
              border: '1px solid rgba(249, 115, 22, 0.35)',
              color: 'var(--text-primary)',
              fontSize: '0.72rem',
              fontWeight: 600,
              backdropFilter: 'blur(6px)'
            }}
          >
            <Maximize2 size={12} color="var(--color-blue)" />
            Expand
          </span>
        </div>

        <div style={{ padding: '0 0.25rem 0.25rem' }}>
          <div
            style={{
              fontSize: '0.98rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '0.25rem'
            }}
          >
            {item.title}
          </div>
          {item.caption && (
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                margin: 0
              }}
            >
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

export const ProjectGallery = ({ gallery = [], projectTitle }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isTabletUp = useMediaQuery('(min-width: 769px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length));
  }, [gallery.length]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closeModal, showPrev, showNext]);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const indexedGallery = gallery.map((item, index) => ({ ...item, index }));
  const overviewItem = indexedGallery.find((item) => item.layout === 'overview');
  const screenItems = indexedGallery.filter((item) => item.layout !== 'overview');
  const portraitScreens = screenItems.filter((item) => item.orientation === 'portrait');
  const landscapeScreens = screenItems.filter((item) => item.orientation !== 'portrait');

  // When an odd number of landscape screens (> 1) is rendered, give the first screen
  // full width so remaining pairs align evenly without an orphan slot.
  const hasFeaturedLandscapeLead =
    landscapeScreens.length > 2 && landscapeScreens.length % 2 === 1;
  const featuredLead = hasFeaturedLandscapeLead ? landscapeScreens[0] : null;
  const pairedLandscapes = hasFeaturedLandscapeLead
    ? landscapeScreens.slice(1)
    : landscapeScreens;

  const activeItem = activeIndex !== null ? gallery[activeIndex] : null;

  return (
    <>
      <FadeIn direction="up">
        <TiltCard style={{ padding: isTabletUp ? '2.5rem' : '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Images size={22} color="var(--color-blue)" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
              Project Screenshots
            </h3>
          </div>
          <span
            className="tech-tag"
            style={{
              fontSize: '0.78rem',
              padding: '0.3rem 0.75rem',
              borderColor: 'rgba(249, 115, 22, 0.35)',
              color: 'var(--color-cyan)'
            }}
          >
            {gallery.length} {gallery.length === 1 ? 'Screen' : 'Screens'} — Click to expand
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Dedicated Featured Lead (keeps uneven landscape grids symmetric) */}
          {featuredLead && (
            <GalleryImageButton
              item={featuredLead}
              projectTitle={projectTitle}
              index={featuredLead.index}
              onOpen={setActiveIndex}
            />
          )}

          {/* Landscape Web / Dashboard Screens */}
          {pairedLandscapes.length > 0 && (
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              {pairedLandscapes.map((item) => (
                <GalleryImageButton
                  key={item.src}
                  item={item}
                  projectTitle={projectTitle}
                  index={item.index}
                  onOpen={setActiveIndex}
                />
              ))}
            </div>
          )}

          {/* Portrait Showcase Collage / Overview Poster (if included alongside screens) */}
          {overviewItem && (
            <div
              className="glass-panel"
              style={{
                display: 'grid',
                gridTemplateColumns: isTabletUp ? 'minmax(240px, 340px) 1fr' : '1fr',
                gap: '1.5rem',
                padding: '1.25rem',
                alignItems: 'center',
                backgroundColor: 'rgba(14, 14, 14, 0.92)'
              }}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(overviewItem.index)}
                aria-label={`View full size: ${projectTitle} - ${overviewItem.title}`}
                style={{
                  position: 'relative',
                  padding: 0,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#070707',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={overviewItem.src}
                  alt={overviewItem.alt || `${projectTitle} — ${overviewItem.title}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </button>

              <div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-blue)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Visual Summary
                </div>
                <h4
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem'
                  }}
                >
                  {overviewItem.title}
                </h4>
                {overviewItem.caption && (
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.1rem'
                    }}
                  >
                    {overviewItem.caption}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setActiveIndex(overviewItem.index)}
                  className="tech-tag"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    cursor: 'pointer',
                    padding: '0.45rem 0.9rem',
                    borderColor: 'rgba(249, 115, 22, 0.4)',
                    color: 'var(--text-primary)',
                    background: 'rgba(249, 115, 22, 0.12)'
                  }}
                >
                  <Maximize2 size={14} color="var(--color-blue)" />
                  View Full Visual
                </button>
              </div>
            </div>
          )}

          {/* Portrait Mobile Application Screens */}
          {portraitScreens.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isDesktop
                  ? 'repeat(3, 1fr)'
                  : isTabletUp
                    ? 'repeat(2, 1fr)'
                    : '1fr',
                gap: '1.5rem'
              }}
            >
              {portraitScreens.map((item) => (
                <GalleryImageButton
                  key={item.src}
                  item={item}
                  projectTitle={projectTitle}
                  index={item.index}
                  onOpen={setActiveIndex}
                  isPortrait
                />
              ))}
            </div>
          )}
        </div>
        </TiltCard>
      </FadeIn>

      {/* Accessible Fullscreen Image Lightbox */}
      {activeItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${projectTitle} screenshot viewer: ${activeItem.title}`}
            onClick={closeModal}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1200,
              backgroundColor: 'rgba(4, 4, 4, 0.92)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isTabletUp ? '2rem' : '1rem'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1120px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: '#0e0e0e',
                border: '1px solid rgba(249, 115, 22, 0.32)',
                borderRadius: '16px',
                padding: isTabletUp ? '1.5rem' : '1rem',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.75)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {activeItem.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {activeIndex + 1} of {gallery.length}
                    {activeItem.caption ? ` — ${activeItem.caption}` : ''}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close screenshot viewer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#060606',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.75rem',
                  minHeight: '240px'
                }}
              >
                <img
                  src={activeItem.src}
                  alt={activeItem.alt || `${projectTitle} — ${activeItem.title}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '72vh',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: '8px'
                  }}
                />
              </div>

              {gallery.length > 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous screenshot"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <ChevronLeft size={16} color="var(--color-blue)" />
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next screenshot"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Next
                    <ChevronRight size={16} color="var(--color-blue)" />
                  </button>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
