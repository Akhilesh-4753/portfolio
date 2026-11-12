import { projects } from './projects.js';
import { socialLinks } from './socialLinks.js';

export const SITE_URL = 'https://akhileshp.com';
export const SITE_NAME = 'Akhilesh P.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Akhilesh/Akhilesh.jpeg`;
export const DEFAULT_OG_IMAGE_ALT = 'Akhilesh P., Full-Stack Developer in Malappuram, Kerala';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_PAGE_ID = `${SITE_URL}/#profilepage`;

const PROFILE_SAME_AS = socialLinks
  .map((item) => item.url)
  .filter((url) => typeof url === 'string' && url.startsWith('https://') && !url.startsWith('https://wa.me'));

const PERSON_ENTITY = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Akhilesh P.',
  jobTitle: 'Full-Stack Developer',
  url: `${SITE_URL}/`,
  image: DEFAULT_OG_IMAGE,
  email: 'mailto:akhipn4753@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Malappuram',
    addressRegion: 'Kerala',
    addressCountry: 'IN'
  },
  knowsAbout: [
    'Full-Stack Web Development',
    'React.js',
    'Python',
    'Django',
    'ASP.NET Core',
    'C#',
    'JavaScript',
    'REST APIs',
    'ERP Systems',
    'SQL',
    'PostgreSQL',
    'AI Integration',
    'Accounting & Financial Operations'
  ],
  sameAs: PROFILE_SAME_AS
};

const WEBSITE_ENTITY = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Akhilesh P. | Full-Stack Developer',
  description:
    'Akhilesh P. is a Full-Stack Developer from Malappuram, Kerala, specializing in React, Django, ASP.NET Core, ERP systems and AI-powered web applications.',
  inLanguage: 'en',
  publisher: {
    '@id': PERSON_ID
  }
};

export function buildHomeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      PERSON_ENTITY,
      WEBSITE_ENTITY,
      {
        '@type': 'ProfilePage',
        '@id': PROFILE_PAGE_ID,
        url: `${SITE_URL}/`,
        name: 'Akhilesh P. | Full-Stack Developer in Malappuram, Kerala',
        description:
          'Akhilesh P. is a Full-Stack Developer from Malappuram, Kerala, specializing in React, Django, ASP.NET Core, ERP systems and AI-powered web applications.',
        inLanguage: 'en',
        isPartOf: {
          '@id': WEBSITE_ID
        },
        about: {
          '@id': PERSON_ID
        },
        mainEntity: {
          '@id': PERSON_ID
        }
      }
    ]
  };
}

export const HOME_SEO = {
  title: 'Akhilesh P. | Full-Stack Developer in Malappuram, Kerala',
  description:
    'Akhilesh P. is a Full-Stack Developer from Malappuram, Kerala, specializing in React, Django, ASP.NET Core, ERP systems and AI-powered web applications.',
  canonical: `${SITE_URL}/`,
  type: 'website',
  image: DEFAULT_OG_IMAGE,
  imageAlt: DEFAULT_OG_IMAGE_ALT,
  noindex: false,
  jsonLd: buildHomeJsonLd()
};

export const NOT_FOUND_SEO = {
  title: 'Page Not Found | Akhilesh P.',
  description:
    'The requested page could not be found on Akhilesh P.’s developer portfolio.',
  canonical: null,
  type: 'website',
  image: DEFAULT_OG_IMAGE,
  imageAlt: DEFAULT_OG_IMAGE_ALT,
  noindex: true,
  jsonLd: null
};

export const PROJECT_NOT_FOUND_SEO = {
  title: 'Project Not Found | Akhilesh P.',
  description:
    'The requested project case study could not be found on Akhilesh P.’s portfolio.',
  canonical: null,
  type: 'website',
  image: DEFAULT_OG_IMAGE,
  imageAlt: DEFAULT_OG_IMAGE_ALT,
  noindex: true,
  jsonLd: null
};

const PROJECT_SCHEMA_CLASSIFICATION = {
  taskflow: {
    type: 'SoftwareApplication',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Web'
  },
  inkspace: {
    type: 'SoftwareApplication',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web'
  },
  daybook: {
    type: 'SoftwareApplication',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Mobile'
  },
  'code7-erp': {
    type: 'SoftwareApplication',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web'
  },
  'pos-business-management': { type: 'CreativeWork' },
  apnavilla: { type: 'CreativeWork' },
  'kidonex-feedback': { type: 'CreativeWork' },
  movie: { type: 'CreativeWork' },
  ecommerce: { type: 'CreativeWork' },
  streamline: { type: 'CreativeWork' },
  aishka: { type: 'CreativeWork' },
  'urban-escape': { type: 'CreativeWork' }
};

