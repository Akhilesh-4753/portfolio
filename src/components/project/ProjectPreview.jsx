import React, { useState } from 'react';
import {
  CheckSquare,
  Sparkles,
  BookOpen,
  Smartphone,
  ShoppingBag,
  Building2,
  Database,
  MessageSquare,
  KeyRound,
  Film,
  ShoppingCart,
  Globe,
  BarChart3,
  Layers
} from 'lucide-react';

const PREVIEW_CONFIG = {
  taskflow: {
    label: 'taskflow.app · Django MVT + AI',
    icon: CheckSquare,
    accent: '#F97316',
    chips: ['Auth & CRUD', 'AI Roadmap', 'PostgreSQL'],
    layout: 'board'
  },
  inkspace: {
    label: 'inkspace · Editorial + Gemini API',
    icon: BookOpen,
    accent: '#FDBA74',
    chips: ['Rich Text', 'Gemini AI', 'Blog MVT'],
    layout: 'editor'
  },
  daybook: {
    label: 'Daybook · React Native',
    icon: Smartphone,
    accent: '#F97316',
    chips: ['Plan vs Action', 'Planning Grade', 'Journal'],
    layout: 'mobile'
  },
  pos: {
    label: 'POS Business Suite · Architecture',
    icon: ShoppingBag,
    accent: '#F97316',
    chips: ['Sales & Billing', 'Inventory', 'Reports'],
    layout: 'workflow'
  },
  apnavilla: {
    label: 'apnavilla · Next.js + Laravel',
    icon: Building2,
    accent: '#FDBA74',
    chips: ['Property UI', 'Next.js', 'Laravel API'],
    layout: 'cards'
  },
  code7: {
    label: 'Code7 ERP · Kendo UI + .NET',
    icon: Database,
    accent: '#F97316',
    chips: ['Kendo Grid', 'Master/Tx', 'REST APIs'],
    layout: 'grid'
  },
  erp: {
    label: 'Enterprise ERP · ASP.NET Core MVC',
    icon: Layers,
    accent: '#FDBA74',
    chips: ['Master', 'Transaction', 'Report'],
    layout: 'grid'
  },
  kidonex: {
    label: 'Kidonex CX · Feedback & Reviews',
    icon: MessageSquare,
    accent: '#F97316',
    chips: ['MVC Views', 'Validations', 'REST APIs'],
    layout: 'editor'
  },
  'ai-credential': {
    label: 'AI Credentials · Quota Module',
    icon: KeyRound,
    accent: '#FDBA74',
    chips: ['Allocation', 'API Sync', 'MVC'],
    layout: 'workflow'
  },
  movie: {
    label: 'Movie Browser · React UI',
    icon: Film,
    accent: '#F97316',
    chips: ['Catalog Grid', 'Search', 'Detail View'],
    layout: 'cards'
  },
  ecommerce: {
    label: 'E-Commerce Store · React + API',
    icon: ShoppingCart,
    accent: '#FDBA74',
    chips: ['Product Grid', 'Cart State', 'Filters'],
    layout: 'cards'
  },
  streamline: {
    label: 'Streamline Consortium · React',
    icon: Globe,
    accent: '#F97316',
    chips: ['Corporate UI', 'Consultancy', 'Responsive'],
    layout: 'editor'
  }
};

/**
 * Renders wireframe UI blocks matching the project's software category without fake metrics.
 */
