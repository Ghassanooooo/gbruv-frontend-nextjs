import axios from 'axios';

export const slugResolve = path => path.split('_').filter(i => i != '');

export const slug = path =>
  path
    .split('/')
    .filter(i => i != '')
    .join('_');

export async function getPageConfig(url) {
  const pageConfig = await axios(url);
  return pageConfig.data;
}

export async function getFooterConfig(url) {
  const footerConfig = await axios(url);
  const crawl = [];
  footerConfig.data.map((cat, idx) => {
    cat && crawl.push({ title: cat.title, options: [] });
    cat &&
      cat.options.map(col => {
        col && crawl[idx].options.push({ path: '/page/' + slug(col.path), title: col.title });
      });
  });
  return crawl;
}

export async function getArticleConfig(url) {
  const articleConfig = await axios(url);
  return articleConfig.data;
}

export async function getCurrentPayloads(url) {
  const payloadsConfig = await axios(url);
  return payloadsConfig.data;
}

export async function getInfoPage(url) {
  const pageConfig = await axios(url);
  return pageConfig.data;
}

export async function getCurrentTags(url, contentType) {
  const currentPayloads = [];
  const navbarPaylod = await axios(url);

  navbarPaylod.data.map(payload => {
    if (payload.contentType === contentType) {
      payload.options.map(option => {
        option.options.map(load => {
          currentPayloads.push({ title: load.title, path: '/page/' + slug(load.path) });
        });
      });
    }
  });

  return currentPayloads;
}

export async function getNavbarConfig(url) {
  const navbarData = await axios(url);

  return navbarData.data;
}
