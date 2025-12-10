import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  schema
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ];

    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Update canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', `${import.meta.env.VITE_SITE_URL || ''}${canonical}`);
    }

    // Update OG URL
    let ogUrlElement = document.querySelector('meta[property="og:url"]');
    if (!ogUrlElement) {
      ogUrlElement = document.createElement('meta');
      ogUrlElement.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlElement);
    }
    ogUrlElement.setAttribute('content', `${import.meta.env.VITE_SITE_URL || ''}${canonical || ''}`);

    // Update last-modified
    const lastModified = document.querySelector('meta[name="last-modified"]');
    if (lastModified) {
      lastModified.setAttribute('content', new Date().toISOString().split('T')[0]);
    }

    // Add or update Schema.org JSON-LD
    if (schema) {
      let scriptElement = document.querySelector('script[data-page-schema]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('data-page-schema', 'true');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup page-specific schema on unmount
      const scriptElement = document.querySelector('script[data-page-schema]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [title, description, keywords, canonical, ogType, schema]);
};

export const generateWebPageSchema = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url: `${import.meta.env.VITE_SITE_URL || ''}${url}`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Nandy & Co. Solicitors',
    url: import.meta.env.VITE_SITE_URL || ''
  },
  provider: {
    '@type': 'LegalService',
    name: 'Nandy & Co. Solicitors',
    telephone: '+442085347000',
    email: 'info@nandyandco.co.uk'
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${import.meta.env.VITE_SITE_URL || ''}${item.url}`
  }))
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const generateServiceSchema = (name: string, description: string, areaServed: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'LegalService',
    name: 'Nandy & Co. Solicitors',
    telephone: '+442085347000',
    email: 'info@nandyandco.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Forest Gate',
      addressLocality: 'London',
      postalCode: 'E7',
      addressRegion: 'Greater London',
      addressCountry: 'GB'
    }
  },
  areaServed: areaServed.map(area => ({
    '@type': 'City',
    name: area
  }))
});
