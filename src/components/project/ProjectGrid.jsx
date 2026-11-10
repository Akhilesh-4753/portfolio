import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from '../animations/FadeIn';

const CATEGORIES = [
  'All Projects',
  'Full-Stack Development',
  'Frontend Development',
  'Backend & ERP',
  'AI & Automation',
  'Mobile Applications'
];

/**
 * Filterable and searchable gallery showcasing all portfolio projects.
 */
export const ProjectGrid = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Projects' ||
        (project.filterCategories && project.filterCategories.includes(activeCategory));

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = [
        project.title,
        project.category,
        project.role,
        project.ownership,
        project.shortDescription,
        ...(project.technologies || [])
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [projects, activeCategory, normalizedQuery]);

  const handleResetFilters = () => {
    setActiveCategory('All Projects');
    setSearchQuery('');
  };

  return (
    <div>
      {/* Controls: Search Input + Count & Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.15rem',
          marginBottom: '2.5rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', maxWidth: '460px', width: '100%' }}>
            <Search
              size={17}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: searchQuery ? '#F97316' : 'var(--text-muted)',
                pointerEvents: 'none',
                transition: 'color 0.2s ease'
              }}
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, technology, or category..."
              aria-label="Search projects by name, technology, or category"
              className="projects-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                <X size={13} />
              </button>
            )}
          </div>

          <span
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.55rem',
            alignItems: 'center'
          }}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '0.48rem 1.05rem',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  border: isSelected
                    ? '1px solid #F97316'
                    : '1px solid var(--border-subtle)',
                  backgroundColor: isSelected
                    ? 'rgba(249, 115, 22, 0.14)'
                    : 'var(--bg-card)',
                  color: isSelected ? '#FDBA74' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  boxShadow: isSelected ? '0 0 16px rgba(249, 115, 22, 0.18)' : 'none'
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.id} delay={Math.min(idx * 0.05, 0.3)} direction="up" style={{ height: '100%' }}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div
          className="glass-panel"
          style={{
            padding: '3rem 1.5rem',
            textAlign: 'center',
            borderRadius: '18px'
          }}
        >
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.45rem' }}>
            No matching projects found
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Try adjusting your search query or switching category filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="btn-outline"
            style={{ borderColor: 'rgba(249, 115, 22, 0.45)', color: '#FDBA74' }}
          >
            Reset Filters
          </button>
        </div>
      )}

      <style>{`
        .projects-search-input {
          width: 100%;
          padding: 0.72rem 2.5rem 0.72rem 2.75rem;
          border-radius: 12px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: var(--font-sans);
          outline: none;
          transition: var(--transition-smooth);
        }

        .projects-search-input::placeholder {
          color: var(--text-muted);
        }

        .projects-search-input:focus {
          border-color: #F97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.14);
        }

        .project-card-link:focus-visible {
          outline: 2px solid #F97316;
          outline-offset: 4px;
          border-radius: 20px;
        }

        .project-card-link .project-preview-media {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-card-link:hover .project-preview-media {
          transform: scale(1.03);
        }

        .project-card-link:hover .project-card-title {
          color: #FDBA74 !important;
        }

        .project-card-link:hover .project-card-cta {
          color: #F97316 !important;
        }

        .project-card-link .project-card-arrow {
          transition: transform 0.25s ease;
        }

        .project-card-link:hover .project-card-arrow {
          transform: translate(3px, -3px);
        }
      `}</style>
    </div>
  );
};
