import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.evacarelaundry.com' });

streamToPromise(sitemap)
  .then((data) => {
    console.log('Sitemap generated!');
  })
  .catch(console.error);

sitemap.pipe(createWriteStream('./public/sitemap.xml'));
links.forEach((link) => sitemap.write(link));
sitemap.end();
