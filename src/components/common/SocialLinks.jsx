import { Mail } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';
import { MagneticButton } from '../animations/MagneticButton';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './BrandIcons';

const ICON_MAP = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  MessageCircle: WhatsappIcon,
  Instagram: InstagramIcon,
  Mail: Mail
};

export const SocialLinks = ({ variant = 'icons', className = '', style = {} }) => {
  if (variant === 'cards') {
    return (
      <div
        className={`social-cards-grid ${className}`}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          ...style
        }}
      >
        {socialLinks.map((item) => {
          const Icon = ICON_MAP[item.icon] || Mail;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.9rem',
                padding: '1rem 1.25rem',
                color: 'var(--text-primary)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(56, 189, 248, 0.1)',
                  color: 'var(--color-blue)',
                  flexShrink: 0
                }}
              >
                <Icon size={20} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{item.name}</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.label}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`social-icons-row ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        ...style
      }}
    >
      {socialLinks.map((item) => {
        const Icon = ICON_MAP[item.icon] || Mail;
        return (
          <MagneticButton key={item.name} pullFactor={0.35}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-blue)';
                e.currentTarget.style.borderColor = 'var(--color-blue)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon size={18} />
            </a>
          </MagneticButton>
        );
      })}
    </div>
  );
};
