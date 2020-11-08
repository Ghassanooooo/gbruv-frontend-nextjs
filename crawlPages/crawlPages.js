require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

let dir = './crawlPages/pages.json';

const genPages = data => {
  fs.writeFile(dir, data, function (err) {
    if (err) return console.log(err);
    console.log(dir, '==>', data);
  });
};
const crawlNavbarLinks = async () => {
  const { backendApiURL } = process.env;
  try {
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
    console.log('crawl node   =====> ', crawl);
    genPages(JSON.stringify(crawl));
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
  }
};

crawlNavbarLinks();
