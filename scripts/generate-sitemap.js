import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

// Define your domain
const hostname = 'https://ayishamuneer.com';

// Define static routes
const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/seo', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/social-media', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/paid-ads', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/content-marketing', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/email-marketing', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/web-design', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/marketing-strategy', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/marketing-automation', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/lead-generation', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/ai-integration', changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
];

// Function to extract slugs from blog post files
const getBlogSlugs = () => {
    const postsDir = resolve('./src/data/posts');
    const files = readdirSync(postsDir);
    const slugs = [];

    files.forEach(file => {
        if (!file.endsWith('.js') && !file.endsWith('.jsx')) return;

        const content = readFileSync(resolve(postsDir, file), 'utf-8');
        // Regex to find slug property: slug: "some-slug"
        const match = content.match(/slug:\s*["']([^"']+)["']/);

        if (match && match[1]) {
            slugs.push(match[1]);
        }
    });

    return slugs;
};

// Add blog posts to links
const blogSlugs = getBlogSlugs();
blogSlugs.forEach(slug => {
    links.push({
        url: `/${slug}`,
        changefreq: 'monthly',
        priority: 0.7
    });
});

// Generate sitemap
const stream = new SitemapStream({ hostname });
const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

streamToPromise(stream).then(data => {
    console.log('Sitemap generated successfully!');
}).catch(err => {
    console.error('Error generating sitemap:', err);
});

stream.pipe(writeStream);

links.forEach(link => stream.write(link));
stream.end();
