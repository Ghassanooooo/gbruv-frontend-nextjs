import React from 'react';
import dynamic from 'next/dynamic';
import { getInfoPage, getFooterConfig, getNavbarConfig } from '../../shared/fetchers';
import useSWR from 'swr';
import { InfoPageEnum } from '../../components/Layout/Navbar/Navbar.types';
//const { data } = useSWR('/api/posts', fetcher, { initialData: props.posts })
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Info = ({ page, currentPath, backendApiURL, frontendURL }) => {
  const about = () => {
    const About = dynamic(import('../../infoComponents/about/about'));
    return <About page={page} />;
  };

  const infoContainer = () => {
    const InfoContainer = dynamic(import('../../infoComponents/container/container'));
    return <InfoContainer page={page} />;
  };

  const contact = () => {
    const Contact = dynamic(import('../../infoComponents/contact/contact'));
    return <Contact page={page} />;
  };
  const faq = () => {
    const Faq = dynamic(import('../../infoComponents/faq/faq'));
    return <Faq page={page} />;
  };

  const ourTeam = () => {
    const OurTeam = dynamic(import('../../infoComponents/OurTeam'));
    return <OurTeam page={page} />;
  };

  const renderInfoPage = () => {
    if (currentPath == InfoPageEnum.About) {
      return about();
    }
    if (currentPath == InfoPageEnum.Contact) {
      return contact();
    }
    if (currentPath == InfoPageEnum.QAndA) {
      return faq();
    }
    if (currentPath == InfoPageEnum.OurTeam) {
      return ourTeam();
    }
    return infoContainer();
  };
  return (
    <>
      <Layout backendApiURL={backendApiURL}>
        {!!page && (
          <LayoutSEOana frontendURL={frontendURL} page={page}>
            {page && renderInfoPage()}
          </LayoutSEOana>
        )}
      </Layout>
    </>
  );
};

export async function getServerSideProps(props: any) {
  const {
    asPath,

    query: { info },
  } = props;

  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  let infoPageURL = `${backendApiURL}info/${info}`;

  const page = await getInfoPage(infoPageURL);

  return {
    props: {
      infoPageURL,
      frontendURL,
      backendApiURL: backendApiURL,
      page,

      path: `${frontendURL}${asPath || null}`,
      currentPath: asPath || null,
    },
  };
}

export default Info;
getInfoPage;
