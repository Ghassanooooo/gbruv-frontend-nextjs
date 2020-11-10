/*
server with cashe

const { setConfig } = require('next/config');
setConfig(require('../next.config'));
const compression = require('compression');
const express = require('express');
const next = require('next');

const LRUCache = require('lru-cache');
const { Signale } = require('signale');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 3000;
const app = next({ dev });

const handle = app.getRequestHandler();
const ssrCache = new LRUCache({
  max: 100 * 1024 * 1024 
  length: function (n, key) {
    return n.length;
  },
  maxAge: 1000 * 60 * 60 * 24 * 30,
});
const options = {
  scope: 'app server',
};
const signale = new Signale(options);

(async () => {
  await app.prepare();
  const server = express();
  server.use(compression());
  server.use('/static', express.static('public/static'));

  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.get('*', (req, res) => {
  
    console.log('* ==> ', req);
    return renderAndCache(req, res);
  });

  await server.listen(port);
  signale.success(`<> React Next Boilerplate ready on localhost:${port}`);
})();


function getCacheKey(req) {
  return `${req.path}`;
}

async function renderAndCache(req, res) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`serving from cache ${key}`);
    res.setHeader('x-cache', 'HIT');
    res.sendStatus(200).send(ssrCache.get(key));
    return;
  }

  try {
    //console.log(`key ${key} not found, rendering`);
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, req.path, req.query);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      console.log('res.statusCode !== 200');

      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);
    console.log("res.setHeader('x-cache', 'MISS');");
    res.setHeader('x-cache', 'MISS');
    res.sendStatus(200).send(html);
  } catch (err) {
    app.renderError(err, req, res, req.path, req.query);
  }
}
*/

//old server befor cashe

const { setConfig } = require('next/config');
setConfig(require('../next.config'));
const compression = require('compression');
const express = require('express');
const next = require('next');
const { Signale } = require('signale');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 3000;
const app = next({ dev });

const handle = app.getRequestHandler();

const options = {
  scope: 'app server',
};
const signale = new Signale(options);

(async () => {
  await app.prepare();
  const server = express();
  server.use(compression());
  server.use('/static', express.static('public/static'));
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  await server.listen(port);
  signale.success(`<> React Next Boilerplate ready on localhost:${port}`);
})();
