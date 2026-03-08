/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://innodify.in',
    generateRobotsTxt: false, // We maintain our own robots.txt
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/api/*', '/blog/add'],
    transform: async (config, path) => {
        // Higher priority for key pages
        let priority = config.priority;
        if (path === '/') priority = 1.0;
        else if (path.startsWith('/services/')) priority = 0.9;
        else if (path.startsWith('/industries/')) priority = 0.8;
        else if (path.startsWith('/case-studies/')) priority = 0.8;
        else if (path === '/about-us' || path === '/contact-us') priority = 0.8;
        else if (path.startsWith('/blog/')) priority = 0.7;

        return {
            loc: path,
            changefreq: config.changefreq,
            priority,
            lastmod: new Date().toISOString(),
        };
    },
};