const PreviewSkeleton = ({ layout, accent }) => {
  if (layout === 'mobile') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div
          style={{
            width: '128px',
            height: '100%',
            maxHeight: '148px',
            borderRadius: '14px',
            border: `1px solid ${accent}44`,
            backgroundColor: '#121212',
            padding: '0.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.45rem'
          }}
        >
          <div style={{ width: '36%', height: '4px', borderRadius: '4px', backgroundColor: accent, margin: '0 auto' }} />
          <div style={{ height: '24px', borderRadius: '6px', backgroundColor: 'rgba(249, 115, 22, 0.14)', border: '1px solid rgba(249, 115, 22, 0.28)' }} />
          <div style={{ height: '16px', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
          <div style={{ height: '16px', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.58rem', fontFamily: 'var(--font-mono)', color: '#FDBA74' }}>PLAN → ACT</span>
            <BarChart3 size={12} style={{ color: accent }} />
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'board') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.55rem', height: '100%' }}>
        {[0, 1, 2].map((col) => (
          <div
            key={col}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: col === 1 ? `1px solid ${accent}44` : '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '8px',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}
          >
            <div style={{ width: '55%', height: '5px', borderRadius: '3px', backgroundColor: col === 1 ? accent : 'rgba(255, 255, 255, 0.18)' }} />
            <div style={{ height: '22px', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
            <div style={{ height: '22px', borderRadius: '5px', backgroundColor: col === 1 ? 'rgba(249, 115, 22, 0.12)' : 'rgba(255, 255, 255, 0.04)' }} />
            <div style={{ height: '18px', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.03)' }} />
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'workflow') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.45rem', height: '100%' }}>
        {['01', '02', '03', '04'].map((step, idx) => (
          <React.Fragment key={step}>
            <div
              style={{
                flex: 1,
                height: '86px',
                borderRadius: '8px',
                backgroundColor: idx === 0 ? 'rgba(249, 115, 22, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                border: idx === 0 ? `1px solid ${accent}55` : '1px solid rgba(255, 255, 255, 0.07)',
                padding: '0.45rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: accent }}>{step}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ width: '80%', height: '5px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.18)' }} />
                <div style={{ width: '55%', height: '4px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
              </div>
            </div>
            {idx < 3 && (
              <div style={{ width: '10px', height: '2px', backgroundColor: `${accent}66`, flexShrink: 0 }} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (layout === 'grid') {
    return (
      <div
        style={{
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          padding: '0.55rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          height: '100%'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 0.7fr', gap: '0.4rem', paddingBottom: '0.35rem', borderBottom: '1px solid rgba(249, 115, 22, 0.25)' }}>
          {[0, 1, 2, 3].map((h) => (
            <div key={h} style={{ height: '6px', borderRadius: '3px', backgroundColor: h === 0 ? accent : 'rgba(255, 255, 255, 0.2)' }} />
          ))}
        </div>
        {[0, 1, 2, 3].map((row) => (
          <div key={row} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 0.7fr', gap: '0.4rem' }}>
            {[0, 1, 2, 3].map((cell) => (
              <div key={cell} style={{ height: '12px', borderRadius: '4px', backgroundColor: row % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.025)' }} />
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'cards') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.55rem', height: '100%' }}>
        {[0, 1, 2].map((card) => (
          <div
            key={card}
            style={{
              borderRadius: '8px',
              border: card === 0 ? `1px solid ${accent}44` : '1px solid rgba(255, 255, 255, 0.07)',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              padding: '0.45rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}
          >
            <div
              style={{
                flex: 1,
                borderRadius: '5px',
                background: card === 0
                  ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(124, 45, 18, 0.14))'
                  : 'rgba(255, 255, 255, 0.04)'
              }}
            />
            <div style={{ width: '75%', height: '5px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <div style={{ width: '45%', height: '4px', borderRadius: '3px', backgroundColor: accent }} />
          </div>
        ))}
      </div>
    );
  }

  // Default: 'editor' layout
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '0.42fr 1fr', gap: '0.55rem', height: '100%' }}>
      <div
        style={{
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.025)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem'
        }}
      >
        <div style={{ width: '70%', height: '5px', borderRadius: '3px', backgroundColor: accent }} />
        <div style={{ width: '85%', height: '4px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
        <div style={{ width: '60%', height: '4px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Sparkles size={11} style={{ color: accent }} />
          <span style={{ fontSize: '0.55rem', fontFamily: 'var(--font-mono)', color: '#FDBA74' }}>AI READY</span>
        </div>
      </div>
      <div
        style={{
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(249, 115, 22, 0.22)',
          padding: '0.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.38rem'
        }}
      >
        <div style={{ width: '60%', height: '7px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.22)' }} />
        <div style={{ width: '95%', height: '4px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <div style={{ width: '88%', height: '4px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <div style={{ width: '72%', height: '4px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
      </div>
    </div>
  );
};

/**
 * Displays a project's screenshot when provided, or a clean orange-and-black architectural UI preview.
 */
export const ProjectPreview = ({ project, aspectRatio = '16 / 10' }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const config = PREVIEW_CONFIG[project.previewType] || {
    label: project.title,
    icon: Layers,
    accent: '#F97316',
    chips: project.technologies?.slice(0, 3) || [],
    layout: 'editor'
  };
  const Icon = config.icon;
  const showImage = Boolean(project.image && !imgFailed);

  return (
    <div
      className="project-preview-frame"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        borderRadius: '14px',
        overflow: 'hidden',
        backgroundColor: '#090909',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="project-preview-media"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      ) : (
        <div
          className="project-preview-media"
          style={{
            width: '100%',
            height: '100%',
            padding: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            background:
              'radial-gradient(circle at 90% 10%, rgba(249, 115, 22, 0.14) 0%, rgba(124, 45, 18, 0.06) 40%, #090909 78%)'
          }}
        >
          {/* Window Chrome Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              paddingBottom: '0.45rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.32rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.14)' }} />
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: config.accent }} />
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={11} style={{ color: config.accent, flexShrink: 0 }} />
              <span>{config.label}</span>
            </div>
          </div>

          {/* Domain Layout Preview */}
          <div style={{ flex: 1, minHeight: 0 }}>
            <PreviewSkeleton layout={config.layout} accent={config.accent} />
          </div>

          {/* Highlighted Domain Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {config.chips.map((chip) => (
              <span
                key={chip}
                style={{
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.14rem 0.45rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(249, 115, 22, 0.08)',
                  border: '1px solid rgba(249, 115, 22, 0.22)',
                  color: '#FDBA74'
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

