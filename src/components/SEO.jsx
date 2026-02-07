import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    keywords,
    name = 'Ayisha Muneer',
    type = 'website',
    url = 'https://ayishamuneer.com',
    canonical,
    image,
    publishedTime,
    modifiedTime,
    locale = 'en_AE'
}) {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title}` : name}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:site_name" content="Ayisha Muneer" />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title || name} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            <meta property="og:url" content={url} />
            <meta property="og:locale" content={locale} />

            {/* Article Specific */}
            {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:title" content={title || name} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );
}
