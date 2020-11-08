const axios = require('axios');
const toUrl = (host, route) => `<url><loc>${host}${route}</loc></url>`;

const createSitemap = (host, routes) =>
  `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => toUrl(host, route)).join('')}
  </urlset>`;

const Sitemap = () => {};

export const getServerSideProps = async ({ res, req }) => {
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  const slug = path =>
    path
      .split('/')
      .filter(i => i != '')
      .join('_');
  const crawl = [
    '',
    '/info/about',
    '/info/faq',
    '/info/affiliate',
    '/info/our-team',
    '/info/privacy-policy',
    '/info/contact',
  ];
  const navbarData = await axios(backendApiURL + 'navbar/');
  const productsData = await axios(backendApiURL + 'products/all');
  const DocsData = await axios(backendApiURL + 'docs/all');
  const BlogsData = await axios(backendApiURL + 'blogs/all');
  navbarData.data.map(cat => {
    cat && crawl.push('/page/' + slug(cat.path));
    cat &&
      cat.options.map(col => {
        col && crawl.push('/page/' + slug(col.path));
        col &&
          col.options.map(link => {
            link && crawl.push('/page/' + slug(link.path));
          });
      });
  });
  DocsData.data.map(doc => {
    doc && crawl.push('/viewDoc/docs_' + doc._id);
  });
  BlogsData.data.map(blog => {
    blog && crawl.push('/viewDoc/blogs_' + blog._id);
  });
  productsData.data.map(prod => {
    prod && crawl.push('/viewProduct/products_' + prod._id);
  });
  const sitemap = createSitemap(frontendURL, crawl);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
};

export default Sitemap;
