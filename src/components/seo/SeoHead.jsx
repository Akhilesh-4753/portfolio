import { useEffect } from 'react';
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_ALT, SITE_NAME } from '../../data/seo';

function upsertMeta(attrName, attrValue, content) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(attrName, attrValue) {
  const el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (el) {
    el.remove();
  }
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(jsonLd) {
  const selector = 'script[type="application/ld+json"][data-seo-jsonld="true"]';
  let el = document.head.querySelector(selector);
  if (!jsonLd) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-seo-jsonld', 'true');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(jsonLd);
}

export const SeoHead = ({
  title,
  description,
  canonical,
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  noindex = false,
  jsonLd = null
}) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (title) {
      document.title = title;
    }

    if (description) {
      upsertMeta('name', 'description', description);
    }

    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, nofollow');
    } else {
      removeMeta('name', 'robots');
    }

    upsertCanonical(canonical);

    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:type', type);
    if (title) upsertMeta('property', 'og:title', title);
    if (description) upsertMeta('property', 'og:description', description);
    if (canonical) {
      upsertMeta('property', 'og:url', canonical);
    } else {
      removeMeta('property', 'og:url');
    }
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', imageAlt);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    if (title) upsertMeta('name', 'twitter:title', title);
    if (description) upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
    upsertMeta('name', 'twitter:image:alt', imageAlt);

    upsertJsonLd(jsonLd);
  }, [title, description, canonical, type, image, imageAlt, noindex, jsonLd]);

  return null;
};