const PROJECT_SEO_OVERRIDES = {
  taskflow: {
    title: 'TaskFlow — Django & AI Task Management App | Akhilesh P.',
    description:
      'TaskFlow is a full-stack Python Django task management application featuring authentication, CRUD workflows, productivity analytics, reminders, and Gemini/Groq AI planning.',
    image: `${SITE_URL}/images/projects/taskflow/taskflow-dashboard.webp`,
    imageAlt:
      'TaskFlow Django productivity dashboard showing task metrics, overview widgets, and navigation'
  },
  inkspace: {
    title: 'INKSPACE — Django Blogging Platform with Gemini AI | Akhilesh P.',
    description:
      'INKSPACE is a Python Django blogging platform featuring CKEditor rich-text editing, ownership authentication, searchable articles, and Google Gemini AI writing assistance.',
    image: `${SITE_URL}/images/projects/inkspace/blog-home-page.webp`,
    imageAlt:
      'INKSPACE Django blogging platform homepage displaying featured stories and editorial layout'
  },
  daybook: {
    title: 'Daybook — React Native Daily Planning & Reflection App | Akhilesh P.',
    description:
      'Daybook is a React Native mobile productivity app combining daily tasks, reminders, habit tracking, Plan vs. Action analytics, Planning Grade, and self-reflection.',
    image: `${SITE_URL}/images/projects/daybook/dashboard.webp`,
    imageAlt:
      'Daybook React Native mobile dashboard showcasing daily planning overview and productivity modules'
  },
  'pos-business-management': {
    title: 'POS Business Management Software Architecture | Akhilesh P.',
    description:
      'Collaborative retail POS and business management software planned with ASP.NET Core, .NET, and React.js, aligning sales, billing, inventory, purchases, and reporting workflows.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'POS Business Management Software case study by Akhilesh P.'
  },
  apnavilla: {
    title: 'ApnaVilla — Next.js Real Estate Web Application | Akhilesh P.',
    description:
      'ApnaVilla is a real estate web application built with responsive Next.js frontend interfaces in collaboration with a Laravel backend team at Branding Hut.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'ApnaVilla Next.js real estate web application case study by Akhilesh P.'
  },
  'code7-erp': {
    title: 'Code7 ERP — ASP.NET Core & Kendo UI ERP Modules | Akhilesh P.',
    description:
      'Code7 ERP is an enterprise resource planning web application developed at Ebsor Infosystem using ASP.NET Core, .NET, SQL, REST APIs, and Kendo UI components.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Code7 ERP ASP.NET Core and Kendo UI case study by Akhilesh P.'
  },
  'kidonex-feedback': {
    title: 'Kidonex Customer Feedback & Review — ASP.NET Core MVC | Akhilesh P.',
    description:
      'Kidonex Customer Feedback & Review module built with ASP.NET Core MVC views, JavaScript validations, controller workflows, and REST API integration.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Kidonex Customer Feedback and Review ASP.NET Core MVC case study by Akhilesh P.'
  },
  movie: {
    title: 'Movie Web Application — React.js & Material UI | Akhilesh P.',
    description:
      'Responsive movie discovery web application built with reusable React.js components, React Bootstrap, Material UI, and asynchronous API data fetching.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Movie Web Application React.js case study by Akhilesh P.'
  },
  ecommerce: {
    title: 'E-commerce Web Application — React.js Shopping UI | Akhilesh P.',
    description:
      'Responsive e-commerce web application built with React.js, REST APIs, React Bootstrap, and Material UI with dynamic product rendering and cart workflows.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'E-commerce Web Application React.js case study by Akhilesh P.'
  },
  streamline: {
    title: 'Streamline Consortium Website — React.js Corporate Site | Akhilesh P.',
    description:
      'Official corporate website developed with React.js to showcase Streamline Consortium’s engineering consultancy services, project portfolio, and company profile.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Streamline Consortium React.js website case study by Akhilesh P.'
  },
  aishka: {
    title: 'Aishka Clothing Website — Responsive React Storefront | Akhilesh P.',
    description:
      'Modern fashion and clothing showcase web application built with React.js, JavaScript, HTML, and CSS for responsive browsing across desktop and mobile devices.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Aishka Clothing Website React.js case study by Akhilesh P.'
  },
  'urban-escape': {
    title: 'Urban Escape Travel Website — Responsive Frontend | Akhilesh P.',
    description:
      'Responsive travel and tourism showcase website built with HTML5, CSS3, JavaScript, and Bootstrap for clear cross-device destination browsing.',
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Urban Escape Travel Website case study by Akhilesh P.'
  }
};

