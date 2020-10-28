module.exports = {
  publicRuntimeConfig: {
    PROJECT_ROOT: __dirname,
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'all',
  },
};
