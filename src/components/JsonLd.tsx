import React from 'react';

interface BreadcrumbItem {
    name: string;
    url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ServiceJsonLdProps {
    name: string;
    description: string;
    url: string;
    serviceType: string;
}

export function ServiceJsonLd({ name, description, url, serviceType }: ServiceJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url,
        serviceType,
        provider: {
            '@type': 'Organization',
            '@id': 'https://innodify.in/#organization',
            name: 'Innodify',
            url: 'https://innodify.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function OrganizationJsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://innodify.in/#organization',
                name: 'Innodify',
                url: 'https://innodify.in',
                logo: 'https://innodify.in/innodify-logo.svg',
                sameAs: [
                    'https://www.linkedin.com/in/theshivanshumishra/',
                    'https://www.linkedin.com/in/theabhishekmishra/',
                    'https://www.instagram.com/innodify/',
                ],
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '6th Floor, 602 Sundram Plus, Timaliyawad, Athugar St',
                    addressLocality: 'Surat',
                    addressRegion: 'Gujarat',
                    postalCode: '395001',
                    addressCountry: 'IN',
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-79843-71199',
                    contactType: 'sales',
                    availableLanguage: ['English', 'Hindi'],
                },
            },
            {
                '@type': 'WebSite',
                '@id': 'https://innodify.in/#website',
                url: 'https://innodify.in',
                name: 'Innodify',
                publisher: { '@id': 'https://innodify.in/#organization' },
            },
            {
                '@type': 'WebPage',
                '@id': 'https://innodify.in/#webpage',
                url: 'https://innodify.in',
                name: 'Innodify | AI, Web & Mobile Development Agency in Surat',
                isPartOf: { '@id': 'https://innodify.in/#website' },
                about: { '@id': 'https://innodify.in/#organization' },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