export function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const normalized = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalized}`;
}

export function buildProjectJsonLd(project, meta) {
  const canonicalUrl = `${SITE_URL}/projects/${project.slug}`;
  const webPageId = `${canonicalUrl}#webpage`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;
  const projectEntityId = `${canonicalUrl}#project`;
  const classification = PROJECT_SCHEMA_CLASSIFICATION[project.slug] || { type: 'CreativeWork' };

  const projectEntity = {
    '@type': classification.type,
    '@id': projectEntityId,
    name: project.title,
    description: meta.description,
    url: canonicalUrl,
    image: meta.image,
    author: {
      '@id': PERSON_ID
    },
    ...(Array.isArray(project.technologies) && project.technologies.length > 0
      ? { keywords: project.technologies }
      : {}),
    ...(classification.type === 'SoftwareApplication'
      ? {
          applicationCategory: classification.applicationCategory,
          operatingSystem: classification.operatingSystem
        }
      : {
          ...(project.category ? { genre: project.category } : {})
        })
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Akhilesh P.',
        url: `${SITE_URL}/`
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${SITE_URL}/#projects`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: canonicalUrl
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': webPageId,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: 'en',
        isPartOf: {
          '@id': WEBSITE_ID
        },
        breadcrumb: {
          '@id': breadcrumbId
        },
        mainEntity: {
          '@id': projectEntityId
        }
      },
      projectEntity
    ]
  };
}

export function getProjectSeo(project) {
  if (!project) return PROJECT_NOT_FOUND_SEO;

  const override = PROJECT_SEO_OVERRIDES[project.slug] || {};
  const imageUrl = override.image || (project.image ? toAbsoluteUrl(project.image) : DEFAULT_OG_IMAGE);
  const meta = {
    title: override.title || `${project.title} | ${SITE_NAME}`,
    description: override.description || project.shortDescription || HOME_SEO.description,
    canonical: `${SITE_URL}/projects/${project.slug}`,
    type: 'article',
    image: imageUrl,
    imageAlt: override.imageAlt || project.imageAlt || `${project.title} — ${SITE_NAME}`,
    noindex: false
  };

  return {
    ...meta,
    jsonLd: buildProjectJsonLd(project, meta)
  };
}

export function getSeoForPath(pathname) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0];

  if (cleanPath === '/' || cleanPath === '') {
    return HOME_SEO;
  }

  if (cleanPath.startsWith('/projects/')) {
    const slug = cleanPath.slice('/projects/'.length).replace(/\/+$/, '');
    const project = projects.find((item) => item.slug === slug);
    return getProjectSeo(project);
  }

  return NOT_FOUND_SEO;
}

function escapeHtmlAttr(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeHtmlText(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

export function renderSeoHeadHtml(seo) {
  const lines = [
    `<title>${escapeHtmlText(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(seo.description)}" />`
  ];

  if (seo.noindex) {
    lines.push(`<meta name="robots" content="noindex, nofollow" />`);
  }

  if (seo.canonical) {
    lines.push(`<link rel="canonical" href="${escapeHtmlAttr(seo.canonical)}" />`);
  }

  lines.push(
    `<meta property="og:site_name" content="${escapeHtmlAttr(SITE_NAME)}" />`,
    `<meta property="og:type" content="${escapeHtmlAttr(seo.type || 'website')}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(seo.description)}" />`
  );

  if (seo.canonical) {
    lines.push(`<meta property="og:url" content="${escapeHtmlAttr(seo.canonical)}" />`);
  }

  lines.push(
    `<meta property="og:image" content="${escapeHtmlAttr(seo.image || DEFAULT_OG_IMAGE)}" />`,
    `<meta property="og:image:alt" content="${escapeHtmlAttr(seo.imageAlt || DEFAULT_OG_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(seo.image || DEFAULT_OG_IMAGE)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtmlAttr(seo.imageAlt || DEFAULT_OG_IMAGE_ALT)}" />`
  );

  if (seo.jsonLd) {
    const safeJson = JSON.stringify(seo.jsonLd).replaceAll('<', '\\u003c');
    lines.push(`<script type="application/ld+json" data-seo-jsonld="true">${safeJson}</script>`);
  }

  return lines.join('\n    ');
}

