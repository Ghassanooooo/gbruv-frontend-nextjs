const createRobots = host => `
Sitemap: ${host}/sitemap.xml

User-agent: *
Allow: /*

Disallow: /api/*`;

const Robots = () => {};

export const getServerSideProps = async ({ res, req }) => {
  const { frontendURL } = process.env;

  const sitemap = createRobots(frontendURL);
  res.setHeader('Content-Type', 'text/plain');
  res.write(sitemap);
  res.end();
  return { props: {} };
};

export default Robots;
