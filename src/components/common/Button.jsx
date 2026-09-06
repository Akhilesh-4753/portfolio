import React from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../animations/MagneticButton';

export const Button = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  download,
  target,
  rel,
  className = '',
  magnetic = true,
  style = {}
}) => {
  const btnClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
      ? 'btn-secondary'
      : 'btn-outline';

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </>
  );

  let element;

  if (to) {
    element = (
      <Link to={to} className={`${btnClass} ${className}`} style={style} onClick={onClick}>
        {content}
      </Link>
    );
  } else if (href) {
    element = (
      <a
        href={href}
        className={`${btnClass} ${className}`}
        style={style}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        download={download}
        onClick={onClick}
      >
        {content}
      </a>
    );
  } else {
    element = (
      <button
        type="button"
        className={`${btnClass} ${className}`}
        style={style}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  if (magnetic) {
    return <MagneticButton>{element}</MagneticButton>;
  }

  return element;
};
